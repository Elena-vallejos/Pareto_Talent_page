import { Container, Eyebrow, H2 } from "./ui";

const CARDS = [
  { label: "Your strengths", text: "What do you naturally do exceptionally well?" },
  { label: "Your leverage", text: "Where does your contribution create disproportionate impact?" },
  { label: "Your focus", text: "What deserves more of your time\u2014and what should you stop carrying alone?" },
];

export function ParetoTalent() {
  return (
    <section aria-labelledby="talent-heading" className="py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Pareto Talent</Eyebrow>
          <H2 className="mt-5">
            <span id="talent-heading">Your Highest-Value Talent Is a Leverage Point.</span>
          </H2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-plum/85">
            Your highest-value talent isn&rsquo;t simply what you&rsquo;re good at. It&rsquo;s where your strengths,
            experience, judgment and unique contribution come together to create meaningful value.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {CARDS.map((c) => (
            <li key={c.label} className="flex flex-col rounded-2xl border-2 border-plum/15 bg-paper p-7 transition-colors hover:border-plum">
              <span aria-hidden="true" className="h-1 w-10 bg-ember" />
              <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.16em]">{c.label}</h3>
              <p className="mt-3 font-display text-2xl font-medium leading-snug tracking-tight">{c.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
