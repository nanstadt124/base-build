import { Resend } from "resend";
import { product } from "@/lib/product";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendDownloadEmail(to: string, downloadUrl: string) {
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to,
    subject: `Your download: ${product.name}`,
    html: `
      <p>Thanks for picking up <strong>${product.name}</strong>.</p>
      <p><a href="${downloadUrl}">Click here to download your file</a>.</p>
      <p>This link expires in 1 hour. If it expires, you can request a new one
      anytime at ${process.env.SITE_URL}/resend using the same email address.</p>
    `,
  });
}
