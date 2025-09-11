'use client'
import Image from "next/image"
import SectionTitle from "../Common/SectionTitle"

const resultsData = [
  {
    id: 1,
    title: "DG Trials (20–250 kVA)",
    description: "Up to 8% fuel saving, >80% PM reduction.",
  },
  {
    id: 2,
    title: "Vehicle Testing",
    description: "Hundreds of thousands of km tested; up to 20% savings observed in lower-load engines.",
  },
  {
    id: 3,
    title: "Industrial Plant (250 kVA)",
    description: "ROI achieved in under 12 months with hydrogen retrofits.",
  },
  {
    id: 4,
    title: "Marine Program",
    description: "Land & DG results → expected marine outcomes; Class testing underway.",
  },
]

export default function Results() {
  return (
    <section
      id="results"
      className="relative z-10 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 py-12 md:py-20 lg:py-28 overflow-hidden"
    >
      <div className="container relative z-20">
        <SectionTitle
          title="Results That Matter"
          paragraph="Evidence from real-world pilots and trials across vehicles, DG sets, industries, and marine."
          center
          mb="60px"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {resultsData.map((result) => (
            <div
              key={result.id}
              className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-lg transition hover:shadow-xl"
            >
              <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                {result.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">{result.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded-full bg-[var(--brand,#33A04A)] px-8 py-3 font-semibold text-white shadow-lg transition hover:brightness-95"
          >
            Download Fact Sheets PDF
          </a>
        </div> */}
      </div>

      {/* Decorative image for LIGHT mode */}
      <div className="pointer-events-none absolute -right-8 -top-8 z-0 hidden w-[360px] opacity-40 md:block dark:hidden">
        <Image
          src="/images/decals/results-decal-light.png"
          alt="light decorative"
          width={360}
          height={360}
          className="object-contain"
          priority={false}
        />
      </div>

      {/* Decorative image for DARK mode */}
      <div className="pointer-events-none absolute -right-8 -top-8 z-0 hidden w-[360px] opacity-40 md:block dark:block">
        <Image
          src="/images/decals/results-decal-dark.png"
          alt="dark decorative"
          width={360}
          height={360}
          className="object-contain"
          priority={false}
        />
      </div>

      {/* A subtle bottom-left glow (works in both modes) */}
      <div className="pointer-events-none absolute left-0 -bottom-8 z-0 w-[420px] opacity-25">
        <svg width="420" height="220" viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="210" cy="110" rx="210" ry="110" fill="url(#g1)" />
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#98C948" stopOpacity="0.25" />
              <stop offset="1" stopColor="#33A04A" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
