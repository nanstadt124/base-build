export default function RefundPolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Refund Policy</h1>
      <div className="mt-8 space-y-4 text-base leading-relaxed text-black">
        <p>
          The Base Build is a digital product delivered immediately upon
          purchase. Because the file is accessible as soon as payment is
          processed, <strong>all sales are final and no refunds are
          offered</strong>, except where required by law.
        </p>
        <p>
          If you experience a technical issue receiving or accessing your
          download, contact us via the{" "}
          <a href="/contact" className="underline underline-offset-2">
            contact page
          </a>{" "}
          and we&apos;ll help resolve it.
        </p>
      </div>
    </div>
  );
}
