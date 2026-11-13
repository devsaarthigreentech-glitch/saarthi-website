import type { Metadata } from "next";
import GreenMarinePage from "@/components/Solutions/GreenMarine";
import { COMPANY, ROUTES } from "@/data/siteContent";

const title = "GreenMarine — Marine Engines, the Next Frontier | SGT HydroEdge";
const description =
  "GreenMarine takes SGT HydroEdge's patented Controlled Hydrogen Fuel Assist (CHFA) platform to sea, for marine engines and onboard generators. First marine trial planned for 2027.";
const image = "/images/greenmarine/hero-marine.png";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title,
  description,
  alternates: { canonical: ROUTES.greenmarine },
  openGraph: {
    title,
    description,
    url: ROUTES.greenmarine,
    siteName: COMPANY.name,
    type: "website",
    images: [{ url: image, alt: "Container ship being guided into port by tugboats" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function GreenMarine() {
  return <GreenMarinePage />;
}
