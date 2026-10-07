# FP_MaraElenaVallejos_Pareto talent lead magnet: Landing page

Main landing page for the Pareto Talent lead magnet. Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS 3.
Deploys to Vercel with no extra configuration.

```
Visitor -> Landing page -> GoHighLevel form -> GHL workflow (contact, tags, opportunity, welcome email)
        -> Thank You / Assessment page (the other project)
```

**There is no backend and no private credential in this project.** The form is the official GoHighLevel
embed and submits directly to GoHighLevel. The page only displays it and reports analytics events.

## 1. Run it

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

It works out of the box: the embed URL defaults to your Pareto Talent lead form.

## 2. Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GHL_FORM_EMBED_URL` | `https://api.leadconnectorhq.com/widget/form/<FORM_ID>`. Public by design (it is the embed URL, not an API key). Defaults to `jzahKmKx3IEwHLE4Jri4`. |
| `NEXT_PUBLIC_TEST_MODE` | `true` shows a small **TEST MODE** badge and logs analytics + GHL messages to the console. Leave `false`/unset in production. |
| `NEXT_PUBLIC_SITE_URL` | Production domain (no trailing slash). Used for canonical URL, Open Graph, sitemap, robots. |
| `NEXT_PUBLIC_PRIVACY_URL`, `NEXT_PUBLIC_TERMS_URL`, `NEXT_PUBLIC_CONTACT_URL` | Footer links (`https://...` or `mailto:...`). Unset links point to `#`, so set them before launch. |

## 3. Deploy on Vercel

1. Push the project to GitHub, GitLab or Bitbucket.
2. Vercel > Add New > Project > import the repo (framework: Next.js is detected automatically).
3. Add the environment variables above (Production). Keep `NEXT_PUBLIC_TEST_MODE` unset or `false`.
   Use a separate Preview environment with `NEXT_PUBLIC_TEST_MODE=true` for testing.
4. Deploy, then add your custom domain and update `NEXT_PUBLIC_SITE_URL`. Redeploy.

## 4. GoHighLevel form integration

Where: `components/LeadForm.tsx` (look for `<!-- GOHIGHLEVEL FORM EMBED -->` / `{/* GOHIGHLEVEL FORM EMBED */}`).

**To use a different form:** copy the form's embed code from GHL (Sites > Forms > your form > Integrate / Embed) and
either paste only its `src` into `NEXT_PUBLIC_GHL_FORM_EMBED_URL`, or replace the `<iframe>` in `LeadForm.tsx`.
The form id, iframe id and `data-form-id` are derived from the URL automatically. `form_embed.js` is loaded once, lazily.

**Configure in GoHighLevel (not in this code):**

1. Form fields: First Name, Email Address, Company, Role (Founder / CEO, Co-Founder, Business Owner, Executive, Consultant, Other).
2. Form > Settings > **On submit: redirect to URL**: your Thank You / Assessment page. To personalize it, append:
   `?first_name={{contact.first_name}}&email={{contact.email}}&company={{contact.company_name}}&role={{contact.role}}`
   (the Thank You project reads those parameters). Check the option that makes the redirect leave the iframe (same tab);
   if the thank-you page appears *inside* the form box, change that setting.
3. Workflow (trigger: Form Submitted > this form): create/update contact, add tags `FP_ParetoTalent_Lead` and
   `FP_ParetoTalent_LeadMagnet`, create opportunity in pipeline `FP_MaraElenaVallejos_Pareto talent lead magnet`
   at stage `New Lead`, send the welcome email with the guide CTA.
4. Form submission is never intercepted: the page has no `<form>`, no `onSubmit`, no proxy.

## 5. Testing checklist

Run on a Vercel preview (or `npm run dev`) with `NEXT_PUBLIC_TEST_MODE=true`.

1. Open the landing page. (The TEST MODE badge is visible bottom-left.)
2. Enter a test first name.
3. Enter a test email.
4. Enter a test company.
5. Select **Founder / CEO**.
6. Submit.
7. Confirm the contact was created in GoHighLevel.
8. Confirm tag `FP_ParetoTalent_Lead`.
9. Confirm tag `FP_ParetoTalent_LeadMagnet`.
10. Confirm the opportunity was created.
11. Confirm pipeline `FP_MaraElenaVallejos_Pareto talent lead magnet`.
12. Confirm stage `New Lead`.
13. Confirm the welcome email arrived.
14. Confirm the email contains the lead magnet CTA.
15. Confirm the redirect to the Thank You / Assessment page.

Also check: every CTA scrolls to the form; mobile menu opens/closes (Escape closes it); the form loads on a phone;
production build shows no TEST MODE badge.

## 6. Analytics

`lib/analytics.ts` exposes `track(event, props)`. Adapters already forward to `dataLayer` (GTM), `gtag` (GA4) and
`fbq` (Meta Pixel) whenever those scripts exist on the page, so you can add them later (e.g. in `app/layout.tsx`) without
touching components. Use `registerAnalyticsAdapter()` for anything else, such as a GHL tracking snippet.
No credentials are needed in development; events are printed to the console.

| Event | When |
|---|---|
| `page_view` | Page loads |
| `hero_cta_clicked` | Primary hero CTA (`cta: "primary"`) |
| `assessment_cta_clicked` | "Discover Your Highest-Value Talent" (hero) and "Discover Your Pareto Talent" (founder problem) |
| `lead_magnet_section_viewed` | Form section is on screen (once) |
| `form_started` | Visitor clicks into the form |
| `form_submitted` | Best effort, see note below |
| `cta_clicked` | Other CTAs (navbar, final CTA), with `location` |

Note on `form_started` / `form_submitted`: the form lives in a cross-origin iframe, so the browser cannot see
inside it. `form_started` is detected when the iframe takes focus. `form_submitted` listens for messages posted by
GoHighLevel's embed script, and the exact message depends on your form: with TEST MODE on, every GHL message is
logged to the console so you can confirm. Because the form redirects on submit, the most reliable conversion
signal is the `page_view` on the Thank You page.

## 7. Content you should confirm

- `lib/faq.ts`: answers about the guide's length and contents are written conservatively; adjust to match the real PDF.
- Footer links (Privacy, Terms, Contact): set the three env variables.
- `lib/testimonials.ts`: empty on purpose. Add real, approved testimonials and the section appears automatically.
  Nothing on the page is invented: no names, logos, statistics or results.
- The hero 80/20 graphic is labeled "Illustration" and carries no data claim.

## 8. Structure

```
app/          layout (SEO, fonts), page, robots, sitemap, icons
components/   Navbar, Hero, ProblemSection, ParetoExplanation, ParetoTalent, FounderProblem, BenefitsSection,
              WhoItsFor, HowItWorks, LeadMagnetSection, LeadForm (GHL embed), Credibility, Testimonials,
              FAQSection, FinalCTA, Footer, TestModeBanner, CtaLink, trackers
lib/          config, analytics, faq, testimonials
public/       logos, og.png (1200x630 social image)
```

Performance notes: server-rendered sections, JavaScript only for the mobile menu and trackers, FAQ uses native
`<details>`, the GoHighLevel script and iframe load lazily, fonts via `next/font`, no animation libraries.
