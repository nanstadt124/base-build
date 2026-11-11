import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST() {
  const siteUrl = process.env.SITE_URL!;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
    success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/the-program`,
  });

  return NextResponse.json({ url: session.url });
}
