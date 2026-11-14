import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getSignedDownloadUrl } from "@/lib/storage";
import { product } from "@/lib/product";

export async function GET(
  _request: Request,
  { params }: RouteContext<"/go/[sessionId]">,
) {
  const { sessionId } = await params;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.redirect(new URL("/resend", process.env.SITE_URL));
    }

    const downloadUrl = await getSignedDownloadUrl(product.fileName);
    return NextResponse.redirect(downloadUrl);
  } catch {
    return NextResponse.redirect(new URL("/resend", process.env.SITE_URL));
  }
}
