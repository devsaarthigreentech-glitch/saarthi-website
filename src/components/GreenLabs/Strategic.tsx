// Strategic.tsx
export default function Strategic() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Strategic Positioning</h2>
        <p className="mt-4 text-slate-700">
          GreenLabs is a commercialization engine: every innovation is designed for market adoption and ROI.
          This positions Saarthi GreenTech as a deep-tech leader in hydrogen retrofits and emission reduction.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="/about" className="inline-flex items-center rounded-full border px-5 py-2 text-sm font-medium">Learn More</a>
          <a href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand,#33A04A)] px-5 py-2 text-sm font-semibold text-white">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
