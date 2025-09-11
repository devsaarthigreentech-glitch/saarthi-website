'use client'

import React from 'react'

const points = [
  {
    id: 1,
    title: 'One Platform, Any Asset',
    text: 'Works seamlessly across fleets, factories, ports, and cities.',
  },
  {
    id: 2,
    title: 'More Than Reporting',
    text: 'Tracks, analyzes, and automates emission-reduction actions.',
  },
  {
    id: 3,
    title: 'Direct ROI',
    text: 'Cuts fuel and energy costs alongside reducing emissions.',
  },
  {
    id: 4,
    title: 'ESG-Ready',
    text: 'Generates automated Scope 1/2/3 reports for investors & regulators.',
  },
  {
    id: 5,
    title: 'Seamless Integration',
    text: 'Connects with GreenDrive, GreenGen, and GreenMarine for validated impact.',
  },
]

export default function WhyGreenVision() {
  return (
    <section id="why-greenvision" className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Why GreenVision Stands Out
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            A platform built for more than compliance — it drives measurable savings and trusted reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {points.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 flex items-center">
                <span className="mr-3 text-[var(--brand,#33A04A)] text-xl">✅</span>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[var(--brand,#33A04A)]">
                  {p.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
