// Drafted to cover the common angles for a digital fitness product.
// Not a substitute for review by a licensed attorney before launch.

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: "By purchasing or accessing The Base Build (\"the Program\"), you agree to be bound by these Terms of Service. If you do not agree, do not purchase or use the Program.",
  },
  {
    heading: "2. License to Use",
    body: "Your purchase grants you a personal, non-exclusive, non-transferable license to use the Program for your own individual purposes. You may not copy, redistribute, resell, publicly share, or otherwise make the Program available to anyone who has not purchased it. We reserve the right to revoke access for violation of this license.",
  },
  {
    heading: "3. Payment",
    body: "Payments are processed securely by Stripe, Inc. We do not collect or store your full payment card details on our own systems.",
  },
  {
    heading: "4. Delivery",
    body: "The Program is delivered digitally by email, typically within minutes of a successful purchase. It is your responsibility to provide a valid email address at checkout and to check your spam folder if a download link does not arrive. You may request a new download link at any time via the resend page.",
  },
  {
    heading: "5. Refunds",
    body: "All sales are final. See the Refund Policy for full details.",
  },
  {
    heading: "6. Health & Fitness Disclaimer — Please Read Carefully",
    body: "The Program provides general fitness and training information for educational purposes only. It is not medical advice, and it is not a substitute for consultation with a physician or other qualified healthcare provider. Exercise carries inherent risks, including but not limited to injury. By using the Program, you confirm that you are in good health and physical condition sufficient to participate in the activities it describes, or that you have consulted a doctor and obtained clearance to do so. You assume full responsibility for any risks, injuries, or damages, known or unknown, that may result from your use of the Program. If you experience pain, dizziness, or discomfort during exercise, stop immediately and seek medical attention. Do not use the Program if you have a medical condition that could be worsened by physical exercise without first consulting a doctor.",
  },
  {
    heading: "7. No Professional Relationship",
    body: "Any communication with us through the contact page, email, text, or phone is provided as general guidance and encouragement based on personal experience. It does not create a coaching, medical, dietetic, or other professional advisory relationship, and should not be treated as personalized medical, nutritional, or clinical advice.",
  },
  {
    heading: "8. Age Requirement",
    body: "The Program is intended for users 18 years of age or older. If you are under 18, you may use the Program only with the involvement and consent of a parent or legal guardian, who agrees to these Terms on your behalf.",
  },
  {
    heading: "9. Disclaimer of Warranties",
    body: "The Program is provided \"as is\" and \"as available,\" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee any specific results from using the Program.",
  },
  {
    heading: "10. Limitation of Liability",
    body: "To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of health, profits, or data, arising from your purchase or use of the Program, even if advised of the possibility of such damages. Our total liability for any claim relating to the Program is limited to the amount you paid for it.",
  },
  {
    heading: "11. Intellectual Property",
    body: "The Program, including its text, structure, and design, is our property and is protected by copyright. Your license to use it does not transfer any ownership rights.",
  },
  {
    heading: "12. Governing Law",
    body: "These Terms are governed by the laws of the Commonwealth of Pennsylvania, United States, without regard to conflict-of-law principles, unless otherwise required by the mandatory consumer protection laws of your own jurisdiction.",
  },
  {
    heading: "13. Changes to These Terms",
    body: "We may update these Terms from time to time. Changes will be posted on this page with an updated effective date. Continued use of the Program after changes are posted constitutes acceptance of the revised Terms.",
  },
  {
    heading: "14. Severability",
    body: "If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect.",
  },
  {
    heading: "15. Contact",
    body: "Questions about these Terms can be sent via the contact page.",
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Terms of Service
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
