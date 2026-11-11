import Image from "next/image";

function PhotoBox({
  src,
  label,
  date,
}: {
  src: string;
  label: string;
  date: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg bg-zinc-100">
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={src}
          alt={label}
          fill
          sizes="(min-width: 640px) 420px, 50vw"
          className="object-cover"
        />
      </div>
      <p className="px-3 py-2 text-xs text-black">{date}</p>
    </div>
  );
}

export default function WhyMePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          My Transformation
        </h1>
      </div>

      <div className="mt-12">
        <p className="text-sm font-medium uppercase tracking-wide text-black">
          The First Build
        </p>
        <div className="mt-4 grid grid-cols-2 items-start gap-4">
          <PhotoBox src="/images/before.jpg" label="Before" date="July 2018" />
          <PhotoBox
            src="/images/first-build-after.jpg"
            label="After"
            date="May 2022"
          />
        </div>
      </div>

      <div className="mt-12">
        <p className="text-sm font-medium uppercase tracking-wide text-black">
          The Rebuild
        </p>
        <div className="mt-4 grid grid-cols-2 items-start gap-4">
          <PhotoBox
            src="/images/rebuild-before.jpg"
            label="Before"
            date="September 2022"
          />
          <PhotoBox
            src="/images/after-1.jpg"
            label="After"
            date="July 2026"
          />
        </div>
      </div>
    </div>
  );
}
