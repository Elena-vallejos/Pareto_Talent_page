import { CtaLink } from "./CtaLink";
import { Container, primaryButtonOnDark } from "./ui";

export function FinalCTA() {
  return (
    <section aria-labelledby="final-heading" className="bg-plum py-20 text-cream lg:py-28">
      <Container className="max-w-4xl text-center">
        <h2 id="final-heading" className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          Your Business Doesn&rsquo;t Need More of Everything.
        </h2>
        <p className="mt-5 font-display text-2xl font-medium tracking-tight text-cream/90 sm:text-3xl">
          It may need more of{" "}
          <span className="underline decoration-ember decoration-[0.09em] underline-offset-[0.14em]">what you do best</span>.
        </p>
        <div className="mt-10">
          <CtaLink className={primaryButtonOnDark} event="cta_clicked" props={{ location: "final_cta" }}>
            Get My Free Pareto Talent Guide
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
