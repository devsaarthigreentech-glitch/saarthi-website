import type { Metadata } from "next";
import SgtOsPage from "@/components/Technology/SgtOs";
import { COMPANY, PHOTOS, ROUTES } from "@/data/siteContent";

const title = `SGT OS — The Control Layer | ${COMPANY.name}`;
const description =
  "Control is the technology. SGT OS handles safety checks, load-following hydrogen dosing, the on-site Bluetooth app, logs and remote support — designed in-house and built in India.";
const url = `${COMPANY.url}${ROUTES.sgtos}`;
const image = `${COMPANY.url}${PHOTOS.sgtOsController.src}`;

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
    images: [{ url: image, alt: PHOTOS.sgtOsController.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function SgtOs() {
  return <SgtOsPage />;
}
