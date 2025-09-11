// src/components/Products/GreenDrive/Applications.tsx
import Link from "next/link";

const apps = [
  { id: 'onroad', title: 'On-Road Vehicles', text: 'Delivery fleets to long-haul trucks.' },
  { id: 'public', title: 'Public Transport', text: 'City & intercity bus fleets.' },
  { id: 'construction', title: 'Construction & Earthmoving', text: 'Excavators, loaders, dumpers.' },
  { id: 'mining', title: 'Mining', text: 'Heavy haul trucks, loaders, drills.' },
  { id: 'agri', title: 'Agriculture', text: 'Tractors, harvesters and farm machinery.' },
];

export default function Applications() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold">Applications</h2>
          <p className="mt-2 text-slate-600">GreenDrive is designed for a wide range of diesel-powered equipment.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {apps.map(a => (
            <article key={a.id} className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900">{a.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{a.text}</p>
            </article>
          ))}
        </div>

        {/* <div className="mt-8 text-center">
          <Link href="/case-studies" className="inline-flex rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 text-white font-semibold">
            See Case Studies
          </Link>
        </div> */}
      </div>
    </section>
  );
}
