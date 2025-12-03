// src/components/ClosingCTA/index.tsx
'use client'
import React from 'react'

export default function ClosingCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-[var(--brand,#33A04A)]/10 via-transparent to-transparent dark:from-transparent">
      <div className="container">
        <div className="rounded-2xl bg-white dark:bg-slate-800 shadow-lg p-10 md:p-14 lg:p-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Cut emissions. Save fuel. <span className="text-[var(--brand,#33A04A)]">Prove it with data.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            Join governments, enterprises, and innovators choosing Saarthi GreenTech to turn climate goals into real-world action.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 text-base font-semibold text-slate-900 shadow hover:brightness-95"
            >
              Get Started Today
            </a>

            {/* <a
              href="/book-demo"
              className="inline-flex items-center justify-center rounded-full border border-[var(--brand,#33A04A)] px-6 py-3 text-base font-semibold text-[var(--brand,#33A04A)] hover:bg-[var(--brand,#33A04A)] hover:text-slate-900 transition"
            >
              Book a Consultation
            </a> */}
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Or email us at <a href="mailto:contact@saarthigreen.com" className="underline">contact@saarthigreen.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
