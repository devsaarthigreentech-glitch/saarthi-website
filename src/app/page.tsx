import type { Metadata } from "next";
import Home from "@/components/Home";
import ScrollUp from "@/components/Common/ScrollUp";
import {
  COMPANY,
  LINES,
  TECHNOLOGY,
  VIDEOS,
  youtubeEmbedUrl,
  youtubePoster,
} from "@/data/siteContent";

const title = "SGT HydroEdge — Decarbonisation Infrastructure for Engines, Burners and Furnaces";
const description = `${LINES.positioning} ${LINES.heroSub}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: COMPANY.url,
    siteName: COMPANY.name,
    type: "website",
    images: [{ url: "/images/nov26/greendrive-quarry-truck.webp", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/nov26/greendrive-quarry-truck.webp"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  url: COMPANY.url,
  logo: `${COMPANY.url}/images/logo/company_logo.png`,
  description: `${COMPANY.name} is a ${COMPANY.positioning} company. Patented ${TECHNOLOGY.name} (${TECHNOLOGY.short}) Technology — hydrogen made on demand, never stored.`,
  foundingDate: "2023-09-11",
  founder: { "@type": "Person", name: COMPANY.founder.name, jobTitle: COMPANY.founder.title },
  email: COMPANY.email,
  sameAs: [COMPANY.linkedin, COMPANY.youtubeChannel],
};

const filmJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: VIDEOS.corporate.title,
  description: VIDEOS.corporate.description,
  thumbnailUrl: youtubePoster(VIDEOS.corporate.youtubeId),
  uploadDate: "2026-11-11",
  embedUrl: youtubeEmbedUrl(VIDEOS.corporate.youtubeId),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(filmJsonLd) }}
      />
      <ScrollUp />
      <Home />
    </>
  );
}
