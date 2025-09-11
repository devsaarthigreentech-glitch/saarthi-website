// src/components/GreenVision/CTA.tsx
"use client";

import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <section
      id="greenvision-cta"
      className="relative overflow-hidden bg-slate-900 text-white"
      aria-labelledby="greenvision-cta-heading"
    >
      {/* Background image (replace with your asset) */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/greenvision/cta-city-placeholder.jpg"
          alt="Futuristic city with digital overlays"
          className="w-full h-full object-cover object-center opacity-80"
        />
        {/* overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/65" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28 text-center">
        <h2
          id="greenvision-cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
        >
          From Data to Decarbonisation.
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
          GreenVision empowers organizations to see their emissions, cut their costs, and lead on ESG
          accountability — with proven ROI and audit-ready reporting.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4">
          {/* <Link
            href="/book-demo"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold shadow-lg transition transform hover:scale-[1.02]"
            style={{ background: "var(--brand, #33A04A)", color: "#07121a" }}
            aria-label="Book a demo for GreenVision"
          >
            Book a Demo
          </Link> */}

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium border border-white/25 text-white hover:bg-white/5 transition"
            aria-label="Talk to our experts"
          >
            Talk to Our Experts
          </Link>
        </div>

        {/* <div className="mt-8 text-sm text-white/80">
          <span className="inline-block mr-2">Trusted by:</span>
          <span className="inline-block mr-3 px-2 py-1 rounded bg-white/10">Port Authority</span>
          <span className="inline-block mr-3 px-2 py-1 rounded bg-white/10">Logistics Co.</span>
          <span className="inline-block px-2 py-1 rounded bg-white/10">Industrial Plant</span>
        </div> */}
      </div>
    </section>
  );
}
