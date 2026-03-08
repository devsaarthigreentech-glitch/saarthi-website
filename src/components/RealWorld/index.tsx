'use client'
import React from 'react'

const RealWorld = () => {
  const points = [
    "Focused on hard-to-abate diesel sectors",
    "Designed for safety, reliability, and compliance",
    "Deployed on operating assets, not test benches",
    "Measurement before claims",
    "Continuous optimisation, not one-time installs"
  ]

  return (
    <section className="py-24 bg-white dark:bg-[#0E1F16] relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#33A04A 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Built for the Real World</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              SGT HydroEdge is a sustainability infrastructure company built for live operations — not pilot projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-[#F8FAF9] dark:bg-white/5 border border-transparent hover:border-[#33A04A]/30 transition-all">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#33A04A]/10 text-[#33A04A] flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{point}</span>
              </div>
            ))}
            <div className="md:col-span-2 mt-8">
              <div className="bg-[#051C10] rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#33A04A] rounded-full blur-3xl opacity-20"></div>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  If it cannot be <span className="text-[#33A04A]">measured</span> and <span className="text-[#33A04A]">defended</span>, it does not count.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default RealWorld
