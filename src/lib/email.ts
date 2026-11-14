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
      <p><a href="${downloadUrl}">Download your PDF</a></p>
      <p>This link expires in 1 hour — if it does, just grab a new one anytime
      at ${process.env.SITE_URL}/resend.</p>
      <p>Questions along the way? Reach out anytime — I read and answer every
      message myself.</p>
    `,
  });
}
