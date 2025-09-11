// Conclusion.tsx
export default function Conclusion() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
        <h3 className="text-2xl font-bold text-slate-900">GreenLabs by Saarthi GreenTech</h3>
        <p className="mt-4 text-slate-700">
          GreenLabs is the innovation backbone that tackles hydrogen’s toughest challenges — making decarbonisation not just
          possible but profitable through applied research, retrofit pathways, and system integration.
        </p>

        <div className="mt-8">
          <a href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 text-white font-semibold">Partner with GreenLabs</a>
        </div>
      </div>
    </section>
  );
}
