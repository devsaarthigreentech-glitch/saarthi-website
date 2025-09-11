import GlobalChallenge from "@/components/GreenVision/GlobalChallenge";
import Advantage from "@/components/GreenVision/Advantage";
import Results from "@/components/GreenVision/Results";
import Applications from "@/components/GreenVision/Applications";
import Strategic from "@/components/GreenVision/Strategic";
import CTA from "@/components/GreenVision/CTA";
import Hero from "@/components/GreenVision/Hero";
import WhyGreenVision from "@/components/GreenVision/WhyGreenVision";

export default function GreenVisionPage() {
  return (
    <main>
      <Hero />
      <GlobalChallenge />
      <Advantage />
      <Results />
      <Applications />
      <WhyGreenVision />
      <Strategic />
      <CTA />
    </main>
  );
}
