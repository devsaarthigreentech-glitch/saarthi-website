import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import WhoWeAre from '@/components/WhoWeAre'
import Solutions from "@/components/Solutions"
import BusinessModel from "@/components/BusinessModel"
import { Metadata } from "next";
import WhyChoose from "@/components/WhyChoose";
import Applications from "@/components/Applications";
import Results from "@/components/Results";
import GreenLabs from "@/components/GreenLabSection";
import RecognitionNews from "@/components/RecognitionNews";
import Vision from "@/components/Vision";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Saarthi GreenTech",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <WhoWeAre />
      <Solutions />
      <BusinessModel />
      <WhyChoose />
      {/* <Features /> */}
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Applications />
      {/* <Testimonials /> */}
      <Results />
      <GreenLabs />
      {/* <RecognitionNews /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Vision /> */}
      <ClosingCTA />
      {/* <Footer /> */}
      {/* <Contact /> */}
    </>
  );
}
