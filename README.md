# The Base Build

Single-product digital sales site. Next.js + Stripe Checkout + Resend email
delivery. No database — Stripe is the system of record for orders.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Copy env file**

   ```bash
   cp .env.example .env.local
   ```

3. **Stripe**
   - Create a Stripe account and switch to test mode.
   - Create one Product with one Price (one-time, not recurring) for The
     Base Build. Copy the price ID into `STRIPE_PRICE_ID`.
   - Copy your test secret key into `STRIPE_SECRET_KEY`.
   - Install the Stripe CLI and run `stripe listen --forward-to
     localhost:3000/api/webhook` locally; it prints a webhook signing secret
     — put that in `STRIPE_WEBHOOK_SECRET`. In production, create a webhook
     endpoint in the Stripe dashboard pointed at
     `https://yourdomain.com/api/webhook` listening for
     `checkout.session.completed`, and use **that** endpoint's signing
     secret.

4. **Resend**
   - Create a Resend account, verify the sending domain (nickanstadt.com),
     and create an API key → `RESEND_API_KEY`.
   - Set `EMAIL_FROM` to an address on your verified domain.

5. **File storage**
   - Create a Cloudflare R2 bucket (or any S3-compatible bucket).
   - Upload the real PDF under the exact key set in
     `src/lib/product.ts` (`fileName`, currently `the-base-build.pdf`).
   - Create an access key scoped to that bucket, fill in
     `STORAGE_ENDPOINT`, `STORAGE_ACCESS_KEY_ID`, `STORAGE_SECRET_ACCESS_KEY`,
     `STORAGE_BUCKET`.
   - **Important:** the bucket must NOT be publicly readable — access is
     only via the short-lived signed URLs this app generates.

6. **Run locally**

   ```bash
   npm run dev
   ```

## Content still to fill in (marked `[Placeholder]` / `PLACEHOLDER` in code)

- Hero/story copy: `src/app/page.tsx`, `src/app/my-story/page.tsx`
- Program details + price: `src/app/the-program/page.tsx`
- Credibility content: `src/app/why-me/page.tsx`
- FAQ entries: `src/app/faq/page.tsx`
- Contact email: `src/app/contact/page.tsx`
- Cover/product images (not yet added)
- Terms/Privacy pages are generic drafts — have them reviewed before launch

## Deploying

- Push to GitHub, import the repo into Vercel.
- Set all `.env.example` variables as Environment Variables in the Vercel
  project settings, with `SITE_URL` set to the real production domain
  (`https://nickanstadt.com`).
- Point the `nickanstadt.com` DNS records at Vercel (Vercel's dashboard
  gives exact records once you add the domain to the project).
- Add the production webhook endpoint in Stripe as described above —
  local `stripe listen` only works for local dev.
