import { cx } from "@/lib/cx";
import { Container, Eyebrow, H2 } from "./ui";

const BENEFITS = [
  { title: "Where you create the most value", text: "Identify the activities where your contribution matters most." },
  { title: "What may be draining your leverage", text: "Recognize tasks and responsibilities that may be consuming disproportionate energy." },
  { title: "Where to focus", text: "Clarify where your attention can create greater impact." },
  { title: "What to delegate", text: "Identify areas that may not require your highest-value contribution." },
  { title: "How to think about your next level", text: "Use a simple framework to think more strategically about your role." },
];

export function BenefitsSection() {
  return (
    <section aria-labelledby="benefits-heading" className="py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Inside the guide</Eyebrow>
          <H2 className="mt-5">
            <span id="benefits-heading">What You&rsquo;ll Discover Inside the Guide</span>
          </H2>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {BENEFITS.map((b, i) => (
            <li
              key={b.title}
              className={cx(
                "rounded-2xl border-2 border-plum/15 bg-paper p-7 transition-colors hover:border-plum",
                i < 3 ? "lg:col-span-2" : "lg:col-span-3",
                i === 4 && "md:col-span-2"
              )}
            >
              <span aria-hidden="true" className="h-1 w-10 bg-ember block" />
              <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.14em]">{b.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-plum/85">{b.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
