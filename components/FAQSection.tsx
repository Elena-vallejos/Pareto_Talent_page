import { FAQ } from "@/lib/faq";
import { Container, Eyebrow, H2 } from "./ui";

export function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-16 border-t border-plum/10 bg-paper py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <H2 className="mt-5">
            <span id="faq-heading">Questions, Answered</span>
          </H2>
        </div>

        <div className="divide-y divide-plum/15 border-y border-plum/15">
          {FAQ.map((item) => (
            <details key={item.question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-xl font-medium leading-snug tracking-tight focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ember">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="relative h-6 w-6 shrink-0 before:absolute before:left-1/2 before:top-1/2 before:h-0.5 before:w-4 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-plum after:absolute after:left-1/2 after:top-1/2 after:h-4 after:w-0.5 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-plum after:transition-transform group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-2xl pb-6 pr-10 text-lg leading-relaxed text-plum/85">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
