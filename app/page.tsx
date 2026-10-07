import { BenefitsSection } from "@/components/BenefitsSection";
import { Credibility } from "@/components/Credibility";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { FounderProblem } from "@/components/FounderProblem";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LeadMagnetSection } from "@/components/LeadMagnetSection";
import { Navbar } from "@/components/Navbar";
import { PageViewTracker } from "@/components/trackers";
import { ParetoExplanation } from "@/components/ParetoExplanation";
import { ParetoTalent } from "@/components/ParetoTalent";
import { ProblemSection } from "@/components/ProblemSection";
import { TestModeBanner } from "@/components/TestModeBanner";
import { Testimonials } from "@/components/Testimonials";
import { WhoItsFor } from "@/components/WhoItsFor";
import { FAQ } from "@/lib/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function Page() {
  return (
    <>
      <PageViewTracker />
      <Navbar />
      <main id="main">
        <Hero />
        <ProblemSection />
        <ParetoExplanation />
        <ParetoTalent />
        <FounderProblem />
        <BenefitsSection />
        <WhoItsFor />
        <HowItWorks />
        <LeadMagnetSection />
        <Credibility />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <TestModeBanner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
