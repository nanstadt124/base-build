import Image from "next/image";
import Link from "next/link";
import BuyButton from "@/components/BuyButton";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center gap-8 px-6 py-32 text-center">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        The Base Build
      </h1>
      <p className="max-w-xl text-lg text-black">
        The plan that built me, then rebuilt me — now built for you.
      </p>

      <div className="relative aspect-[1179/783] w-full max-w-xl overflow-hidden rounded-2xl">
        <Image
          src="/images/after-1.jpg"
          alt="The Base Build"
          fill
          priority
          className="object-contain"
        />
      </div>

      <p className="max-w-xl text-base text-black">
        You&apos;ve had the dream for long enough. Now let&apos;s build it.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <BuyButton />
        <Link
          href="/the-program"
          className="text-sm font-medium text-black underline underline-offset-4 hover:text-black"
        >
          See what&apos;s inside
        </Link>
      </div>
    </div>
  );
}
