'use client'
import { useRef } from 'react'
import SectionTitle from '../Common/SectionTitle'
import whyData from './whyData'

export default function WhyChoose() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  function scrollBy(offset: number) {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section id="why-choose" className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container">
        <SectionTitle
          title="Why Choose Saarthi"
          paragraph="Dual ROI, ESG readiness, compact retrofits, proven pilots, and future-ready R&D — engineered for measurable decarbonisation."
          center
          mb='60px'
        />

        <div className="mt-10 relative">
          {/* Left chevron */}
          <button
            onClick={() => scrollBy(-350)}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 dark:bg-slate-800/80 p-3 shadow-sm"
            title="Scroll left"
          >
            <svg className="w-6 h-6 text-slate-700 dark:text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Right chevron */}
          <button
            onClick={() => scrollBy(350)}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 dark:bg-slate-800/80 p-3 shadow-sm"
            title="Scroll right"
          >
            <svg className="w-6 h-6 text-slate-700 dark:text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 py-4 touch-pan-x hide-scrollbar"
            role="list"
            aria-label="Why choose Saarthi GreenTech"
          >
            {whyData.map((it) => (
              <article
                key={it.id}
                role="listitem"
                className="snap-center shrink-0 w-[320px] sm:w-[360px] lg:w-[400px]"
              >
                <div className="h-[260px] flex flex-col rounded-xl p-6 bg-white dark:bg-slate-800 border border-white/6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 rounded-md bg-[var(--accent,#98C948)]/10 text-[var(--brand,#33A04A)] flex items-center justify-center">
                      {it.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{it.title}</h4>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{it.body}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-2 bg-[var(--brand,#33A04A)] text-slate-900 hover:brightness-95"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
