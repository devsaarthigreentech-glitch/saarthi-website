// FocusAreas.tsx
import React from "react";

const areas = [
  {
    id: "catalyst",
    title: "Hydrogen as a Catalyst in Engines",
    body:
      "R&D into on-demand hydrogen generation and catalyst approaches that improve combustion efficiency — potential fuel savings of 10–40% depending on use case.",
  },
  {
    id: "supplement",
    title: "Hydrogen as a Fuel Supplement",
    body:
      "Blending hydrogen with diesel or gas; retrofit systems that lower CO₂ intensity as a transitional pathway to cleaner fuels.",
  },
  {
    id: "primary",
    title: "Hydrogen as a Primary Fuel",
    body:
      "Long-term R&D into engines and fuel cells for heavy vehicles and marine engines; partner collaborations for fuel cell integration.",
  },
];

export default function FocusAreas() {
  return (
    <section id="focus" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Focus Areas of GreenLabs</h2>
          <p className="mt-3 text-slate-600">Applied R&D that balances decarbonisation goals with economic returns.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {areas.map((a) => (
            <article key={a.id} className="rounded-xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{a.title}</h3>
              <p className="mt-3 text-sm text-slate-700">{a.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
