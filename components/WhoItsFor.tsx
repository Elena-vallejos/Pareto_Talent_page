import { Container, Eyebrow, H2 } from "./ui";

const AUDIENCE = [
  { who: "Founder / CEO", text: "You\u2019re carrying too many responsibilities and need greater clarity." },
  { who: "Business Owner", text: "You want to spend more time on the work that actually moves the business forward." },
  { who: "Scaling Founder", text: "Your business is growing and your role needs to evolve with it." },
  { who: "Entrepreneur", text: "You want to understand your unique contribution before building more complexity." },
];

export function WhoItsFor() {
  return (
    <section id="for-founders" aria-labelledby="who-heading" className="scroll-mt-16 border-t border-plum/10 bg-paper py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Who it&rsquo;s for</Eyebrow>
          <H2 className="mt-5">
            <span id="who-heading">Built for Founders Who Are Ready to Think Differently About Their Role.</span>
          </H2>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {AUDIENCE.map((a) => (
            <li key={a.who} className="rounded-2xl border-2 border-plum/15 bg-cream p-7 sm:p-8">
              <h3 className="font-display text-2xl font-semibold tracking-tight">{a.who}</h3>
              <p className="mt-3 text-lg leading-relaxed text-plum/85">{a.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
