import { CtaLink } from "./CtaLink";
import { Check, Container, Cross, Eyebrow, H2, primaryButton } from "./ui";

const LOW = ["Too many tasks", "Constant context switching", "Doing everything", "Reactive decisions", "Team dependency"];
const HIGH = ["Clear priorities", "Deep focus", "Strategic contribution", "Better delegation", "Greater leverage"];

export function FounderProblem() {
  return (
    <section aria-labelledby="founder-heading" className="border-t border-plum/10 bg-paper py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>The founder problem</Eyebrow>
          <H2 className="mt-5">
            <span id="founder-heading">Founders Don&rsquo;t Usually Have a Lack of Potential.</span>
          </H2>
          <p className="mt-4 font-display text-2xl font-medium tracking-tight text-plum/80 sm:text-3xl">
            They often have a problem of allocation.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="rounded-2xl border-2 border-dashed border-plum/30 p-7 sm:p-9">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-plum/75">Low-value allocation</h3>
            <ul className="mt-6 space-y-4">
              {LOW.map((t) => (
                <li key={t} className="flex items-center gap-3 text-lg text-plum/75">
                  <Cross className="h-5 w-5 shrink-0 text-plum/50" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center" aria-hidden="true">
            <span className="font-display text-lg font-bold tracking-[0.2em] text-plum/60">VS</span>
          </div>

          <div className="rounded-2xl bg-plum p-7 text-cream sm:p-9">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-cream/80">High-value allocation</h3>
            <ul className="mt-6 space-y-4">
              {HIGH.map((t) => (
                <li key={t} className="flex items-center gap-3 text-lg font-medium">
                  <Check className="h-5 w-5 shrink-0 text-ember" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <CtaLink className={primaryButton} event="assessment_cta_clicked" props={{ location: "founder_problem" }}>
            Discover Your Pareto Talent
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
