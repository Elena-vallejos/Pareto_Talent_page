import { Container, Eyebrow, H2 } from "./ui";

const STEPS = [
  { title: "Tell Us Where You Are", text: "Complete the short form." },
  { title: "Get Your Pareto Talent Guide", text: "Receive the guide directly in your email." },
  { title: "Identify Your Leverage", text: "Use the framework to think about your strengths, focus and contribution." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="scroll-mt-16 py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>How it works</Eyebrow>
          <H2 className="mt-5">
            <span id="how-heading">Three Simple Steps</span>
          </H2>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative border-t-2 border-plum pt-6">
              <span className="font-display text-5xl font-semibold leading-none text-ember" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight">
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-plum/85">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
