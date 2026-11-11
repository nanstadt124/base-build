import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { getSignedDownloadUrl } from "@/lib/storage";
import { sendDownloadEmail } from "@/lib/email";
import { product } from "@/lib/product";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    console.error("Webhook signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;

    if (email) {
      const downloadUrl = await getSignedDownloadUrl(product.fileName);
      await sendDownloadEmail(email, downloadUrl);
    } else {
      console.error("Checkout session completed with no email", session.id);
    }
  }

  return NextResponse.json({ received: true });
}
