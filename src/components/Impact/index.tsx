'use client'
import React from 'react'

const Impact = () => {
  const impacts = [
    {
      title: "Marine Decarbonisation",
      description: "Reduce auxiliary and operational diesel emissions in vessels and port operations — where fuel intensity, margins, and regulatory pressure are highest.",
      image: "/images/greenmarine/hero-marine.png",
      pill: "High Impact"
    },
    {
      title: "Industrial Power & DG",
      description: "Lower emissions and fuel usage in captive power and generator-dependent industrial operations while maintaining uptime and reliability.",
      image: "/images/greengen/hero-dg.png",
      pill: "Critical"
    },
    {
      title: "Fleet & Vehicles",
      description: "Enable scalable emission reduction across large vehicle fleets operating on diesel — with measurable results and simple commercial models.",
      image: "/images/greendrive/hero-product.png",
      pill: "Scalable"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAF9] dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#33A04A] font-bold tracking-wider uppercase text-sm mb-2 block">Where We Create the Highest Impact</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Industry-Specific <br /> Decarbonisation Solutions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6">
            Each solution is designed around real operating conditions, not theory.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[2rem] shadow-lg h-[500px] cursor-pointer">
              {/* Image Background */}
              <div className="absolute inset-0 h-full w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051C10] via-[#051C10]/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
                <div className="mb-auto transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="px-3 py-1 bg-[#FBB040] text-[#051C10] text-xs font-bold uppercase rounded-full tracking-wide">
                    {item.pill}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                <p className="text-gray-200 text-lg leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[#33A04A] font-bold uppercase tracking-wider text-sm transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span>Explore Solution</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Impact
