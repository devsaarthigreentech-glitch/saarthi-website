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

// export const metadata = {
//   title: "GreenDrive — Hydrogen retrofits for commercial diesel engines | Saarthi GreenTech",
//   description: "GreenDrive by Saarthi GreenTech: hydrogen retrofit family for vans, trucks and buses — reduce emissions and save fuel.",
//   keywords: ["hydrogen retrofit", "GreenDrive", "Saarthi GreenTech", "diesel retrofit", "fleet decarbonisation"],
//   openGraph: {
//     title: "GreenDrive — Hydrogen retrofits for commercial engines",
//     description: "Cleaner engines for delivery vans, buses and heavy trucks — retrofit hydrogen systems that save fuel and cut emissions.",
//     url: "https://saarthigreentech.com/products/greendrive",
//     siteName: "Saarthi GreenTech",
//     images: [
//       {
//         url: "https://saarthigreentech.com/images/greendrive/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "GreenDrive product visual",
//       },
//     ],
//     type: "product",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "GreenDrive — Hydrogen retrofit family",
//     description: "Cleaner engines, measurable fuel savings. Explore GreenDrive models for every vehicle type.",
//     images: ["/images/greendrive/og-image.jpg"],
//   },
//   metadataBase: new URL("https://saarthigreentech.com"),
//   alternates: {
//     canonical: "/products/greendrive",
//   },
// };

// export default function Home() {
//   return (
//     <>
//       <ScrollUp />
//       <Hero />
//       <WhoWeAre />
//       <Solutions />
//       <BusinessModel />
//       <WhyChoose />
//       {/* <Features /> */}
//       <Video />
//       {/* <Brands /> */}
//       <AboutSectionOne />
//       <AboutSectionTwo />
//       <Applications />
//       {/* <Testimonials /> */}
//       <Results />
//       <GreenLabs />
//       {/* <RecognitionNews /> */}
//       {/* <Pricing /> */}
//       {/* <Blog /> */}
//       {/* <Vision /> */}
//       <ClosingCTA />
//       {/* <Footer /> */}
//       {/* <Contact /> */}
//     </>
//   );
// }


import Script from "next/script"; // 👈 add this

export const metadata = {
  title: "Saarthi GreenTech — Smart Hydrogen Retrofit Solutions",
  description: "Saarthi GreenTech provides hydrogen retrofits (GreenDrive, GreenGen, GreenMarine) and IoT (GreenVision) for practical, provable decarbonisation.",
  keywords: ["Saarthi GreenTech", "hydrogen retrofits", "GreenDrive", "GreenGen", "GreenMarine", "GreenVision", "ESG reporting"],
  openGraph: {
    title: "Saarthi GreenTech — Smart Hydrogen Retrofit Solutions",
    description: "Hydrogen retrofits and IoT for fleets, generators, and ships — practical, profitable and provable decarbonisation.",
    url: "https://saarthigreentech.com",
    siteName: "Saarthi GreenTech",
    images: [
      {
        url: "https://saarthigreentech.com/images/hero-illustration.png",
        width: 1200,
        height: 630,
        alt: "Saarthi GreenTech Hydrogen Retrofit Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saarthi GreenTech — Smart Hydrogen Retrofit Solutions",
    description: "Practical hydrogen retrofits + IoT ESG reporting tools. Reduce emissions, save fuel, prove ROI.",
    images: ["/images/og-home.jpg"],
  },
  metadataBase: new URL("https://saarthigreentech.com"),
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Saarthi GreenTech",
    url: "https://saarthigreentech.com",
    logo: "https://saarthigreentech.com/images/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/saarthi-greentech",
      "https://twitter.com/saarthigreentech"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"]
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://saarthigreentech.com",
    name: "Saarthi GreenTech",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://saarthigreentech.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* ✅ JSON-LD Scripts */}
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      {/* Your existing sections */}
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

