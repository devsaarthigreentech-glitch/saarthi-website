// src/components/GreenVision/Advantage.tsx
'use client'

import React from 'react'

export default function Advantage() {
  const cards = [
    {
      id: 1,
      title: 'Data Collection',
      body:
        'Connects to vehicles, engines, generators, boilers, HVACs, buildings and more using IoT devices & sensors.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" className="fill-current" aria-hidden>
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zM3 5v2h2V5H3zm4 8h12v-2H7v2zm0 4h12v-2H7v2zM7 5v2h12V5H7z"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Analysis',
      body:
        'Converts raw data into actionable insights on CO₂ emissions, energy use and efficiency trends.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" className="fill-current" aria-hidden>
          <path d="M3 13h2v-6H3v6zm4 4h2v-10H7v10zm4-4h2V7h-2v6zm4 8h2V3h-2v18z"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Control & Automation',
      body:
        'AI-driven actions: optimize loads, reduce idle time, and control retrofit devices in real-time.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" className="fill-current" aria-hidden>
          <path d="M12 1L3 5v6c0 5.523 3.582 10.74 9 12 5.418-1.26 9-6.477 9-12V5l-9-4z"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Reporting',
      body:
        'Automated ESG & Carbon reporting aligned with GHG Protocol, ISO 14064, EU MRV, IMO DCS and CPCB.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" className="fill-current" aria-hidden>
          <path d="M3 13h2v-2H3v2zm4 4h2v-6H7v6zm4-10h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2z"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="greenvision-advantage" className="py-12 md:py-20 lg:py-24 bg-slate-50 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            The GreenVision Advantage
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            GreenVision is not just another reporting tool — it’s an end-to-end Carbon & Emission Management System.
          </p>
        </div>

        {/* cards only */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-md bg-[var(--accent,#98C948)]/10 text-[var(--brand,#33A04A)] flex items-center justify-center">
                  {c.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{c.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* short CTA below for continuity */}
        {/* <div className="mt-10 text-center">
          <a
            href="/book-demo"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 text-sm font-semibold text-white shadow hover:brightness-95"
          >
            Book a Demo
          </a>
        </div> */}
      </div>
    </section>
  )
}
