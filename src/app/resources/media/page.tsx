// src/app/resources/media/page.tsx
import Link from "next/link";
import MediaSection from "@/components/Resources/MediaSection/MediaSection"

export const metadata = {
  title: "Media & Press — Saarthi GreenTech",
  description: "Press mentions, videos and partner logos for Saarthi GreenTech",
};

export default function MediaPage() {
  const mediaLogos = [
    "/images/resources/press-1.png",
    "/images/resources/press-2.png",
    "/images/resources/press-3.png",
    "/images/resources/press-4.png",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Media & Press</h1>
          <p className="mt-3 text-slate-200 max-w-2xl mx-auto">
            Coverage, partner mentions and video features about Saarthi GreenTech.
          </p>
          <div className="mt-6">
            <Link href="/resources" className="inline-block rounded-full bg-[var(--brand,#33A04A)] px-5 py-2 text-black font-semibold">Back to Resources</Link>
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
