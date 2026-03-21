// // import React from 'react';

// // // Define the brand color for consistency
// // const brandColor = 'var(--brand, #33A04A)';

// // // --- INLINE SVG ICON COMPONENTS (Replaces lucide-react) ---

// // const IconTimeline = ({ color }) => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //         <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
// //         <line x1="16" y1="2" x2="16" y2="6" />
// //         <line x1="8" y1="2" x2="8" y2="6" />
// //         <line x1="3" y1="10" x2="21" y2="10" />
// //     </svg>
// // );

// // const IconScale = ({ className, style }) => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
// //         <path d="M16 16v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1" />
// //         <path d="M7 16V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10" />
// //         <line x1="12" y1="4" x2="12" y2="20" />
// //         <path d="M3 3l.7 18.2a.2.2 0 0 0 .4 0L5 3" />
// //         <path d="M21 3l-.7 18.2a.2.2 0 0 1-.4 0L19 3" />
// //     </svg>
// // );

// // const IconZap = ({ className, style }) => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
// //         <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
// //     </svg>
// // );

// // const IconTruck = ({ className, style }) => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
// //         <path d="M5 18H3c-1.1 0-2-.9-2-2V9a2 2 0 0 1 2-2h3l2-2h4l2 2h3a2 2 0 0 1 2 2v7c0 1.1-.9 2-2 2h-1" />
// //         <path d="M18 18h2c1.1 0 2-.9 2-2v-7a2 2 0 0 0-2-2h-3l-2 2h-4l-2-2H3a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2" />
// //         <circle cx="7.5" cy="18.5" r="2.5" />
// //         <circle cx="17.5" cy="18.5" r="2.5" />
// //     </svg>
// // );

// // const IconTarget = ({ className, style }) => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
// //         <circle cx="12" cy="12" r="10" />
// //         <circle cx="12" cy="12" r="6" />
// //         <circle cx="12" cy="12" r="2" />
// //     </svg>
// // );

// // const IconBookOpen = ({ className, style }) => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
// //         <path d="M2 19.5c0 .769.545 1.396 1.218 1.488L12 21.5l8.782-.512c.673-.092 1.218-.719 1.218-1.488V16c0-1.077-.923-2-2-2h-1V3c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v11H3c-1.077 0-2 .923-2 2v3.5z" />
// //         <path d="M21 15v-2" />
// //         <path d="M22 19V6" />
// //     </svg>
// // );


// // const MissionJourney = () => {
    
// //     // Icon mapping updated to use inline SVG components
// //     const philosophyPoints = [
// //         { icon: IconScale, text: "Practical, not aspirational" },
// //         { icon: IconZap, text: "Affordable, not elite" },
// //         { icon: IconTruck, text: "Deployable today, not dependent on distant technologies" },
// //         { icon: IconTarget, text: "Scientifically validated, not promised" },
// //         { icon: IconBookOpen, text: "A catalyst for growth, not a burden on businesses" },
// //     ];

// //     const roadmapPoints = [
// //         "Global adoption of retrofit hydrogen technology",
// //         "Integration of real-time IoT and ESG intelligence through GreenVision",
// //         "Partnerships that accelerate emission reduction at enterprise and national levels",
// //         "Innovation pipelines through GreenLabs to advance hydrogen-based solutions",
// //     ];

// //     return (
// //         // <div className="bg-gray-50 dark:bg-gray-950 py-16 md:py-24 text-gray-800 dark:text-gray-200 font-inter">
// //         //     <div className="container mx-auto px-4 max-w-7xl">
// //                 <>
// //                 {/* Main Mission Header */}
// //                 <section className="relative bg-slate-900 text-white">
// //     <div className="container mx-auto px-6 py-20 md:py-24 text-center max-w-6xl">
// //       <p
// //         className="text-sm font-semibold uppercase tracking-widest mb-3"
// //         style={{ color: brandColor }}
// //       >
// //         Driving Change
// //       </p>

// //       <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
// //         Our Journey & Mission
// //       </h1>

// //       <p className="mt-4 text-xl md:text-2xl text-slate-300 font-medium">
// //         Engineering a Profitable Path to Net-Zero
// //       </p>
// //     </div>
// //   </section>


// //                 {/* Section 1: A Journey Born From a Simple Question */}
// //                 <section className="mb-16 md:mb-24 p-8 rounded-3xl shadow-xl bg-white dark:bg-gray-900 border-t-4" style={{ borderColor: brandColor }}>
// //                     <div className="flex items-center justify-center mb-6">
// //                         <IconTimeline color={brandColor} />
// //                     </div>
// //                     <h4 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
// //                         How do we decarbonise the world today, not ten years from now?
// //                     </h4>
// //                     <div className="max-w-4xl mx-auto text-xl space-y-4 text-gray-700 dark:text-gray-300">
// //                         <p>
// //                             Saarthi GreenTech was born from this question — not in a lab, but in the real world where diesel engines power logistics, manufacturing, shipping, mining, telecom infrastructure, and essential public services. The world cannot simply replace these engines overnight. Yet the climate cannot wait for long-term transitions.
// //                         </p>
// //                         <p className="font-semibold" style={{ color: brandColor }}>
// //                             We realised the world needed a solution that was practical, immediate, and scalable.
// //                         </p>
// //                         <ul className="list-none space-y-2 pl-0">
// //                             <li><span className="text-2xl mr-2 font-bold" style={{ color: brandColor }}>→</span> A solution that reduces emissions without replacing the engines.</li>
// //                             <li><span className="text-2xl mr-2 font-bold" style={{ color: brandColor }}>→</span> A solution that saves fuel while saving the planet.</li>
// //                             <li><span className="text-2xl mr-2 font-bold" style={{ color: brandColor }}>→</span> A solution that works across any engine, any size, any geography.</li>
// //                         </ul>
// //                         <p>
// //                             This is where our journey began.
// //                         </p>
// //                     </div>
// //                 </section>

// //                 {/* Section 2: From an Idea to a Breakthrough (The Timeline) */}
// //                 <section className="mb-16 md:mb-24">
// //     <h4 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
// //         From an Idea to a Breakthrough
// //     </h4>
// //     <div className="relative max-w-4xl mx-auto">
// //         {/* Timeline Connector Line */}
// //         <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

// //         {/* Timeline Items */}
// //         <div className="space-y-12">
// //             {/* Item 1: Experimentation (Content on Left) */}
// //             <div className="flex flex-col md:flex-row items-center md:items-start relative">
// //                 <div className="md:w-1/2 md:pr-10 text-right space-y-2 order-2 md:order-1">
// //                     <h5 className="text-xl font-bold text-gray-900 dark:text-white">Years of Experimentation</h5>
// //                     <p className="text-lg text-gray-600 dark:text-gray-400">
// //                         Years of experimentation, failures, redesigns, and repeated field trials followed. We went from small engines to heavy trucks, from city buses to remote diesel generators, from testing grounds in India to validation trials across Asia.
// //                     </p>
// //                 </div>
// //                 {/* <div className="z-10 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border-4 mb-4 md:mb-0" style={{ borderColor: brandColor }}>
// //                     <span className="text-lg font-bold" style={{ color: brandColor }}>1</span>
// //                 </div> */}
// //                 {/* Empty Spacer on Right */}
// //                 <div className="md:w-1/2 md:pl-10 order-1 md:order-2"></div>
// //             </div>
            
// //             {/* Item 2: Clarity and Confirmation (Content on Right) - FIXED */}
// //             <div className="flex flex-col md:flex-row items-center md:items-start relative">
// //                 {/* Empty Spacer on Left (order-2 on mobile, order-1 on desktop) */}
// //                 <div className="md:w-1/2 md:pr-10 order-2 md:order-1"></div> 

// //                 {/* <div className="z-10 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border-4 mb-4 md:mb-0" style={{ borderColor: brandColor }}>
// //                     <span className="text-lg font-bold" style={{ color: brandColor }}>2</span>
// //                 </div>
// //                  */}
// //                 {/* Content Block on Right (order-1 on mobile, order-2 on desktop) */}
// //                 <div className="md:w-1/2 md:pl-10 text-left space-y-2 order-1 md:order-2">
// //                     <h5 className="text-xl font-bold text-gray-900 dark:text-white">The Breakthrough Confirmation</h5>
// //                     <p className="text-lg text-gray-600 dark:text-gray-400">
// //                         Each setback sharpened the clarity of our vision. Each breakthrough confirmed that hydrogen-assisted combustion could become a powerful bridge to a cleaner world.
// //                     </p>
// //                 </div>
// //             </div>

// //             {/* Item 3: The Proprietary System (Content on Left) */}
// //             <div className="flex flex-col md:flex-row items-center md:items-start relative">
// //                 <div className="md:w-1/2 md:pr-10 text-right space-y-2 order-2 md:order-1">
// //                     <h5 className="text-xl font-bold text-gray-900 dark:text-white">Engineered for Dual Benefit</h5>
// //                     <p className="text-lg text-gray-600 dark:text-gray-400">
// //                         Our proprietary hydrogen retrofit systems eventually emerged from this long, disciplined pursuit — engineered to deliver both measurable decarbonisation and economic value. This dual benefit defines everything we build.
// //                     </p>
// //                 </div>
// //                 {/* <div className="z-10 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border-4 mb-4 md:mb-0" style={{ borderColor: brandColor }}>
// //                     <span className="text-lg font-bold" style={{ color: brandColor }}>3</span>
// //                 </div> */}
// //                 <div className="md:w-1/2 md:pl-10 order-1 md:order-2"></div>
// //             </div>
// //         </div>
// //         <p className='mt-8 text-center text-gray-500 dark:text-gray-400'>
            
// //         </p>
// //     </div>
// // </section>
                

// //                 {/* Section 3: A Mission Rooted in Purpose */}
// //                 <section className="mb-16 md:mb-24 p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl">
// //                     <h4 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
// //                         A Mission Rooted in Purpose, Not Trends
// //                     </h4>
// //                     <p className="text-center text-xl max-w-3xl mx-auto mb-10 text-gray-700 dark:text-gray-300">
// //                         At Saarthi, we believe sustainability must be:
// //                     </p>
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //                         {philosophyPoints.map((item, index) => {
// //                             const Icon = item.icon;
// //                             return (
// //                                 <div key={index} className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-md">
// //                                     <Icon className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: brandColor }} />
// //                                     <p className="text-lg font-medium text-gray-900 dark:text-white">{item.text}</p>
// //                                 </div>
// //                             );
// //                         })}
// //                     </div>
// //                     <div className="mt-10 text-center max-w-4xl mx-auto text-lg pt-4 border-t border-gray-200 dark:border-gray-800">
// //                         <p className="text-gray-700 dark:text-gray-300 mb-2">
// //                             We exist to solve the world’s diesel problem at scale — by transforming engines already in operation.
// //                         </p>
// //                         <p className="text-xl font-semibold" style={{ color: brandColor }}>
// //                             Our hydrogen-enabled systems deliver immediate emission reduction and notable fuel savings, creating a path where profitability and sustainability reinforce each other.
// //                         </p>
// //                     </div>
// //                 </section>

// //                 {/* Section 4: The Saarthi Philosophy */}
// //                 <section className="mb-16 md:mb-24 p-8 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-inner">
// //                     <h4 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
// //                         The Saarthi Philosophy
// //                     </h4>
// //                     <div className="max-w-4xl mx-auto text-xl space-y-4 text-gray-700 dark:text-gray-300">
// //                         <p className="text-center italic mb-6">
// //                             Our name reflects who we are. In ancient tradition, a Saarthi is a guide, a navigator, the one who helps others travel farther with clarity and strength.
// //                         </p>
// //                         <ul className="list-none space-y-3 pl-0">
// //                             <li className="flex items-start"><span className="text-2xl mr-3 font-bold" style={{ color: brandColor }}>•</span> <span>Guiding industries on their decarbonisation journey</span></li>
// //                             <li className="flex items-start"><span className="text-2xl mr-3 font-bold" style={{ color: brandColor }}>•</span> <span>Engineering solutions that create measurable value</span></li>
// //                             <li className="flex items-start"><span className="text-2xl mr-3 font-bold" style={{ color: brandColor }}>•</span> <span>Supporting organisations in transitioning smoothly and affordably</span></li>
// //                             <li className="flex items-start"><span className="text-2xl mr-3 font-bold" style={{ color: brandColor }}>•</span> <span>Building a future where sustainability is not an option, but an advantage</span></li>
// //                         </ul>
// //                     </div>
// //                 </section>
                
// //                 {/* Section 5: Where the Journey Leads Next (Roadmap) */}
// //                 <section className="mb-16 md:mb-24">
// //                     <h4 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
// //                         Where the Journey Leads Next
// //                     </h4>
// //                     <p className="text-center text-xl max-w-4xl mx-auto mb-10 text-gray-700 dark:text-gray-300">
// //                         We stand at an inflection point. Hydrogen-enabled decarbonisation has moved from possibility to proof. The next chapter is scale — across fleets, factories, telecom networks, ports, marine engines, and beyond.
// //                     </p>
// //                     <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
// //                         {roadmapPoints.map((item, index) => (
// //                             <div key={index} className="flex items-start space-x-4 p-5 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
// //                                 <span className="text-2xl font-extrabold flex-shrink-0" style={{ color: brandColor }}>{index + 1}.</span>
// //                                 <p className="text-lg text-gray-900 dark:text-white font-medium">{item}</p>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </section>

// //                 {/* Final Mission Statement (Call-to-Action Style) */}
// //                 <section className="bg-gradient-to-r from-green-600 to-green-800 p-10 md:p-16 rounded-3xl shadow-2xl text-white text-center">
// //                     <h4 className="text-3xl md:text-4xl font-extrabold mb-4">
// //                         Our Core Mission
// //                     </h4>
// //                     <p className="text-xl md:text-2xl font-light max-w-5xl mx-auto leading-relaxed">
// //                         To make sustainability profitable, scalable, and accessible by engineering hydrogen-enabled solutions that reduce emissions today and build a cleaner tomorrow.
// //                     </p>
// //                     <div className="mt-6 text-lg font-medium space-y-1">
// //                         <p>Not merely to innovate, but to create impact.</p>
// //                         <p>Not just to build technology, but to shape an ecosystem.</p>
// //                         <p>Not just to decarbonise machines, but to empower people and industries to lead the transition.</p>
// //                     </div>
// //                     <p className="mt-8 text-base italic opacity-80">
// //                         The journey continues — with purpose, persistence, and an unwavering belief that the future must be built, not awaited.
// //                     </p>
// //                 </section>
                
// //             {/* </div>
// //         </div> */}
// // </>
// //     );
// // };
// // export default MissionJourney;
// // PurposePage.tsx
// // Auto-converted from standalone HTML → Next.js page component.
// // Preserves all original styling and interactivity.
// //
// // Usage: Place in app/<route>/page.tsx
// // The component includes its own header/footer from the original HTML.
// // Remove those blocks if you want to use your site's shared layout.

// "use client";

// import { useEffect, useRef } from "react";

// const PAGE_CSS = `:root {
//     --brand:        #1B6B3D;
//     --brand-dark:   #155730;
//     --brand-light:  #33A04A;
//     --brand-faint:  #f0f9f3;
//     --accent:       #3ec87e;
//     --gold:         #c8a84b;
//     --slate-900:    #0f172a;
//     --slate-800:    #1e293b;
//     --slate-700:    #334155;
//     --slate-600:    #475569;
//     --slate-400:    #94a3b8;
//     --slate-200:    #e2e8f0;
//     --slate-100:    #f1f5f9;
//     --slate-50:     #f8fafc;
//     --white:        #ffffff;
//     --max-w:        1200px;
//   }
//   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//   html { scroll-behavior: smooth; }
//   body {
//     font-family: 'Inter', sans-serif;
//     background: var(--white);
//     color: var(--slate-800);
//     line-height: 1.6;
//     -webkit-font-smoothing: antialiased;
//   }

//   /* ── NAV ── */
//   nav {
//     position: fixed; top: 0; left: 0; right: 0; z-index: 100;
//     background: rgba(255,255,255,0.96);
//     backdrop-filter: blur(8px);
//     border-bottom: 1px solid var(--slate-200);
//     box-shadow: 0 1px 3px rgba(0,0,0,0.06);
//   }
//   .nav-inner {
//     max-width: var(--max-w);
//     margin: 0 auto; padding: 0 2rem;
//     display: flex; align-items: center; justify-content: space-between;
//     height: 68px;
//   }
//   .nav-logo { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }
//   .nav-logo-box {
//     width: 44px; height: 44px;
//     background: var(--brand);
//     border-radius: 8px;
//     display: flex; align-items: center; justify-content: center;
//   }
//   .nav-logo-box svg { width: 26px; height: 26px; }
//   .nav-logo-text { font-size: 1rem; font-weight: 700; color: var(--slate-900); line-height: 1.2; }
//   .nav-logo-sub { font-size: 0.68rem; font-weight: 500; color: var(--brand); letter-spacing: 0.02em; }
//   .nav-badge {
//     font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em;
//     text-transform: uppercase; color: var(--brand);
//     background: var(--brand-faint);
//     padding: 0.3rem 0.8rem; border-radius: 100px;
//     border: 1px solid rgba(27,107,61,0.2);
//   }

//   /* ── HERO ── */
//   .hero {
//     padding-top: 68px;
//     background: var(--slate-900);
//     min-height: 68vh;
//     display: flex; align-items: center;
//     position: relative; overflow: hidden;
//   }
//   .hero::before {
//     content: '';
//     position: absolute; inset: 0;
//     background:
//       radial-gradient(ellipse at 70% 50%, rgba(27,107,61,0.18) 0%, transparent 65%),
//       radial-gradient(ellipse at 20% 80%, rgba(62,200,126,0.08) 0%, transparent 50%);
//     pointer-events: none;
//   }
//   .hero-grid-bg {
//     position: absolute; inset: 0;
//     background-image:
//       linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
//       linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
//     background-size: 60px 60px;
//     pointer-events: none;
//   }
//   .hero-inner {
//     max-width: var(--max-w); margin: 0 auto; padding: 5rem 2rem;
//     position: relative; z-index: 1;
//     display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
//   }
//   .hero-eyebrow {
//     display: inline-flex; align-items: center; gap: 0.5rem;
//     font-size: 0.72rem; font-weight: 600; letter-spacing: 0.16em;
//     text-transform: uppercase; color: var(--accent);
//     margin-bottom: 1.5rem;
//   }
//   .hero-eyebrow::before {
//     content: ''; width: 24px; height: 2px; background: var(--accent); border-radius: 1px;
//   }
//   .hero-title {
//     font-size: clamp(2.4rem, 4vw, 3.8rem);
//     font-weight: 800; line-height: 1.1;
//     color: var(--white); letter-spacing: -0.03em;
//     margin-bottom: 1.5rem;
//   }
//   .hero-title .highlight { color: var(--accent); }
//   .hero-desc {
//     font-size: 1.05rem; line-height: 1.75;
//     color: rgba(255,255,255,0.62); max-width: 500px;
//     margin-bottom: 2.5rem;
//   }
//   .hero-stats {
//     display: flex; gap: 2rem; padding-top: 2rem;
//     border-top: 1px solid rgba(255,255,255,0.1);
//   }
//   .hero-stat-num {
//     font-size: 1.8rem; font-weight: 800;
//     color: var(--white); line-height: 1;
//   }
//   .hero-stat-label {
//     font-size: 0.7rem; font-weight: 500;
//     color: rgba(255,255,255,0.45);
//     text-transform: uppercase; letter-spacing: 0.08em;
//     margin-top: 0.2rem;
//   }
//   .hero-right-card {
//     background: rgba(255,255,255,0.05);
//     border: 1px solid rgba(255,255,255,0.1);
//     border-radius: 16px;
//     padding: 2.5rem;
//     backdrop-filter: blur(4px);
//   }
//   .hero-card-label {
//     font-size: 0.65rem; font-weight: 700; letter-spacing: 0.18em;
//     text-transform: uppercase; color: var(--accent); margin-bottom: 1.2rem;
//   }
//   .hero-card-text {
//     font-size: 1rem; line-height: 1.8;
//     color: rgba(255,255,255,0.75);
//   }
//   .hero-card-text strong { color: white; font-weight: 600; }
//   .hero-card-points { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; }
//   .hero-card-point {
//     display: flex; align-items: flex-start; gap: 0.6rem;
//     font-size: 0.9rem; color: rgba(255,255,255,0.7);
//   }
//   .hero-card-point::before {
//     content: '→'; color: var(--accent); font-weight: 700;
//     flex-shrink: 0; margin-top: 1px;
//   }

//   /* ── SHARED ── */
//   .container { max-width: var(--max-w); margin: 0 auto; padding: 0 2rem; }
//   .section-label {
//     display: inline-flex; align-items: center; gap: 0.5rem;
//     font-size: 0.7rem; font-weight: 700; letter-spacing: 0.16em;
//     text-transform: uppercase; color: var(--brand);
//     margin-bottom: 1rem;
//   }
//   .section-label::before {
//     content: ''; width: 20px; height: 2px; background: var(--brand); border-radius: 1px;
//   }
//   .section-title {
//     font-size: clamp(1.8rem, 3vw, 2.8rem);
//     font-weight: 800; line-height: 1.15;
//     letter-spacing: -0.025em; color: var(--slate-900);
//   }
//   .section-title .brand { color: var(--brand); }

//   /* ── VMG SECTION ── */
//   .vmg-section { padding: 7rem 0; background: var(--white); }
//   .vmg-intro { max-width: 680px; margin-bottom: 5rem; }
//   .vmg-intro-text {
//     font-size: 1.08rem; line-height: 1.8;
//     color: var(--slate-600); margin-top: 1.2rem;
//   }
//   .vmg-grid { display: flex; flex-direction: column; gap: 0; }
//   .vmg-row {
//     display: grid; grid-template-columns: 260px 1fr;
//     border-top: 1px solid var(--slate-200);
//     padding: 3.5rem 0;
//     gap: 4rem; align-items: start;
//     transition: background 0.3s;
//     cursor: default;
//   }
//   .vmg-row:hover { background: var(--brand-faint); margin: 0 -2rem; padding: 3.5rem 2rem; }
//   .vmg-row:last-child { border-bottom: 1px solid var(--slate-200); }
//   .vmg-meta {}
//   .vmg-num {
//     font-size: 0.65rem; font-weight: 700; letter-spacing: 0.2em;
//     text-transform: uppercase; color: var(--brand);
//     display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.5rem;
//   }
//   .vmg-num::after {
//     content: ''; flex: 1; height: 1px; background: var(--brand-light);
//     opacity: 0.3; max-width: 40px;
//   }
//   .vmg-type {
//     font-size: 1.4rem; font-weight: 800;
//     color: var(--slate-900); letter-spacing: -0.02em;
//   }
//   .vmg-content {}
//   .vmg-headline {
//     font-size: 1.25rem; font-weight: 700; line-height: 1.4;
//     color: var(--slate-900); margin-bottom: 1rem;
//     letter-spacing: -0.01em;
//   }
//   .vmg-headline .brand { color: var(--brand); }
//   .vmg-body { font-size: 0.95rem; line-height: 1.8; color: var(--slate-600); max-width: 640px; }

//   /* ── COMMITMENT SECTION ── */
//   .commitment-section {
//     padding: 7rem 0;
//     background: var(--slate-50);
//     border-top: 1px solid var(--slate-200);
//   }
//   .commitment-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; margin-top: 4rem; }
//   .commitment-text {
//     font-size: 1rem; line-height: 1.9; color: var(--slate-700);
//   }
//   .commitment-text strong { color: var(--brand); font-weight: 700; }
//   .commitment-text p + p { margin-top: 1.2rem; }
//   .pillar-list { display: flex; flex-direction: column; gap: 1rem; }
//   .pillar {
//     background: var(--white);
//     border: 1px solid var(--slate-200);
//     border-radius: 12px;
//     padding: 1.4rem 1.5rem;
//     display: flex; gap: 1rem; align-items: flex-start;
//     transition: border-color 0.2s, box-shadow 0.2s;
//     cursor: default;
//   }
//   .pillar:hover {
//     border-color: var(--brand-light);
//     box-shadow: 0 4px 16px rgba(27,107,61,0.08);
//   }
//   .pillar-icon {
//     width: 40px; height: 40px; min-width: 40px;
//     background: var(--brand-faint);
//     border-radius: 10px;
//     display: flex; align-items: center; justify-content: center;
//     font-size: 1.1rem;
//     border: 1px solid rgba(27,107,61,0.15);
//   }
//   .pillar-name { font-size: 0.85rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.25rem; }
//   .pillar-desc { font-size: 0.82rem; color: var(--slate-600); line-height: 1.55; }

//   /* ── SECTORS ── */
//   .sectors-section {
//     padding: 7rem 0; background: var(--white);
//     border-top: 1px solid var(--slate-200);
//   }
//   .sectors-header { margin-bottom: 3.5rem; }
//   .sectors-grid {
//     display: grid; grid-template-columns: repeat(3, 1fr);
//     gap: 1px; background: var(--slate-200);
//     border: 1px solid var(--slate-200); border-radius: 12px; overflow: hidden;
//   }
//   .sector-card {
//     background: var(--white); padding: 2rem 1.8rem;
//     display: flex; flex-direction: column;
//     transition: background 0.2s; cursor: default;
//     position: relative; overflow: hidden;
//   }
//   .sector-card::after {
//     content: ''; position: absolute; bottom: 0; left: 0; right: 0;
//     height: 3px; background: var(--brand);
//     transform: scaleX(0); transform-origin: left;
//     transition: transform 0.3s ease;
//   }
//   .sector-card:hover { background: var(--brand-faint); }
//   .sector-card:hover::after { transform: scaleX(1); }
//   .sector-icon { font-size: 1.8rem; margin-bottom: 1rem; }
//   .sector-name { font-size: 0.85rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.04em; }
//   .sector-desc { font-size: 0.8rem; color: var(--slate-500); line-height: 1.55; flex: 1; }
//   .sector-category {
//     display: inline-block; margin-bottom: 0.75rem;
//     font-size: 0.6rem; font-weight: 700; letter-spacing: 0.16em;
//     text-transform: uppercase; color: var(--brand);
//     background: var(--brand-faint); border: 1px solid rgba(27,107,61,0.18);
//     padding: 0.2rem 0.6rem; border-radius: 100px;
//   }
//   .sector-tag {
//     margin-top: 1rem; font-size: 0.65rem; font-weight: 700;
//     color: var(--brand); letter-spacing: 0.12em; text-transform: uppercase;
//   }

//   /* ── R&D ── */
//   .rd-section {
//     padding: 7rem 0;
//     background: var(--slate-900);
//     border-top: 1px solid rgba(255,255,255,0.06);
//   }
//   .rd-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
//   .rd-section .section-label { color: var(--accent); }
//   .rd-section .section-label::before { background: var(--accent); }
//   .rd-section .section-title { color: var(--white); }
//   .rd-section .section-title .brand { color: var(--accent); }
//   .rd-desc { font-size: 0.95rem; line-height: 1.75; color: rgba(255,255,255,0.55); margin: 1.2rem 0 2rem; }
//   .rd-points { display: flex; flex-direction: column; gap: 1.6rem; }
//   .rd-point { display: flex; gap: 1rem; align-items: flex-start; }
//   .rd-point-num {
//     font-size: 0.62rem; font-weight: 700; letter-spacing: 0.12em;
//     color: var(--accent); min-width: 28px; padding-top: 2px;
//   }
//   .rd-point-title { font-size: 0.88rem; font-weight: 700; color: var(--white); margin-bottom: 0.3rem; }
//   .rd-point-desc { font-size: 0.82rem; color: rgba(255,255,255,0.5); line-height: 1.6; }
//   .rd-visual {
//     background: rgba(255,255,255,0.04);
//     border: 1px solid rgba(255,255,255,0.08);
//     border-radius: 16px; padding: 2.5rem;
//     display: flex; flex-direction: column; gap: 1.2rem;
//   }
//   .rd-stat-row { display: flex; flex-direction: column; gap: 0.3rem; }
//   .rd-stat-bar-wrap {
//     height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;
//   }
//   .rd-stat-bar { height: 100%; background: var(--brand-light); border-radius: 3px; }
//   .rd-stat-label { display: flex; justify-content: space-between; }
//   .rd-stat-name { font-size: 0.75rem; color: rgba(255,255,255,0.5); font-weight: 500; }
//   .rd-stat-val { font-size: 0.75rem; color: var(--accent); font-weight: 700; }
//   .rd-visual-title {
//     font-size: 0.65rem; font-weight: 700; letter-spacing: 0.16em;
//     text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 0.5rem;
//   }

//   /* ── FOUNDER QUOTE ── */
//   .founder-section {
//     padding: 7rem 0;
//     background: var(--brand);
//     position: relative; overflow: hidden;
//   }
//   .founder-section::before {
//     content: '"';
//     position: absolute; top: -100px; left: 1rem;
//     font-family: 'Inter', sans-serif;
//     font-size: 28rem; font-weight: 900;
//     color: rgba(255,255,255,0.04);
//     line-height: 1; pointer-events: none; user-select: none;
//   }
//   .founder-layout {
//     display: grid; grid-template-columns: 260px 1fr;
//     gap: 4rem; align-items: center;
//     position: relative; z-index: 1;
//   }
//   .founder-photo-wrap {
//     display: flex; flex-direction: column; align-items: center; gap: 1rem;
//   }
//   .founder-photo {
//     width: 200px; height: 200px;
//     border-radius: 50%; overflow: hidden;
//     border: 4px solid rgba(255,255,255,0.25);
//     box-shadow: 0 8px 32px rgba(0,0,0,0.25);
//     flex-shrink: 0;
//     background: var(--brand-dark);
//   }
//   .founder-photo img {
//     width: 100%; height: 100%;
//     object-fit: cover;
//     object-position: center top;
//     display: block;
//   }
//   .founder-name-card { text-align: center; }
//   .founder-name { font-size: 0.95rem; font-weight: 700; color: white; }
//   .founder-title-label { font-size: 0.72rem; color: rgba(255,255,255,0.6); margin-top: 0.2rem; }
//   .founder-quote-text {
//     font-size: clamp(1.1rem, 1.8vw, 1.55rem);
//     font-weight: 400; font-style: italic;
//     line-height: 1.7; color: rgba(255,255,255,0.92);
//     margin-bottom: 2rem;
//   }
//   .founder-quote-text em { font-style: normal; font-weight: 700; color: white; }
//   .founder-divider {
//     width: 40px; height: 2px; background: rgba(255,255,255,0.4); border-radius: 1px; margin-bottom: 1rem;
//   }

//   /* ── OUTCOMES ── */
//   .outcomes-section {
//     padding: 7rem 0; background: var(--slate-50);
//     border-top: 1px solid var(--slate-200);
//   }
//   .outcomes-grid {
//     display: grid; grid-template-columns: repeat(3, 1fr);
//     gap: 1px; background: var(--slate-200);
//     border: 1px solid var(--slate-200); border-radius: 12px; overflow: hidden;
//     margin-top: 3.5rem;
//   }
//   .outcome-card {
//     background: var(--white); padding: 2.5rem 2rem;
//     transition: background 0.2s; cursor: default;
//   }
//   .outcome-card:hover { background: var(--brand-faint); }
//   .outcome-metric {
//     font-size: 3rem; font-weight: 800;
//     color: var(--brand); line-height: 1; display: block;
//     letter-spacing: -0.03em; margin-bottom: 0.5rem;
//   }
//   .outcome-metric .unit { font-size: 1.5rem; }
//   .outcome-name { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--slate-900); margin-bottom: 0.4rem; }
//   .outcome-desc { font-size: 0.85rem; color: var(--slate-500); line-height: 1.65; }

//   /* ── CLOSING CTA ── */
//   .cta-section {
//     padding: 6rem 0;
//     background: linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%);
//     text-align: center;
//   }
//   .cta-inner { max-width: 640px; margin: 0 auto; }
//   .cta-section .section-label { justify-content: center; color: rgba(255,255,255,0.7); }
//   .cta-section .section-label::before { background: rgba(255,255,255,0.5); }
//   .cta-title {
//     font-size: clamp(1.6rem, 3vw, 2.6rem);
//     font-weight: 800; color: white;
//     letter-spacing: -0.025em; line-height: 1.2; margin: 1rem 0 0.8rem;
//   }
//   .cta-sub { font-size: 1rem; color: rgba(255,255,255,0.7); margin-bottom: 2.5rem; line-height: 1.7; }
//   .cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
//   .btn-white {
//     display: inline-flex; align-items: center; gap: 0.4rem;
//     background: white; color: var(--brand);
//     font-size: 0.88rem; font-weight: 700;
//     padding: 0.85rem 1.8rem; border-radius: 8px;
//     text-decoration: none; transition: all 0.2s;
//   }
//   .btn-white:hover { background: var(--slate-100); transform: translateY(-1px); }
//   .btn-outline-white {
//     display: inline-flex; align-items: center; gap: 0.4rem;
//     border: 2px solid rgba(255,255,255,0.5); color: white;
//     font-size: 0.88rem; font-weight: 700;
//     padding: 0.85rem 1.8rem; border-radius: 8px;
//     text-decoration: none; transition: all 0.2s;
//   }
//   .btn-outline-white:hover { border-color: white; background: rgba(255,255,255,0.1); }

//   /* ── FOOTER ── */
//   .page-footer {
//     background: var(--slate-900);
//     padding: 2.5rem 0;
//     border-top: 1px solid rgba(255,255,255,0.06);
//   }
//   .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
//   .footer-brand { font-size: 0.88rem; color: rgba(255,255,255,0.5); }
//   .footer-brand strong { color: white; }
//   .footer-links { display: flex; gap: 1.5rem; }
//   .footer-links a { font-size: 0.8rem; color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.2s; }
//   .footer-links a:hover { color: var(--accent); }

//   /* ── REVEAL ANIMATIONS ── */
//   .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
//   .reveal.visible { opacity: 1; transform: translateY(0); }
//   .reveal-delay-1 { transition-delay: 0.1s; }
//   .reveal-delay-2 { transition-delay: 0.2s; }
//   .reveal-delay-3 { transition-delay: 0.3s; }
//   .reveal-delay-4 { transition-delay: 0.4s; }

//   /* ── RESPONSIVE ── */
//   @media (max-width: 900px) {
//     .hero-inner { grid-template-columns: 1fr; gap: 3rem; padding: 4rem 1.5rem; }
//     .vmg-row { grid-template-columns: 1fr; gap: 1.5rem; padding: 2.5rem 0; }
//     .vmg-row:hover { margin: 0; padding: 2.5rem 0; }
//     .commitment-layout { grid-template-columns: 1fr; gap: 3rem; }
//     .sectors-grid { grid-template-columns: repeat(2, 1fr); }
//     .rd-layout { grid-template-columns: 1fr; gap: 3rem; }
//     .founder-layout { grid-template-columns: 1fr; gap: 2.5rem; text-align: center; }
//     .founder-photo-wrap { flex-direction: row; justify-content: flex-start; text-align: left; gap: 1.5rem; }
//     .founder-divider { margin: 0 auto 1rem; }
//     .outcomes-grid { grid-template-columns: 1fr; }
//     .container { padding: 0 1.5rem; }
//     nav .nav-inner { padding: 0 1.5rem; }
//   }`;

// const PAGE_HTML = `<!-- NAV -->
// <nav>
//   <div class="nav-inner">
//     <a class="nav-logo" href="#">
//       <div class="nav-logo-box">
//         <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <text x="2" y="19" font-family="Inter,sans-serif" font-weight="900" font-size="13" fill="white">SGT</text>
//         </svg>
//       </div>
//       <div>
//         <div class="nav-logo-text">SGT HydroEdge</div>
//         <div class="nav-logo-sub">Profitable Decarbonisation</div>
//       </div>
//     </a>
//     <span class="nav-badge">Our Purpose</span>
//   </div>
// </nav>

// <!-- HERO -->
// <section class="hero">
//   <div class="hero-grid-bg"></div>
//   <div class="hero-inner">
//     <div>
//       <div class="hero-eyebrow">About SGT HydroEdge</div>
//       <h1 class="hero-title">Built for the<br><span class="highlight">hardest</span><br>problems.</h1>
//       <p class="hero-desc">The sectors the world struggles to decarbonise. The assets no one else will retrofit. That is where we chose to work — and we built the technology, platform, and expertise to do it well.</p>
//       <div class="hero-stats">
//         <div>
//           <div class="hero-stat-num">3+</div>
//           <div class="hero-stat-label">Years R&D</div>
//         </div>
//         <div>
//           <div class="hero-stat-num">6</div>
//           <div class="hero-stat-label">Verticals</div>
//         </div>
//         <div>
//           <div class="hero-stat-num">4</div>
//           <div class="hero-stat-label">Continents</div>
//         </div>
//         <div>
//           <div class="hero-stat-num">Zero</div>
//           <div class="hero-stat-label">Engine Replacements</div>
//         </div>
//       </div>
//     </div>
//     <div class="hero-right-card">
//       <div class="hero-card-label">How do we decarbonise today — not ten years from now?</div>
//       <p class="hero-card-text">SGT HydroEdge was born from this question — not in a lab, but on the ground where <strong>boilers, kilns, marine engines, generators, and mining rigs</strong> power the world's most essential industries.<br><br>The world cannot replace these assets overnight. But the climate cannot wait. We realised it needed a solution that was:</p>
//       <div class="hero-card-points">
//         <div class="hero-card-point">Immediate impact — not contingent on future technologies</div>
//         <div class="hero-card-point">Economically positive — saving fuel while saving emissions</div>
//         <div class="hero-card-point">Retrofit-first — any asset, any fuel, any geography</div>
//       </div>
//     </div>
//   </div>
// </section>

// <!-- VISION · MISSION · GOAL -->
// <section class="vmg-section">
//   <div class="container">
//     <div class="vmg-intro reveal">
//       <span class="section-label">Vision · Mission · Goal</span>
//       <h2 class="section-title">What we stand for,<br><span class="brand">where we are headed.</span></h2>
//       <p class="vmg-intro-text">Three statements that define everything we build, every partnership we form, and every deployment we make.</p>
//     </div>
//     <div class="vmg-grid">
//       <div class="vmg-row reveal">
//         <div class="vmg-meta">
//           <div class="vmg-num">01 · Vision</div>
//           <div class="vmg-type">Vision</div>
//         </div>
//         <div class="vmg-content">
//           <h3 class="vmg-headline">A world where <span class="brand">every industrial combustion asset</span> on earth operates at its cleanest possible efficiency — today, not in 2050.</h3>
//           <p class="vmg-body">The climate challenge cannot wait for tomorrow's engine designs. Billions of tonnes of CO₂ are emitted every year by machinery already in operation — boilers, kilns, furnaces, ships, generators, mining equipment. Our vision is to retrofit the present, not replace it. To make every combustion asset, regardless of fuel type, age, or geography, measurably cleaner starting from the day of installation.</p>
//         </div>
//       </div>
//       <div class="vmg-row reveal reveal-delay-1">
//         <div class="vmg-meta">
//           <div class="vmg-num">02 · Mission</div>
//           <div class="vmg-type">Mission</div>
//         </div>
//         <div class="vmg-content">
//           <h3 class="vmg-headline">Deliver <span class="brand">measurable decarbonisation</span> to hard-to-abate industries — profitably, retrofitably, and with verified data.</h3>
//           <p class="vmg-body">We manufacture India's first industrial on-demand hydrogen (HHO) generation systems and deploy them across boilers, kilns, furnaces & smelters, marine engines, DG power systems, and engines on wheels — backed by AI-powered monitoring and expert consulting. Every deployment reduces fuel consumption, cuts CO₂ and particulate emissions, and generates ESG-grade data. No engine replacement. No fuel change. No operational disruption. Verified results, from day one.</p>
//         </div>
//       </div>
//       <div class="vmg-row reveal reveal-delay-2">
//         <div class="vmg-meta">
//           <div class="vmg-num">03 · Goal</div>
//           <div class="vmg-type">Goal</div>
//         </div>
//         <div class="vmg-content">
//           <h3 class="vmg-headline">5,700+ industrial assets decarbonised by 2031. <span class="brand">The first manufacturer outside China</span> to reach global scale in industrial HHO.</h3>
//           <p class="vmg-body">By FY2031, we aim to deploy our technology across 5,700+ assets across Industry, Marine, and Logistics — building a large and growing base of verified carbon impact data. We are scaling from India into global markets where non-Chinese sourcing of critical decarbonisation infrastructure is both a commercial advantage and a strategic priority for operators and regulators alike.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <!-- COMMITMENT -->
// <section class="commitment-section">
//   <div class="container">
//     <div class="reveal">
//       <span class="section-label">Our Commitment</span>
//       <h2 class="section-title">Decarbonisation of the present,<br><span class="brand">delivered profitably.</span></h2>
//     </div>
//     <div class="commitment-layout">
//       <div class="commitment-text reveal reveal-delay-1">
//         <p>Hard-to-abate sectors — industrial manufacturing, marine shipping, diesel power generation, mining, and heavy logistics — represent <strong>nearly 30% of global CO₂ emissions</strong>. They are called "hard to abate" not because the desire to clean them up is absent, but because the right solutions have been absent.</p>
//         <p>SGT's commitment is to close this gap. We do not ask industries to wait for hydrogen pipelines or next-generation engine designs. We bring the physics of hydrogen-assisted combustion directly to the asset already installed and already running.</p>
//         <p><strong>Our technology works with any fuel</strong> — coal, biomass, HFO, diesel, CNG, LDO, pet coke. It works at any scale, from a 25 KVA generator to a cement kiln processing thousands of tonnes daily.</p>
//         <p>This is decarbonisation that is <strong>honest, not cosmetic. Real, not theoretical. Manageable, not disruptive.</strong></p>
//       </div>
//       <div class="pillar-list reveal reveal-delay-2">
//         <div class="pillar">
//           <div class="pillar-icon">🔬</div>
//           <div>
//             <div class="pillar-name">Science-backed technology</div>
//             <div class="pillar-desc">ARAI-validated approach grounded in peer-reviewed research. Patent-applied cell design. Proven at industrial scale across global deployments.</div>
//           </div>
//         </div>
//         <div class="pillar">
//           <div class="pillar-icon">📊</div>
//           <div>
//             <div class="pillar-name">Verified outcomes</div>
//             <div class="pillar-desc">GreenVision AI platform creates a Digital Twin of every deployed asset. Every tonne of CO₂ reduction is measured, reported, and audit-ready for ESG reporting.</div>
//           </div>
//         </div>
//         <div class="pillar">
//           <div class="pillar-icon">🌍</div>
//           <div>
//             <div class="pillar-name">Global reach, Indian roots</div>
//             <div class="pillar-desc">Manufactured in Pune, India. Deployed across South Asia, Southeast Asia, Australia, and Africa. First non-Chinese industrial HHO manufacturer with ARAI validation.</div>
//           </div>
//         </div>
//         <div class="pillar">
//           <div class="pillar-icon">💰</div>
//           <div>
//             <div class="pillar-name">Profitable sustainability</div>
//             <div class="pillar-desc">Customers see 3–18% fuel cost reduction from day one. We never ask anyone to choose climate over economics. Decarbonisation must pay for itself.</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <!-- SECTORS — 6 VERTICALS -->
// <section class="sectors-section">
//   <div class="container">
//     <div class="sectors-header reveal">
//       <span class="section-label">Six Hard-to-Abate Verticals</span>
//       <h2 class="section-title">One platform.<br><span class="brand">Infinite impact.</span></h2>
//     </div>

//     <div class="sectors-grid reveal reveal-delay-1">
//       <div class="sector-card">
//         <span class="sector-category">Industry</span>
//         <div class="sector-icon">🔥</div>
//         <div class="sector-name">Boilers</div>
//         <div class="sector-desc">Industrial steam and process heat across manufacturing, textiles, food processing, pharmaceuticals, and chemicals. High continuous fuel burn, significant CO₂ intensity.</div>
//         <div class="sector-tag">GreenEdge™</div>
//       </div>
//       <div class="sector-card">
//         <span class="sector-category">Industry</span>
//         <div class="sector-icon">🏭</div>
//         <div class="sector-name">Kilns</div>
//         <div class="sector-desc">Cement, glass, ceramics, and lime kilns — among the world's most carbon-intensive combustion processes. Operating continuously at extreme temperatures on heavy fuels.</div>
//         <div class="sector-tag">GreenEdge™</div>
//       </div>
//       <div class="sector-card">
//         <span class="sector-category">Industry</span>
//         <div class="sector-icon">⚙️</div>
//         <div class="sector-name">Furnaces & Smelters</div>
//         <div class="sector-desc">Metal smelting, foundries, and high-temperature industrial furnaces running on coal, LDO, and pet coke. Historically among the hardest operations to decarbonise.</div>
//         <div class="sector-tag">GreenEdge™</div>
//       </div>
//       <div class="sector-card">
//         <span class="sector-category">Marine</span>
//         <div class="sector-icon">🚢</div>
//         <div class="sector-name">Marine</div>
//         <div class="sector-desc">Auxiliary and propulsion engines on coastal vessels, cargo ships, and ocean-going fleets navigating IMO emission regulations with retrofit pathways requiring no dry-docking.</div>
//         <div class="sector-tag">GreenMarine™</div>
//       </div>
//       <div class="sector-card">
//         <span class="sector-category">DG & Power</span>
//         <div class="sector-icon">⚡</div>
//         <div class="sector-name">DG & Power Backup</div>
//         <div class="sector-desc">Diesel generators from 25 KVA to 4,000 KVA powering data centres, hospitals, telecom towers, and industrial sites — the backbone of reliable power infrastructure.</div>
//         <div class="sector-tag">GreenX™</div>
//       </div>
//       <div class="sector-card">
//         <span class="sector-category">Engines on Wheels</span>
//         <div class="sector-icon">🚛</div>
//         <div class="sector-name">Engines on Wheels</div>
//         <div class="sector-desc">Mining excavators, heavy logistics fleets, and construction machinery — the last frontier of transport decarbonisation. Retrofit without changing equipment or operations.</div>
//         <div class="sector-tag">GreenDrive™</div>
//       </div>
//     </div>
//   </div>
// </section>

// <!-- R&D COMMITMENT -->
// <section class="rd-section">
//   <div class="container">
//     <div class="rd-layout">
//       <div class="reveal">
//         <span class="section-label">Research & Innovation</span>
//         <h2 class="section-title">Continuously building<br><span class="brand">better outcomes.</span></h2>
//         <p class="rd-desc">Our technology was forged over three years of field validation, academic research, and engineering iteration. And we are not done. Every deployment teaches us more. Every challenge sharpens the next generation of our systems.</p>
//         <div class="rd-points">
//           <div class="rd-point">
//             <span class="rd-point-num">01</span>
//             <div>
//               <div class="rd-point-title">Cell Design Innovation</div>
//               <div class="rd-point-desc">Continuous improvement of our patent-applied IGBT-controlled HHO cell — higher gas output, longer cell life, reduced energy draw across all product lines.</div>
//             </div>
//           </div>
//           <div class="rd-point">
//             <span class="rd-point-num">02</span>
//             <div>
//               <div class="rd-point-title">Fuel-Agnostic Engineering</div>
//               <div class="rd-point-desc">Active R&D into HHO performance across coal, biomass, HFO, LDO, CNG, and pet coke — ensuring our technology works wherever combustion happens, not just in clean-fuel environments.</div>
//             </div>
//           </div>
//           <div class="rd-point">
//             <span class="rd-point-num">03</span>
//             <div>
//               <div class="rd-point-title">GreenVision AI Platform</div>
//               <div class="rd-point-desc">Advancing our Digital Twin capabilities with better baseline normalisation, predictive maintenance, and automated ESG-grade MRV reporting aligned with BRSR, CBAM, and IMO standards.</div>
//             </div>
//           </div>
//           <div class="rd-point">
//             <span class="rd-point-num">04</span>
//             <div>
//               <div class="rd-point-title">Certification & Global Expansion</div>
//               <div class="rd-point-desc">Active engagement with testing bodies and international certification processes to expand our validation coverage and open new geographies for deployment.</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="rd-visual reveal reveal-delay-2">
//         <div class="rd-visual-title">Technology Validation Metrics</div>
//         <div class="rd-stat-row">
//           <div class="rd-stat-label">
//             <span class="rd-stat-name">Fuel Efficiency Improvement</span>
//             <span class="rd-stat-val">2–18%</span>
//           </div>
//           <div class="rd-stat-bar-wrap"><div class="rd-stat-bar" style="width:75%"></div></div>
//         </div>
//         <div class="rd-stat-row">
//           <div class="rd-stat-label">
//             <span class="rd-stat-name">Particulate Matter Reduction</span>
//             <span class="rd-stat-val">Up to 95%</span>
//           </div>
//           <div class="rd-stat-bar-wrap"><div class="rd-stat-bar" style="width:95%"></div></div>
//         </div>
//         <div class="rd-stat-row">
//           <div class="rd-stat-label">
//             <span class="rd-stat-name">CO Reduction</span>
//             <span class="rd-stat-val">&gt;50%</span>
//           </div>
//           <div class="rd-stat-bar-wrap"><div class="rd-stat-bar" style="width:82%"></div></div>
//         </div>
//         <div class="rd-stat-row">
//           <div class="rd-stat-label">
//             <span class="rd-stat-name">NOx & Smoke Reduction</span>
//             <span class="rd-stat-val">Significant</span>
//           </div>
//           <div class="rd-stat-bar-wrap"><div class="rd-stat-bar" style="width:68%"></div></div>
//         </div>
//         <div class="rd-stat-row">
//           <div class="rd-stat-label">
//             <span class="rd-stat-name">Fuels Supported</span>
//             <span class="rd-stat-val">Any</span>
//           </div>
//           <div class="rd-stat-bar-wrap"><div class="rd-stat-bar" style="width:100%"></div></div>
//         </div>
//         <div class="rd-stat-row">
//           <div class="rd-stat-label">
//             <span class="rd-stat-name">Operational Disruption</span>
//             <span class="rd-stat-val">Zero</span>
//           </div>
//           <div class="rd-stat-bar-wrap"><div class="rd-stat-bar" style="width:0%; background:rgba(255,255,255,0.15)"></div></div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <!-- FOUNDER QUOTE -->
// <section class="founder-section">
//   <div class="container">
//     <div class="founder-layout reveal">
//       <div class="founder-photo-wrap">
//         <div class="founder-photo">
//           <img src="data:image/jpeg;base64,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" alt="Alok Kumar, Founder & Director, SGT HydroEdge">
//         </div>
//         <div class="founder-name-card">
//           <div class="founder-name">Alok Kumar</div>
//           <div class="founder-title-label">Founder & Director</div>
//           <div class="founder-title-label">SGT HydroEdge</div>
//         </div>
//       </div>
//       <div>
//         <p class="founder-quote-text">
//           "The fossil fuel era is not over — but <em>inefficiency is.</em> Every boiler, every ship engine, every generator running today is an opportunity we can act on right now. We did not build SGT to wait for a perfect clean energy future. We built it to make the present cleaner — <em>immediately, economically, and at scale</em> — for the industries that power the world and have historically been left behind by the climate conversation.<br><br>That is our purpose. That is our promise."
//         </p>
//         <div class="founder-divider"></div>
//         <div style="font-size:0.88rem; color:rgba(255,255,255,0.6)">From the Founder's desk, 2026</div>
//       </div>
//     </div>
//   </div>
// </section>

// <!-- OUTCOMES -->
// <section class="outcomes-section">
//   <div class="container">
//     <div class="reveal">
//       <span class="section-label">Proven Outcomes</span>
//       <h2 class="section-title">What our technology<br><span class="brand">actually delivers.</span></h2>
//     </div>
//     <div class="outcomes-grid">
//       <div class="outcome-card reveal">
//         <span class="outcome-metric">2–18<span class="unit">%</span></span>
//         <div class="outcome-name">Fuel Reduction</div>
//         <div class="outcome-desc">Immediate reduction in fuel consumption across all asset types — translating directly to fuel cost savings and CO₂ reduction from day one of installation.</div>
//       </div>
//       <div class="outcome-card reveal reveal-delay-1">
//         <span class="outcome-metric">≤95<span class="unit">%</span></span>
//         <div class="outcome-name">PM Emission Reduction</div>
//         <div class="outcome-desc">Particulate matter reduction of up to 95% and CO reduction greater than 50% — delivering compliance with emission norms across CPCB, IMO, and BRSR frameworks.</div>
//       </div>
//       <div class="outcome-card reveal reveal-delay-2">
//         <span class="outcome-metric">Zero</span>
//         <div class="outcome-name">Operational Disruption</div>
//         <div class="outcome-desc">No engine replacement. No fuel change. No hydrogen storage required. Retrofit onto existing assets without pausing operations — commissioned in hours, not months.</div>
//       </div>
//     </div>
//   </div>
// </section>

// <!-- CLOSING CTA -->
// <section class="cta-section">
//   <div class="cta-inner">
//     <span class="section-label">Ready to Decarbonise?</span>
//     <h2 class="cta-title">Bring your fuel data.<br>We will show you the impact.</h2>
//     <p class="cta-sub">Share your asset details with us and we will model your decarbonisation potential — fuel savings, emission reductions, and ROI — before you commit a rupee.</p>
//     <div class="cta-btns">
//       <a href="#" class="btn-white">Talk to Us →</a>
//       <a href="#" class="btn-outline-white">Explore Our Technology</a>
//     </div>
//   </div>
// </section>

// <!-- FOOTER -->
// <footer class="page-footer">
//   <div class="container">
//     <div class="footer-inner">
//       <div class="footer-brand"><strong>SGT HydroEdge</strong> · Decarbonisation Infrastructure Company · © 2026</div>
//       <div class="footer-links">
//         <a href="#">Solutions</a>
//         <a href="#">Technology</a>
//         <a href="#">Contact Us</a>
//       </div>
//     </div>
//   </div>
// </footer>`;

// export default function PurposePage() {
//   const stylesRef = useRef(false);

//   // Inject scoped CSS
//   useEffect(() => {
//     if (stylesRef.current) return;
//     const style = document.createElement("style");
//     style.setAttribute("data-page", "PurposePage");
//     style.textContent = PAGE_CSS;
//     document.head.appendChild(style);
//     stylesRef.current = true;
//     return () => {
//       style.remove();
//       stylesRef.current = false;
//     };
//   }, []);

//   // Run page-specific scripts after mount
//   useEffect(() => {
//     try {
//       const observer = new IntersectionObserver((entries) => {
//     entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
//   }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
//   document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
//     } catch (e) {
//       console.error("Page script error:", e);
//     }
//   }, []);

//   return (
//     <div dangerouslySetInnerHTML={ { __html: PAGE_HTML } } />
//   );
// }
// PurposePage.tsx
// Auto-converted from standalone HTML → Next.js page component.
// Preserves all original styling and interactivity.
//
// Usage: Place in app/<route>/page.tsx
// The component includes its own header/footer from the original HTML.
// Remove those blocks if you want to use your site's shared layout.

"use client";

import { useEffect, useRef } from "react";

const PAGE_CSS = `.sgt-purpose {
    --brand:        #1B6B3D;
    --brand-dark:   #155730;
    --brand-light:  #33A04A;
    --brand-faint:  #f0f9f3;
    --accent:       #3ec87e;
    --gold:         #c8a84b;
    --slate-900:    #0f172a;
    --slate-800:    #1e293b;
    --slate-700:    #334155;
    --slate-600:    #475569;
    --slate-400:    #94a3b8;
    --slate-200:    #e2e8f0;
    --slate-100:    #f1f5f9;
    --slate-50:     #f8fafc;
    --white:        #ffffff;
    --max-w:        1200px;
  }
  
  

  
  
  
  
  
  
  
  
  

  /* ── HERO ── */
  .sgt-purpose .hero {
    padding-top: 0;
    background: var(--slate-900);
    min-height: 68vh;
    display: flex; align-items: center;
    position: relative; overflow: hidden;
  }
  .sgt-purpose .hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 70% 50%, rgba(27,107,61,0.18) 0%, transparent 65%),
      radial-gradient(ellipse at 20% 80%, rgba(62,200,126,0.08) 0%, transparent 50%);
    pointer-events: none;
  }
  .sgt-purpose .hero-grid-bg {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }
  .sgt-purpose .hero-inner {
    max-width: var(--max-w); margin: 0 auto; padding: 5rem 2rem;
    position: relative; z-index: 1;
    display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
  }
  .sgt-purpose .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.16em;
    text-transform: uppercase; color: var(--accent);
    margin-bottom: 1.5rem;
  }
  .sgt-purpose .hero-eyebrow::before {
    content: ''; width: 24px; height: 2px; background: var(--accent); border-radius: 1px;
  }
  .sgt-purpose .hero-title {
    font-size: clamp(2.4rem, 4vw, 3.8rem);
    font-weight: 800; line-height: 1.1;
    color: var(--white); letter-spacing: -0.03em;
    margin-bottom: 1.5rem;
  }
  .sgt-purpose .hero-title .highlight { color: var(--accent); }
  .sgt-purpose .hero-desc {
    font-size: 1.05rem; line-height: 1.75;
    color: rgba(255,255,255,0.62); max-width: 500px;
    margin-bottom: 2.5rem;
  }
  .sgt-purpose .hero-stats {
    display: flex; gap: 2rem; padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);
  }
  .sgt-purpose .hero-stat-num {
    font-size: 1.8rem; font-weight: 800;
    color: var(--white); line-height: 1;
  }
  .sgt-purpose .hero-stat-label {
    font-size: 0.7rem; font-weight: 500;
    color: rgba(255,255,255,0.45);
    text-transform: uppercase; letter-spacing: 0.08em;
    margin-top: 0.2rem;
  }
  .sgt-purpose .hero-right-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px;
    padding: 2.5rem;
    backdrop-filter: blur(4px);
  }
  .sgt-purpose .hero-card-label {
    font-size: 0.65rem; font-weight: 700; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--accent); margin-bottom: 1.2rem;
  }
  .sgt-purpose .hero-card-text {
    font-size: 1rem; line-height: 1.8;
    color: rgba(255,255,255,0.75);
  }
  .sgt-purpose .hero-card-text strong { color: white; font-weight: 600; }
  .sgt-purpose .hero-card-points { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; }
  .sgt-purpose .hero-card-point {
    display: flex; align-items: flex-start; gap: 0.6rem;
    font-size: 0.9rem; color: rgba(255,255,255,0.7);
  }
  .sgt-purpose .hero-card-point::before {
    content: '→'; color: var(--accent); font-weight: 700;
    flex-shrink: 0; margin-top: 1px;
  }

  /* ── SHARED ── */
  .sgt-purpose .container { max-width: var(--max-w); margin: 0 auto; padding: 0 2rem; }
  .sgt-purpose .section-label {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.16em;
    text-transform: uppercase; color: var(--brand);
    margin-bottom: 1rem;
  }
  .sgt-purpose .section-label::before {
    content: ''; width: 20px; height: 2px; background: var(--brand); border-radius: 1px;
  }
  .sgt-purpose .section-title {
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 800; line-height: 1.15;
    letter-spacing: -0.025em; color: var(--slate-900);
  }
  .sgt-purpose .section-title .brand { color: var(--brand); }

  /* ── VMG SECTION ── */
  .sgt-purpose .vmg-section { padding: 7rem 0; background: var(--white); }
  .sgt-purpose .vmg-intro { max-width: 680px; margin-bottom: 5rem; }
  .sgt-purpose .vmg-intro-text {
    font-size: 1.08rem; line-height: 1.8;
    color: var(--slate-600); margin-top: 1.2rem;
  }
  .sgt-purpose .vmg-grid { display: flex; flex-direction: column; gap: 0; }
  .sgt-purpose .vmg-row {
    display: grid; grid-template-columns: 260px 1fr;
    border-top: 1px solid var(--slate-200);
    padding: 3.5rem 0;
    gap: 4rem; align-items: start;
    transition: background 0.3s;
    cursor: default;
  }
  .sgt-purpose .vmg-row:hover { background: var(--brand-faint); margin: 0 -2rem; padding: 3.5rem 2rem; }
  .sgt-purpose .vmg-row:last-child { border-bottom: 1px solid var(--slate-200); }
  .sgt-purpose .vmg-meta {}
  .sgt-purpose .vmg-num {
    font-size: 0.65rem; font-weight: 700; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--brand);
    display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.5rem;
  }
  .sgt-purpose .vmg-num::after {
    content: ''; flex: 1; height: 1px; background: var(--brand-light);
    opacity: 0.3; max-width: 40px;
  }
  .sgt-purpose .vmg-type {
    font-size: 1.4rem; font-weight: 800;
    color: var(--slate-900); letter-spacing: -0.02em;
  }
  .sgt-purpose .vmg-content {}
  .sgt-purpose .vmg-headline {
    font-size: 1.25rem; font-weight: 700; line-height: 1.4;
    color: var(--slate-900); margin-bottom: 1rem;
    letter-spacing: -0.01em;
  }
  .sgt-purpose .vmg-headline .brand { color: var(--brand); }
  .vmg-

  /* ── COMMITMENT SECTION ── */
  .sgt-purpose .commitment-section {
    padding: 7rem 0;
    background: var(--slate-50);
    border-top: 1px solid var(--slate-200);
  }
  .sgt-purpose .commitment-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; margin-top: 4rem; }
  .sgt-purpose .commitment-text {
    font-size: 1rem; line-height: 1.9; color: var(--slate-700);
  }
  .sgt-purpose .commitment-text strong { color: var(--brand); font-weight: 700; }
  .sgt-purpose .commitment-text p + p { margin-top: 1.2rem; }
  .sgt-purpose .pillar-list { display: flex; flex-direction: column; gap: 1rem; }
  .sgt-purpose .pillar {
    background: var(--white);
    border: 1px solid var(--slate-200);
    border-radius: 12px;
    padding: 1.4rem 1.5rem;
    display: flex; gap: 1rem; align-items: flex-start;
    transition: border-color 0.2s, box-shadow 0.2s;
    cursor: default;
  }
  .sgt-purpose .pillar:hover {
    border-color: var(--brand-light);
    box-shadow: 0 4px 16px rgba(27,107,61,0.08);
  }
  .sgt-purpose .pillar-icon {
    width: 40px; height: 40px; min-width: 40px;
    background: var(--brand-faint);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem;
    border: 1px solid rgba(27,107,61,0.15);
  }
  .sgt-purpose .pillar-name { font-size: 0.85rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.25rem; }
  .sgt-purpose .pillar-desc { font-size: 0.82rem; color: var(--slate-600); line-height: 1.55; }

  /* ── SECTORS ── */
  .sgt-purpose .sectors-section {
    padding: 7rem 0; background: var(--white);
    border-top: 1px solid var(--slate-200);
  }
  .sectors-
  .sgt-purpose .sectors-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1px; background: var(--slate-200);
    border: 1px solid var(--slate-200); border-radius: 12px; overflow: hidden;
  }
  .sgt-purpose .sector-card {
    background: var(--white); padding: 2rem 1.8rem;
    display: flex; flex-direction: column;
    transition: background 0.2s; cursor: default;
    position: relative; overflow: hidden;
  }
  .sgt-purpose .sector-card::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0;
    height: 3px; background: var(--brand);
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.3s ease;
  }
  .sgt-purpose .sector-card:hover { background: var(--brand-faint); }
  .sgt-purpose .sector-card:hover::after { transform: scaleX(1); }
  .sgt-purpose .sector-icon { font-size: 1.8rem; margin-bottom: 1rem; }
  .sgt-purpose .sector-name { font-size: 0.85rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.04em; }
  .sgt-purpose .sector-desc { font-size: 0.8rem; color: var(--slate-500); line-height: 1.55; flex: 1; }
  .sgt-purpose .sector-category {
    display: inline-block; margin-bottom: 0.75rem;
    font-size: 0.6rem; font-weight: 700; letter-spacing: 0.16em;
    text-transform: uppercase; color: var(--brand);
    background: var(--brand-faint); border: 1px solid rgba(27,107,61,0.18);
    padding: 0.2rem 0.6rem; border-radius: 100px;
  }
  .sgt-purpose .sector-tag {
    margin-top: 1rem; font-size: 0.65rem; font-weight: 700;
    color: var(--brand); letter-spacing: 0.12em; text-transform: uppercase;
  }

  /* ── R&D ── */
  .sgt-purpose .rd-section {
    padding: 7rem 0;
    background: var(--slate-900);
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .sgt-purpose .rd-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
  .sgt-purpose .rd-section .section-label { color: var(--accent); }
  .sgt-purpose .rd-section .section-label::before { background: var(--accent); }
  .sgt-purpose .rd-section .section-title { color: var(--white); }
  .sgt-purpose .rd-section .section-title .brand { color: var(--accent); }
  .sgt-purpose .rd-desc { font-size: 0.95rem; line-height: 1.75; color: rgba(255,255,255,0.55); margin: 1.2rem 0 2rem; }
  .sgt-purpose .rd-points { display: flex; flex-direction: column; gap: 1.6rem; }
  .sgt-purpose .rd-point { display: flex; gap: 1rem; align-items: flex-start; }
  .sgt-purpose .rd-point-num {
    font-size: 0.62rem; font-weight: 700; letter-spacing: 0.12em;
    color: var(--accent); min-width: 28px; padding-top: 2px;
  }
  .sgt-purpose .rd-point-title { font-size: 0.88rem; font-weight: 700; color: var(--white); margin-bottom: 0.3rem; }
  .sgt-purpose .rd-point-desc { font-size: 0.82rem; color: rgba(255,255,255,0.5); line-height: 1.6; }
  .sgt-purpose .rd-visual {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px; padding: 2.5rem;
    display: flex; flex-direction: column; gap: 1.2rem;
  }
  .sgt-purpose .rd-stat-row { display: flex; flex-direction: column; gap: 0.3rem; }
  .sgt-purpose .rd-stat-bar-wrap {
    height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;
  }
  .sgt-purpose .rd-stat-bar { height: 100%; background: var(--brand-light); border-radius: 3px; }
  .sgt-purpose .rd-stat-label { display: flex; justify-content: space-between; }
  .sgt-purpose .rd-stat-name { font-size: 0.75rem; color: rgba(255,255,255,0.5); font-weight: 500; }
  .sgt-purpose .rd-stat-val { font-size: 0.75rem; color: var(--accent); font-weight: 700; }
  .sgt-purpose .rd-visual-title {
    font-size: 0.65rem; font-weight: 700; letter-spacing: 0.16em;
    text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 0.5rem;
  }

  /* ── FOUNDER QUOTE ── */
  .sgt-purpose .founder-section {
    padding: 7rem 0;
    background: var(--brand);
    position: relative; overflow: hidden;
  }
  .sgt-purpose .founder-section::before {
    content: '"';
    position: absolute; top: -100px; left: 1rem;
    font-family: 'Inter', sans-serif;
    font-size: 28rem; font-weight: 900;
    color: rgba(255,255,255,0.04);
    line-height: 1; pointer-events: none; user-select: none;
  }
  .sgt-purpose .founder-layout {
    display: grid; grid-template-columns: 260px 1fr;
    gap: 4rem; align-items: center;
    position: relative; z-index: 1;
  }
  .sgt-purpose .founder-photo-wrap {
    display: flex; flex-direction: column; align-items: center; gap: 1rem;
  }
  .sgt-purpose .founder-photo {
    width: 200px; height: 200px;
    border-radius: 50%; overflow: hidden;
    border: 4px solid rgba(255,255,255,0.25);
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
    flex-shrink: 0;
    background: var(--brand-dark);
  }
  .sgt-purpose .founder-photo img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
  .sgt-purpose .founder-name-card { text-align: center; }
  .sgt-purpose .founder-name { font-size: 0.95rem; font-weight: 700; color: white; }
  .sgt-purpose .founder-title-label { font-size: 0.72rem; color: rgba(255,255,255,0.6); margin-top: 0.2rem; }
  .sgt-purpose .founder-quote-text {
    font-size: clamp(1.1rem, 1.8vw, 1.55rem);
    font-weight: 400; font-style: italic;
    line-height: 1.7; color: rgba(255,255,255,0.92);
    margin-bottom: 2rem;
  }
  .sgt-purpose .founder-quote-text em { font-style: normal; font-weight: 700; color: white; }
  .sgt-purpose .founder-divider {
    width: 40px; height: 2px; background: rgba(255,255,255,0.4); border-radius: 1px; margin-bottom: 1rem;
  }

  /* ── OUTCOMES ── */
  .sgt-purpose .outcomes-section {
    padding: 7rem 0; background: var(--slate-50);
    border-top: 1px solid var(--slate-200);
  }
  .sgt-purpose .outcomes-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1px; background: var(--slate-200);
    border: 1px solid var(--slate-200); border-radius: 12px; overflow: hidden;
    margin-top: 3.5rem;
  }
  .sgt-purpose .outcome-card {
    background: var(--white); padding: 2.5rem 2rem;
    transition: background 0.2s; cursor: default;
  }
  .sgt-purpose .outcome-card:hover { background: var(--brand-faint); }
  .sgt-purpose .outcome-metric {
    font-size: 3rem; font-weight: 800;
    color: var(--brand); line-height: 1; display: block;
    letter-spacing: -0.03em; margin-bottom: 0.5rem;
  }
  .sgt-purpose .outcome-metric .unit { font-size: 1.5rem; }
  .sgt-purpose .outcome-name { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--slate-900); margin-bottom: 0.4rem; }
  .sgt-purpose .outcome-desc { font-size: 0.85rem; color: var(--slate-500); line-height: 1.65; }

  /* ── CLOSING CTA ── */
  .sgt-purpose .cta-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%);
    text-align: center;
  }
  .sgt-purpose .cta-inner { max-width: 640px; margin: 0 auto; }
  .sgt-purpose .cta-section .section-label { justify-content: center; color: rgba(255,255,255,0.7); }
  .sgt-purpose .cta-section .section-label::before { background: rgba(255,255,255,0.5); }
  .sgt-purpose .cta-title {
    font-size: clamp(1.6rem, 3vw, 2.6rem);
    font-weight: 800; color: white;
    letter-spacing: -0.025em; line-height: 1.2; margin: 1rem 0 0.8rem;
  }
  .sgt-purpose .cta-sub { font-size: 1rem; color: rgba(255,255,255,0.7); margin-bottom: 2.5rem; line-height: 1.7; }
  .sgt-purpose .cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  .sgt-purpose .btn-white {
    display: inline-flex; align-items: center; gap: 0.4rem;
    background: white; color: var(--brand);
    font-size: 0.88rem; font-weight: 700;
    padding: 0.85rem 1.8rem; border-radius: 8px;
    text-decoration: none; transition: all 0.2s;
  }
  .sgt-purpose .btn-white:hover { background: var(--slate-100); transform: translateY(-1px); }
  .sgt-purpose .btn-outline-white {
    display: inline-flex; align-items: center; gap: 0.4rem;
    border: 2px solid rgba(255,255,255,0.5); color: white;
    font-size: 0.88rem; font-weight: 700;
    padding: 0.85rem 1.8rem; border-radius: 8px;
    text-decoration: none; transition: all 0.2s;
  }
  .sgt-purpose .btn-outline-white:hover { border-color: white; background: rgba(255,255,255,0.1); }

  
  
  
  
  
  
  
  

  /* ── REVEAL ANIMATIONS ── */
  .sgt-purpose .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .sgt-purpose .reveal.visible { opacity: 1; transform: translateY(0); }
  .sgt-purpose .reveal-delay-1 { transition-delay: 0.1s; }
  .sgt-purpose .reveal-delay-2 { transition-delay: 0.2s; }
  .sgt-purpose .reveal-delay-3 { transition-delay: 0.3s; }
  .sgt-purpose .reveal-delay-4 { transition-delay: 0.4s; }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .sgt-purpose .hero-inner { grid-template-columns: 1fr; gap: 3rem; padding: 4rem 1.5rem; }
    .sgt-purpose .vmg-row { grid-template-columns: 1fr; gap: 1.5rem; padding: 2.5rem 0; }
    .sgt-purpose .vmg-row:hover { margin: 0; padding: 2.5rem 0; }
    .sgt-purpose .commitment-layout { grid-template-columns: 1fr; gap: 3rem; }
    .sgt-purpose .sectors-grid { grid-template-columns: repeat(2, 1fr); }
    .sgt-purpose .rd-layout { grid-template-columns: 1fr; gap: 3rem; }
    .sgt-purpose .founder-layout { grid-template-columns: 1fr; gap: 2.5rem; text-align: center; }
    .sgt-purpose .founder-photo-wrap { flex-direction: row; justify-content: flex-start; text-align: left; gap: 1.5rem; }
    .sgt-purpose .founder-divider { margin: 0 auto 1rem; }
    .sgt-purpose .outcomes-grid { grid-template-columns: 1fr; }
    .sgt-purpose .container { padding: 0 1.5rem; }
    nav 
  }`;

const PAGE_HTML = `<!-- NAV -->


<!-- HERO -->
<section class="hero mt-7">
  <div class="hero-grid-bg"></div>
  <div class="hero-inner">
    <div>
      <div class="hero-eyebrow">About SGT HydroEdge</div>
      <h1 class="hero-title">Built for the<br><span class="highlight">hardest</span><br>problems.</h1>
      <p class="hero-desc">The sectors the world struggles to decarbonise. The assets no one else will retrofit. That is where we chose to work — and we built the technology, platform, and expertise to do it well.</p>
      <div class="hero-stats">
        <div>
          <div class="hero-stat-num">3+</div>
          <div class="hero-stat-label">Years R&D</div>
        </div>
        <div>
          <div class="hero-stat-num">6</div>
          <div class="hero-stat-label">Verticals</div>
        </div>
        <div>
          <div class="hero-stat-num">4</div>
          <div class="hero-stat-label">Continents</div>
        </div>
        <div>
          <div class="hero-stat-num">Zero</div>
          <div class="hero-stat-label">Engine Replacements</div>
        </div>
      </div>
    </div>
    <div class="hero-right-card">
      <div class="hero-card-label">How do we decarbonise today — not ten years from now?</div>
      <p class="hero-card-text">SGT HydroEdge was born from this question — not in a lab, but on the ground where <strong>boilers, kilns, marine engines, generators, and mining rigs</strong> power the world's most essential industries.<br><br>The world cannot replace these assets overnight. But the climate cannot wait. We realised it needed a solution that was:</p>
      <div class="hero-card-points">
        <div class="hero-card-point">Immediate impact — not contingent on future technologies</div>
        <div class="hero-card-point">Economically positive — saving fuel while saving emissions</div>
        <div class="hero-card-point">Retrofit-first — any asset, any fuel, any geography</div>
      </div>
    </div>
  </div>
</section>

<!-- VISION · MISSION · GOAL -->
<section class="vmg-section">
  <div class="container">
    <div class="vmg-intro reveal">
      <span class="section-label">Vision · Mission · Goal</span>
      <h2 class="section-title">What we stand for,<br><span class="brand">where we are headed.</span></h2>
      <p class="vmg-intro-text">Three statements that define everything we build, every partnership we form, and every deployment we make.</p>
    </div>
    <div class="vmg-grid">
      <div class="vmg-row reveal">
        <div class="vmg-meta">
          <div class="vmg-num">01 · Vision</div>
          <div class="vmg-type">Vision</div>
        </div>
        <div class="vmg-content">
          <h3 class="vmg-headline">A world where <span class="brand">every industrial combustion asset</span> on earth operates at its cleanest possible efficiency — today, not in 2050.</h3>
          <p class="vmg-body">The climate challenge cannot wait for tomorrow's engine designs. Billions of tonnes of CO₂ are emitted every year by machinery already in operation — boilers, kilns, furnaces, ships, generators, mining equipment. Our vision is to retrofit the present, not replace it. To make every combustion asset, regardless of fuel type, age, or geography, measurably cleaner starting from the day of installation.</p>
        </div>
      </div>
      <div class="vmg-row reveal reveal-delay-1">
        <div class="vmg-meta">
          <div class="vmg-num">02 · Mission</div>
          <div class="vmg-type">Mission</div>
        </div>
        <div class="vmg-content">
          <h3 class="vmg-headline">Deliver <span class="brand">measurable decarbonisation</span> to hard-to-abate industries — profitably, retrofitably, and with verified data.</h3>
          <p class="vmg-body">We manufacture India's first industrial on-demand hydrogen (HHO) generation systems and deploy them across boilers, kilns, furnaces & smelters, marine engines, DG power systems, and engines on wheels — backed by AI-powered monitoring and expert consulting. Every deployment reduces fuel consumption, cuts CO₂ and particulate emissions, and generates ESG-grade data. No engine replacement. No fuel change. No operational disruption. Verified results, from day one.</p>
        </div>
      </div>
      <div class="vmg-row reveal reveal-delay-2">
        <div class="vmg-meta">
          <div class="vmg-num">03 · Goal</div>
          <div class="vmg-type">Goal</div>
        </div>
        <div class="vmg-content">
          <h3 class="vmg-headline">5,700+ industrial assets decarbonised by 2031. <span class="brand">The first manufacturer outside China</span> to reach global scale in industrial HHO.</h3>
          <p class="vmg-body">By FY2031, we aim to deploy our technology across 5,700+ assets across Industry, Marine, and Logistics — building a large and growing base of verified carbon impact data. We are scaling from India into global markets where non-Chinese sourcing of critical decarbonisation infrastructure is both a commercial advantage and a strategic priority for operators and regulators alike.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- COMMITMENT -->
<section class="commitment-section">
  <div class="container">
    <div class="reveal">
      <span class="section-label">Our Commitment</span>
      <h2 class="section-title">Decarbonisation of the present,<br><span class="brand">delivered profitably.</span></h2>
    </div>
    <div class="commitment-layout">
      <div class="commitment-text reveal reveal-delay-1">
        <p>Hard-to-abate sectors — industrial manufacturing, marine shipping, diesel power generation, mining, and heavy logistics — represent <strong>nearly 30% of global CO₂ emissions</strong>. They are called "hard to abate" not because the desire to clean them up is absent, but because the right solutions have been absent.</p>
        <p>SGT's commitment is to close this gap. We do not ask industries to wait for hydrogen pipelines or next-generation engine designs. We bring the physics of hydrogen-assisted combustion directly to the asset already installed and already running.</p>
        <p><strong>Our technology works with any fuel</strong> — coal, biomass, HFO, diesel, CNG, LDO, pet coke. It works at any scale, from a 25 KVA generator to a cement kiln processing thousands of tonnes daily.</p>
        <p>This is decarbonisation that is <strong>honest, not cosmetic. Real, not theoretical. Manageable, not disruptive.</strong></p>
      </div>
      <div class="pillar-list reveal reveal-delay-2">
        <div class="pillar">
          <div class="pillar-icon">🔬</div>
          <div>
            <div class="pillar-name">Science-backed technology</div>
            <div class="pillar-desc">ARAI-validated approach grounded in peer-reviewed research. Patent-applied cell design. Proven at industrial scale across global deployments.</div>
          </div>
        </div>
        <div class="pillar">
          <div class="pillar-icon">📊</div>
          <div>
            <div class="pillar-name">Verified outcomes</div>
            <div class="pillar-desc">GreenVision AI platform creates a Digital Twin of every deployed asset. Every tonne of CO₂ reduction is measured, reported, and audit-ready for ESG reporting.</div>
          </div>
        </div>
        <div class="pillar">
          <div class="pillar-icon">🌍</div>
          <div>
            <div class="pillar-name">Global reach, Indian roots</div>
            <div class="pillar-desc">Manufactured in Pune, India. Deployed across South Asia, Southeast Asia, Australia, and Africa. First non-Chinese industrial HHO manufacturer with ARAI validation.</div>
          </div>
        </div>
        <div class="pillar">
          <div class="pillar-icon">💰</div>
          <div>
            <div class="pillar-name">Profitable sustainability</div>
            <div class="pillar-desc">Customers see 3–18% fuel cost reduction from day one. We never ask anyone to choose climate over economics. Decarbonisation must pay for itself.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTORS — 6 VERTICALS -->
<section class="sectors-section">
  <div class="container">
    <div class="sectors-header reveal">
      <span class="section-label">Six Hard-to-Abate Verticals</span>
      <h2 class="section-title">One platform.<br><span class="brand">Infinite impact.</span></h2>
    </div>

    <div class="sectors-grid reveal reveal-delay-1">
      <div class="sector-card">
        <span class="sector-category">Industry</span>
        <div class="sector-icon">🔥</div>
        <div class="sector-name">Boilers</div>
        <div class="sector-desc">Industrial steam and process heat across manufacturing, textiles, food processing, pharmaceuticals, and chemicals. High continuous fuel burn, significant CO₂ intensity.</div>
        <div class="sector-tag">GreenEdge™</div>
      </div>
      <div class="sector-card">
        <span class="sector-category">Industry</span>
        <div class="sector-icon">🏭</div>
        <div class="sector-name">Kilns</div>
        <div class="sector-desc">Cement, glass, ceramics, and lime kilns — among the world's most carbon-intensive combustion processes. Operating continuously at extreme temperatures on heavy fuels.</div>
        <div class="sector-tag">GreenEdge™</div>
      </div>
      <div class="sector-card">
        <span class="sector-category">Industry</span>
        <div class="sector-icon">⚙️</div>
        <div class="sector-name">Furnaces & Smelters</div>
        <div class="sector-desc">Metal smelting, foundries, and high-temperature industrial furnaces running on coal, LDO, and pet coke. Historically among the hardest operations to decarbonise.</div>
        <div class="sector-tag">GreenEdge™</div>
      </div>
      <div class="sector-card">
        <span class="sector-category">Marine</span>
        <div class="sector-icon">🚢</div>
        <div class="sector-name">Marine</div>
        <div class="sector-desc">Auxiliary and propulsion engines on coastal vessels, cargo ships, and ocean-going fleets navigating IMO emission regulations with retrofit pathways requiring no dry-docking.</div>
        <div class="sector-tag">GreenMarine™</div>
      </div>
      <div class="sector-card">
        <span class="sector-category">DG & Power</span>
        <div class="sector-icon">⚡</div>
        <div class="sector-name">DG & Power Backup</div>
        <div class="sector-desc">Diesel generators from 25 KVA to 4,000 KVA powering data centres, hospitals, telecom towers, and industrial sites — the backbone of reliable power infrastructure.</div>
        <div class="sector-tag">GreenX™</div>
      </div>
      <div class="sector-card">
        <span class="sector-category">Engines on Wheels</span>
        <div class="sector-icon">🚛</div>
        <div class="sector-name">Engines on Wheels</div>
        <div class="sector-desc">Mining excavators, heavy logistics fleets, and construction machinery — the last frontier of transport decarbonisation. Retrofit without changing equipment or operations.</div>
        <div class="sector-tag">GreenDrive™</div>
      </div>
    </div>
  </div>
</section>

<!-- R&D COMMITMENT -->
<section class="rd-section">
  <div class="container">
    <div class="rd-layout">
      <div class="reveal">
        <span class="section-label">Research & Innovation</span>
        <h2 class="section-title">Continuously building<br><span class="brand">better outcomes.</span></h2>
        <p class="rd-desc">Our technology was forged over three years of field validation, academic research, and engineering iteration. And we are not done. Every deployment teaches us more. Every challenge sharpens the next generation of our systems.</p>
        <div class="rd-points">
          <div class="rd-point">
            <span class="rd-point-num">01</span>
            <div>
              <div class="rd-point-title">Cell Design Innovation</div>
              <div class="rd-point-desc">Continuous improvement of our patent-applied IGBT-controlled HHO cell — higher gas output, longer cell life, reduced energy draw across all product lines.</div>
            </div>
          </div>
          <div class="rd-point">
            <span class="rd-point-num">02</span>
            <div>
              <div class="rd-point-title">Fuel-Agnostic Engineering</div>
              <div class="rd-point-desc">Active R&D into HHO performance across coal, biomass, HFO, LDO, CNG, and pet coke — ensuring our technology works wherever combustion happens, not just in clean-fuel environments.</div>
            </div>
          </div>
          <div class="rd-point">
            <span class="rd-point-num">03</span>
            <div>
              <div class="rd-point-title">GreenVision AI Platform</div>
              <div class="rd-point-desc">Advancing our Digital Twin capabilities with better baseline normalisation, predictive maintenance, and automated ESG-grade MRV reporting aligned with BRSR, CBAM, and IMO standards.</div>
            </div>
          </div>
          <div class="rd-point">
            <span class="rd-point-num">04</span>
            <div>
              <div class="rd-point-title">Certification & Global Expansion</div>
              <div class="rd-point-desc">Active engagement with testing bodies and international certification processes to expand our validation coverage and open new geographies for deployment.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="rd-visual reveal reveal-delay-2">
        <div class="rd-visual-title">Technology Validation Metrics</div>
        <div class="rd-stat-row">
          <div class="rd-stat-label">
            <span class="rd-stat-name">Fuel Efficiency Improvement</span>
            <span class="rd-stat-val">2–18%</span>
          </div>
          <div class="rd-stat-bar-wrap"><div class="rd-stat-bar" style="width:75%"></div></div>
        </div>
        <div class="rd-stat-row">
          <div class="rd-stat-label">
            <span class="rd-stat-name">Particulate Matter Reduction</span>
            <span class="rd-stat-val">Up to 95%</span>
          </div>
          <div class="rd-stat-bar-wrap"><div class="rd-stat-bar" style="width:95%"></div></div>
        </div>
        <div class="rd-stat-row">
          <div class="rd-stat-label">
            <span class="rd-stat-name">CO Reduction</span>
            <span class="rd-stat-val">&gt;50%</span>
          </div>
          <div class="rd-stat-bar-wrap"><div class="rd-stat-bar" style="width:82%"></div></div>
        </div>
        <div class="rd-stat-row">
          <div class="rd-stat-label">
            <span class="rd-stat-name">NOx & Smoke Reduction</span>
            <span class="rd-stat-val">Significant</span>
          </div>
          <div class="rd-stat-bar-wrap"><div class="rd-stat-bar" style="width:68%"></div></div>
        </div>
        <div class="rd-stat-row">
          <div class="rd-stat-label">
            <span class="rd-stat-name">Fuels Supported</span>
            <span class="rd-stat-val">Any</span>
          </div>
          <div class="rd-stat-bar-wrap"><div class="rd-stat-bar" style="width:100%"></div></div>
        </div>
        <div class="rd-stat-row">
          <div class="rd-stat-label">
            <span class="rd-stat-name">Operational Disruption</span>
            <span class="rd-stat-val">Zero</span>
          </div>
          <div class="rd-stat-bar-wrap"><div class="rd-stat-bar" style="width:0%; background:rgba(255,255,255,0.15)"></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOUNDER QUOTE -->
<section class="founder-section">
  <div class="container">
    <div class="founder-layout reveal">
      <div class="founder-photo-wrap">
        <div class="founder-photo">
          <img src="data:image/jpeg;base64,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" alt="Alok Kumar, Founder & Director, SGT HydroEdge">
        </div>
        <div class="founder-name-card">
          <div class="founder-name">Alok Kumar</div>
          <div class="founder-title-label">Founder & Director</div>
          <div class="founder-title-label">SGT HydroEdge</div>
        </div>
      </div>
      <div>
        <p class="founder-quote-text">
          "The fossil fuel era is not over — but <em>inefficiency is.</em> Every boiler, every ship engine, every generator running today is an opportunity we can act on right now. We did not build SGT to wait for a perfect clean energy future. We built it to make the present cleaner — <em>immediately, economically, and at scale</em> — for the industries that power the world and have historically been left behind by the climate conversation.<br><br>That is our purpose. That is our promise."
        </p>
        <div class="founder-divider"></div>
        <div style="font-size:0.88rem; color:rgba(255,255,255,0.6)">From the Founder's desk, 2026</div>
      </div>
    </div>
  </div>
</section>

<!-- OUTCOMES -->
<section class="outcomes-section">
  <div class="container">
    <div class="reveal">
      <span class="section-label">Proven Outcomes</span>
      <h2 class="section-title">What our technology<br><span class="brand">actually delivers.</span></h2>
    </div>
    <div class="outcomes-grid">
      <div class="outcome-card reveal">
        <span class="outcome-metric">2–18<span class="unit">%</span></span>
        <div class="outcome-name">Fuel Reduction</div>
        <div class="outcome-desc">Immediate reduction in fuel consumption across all asset types — translating directly to fuel cost savings and CO₂ reduction from day one of installation.</div>
      </div>
      <div class="outcome-card reveal reveal-delay-1">
        <span class="outcome-metric">≤95<span class="unit">%</span></span>
        <div class="outcome-name">PM Emission Reduction</div>
        <div class="outcome-desc">Particulate matter reduction of up to 95% and CO reduction greater than 50% — delivering compliance with emission norms across CPCB, IMO, and BRSR frameworks.</div>
      </div>
      <div class="outcome-card reveal reveal-delay-2">
        <span class="outcome-metric">Zero</span>
        <div class="outcome-name">Operational Disruption</div>
        <div class="outcome-desc">No engine replacement. No fuel change. No hydrogen storage required. Retrofit onto existing assets without pausing operations — commissioned in hours, not months.</div>
      </div>
    </div>
  </div>
</section>

<!-- CLOSING CTA -->
<section class="cta-section">
  <div class="cta-inner">
    <span class="section-label">Ready to Decarbonise?</span>
    <h2 class="cta-title">Bring your fuel data.<br>We will show you the impact.</h2>
    <p class="cta-sub">Share your asset details with us and we will model your decarbonisation potential — fuel savings, emission reductions, and ROI — before you commit a rupee.</p>
    <div class="cta-btns">
    <a href="/contact" class="btn-white">Talk to Us →</a>
    </div>
    </div>
    </section>
    
    <!-- FOOTER -->
    `;
    // <a href="#" class="btn-outline-white">Explore Our Technology</a>

export default function PurposePage() {
  const stylesRef = useRef(false);

  // Inject scoped CSS
  useEffect(() => {
    if (stylesRef.current) return;
    const style = document.createElement("style");
    style.setAttribute("data-page", "PurposePage");
    style.textContent = PAGE_CSS;
    document.head.appendChild(style);
    stylesRef.current = true;
    return () => {
      style.remove();
      stylesRef.current = false;
    };
  }, []);

  // Run page-specific scripts after mount
  useEffect(() => {
    try {
      const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    } catch (e) {
      console.error("Page script error:", e);
    }
  }, []);

  return (
    <div className="sgt-purpose" dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
  );
}