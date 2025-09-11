// src/components/GreenVision/Applications.tsx
'use client'

import Link from 'next/link'
import React from 'react'

const apps = [
  {
    id: 'ports',
    title: 'Ports & Shipping',
    body:
      'Track tugboats, ships, cranes and port equipment. Combine with GreenMarine, GreenDrive and GreenGen for harbor-side decarbonisation.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden className="fill-current">
        <path d="M2 21h20v-2H2v2zM4 16h16v-4H4v4zm2-6h12V6H6v4z" />
      </svg>
    ),
  },
  {
    id: 'fleets',
    title: 'Fleets & Logistics',
    body:
      'Monitor truck and bus fuel use, validate retrofit savings, and produce ESG-linked CO₂ data for fleet-wide decisions.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden className="fill-current">
        <path d="M3 13h12v-6H3v6zm0 2v4h2a2 2 0 1 0 4 0h6a2 2 0 1 0 4 0h1v-4H3z" />
      </svg>
    ),
  },
  {
    id: 'factories',
    title: 'Factories & Industrial Sites',
    body:
      'Measure stack emissions and DG sets in real time. Optimize energy use and demonstrate verified emission reductions.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden className="fill-current">
        <path d="M2 21h20V7l-6 3V7l-4 2V7L2 10v11z" />
      </svg>
    ),
  },
  {
    id: 'buildings',
    title: 'Buildings & Campuses',
    body:
      'Optimize HVAC, lighting and backup power usage to meet green-certification targets and reduce operational costs.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden className="fill-current">
        <path d="M3 2v20h18V2H3zm2 2h14v16H5V4z" />
      </svg>
    ),
  },
  {
    id: 'cities',
    title: 'Smart Cities',
    body:
      'Deploy air-quality & emission grids, integrate transport, energy and municipal services for city-level decarbonisation.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden className="fill-current">
        <path d="M12 2l4 4h-3v6h-2V6H8l4-4zM4 10v10h16V10H4z" />
      </svg>
    ),
  },
  {
    id: 'other',
    title: 'More Use Cases',
    body: 'Microgrids, campuses, ports of entry, construction sites — GreenVision adapts to any asset mix.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden className="fill-current">
        <path d="M12 2l6 6-6 6-6-6 6-6zm0 13l6 6H6l6-6z" />
      </svg>
    ),
  },
]

export default function Applications() {
  return (
    <section id="greenvision-applications" className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Endless Applications
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            GreenVision works everywhere you have emissions: ports, fleets, factories, buildings and across whole cities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {apps.map((a) => (
            <article
              key={a.id}
              className="group relative flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-5 hover:shadow-lg transition"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ background: 'var(--accent, #98C948)', color: '#07121a' }}
                aria-hidden
              >
                {a.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[var(--brand,#33A04A)]">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{a.body}</p>
              </div>

              {/* <div className="mt-2">
                <Link
                  href="/solutions"
                  className="inline-flex items-center text-sm font-medium text-[var(--brand,#33A04A)] hover:underline"
                >
                  Learn how
                </Link>
              </div> */}
            </article>
          ))}
        </div>

        {/* <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 text-sm font-semibold text-white shadow hover:brightness-95"
          >
            See Case Studies
          </Link>
        </div> */}
      </div>
    </section>
  )
}
