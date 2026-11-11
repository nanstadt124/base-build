"use client";

import { useState } from "react";

export default function ResendPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    await fetch("/api/resend-download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setStatus("done");
  }

  return (
    <div className="mx-auto max-w-md px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">
        Resend my download
      </h1>
      <p className="mt-4 text-black">
        Enter the email you used at checkout and we&apos;ll send a fresh
        download link if we find a matching purchase.
      </p>

      {status === "done" ? (
        <p className="mt-8 text-black">
          If that email matches a purchase, a new download link is on its
          way.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="rounded-md border border-zinc-300 px-4 py-2 text-sm"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send download link"}
          </button>
        </form>
      )}
    </div>
  );
}
