'use client'
import React from 'react'

const ProblemInsight = () => {
  return (
    <section className="py-24 bg-[#F8FAF9] dark:bg-[#0E1F16] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">

        {/* 1. The Problem */}
        <div className="mb-24 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#33A04A]"></span>
            <span className="text-[#33A04A] font-bold tracking-wider uppercase text-sm">Why This Problem Exists</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tigher">
                Decarbonisation is mandatory. <br />
                <span className="text-gray-400 dark:text-gray-500 font-medium">But for diesel-dependent operations, it isn’t straightforward.</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 border-l-4 border-[#FBB040] pl-4">
                Across marine, industrial power, logistics, and infrastructure, diesel remains mission-critical.
                There is no scalable alternative fuel that works universally today.
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10">
              <h4 className="font-bold text-gray-900 dark:text-white mb-6">Pressure is accelerating:</h4>
              <div className="space-y-4">
                {[
                  "Regulations are tightening",
                  "Investors demand credible emission reduction",
                  "ESG scrutiny is increasing",
                  "Carbon disclosure is becoming enforceable",
                  "Organisations must deliver real outcomes"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-[#33A04A]/10 text-[#33A04A] flex items-center justify-center shrink-0 group-hover:bg-[#33A04A] group-hover:text-white transition-colors">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Why it Fails - Split Card */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-3xl -mx-4 -my-8 md:my-0 md:mx-0 z-0 opacity-50"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center p-8 md:p-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                Why Decarbonisation Usually Fails
              </h3>
              <ul className="space-y-5">
                {[
                  "Alternative fuels are not scalable or reliable yet",
                  "Engine replacement is capital-intensive and slow",
                  "Point technologies lack proof and accountability",
                  "Sustainability becomes a cost centre, not a capability"
                ].map((fail, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <div className="mt-1 w-6 h-6 rounded bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <span className="font-medium">{fail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-white/10">
              <img src="/images/blog/blog-01.jpg" alt="Industry challenge" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium">Traditional methods disrupt operations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Our Insight - Green Card */}
        <div className="relative rounded-[2.5rem] bg-[#33A04A] text-center text-white overflow-hidden shadow-2xl shadow-[#33A04A]/20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] bg-gradient-to-br from-white/10 to-transparent rotate-12 blur-3xl"></div>

          <div className="relative z-10 p-12 md:p-20 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
              <svg className="w-8 h-8 text-[#FBB040]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>

            <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              Decarbonisation only scales when it works on <span className="text-[#FBB040] underline decoration-[#FBB040]/30 underline-offset-8">existing diesel assets</span>.
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 opacity-90 text-lg font-medium">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Delivers measurable results
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Makes economic sense
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 inline-block">
              <p className="text-xl font-bold tracking-wide">That is the problem SGT was built to solve.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProblemInsight
