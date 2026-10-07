import { Container, Eyebrow, H2 } from "./ui";

const LOAD = ["The decisions.", "The strategy.", "The operations.", "The sales.", "The team problems.", "The details."];

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="border-t border-plum/10 bg-paper py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>The problem</Eyebrow>
          <H2 className="mt-5">
            <span id="problem-heading">You Can Be Busy and Still Be Under-Leveraged.</span>
          </H2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-plum/85">
            Founders often become the person who does everything.
          </p>
          <ul className="mt-6 max-w-sm divide-y divide-plum/10 border-y border-plum/10">
            {LOAD.map((item) => (
              <li key={item} className="py-3 font-display text-xl font-medium tracking-tight">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-plum/85">
            But not every task creates the same value. Some activities create disproportionate impact. Others simply
            consume your time.
          </p>
        </div>

        <div className="flex items-center">
          <blockquote className="w-full rounded-3xl border-2 border-plum bg-cream p-7 sm:p-10">
            <p className="text-base font-semibold uppercase tracking-[0.14em] text-plum/75">The question isn&rsquo;t</p>
            <p className="mt-2 font-display text-2xl leading-snug text-plum/60 line-through decoration-plum/40 decoration-2 sm:text-3xl">
              &ldquo;How can I do more?&rdquo;
            </p>
            <p className="mt-8 text-base font-semibold uppercase tracking-[0.14em] text-plum/75">It&rsquo;s</p>
            <p className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              &ldquo;Where do I create the{" "}
              <span className="underline decoration-ember decoration-[0.09em] underline-offset-[0.14em]">most value</span>?&rdquo;
            </p>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
