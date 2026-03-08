'use client'
import React from 'react'

const BusinessValue = () => {
  return (
    <section className="py-28 bg-[#051C10] text-white relative overflow-hidden">
      {/* Deep Green Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#051C10] to-[#010a05] z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -ml-[50%] w-[100%] h-[500px] bg-[#33A04A] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[#FBB040] font-bold tracking-wider uppercase text-sm mb-4 block">Value Proposition</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">When Decarbonisation Becomes a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33A04A] to-[#FBB040]">Business Decision</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Decarbonisation does not have to be a trade-off between compliance and profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Finance & Operations - Light Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-white/10 transition-all group">
            <div className="w-12 h-12 bg-[#33A04A]/20 rounded-xl flex items-center justify-center mb-6 text-[#33A04A] group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-[#33A04A] transition-colors">
              For Finance & Operations
            </h3>
            <ul className="space-y-4">
              {[
                "Reduced fuel consumption",
                "Pay-as-you-save commercial model",
                "No engine or fuel change",
                "No upfront capex shock"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-gray-300">
                  <svg className="w-5 h-5 text-[#33A04A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sustainability & Leadership - Dark Green Card */}
          <div className="bg-[#33A04A] rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-[#33A04A]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-white">
              For Sustainability & Leadership
            </h3>
            <ul className="space-y-4">
              {[
                "Verified Scope-1 emission reduction",
                "Audit-ready, defensible data",
                "Regulatory alignment",
                "A credible transition pathway"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-white/90">
                  <div className="bg-white/20 rounded-full p-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center max-w-3xl mx-auto pt-10 border-t border-white/5">
          <h3 className="text-3xl font-bold mb-2">We don’t sell equipment.</h3>
          <p className="text-2xl text-[#33A04A] font-bold">We take responsibility for outcomes.</p>
        </div>
      </div>
    </section>
  )
}

export default BusinessValue
