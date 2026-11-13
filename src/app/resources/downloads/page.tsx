import type { Metadata } from "next";
import DownloadsClient from "./DownloadsClient";
import { COMPANY, ROUTES } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Downloads — SGT HydroEdge",
  description:
    "Download the latest GreenDrive and GreenX brochures (November 2026), the documents for Patent No. 582824, and peer-reviewed research published with ARAI.",
  alternates: { canonical: `${COMPANY.url}${ROUTES.downloads}` },
};

export default function DownloadsPage() {
  return <DownloadsClient />;
}
