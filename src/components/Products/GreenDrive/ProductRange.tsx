// src/components/Products/GreenDrive/ProductRange.tsx
import React from "react";
import Image from "next/image"; // ✅ import Next.js Image

const range = [
  { id: "nano", title: "GreenDrive Nano", desc: "Small on-road, delivery vans, 3-wheelers", img: "/images/greendrive/nano.png" },
  { id: "mini12", title: "GreenDrive Mini 12", desc: "12V vehicles: small trucks, buses, tractors", img: "/images/greendrive/mini12.png" },
  { id: "mini24", title: "GreenDrive Mini 24", desc: "24V vehicles: medium trucks, construction, agri", img: "/images/greendrive/mini24.png" },
  { id: "neo", title: "GreenDrive Neo", desc: "Heavy-duty Class 8 trucks, mining & construction", img: "/images/greendrive/neo.png" },
];

export default function ProductRange() {
  return (
    <section id="product-range" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900">Product Range</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            One brand, multiple models — matched to engine sizes and duty cycles.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {range.map((r) => (
            <article
              key={r.id}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 p-4 flex flex-col"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-lg">
                <Image
                  src={r.img}
                  alt={r.title}
                  fill
                  className="object-contain object-center"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600 flex-1">{r.desc}</p>
              {/* <div className="mt-4">
                <a
                  href="/documents/greendrive-brochure.pdf"
                  className="inline-flex items-center text-sm font-medium text-[var(--brand,#33A04A)] hover:underline"
                >
                  Download Product Brochure
                </a>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
