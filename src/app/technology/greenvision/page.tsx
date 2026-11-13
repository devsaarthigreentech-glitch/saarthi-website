import type { Metadata } from "next";
import GreenVisionPlatformPage from "@/components/New-GreenVision";
import { COMPANY, ROUTES, VIDEOS, youtubePoster } from "@/data/siteContent";

const title = `GreenVision — Decarbonisation You Can Measure | ${COMPANY.name}`;
const description =
  "Every truck has a story. GreenVision reads it. A cloud platform over 4G showing fuel saved, CO₂ avoided, system health and real-time alerts — with ESG/BRSR reporting, MRV-ready for carbon credits.";
const url = `${COMPANY.url}${ROUTES.greenvision}`;
const image = youtubePoster(VIDEOS.greendrive.youtubeId);

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
    images: [{ url: image, alt: VIDEOS.greendrive.title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function GreenVision() {
  return <GreenVisionPlatformPage />;
}
