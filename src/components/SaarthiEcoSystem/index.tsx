// "use client";
// import React from 'react';
// import Link from 'next/link';
// // Assuming 'lucide-react' is available for icons
// import { ClipboardList, FlaskConical, Gauge, CheckCircle, Smartphone, MapPin, DollarSign, Users, Factory, Ship, Clock, BarChart3, Database } from 'lucide-react';

// // Define the colors used across the page
// const BRAND_COLOR = "var(--brand, #33A04A)";
// const ACCENT_COLOR = "var(--accent, #98C948)";

// // Helper component for the three pillars section (Sections 3, 4, 5)
// interface PillarProps {
//     icon: React.ReactNode;
//     subtitle: string;
//     intro: string;
//     details: { heading: string; items: string[] }[];
//     highlight: string;
//     cta: string;
//     ctaHref: string;
//     bgColor: string;
// }

// const PillarCard: React.FC<PillarProps> = ({ icon, subtitle, intro, details, highlight, cta, ctaHref, bgColor }) => (
//     <div className={`p-8 md:p-12 rounded-2xl shadow-xl transition-all duration-500 bg-white dark:bg-slate-800 border-t-8 ${bgColor}`}>
//         <div className="flex items-center space-x-4 mb-6">
//             <div className={`p-3 rounded-full ${bgColor.replace('border-t-8', 'bg').replace('border-t-', 'bg-')} bg-opacity-10 text-4xl`}>
//                 {icon}
//             </div>
//             <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white">
//                 {subtitle}
//             </h3>
//         </div>

//         <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
//             {intro}
//         </p>

//         {/* Feature List */}
//         <div className="space-y-8">
//             {details.map((section, index) => (
//                 <div key={index}>
//                     <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center">
//                         <CheckCircle className="w-4 h-4 mr-2 text-current" style={{ color: BRAND_COLOR }} />
//                         {section.heading}
//                     </h4>
//                     <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 pl-6 list-disc">
//                         {section.items.map((item, i) => (
//                             <li key={i}>{item}</li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>

//         {/* Highlight Block */}
//         <div className="mt-10 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50">
//             <p className="font-semibold text-slate-700 dark:text-slate-200 italic">
//                 {highlight}
//             </p>
//         </div>

//         {/* CTA */}
//         <div className="mt-8">
//             <Link
//                 href={ctaHref}
//                 className="inline-flex items-center text-lg font-bold transition-colors group"
//                 style={{ color: BRAND_COLOR }}
//             >
//                 {cta}
//                 <span className="ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1">
//                     →
//                 </span>
//             </Link>
//         </div>
//     </div>
// );


// const SaarthiEcosystemPage = () => {
    
//     // --- Section 3 Data: GreenMentor ---
//     const mentorData: PillarProps = {
//         icon: <ClipboardList className="w-8 h-8" />,
//         subtitle: "GreenMentor™ — Strategy, Advisory & Deployment Planning",
//         intro: "GreenMentor is your starting point for decarbonisation. It defines the roadmap, evaluates engines, designs the retrofit plan, and ensures a smooth deployment process supported by continuous customer success.",
//         details: [
//             {
//                 heading: "Decarbonisation Advisory",
//                 items: [
//                     "Engine & duty-cycle assessment",
//                     "Fuel/emission baseline study",
//                     "Transition planning & feasibility",
//                     "ESG alignment and carbon pathways",
//                 ],
//             },
//             {
//                 heading: "Deployment Planning",
//                 items: [
//                     "Solution design tailored to engine types",
//                     "Installation sequencing & site readiness",
//                     "Safety and compliance planning",
//                     "Integration with existing power systems",
//                 ],
//             },
//             {
//                 heading: "Business Case & ROI Modelling",
//                 items: [
//                     "Fuel savings forecasts",
//                     "CO₂ reduction projections",
//                     "DaaS vs CapEx comparison",
//                     "GreenVision data model setup",
//                 ],
//             },
//             {
//                 heading: "Customer Success",
//                 items: [
//                     "Post-deployment tracking",
//                     "Training & onboarding",
//                     "Continuous improvement reviews",
//                 ],
//             },
//         ],
//         highlight: "GreenMentor ensures that every retrofit is engineered for your engines, operational conditions and financial goals.",
//         cta: "Visit GreenMentor",
//         ctaHref: "/greenmentor",
//         bgColor: "border-t-[var(--brand,#33A04A)]",
//     };

//     // --- Section 4 Data: GreenLabs ---
//     const labsData: PillarProps = {
//         icon: <FlaskConical className="w-8 h-8" />,
//         subtitle: "GreenLabs™ — Hydrogen Retrofit Systems & DaaS Delivery",
//         intro: "GreenLabs is where innovation becomes reality. This pillar develops, engineers, manufactures and delivers Saarthi’s hydrogen-diesel hybrid retrofit systems for all types of diesel engines.",
//         details: [
//             {
//                 heading: "Retrofit Hardware Engineering",
//                 items: [
//                     "Engine-specific retrofit kits",
//                     "Hydrogen generation units",
//                     "Injection & safety control systems",
//                     "Electronics, firmware & calibration",
//                 ],
//             },
//             {
//                 heading: "Manufacturing & Quality",
//                 items: [
//                     "Certified production processes",
//                     "Component testing & validation",
//                     "Global standards compliance (CE, UL, ROHS, EMC, ISO 9001)",
//                     "Patent-backed design features (India + Australia)",
//                 ],
//             },
//             {
//                 heading: "Delivery Models",
//                 items: [
//                     "CapEx Purchase: Own the system with full installation & warranty.",
//                     "DaaS - Decarbonisation-as-a-Service: Zero CapEx, savings-linked monthly fee.",
//                     "GreenLabs handles all installation, maintenance, spares & field support.",
//                 ],
//             },
//             {
//                 heading: "Technical Support & Lifecycle Management",
//                 items: [
//                     "Installation & commissioning",
//                     "Field engineering & troubleshooting",
//                     "Warranty, spares & upgrades",
//                     "Periodic performance validation",
//                 ],
//             },
//         ],
//         highlight: "GreenLabs brings world-class engineering to existing diesel engines — transforming them with hydrogen without replacing the asset.",
//         cta: "Explore GreenLabs",
//         ctaHref: "/greenlabs",
//         bgColor: "border-t-orange-500",
//     };
    
//     // --- Section 5 Data: GreenVision ---
//     const visionData: PillarProps = {
//         icon: <Gauge className="w-8 h-8" />,
//         subtitle: "GreenVision™ — Real-Time Fuel, Emission & Carbon Intelligence",
//         intro: "GreenVision is the independent data backbone of Saarthi. It captures, verifies and visualises all performance metrics, ensuring that fuel savings and CO₂ reductions are auditable and transparent.",
//         details: [
//             {
//                 heading: "Real-Time Telemetry",
//                 items: [
//                     "Fuel consumption",
//                     "Engine load & run hours",
//                     "Hydrogen system activity",
//                     "Temperature & safety parameters",
//                 ],
//             },
//             {
//                 heading: "Emission & Carbon Analytics",
//                 items: [
//                     "CO₂ reduction calculations",
//                     "Emission impact based on duty cycle",
//                     "Per-asset, per-site, and fleet-wide dashboards",
//                 ],
//             },
//             {
//                 heading: "Performance Measurement & Verification",
//                 items: [
//                     "Before-and-after comparisons",
//                     "Savings attribution models",
//                     "Alerts for anomalies or underperformance",
//                     "Automated reporting",
//                 ],
//             },
//             {
//                 heading: "ESG & Compliance Integrations",
//                 items: [
//                     "Exportable reports",
//                     "Carbon accounting",
//                     "Audit-ready logs",
//                     "API support for enterprise systems",
//                 ],
//             },
//         ],
//         highlight: "GreenVision ensures every claim is backed by verifiable, tamper-proof data — the foundation of trust in decarbonisation.",
//         cta: "Visit GreenVision",
//         ctaHref: "/greenvision",
//         bgColor: "border-t-blue-500",
//     };

//     // --- Section 6 Data: Integrated Decarbonisation Loop ---
//     const loopSteps = [
//         {
//             icon: <ClipboardList className="w-6 h-6" style={{ color: BRAND_COLOR }} />,
//             title: "1. GreenMentor — Plan & Design",
//             description: "Assessment, strategy, feasibility, deployment planning.",
//             bgColor: "bg-[var(--brand,#33A04A)]",
//         },
//         {
//             icon: <FlaskConical className="w-6 h-6" style={{ color: "rgb(249 115 22)" }} />, // Orange-500
//             title: "2. GreenLabs — Build & Deliver",
//             description: "Product engineering, installation, field support, CapEx & DaaS models.",
//             bgColor: "bg-orange-500",
//         },
//         {
//             icon: <Gauge className="w-6 h-6" style={{ color: "rgb(59 130 246)" }} />, // Blue-500
//             title: "3. GreenVision — Measure & Verify",
//             description: "Telemetry, savings verification, carbon reporting, ESG analytics.",
//             bgColor: "bg-blue-500",
//         },
//     ];

//     const resultChecks = [
//         "Fuel savings",
//         "Emission reductions",
//         "CO₂ impact",
//         "Operational improvements",
//         "Verified & auditable data",
//     ];


//     return (
//         <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            
//             {/* =========================================================
//                SECTION 1 — HERO BANNER 
//             ========================================================= */}
//             <section id="hero-banner" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" style={{ backgroundColor: BRAND_COLOR }}>
//                 <div className="absolute inset-0 bg-cover opacity-10" style={{ backgroundImage: "url(https://placehold.co/1920x800/ffffff/000000?text=Saarthi+Ecosystem+Architecture)" }}></div>
                
//                 {/* Abstract Visual (Simulating the connected pillars) */}
//                 <div className="absolute inset-0 z-0 opacity-10">
//                     <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                         <defs>
//                             <filter id="glow">
//                                 <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                                 <feMerge>
//                                     <feMergeNode in="coloredBlur"/>
//                                     <feMergeNode in="SourceGraphic"/>
//                                 </feMerge>
//                             </filter>
//                         </defs>
//                         {/* Connecting Lines */}
//                         <path d="M 20 40 Q 50 10, 80 40" stroke="white" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDuration: '4s' }} />
//                         <path d="M 80 40 Q 90 70, 50 80" stroke="white" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
//                         <path d="M 50 80 Q 10 70, 20 40" stroke="white" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />

//                         {/* Nodes */}
//                         <circle cx="20" cy="40" r="2" fill="white" filter="url(#glow)"/>
//                         <circle cx="80" cy="40" r="2" fill="white" filter="url(#glow)"/>
//                         <circle cx="50" cy="80" r="2" fill="white" filter="url(#glow)"/>
//                     </svg>
//                 </div>

//                 <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center text-white">
//                     <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
//                         The Saarthi Ecosystem
//                     </h1>
//                     <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto">
//                         Three integrated pillars — strategy, hardware and intelligence — working together to deliver engineered decarbonisation with verified impact.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-4">
//                         <Link href="/greenmentor" className="px-6 py-3 font-semibold rounded-full bg-white text-slate-900 shadow-md hover:bg-slate-100 transition-colors">
//                             Explore GreenMentor
//                         </Link>
//                         <Link href="/greenlabs" className="px-6 py-3 font-semibold rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition-colors">
//                             Explore GreenLabs
//                         </Link>
//                         <Link href="/greenvision" className="px-6 py-3 font-semibold rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition-colors">
//                             Explore GreenVision
//                         </Link>
//                     </div>
//                 </div>
//             </section>


//             {/* =========================================================
//                SECTION 2 — OVERVIEW OF THE ECOSYSTEM 
//             ========================================================= */}
//             <section id="ecosystem-overview" className="py-20 md:py-28 lg:py-36 dark:bg-slate-950">
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <div className="text-center max-w-3xl mx-auto mb-16">
//                         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
//                             Decarbonisation That Works as One System
//                         </h2>
//                         <p className="text-lg text-slate-600 dark:text-slate-300">
//                             Saarthi integrates strategy, engineering and data into a single ecosystem. Each pillar plays a distinct role, yet all three work together to deliver measurable fuel savings, emission reduction, and operational improvement across fleets, DG sets, marine engines and heavy equipment.
//                         </p>
//                     </div>

//                     {/* Architectural Graphic (Text-based, mimicking a flow) */}
//                     <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 p-6 md:p-10 rounded-xl bg-slate-100 dark:bg-slate-800 border-l-4 border-l-[var(--brand,#33A04A)]">
//                         <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full">
//                             <FlowStep title="GreenMentor" icon={<ClipboardList className="w-5 h-5 text-current" />} color={BRAND_COLOR} />
//                             <FlowArrow />
//                             <FlowStep title="GreenLabs" icon={<FlaskConical className="w-5 h-5 text-current" />} color="rgb(249 115 22)" />
//                             <FlowArrow />
//                             <FlowStep title="GreenVision" icon={<Gauge className="w-5 h-5 text-current" />} color="rgb(59 130 246)" />
//                         </div>
//                         <div className="mt-4 md:mt-0 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-300 dark:border-slate-700">
//                             <FlowStep title="Verified CO₂ Reduction" icon={<CheckCircle className="w-5 h-5 text-current" />} color={ACCENT_COLOR} isResult={true} />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* =========================================================
//                SECTIONS 3, 4, 5 — PILLAR DETAILS 
//             ========================================================= */}
//             <section id="pillars-detail" className="py-20 md:py-28 lg:py-36 bg-gray-50 dark:bg-slate-900">
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <div className="space-y-24">
//                         {/* PILLAR 1: GREENMENTOR */}
//                         <PillarCard {...mentorData} bgColor="border-t-[var(--brand,#33A04A)]" icon={<ClipboardList className="w-8 h-8" style={{ color: BRAND_COLOR }} />} />
                        
//                         {/* PILLAR 2: GREENLABS */}
//                         <PillarCard {...labsData} bgColor="border-t-orange-500" icon={<FlaskConical className="w-8 h-8 text-orange-500" />} />

//                         {/* PILLAR 3: GREENVISION */}
//                         <PillarCard {...visionData} bgColor="border-t-blue-500" icon={<Gauge className="w-8 h-8 text-blue-500" />} />
//                     </div>
//                 </div>
//             </section>

//             {/* =========================================================
//                SECTION 6 — HOW THE THREE PILLARS WORK TOGETHER 
//             ========================================================= */}
//             <section id="integrated-loop" className="py-20 md:py-28 lg:py-36 dark:bg-slate-950">
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <div className="text-center max-w-3xl mx-auto mb-16">
//                         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
//                             The Integrated Decarbonisation Loop
//                         </h2>
//                         <p className="text-lg text-slate-600 dark:text-slate-300">
//                             Each pillar performs a distinct role, but Saarthi’s real strength comes from how these functions integrate into one seamless system.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-8">
//                         {/* Three Steps */}
//                         <div className="lg:col-span-3 space-y-8">
//                             {loopSteps.map((step, index) => (
//                                 <div key={index} className="flex items-start space-x-4 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800">
//                                     <div className={`flex-shrink-0 p-3 rounded-lg ${step.bgColor} bg-opacity-10 text-white`}>
//                                         {step.icon}
//                                     </div>
//                                     <div>
//                                         <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1" style={{ color: step.bgColor }}>
//                                             {step.title}
//                                         </h3>
//                                         <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
                        
//                         {/* Connector Arrow (Desktop only) */}
//                         <div className="hidden lg:flex lg:col-span-1 justify-center">
//                              {/* Placeholder for the diagram/image of the loop */}
//                              <div className="text-center text-slate-500">
                                
//                             </div>
//                         </div>

//                         {/* Result Block */}
//                         <div className="lg:col-span-1 p-8 rounded-xl shadow-2xl" style={{ backgroundColor: ACCENT_COLOR }}>
//                             <h3 className="text-2xl font-bold text-slate-900 mb-4">
//                                 The Result
//                             </h3>
//                             <ul className="space-y-3 text-slate-800">
//                                 {resultChecks.map((check, index) => (
//                                     <li key={index} className="flex items-center font-medium">
//                                         <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
//                                         {check}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             {/* =========================================================
//                SECTION 7 — CTA SECTION 
//             ========================================================= */}
//             <section id="ecosystem-cta" className="py-16 md:py-24" style={{ backgroundColor: BRAND_COLOR }}>
//                 <div className="container mx-auto px-4 max-w-7xl text-center text-white">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                         Start Your Decarbonisation Journey with Saarthi
//                     </h2>
//                     <p className="text-xl opacity-90 mb-10">
//                         Choose the pillar you want to explore next.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-4">
//                         <Link href="/greenmentor" className="px-6 py-3 font-semibold rounded-full bg-white text-slate-900 shadow-md hover:bg-slate-100 transition-colors">
//                             Explore GreenMentor
//                         </Link>
//                         <Link href="/greenlabs" className="px-6 py-3 font-semibold rounded-full bg-white text-slate-900 shadow-md hover:bg-slate-100 transition-colors">
//                             Explore GreenLabs
//                         </Link>
//                         <Link href="/greenvision" className="px-6 py-3 font-semibold rounded-full bg-white text-slate-900 shadow-md hover:bg-slate-100 transition-colors">
//                             Explore GreenVision
//                         </Link>
//                         <Link href="/contact" className="px-6 py-3 font-semibold rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition-colors">
//                             Contact Us
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//         </main>
//     );
// };

// // Helper components for Section 2 Flow
// const FlowStep: React.FC<{ title: string; icon: React.ReactNode; color: string; isResult?: boolean }> = ({ title, icon, color, isResult = false }) => (
//     <div className={`flex items-center space-x-2 p-2 rounded-lg ${isResult ? 'border-2 border-slate-900 dark:border-white' : ''}`}>
//         <div className="p-1 rounded-full text-white" style={{ backgroundColor: color }}>
//             {icon}
//         </div>
//         <span className="font-semibold text-sm md:text-base text-slate-900 dark:text-white">{title}</span>
//     </div>
// );

// const FlowArrow: React.FC = () => (
//     <svg className="hidden md:block w-8 h-4 text-slate-500 dark:text-slate-400" viewBox="0 0 10 10">
//         <path d="M 0 5 L 8 5 M 8 5 L 6 3 M 8 5 L 6 7" stroke="currentColor" strokeWidth="1.5" fill="none" />
//     </svg>
// );


// export default SaarthiEcosystemPage;

// "use client";
// import React from 'react';
// import Link from 'next/link';
// // Assuming 'lucide-react' is available for icons
// import { ClipboardList, FlaskConical, Gauge, CheckCircle, Smartphone, MapPin, DollarSign, Users, Factory, Ship, Clock, BarChart3, Database } from 'lucide-react';

// // Define the colors used across the page
// const BRAND_COLOR = "var(--brand, #33A04A)";
// const ACCENT_COLOR = "var(--accent, #98C948)";

// // Helper component for the three pillars section (Sections 3, 4, 5)
// interface PillarProps {
//     icon: React.ReactNode;
//     subtitle: string;
//     intro: string;
//     details: { heading: string; items: string[] }[];
//     highlight: string;
//     cta: string;
//     ctaHref: string;
//     bgColor: string;
// }

// const PillarCard: React.FC<PillarProps> = ({ icon, subtitle, intro, details, highlight, cta, ctaHref, bgColor }) => (
//     <div className={`p-8 md:p-12 rounded-2xl shadow-xl transition-all duration-500 bg-white dark:bg-slate-800 border-t-8 ${bgColor}`}>
//         <div className="flex items-center space-x-4 mb-6">
//             <div className={`p-3 rounded-full ${bgColor.replace('border-t-8', 'bg').replace('border-t-', 'bg-')} bg-opacity-10 text-4xl`}>
//                 {icon}
//             </div>
//             <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white">
//                 {subtitle}
//             </h3>
//         </div>

//         <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
//             {intro}
//         </p>

//         {/* Feature List */}
//         <div className="space-y-8">
//             {details.map((section, index) => (
//                 <div key={index}>
//                     <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center">
//                         <CheckCircle className="w-4 h-4 mr-2 text-current" style={{ color: BRAND_COLOR }} />
//                         {section.heading}
//                     </h4>
//                     <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 pl-6 list-disc">
//                         {section.items.map((item, i) => (
//                             <li key={i}>{item}</li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>

//         {/* Highlight Block */}
//         <div className="mt-10 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50">
//             <p className="font-semibold text-slate-700 dark:text-slate-200 italic">
//                 {highlight}
//             </p>
//         </div>

//         {/* CTA */}
//         <div className="mt-8">
//             <Link
//                 href={ctaHref}
//                 className="inline-flex items-center text-lg font-bold transition-colors group"
//                 style={{ color: BRAND_COLOR }}
//             >
//                 {cta}
//                 <span className="ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1">
//                     →
//                 </span>
//             </Link>
//         </div>
//     </div>
// );


// // This component is now exported as the default page component
// const SaarthiEcosystemPage = () => {
    
//     // --- Section 3 Data: GreenMentor ---
//     const mentorData: PillarProps = {
//         icon: <ClipboardList className="w-8 h-8" />,
//         subtitle: "GreenMentor™ — Strategy, Advisory & Deployment Planning",
//         intro: "GreenMentor is your starting point for decarbonisation. It defines the roadmap, evaluates engines, designs the retrofit plan, and ensures a smooth deployment process supported by continuous customer success.",
//         details: [
//             {
//                 heading: "Decarbonisation Advisory",
//                 items: [
//                     "Engine & duty-cycle assessment",
//                     "Fuel/emission baseline study",
//                     "Transition planning & feasibility",
//                     "ESG alignment and carbon pathways",
//                 ],
//             },
//             {
//                 heading: "Deployment Planning",
//                 items: [
//                     "Solution design tailored to engine types",
//                     "Installation sequencing & site readiness",
//                     "Safety and compliance planning",
//                     "Integration with existing power systems",
//                 ],
//             },
//             {
//                 heading: "Business Case & ROI Modelling",
//                 items: [
//                     "Fuel savings forecasts",
//                     "CO₂ reduction projections",
//                     "DaaS vs CapEx comparison",
//                     "GreenVision data model setup",
//                 ],
//             },
//             {
//                 heading: "Customer Success",
//                 items: [
//                     "Post-deployment tracking",
//                     "Training & onboarding",
//                     "Continuous improvement reviews",
//                 ],
//             },
//         ],
//         highlight: "GreenMentor ensures that every retrofit is engineered for your engines, operational conditions and financial goals.",
//         cta: "Visit GreenMentor",
//         ctaHref: "/ecosystem/greenmentor", // Updated path to match menu structure
//         bgColor: "border-t-[var(--brand,#33A04A)]",
//     };

//     // --- Section 4 Data: GreenLabs ---
//     const labsData: PillarProps = {
//         icon: <FlaskConical className="w-8 h-8" />,
//         subtitle: "GreenLabs™ — Hydrogen Retrofit Systems & DaaS Delivery",
//         intro: "GreenLabs is where innovation becomes reality. This pillar develops, engineers, manufactures and delivers Saarthi’s hydrogen-diesel hybrid retrofit systems for all types of diesel engines.",
//         details: [
//             {
//                 heading: "Retrofit Hardware Engineering",
//                 items: [
//                     "Engine-specific retrofit kits",
//                     "Hydrogen generation units",
//                     "Injection & safety control systems",
//                     "Electronics, firmware & calibration",
//                 ],
//             },
//             {
//                 heading: "Manufacturing & Quality",
//                 items: [
//                     "Certified production processes",
//                     "Component testing & validation",
//                     "Global standards compliance (CE, UL, ROHS, EMC, ISO 9001)",
//                     "Patent-backed design features (India + Australia)",
//                 ],
//             },
//             {
//                 heading: "Delivery Models",
//                 items: [
//                     "CapEx Purchase: Own the system with full installation & warranty.",
//                     "DaaS - Decarbonisation-as-a-Service: Zero CapEx, savings-linked monthly fee.",
//                     "GreenLabs handles all installation, maintenance, spares & field support.",
//                 ],
//             },
//             {
//                 heading: "Technical Support & Lifecycle Management",
//                 items: [
//                     "Installation & commissioning",
//                     "Field engineering & troubleshooting",
//                     "Warranty, spares & upgrades",
//                     "Periodic performance validation",
//                 ],
//             },
//         ],
//         highlight: "GreenLabs brings world-class engineering to existing diesel engines — transforming them with hydrogen without replacing the asset.",
//         cta: "Explore GreenLabs",
//         ctaHref: "/ecosystem/greenlabs", // Updated path to match menu structure
//         bgColor: "border-t-orange-500",
//     };
    
//     // --- Section 5 Data: GreenVision ---
//     const visionData: PillarProps = {
//         icon: <Gauge className="w-8 h-8" />,
//         subtitle: "GreenVision™ — Real-Time Fuel, Emission & Carbon Intelligence",
//         intro: "GreenVision is the independent data backbone of Saarthi. It captures, verifies and visualises all performance metrics, ensuring that fuel savings and CO₂ reductions are auditable and transparent.",
//         details: [
//             {
//                 heading: "Real-Time Telemetry",
//                 items: [
//                     "Fuel consumption",
//                     "Engine load & run hours",
//                     "Hydrogen system activity",
//                     "Temperature & safety parameters",
//                 ],
//             },
//             {
//                 heading: "Emission & Carbon Analytics",
//                 items: [
//                     "CO₂ reduction calculations",
//                     "Emission impact based on duty cycle",
//                     "Per-asset, per-site, and fleet-wide dashboards",
//                 ],
//             },
//             {
//                 heading: "Performance Measurement & Verification",
//                 items: [
//                     "Before-and-after comparisons",
//                     "Savings attribution models",
//                     "Alerts for anomalies or underperformance",
//                     "Automated reporting",
//                 ],
//             },
//             {
//                 heading: "ESG & Compliance Integrations",
//                 items: [
//                     "Exportable reports",
//                     "Carbon accounting",
//                     "Audit-ready logs",
//                     "API support for enterprise systems",
//                 ],
//             },
//         ],
//         highlight: "GreenVision ensures every claim is backed by verifiable, tamper-proof data — the foundation of trust in decarbonisation.",
//         cta: "Visit GreenVision",
//         ctaHref: "/ecosystem/greenvision", // Updated path to match menu structure
//         bgColor: "border-t-blue-500",
//     };

//     // --- Section 6 Data: Integrated Decarbonisation Loop ---
//     const loopSteps = [
//         {
//             icon: <ClipboardList className="w-6 h-6" style={{ color: BRAND_COLOR }} />,
//             title: "1. GreenMentor — Plan & Design",
//             description: "Assessment, strategy, feasibility, deployment planning.",
//             bgColor: "bg-[var(--brand,#33A04A)]",
//         },
//         {
//             icon: <FlaskConical className="w-6 h-6" style={{ color: "rgb(249 115 22)" }} />, // Orange-500
//             title: "2. GreenLabs — Build & Deliver",
//             description: "Product engineering, installation, field support, CapEx & DaaS models.",
//             bgColor: "bg-orange-500",
//         },
//         {
//             icon: <Gauge className="w-6 h-6" style={{ color: "rgb(59 130 246)" }} />, // Blue-500
//             title: "3. GreenVision — Measure & Verify",
//             description: "Telemetry, savings verification, carbon reporting, ESG analytics.",
//             bgColor: "bg-blue-500",
//         },
//     ];

//     const resultChecks = [
//         "Fuel savings",
//         "Emission reductions",
//         "CO₂ impact",
//         "Operational improvements",
//         "Verified & auditable data",
//     ];


//     return (
//         <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            
//             {/* =========================================================
//                SECTION 1 — HERO BANNER 
//             ========================================================= */}
//             <section id="hero-banner" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" style={{ backgroundColor: BRAND_COLOR }}>
//                 <div className="absolute inset-0 bg-cover opacity-10" style={{ backgroundImage: "url(https://placehold.co/1920x800/ffffff/000000?text=Saarthi+Ecosystem+Architecture)" }}></div>
                
//                 {/* Abstract Visual (Simulating the connected pillars) */}
//                 <div className="absolute inset-0 z-0 opacity-10">
//                     <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                         <defs>
//                             <filter id="glow">
//                                 <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                                 <feMerge>
//                                     <feMergeNode in="coloredBlur"/>
//                                     <feMergeNode in="SourceGraphic"/>
//                                 </feMerge>
//                             </filter>
//                         </defs>
//                         {/* Connecting Lines */}
//                         <path d="M 20 40 Q 50 10, 80 40" stroke="white" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDuration: '4s' }} />
//                         <path d="M 80 40 Q 90 70, 50 80" stroke="white" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
//                         <path d="M 50 80 Q 10 70, 20 40" stroke="white" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />

//                         {/* Nodes */}
//                         <circle cx="20" cy="40" r="2" fill="white" filter="url(#glow)"/>
//                         <circle cx="80" cy="40" r="2" fill="white" filter="url(#glow)"/>
//                         <circle cx="50" cy="80" r="2" fill="white" filter="url(#glow)"/>
//                     </svg>
//                 </div>

//                 <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center text-white">
//                     <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
//                         The Saarthi Ecosystem
//                     </h1>
//                     <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto">
//                         Three integrated pillars — strategy, hardware and intelligence — working together to deliver engineered decarbonisation with verified impact.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-4">
//                         <Link href="/ecosystem/greenmentor" className="px-6 py-3 font-semibold rounded-full bg-white text-slate-900 shadow-md hover:bg-slate-100 transition-colors">
//                             Explore GreenMentor
//                         </Link>
//                         <Link href="/ecosystem/greenlabs" className="px-6 py-3 font-semibold rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition-colors">
//                             Explore GreenLabs
//                         </Link>
//                         <Link href="/ecosystem/greenvision" className="px-6 py-3 font-semibold rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition-colors">
//                             Explore GreenVision
//                         </Link>
//                     </div>
//                 </div>
//             </section>


//             {/* =========================================================
//                SECTION 2 — OVERVIEW OF THE ECOSYSTEM 
//             ========================================================= */}
//             <section id="ecosystem-overview" className="py-20 md:py-28 lg:py-36 dark:bg-slate-950">
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <div className="text-center max-w-3xl mx-auto mb-16">
//                         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
//                             Decarbonisation That Works as One System
//                         </h2>
//                         <p className="text-lg text-slate-600 dark:text-slate-300">
//                             Saarthi integrates strategy, engineering and data into a single ecosystem. Each pillar plays a distinct role, yet all three work together to deliver measurable fuel savings, emission reduction, and operational improvement across fleets, DG sets, marine engines and heavy equipment.
//                         </p>
//                     </div>

//                     {/* Architectural Graphic (Text-based, mimicking a flow) */}
//                     <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 p-6 md:p-10 rounded-xl bg-slate-100 dark:bg-slate-800 border-l-4 border-l-[var(--brand,#33A04A)]">
//                         <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full">
//                             <FlowStep title="GreenMentor" icon={<ClipboardList className="w-5 h-5 text-current" />} color={BRAND_COLOR} />
//                             <FlowArrow />
//                             <FlowStep title="GreenLabs" icon={<FlaskConical className="w-5 h-5 text-current" />} color="rgb(249 115 22)" />
//                             <FlowArrow />
//                             <FlowStep title="GreenVision" icon={<Gauge className="w-5 h-5 text-current" />} color="rgb(59 130 246)" />
//                         </div>
//                         <div className="mt-4 md:mt-0 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-300 dark:border-slate-700">
//                             <FlowStep title="Verified CO₂ Reduction" icon={<CheckCircle className="w-5 h-5 text-current" />} color={ACCENT_COLOR} isResult={true} />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* =========================================================
//                SECTIONS 3, 4, 5 — PILLAR DETAILS 
//             ========================================================= */}
//             <section id="pillars-detail" className="py-20 md:py-28 lg:py-36 bg-gray-50 dark:bg-slate-900">
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <div className="space-y-24">
//                         {/* PILLAR 1: GREENMENTOR */}
//                         <PillarCard {...mentorData} bgColor="border-t-[var(--brand,#33A04A)]" icon={<ClipboardList className="w-8 h-8" style={{ color: BRAND_COLOR }} />} />
                        
//                         {/* PILLAR 2: GREENLABS */}
//                         <PillarCard {...labsData} bgColor="border-t-orange-500" icon={<FlaskConical className="w-8 h-8 text-orange-500" />} />

//                         {/* PILLAR 3: GREENVISION */}
//                         <PillarCard {...visionData} bgColor="border-t-blue-500" icon={<Gauge className="w-8 h-8 text-blue-500" />} />
//                     </div>
//                 </div>
//             </section>

//             {/* =========================================================
//                SECTION 6 — HOW THE THREE PILLARS WORK TOGETHER 
//             ========================================================= */}
//             <section id="integrated-loop" className="py-20 md:py-28 lg:py-36 dark:bg-slate-950">
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <div className="text-center max-w-3xl mx-auto mb-16">
//                         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
//                             The Integrated Decarbonisation Loop
//                         </h2>
//                         <p className="text-lg text-slate-600 dark:text-slate-300">
//                             Each pillar performs a distinct role, but Saarthi’s real strength comes from how these functions integrate into one seamless system.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-8">
//                         {/* Three Steps */}
//                         <div className="lg:col-span-3 space-y-8">
//                             {loopSteps.map((step, index) => (
//                                 <div key={index} className="flex items-start space-x-4 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800">
//                                     <div className={`flex-shrink-0 p-3 rounded-lg ${step.bgColor} bg-opacity-10 text-white`}>
//                                         {step.icon}
//                                     </div>
//                                     <div>
//                                         <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1" style={{ color: step.bgColor }}>
//                                             {step.title}
//                                         </h3>
//                                         <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
                        
//                         {/* Connector Arrow (Desktop only) */}
//                         <div className="hidden lg:flex lg:col-span-1 justify-center">
//                              {/* Placeholder for the diagram/image of the loop */}
//                              <div className="text-center text-slate-500">
                                
//                             </div>
//                         </div>

//                         {/* Result Block */}
//                         <div className="lg:col-span-1 p-8 rounded-xl shadow-2xl" style={{ backgroundColor: ACCENT_COLOR }}>
//                             <h3 className="text-2xl font-bold text-slate-900 mb-4">
//                                 The Result
//                             </h3>
//                             <ul className="space-y-3 text-slate-800">
//                                 {resultChecks.map((check, index) => (
//                                     <li key={index} className="flex items-center font-medium">
//                                         <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
//                                         {check}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             {/* =========================================================
//                SECTION 7 — CTA SECTION 
//             ========================================================= */}
//             <section id="ecosystem-cta" className="py-16 md:py-24" style={{ backgroundColor: BRAND_COLOR }}>
//                 <div className="container mx-auto px-4 max-w-7xl text-center text-white">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                         Start Your Decarbonisation Journey with Saarthi
//                     </h2>
//                     <p className="text-xl opacity-90 mb-10">
//                         Choose the pillar you want to explore next.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-4">
//                         <Link href="/ecosystem/greenmentor" className="px-6 py-3 font-semibold rounded-full bg-white text-slate-900 shadow-md hover:bg-slate-100 transition-colors">
//                             Explore GreenMentor
//                         </Link>
//                         <Link href="/ecosystem/greenlabs" className="px-6 py-3 font-semibold rounded-full bg-white text-slate-900 shadow-md hover:bg-slate-100 transition-colors">
//                             Explore GreenLabs
//                         </Link>
//                         <Link href="/ecosystem/greenvision" className="px-6 py-3 font-semibold rounded-full bg-white text-slate-900 shadow-md hover:bg-slate-100 transition-colors">
//                             Explore GreenVision
//                         </Link>
//                         <Link href="/contact" className="px-6 py-3 font-semibold rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition-colors">
//                             Contact Us
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//         </main>
//     );
// };

// // Helper components for Section 2 Flow
// const FlowStep: React.FC<{ title: string; icon: React.ReactNode; color: string; isResult?: boolean }> = ({ title, icon, color, isResult = false }) => (
//     <div className={`flex items-center space-x-2 p-2 rounded-lg ${isResult ? 'border-2 border-slate-900 dark:border-white' : ''}`}>
//         <div className="p-1 rounded-full text-white" style={{ backgroundColor: color }}>
//             {icon}
//         </div>
//         <span className="font-semibold text-sm md:text-base text-slate-900 dark:text-white">{title}</span>
//     </div>
// );

// const FlowArrow: React.FC = () => (
//     <svg className="hidden md:block w-8 h-4 text-slate-500 dark:text-slate-400" viewBox="0 0 10 10">
//         <path d="M 0 5 L 8 5 M 8 5 L 6 3 M 8 5 L 6 7" stroke="currentColor" strokeWidth="1.5" fill="none" />
//     </svg>
// );


// export default SaarthiEcosystemPage;
"use client";
import React from 'react';
import Link from 'next/link';
// Removed: import { ... } from 'lucide-react';
// Icons are now defined as inline SVG components for self-contained operation.

// --- INLINE SVG ICON COMPONENTS (Replaces lucide-react) ---

const ClipboardList = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" />
        <path d="M12 15h4" />
        <path d="M8 11h.01" />
        <path d="M8 15h.01" />
    </svg>
);

const FlaskConical = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M10 2v7.31L4.37 14 6 18h12l1.63-4L14 9.31V2" />
        <path d="M14 2v7.31L19.63 14 18 18H6L4.37 14 10 9.31V2" style={{ stroke: 'none', fill: 'none' }} />
        <path d="M10 2v7.31L4.37 14 6 18h12l1.63-4L14 9.31V2" />
        <path d="M10 18h4" />
    </svg>
);

const Gauge = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M12 20V10" />
        <path d="M18.4 17.6a9 9 0 1 0-12.8 0" />
        <path d="M10 14h4" />
    </svg>
);

const CheckCircle = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-8.85" />
        <path d="m9 11 3 3L22 4" />
    </svg>
);

// Define the colors used across the page
const BRAND_COLOR = "var(--brand, #33A04A)";
const ACCENT_COLOR = "var(--accent, #98C948)";

// Helper component for the three pillars section (Sections 3, 4, 5)
interface PillarProps {
    icon: React.ReactNode;
    subtitle: string;
    intro: string;
    details: { heading: string; items: string[] }[];
    highlight: string;
    cta: string;
    ctaHref: string;
    bgColor: string;
}

const PillarCard: React.FC<PillarProps> = ({ icon, subtitle, intro, details, highlight, cta, ctaHref, bgColor }) => (
    <div className={`p-8 md:p-12 rounded-2xl shadow-xl transition-all duration-500 bg-white dark:bg-slate-800 border-t-8 ${bgColor}`}>
        <div className="flex items-center space-x-4 mb-6">
            <div className={`p-3 rounded-full ${bgColor.replace('border-t-8', 'bg').replace('border-t-', 'bg-')} bg-opacity-10 text-4xl`}>
                {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white">
                {subtitle}
            </h3>
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            {intro}
        </p>

        {/* Feature List */}
        <div className="space-y-8">
            {details.map((section, index) => (
                <div key={index}>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                        {/* Use CheckCircle SVG component */}
                        <CheckCircle className="w-4 h-4 mr-2 text-current" style={{ color: BRAND_COLOR }} />
                        {section.heading}
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 pl-6 list-disc">
                        {section.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        {/* Highlight Block */}
        <div className="mt-10 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50">
            <p className="font-semibold text-slate-700 dark:text-slate-200 italic">
                {highlight}
            </p>
        </div>

        {/* CTA */}
        <div className="mt-8">
            <Link
                href={ctaHref}
                className="inline-flex items-center text-lg font-bold transition-colors group"
                style={{ color: BRAND_COLOR }}
            >
                {cta}
                <span className="ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            </Link>
        </div>
    </div>
);


// This component is now exported as the default page component
const SaarthiEcosystemPage = () => {

    // --- Section 3 Data: GreenMentor ---
    const mentorData: PillarProps = {
        icon: <ClipboardList className="w-8 h-8" />,
        subtitle: "GreenMentor™ — Strategy, Advisory & Deployment Planning",
        intro: "GreenMentor is your starting point for decarbonisation. It defines the roadmap, evaluates engines, designs the retrofit plan, and ensures a smooth deployment process supported by continuous customer success.",
        details: [
            {
                heading: "Decarbonisation Advisory",
                items: [
                    "Engine & duty-cycle assessment",
                    "Fuel/emission baseline study",
                    "Transition planning & feasibility",
                    "ESG alignment and carbon pathways",
                ],
            },
            {
                heading: "Deployment Planning",
                items: [
                    "Solution design tailored to engine types",
                    "Installation sequencing & site readiness",
                    "Safety and compliance planning",
                    "Integration with existing power systems",
                ],
            },
            {
                heading: "Business Case & ROI Modelling",
                items: [
                    "Fuel savings forecasts",
                    "CO₂ reduction projections",
                    "DaaS vs CapEx comparison",
                    "GreenVision data model setup",
                ],
            },
            {
                heading: "Customer Success",
                items: [
                    "Post-deployment tracking",
                    "Training & onboarding",
                    "Continuous improvement reviews",
                ],
            },
        ],
        highlight: "GreenMentor ensures that every retrofit is engineered for your engines, operational conditions and financial goals.",
        cta: "Visit GreenMentor",
        ctaHref: "/ecosystem/greenmentor", // Updated path to match menu structure
        bgColor: "border-t-[var(--brand,#33A04A)]",
    };

    // --- Section 4 Data: GreenLabs ---
    const labsData: PillarProps = {
        icon: <FlaskConical className="w-8 h-8" />,
        subtitle: "GreenLabs™ — Hydrogen Retrofit Systems & DaaS Delivery",
        intro: "GreenLabs is where innovation becomes reality. This pillar develops, engineers, manufactures and delivers Saarthi’s hydrogen-diesel hybrid retrofit systems for all types of diesel engines.",
        details: [
            {
                heading: "Retrofit Hardware Engineering",
                items: [
                    "Engine-specific retrofit kits",
                    "Hydrogen generation units",
                    "Injection & safety control systems",
                    "Electronics, firmware & calibration",
                ],
            },
            {
                heading: "Manufacturing & Quality",
                items: [
                    "Certified production processes",
                    "Component testing & validation",
                    "Global standards compliance (CE, UL, ROHS, EMC, ISO 9001)",
                    "Patent-backed design features (India + Australia)",
                ],
            },
            {
                heading: "Delivery Models",
                items: [
                    "CapEx Purchase: Own the system with full installation & warranty.",
                    "DaaS - Decarbonisation-as-a-Service: Zero CapEx, savings-linked monthly fee.",
                    "GreenLabs handles all installation, maintenance, spares & field support.",
                ],
            },
            {
                heading: "Technical Support & Lifecycle Management",
                items: [
                    "Installation & commissioning",
                    "Field engineering & troubleshooting",
                    "Warranty, spares & upgrades",
                    "Periodic performance validation",
                ],
            },
        ],
        highlight: "GreenLabs brings world-class engineering to existing diesel engines — transforming them with hydrogen without replacing the asset.",
        cta: "Explore GreenLabs",
        ctaHref: "/ecosystem/greenlabs", // Updated path to match menu structure
        bgColor: "border-t-orange-500",
    };

    // --- Section 5 Data: GreenVision ---
    const visionData: PillarProps = {
        icon: <Gauge className="w-8 h-8" />,
        subtitle: "GreenVision™ — Real-Time Fuel, Emission & Carbon Intelligence",
        intro: "GreenVision is the independent data backbone of Saarthi. It captures, verifies and visualises all performance metrics, ensuring that fuel savings and CO₂ reductions are auditable and transparent.",
        details: [
            {
                heading: "Real-Time Telemetry",
                items: [
                    "Fuel consumption",
                    "Engine load & run hours",
                    "Hydrogen system activity",
                    "Temperature & safety parameters",
                ],
            },
            {
                heading: "Emission & Carbon Analytics",
                items: [
                    "CO₂ reduction calculations",
                    "Emission impact based on duty cycle",
                    "Per-asset, per-site, and fleet-wide dashboards",
                ],
            },
            {
                heading: "Performance Measurement & Verification",
                items: [
                    "Before-and-after comparisons",
                    "Savings attribution models",
                    "Alerts for anomalies or underperformance",
                    "Automated reporting",
                ],
            },
            {
                heading: "ESG & Compliance Integrations",
                items: [
                    "Exportable reports",
                    "Carbon accounting",
                    "Audit-ready logs",
                    "API support for enterprise systems",
                ],
            },
        ],
        highlight: "GreenVision ensures every claim is backed by verifiable, tamper-proof data — the foundation of trust in decarbonisation.",
        cta: "Visit GreenVision",
        ctaHref: "/ecosystem/greenvision", // Updated path to match menu structure
        bgColor: "border-t-blue-500",
    };

    // --- Section 6 Data: Integrated Decarbonisation Loop ---
    const loopSteps = [
        {
            icon: <ClipboardList className="w-6 h-6" style={{ color: BRAND_COLOR }} />,
            title: "1. GreenMentor — Plan & Design",
            description: "Assessment, strategy, feasibility, deployment planning.",
            bgColor: "bg-[var(--brand,#33A04A)]",
        },
        {
            icon: <FlaskConical className="w-6 h-6" style={{ color: "rgb(249 115 22)" }} />, // Orange-500
            title: "2. GreenLabs — Build & Deliver",
            description: "Product engineering, installation, field support, CapEx & DaaS models.",
            bgColor: "bg-orange-500",
        },
        {
            icon: <Gauge className="w-6 h-6" style={{ color: "rgb(59 130 246)" }} />, // Blue-500
            title: "3. GreenVision — Measure & Verify",
            description: "Telemetry, savings verification, carbon reporting, ESG analytics.",
            bgColor: "bg-blue-500",
        },
    ];

    const resultChecks = [
        "Fuel savings",
        "Emission reductions",
        "CO₂ impact",
        "Operational improvements",
        "Verified & auditable data",
    ];


    return (
        <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">

            {/* =========================================================
                SECTION 1 — HERO BANNER
            ========================================================= */}
            <section id="hero-banner" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" style={{ backgroundColor: BRAND_COLOR }}>
                <div className="absolute inset-0 bg-cover opacity-10" style={{ backgroundImage: "url(https://placehold.co/1920x800/ffffff/000000?text=Saarthi+Ecosystem+Architecture)" }}></div>

                {/* Abstract Visual (Simulating the connected pillars) */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        {/* Connecting Lines */}
                        <path d="M 20 40 Q 50 10, 80 40" stroke="white" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDuration: '4s' }} />
                        <path d="M 80 40 Q 90 70, 50 80" stroke="white" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                        <path d="M 50 80 Q 10 70, 20 40" stroke="white" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />

                        {/* Nodes */}
                        <circle cx="20" cy="40" r="2" fill="white" filter="url(#glow)"/>
                        <circle cx="80" cy="40" r="2" fill="white" filter="url(#glow)"/>
                        <circle cx="50" cy="80" r="2" fill="white" filter="url(#glow)"/>
                    </svg>
                </div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                        The Saarthi Ecosystem
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto">
                        Three integrated pillars — strategy, hardware and intelligence — working together to deliver engineered decarbonisation with verified impact.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/ecosystem/greenmentor" className="px-6 py-3 font-semibold rounded-full bg-white text-slate-900 shadow-md hover:bg-slate-100 transition-colors">
                            Explore GreenMentor
                        </Link>
                        <Link href="/ecosystem/greenlabs" className="px-6 py-3 font-semibold rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition-colors">
                            Explore GreenLabs
                        </Link>
                        <Link href="/ecosystem/greenvision" className="px-6 py-3 font-semibold rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition-colors">
                            Explore GreenVision
                        </Link>
                    </div>
                </div>
            </section>


            {/* =========================================================
                SECTION 2 — OVERVIEW OF THE ECOSYSTEM
            ========================================================= */}
            <section id="ecosystem-overview" className="py-20 md:py-28 lg:py-36 dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Decarbonisation That Works as One System
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Saarthi integrates strategy, engineering and data into a single ecosystem. Each pillar plays a distinct role, yet all three work together to deliver measurable fuel savings, emission reduction, and operational improvement across fleets, DG sets, marine engines and heavy equipment.
                        </p>
                    </div>

                    {/* Architectural Graphic (Text-based, mimicking a flow) */}
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 p-6 md:p-10 rounded-xl bg-slate-100 dark:bg-slate-800 border-l-4 border-l-[var(--brand,#33A04A)]">
                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full">
                            {/* Note: FlowStep is defined below the main component, but used here */}
                            <FlowStep title="GreenMentor" icon={<ClipboardList className="w-5 h-5 text-current" />} color={BRAND_COLOR} />
                            <FlowArrow />
                            <FlowStep title="GreenLabs" icon={<FlaskConical className="w-5 h-5 text-current" />} color="rgb(249 115 22)" />
                            <FlowArrow />
                            <FlowStep title="GreenVision" icon={<Gauge className="w-5 h-5 text-current" />} color="rgb(59 130 246)" />
                        </div>
                        <div className="mt-4 md:mt-0 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-300 dark:border-slate-700">
                            <FlowStep title="Verified CO₂ Reduction" icon={<CheckCircle className="w-5 h-5 text-current" />} color={ACCENT_COLOR} isResult={true} />
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                SECTIONS 3, 4, 5 — PILLAR DETAILS
            ========================================================= */}
            <section id="pillars-detail" className="py-20 md:py-28 lg:py-36 bg-gray-50 dark:bg-slate-900">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="space-y-24">
                        {/* PILLAR 1: GREENMENTOR */}
                        <PillarCard {...mentorData} bgColor="border-t-[var(--brand,#33A04A)]" icon={<ClipboardList className="w-8 h-8" style={{ color: BRAND_COLOR }} />} />

                        {/* PILLAR 2: GREENLABS */}
                        <PillarCard {...labsData} bgColor="border-t-orange-500" icon={<FlaskConical className="w-8 h-8 text-orange-500" />} />

                        {/* PILLAR 3: GREENVISION */}
                        <PillarCard {...visionData} bgColor="border-t-blue-500" icon={<Gauge className="w-8 h-8 text-blue-500" />} />
                    </div>
                </div>
            </section>

            {/* =========================================================
                SECTION 6 — HOW THE THREE PILLARS WORK TOGETHER
            ========================================================= */}
            <section id="integrated-loop" className="py-20 md:py-28 lg:py-36 dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            The Integrated Decarbonisation Loop
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Each pillar performs a distinct role, but Saarthi’s real strength comes from how these functions integrate into one seamless system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-8">
                        {/* Three Steps */}
                        <div className="lg:col-span-3 space-y-8">
                            {loopSteps.map((step, index) => (
                                <div key={index} className="flex items-start space-x-4 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800">
                                    <div className={`flex-shrink-0 p-3 rounded-lg ${step.bgColor} bg-opacity-10 text-white`}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        {/* Style is applied directly to the inline component */}
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1" style={{ color: step.bgColor.replace('bg-', 'var(--') }}>
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Connector Arrow (Desktop only) */}
                        <div className="hidden lg:flex lg:col-span-1 justify-center">
                            {/* Placeholder for the diagram/image of the loop */}
                             <div className="text-center text-slate-500">
                                <span className='text-3xl font-bold' style={{ color: BRAND_COLOR }}>→</span>
                                <p className='text-sm mt-1'>Flow</p>
                            </div>
                        </div>

                        {/* Result Block */}
                        <div className="lg:col-span-1 p-8 rounded-xl shadow-2xl" style={{ backgroundColor: ACCENT_COLOR }}>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                The Result
                            </h3>
                            <ul className="space-y-3 text-slate-800">
                                {resultChecks.map((check, index) => (
                                    <li key={index} className="flex items-center font-medium">
                                        <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                        {check}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================
                SECTION 7 — CTA SECTION
            ========================================================= */}
            <section id="ecosystem-cta" className="py-16 md:py-24" style={{ backgroundColor: BRAND_COLOR }}>
                <div className="container mx-auto px-4 max-w-7xl text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Start Your Decarbonisation Journey with Saarthi
                    </h2>
                    <p className="text-xl opacity-90 mb-10">
                        Choose the pillar you want to explore next.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/ecosystem/greenmentor" className="px-6 py-3 font-semibold rounded-full bg-white text-slate-900 shadow-md hover:bg-slate-100 transition-colors">
                            Explore GreenMentor
                        </Link>
                        <Link href="/ecosystem/greenlabs" className="px-6 py-3 font-semibold rounded-full bg-white text-slate-900 shadow-md hover:bg-slate-100 transition-colors">
                            Explore GreenLabs
                        </Link>
                        <Link href="/ecosystem/greenvision" className="px-6 py-3 font-semibold rounded-full bg-white text-slate-900 shadow-md hover:bg-slate-100 transition-colors">
                            Explore GreenVision
                        </Link>
                        <Link href="/contact" className="px-6 py-3 font-semibold rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
};

// Helper components for Section 2 Flow
const FlowStep: React.FC<{ title: string; icon: React.ReactNode; color: string; isResult?: boolean }> = ({ title, icon, color, isResult = false }) => (
    <div className={`flex items-center space-x-2 p-2 rounded-lg ${isResult ? 'border-2 border-slate-900 dark:border-white' : ''}`}>
        <div className="p-1 rounded-full text-white" style={{ backgroundColor: color }}>
            {icon}
        </div>
        <span className="font-semibold text-sm md:text-base text-slate-900 dark:text-white">{title}</span>
    </div>
);

const FlowArrow: React.FC = () => (
    <svg className="hidden md:block w-8 h-4 text-slate-500 dark:text-slate-400" viewBox="0 0 10 10">
        <path d="M 0 5 L 8 5 M 8 5 L 6 3 M 8 5 L 6 7" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
);


export default SaarthiEcosystemPage;