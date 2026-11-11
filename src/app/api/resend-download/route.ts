import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getSignedDownloadUrl } from "@/lib/storage";
import { sendDownloadEmail } from "@/lib/email";
import { product } from "@/lib/product";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();

  const results = await stripe.charges.search({
    query: `status:'succeeded' AND receipt_email:'${normalizedEmail}'`,
  });

  if (results.data.length === 0) {
    // Don't reveal whether the email matched a purchase, to avoid
    // leaking who has/hasn't bought the product.
    return NextResponse.json({ ok: true });
  }

  const downloadUrl = await getSignedDownloadUrl(product.fileName);
  await sendDownloadEmail(normalizedEmail, downloadUrl);

  return NextResponse.json({ ok: true });
}
