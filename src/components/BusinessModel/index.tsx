// src/components/BusinessModel/index.tsx
import SectionTitle from "../Common/SectionTitle"
import React from "react"

const pillars = [
  {
    id: 1,
    label: "Consulting",
    summary: "Map emissions, design decarbonisation roadmaps, and deploy GreenVision for measurable outcomes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
        <path d="M3 13h2v-2H3v2zm4 0h2v-4H7v4zM13 3h8v2h-8V3zM3 17h2v-2H3v2zm4 0h2v-6H7v6z" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Products",
    summary: "Proven hydrogen retrofits and IoT solutions — compact, smart hardware that integrates with existing assets.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
        <path d="M12 2l3.5 7H18l-6 11-6-11h2.5L12 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Projects",
    summary:
      "Outcome-as-a-Service: SGT installs, operates, maintains, and reports results for a monthly fee — low upfront cost for customers.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
        <path d="M3 13v-2h2V9h2v2h8V9h2v2h2v2h-2v2h-2v-2H7v2H5v-2H3z" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "GreenLabs",
    summary: "Our R&D hub for custom hardware, OEM partnerships, storage research, and next-gen hydrogen systems.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
      </svg>
    ),
  },
]

export default function BusinessModel() {
  return (
    <section id="business-model" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Business Model: How We Work"
          paragraph="We deliver outcomes through four integrated pillars — consulting, products, projects, and R&D via GreenLabs."
          center
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <article
              key={p.id}
              className="h-full flex flex-col rounded-lg border border-white/6 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--accent,#98C948)]/10 text-[var(--brand,#33A04A)]">
                  {p.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.label}</h3>
                </div>
              </div>

              <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow">
                {p.summary}
              </p>

              {/* <div className="mt-4">
                <a
                  href={`/business/${p.label.toLowerCase()}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-2 bg-[var(--brand,#33A04A)] text-slate-900 hover:brightness-95"
                >
                  Explore {p.label}
                </a>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
