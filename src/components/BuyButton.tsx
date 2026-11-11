"use client";

import { useState } from "react";

export default function BuyButton({ className = "" }: { className?: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`inline-flex items-center justify-center rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-60 ${className}`}
    >
      {loading ? "Redirecting…" : "Buy The Base Build"}
    </button>
  );
}
