import { Resend } from "resend";
import { product } from "@/lib/product";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendDownloadEmail(to: string, downloadUrl: string) {
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to,
    subject: `Your download: ${product.name}`,
    html: `
      <p>You&rsquo;ve got the plan. Now it&rsquo;s on you to show up.</p>
      <p><a href="${downloadUrl}">Download The Base Build</a></p>
      <p>Three rules: stick to it, progress every week, eat to support it.
      That&rsquo;s it. I&rsquo;ve spent years trying to figure it out, so you
      don&rsquo;t have to. Now let&rsquo;s build.</p>
      <p>Stuck or have a question? Text, call, or email me &mdash;
      (610) 716-4700 / nickanstadt@gmail.com. I answer personally.</p>
    `,
  });
}
