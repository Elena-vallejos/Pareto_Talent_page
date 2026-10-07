import Image from "next/image";
import { FORM_SECTION_ID } from "@/lib/config";
import { LeadForm } from "./LeadForm";
import { ViewTracker } from "./trackers";
import { Check, Container, Eyebrow, H2 } from "./ui";

const POINTS = [
  "Identify your highest-value contribution",
  "Recognize where your energy creates the most impact",
  "Identify activities that may be better delegated",
  "Clarify where to focus",
  "Think more strategically about your role as a founder",
];

export function LeadMagnetSection() {
  return (
    <section id={FORM_SECTION_ID} aria-labelledby="guide-heading" className="scroll-mt-16 bg-plum py-16 sm:py-20 lg:py-28">
      <ViewTracker targetId={FORM_SECTION_ID} event="lead_magnet_section_viewed" />
      <Container>
        <div className="overflow-hidden rounded-3xl bg-cream lg:grid lg:grid-cols-2">
          <div className="p-7 sm:p-12">
            <Eyebrow>Free guide</Eyebrow>
            <H2 className="mt-5">
              <span id="guide-heading">Get the Free Pareto Talent Guide</span>
            </H2>
            <p className="mt-5 text-lg leading-relaxed text-plum/85">
              Discover where your unique strengths can create the greatest leverage in your business.
            </p>

            <ul className="mt-8 space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-lg leading-snug">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember text-plum">
                    <Check className="h-4 w-4" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div aria-hidden="true" className="mt-10 hidden items-center gap-4 lg:flex">
              <div className="flex aspect-[3/4] w-24 flex-col justify-between rounded-md bg-plum p-3 shadow-md">
                <Image src="/logo-cream.png" alt="" width={28} height={28} />
                <span className="font-display text-[0.8rem] font-semibold leading-tight text-cream">The Pareto Talent Guide</span>
              </div>
              <p className="max-w-[14rem] text-sm text-plum/75">Delivered to your inbox as soon as you submit the form.</p>
            </div>
          </div>

          <div className="border-t border-plum/10 bg-paper p-7 sm:p-12 lg:border-l lg:border-t-0">
            <h3 className="font-display text-2xl font-semibold tracking-tight">Where should we send your guide?</h3>
            <div className="mt-5">
              <LeadForm />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-plum/75">
              Your information is used only to send you the guide and the follow-up steps.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
