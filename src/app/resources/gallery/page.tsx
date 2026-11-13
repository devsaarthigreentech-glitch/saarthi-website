import type { Metadata } from "next";
import GallerySection from "@/components/Resources/Gallery/GallerySection";
import { COMPANY, ROUTES } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Gallery — SGT HydroEdge",
  description:
    "Pictures of SGT HydroEdge systems and how they are fitted — GreenEdge on burners and furnaces, GreenX on diesel generator sets, GreenDrive on diesel vehicles — plus events and awards.",
  alternates: { canonical: `${COMPANY.url}${ROUTES.gallery}` },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <GallerySection />
    </main>
  );
}
