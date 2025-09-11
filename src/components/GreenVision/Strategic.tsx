'use client'

import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Strategic() {
  return (
    <section id="greenvision-strategic" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              GreenVision as the Operating System for Carbon & Energy Management
            </h2>

            <p className="mt-4 text-lg text-slate-700 max-w-xl">
              GreenVision is not just compliance software. It powers enterprise decision-making to
              prove sustainability claims with verifiable data while delivering real financial returns.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: 'var(--accent,#98C948)', color: '#07121a' }} aria-hidden>
                  ✅
                </span>
                <div>
                  <div className="font-semibold text-slate-900">Audit-ready reporting</div>
                  <div className="text-sm text-slate-600">Automated outputs aligned to GHG Protocol, ISO 14064, IMO and local regulators.</div>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: 'var(--accent,#98C948)', color: '#07121a' }} aria-hidden>
                  ⚙️
                </span>
                <div>
                  <div className="font-semibold text-slate-900">Operational controls</div>
                  <div className="text-sm text-slate-600">AI-driven automation that reduces idle time, optimizes loads, and controls retrofits.</div>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: 'var(--accent,#98C948)', color: '#07121a' }} aria-hidden>
                  📊
                </span>
                <div>
                  <div className="font-semibold text-slate-900">Board-level visibility</div>
                  <div className="text-sm text-slate-600">Dashboards and executive summaries that convert operational outcomes into investable metrics.</div>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-demo" className="inline-flex items-center rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 text-sm font-semibold text-white shadow-sm">
                Book a Demo
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50">
                Talk to Our Experts
              </Link>
            </div>
          </div>

          {/* Right: diagram/visual */}
          <div className="lg:col-span-6">
            <div className="relative w-full rounded-xl overflow-hidden border border-slate-100 shadow-sm">
              <div className="relative h-64 sm:h-64 md:h-72">
                {/* Placeholder image - replace with enterprise diagram SVG/illustration */}
                <Image
                  src="/images/greenvision/strategy.png"
                  alt="Enterprise → GreenVision core → assets around it"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width:1024px) 600px, 100vw"
                />
                <div className="absolute inset-0 bg-white/20 pointer-events-none" />
              </div>
              {/* <div className="p-4 sm:p-6">
                <div className="text-sm text-slate-600">
                  Visual: Enterprise systems feed into GreenVision. Outputs: validated emissions, automated controls, and auditable reports.
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
