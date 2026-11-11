import BuyButton from "@/components/BuyButton";

const insideItems = [
  "The full push, pull, legs training plan",
  "Exactly how to progress, and what to do when you stall",
  "How to set up your own training log",
];

const needItems = [
  "Access to any commercial gym",
  "A notebook or your phone to track your workouts (the PDF shows you how)",
  "The commitment to show up and follow the plan",
];

const forYouItems = [
  "You want to take action and finally build the body you've always dreamed of",
  "You're new to lifting, or you've been training without a plan that works",
  "You've bought programs before and quit after a couple of weeks",
  "You have access to a commercial gym",
  "You have the commitment for roughly 5 days a week in the gym for 45-60 minutes",
  "You want a plan you can run for years, not weeks",
];

export default function TheProgramPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          The Base Build
        </h1>
        <p className="mt-3 text-lg text-black">
          The simple, no-gimmick plan that built me, then rebuilt me. Built
          to run for years, not weeks.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            Three rules. That&apos;s it.
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-black">
            <li>
              Stick to the plan: hold yourself accountable, and continue to
              show up on the days you don&apos;t want to. Your future self
              will thank you.
            </li>
            <li>
              Progress every week: always strive to add a rep or some
              weight every session. You may not be able to every time, but
              always keep chasing.
            </li>
            <li>
              Eat to support it: Fuel your body with good/clean food to
              support all the hard work you are doing.
            </li>
          </ol>
          <p className="mt-4 text-base leading-relaxed text-black">
            I spent thousands of dollars on programs before I realized these
            three rules were what actually worked. Everything else was
            fluff.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            How it works
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-black">
            <p>
              The Base Build runs on a simple repeating cycle: push, pull,
              legs, rest. Three days of training, one day off, then repeat.
              That works out to about 5 sessions a week.
            </p>
            <p>
              Each session takes 45 to 60 minutes, so it fits around school,
              work, and life.
            </p>
            <p>
              There&apos;s no end date. As long as you&apos;re still
              progressing, you keep building.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            What&apos;s inside
          </h2>
          <p className="mt-4 text-base leading-relaxed text-black">
            One PDF with everything you need:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-black">
            {insideItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            What you&apos;ll need
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-black">
            {needItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-14 text-center">
        <h2 className="text-xl font-semibold tracking-tight">
          Is The Base Build right for you?
        </h2>

        <div className="mx-auto mt-6 max-w-xl text-left">
          <p className="font-medium text-black">It&apos;s for you if:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-base leading-relaxed text-black">
            {forYouItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto mt-14 max-w-2xl text-center">
        <p className="text-lg font-medium text-black">
          You&apos;ve read my story and seen my transformation. Now
          let&apos;s build yours.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <BuyButton />
          <span className="text-2xl font-semibold">$49.99</span>
        </div>

        <p className="mt-4 text-xs text-black">
          Delivered instantly by email after purchase. No refunds — see the{" "}
          <a href="/refund-policy" className="underline underline-offset-2">
            refund policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
