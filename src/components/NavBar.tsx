"use client";

import Link from "next/link";
import { useState } from "react";
import BuyButton from "@/components/BuyButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/my-story", label: "My Story" },
  { href: "/why-me", label: "My Transformation" },
  { href: "/why", label: "Why Me" },
  { href: "/the-program", label: "The Program" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-300 bg-zinc-300/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-bold tracking-tight text-black">
          The Base Build
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-black transition-colors hover:text-zinc-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <BuyButton />
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-sm font-bold text-black md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-zinc-500 px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-bold text-black"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <BuyButton />
          </div>
        </nav>
      )}
    </header>
  );
}
