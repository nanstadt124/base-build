const sections = [
  {
    heading: "Just a regular guy who had a dream",
    body: "I was the skinny kid watching bodybuilding videos, wondering if it could ever be me. I didn't have a coach, a special gift, or perfect genetics. I had a dream and, eventually, a plan. The Base Build is that plan, and it's what got me there.",
  },
  {
    heading: "This isn't my full-time job; it is simply my passion",
    body: "I'm not here to sell you a \"get fit quick\" plan; I'm here to help you create an improved version of yourself — the version you've always wanted to become. More often than not, the thing holding most people back is not knowing where to start, so let me do the thinking for you.",
  },
  {
    heading: "You'll have direct access to me",
    body: "When you buy The Base Build, you're not just getting a PDF. You're getting me. Text, call, or email me anytime with questions about training, nutrition, lifestyle, mindset, or anything else that's keeping you from making progress. You won't get a bot or an assistant. You'll get me.",
  },
];

export default function WhyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">
        Why learn from me?
      </h1>
      <p className="mt-6 text-base leading-relaxed text-black">
        I&apos;m a regular guy who wants to better myself, and I want to
        help others better themselves too. I&apos;ve been exactly where
        you are, and found a way out. Twice.
      </p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-lg font-semibold tracking-tight">
              {section.heading}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-black">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
