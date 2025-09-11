// src/components/GreenLabs/index.tsx
'use client'
import Image from 'next/image'
import SectionTitle from '../Common/SectionTitle'
import React from 'react'

const labs = [
  {
    id: 1,
    title: 'Custom hardware & electronics',
    body: 'Electronics, sensors, and ruggedised controls engineered for retrofit integration and industrial environments.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
        <path d="M12 2a2 2 0 012 2v2h4v4h-2v2h-4v4h-4v-4H6v-2H4V6h4V4a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'OEM collaborations',
    body: 'Partnerships with engine and vehicle OEMs for certified integrations and co-development programs.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
        <path d="M3 12l3-3 4 4 8-8 3 3-11 11L3 12z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Hydrogen storage & transport research',
    body: 'Safe, compact storage and transport options for practical deployment models across multiple industries.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
        <path d="M12 2C8 2 4 4 4 7v10c0 3 4 5 8 5s8-2 8-5V7c0-3-4-5-8-5zM8 9h8v2H8V9z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'IoT + AI',
    body: 'GreenVision analytics and AI models for automated emissions reporting, anomaly detection, and performance optimisation.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
        <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M8 12a4 4 0 108 0 4 4 0 00-8 0z" />
      </svg>
    ),
  },
]

export default function GreenLabs() {
  return (
    <section id="greenlabs" className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-slate-900">
      <div className="container">
        <SectionTitle
          title="GreenLabs — Our Innovation Backbone"
          paragraph="Engineering the future of hydrogen — from catalyst retrofits to full hydrogen systems. R&D, prototyping, and OEM partnerships."
          center
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {labs.map((item) => (
            <article
              key={item.id}
              className="h-full flex flex-col rounded-lg border border-white/6 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-md bg-[var(--accent,#98C948)]/10 text-[var(--brand,#33A04A)] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 flex-grow">{item.body}</p>

              <div className="mt-4">
                <a
                  href="/greenlabs"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand,#33A04A)] px-4 py-2 text-sm font-semibold text-slate-900 hover:brightness-95"
                >
                  Explore GreenLabs
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Optional illustration on the right for larger screens */}
        <div className="mt-12 flex items-center justify-center">
          <div className="relative w-full max-w-[900px] rounded-xl overflow-hidden">
            <div className="hidden md:block absolute right-0 top-0 -z-10 w-[420px] opacity-40">
              <Image
                src="/images/decals/greenlabs-decal-light.png"
                alt="greenlabs decal"
                width={420}
                height={420}
                className="dark:hidden object-contain"
              />
              <Image
                src="/images/decals/greenlabs-decal-dark.png"
                alt="greenlabs decal dark"
                width={420}
                height={420}
                className="hidden dark:block object-contain"
              />
            </div>

            {/* Center illustration or placeholder */}
            <div className="mx-auto mt-6 w-full max-w-[760px] rounded-lg bg-white/0 p-6 text-center">
              <Image
                src="/images/greenlabs/greenlabs-illustration.jpeg"
                alt="GreenLabs illustration"
                width={760}
                height={300}
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
