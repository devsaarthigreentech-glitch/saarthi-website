// src/components/Applications/index.tsx
'use client'
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import applicationsData from "./applicationsData";

export default function Applications() {
  return (
    <section id="applications" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="container">
        <SectionTitle
          title="Applications — Where We Deliver Value"
          paragraph="Ports & Shipping, Fleets & Logistics, Factories & Campuses, and Smart Cities — practical decarbonisation for today’s real-world assets."
          center
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {applicationsData.map((app) => (
            <article key={app.id} className="h-full flex flex-col rounded-2xl overflow-hidden border border-white/6 bg-white dark:bg-slate-800 shadow-sm">
              <div className="relative h-48 w-full">
                {/* Next/Image requires defined dimensions via parent */}
                <Image
                  src={app.image}
                  alt={app.alt || app.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{app.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 flex-grow">{app.description}</p>
                {/* <div className="mt-5">
                  <a
                    href={`/case-studies?app=${encodeURIComponent(app.title.toLowerCase())}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-4 py-2 bg-[var(--brand,#33A04A)] text-slate-900 hover:brightness-95"
                  >
                    See Case Studies
                  </a>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
