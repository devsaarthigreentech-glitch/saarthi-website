import type { Metadata } from "next";
import GreenXPage from "@/components/Solutions/GreenX";
import {
  CLAIMS,
  COMPANY,
  DISCLAIMER,
  PHOTOS,
  PRODUCTS,
  ROUTES,
  TECHNOLOGY,
  VIDEOS,
  youtubeEmbedUrl,
  youtubePoster,
  youtubeWatchUrl,
} from "@/data/siteContent";

const url = `${COMPANY.url}${ROUTES.greenx}`;
const image = `${COMPANY.url}${PHOTOS.greenxWithDg.src}`;
const title = "GreenX — Controlled Hydrogen Fuel Assist for Diesel Generator Sets | SGT HydroEdge";
const description = `GreenX applies patented ${TECHNOLOGY.short} technology to DG sets: up to ${CLAIMS.greenx.fuelSavingPct}% fuel saving, ${CLAIMS.greenx.pm}, ${CLAIMS.greenx.nox}. Hydrogen made on demand, never stored. Installed in hours. ${DISCLAIMER}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: COMPANY.name,
    type: "website",
    images: [{ url: image, alt: PHOTOS.greenxWithDg.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: PRODUCTS.greenx.name,
  description: `${PRODUCTS.greenx.oneLiner} ${TECHNOLOGY.name} for diesel generator sets — hydrogen made on demand, never stored. ${CLAIMS.greenx.fuelSaving} fuel saving. ${DISCLAIMER}`,
  category: "Controlled Hydrogen Fuel Assist system for diesel generator sets",
  image,
  url,
  brand: { "@type": "Brand", name: COMPANY.name },
  manufacturer: { "@type": "Organization", name: COMPANY.name, url: COMPANY.url },
  countryOfOrigin: "IN",
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: VIDEOS.greenx.title,
  description: VIDEOS.greenx.description,
  thumbnailUrl: youtubePoster(VIDEOS.greenx.youtubeId),
  uploadDate: new Date(`${VIDEOS.greenx.date} UTC`).toISOString(),
  embedUrl: youtubeEmbedUrl(VIDEOS.greenx.youtubeId),
  contentUrl: youtubeWatchUrl(VIDEOS.greenx.youtubeId),
  publisher: { "@type": "Organization", name: COMPANY.name, url: COMPANY.url },
};

export default function GreenX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <GreenXPage />
    </>
  );
}
