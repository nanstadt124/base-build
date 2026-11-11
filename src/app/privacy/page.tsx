// Drafted to cover the common angles for a small digital product business.
// Not a substitute for review by a licensed attorney before launch.

const sections = [
  {
    heading: "Information We Collect",
    body: "We collect only what's needed to deliver your purchase: the email address you provide at checkout, and basic transaction information (such as purchase date and amount) recorded by our payment processor, Stripe. We do not collect or store your full payment card number, CVV, or billing address on our own systems.",
  },
  {
    heading: "How We Use Your Information",
    body: "Your email is used to send your download link, your purchase receipt, and to respond if you request the link be resent. We do not send marketing emails unless you separately opt in, and we never sell or rent your information to third parties.",
  },
  {
    heading: "Third-Party Service Providers",
    body: "We use a small number of third-party services to operate this site: Stripe to process payments, Resend to deliver emails, and a cloud storage provider to host the downloadable file. Each of these providers processes your data solely to fulfill your order and maintains its own privacy policy governing how it handles data on our behalf.",
  },
  {
    heading: "Cookies & Analytics",
    body: "This site does not currently use cookies for advertising or tracking, and does not run third-party analytics. If that changes in the future, this policy will be updated to disclose it before any such tool is enabled.",
  },
  {
    heading: "Data Retention",
    body: "We retain your email and order information for as long as needed to support resending your download link, handling support questions, and complying with tax and accounting obligations. You may request deletion of your information at any time, subject to records we're legally required to keep (such as payment records).",
  },
  {
    heading: "Your Rights",
    body: "Depending on where you live, you may have the right to access, correct, or request deletion of your personal information, or to object to certain uses of it. To exercise any of these rights, contact us via the contact page and we will respond within a reasonable time.",
  },
  {
    heading: "Children's Privacy",
    body: "This site is not directed at children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, contact us and we will delete it.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
  },
  {
    heading: "Contact",
    body: "Questions about your data can be sent via the contact page.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-2 text-xs text-black">Last updated: 2026</p>

      <div className="mt-6 columns-1 gap-10 md:columns-2">
        {sections.map((section) => (
          <div key={section.heading} className="mb-5 break-inside-avoid">
            <h2 className="text-sm font-semibold text-black">
              {section.heading}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-black">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
