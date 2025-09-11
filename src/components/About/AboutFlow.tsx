// src/components/About/AboutFlow.tsx
"use client";

import React from "react";
import Image from "next/image";

type FlowCard = {
  id: string;
  title: string;
  body: string;
  icon?: string; // optional path to icon in /public
};

const cards: FlowCard[] = [
  {
    id: "vision",
    title: "Our Vision",
    body:
      "Make decarbonisation practical, profitable and provable for industry — by enabling easier, measurable hydrogen retrofits.",
    icon: "/images/about/icon-vision.svg",
  },
  {
    id: "mission",
    title: "Our Mission",
    body:
      "Deliver retrofit solutions, GreenVision analytics and outcome-first projects so customers reduce emissions and see ROI.",
    icon: "/images/about/icon-mission.svg",
  },
  {
    id: "values",
    title: "Core Values",
    body:
      "Safety-first engineering, data-driven proof, and partnerships that scale solutions where they matter most.",
    icon: "/images/about/icon-values.svg",
  },
];

export default function AboutFlow() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            How we get from vision → impact
          </h3>
          <p className="mt-2 text-slate-600">
            We combine practical retrofits, rigorous data, and outcome-focused projects so clients get measurable emissions reductions and financial returns.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.id} className="flex flex-col items-start gap-4 rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[var(--accent,#E9F8E7)] text-[var(--brand,#33A04A)]">
                {/* icon: prefer small svg in /public/images/about */} 
                {c.icon ? (
                  <div className="relative h-6 w-6">
                    <Image src={c.icon} alt={`${c.title} icon`} fill style={{ objectFit: "contain" }} />
                  </div>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 13.5L2 10l10 5.5L22 10 12 15.5z" />
                  </svg>
                )}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900">{c.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* optional short CTA row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="/our-solutions" className="inline-flex items-center rounded-full bg-[var(--brand,#33A04A)] px-5 py-2 text-sm font-semibold text-black shadow">
            See Solutions
          </a>
          <a href="/contact" className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold">
            Talk to our experts
          </a>
        </div>
      </div>
    </section>
  );
}
