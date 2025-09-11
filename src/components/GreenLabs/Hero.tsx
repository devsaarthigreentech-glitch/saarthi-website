// "use client";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative w-full pt-[88px] bg-white">
//       <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//           <div className="lg:col-span-7">
//             <div className="text-sm font-semibold" style={{ color: "var(--accent,#98C948)" }}>
//               GreenLabs — Advanced R&D for Hydrogen & Emission Reduction
//             </div>

//             <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
//               Engineering the future of hydrogen — from catalyst retrofits to full hydrogen systems.
//             </h1>

//             <p className="mt-6 text-lg text-slate-700 max-w-2xl">
//               GreenLabs is Saarthi GreenTech’s R&D arm focused on practical, ROI-first hydrogen solutions
//               that reduce emissions and deliver measurable economic value.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 text-white font-semibold">
//                 Talk to an Expert
//               </Link>
//               {/* <Link href="/greenlabs#focus" className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3 text-slate-900">
//                 Explore Focus Areas
//               </Link> */}
//             </div>
//           </div>

//           <div className="lg:col-span-5">
//             <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
//               <img
//                 src="/images/greenlabs/hero-labs.png"
//                 alt="GreenLabs research and hydrogen systems"
//                 className="w-full h-full object-cover object-center"
//               />
//               <div className="absolute inset-0 bg-white/20 pointer-events-none" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// src/components/GreenLabs/Hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-slate-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            src="/images/greenlabs/hero-labs.png"
            alt="GreenLabs research and hydrogen systems"
            priority
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-18 md:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-green-300 mb-2">
            GreenLabs — Advanced R&D for Hydrogen & Emission Reduction
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Engineering the future of hydrogen —{" "}
            <span className="text-green-400">from catalyst retrofits to full hydrogen systems.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-200/90">
            GreenLabs is Saarthi GreenTech’s R&D arm focused on practical, ROI-first hydrogen
            solutions that reduce emissions and deliver measurable economic value.
          </p>

          {/* <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 font-semibold text-black"
            >
              Talk to an Expert
            </Link>
            <Link
              href="/greenlabs#focus"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-white/90"
            >
              Explore Focus Areas
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
