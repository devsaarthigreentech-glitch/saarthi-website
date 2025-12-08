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

import Script from "next/script";
import CO2SavingsSection from "@/components/GreenVisionWidget";
import EvidenceStrip from "@/components/EvidenceStrip";
import EcosystemFlow from "@/components/EcosystemFlow";
import DaasSection from "@/components/DaaSSection";
import FoundingStory from "@/components/FoundingStorySection";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Saarthi Green — Smart Hydrogen Retrofit Solutions",
  description: "Saarthi Green provides hydrogen retrofits (GreenDrive, GreenX, GreenMarine) and IoT (GreenVision) for practical, provable decarbonisation.",
  keywords: ["Saarthi GreenTech", "hydrogen retrofits", "GreenDrive", "GreenX", "GreenMarine", "GreenVision", "ESG reporting"],
    icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/company_logo.png', // Optional: for iOS devices
  },
  openGraph: {
    title: "Saarthi Green — Smart Hydrogen Retrofit Solutions",
    description: "Hydrogen retrofits and IoT for fleets, generators, and ships — practical, profitable and provable decarbonisation.",
    url: "https://saarthigreen.com",
    siteName: "Saarthi Green",
    images: [
      {
        url: "https://saarthigreen.com/images/hero-illustration.png",
        width: 1200,
        height: 630,
        alt: "Saarthi Green Hydrogen Retrofit Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saarthi Green — Smart Hydrogen Retrofit Solutions",
    description: "Practical hydrogen retrofits + IoT ESG reporting tools. Reduce emissions, save fuel, prove ROI.",
    images: ["/images/og-home.jpg"],
  },
  metadataBase: new URL("https://saarthigreen.com"),
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Saarthi Green",
    url: "https://saarthigreen.com",
    logo: "https://saarthigreen.com/images/company_logo.png",
    sameAs: [
      "https://www.linkedin.com/company/saarthigreentech",
      "https://twitter.com/saarthigreen"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@saarthigreen.com",
      contactType: "Customer Support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"]
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://saarthigreen.com",
    name: "Saarthi Green",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://saarthigreen.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* ✅ JSON-LD Scripts */}
<Script 
  id="org-schema" 
  type="application/ld+json" 
  dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
  strategy="lazyOnload" // ⬅️ Add this
/>
<Script 
  id="website-schema" 
  type="application/ld+json" 
  dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
  strategy="lazyOnload" // ⬅️ Add this
/>
      {/* Your existing sections */}
      <ScrollUp />
      <Hero />
      <CO2SavingsSection />
      {/* <WhoWeAre /> */}
      <Solutions />
      <EvidenceStrip />
      <EcosystemFlow />
      <DaasSection />
      <FoundingStory />
      {/* <BusinessModel /> */}
      {/* <WhyChoose /> */}
      {/* <Features /> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Applications /> */}
      {/* <Testimonials /> */}
      {/* <Results /> */}
      {/* <GreenLabs /> */}
      {/* <RecognitionNews /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Vision /> */}
      {/* <FinalCTA /> */}
      {/* <ClosingCTA /> */}
      {/* <Footer /> */}
      {/* <Contact /> */}
    </>
  );
}

