import { Suspense } from "react";
import { stripe } from "@/lib/stripe";

async function SuccessMessage({
  searchParams,
}: {
  searchParams: PageProps<"/success">["searchParams"];
}) {
  const params = await searchParams;
  const sessionId =
    typeof params.session_id === "string" ? params.session_id : null;

  let email: string | null = null;
  if (sessionId) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      email = session.customer_details?.email ?? null;
    } catch {
      email = null;
    }
  }

  return (
    <p className="mt-4 text-black">
      {email
        ? `Check ${email} for your download link — it should arrive within a few minutes.`
        : "Check your email for your download link — it should arrive within a few minutes."}
    </p>
  );
}

export default function SuccessPage(props: PageProps<"/success">) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">You&apos;re in.</h1>
      <Suspense
        fallback={
          <p className="mt-4 text-black">
            Check your email for your download link — it should arrive
            within a few minutes.
          </p>
        }
      >
        <SuccessMessage searchParams={props.searchParams} />
      </Suspense>
      <p className="mt-2 text-sm text-black">
        Didn&apos;t get it?{" "}
        <a href="/resend" className="underline underline-offset-2">
          Resend the download link
        </a>
        .
      </p>
    </div>
  );
}
