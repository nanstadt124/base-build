import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-xs text-black sm:flex-row sm:justify-between">
        <p>&copy; {currentYear} The Base Build.</p>
        <div className="flex gap-4">
          <Link href="/terms" className="hover:text-zinc-800">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-zinc-800">
            Privacy
          </Link>
          <Link href="/refund-policy" className="hover:text-zinc-800">
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
