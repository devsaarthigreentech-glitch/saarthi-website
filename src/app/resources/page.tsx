import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, ROUTES } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Resources — SGT HydroEdge",
  description:
    "SGT HydroEdge resources: savings calculator, gallery, media, videos, downloads, knowledge base, and training and certification.",
  alternates: { canonical: `${COMPANY.url}${ROUTES.downloads}` },
};

const sections = [
  { href: ROUTES.calculator, title: "Savings Calculator", text: "Estimate what you could save on fuel." },
  { href: ROUTES.gallery, title: "Gallery", text: "How our systems look and how they are fitted." },
  { href: ROUTES.media, title: "Media", text: "Press coverage, interviews and features." },
  { href: ROUTES.videos, title: "Videos", text: "The SGT HydroEdge films." },
  { href: ROUTES.downloads, title: "Downloads", text: "Brochures, patent documents and research papers." },
  { href: ROUTES.knowledgebase, title: "Knowledge Base", text: "How Controlled Hydrogen Fuel Assist works." },
  { href: ROUTES.certification, title: "Training & Certification", text: "Training for installers and partners." },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="py-24 text-center bg-slate-900 text-white">
        <h1 className="text-4xl font-extrabold mb-4">Resources</h1>
        <p className="text-lg text-slate-200 max-w-2xl mx-auto">
          Calculator, gallery, media, videos, downloads and the knowledge base — everything you need in one place.
        </p>
      </section>

      <section className="container mx-auto px-6 py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="block rounded-lg border p-6 hover:shadow-lg">
            <h2 className="font-semibold text-xl mb-2">{s.title}</h2>
            <p className="text-slate-600 text-sm">{s.text}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
