// 'use client';

// import React from 'react';

// // --- THEME COLOR VARIABLES ---
// const BG_LIGHT = "var(--bg-light, #f8f9fa)";
// const BG_CARD = "var(--bg-card-light, #ffffff)";
// const PRIMARY_COLOR = "var(--primary-saarthi, #10B981)"; // Tailwind Green-500
// const TEXT_DARK = "var(--text-dark, #212529)";
// const TEXT_MUTED = "var(--text-muted, #495057)";
// const FINANCE_BLUE = "#3B82F6"; // Blue for financial/trust elements

// // --- INLINE SVG ICON COMPONENTS ---
// const IconWallet = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
//         <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
//         <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
//     </svg>
// );

// const IconTrendingUp = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
//         <polyline points="16 7 22 7 22 13" />
//     </svg>
// );

// const IconCheckCircle = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//         <path d="m9 11 3 3L22 4" />
//     </svg>
// );

// const IconShieldCheck = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
//         <path d="m9 12 2 2 4-4" />
//     </svg>
// );

// const IconSettings = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.39a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.73v.54a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.22.39a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.73v-.54a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2-0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//         <circle cx="12" cy="12" r="3" />
//     </svg>
// );

// const IconBarChart = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <line x1="12" x2="12" y1="20" y2="10" />
//         <line x1="18" x2="18" y1="20" y2="4" />
//         <line x1="6" x2="6" y1="20" y2="16" />
//     </svg>
// );

// const IconChevronRight = ({ className }: { className?: string }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//         <path d="M9 18l6-6-6-6"/>
//     </svg>
// );

// const IconArrowRight = ({ className }: { className?: string }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//         <path d="M5 12h14" />
//         <path d="m12 5 7 7-7 7" />
//     </svg>
// );


// // --- COMPONENT FOR BENEFIT LIST ITEMS ---
// const BenefitListItem = ({ children }: { children: React.ReactNode }) => (
//     <li className="flex items-start text-lg mb-2">
//         <IconCheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
//         <span className="text-gray-700">{children}</span>
//     </li>
// );

// // --- MAIN PAGE COMPONENT ---
// const DaaSPage = () => {

//     const ctaPrimaryStyle = `inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-xl transition-all duration-300 transform hover:scale-[1.05] bg-[${PRIMARY_COLOR}] text-white hover:bg-green-600`;
//     const ctaSecondaryStyle = `inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-300`;

//     // Mock background image URL
//     const heroBgUrl = "/images/solutions/daas-hero.png";

//     return (
//         <main className="min-h-screen font-sans" style={{ backgroundColor: BG_LIGHT, color: TEXT_DARK }}>

//             {/* SECTION 1 — HERO BANNER */}
//             <section
//                 className="relative py-20 md:py-32 lg:py-48 text-white text-center overflow-hidden"
//                 style={{
//                     backgroundImage: `url('${heroBgUrl}')`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundColor: PRIMARY_COLOR,
//                     clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)',
//                 }}
//             >
//                 <div className="absolute inset-0 bg-black opacity-60"></div>
//                 <div className="relative container mx-auto px-4 max-w-7xl z-10">
//                     <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
//                         DaaS — Decarbonisation-as-a-Service
//                     </h1>
//                     <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto opacity-90 font-light">
//                         Retrofit any diesel engine with <strong>zero upfront cost</strong>. Pay a predictable monthly fee that is always lower than the value of fuel saved — verified by GreenVision.
//                     </p>
//                     <div className="flex flex-col sm:flex-row justify-center gap-4">
//                         {/* <a
//                             href="/calculate-daas"
//                             className={`inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.05]`}
//                             style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}
//                         >
//                             Calculate My DaaS Plan
//                         </a> */}
//                         <a
//                             href="/contact"
//                             className={`inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300`}
//                         >
//                             Talk to Us
//                         </a>
//                     </div>
//                 </div>
//             </section>

//             {/* SECTION 2 — INTRODUCTION */}
//             <section className="py-16 md:py-24" style={{ backgroundColor: BG_CARD }}>
//                 <div className="container mx-auto px-4 max-w-5xl text-center">
//                     <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: TEXT_DARK }}>
//                         Zero CapEx. Zero Risk. Guaranteed Outcomes.
//                     </h2>
//                     <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
//                         DaaS makes large-scale decarbonisation simple and financially attractive. Instead of buying the retrofit system, you pay a monthly subscription fee that is always less than the fuel you save. Saarthi handles installation, maintenance, warranty, spares and monitoring — while GreenVision verifies real savings and CO₂ reduction in real time.
//                     </p>
//                     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
//                         <div className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-2 text-green-500"/> Zero upfront cost</div>
//                         <div className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-2 text-green-500"/> No asset purchase required</div>
//                         <div className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-2 text-green-500"/> Guaranteed savings model</div>
//                         <div className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-2 text-green-500"/> Verified performance via GreenVision</div>
//                         <div className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-2 text-green-500"/> Easy scaling across fleets/sites</div>
//                         <div className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-2 text-green-500"/> Ideal for multi-site operations</div>
//                     </div>
//                 </div>
//             </section>

//             {/* SECTION 3 — HOW DAAS WORKS */}
//             <section className="py-16 md:py-24" style={{ backgroundColor: BG_LIGHT }}>
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16" style={{ color: TEXT_DARK }}>
//                         A Simple, Transparent, Savings-Linked Model
//                     </h2>

//                     <div className="grid md:grid-cols-5 gap-8 relative">
//                         {/* Connecting Line (Desktop) */}
//                         <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-gray-200 -z-10 transform translate-y-4"></div>

//                         {[
//                             { step: "1", title: "Install", desc: "Saarthi installs the hydrogen retrofit system on your engines." },
//                             { step: "2", title: "Save", desc: "You start saving diesel from day one via cleaner combustion." },
//                             { step: "3", title: "Verify", desc: "GreenVision tracks fuel, load, and savings in real-time." },
//                             { step: "4", title: "Pay Monthly", desc: "Pay a fee that is always less than your fuel savings." },
//                             { step: "5", title: "Net Profit", desc: "The difference becomes your immediate net operating profit." }
//                         ].map((item, index) => (
//                             <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg border-t-4" style={{ borderColor: PRIMARY_COLOR }}>
//                                 <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 shadow-md" style={{ backgroundColor: PRIMARY_COLOR }}>
//                                     {item.step}
//                                 </div>
//                                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                                 <p className="text-sm text-gray-600">{item.desc}</p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* <div className="text-center mt-16 font-mono text-lg bg-white p-4 rounded-lg shadow-inner inline-block w-full max-w-3xl mx-auto border border-gray-200">
//                          Fuel Savings &rarr; Monthly Fee &rarr; <span className="font-bold text-green-600">Net Profit</span> &rarr; CO₂ Reduced
//                     </div> */}
//                      <div className="mt-8 text-center text-gray-500 italic">
                        
//                     </div>
//                 </div>
//             </section>

//             {/* SECTION 4 — WHO DAAS IS IDEAL FOR */}
//             <section className="py-16 md:py-24" style={{ backgroundColor: BG_CARD }}>
//                 <div className="container mx-auto px-4 max-w-6xl">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: TEXT_DARK }}>Designed for Companies with High Diesel Spend</h2>
//                             <p className="text-lg text-gray-600 mb-6">
//                                 If your business spends heavily on diesel every month, DaaS can convert a part of that spend into guaranteed net profit + CO₂ reduction without any investment.
//                             </p>
//                             <ul className="space-y-2">
//                                 {['Fleets (trucks & buses)', 'DG-heavy industries', 'Ports & marine operators', 'Mining & heavy equipment', 'Manufacturing sites', 'Hospitality & real estate', 'Remote power-based operations'].map((item, i) => (
//                                     <BenefitListItem key={i}>{item}</BenefitListItem>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center min-h-[300px] border-2 border-dashed border-gray-300">
//                             {/* <div className="relative rounded-xl overflow-hidden min-h-[300px] border-2 border-gray-200"> */}
//   <img
//     src="/images/solutions/daas_img.png"   // 👈 replace with your actual image path
//     alt="Industries — truck, ship, factory"
//     className="object-cover object-center"
//   />
// {/* </div> */}

//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* SECTION 5 — DAAS FINANCIAL MODEL */}
//             <section className="py-16 md:py-24 text-white" style={{ backgroundColor: TEXT_DARK }}>
//                 <div className="container mx-auto px-4 max-w-5xl text-center">
//                     <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-white">Always Save More Than You Pay</h2>
//                     <p className="text-xl mb-12 opacity-90">
//                         DaaS is a performance-first model. The fee is engineered to be significantly lower than the verified diesel savings.
//                     </p>

//                     <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto transform hover:scale-[1.02] transition-transform">
//                         <h3 className="text-2xl font-bold mb-6 text-blue-600">Monthly Financial Example</h3>
//                         <div className="space-y-4 text-lg">
//                             <div className="flex justify-between border-b pb-2">
//                                 <span>Fuel Saved per Month:</span>
//                                 <span className="font-bold text-green-600">₹40,000</span>
//                             </div>
//                             <div className="flex justify-between border-b pb-2">
//                                 <span>DaaS Monthly Fee:</span>
//                                 <span className="font-bold text-gray-600">₹25,000</span>
//                             </div>
//                             <div className="flex justify-between pt-2 text-xl">
//                                 <span className="font-extrabold">Your Net Profit:</span>
//                                 <span className="font-extrabold text-green-600">₹15,000/month</span>
//                             </div>
//                         </div>
//                         <div className="mt-6 text-sm text-gray-500">
//                             *CO₂ Reduction verified via GreenVision. Figures are for illustration.
//                         </div>
//                     </div>

//                     {/* <div className="mt-12">
//                         <a href="#" className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg">
//                             Use the DaaS Estimator &rarr;
//                         </a>
//                     </div> */}
//                 </div>
//             </section>

//             {/* SECTION 6 — WHAT SAARTHI HANDLES */}
//             <section className="py-16 md:py-24" style={{ backgroundColor: BG_LIGHT }}>
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: TEXT_DARK }}>Complete Lifecycle Responsibility</h2>
//                         <p className="text-lg text-gray-600">You focus on operations — Saarthi handles everything else.</p>
//                     </div>
                    
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {[
//                             "Hardware installation", "Calibration & tuning", "Preventive maintenance", 
//                             "On-site service", "Replacement of consumables", "24×7 support", 
//                             "Real-time monitoring", "Performance guarantees", "Fail-safe safety protocols"
//                         ].map((item, index) => (
//                             <div key={index} className="bg-white p-5 rounded-lg shadow-md flex items-center border-l-4" style={{ borderColor: PRIMARY_COLOR }}>
//                                 <IconSettings className="w-6 h-6 mr-3 text-gray-400"/>
//                                 <span className="font-medium text-gray-800">{item}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* SECTION 7 — WHAT YOU GET */}
//             <section className="py-16 md:py-24" style={{ backgroundColor: BG_CARD }}>
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         <div className="order-2 lg:order-1">
//                             <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: TEXT_DARK }}>Guaranteed Impact, Clean Data & Zero Complexity</h2>
//                             <div className="space-y-4">
//                                 <BenefitListItem>Hydrogen retrofit system (GreenDrive / GreenX / GreenMarine)</BenefitListItem>
//                                 <BenefitListItem>Installation on your engines</BenefitListItem>
//                                 <BenefitListItem>Verified fuel savings & CO₂ reduction analytics</BenefitListItem>
//                                 <BenefitListItem>Monthly ESG report & Engine performance insights</BenefitListItem>
//                                 <BenefitListItem>DaaS billing based on GreenVision M&V</BenefitListItem>
//                                 <BenefitListItem>Predictable OPEX (no CapEx)</BenefitListItem>
//                             </div>
//                             {/* <div className="mt-8">
//                                 <a href="#" className="text-blue-600 font-bold hover:underline text-lg flex items-center">
//                                     Request a Sample Monthly Report <IconChevronRight className="w-5 h-5 ml-1"/>
//                                 </a>
//                             </div> */}
//                         </div>
//                         <div className="order-1 lg:order-2 bg-gray-50 rounded-xl p-8 shadow-inner flex items-center justify-center min-h-[300px]">
//                             <div className="relative rounded-xl overflow-hidden min-h-[300px] border-2 border-gray-200">
//   <img
//     src="/images/solutions/daas_img_2.png"   // 👈 replace with your actual image path
//     alt="Industries — truck, ship, factory"
//     className="object-cover"
//   />
// </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* SECTION 8 — WHY DAAS WORKS BETTER */}
//             <section className="py-16 md:py-24" style={{ backgroundColor: BG_LIGHT }}>
//                 <div className="container mx-auto px-4 max-w-4xl text-center">
//                     <h2 className="text-3xl md:text-4xl font-extrabold mb-8" style={{ color: TEXT_DARK }}>Perfect for Enterprises Scaling Across Multiple Sites</h2>
//                     <div className="grid md:grid-cols-2 gap-8 text-left">
//                         <div className="bg-white p-6 rounded-xl shadow-md">
//                             <h3 className="font-bold text-xl mb-3 text-blue-600">Financial Agility</h3>
//                             <p className="text-gray-600">No budget approval needed for CapEx. Predictable P&L impact. Faster contract cycles.</p>
//                         </div>
//                         <div className="bg-white p-6 rounded-xl shadow-md">
//                             <h3 className="font-bold text-xl mb-3 text-green-600">Operational Ease</h3>
//                             <p className="text-gray-600">Performance risk shifts entirely to Saarthi. Easy expansion to new fleets. Strong ESG alignment.</p>
//                         </div>
//                     </div>
//                     {/* <div className="mt-10">
//                         <a href="#" className="inline-flex items-center px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition">
//                             Compare CapEx vs DaaS &rarr;
//                         </a>
//                     </div> */}
//                 </div>
//             </section>

//             {/* SECTION 9 — GREENVISION ENABLED PAYMENT */}
//             <section className="py-16 md:py-24" style={{ backgroundColor: BG_CARD }}>
//                 <div className="container mx-auto px-4 max-w-7xl text-center">
//                     <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
//                         <IconBarChart className="w-8 h-8"/>
//                     </div>
//                     <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: TEXT_DARK }}>Transparent, Tamper-Proof Billing Powered by GreenVision</h2>
//                     <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
//                         GreenVision’s telemetry platform acts as the single source of truth for all DaaS contracts. Billing is based on automated M&V reports verifying fuel consumed, saved, uptime, and CO₂ reduction.
//                     </p>
//                     <a href="#" className="text-green-600 font-bold hover:underline text-lg">Explore GreenVision &rarr;</a>
//                 </div>
//             </section>

//             {/* SECTION 10 — ECOSYSTEM INTEGRATION */}
//             <section className="py-16 md:py-24" style={{ backgroundColor: BG_LIGHT }}>
//                 <div className="container mx-auto px-4 text-center">
//                     <h2 className="text-3xl md:text-4xl font-extrabold mb-10" style={{ color: TEXT_DARK }}>Powered by the Full Saarthi Ecosystem</h2>
//                     <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg font-semibold text-gray-700">
//                         <div className="bg-white px-6 py-3 rounded-lg shadow">GreenMentor</div>
//                         <IconArrowRight className="hidden md:block text-green-500"/>
//                         <div className="bg-white px-6 py-3 rounded-lg shadow">GreenLabs</div>
//                         <IconArrowRight className="hidden md:block text-green-500"/>
//                         <div className="bg-white px-6 py-3 rounded-lg shadow">GreenVision</div>
//                         <IconArrowRight className="hidden md:block text-green-500"/>
//                         <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">DaaS Profit</div>
//                     </div>
//                     <div className="mt-10">
//                         <a href="#" className="text-blue-600 font-bold hover:underline">Explore the Saarthi Ecosystem &rarr;</a>
//                     </div>
//                 </div>
//             </section>

//             {/* SECTION 11 — SAFETY & COMPLIANCE */}
//             <section className="py-16 md:py-24" style={{ backgroundColor: TEXT_DARK, color: 'white' }}>
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Certified. Safe. Enterprise-Ready.</h2>
//                             <ul className="space-y-3 text-lg opacity-90">
//                                 <li className="flex items-center"><IconShieldCheck className="w-6 h-6 mr-3 text-green-400"/> No compressed hydrogen storage</li>
//                                 <li className="flex items-center"><IconShieldCheck className="w-6 h-6 mr-3 text-green-400"/> Auto shutoff on abnormal conditions</li>
//                                 <li className="flex items-center"><IconShieldCheck className="w-6 h-6 mr-3 text-green-400"/> Marine-/DG-/fleet-safe wiring</li>
//                                 <li className="flex items-center"><IconShieldCheck className="w-6 h-6 mr-3 text-green-400"/> Redundancy in safety sensors</li>
//                             </ul>
//                             <div className="mt-8 flex gap-4 text-sm font-mono text-green-400">
//                                 <span>CE</span> <span>UL</span> <span>ROHS</span> <span>EMC</span> <span>ISO 9001</span>
//                             </div>
//                         </div>
//                         <div className="text-center">
//                             <a href="#" className="inline-block border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition font-bold">View Safety Standards &rarr;</a>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* SECTION 12 — CTA SECTION */}
//             <section className="py-20 md:py-28 text-center" style={{ backgroundColor: PRIMARY_COLOR }}>
//                 <div className="container mx-auto px-4 max-w-4xl">
//                     <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready for Zero CapEx Decarbonisation?</h2>
//                     <p className="text-xl text-white opacity-90 mb-10">
//                         Share your engines and monthly diesel spend — we’ll calculate your savings and monthly fee.
//                     </p>
//                     <div className="flex flex-col sm:flex-row justify-center gap-4">
//                         <a href="/contact" className="px-8 py-4 bg-white text-green-600 font-bold text-xl rounded-full shadow-xl hover:bg-gray-100 transition transform hover:scale-105">
//                             Speak With a Specialist
//                         </a>
//                         {/* <a href="/contact" className="px-8 py-4 border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white/10 transition">
//                             Speak With a Specialist
//                         </a> */}
//                     </div>
//                 </div>
//             </section>

//         </main>
//     );
// };

// export default DaaSPage;
// DaaSPage.tsx
// Auto-converted from standalone HTML → Next.js page component.
// Preserves all original styling and interactivity.
//
// Usage: Place in app/<route>/page.tsx
// The component includes its own header/footer from the original HTML.
// Remove those blocks if you want to use your site's shared layout.

"use client";

import { useEffect, useRef } from "react";

const PAGE_CSS = `.sgt-daas {
    --brand:       #1B6B3D;
    --brand-dark:  #155730;
    --brand-mid:   #237a47;
    --brand-light: #33A04A;
    --brand-faint: #f0f9f3;
    --accent:      #3ec87e;
    --gold:        #c8a84b;
    --gold-light:  #e8c97a;
    --slate-900:   #0f172a;
    --slate-800:   #1e293b;
    --slate-700:   #334155;
    --slate-600:   #475569;
    --slate-500:   #64748b;
    --slate-400:   #94a3b8;
    --slate-200:   #e2e8f0;
    --slate-100:   #f1f5f9;
    --slate-50:    #f8fafc;
    --white:       #ffffff;
    --max-w:       1200px;
  }
  
  

  
  
  
  
  
  
  
  
  
  
  
  

  /* ── HERO ── */
  .sgt-daas .hero {
    padding-top: 0;
    background: var(--slate-900);
    position: relative; overflow: hidden;
  }
  .sgt-daas .hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 65% 40%, rgba(27,107,61,0.22) 0%, transparent 60%),
      radial-gradient(ellipse at 15% 85%, rgba(62,200,126,0.07) 0%, transparent 50%);
    pointer-events: none;
  }
  .sgt-daas .hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 64px 64px; pointer-events: none;
  }
  .sgt-daas .hero-inner {
    max-width: var(--max-w); margin: 0 auto;
    padding: 5rem 2rem 4rem;
    display: grid; grid-template-columns: 1.1fr 0.9fr;
    gap: 5rem; align-items: center;
    position: relative; z-index: 1;
  }
  .sgt-daas .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.68rem; font-weight: 700; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--accent); margin-bottom: 1.4rem;
  }
  .sgt-daas .hero-eyebrow::before { content: ''; width: 22px; height: 2px; background: var(--accent); border-radius: 1px; }
  .sgt-daas .hero-title {
    font-size: clamp(2.4rem, 4vw, 4rem); font-weight: 800;
    line-height: 1.08; letter-spacing: -0.03em; color: white;
    margin-bottom: 1.4rem;
  }
  .sgt-daas .hero-title .hi { color: var(--accent); }
  .sgt-daas .hero-desc {
    font-size: 1.05rem; line-height: 1.78;
    color: rgba(255,255,255,0.62); max-width: 520px; margin-bottom: 2.5rem;
  }
  .sgt-daas .hero-pills { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 2.5rem; }
  .sgt-daas .hero-pill {
    font-size: 0.72rem; font-weight: 600;
    color: rgba(255,255,255,0.75);
    border: 1px solid rgba(255,255,255,0.18);
    padding: 0.35rem 0.85rem; border-radius: 100px;
    display: flex; align-items: center; gap: 0.4rem;
  }
  .sgt-daas .hero-pill .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
  .sgt-daas .hero-cta-row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
  .sgt-daas .btn-primary {
    display: inline-flex; align-items: center; gap: 0.4rem;
    background: var(--brand-light); color: white;
    font-size: 0.9rem; font-weight: 700;
    padding: 0.85rem 1.8rem; border-radius: 8px;
    text-decoration: none; transition: all 0.2s;
  }
  .sgt-daas .btn-primary:hover { background: var(--brand); transform: translateY(-1px); }
  .sgt-daas .btn-ghost-light {
    display: inline-flex; align-items: center; gap: 0.4rem;
    border: 1.5px solid rgba(255,255,255,0.25); color: rgba(255,255,255,0.75);
    font-size: 0.88rem; font-weight: 600;
    padding: 0.85rem 1.6rem; border-radius: 8px;
    text-decoration: none; transition: all 0.2s;
  }
  .sgt-daas .btn-ghost-light:hover { border-color: rgba(255,255,255,0.55); color: white; }
  /* Hero right card */
  .sgt-daas .hero-right { position: relative; }
  .sgt-daas .daas-def-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px; padding: 2.2rem;
    backdrop-filter: blur(6px);
  }
  .sgt-daas .daas-def-top {
    display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.5rem;
  }
  .sgt-daas .daas-def-icon {
    width: 44px; height: 44px; border-radius: 10px;
    background: rgba(62,200,126,0.15); border: 1px solid rgba(62,200,126,0.25);
    display: flex; align-items: center; justify-content: center; font-size: 1.3rem;
  }
  .sgt-daas .daas-def-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); }
  .sgt-daas .daas-def-name { font-size: 1.05rem; font-weight: 700; color: white; }
  .sgt-daas .daas-bundles { display: flex; flex-direction: column; gap: 0.75rem; }
  .sgt-daas .daas-bundle {
    display: flex; align-items: flex-start; gap: 0.9rem;
    background: rgba(255,255,255,0.04); border-radius: 10px;
    padding: 1rem 1.1rem;
    border: 1px solid rgba(255,255,255,0.07);
  }
  .sgt-daas .bundle-num {
    width: 26px; height: 26px; min-width: 26px;
    border-radius: 50%; background: rgba(62,200,126,0.18);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.65rem; font-weight: 800; color: var(--accent);
  }
  .sgt-daas .bundle-title { font-size: 0.82rem; font-weight: 700; color: white; margin-bottom: 0.2rem; }
  .sgt-daas .bundle-desc { font-size: 0.75rem; color: rgba(255,255,255,0.5); line-height: 1.5; }
  .sgt-daas .daas-fee-note {
    margin-top: 1.2rem; padding: 1rem 1.1rem;
    background: rgba(27,107,61,0.25); border-radius: 10px;
    border: 1px solid rgba(62,200,126,0.2);
    font-size: 0.78rem; color: rgba(255,255,255,0.7); line-height: 1.6;
  }
  .sgt-daas .daas-fee-note strong { color: var(--accent); }

  /* ── SHARED ── */
  .sgt-daas .container { max-width: var(--max-w); margin: 0 auto; padding: 0 2rem; }
  .sgt-daas .section-label {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.68rem; font-weight: 700; letter-spacing: 0.16em;
    text-transform: uppercase; color: var(--brand); margin-bottom: 0.9rem;
  }
  .sgt-daas .section-label::before { content: ''; width: 20px; height: 2px; background: var(--brand); border-radius: 1px; }
  .sgt-daas .section-title {
    font-size: clamp(1.8rem, 2.8vw, 2.7rem); font-weight: 800;
    line-height: 1.15; letter-spacing: -0.025em; color: var(--slate-900);
  }
  .sgt-daas .section-title .brand { color: var(--brand); }
  .sgt-daas .section-sub {
    font-size: 1rem; line-height: 1.75; color: var(--slate-600);
    max-width: 640px; margin-top: 1rem;
  }

  /* ── REDEFINE SECTION ── */
  .sgt-daas .redefine-section {
    padding: 7rem 0; background: var(--brand-faint);
    border-top: 1px solid rgba(27,107,61,0.1);
  }
  .sgt-daas .redefine-layout {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 5rem; align-items: center; margin-top: 3.5rem;
  }
  .sgt-daas .redefine-text { font-size: 1rem; line-height: 1.9; color: var(--slate-700); }
  .sgt-daas .redefine-text p + p { margin-top: 1.1rem; }
  .sgt-daas .redefine-text strong { color: var(--brand); font-weight: 700; }
  .sgt-daas .compare-table { width: 100%; border-collapse: collapse; }
  .sgt-daas .compare-table thead th {
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em;
    text-transform: uppercase; padding: 0.75rem 1rem;
    text-align: left; border-bottom: 2px solid var(--slate-200);
    color: var(--slate-500);
  }
  .sgt-daas .compare-table thead th.brand-col { color: var(--brand); border-bottom-color: var(--brand); }
  .sgt-daas .compare-table tbody tr { border-bottom: 1px solid var(--slate-100); }
  .sgt-daas .compare-table tbody tr:last-child { border-bottom: none; }
  .sgt-daas .compare-table td {
    padding: 0.85rem 1rem; font-size: 0.85rem; color: var(--slate-600); vertical-align: middle;
  }
  .sgt-daas .compare-table td:first-child { color: var(--slate-900); font-weight: 600; }
  .sgt-daas .compare-table td.old { color: var(--slate-400); text-decoration: line-through; }
  .sgt-daas .compare-table td.new-val { color: var(--brand); font-weight: 600; }
  .sgt-daas .compare-wrap {
    background: white; border-radius: 12px;
    border: 1px solid var(--slate-200);
    overflow: hidden;
    box-shadow: 0 2px 16px rgba(27,107,61,0.07);
  }
  .compare-
  .sgt-daas .compare-header-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
  .sgt-daas .compare-header-label.old-lbl { color: rgba(255,255,255,0.5); }
  .sgt-daas .compare-header-label.new-lbl { color: var(--gold-light); }

  /* ── HOW IT WORKS ── */
  .sgt-daas .hiw-section { padding: 7rem 0; background: var(--white); border-top: 1px solid var(--slate-200); }
  .sgt-daas .hiw-intro { max-width: 640px; margin-bottom: 4rem; }
  .sgt-daas .phase-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; }
  .sgt-daas .phase-grid::before {
    content: '';
    position: absolute; top: 32px; left: calc(12.5% + 24px); right: calc(12.5% + 24px);
    height: 2px; background: var(--slate-200); z-index: 0;
  }
  .sgt-daas .phase-card {
    display: flex; flex-direction: column; align-items: center;
    padding: 2rem 1.5rem; text-align: center; position: relative; z-index: 1;
    cursor: default; transition: transform 0.2s;
  }
  .sgt-daas .phase-card:hover { transform: translateY(-4px); }
  .sgt-daas .phase-icon-wrap {
    width: 64px; height: 64px; border-radius: 50%;
    background: var(--white); border: 2px solid var(--slate-200);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.6rem; margin-bottom: 1.2rem;
    position: relative; z-index: 1;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .sgt-daas .phase-card:hover .phase-icon-wrap {
    border-color: var(--brand);
    box-shadow: 0 0 0 4px var(--brand-faint);
  }
  .sgt-daas .phase-num {
    position: absolute; top: -8px; right: -8px;
    width: 22px; height: 22px; border-radius: 50%;
    background: var(--brand); color: white;
    font-size: 0.62rem; font-weight: 800;
    display: flex; align-items: center; justify-content: center;
  }
  .sgt-daas .phase-name { font-size: 0.9rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.5rem; }
  .sgt-daas .phase-desc { font-size: 0.8rem; color: var(--slate-500); line-height: 1.6; }
  /* After-DaaS section */
  .sgt-daas .after-daas {
    margin-top: 5rem; padding: 2.5rem;
    background: var(--brand-faint);
    border: 1px solid rgba(27,107,61,0.15); border-radius: 14px;
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; align-items: start;
  }
  .sgt-daas .after-head { grid-column: 1 / -1; }
  .sgt-daas .after-head-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--brand); margin-bottom: 0.4rem; }
  .sgt-daas .after-head-title { font-size: 1.2rem; font-weight: 800; color: var(--slate-900); }
  .sgt-daas .after-item { display: flex; gap: 0.8rem; align-items: flex-start; }
  .sgt-daas .after-dot { width: 8px; height: 8px; min-width: 8px; border-radius: 50%; background: var(--brand-light); margin-top: 5px; }
  .sgt-daas .after-item-title { font-size: 0.85rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.2rem; }
  .sgt-daas .after-item-desc { font-size: 0.8rem; color: var(--slate-500); line-height: 1.55; }

  /* ── WHAT'S INCLUDED ── */
  .sgt-daas .included-section { padding: 7rem 0; background: var(--slate-900); border-top: 1px solid rgba(255,255,255,0.06); }
  .sgt-daas .included-section .section-label { color: var(--accent); }
  .sgt-daas .included-section .section-label::before { background: var(--accent); }
  .sgt-daas .included-section .section-title { color: white; }
  .sgt-daas .included-section .section-title .brand { color: var(--accent); }
  .sgt-daas .included-section .section-sub { color: rgba(255,255,255,0.55); }
  .sgt-daas .three-pillars {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem; margin-top: 3.5rem;
  }
  .sgt-daas .pillar-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px; padding: 2.2rem;
    display: flex; flex-direction: column;
    transition: border-color 0.25s, background 0.25s;
    cursor: default;
  }
  .sgt-daas .pillar-card:hover {
    border-color: rgba(62,200,126,0.3);
    background: rgba(62,200,126,0.05);
  }
  .sgt-daas .pillar-card-icon {
    font-size: 2rem; margin-bottom: 1.2rem;
    display: block;
  }
  .sgt-daas .pillar-card-tag {
    font-size: 0.6rem; font-weight: 700; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--accent);
    margin-bottom: 0.6rem;
  }
  .sgt-daas .pillar-card-name { font-size: 1.1rem; font-weight: 800; color: white; margin-bottom: 0.8rem; }
  .sgt-daas .pillar-card-desc { font-size: 0.85rem; color: rgba(255,255,255,0.55); line-height: 1.7; flex: 1; }
  .sgt-daas .pillar-card-items { margin-top: 1.4rem; display: flex; flex-direction: column; gap: 0.6rem; }
  .sgt-daas .pillar-card-item {
    display: flex; align-items: flex-start; gap: 0.6rem;
    font-size: 0.8rem; color: rgba(255,255,255,0.65);
  }
  .sgt-daas .pillar-card-item::before { content: '→'; color: var(--accent); font-weight: 700; flex-shrink: 0; }
  .sgt-daas .pillar-total {
    margin-top: 3.5rem;
    background: rgba(27,107,61,0.2);
    border: 1px solid rgba(62,200,126,0.2);
    border-radius: 12px; padding: 2rem 2.5rem;
    display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;
  }
  .sgt-daas .pillar-total-text { color: rgba(255,255,255,0.8); font-size: 1rem; max-width: 580px; line-height: 1.7; }
  .sgt-daas .pillar-total-text strong { color: white; }
  .sgt-daas .pillar-total-badge {
    background: var(--brand); color: white;
    font-size: 0.8rem; font-weight: 700; padding: 0.8rem 1.4rem;
    border-radius: 8px; white-space: nowrap;
    text-align: center; line-height: 1.5;
  }

  /* ── ELIGIBILITY ── */
  .sgt-daas .eligibility-section { padding: 7rem 0; background: var(--white); border-top: 1px solid var(--slate-200); }
  .sgt-daas .eligibility-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; margin-top: 3.5rem; }
  .sgt-daas .elig-note {
    background: var(--slate-50); border: 1px solid var(--slate-200);
    border-left: 4px solid var(--brand);
    border-radius: 8px; padding: 1.4rem 1.5rem;
    font-size: 0.88rem; color: var(--slate-600); line-height: 1.7;
    margin-bottom: 2rem;
  }
  .sgt-daas .elig-note strong { color: var(--slate-900); }
  .sgt-daas .elig-criteria { display: flex; flex-direction: column; gap: 1rem; }
  .sgt-daas .elig-item {
    display: flex; align-items: flex-start; gap: 1rem;
    padding: 1.2rem 1.3rem; background: var(--white);
    border: 1px solid var(--slate-200); border-radius: 10px;
    transition: border-color 0.2s;
  }
  .sgt-daas .elig-item:hover { border-color: var(--brand-light); }
  .sgt-daas .elig-icon {
    width: 38px; height: 38px; min-width: 38px;
    background: var(--brand-faint); border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem; border: 1px solid rgba(27,107,61,0.12);
  }
  .sgt-daas .elig-title { font-size: 0.85rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.2rem; }
  .sgt-daas .elig-desc { font-size: 0.8rem; color: var(--slate-500); line-height: 1.55; }
  .sgt-daas .sectors-fit { display: flex; flex-direction: column; gap: 0.75rem; }
  .sgt-daas .sector-fit-item {
    display: flex; align-items: center; gap: 0.85rem;
    padding: 0.9rem 1.1rem;
    border: 1px solid var(--slate-200); border-radius: 9px;
    background: var(--white); transition: background 0.2s, border-color 0.2s;
    cursor: default;
  }
  .sgt-daas .sector-fit-item:hover { background: var(--brand-faint); border-color: rgba(27,107,61,0.2); }
  .sgt-daas .sector-fit-icon { font-size: 1.2rem; min-width: 28px; }
  .sgt-daas .sector-fit-name { font-size: 0.88rem; font-weight: 600; color: var(--slate-900); }
  .sgt-daas .sector-fit-tag { margin-left: auto; font-size: 0.65rem; font-weight: 700; color: var(--brand); letter-spacing: 0.1em; text-transform: uppercase; }

  /* ── STRUCTURE / TERMS ── */
  .sgt-daas .structure-section {
    padding: 7rem 0; background: var(--slate-50);
    border-top: 1px solid var(--slate-200);
  }
  .sgt-daas .structure-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; margin-top: 3.5rem; }
  .sgt-daas .timeline { display: flex; flex-direction: column; gap: 0; }
  .sgt-daas .timeline-item { display: flex; gap: 1.5rem; position: relative; padding-bottom: 2.5rem; }
  .sgt-daas .timeline-item:last-child { padding-bottom: 0; }
  .sgt-daas .timeline-item:not(:last-child)::before {
    content: ''; position: absolute;
    left: 19px; top: 42px; bottom: 0;
    width: 2px; background: var(--slate-200);
  }
  .sgt-daas .timeline-icon {
    width: 40px; height: 40px; min-width: 40px;
    border-radius: 50%; background: var(--white);
    border: 2px solid var(--slate-200);
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem; position: relative; z-index: 1;
    transition: border-color 0.2s;
  }
  .sgt-daas .timeline-item.active .timeline-icon { border-color: var(--brand); background: var(--brand-faint); }
  .sgt-daas .timeline-content {}
  .sgt-daas .timeline-title { font-size: 0.9rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.3rem; }
  .sgt-daas .timeline-desc { font-size: 0.83rem; color: var(--slate-500); line-height: 1.65; }
  .sgt-daas .terms-grid { display: flex; flex-direction: column; gap: 1rem; }
  .sgt-daas .term-row {
    display: flex; gap: 0; align-items: stretch;
    background: var(--white); border: 1px solid var(--slate-200); border-radius: 10px; overflow: hidden;
  }
  .sgt-daas .term-key {
    min-width: 160px; padding: 1rem 1.2rem;
    background: var(--slate-50); border-right: 1px solid var(--slate-200);
    font-size: 0.78rem; font-weight: 700; color: var(--slate-900);
    display: flex; align-items: center;
  }
  .sgt-daas .term-val { padding: 1rem 1.2rem; font-size: 0.82rem; color: var(--slate-600); line-height: 1.6; flex: 1; }
  .sgt-daas .term-val strong { color: var(--brand); font-weight: 700; }
  .sgt-daas .disclaimer {
    margin-top: 2rem;
    background: var(--white); border: 1px solid var(--slate-200);
    border-left: 4px solid var(--gold);
    border-radius: 8px; padding: 1.2rem 1.4rem;
    font-size: 0.8rem; color: var(--slate-500); line-height: 1.7;
  }
  .sgt-daas .disclaimer strong { color: var(--slate-700); }

  /* ── POST-OWNERSHIP ── */
  .sgt-daas .amc-section { padding: 7rem 0; background: var(--white); border-top: 1px solid var(--slate-200); }
  .sgt-daas .amc-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; margin-top: 3.5rem; }
  .sgt-daas .amc-items { display: flex; flex-direction: column; gap: 1rem; }
  .sgt-daas .amc-item {
    display: flex; gap: 1rem; align-items: flex-start;
    padding: 1.3rem 1.4rem;
    background: var(--brand-faint); border: 1px solid rgba(27,107,61,0.12);
    border-radius: 10px; cursor: default; transition: border-color 0.2s;
  }
  .sgt-daas .amc-item:hover { border-color: var(--brand-light); }
  .sgt-daas .amc-item-icon {
    width: 38px; height: 38px; min-width: 38px;
    background: var(--brand); border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem;
  }
  .sgt-daas .amc-item-title { font-size: 0.87rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.25rem; }
  .sgt-daas .amc-item-desc { font-size: 0.8rem; color: var(--slate-600); line-height: 1.55; }
  .sgt-daas .amc-right-text { font-size: 1rem; line-height: 1.85; color: var(--slate-700); }
  .sgt-daas .amc-right-text p + p { margin-top: 1.1rem; }
  .sgt-daas .amc-right-text strong { color: var(--brand); font-weight: 700; }

  /* ── GreenVision ── */
  .sgt-daas .gv-section {
    padding: 6rem 0; background: var(--brand);
    border-top: 1px solid rgba(255,255,255,0.1);
  }
  .sgt-daas .gv-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
  .sgt-daas .gv-section .section-label { color: rgba(255,255,255,0.6); }
  .sgt-daas .gv-section .section-label::before { background: rgba(255,255,255,0.4); }
  .sgt-daas .gv-section .section-title { color: white; }
  .sgt-daas .gv-section .section-sub { color: rgba(255,255,255,0.65); }
  .sgt-daas .gv-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem; }
  .sgt-daas .gv-metric {
    background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
    border-radius: 10px; padding: 1.4rem;
  }
  .sgt-daas .gv-metric-val { font-size: 1.6rem; font-weight: 800; color: white; line-height: 1; }
  .sgt-daas .gv-metric-label { font-size: 0.72rem; font-weight: 500; color: rgba(255,255,255,0.6); margin-top: 0.3rem; text-transform: uppercase; letter-spacing: 0.08em; }
  .sgt-daas .gv-items { display: flex; flex-direction: column; gap: 0.9rem; }
  .sgt-daas .gv-item { display: flex; align-items: flex-start; gap: 0.8rem; }
  .sgt-daas .gv-item-dot { width: 8px; height: 8px; min-width: 8px; border-radius: 50%; background: rgba(255,255,255,0.4); margin-top: 6px; }
  .sgt-daas .gv-item-title { font-size: 0.87rem; font-weight: 700; color: white; margin-bottom: 0.15rem; }
  .sgt-daas .gv-item-desc { font-size: 0.79rem; color: rgba(255,255,255,0.55); line-height: 1.55; }

  /* ── CTA ── */
  .sgt-daas .cta-section {
    padding: 6rem 0; background: var(--slate-900); text-align: center;
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .sgt-daas .cta-inner { max-width: 620px; margin: 0 auto; }
  .sgt-daas .cta-section .section-label { justify-content: center; color: var(--accent); }
  .sgt-daas .cta-section .section-label::before { background: var(--accent); }
  .sgt-daas .cta-title { font-size: clamp(1.6rem, 2.8vw, 2.4rem); font-weight: 800; color: white; letter-spacing: -0.025em; line-height: 1.2; margin: 1rem 0 0.8rem; }
  .sgt-daas .cta-sub { font-size: 0.97rem; color: rgba(255,255,255,0.6); margin-bottom: 2.5rem; line-height: 1.75; }
  .sgt-daas .cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  .sgt-daas .btn-green { background: var(--brand-light); color: white; font-size: 0.9rem; font-weight: 700; padding: 0.9rem 1.9rem; border-radius: 8px; text-decoration: none; transition: all 0.2s; }
  .sgt-daas .btn-green:hover { background: var(--brand); transform: translateY(-1px); }
  .sgt-daas .btn-outline { border: 1.5px solid rgba(255,255,255,0.25); color: rgba(255,255,255,0.75); font-size: 0.88rem; font-weight: 600; padding: 0.9rem 1.7rem; border-radius: 8px; text-decoration: none; transition: all 0.2s; }
  .sgt-daas .btn-outline:hover { border-color: rgba(255,255,255,0.55); color: white; }

  
  
  
  
  
  
  
  

  /* ── ANIMATIONS ── */
  .sgt-daas .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .sgt-daas .reveal.visible { opacity: 1; transform: translateY(0); }
  .sgt-daas .reveal-delay-1 { transition-delay: 0.1s; }
  .sgt-daas .reveal-delay-2 { transition-delay: 0.2s; }
  .sgt-daas .reveal-delay-3 { transition-delay: 0.3s; }
  .sgt-daas .reveal-delay-4 { transition-delay: 0.4s; }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .sgt-daas .hero-inner, .sgt-daas .redefine-layout, .sgt-daas .eligibility-layout, .sgt-daas .structure-layout, .sgt-daas .amc-layout, .sgt-daas .gv-layout { grid-template-columns: 1fr; gap: 3rem; }
    .sgt-daas .hero-inner { padding: 3.5rem 1.5rem; }
    .sgt-daas .three-pillars { grid-template-columns: 1fr; }
    .sgt-daas .phase-grid { grid-template-columns: repeat(2, 1fr); }
    .sgt-daas .phase-grid::before { display: none; }
    .sgt-daas .after-daas { grid-template-columns: 1fr; }
    .sgt-daas .after-head { grid-column: auto; }
    .sgt-daas .gv-metrics { grid-template-columns: 1fr 1fr; }
    .sgt-daas .container { padding: 0 1.5rem; }
    nav 
  }`;

const PAGE_HTML = `<!-- NAV -->


<!-- HERO -->
<section class="hero mt-7">
  <div class="hero-grid"></div>
  <div class="hero-inner">
    <div>
      <div class="hero-eyebrow">Solutions · DaaS</div>
      <h1 class="hero-title">Decarbonisation<br>as a <span class="hi">Service.</span></h1>
      <p class="hero-desc">Not a rental. Not just a financial product. DaaS is SGT's commitment to own your decarbonisation journey end-to-end — bringing hardware, data intelligence, and expert consulting together as one managed outcome, charged as a single monthly fee.</p>
      <div class="hero-pills">
        <div class="hero-pill"><span class="dot"></span>Asset + Data + Consulting</div>
        <div class="hero-pill"><span class="dot"></span>12 to 36 month schedule</div>
        <div class="hero-pill"><span class="dot"></span>Ownership transferred at end</div>
        <div class="hero-pill"><span class="dot"></span>Continuous improvement</div>
      </div>
      <div class="hero-cta-row">
        <a href="#eligibility" class="btn-primary">Explore DaaS Eligibility →</a>
        <a href="#how-it-works" class="btn-ghost-light">How it works</a>
      </div>
    </div>
    <div class="hero-right">
      <div class="daas-def-card">
        <div class="daas-def-top">
          <div class="daas-def-icon">🌿</div>
          <div>
            <div class="daas-def-label">DaaS · What it means</div>
            <div class="daas-def-name">One fee. Three layers. One outcome.</div>
          </div>
        </div>
        <div class="daas-bundles">
          <div class="daas-bundle">
            <div class="bundle-num">1</div>
            <div>
              <div class="bundle-title">Hardware (GreenLabs)</div>
              <div class="bundle-desc">SGT's HHO system installed on your asset. You acquire it progressively through a structured monthly payment schedule over 12–36 months.</div>
            </div>
          </div>
          <div class="daas-bundle">
            <div class="bundle-num">2</div>
            <div>
              <div class="bundle-title">Data & Intelligence (GreenVision)</div>
              <div class="bundle-desc">Real-time monitoring, fuel tracking, emission measurement, predictive maintenance, and ESG-grade reporting — active throughout the DaaS period.</div>
            </div>
          </div>
          <div class="daas-bundle">
            <div class="bundle-num">3</div>
            <div>
              <div class="bundle-title">Consulting & Outcomes (GreenMentor)</div>
              <div class="bundle-desc">SGT actively manages your decarbonisation trajectory — finding new efficiencies, applying technology improvements, and advising on regulatory compliance.</div>
            </div>
          </div>
        </div>
        <div class="daas-fee-note">
          <strong>Monthly fee = asset acquisition + ongoing service.</strong> Part of your fee retires the hardware cost. The remainder funds data, maintenance, and consulting — so your decarbonisation never stalls.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- REDEFINE -->
<section class="redefine-section">
  <div class="container">
    <div class="reveal">
      <span class="section-label">Redefining DaaS</span>
      <h2 class="section-title">Outcome first.<br><span class="brand">Finance second.</span></h2>
    </div>
    <div class="redefine-layout">
      <div class="redefine-text reveal reveal-delay-1">
        <p>The original meaning of "Decarbonisation-as-a-Service" gets lost when it becomes a billing conversation. DaaS at SGT starts with a different question: <strong>what decarbonisation outcome does this customer need, and how do we deliver it continuously?</strong></p>
        <p>The monthly fee is simply the mechanism that makes this possible. Part of it acquires the hardware progressively — this is not a rental, but a <strong>structured hire-purchase</strong>. At the end of the agreed schedule (12 to 36 months), full ownership of the SGT system transfers to the customer.</p>
        <p>But the more important part is what the fee enables <em>beyond</em> hardware: active monitoring, continuous improvement, regulatory navigation, technology upgrades, and the expertise to keep getting better results year after year.</p>
        <p><strong>You focus on your business. SGT takes ownership of the outcome.</strong></p>
      </div>
      <div class="reveal reveal-delay-2">
        <div class="compare-wrap">
          <div class="compare-header">
            <span class="compare-header-label old-lbl">DaaS as it was understood</span>
            <span class="compare-header-label new-lbl">DaaS as SGT defines it</span>
          </div>
          <table class="compare-table">
            <tbody>
              <tr>
                <td>Primary purpose</td>
                <td class="old">Financing tool</td>
                <td class="new-val">Outcome delivery</td>
              </tr>
              <tr>
                <td>What's included</td>
                <td class="old">Hardware only</td>
                <td class="new-val">Asset + Data + Consulting</td>
              </tr>
              <tr>
                <td>Structure</td>
                <td class="old">Rental / subscription</td>
                <td class="new-val">Hire-purchase + service</td>
              </tr>
              <tr>
                <td>End state</td>
                <td class="old">No ownership</td>
                <td class="new-val">Full asset ownership</td>
              </tr>
              <tr>
                <td>SGT's role</td>
                <td class="old">Equipment supplier</td>
                <td class="new-val">Decarbonisation partner</td>
              </tr>
              <tr>
                <td>Post-DaaS</td>
                <td class="old">Relationship ends</td>
                <td class="new-val">AMC + ongoing improvement</td>
              </tr>
              <tr>
                <td>Improvement over time</td>
                <td class="old">None committed</td>
                <td class="new-val">Continuous, included</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="hiw-section" id="how-it-works">
  <div class="container">
    <div class="hiw-intro reveal">
      <span class="section-label">How DaaS Works</span>
      <h2 class="section-title">From first conversation<br><span class="brand">to full ownership.</span></h2>
      <p class="section-sub">DaaS is structured in clear phases. SGT evaluates each customer individually — eligibility, terms, and structure are determined based on asset type, sector, and client profile.</p>
    </div>
    <div class="phase-grid reveal reveal-delay-1">
      <div class="phase-card">
        <div class="phase-icon-wrap">
          🔍
          <span class="phase-num">1</span>
        </div>
        <div class="phase-name">Assessment</div>
        <div class="phase-desc">SGT reviews your asset profile, fuel consumption baseline, sector, and operational context to determine DaaS eligibility and structure.</div>
      </div>
      <div class="phase-card">
        <div class="phase-icon-wrap">
          📋
          <span class="phase-num">2</span>
        </div>
        <div class="phase-name">Proposal & Agreement</div>
        <div class="phase-desc">A DaaS proposal is developed with a defined down payment, monthly fee, schedule duration (12–36 months), and scope of services included.</div>
      </div>
      <div class="phase-card">
        <div class="phase-icon-wrap">
          ⚙️
          <span class="phase-num">3</span>
        </div>
        <div class="phase-name">Installation & Activation</div>
        <div class="phase-desc">SGT installs the hardware, onboards your asset to GreenVision, establishes the baseline, and activates monitoring from day one.</div>
      </div>
      <div class="phase-card">
        <div class="phase-icon-wrap">
          📈
          <span class="phase-num">4</span>
        </div>
        <div class="phase-name">Active Management</div>
        <div class="phase-desc">Throughout the DaaS period, SGT manages maintenance, tracks outcomes, provides ESG reports, and continuously seeks performance improvements.</div>
      </div>
    </div>

    <div class="after-daas reveal reveal-delay-2">
      <div class="after-head">
        <div class="after-head-label">After the DaaS schedule completes</div>
        <div class="after-head-title">Ownership transfers. The partnership continues.</div>
      </div>
      <div class="after-item">
        <div class="after-dot"></div>
        <div>
          <div class="after-item-title">Full Asset Ownership</div>
          <div class="after-item-desc">Once all scheduled payments are completed, the SGT HHO system becomes your asset outright. No residual payment, no balloon cost.</div>
        </div>
      </div>
      <div class="after-item">
        <div class="after-dot"></div>
        <div>
          <div class="after-item-title">Annual Maintenance Contract (AMC)</div>
          <div class="after-item-desc">Post-ownership, SGT continues servicing your system under an AMC — covering preventive maintenance, calibration, spares, and updates.</div>
        </div>
      </div>
      <div class="after-item">
        <div class="after-dot"></div>
        <div>
          <div class="after-item-title">Technology Upgrades & New Solutions</div>
          <div class="after-item-desc">As SGT's product line evolves, existing customers get priority access to improved technologies — extending their decarbonisation benefit continuously.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WHAT'S INCLUDED -->
<section class="included-section">
  <div class="container">
    <div class="reveal">
      <span class="section-label">What DaaS Includes</span>
      <h2 class="section-title">Three layers.<br><span class="brand">One monthly fee.</span></h2>
      <p class="section-sub">Every DaaS engagement bundles hardware acquisition, live intelligence, and expert management — ensuring your decarbonisation doesn't stop at installation.</p>
    </div>
    <div class="three-pillars">
      <div class="pillar-card reveal reveal-delay-1">
        <span class="pillar-card-icon">🔧</span>
        <div class="pillar-card-tag">Layer 1 · GreenLabs</div>
        <div class="pillar-card-name">The Hardware</div>
        <div class="pillar-card-desc">Your SGT HHO system — GreenEdge, GreenMarine, GreenX, or GreenDrive depending on your asset. Installed, commissioned, and progressively owned through your DaaS schedule.</div>
        <div class="pillar-card-items">
          <div class="pillar-card-item">Installation & commissioning by SGT engineers</div>
          <div class="pillar-card-item">All scheduled maintenance during DaaS period</div>
          <div class="pillar-card-item">Consumables, spares, and calibration included</div>
          <div class="pillar-card-item">Ownership transfer at schedule completion</div>
        </div>
      </div>
      <div class="pillar-card reveal reveal-delay-2">
        <span class="pillar-card-icon">📊</span>
        <div class="pillar-card-tag">Layer 2 · GreenVision</div>
        <div class="pillar-card-name">The Intelligence</div>
        <div class="pillar-card-desc">AI-powered IoT platform that creates a Digital Twin of your asset. Real-time data, verified outcomes, and ESG-grade reporting — active from day one through the full DaaS period.</div>
        <div class="pillar-card-items">
          <div class="pillar-card-item">Real-time fuel consumption & emission tracking</div>
          <div class="pillar-card-item">Automated ESG reports (BRSR, CBAM, IMO)</div>
          <div class="pillar-card-item">Predictive maintenance alerts</div>
          <div class="pillar-card-item">Verified tCO₂e reduction data</div>
        </div>
      </div>
      <div class="pillar-card reveal reveal-delay-3">
        <span class="pillar-card-icon">🧭</span>
        <div class="pillar-card-tag">Layer 3 · GreenMentor</div>
        <div class="pillar-card-name">The Expertise</div>
        <div class="pillar-card-desc">SGT's decarbonisation consulting layer. We actively monitor your performance trajectory, identify new improvement opportunities, and keep you ahead of regulatory requirements.</div>
        <div class="pillar-card-items">
          <div class="pillar-card-item">Continuous performance optimisation reviews</div>
          <div class="pillar-card-item">Regulatory compliance advisory (CPCB, IMO, BRSR)</div>
          <div class="pillar-card-item">Carbon credit documentation support</div>
          <div class="pillar-card-item">Access to new SGT technologies as they launch</div>
        </div>
      </div>
    </div>
    <div class="pillar-total reveal reveal-delay-4">
      <p class="pillar-total-text">Your monthly DaaS fee covers all three layers. <strong>Part of it retires the hardware cost — this is a hire-purchase, not a rental.</strong> The balance funds the intelligence and expertise that keep your decarbonisation compounding over time. The split is determined at the time of proposal, based on your asset and tenure.</p>
      <div class="pillar-total-badge">Asset ownership at<br>end of schedule</div>
    </div>
  </div>
</section>

<!-- ELIGIBILITY -->
<section class="eligibility-section" id="eligibility">
  <div class="container">
    <div class="reveal">
      <span class="section-label">Eligibility & Fit</span>
      <h2 class="section-title">DaaS is assessed<br><span class="brand">case by case.</span></h2>
    </div>
    <div class="eligibility-layout">
      <div class="reveal reveal-delay-1">
        <div class="elig-note">
          <strong>Important:</strong> DaaS availability and structure are at the sole discretion of SGT HydroEdge and are determined individually based on client profile, asset type, sector, operational history, and feasibility assessment. SGT does not make blanket commitments on availability, terms, or savings outcomes.
        </div>
        <div class="elig-criteria">
          <div class="elig-item">
            <div class="elig-icon">🏭</div>
            <div>
              <div class="elig-title">Asset Type & Scale</div>
              <div class="elig-desc">DaaS is suited to assets with consistent, measurable fuel consumption — typically boilers, kilns, marine engines, DG sets above 100 KVA, or significant vehicle fleets.</div>
            </div>
          </div>
          <div class="elig-item">
            <div class="elig-icon">📁</div>
            <div>
              <div class="elig-title">Client Profile</div>
              <div class="elig-desc">SGT evaluates operational stability, fuel data availability, and the customer's commitment to the programme — including the ability to make a defined down payment at the start.</div>
            </div>
          </div>
          <div class="elig-item">
            <div class="elig-icon">⏱️</div>
            <div>
              <div class="elig-title">Programme Duration</div>
              <div class="elig-desc">DaaS schedules run for a minimum of 12 months and a maximum of 36 months, depending on asset value and mutual agreement.</div>
            </div>
          </div>
          <div class="elig-item">
            <div class="elig-icon">🤝</div>
            <div>
              <div class="elig-title">Down Payment Required</div>
              <div class="elig-desc">DaaS begins with a down payment at the time of signing. Monthly payments thereafter cover the remaining asset cost plus the bundled service fee.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="reveal reveal-delay-2">
        <div style="margin-bottom: 1.5rem;">
          <span class="section-label">Sectors Well-Suited for DaaS</span>
        </div>
        <div class="sectors-fit">
          <div class="sector-fit-item">
            <span class="sector-fit-icon">🔥</span>
            <span class="sector-fit-name">Boilers & Process Heat</span>
            <span class="sector-fit-tag">GreenEdge™</span>
          </div>
          <div class="sector-fit-item">
            <span class="sector-fit-icon">🏭</span>
            <span class="sector-fit-name">Kilns & Furnaces</span>
            <span class="sector-fit-tag">GreenEdge™</span>
          </div>
          <div class="sector-fit-item">
            <span class="sector-fit-icon">⚙️</span>
            <span class="sector-fit-name">Furnaces & Smelters</span>
            <span class="sector-fit-tag">GreenEdge™</span>
          </div>
          <div class="sector-fit-item">
            <span class="sector-fit-icon">🚢</span>
            <span class="sector-fit-name">Marine Engines</span>
            <span class="sector-fit-tag">GreenMarine™</span>
          </div>
          <div class="sector-fit-item">
            <span class="sector-fit-icon">⚡</span>
            <span class="sector-fit-name">DG Sets & Power Backup</span>
            <span class="sector-fit-tag">GreenX™</span>
          </div>
          <div class="sector-fit-item">
            <span class="sector-fit-icon">🚛</span>
            <span class="sector-fit-name">Fleet & Mining Engines</span>
            <span class="sector-fit-tag">GreenDrive™</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- STRUCTURE -->
<section class="structure-section">
  <div class="container">
    <div class="reveal">
      <span class="section-label">Programme Structure</span>
      <h2 class="section-title">Transparent terms.<br><span class="brand">Clear milestones.</span></h2>
      <p class="section-sub">DaaS is not a black box. Every engagement has a clearly defined structure, timeline, and ownership milestone from the day of signing.</p>
    </div>
    <div class="structure-layout">
      <div class="reveal reveal-delay-1">
        <div class="timeline">
          <div class="timeline-item active">
            <div class="timeline-icon">📝</div>
            <div class="timeline-content">
              <div class="timeline-title">Signing & Down Payment</div>
              <div class="timeline-desc">Agreement signed. Down payment made. SGT schedules installation. GreenVision onboarding begins. Baseline fuel data established.</div>
            </div>
          </div>
          <div class="timeline-item active">
            <div class="timeline-icon">🔧</div>
            <div class="timeline-content">
              <div class="timeline-title">Installation & Commissioning</div>
              <div class="timeline-desc">SGT engineers install and commission the hardware. System verified, safety checks completed, monitoring activated. Customer briefed on data dashboard.</div>
            </div>
          </div>
          <div class="timeline-item active">
            <div class="timeline-icon">📅</div>
            <div class="timeline-content">
              <div class="timeline-title">Monthly Fee Period (12–36 months)</div>
              <div class="timeline-desc">Regular monthly payments. SGT handles all maintenance, monitoring, reporting, and performance management. Monthly ESG data reports delivered.</div>
            </div>
          </div>
          <div class="timeline-item active">
            <div class="timeline-icon">🏆</div>
            <div class="timeline-content">
              <div class="timeline-title">Ownership Transfer</div>
              <div class="timeline-desc">On completion of the full payment schedule, title of the SGT system transfers to the customer. Asset is now yours outright.</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">🔄</div>
            <div class="timeline-content">
              <div class="timeline-title">Post-Ownership AMC</div>
              <div class="timeline-desc">Customer transitions to an Annual Maintenance Contract with SGT. Continued servicing, calibration, upgrades, and performance advisory.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="reveal reveal-delay-2">
        <div class="terms-grid">
          <div class="term-row">
            <div class="term-key">Structure</div>
            <div class="term-val"><strong>Hire-purchase</strong> — not a rental. Monthly payments acquire the asset progressively.</div>
          </div>
          <div class="term-row">
            <div class="term-key">Down Payment</div>
            <div class="term-val">Required at signing. Amount determined individually based on asset and proposal.</div>
          </div>
          <div class="term-row">
            <div class="term-key">Monthly Fee</div>
            <div class="term-val">Covers asset acquisition + maintenance + GreenVision + consulting. Split defined in proposal.</div>
          </div>
          <div class="term-row">
            <div class="term-key">Duration</div>
            <div class="term-val"><strong>12 months minimum, 36 months maximum.</strong> Agreed at proposal stage.</div>
          </div>
          <div class="term-row">
            <div class="term-key">Ownership</div>
            <div class="term-val"><strong>Full transfer</strong> to customer upon completion of all scheduled payments.</div>
          </div>
          <div class="term-row">
            <div class="term-key">Maintenance</div>
            <div class="term-val">SGT responsible for all maintenance, spares, and calibration during DaaS period.</div>
          </div>
          <div class="term-row">
            <div class="term-key">Post-DaaS</div>
            <div class="term-val">Customer pays AMC to SGT for continued system maintenance and support.</div>
          </div>
          <div class="term-row">
            <div class="term-key">Availability</div>
            <div class="term-val">At SGT's discretion. Assessed individually per client and asset.</div>
          </div>
        </div>
        <div class="disclaimer">
          <strong>Note on savings and outcomes:</strong> SGT does not make advance guarantees of specific fuel savings or emission reductions. Outcomes depend on asset type, operating conditions, fuel quality, and operator practices. GreenVision data provides verified performance measurement once deployed. All figures are illustrative; actual results are specific to each deployment.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- POST-OWNERSHIP AMC -->
<section class="amc-section">
  <div class="container">
    <div class="reveal">
      <span class="section-label">Post-Ownership</span>
      <h2 class="section-title">Ownership doesn't mean<br><span class="brand">you're on your own.</span></h2>
    </div>
    <div class="amc-layout">
      <div class="amc-items reveal reveal-delay-1">
        <div class="amc-item">
          <div class="amc-item-icon">🔧</div>
          <div>
            <div class="amc-item-title">Annual Maintenance Contract (AMC)</div>
            <div class="amc-item-desc">Scheduled preventive maintenance, calibration, cell health checks, and consumables replacement — keeping your system performing at its best year after year.</div>
          </div>
        </div>
        <div class="amc-item">
          <div class="amc-item-icon">📡</div>
          <div>
            <div class="amc-item-title">GreenVision Continued Monitoring</div>
            <div class="amc-item-desc">Ongoing access to your digital twin, performance dashboard, and ESG reporting through GreenVision — as a SaaS subscription after DaaS concludes.</div>
          </div>
        </div>
        <div class="amc-item">
          <div class="amc-item-icon">🚀</div>
          <div>
            <div class="amc-item-title">Technology Upgrade Pathway</div>
            <div class="amc-item-desc">As SGT's R&D delivers improved systems, existing customers get first access to upgrades — extending performance gains without starting over.</div>
          </div>
        </div>
        <div class="amc-item">
          <div class="amc-item-icon">🌱</div>
          <div>
            <div class="amc-item-title">Deeper Decarbonisation Advisory</div>
            <div class="amc-item-desc">GreenMentor consulting available for regulatory navigation, carbon credit documentation, and identifying the next wave of decarbonisation opportunities for your operations.</div>
          </div>
        </div>
      </div>
      <div class="amc-right-text reveal reveal-delay-2">
        <p>The end of a DaaS schedule is not the end of the relationship. It is the moment the customer transitions from acquiring technology to fully owning it — with SGT remaining as the expert partner who continues to deliver value.</p>
        <p>Under the AMC, SGT takes responsibility for the ongoing health of the installed system. This is not incidental — <strong>a well-maintained HHO system continues to improve combustion efficiency over its operating life, and SGT's data gives us the insight to keep optimising.</strong></p>
        <p>For customers operating multiple assets or sites, the DaaS-to-AMC model creates a compounding effect: each deployment adds to the data pool, improving recommendations for the next installation. <strong>The longer the relationship, the better the outcomes.</strong></p>
      </div>
    </div>
  </div>
</section>

<!-- GREENVISION -->
<section class="gv-section">
  <div class="container">
    <div class="gv-layout">
      <div class="reveal">
        <span class="section-label">Powered by GreenVision</span>
        <h2 class="section-title">Your data.<br>Your proof.</h2>
        <p class="section-sub">GreenVision is the intelligence layer that transforms DaaS from a commercial arrangement into a verified decarbonisation programme. Every tonne of CO₂ reduced is measured, time-stamped, and reportable.</p>
        <div class="gv-items" style="margin-top: 2rem;">
          <div class="gv-item">
            <div class="gv-item-dot"></div>
            <div>
              <div class="gv-item-title">Real-time fuel & emission monitoring</div>
              <div class="gv-item-desc">Continuous data from every connected asset — fuel consumed, fuel saved, load profile, emissions, uptime.</div>
            </div>
          </div>
          <div class="gv-item">
            <div class="gv-item-dot"></div>
            <div>
              <div class="gv-item-title">Automated ESG reports</div>
              <div class="gv-item-desc">Monthly reports formatted for BRSR, CBAM, IMO, and board-level sustainability disclosure — generated automatically from verified data.</div>
            </div>
          </div>
          <div class="gv-item">
            <div class="gv-item-dot"></div>
            <div>
              <div class="gv-item-title">Predictive maintenance alerts</div>
              <div class="gv-item-desc">GreenVision flags performance anomalies before they become failures — reducing downtime and protecting your investment.</div>
            </div>
          </div>
          <div class="gv-item">
            <div class="gv-item-dot"></div>
            <div>
              <div class="gv-item-title">Carbon credit documentation</div>
              <div class="gv-item-desc">Verified tCO₂e data from GreenVision supports carbon credit applications — turning your decarbonisation into a potential revenue stream.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="gv-metrics reveal reveal-delay-2">
        <div class="gv-metric">
          <div class="gv-metric-val">Real-time</div>
          <div class="gv-metric-label">Data collection</div>
        </div>
        <div class="gv-metric">
          <div class="gv-metric-val">Verified</div>
          <div class="gv-metric-label">tCO₂e reporting</div>
        </div>
        <div class="gv-metric">
          <div class="gv-metric-val">BRSR</div>
          <div class="gv-metric-label">ESG aligned</div>
        </div>
        <div class="gv-metric">
          <div class="gv-metric-val">IMO</div>
          <div class="gv-metric-label">Marine compliance</div>
        </div>
        <div class="gv-metric">
          <div class="gv-metric-val">CBAM</div>
          <div class="gv-metric-label">Export ready</div>
        </div>
        <div class="gv-metric">
          <div class="gv-metric-val">Digital</div>
          <div class="gv-metric-label">Twin per asset</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <div class="cta-inner">
    <span class="section-label">Start the Conversation</span>
    <h2 class="cta-title">Bring your asset data.<br>We'll show you what's possible.</h2>
    <p class="cta-sub">Share details of your assets, fuel consumption, and sector — and SGT will assess whether DaaS is the right fit for you, and what a programme structure could look like.</p>
    <div class="cta-btns">
      <a href="/contact" class="btn-green">Talk to a DaaS Specialist →</a>
      </div>
      </div>
      </section>
      
      <!-- FOOTER -->
      `;
      // <a href="#" class="btn-outline">Explore Our Technology</a>

export default function DaaSPage() {
  const stylesRef = useRef(false);

  // Inject scoped CSS
  useEffect(() => {
    if (stylesRef.current) return;
    const style = document.createElement("style");
    style.setAttribute("data-page", "DaaSPage");
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
      const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    } catch (e) {
      console.error("Page script error:", e);
    }
  }, []);

  return (
    <div className="sgt-daas" dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
  );
}