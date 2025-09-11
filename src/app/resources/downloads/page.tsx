// src/app/resources/downloads/page.tsx
import Link from "next/link";
import DownloadsList from "@/components/Resources/DownloadsList";

export const metadata = {
  title: "Downloads — Saarthi GreenTech",
  description: "Brochures, fact sheets and downloads for Saarthi GreenTech",
};

export default function DownloadsPage() {
  const downloads = [
    // { id: "d1", title: "Saarthi GreenTech Overview (PDF)", href: "/downloads/overview.pdf" },
    // { id: "d2", title: "GreenDrive Brochure (PDF)", href: "/downloads/greendrive-brochure.pdf" },
    // { id: "d3", title: "GreenGen Fact Sheet (PDF)", href: "/downloads/greengen-factsheet.pdf" },
    // { id: "d4", title: "GreenVision Datasheet (PDF)", href: "/downloads/greenvision-datasheet.pdf" },
    { id: "d1", title: "Saarthi GreenDrive Neo Model Test Report Download", href: "/downloads/greendrive-neo-test-report.pdf" },
    { id: "d2", title: "Saarthi GreenDrive Nano Model Test Report Download", href: "/downloads/greendrive-nano-test-report.pdf" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Downloads</h1>
          <p className="mt-3 text-slate-200 max-w-2xl mx-auto">
            Brochures, fact sheets and technical datasheets for Saarthi products and solutions.
          </p>
          <div className="mt-6">
            <Link href="/resources" className="inline-block rounded-full bg-[var(--brand,#33A04A)] px-5 py-2 text-black font-semibold">Back to Resources</Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-extrabold mb-4">Available Downloads</h2>
          <p className="text-slate-600 mb-6">Click any item to download the PDF.</p>

          <DownloadsList items={downloads} />
        </div>
      </section>
    </main>
  );
}
