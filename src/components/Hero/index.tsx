// 'use client'
// import Link from 'next/link'
// import React from 'react'

// type Props = {
//   heroSrc?: string
// }

// export default function Hero({ heroSrc = '/images/hero/hero-illustration.png' }: Props) {
//   return (
//     <section className="relative w-full">
//       {/* Full-bleed image container */}
//       <div className="absolute left-0 right-0 top-0 -z-20 w-screen min-h-[60vh] md:min-h-[72vh]">
//         <img
//           src={heroSrc}
//           alt="Hero: vehicles, generators and buildings connected to GreenVision"
//           className="w-full h-full object-cover"
//           style={{ minHeight: '60vh' }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 dark:from-black/50 dark:to-black/70" />
//       </div>

//       {/* Spacer so fixed header doesn't overlap content */}
//       <div className="h-20" />

//       {/* Hero content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
//         <div className="max-w-3xl">
//           <div
//             className="mb-2 text-2xl font-extrabold"
//             style={{ color: 'var(--accent, #98C948)',textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
//           >
//             Smart Hydrogen. Cleaner Future.
//           </div>

// {/* <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold text-white">
//   Decarbonise Your Fleet, Generators, and Marine Operations
//   With <span style={{ color: 'var(--brand, #33A04A)' }}>Smart Hydrogen Systems</span> Delivered as Service{' '} .
// </h1> */}
// {/* <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold text-white">
//   Decarbonise Your Fleet, Generators, and Marine Operations With{" "}
//   <span
//     style={{
//       color: "var(--brand, #33A04A)",
//       // WebkitTextStroke: "0.8px rgba(0,0,0,0.5)", // faint black outline
//       textShadow: "0 1px 3px rgba(0,0,0,0.5)",   // soft glow for readability
//     }}
//   >
//     Smart Hydrogen Systems
//   </span>{" "}
//   Delivered as Service.
// </h1> */}

// <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold text-white">Engineering a Profitable Path to Net-Zero</h1>




//           <p className="mt-6 text-lg text-white/90 dark:text-white/90">
// Hydrogen-enabled retrofits, IoT-powered carbon intelligence, and engineered decarbonisation for fleets, DG sets, marine engines and industrial equipment — without replacing existing engines.
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex flex-wrap gap-3">
//             <Link
//               href="/book-demo"
//               className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-[var(--brand,#33A04A)] text-white shadow-sm hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent,#98C948)]"
//             >
//               Explore the Saarthi Ecosystem
//             </Link>

//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium border border-[var(--brand,#33A04A)] text-slate-100 hover:bg-[var(--brand,#33A04A)] dark:border-white/30 dark:text-white dark:hover:bg-white/10"
//             >
//               Talk to Us
//             </Link>
//           </div>

//           {/* Trusted-by strip */}
//           <div className="mt-8 flex items-center gap-4 overflow-x-auto">
//             <div className="text-slate-100 dark:text-white/70 text-sm mr-2">
//               Trusted across fleets, industries, ports, mining and power applications.
//             </div>
//             {/* <div className="flex gap-4">
//               <div className="h-8 w-28 rounded flex items-center justify-center text-xs text-slate-600 dark:text-white/70 bg-slate-100 dark:bg-white/10">
//                 Partner 1
//               </div>
//               <div className="h-8 w-28 rounded flex items-center justify-center text-xs text-slate-600 dark:text-white/70 bg-slate-100 dark:bg-white/10">
//                 Partner 2
//               </div>
//               <div className="h-8 w-28 rounded flex items-center justify-center text-xs text-slate-600 dark:text-white/70 bg-slate-100 dark:bg-white/10">
//                 Partner 3
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>

//       {/* bottom spacing so next section doesn't jam into hero */}
//       {/* <div className="h-16 md:h-24" /> */}
//     </section>
//   )
// }
'use client'
import Link from 'next/link'
import React from 'react'

type Props = {
  heroSrc?: string
}

export default function Hero({ heroSrc = '/images/hero/hero-illustration.png' }: Props) {
  return (
    <section className="relative w-full">
      {/* Full-bleed image container: Significantly reduced min-height */}
      <div className="absolute left-0 right-0 top-0 -z-20 w-screen min-h-[55vh] md:min-h-[65vh]"> {/* Adjusted min-height */}
        <img
          src={heroSrc}
          alt="Hero: vehicles, generators and buildings connected to GreenVision"
          className="w-full h-full object-cover"
        />
        {/* Enhanced Dark Gradient Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 dark:from-black/60 dark:to-black/90" />
      </div>

      {/* Spacer so fixed header doesn't overlap content */}
      <div className="h-20" />

      {/* Hero content: Reduced vertical padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24"> {/* Adjusted py */}
        <div className="max-w-4xl">
          {/* Accent Text: Adjusted mb */}
          <div
            className="mb-2 text-xl md:text-2xl font-black uppercase tracking-wider"
            style={{ color: 'var(--accent, #98C948)', textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
          >
            Smart Hydrogen. Cleaner Future.
          </div>

          {/* Main Headline: Slightly adjusted mt and size (lg:text-5xl) */}
          <h1 
            className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-snug font-extrabold text-white"
            style={{ textShadow: "0 3px 6px rgba(0,0,0,0.7)" }}
          >
            Engineering a Profitable Path to Net-Zero
          </h1>

          {/* Body Paragraph: Adjusted mt and size */}
          <p className="mt-6 text-lg text-white/90 dark:text-white/90 leading-relaxed"> {/* Adjusted mt and size */}
            Hydrogen-enabled retrofits, IoT-powered carbon intelligence, and engineered decarbonisation for fleets, DG sets, marine engines and industrial equipment — without replacing existing engines.
          </p>

          {/* Buttons: Adjusted mt and padding */}
          <div className="mt-8 flex flex-wrap gap-4"> {/* Adjusted mt */}
            <Link
              href="/ecosystem"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 font-bold bg-[var(--brand,#33A04A)] text-white shadow-xl hover:opacity-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent,#98C948)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore the Saarthi Ecosystem
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 font-bold border border-white/40 text-slate-100 hover:border-[var(--brand,#33A04A)] hover:bg-[var(--brand,#33A04A)] dark:hover:bg-white/10 transition-colors duration-300"
            >
              Talk to Us
            </Link>
          </div>

          {/* Trusted-by strip (Adjusted mt) */}
          <div className="mt-10 flex items-center gap-4"> {/* Adjusted mt */}
            <div className="text-slate-100 dark:text-white/70 text-base font-medium mr-2">
              Trusted across fleets, industries, ports, mining and power applications.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}