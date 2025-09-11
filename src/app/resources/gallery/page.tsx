import GallerySection from "@/components/Resources/Gallery/GallerySection";

export const metadata = {
  title: "Gallery — Saarthi GreenTech",
  description:
    "Event-based gallery of Saarthi GreenTech — launches, pilots, and industry engagements.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Gallery</h1>
          <p className="mt-3 text-slate-200 max-w-2xl mx-auto">
            Explore highlights from our events, pilots, and partner
            collaborations.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />
    </main>
  );
}
