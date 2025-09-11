// src/components/Vision/index.tsx
'use client'
import React from 'react'
import SectionTitle from '../Common/SectionTitle'

const pillars = [
  {
    id: 1,
    title: 'Vision',
    text: 'Make decarbonisation practical and profitable for every engine, asset, and city.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Mission',
    text: 'Deliver hydrogen retrofits + IoT platforms that reduce emissions, save fuel, and automate ESG reporting.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
        <path d="M3 12l3-3 4 4 8-8 3 3-11 11L3 12z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Goal',
    text: 'Decarbonise millions of diesel assets worldwide by 2030 with verifiable ROI.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-6h2v6z" />
      </svg>
    ),
  },
]

export default function Vision() {
  return (
    <section id="vision" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="container">
        <SectionTitle
          title="Vision • Mission • Goal"
          paragraph="We combine practical hydrogen retrofits with IoT intelligence to create measurable emissions reductions and clear ROI."
          center
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.id}
              className="h-full flex flex-col rounded-lg border border-white/6 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-md bg-[var(--accent,#98C948)]/10 text-[var(--brand,#33A04A)] flex items-center justify-center">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 flex-grow">{p.text}</p>

              <div className="mt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand,#33A04A)] px-4 py-2 text-sm font-semibold text-slate-900 hover:brightness-95"
                >
                  Contact Sales
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
