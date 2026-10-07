import { Container, Eyebrow } from "./ui";

export function Credibility() {
  return (
    <section aria-labelledby="idea-heading" className="py-20 lg:py-28">
      <Container>
        <Eyebrow>Built around a simple idea</Eyebrow>
        <h2 id="idea-heading" className="sr-only">
          Your time is limited. Your attention is limited. Your highest-value contribution is not.
        </h2>
        <p aria-hidden="true" className="mt-8 font-display text-3xl font-medium leading-[1.15] tracking-tight text-plum/70 sm:text-5xl lg:text-6xl">
          Your time is limited.
          <br />
          Your attention is limited.
          <br />
          <span className="font-semibold text-plum underline decoration-ember decoration-[0.07em] underline-offset-[0.16em]">
            Your highest-value contribution is not.
          </span>
        </p>
      </Container>
    </section>
  );
}
