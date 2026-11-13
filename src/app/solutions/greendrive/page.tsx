import type { Metadata } from "next";
import GreenDrivePage from "@/components/Solutions/GreenDrive";
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

const gd = CLAIMS.greendrive;
const pageUrl = `${COMPANY.url}${ROUTES.greendrive}`;
const imageUrl = `${COMPANY.url}${PHOTOS.greendriveUnit.src}`;

const title = `GreenDrive — Hydrogen Fuel Assist for Diesel Vehicles | ${COMPANY.name}`;
const description = `${PRODUCTS.greendrive.oneLiner} ${gd.fuelSaving} fuel saving, ${gd.pm}, ${gd.nox}, ${gd.kmLabel}. Hydrogen made on demand, never stored. ${DISCLAIMER}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: COMPANY.name,
    title,
    description,
    images: [{ url: imageUrl, alt: PHOTOS.greendriveUnit.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: PRODUCTS.greendrive.name,
  description: `${PRODUCTS.greendrive.oneLiner} Built on patented ${TECHNOLOGY.name} (${TECHNOLOGY.short}) Technology: hydrogen made from water on demand, never stored. ${gd.fuelSaving} fuel saving. ${DISCLAIMER}`,
  category: PRODUCTS.greendrive.segment,
  url: pageUrl,
  image: imageUrl,
  brand: { "@type": "Brand", name: COMPANY.name },
  manufacturer: { "@type": "Organization", name: COMPANY.name, url: COMPANY.url },
  countryOfOrigin: { "@type": "Country", name: "India" },
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: VIDEOS.greendrive.title,
  description: VIDEOS.greendrive.description,
  thumbnailUrl: youtubePoster(VIDEOS.greendrive.youtubeId),
  uploadDate: new Date(`${VIDEOS.greendrive.date} UTC`).toISOString().slice(0, 10),
  embedUrl: youtubeEmbedUrl(VIDEOS.greendrive.youtubeId),
  contentUrl: youtubeWatchUrl(VIDEOS.greendrive.youtubeId),
  publisher: { "@type": "Organization", name: COMPANY.name, url: COMPANY.url },
};

export default function GreenDrive() {
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
      <GreenDrivePage />
    </>
  );
}
