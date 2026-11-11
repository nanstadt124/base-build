const CONTACT_EMAIL = "nickanstadt@gmail.com";
const CONTACT_PHONE_DISPLAY = "(610) 716-4700";
const CONTACT_PHONE_TEL = "+16107164700";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-6 text-black">Questions? Reach out directly.</p>

      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mt-4 block text-lg font-medium underline underline-offset-4"
      >
        {CONTACT_EMAIL}
      </a>

      <a
        href={`tel:${CONTACT_PHONE_TEL}`}
        className="mt-3 block text-lg font-medium underline underline-offset-4"
      >
        {CONTACT_PHONE_DISPLAY}
      </a>

      <div className="mx-auto mt-12 max-w-xl space-y-4 text-left text-base leading-relaxed text-black">
        <p>
          Got a question? Ask me. Seriously, anything. Whether it&apos;s
          about your training, what you&apos;re eating, staying motivated,
          fitting workouts into a busy schedule, or something you&apos;re
          not even sure how to ask, I&apos;m here to help.
        </p>
        <p>
          No question is too basic and no topic is off-limits. I&apos;ve
          been the beginner who didn&apos;t know where to start, and
          I&apos;d rather you ask than stay stuck.
        </p>
        <p>
          Text, call, or email me anytime. I answer every message
          personally.
        </p>
      </div>
    </div>
  );
}
