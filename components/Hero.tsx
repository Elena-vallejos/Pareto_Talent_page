import { CtaLink } from "./CtaLink";
import { HeroVisual } from "./HeroVisual";
import { Container, Eyebrow, primaryButton, secondaryButton } from "./ui";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pb-16 pt-10 sm:pt-14 lg:pb-28 lg:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Eyebrow>Pareto Talent</Eyebrow>
          <h1
            id="hero-heading"
            className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.25rem]"
          >
            Stop Doing More.{" "}
            <span className="underline decoration-ember decoration-[0.09em] underline-offset-[0.14em]">
              Start Doing More of What Matters.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-plum/85 sm:text-xl">
            Discover where your unique strengths create the most value&mdash;and where your business may be asking you to
            spend energy that could be better leveraged.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink className={primaryButton} event="hero_cta_clicked" props={{ cta: "primary" }}>
              Get the Free Pareto Talent Guide
            </CtaLink>
            <CtaLink className={secondaryButton} event="assessment_cta_clicked" props={{ location: "hero" }}>
              Discover Your Highest-Value Talent
            </CtaLink>
          </div>

          <p className="mt-8 max-w-md border-l-2 border-ember pl-4 text-base leading-relaxed text-plum/85">
            Built for founders, CEOs and business owners who want more leverage&mdash;not more busyness.
          </p>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
