import { TESTIMONIALS } from "@/lib/testimonials";
import { Container, Eyebrow, H2 } from "./ui";

/** Hidden until real testimonials are added in lib/testimonials.ts. */
export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;
  return (
    <section aria-labelledby="testimonials-heading" className="border-t border-plum/10 bg-paper py-20 lg:py-28">
      <Container>
        <Eyebrow>In their words</Eyebrow>
        <H2 className="mt-5">
          <span id="testimonials-heading">What Founders Say</span>
        </H2>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <li key={t.name}>
              <figure className="h-full rounded-2xl border-2 border-plum/15 bg-cream p-7">
                <blockquote className="text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 text-sm font-semibold">
                  {t.name}
                  <span className="font-normal text-plum/75">
                    {" "}
                    &middot; {t.role}
                    {t.company ? `, ${t.company}` : ""}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
