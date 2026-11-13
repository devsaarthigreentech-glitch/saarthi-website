import type { Metadata } from "next";
import GreenEdgePage from "@/components/Solutions/GreenEdge";
import {
  CLAIMS,
  COMPANY,
  DISCLAIMER,
  GREENEDGE_GE12,
  PHOTOS,
  PRODUCTS,
  ROUTES,
  TECHNOLOGY,
} from "@/data/siteContent";

const url = `${COMPANY.url}${ROUTES.greenedge}`;
const image = `${COMPANY.url}${PHOTOS.greenedgeFurnace.src}`;
const title =
  "GreenEdge — Controlled Hydrogen Fuel Assist for Burners and Furnaces | SGT HydroEdge";
const description = `GreenEdge applies patented ${TECHNOLOGY.short} technology to industrial burners and furnaces on any hydrocarbon fuel — gas, oil, coal or biomass. Up to ${CLAIMS.greenedge.fuelSavingPct}% fuel saving. Hydrogen made on demand, never stored. ${DISCLAIMER}`;

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
    images: [{ url: image, alt: PHOTOS.greenedgeFurnace.alt }],
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
  name: `${PRODUCTS.greenedge.name} ${GREENEDGE_GE12.model}`,
  model: GREENEDGE_GE12.model,
  description: `${PRODUCTS.greenedge.oneLiner} ${GREENEDGE_GE12.power}, ${GREENEDGE_GE12.output}. ${CLAIMS.greenedge.fuelSaving} fuel saving. ${DISCLAIMER} ${CLAIMS.greenedge.emissions}`,
  category: "Controlled Hydrogen Fuel Assist system for industrial burners and furnaces",
  image,
  url,
  brand: { "@type": "Brand", name: COMPANY.name },
  manufacturer: { "@type": "Organization", name: COMPANY.name, url: COMPANY.url },
  countryOfOrigin: "IN",
};

export default function GreenEdge() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <GreenEdgePage />
    </>
  );
}
