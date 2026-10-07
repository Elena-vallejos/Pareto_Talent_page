import { ArrowDown, Container, Eyebrow, H2 } from "./ui";

const FLOW = [
  { label: "Inputs", note: "Everything you spend time and energy on" },
  { label: "Focus", note: "Choosing what deserves your attention" },
  { label: "Leverage", note: "Where your contribution multiplies" },
  { label: "Outcomes", note: "The results that follow" },
];

export function ParetoExplanation() {
  return (
    <section id="why" aria-labelledby="pareto-heading" className="scroll-mt-16 bg-plum py-20 text-cream lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Eyebrow tone="light">The Pareto idea</Eyebrow>
          <H2 tone="light" className="mt-5">
            <span id="pareto-heading">The 80/20 Principle Is More Than a Number.</span>
          </H2>
          <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed text-cream/90">
            <p>
              In many areas of business, a small number of inputs create a disproportionately large share of the results.
              The challenge is identifying which inputs matter most for <em className="not-italic font-semibold text-cream">you</em>.
            </p>
            <p>Pareto Talent applies this way of thinking to the founder&rsquo;s role:</p>
          </div>
          <p className="mt-6 max-w-xl border-l-2 border-ember pl-5 font-display text-2xl font-medium leading-snug tracking-tight sm:text-[1.75rem]">
            What are the things you uniquely do that create disproportionate value?
          </p>
        </div>

        <ol aria-label="From inputs to outcomes" className="mx-auto w-full max-w-md">
          {FLOW.map((step, i) => (
            <li key={step.label}>
              <div
                className="rounded-2xl border border-cream/25 bg-cream/[0.06] px-6 py-5"
                style={{ marginInline: `${i * 1.25}rem` }}
              >
                <p className="font-display text-xl font-semibold uppercase tracking-[0.12em]">{step.label}</p>
                <p className="mt-1 text-[0.9375rem] text-cream/80">{step.note}</p>
              </div>
              {i < FLOW.length - 1 && (
                <div className="flex justify-center py-2 text-ember" aria-hidden="true">
                  <ArrowDown />
                </div>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
