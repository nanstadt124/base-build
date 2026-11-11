const paragraphs: string[] = [
  "I have been active my entire life, being a competitive swimmer since the age of four. But at 5’10” and 140lbs, I was nowhere near the physique I wanted. I watched bodybuilding videos for hours, convinced you had to live in the gym to look like that.",
  "When a close friend invited me to lift with him at the gym, I said no. Then it hit me: watching videos was never going to build a single pound of muscle. That first pull day left me too sore to straighten my arms, and I was hooked.",
  "Hooked, but not consistent. For about a year, I spent thousands of dollars on program after program, saw nothing after a couple of weeks, and quit each one. The problem was never the programs. It was me.",
  "The breaking point came at a party, when a guy I hadn’t seen in a while looked me up and down and told me, flatly, that I hadn’t changed at all. It haunted me for weeks. So I stripped every program I’d bought down to what actually worked and built something simple: stick to the plan, add a rep or a pound every session, and eat to support it. No more switching after two weeks.",
  "Four months later, that same guy told me I was getting big. 4 years later, I’d gone from 140lbs to 190lbs.",
  "Then, in 2022, an autoimmune disease I’d managed for years flared without warning. I spent a week in the hospital with my colon failing, followed by months stuck in bed. I lost everything I had built, and then some, dropping to 125lbs, 15lbs lighter than when I first started. I was broken, physically and mentally.",
  "Rebuilding wasn’t starting from zero. I had the plan, and I had years of proof that it worked. Today I’m 200lbs and leaner than I’ve ever been.",
  "This isn’t a 12-week gimmick. It’s the plan that built me, then rebuilt me. Now it’s yours.",
];

export default function MyStoryPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">My Story</h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-black">
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
