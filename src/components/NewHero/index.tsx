'use client'
import Link from 'next/link'
import React from 'react'

const NewHero = () => {
  return (
    <section className="relative w-full bg-[#0B2515] overflow-hidden">
      {/* Background Image with Green Overlay */}
      <div className="absolute inset-0 z-0 opacity-60 mix-blend-overlay">
        <img
          src="/images/hero/hero-illustration.png"
          alt="Saarthi Green Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Brand Gradient Overlay - Deep Green to Transparent */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#051C10] via-[#0B2515]/80 to-transparent" />

      {/* Decorative Organic Orb */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#33A04A] opacity-20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="container relative z-10 px-6 lg:px-8 py-24 md:py-32 lg:py-40 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33A04A]/20 border border-[#33A04A]/30 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FBB040] animate-pulse"></span>
            <span className="text-[#FBB040] text-sm font-bold tracking-wide uppercase">Deeptech Decarbonisation</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Profitable <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#33A04A]">Decarbonisation</span> for Diesel-Dependent Industries
          </h1>

          <p className="text-lg md:text-xl text-gray-300/90 mb-10 leading-relaxed max-w-2xl border-l-2 border-[#33A04A] pl-6">
            A deeptech decarbonisation company combining proprietary hardware, real-time software, and outcome-led solutions to reduce Scope-1 emissions — while improving operating economics.
          </p>

          {/* Industry Pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {['Marine', 'Industrial Power & DG', 'Vehicles & Fleets'].map((item) => (
              <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white hover:border-[#33A04A] hover:bg-[#33A04A]/10 transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#solutions"
              className="group px-8 py-4 rounded-full bg-[#33A04A] text-white font-bold hover:bg-[#2b8a3e] transition-all shadow-[0_0_20px_rgba(51,160,74,0.3)] flex items-center gap-2"
            >
              Explore Solutions
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-bold hover:bg-white hover:text-[#0B2515] hover:border-white transition-all backdrop-blur-sm"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewHero
