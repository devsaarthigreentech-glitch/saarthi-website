import type { Metadata } from "next";
import CHFATechnologyPage from "@/components/CHFA/page";
import { COMPANY, PHOTOS, ROUTES, TECHNOLOGY } from "@/data/siteContent";

const title = `${TECHNOLOGY.full} | ${COMPANY.name}`;
const description =
  "Patented Controlled Hydrogen Fuel Assist Technology: hydrogen made from water, on demand, with nothing stored — dosed precisely as a combustion booster for engines, and for burners and furnaces.";
const url = `${COMPANY.url}${ROUTES.chfa}`;
const image = `${COMPANY.url}${PHOTOS.greendriveUnit.src}`;

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
    images: [{ url: image, alt: PHOTOS.greendriveUnit.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function CHFA() {
  return <CHFATechnologyPage />;
}
