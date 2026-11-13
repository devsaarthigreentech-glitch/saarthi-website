// src/app/resources/media/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import MediaSection from "@/components/Resources/MediaSection/MediaSection";
import { COMPANY, ROUTES } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Media & Press — SGT HydroEdge",
  description:
    "Press coverage, interviews and video features about SGT HydroEdge and its patented Controlled Hydrogen Fuel Assist (CHFA) Technology.",
  alternates: { canonical: `${COMPANY.url}${ROUTES.media}` },
};

export default function MediaPage() {

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Media & Press</h1>
          <p className="mt-3 text-slate-200 max-w-2xl mx-auto">
            Press coverage, interviews and video features about SGT HydroEdge.
          </p>
          <div className="mt-6">
            <Link href={ROUTES.downloads} className="inline-block rounded-full bg-[var(--brand,#33A04A)] px-5 py-2 text-black font-semibold">Brochures & downloads</Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-extrabold mb-6">Press & Features</h2>
          <p className="text-slate-600 mb-6">Selected news coverage and feature videos.</p>

          <MediaSection />
        </div>
      </section>
    </main>
  );
}
