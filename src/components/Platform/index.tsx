'use client'
import React from 'react'

const Platform = () => {
  const features = [
    {
      title: "Hardware",
      subtitle: "The Foundation",
      description: "Deeptech retrofit systems engineered to optimise combustion and reduce fossil fuel intensity on live diesel assets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
        </svg>
      )
    },
    {
      title: "Software",
      subtitle: "The Truth Layer",
      description: "Asset-level monitoring, optimisation, and emissions measurement that generates real, auditable, defensible data.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-6 6-6 6m6-6v4.5m0-4.5h-4.5" />
        </svg>
      )
    },
    {
      title: "Solutions & Advisory",
      subtitle: "The Outcome Layer",
      description: "Industry-specific decarbonisation solutions delivered as an operating service — not a one-time project.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#051C10]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">A Full-Stack Deeptech Decarbonisation Platform</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            SGT is not a product company or a pure advisory firm. <br className="hidden md:block" />
            We operate a full-stack platform designed for real-world diesel operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group relative p-8 rounded-[2rem] bg-gray-50 dark:bg-[#0B2515] hover:bg-[#33A04A] transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-[#33A04A]/20 hover:-translate-y-2 overflow-hidden">
              {/* Hover Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

              <div className="relative z-10">
                <div className="mb-8 w-16 h-16 rounded-2xl bg-white dark:bg-[#0E2E1B] text-[#33A04A] flex items-center justify-center shadow-sm group-hover:bg-white group-hover:text-[#33A04A] transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors text-gray-900 dark:text-white">{feature.title}</h3>
                <span className="text-sm font-bold uppercase tracking-wider text-[#33A04A] mb-6 block group-hover:text-[#FBB040] transition-colors">{feature.subtitle}</span>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-white/90 leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#33A04A]/5 border border-[#33A04A]/20 text-[#0B2515] dark:text-[#33A04A] font-semibold">
            <span>One system.</span>
            <span className="w-1 h-1 bg-[#33A04A] rounded-full"></span>
            <span>One accountability layer.</span>
            <span className="w-1 h-1 bg-[#33A04A] rounded-full"></span>
            <span>One outcome.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Platform
