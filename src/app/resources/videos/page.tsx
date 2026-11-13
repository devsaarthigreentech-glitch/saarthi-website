import type { Metadata } from "next";
import VideosSection from "@/components/Video/VideoSection";
import { COMPANY, ROUTES } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Videos — SGT HydroEdge",
  description:
    "Watch the SGT HydroEdge films: the corporate film, GreenDrive, GreenX and GreenMarine, plus media features on Controlled Hydrogen Fuel Assist (CHFA) Technology.",
  alternates: { canonical: `${COMPANY.url}${ROUTES.videos}` },
};

export default function VideoPage() {
  return (
    <main>
      <VideosSection />
    </main>
  );
}
