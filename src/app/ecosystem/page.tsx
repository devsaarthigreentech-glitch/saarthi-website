"use client";
import React from 'react';
// Module not found: Replaced all 'lucide-react' imports with inline SVG components below.

// --- INLINE SVG ICON COMPONENTS (unchanged) ---
const IconClipboardList = ({ className, style }: { className: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" />
        <path d="M12 15h4" />
        <path d="M8 11h.01" />
        <path d="M8 15h.01" />
    </svg>
);

const IconFlaskConical = ({ className, style }: { className: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M10 2v7.31" />
        <path d="M14 9.3V2" />
        <path d="M3 11v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6c0-1.7-.5-3.3-1.4-4.7l-2.6-4" />
        <path d="M10 11h4" />
        <path d="M10 19v3" />
        <path d="M14 19v3" />
        <path d="M8.5 22h7" />
    </svg>
);

const IconGauge = ({ className, style }: { className: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M12 14c.1 0 .2 0 .3-.1.5-.2.8-.7.8-1.3 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .6.3 1.1.8 1.3.1 0 .2.1.3.1z" />
        <path d="M15.5 15.5 17 17" />
        <path d="M9 18v3" />
        <path d="M21 7.5c0 3.3-2.7 6-6 6M3 7.5c0 3.3 2.7 6 6 6" />
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
    </svg>
);

const IconCheckCircle = ({ className, style }: { className: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
    </svg>
);

const IconArrowRight = ({ className, style }: { className: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

// Define the colors used across the page
const BRAND_COLOR = "var(--brand, #33A04A)";
const ACCENT_COLOR = "var(--accent, #98C948)";
const DARK_BG = "#0f172a"; // slate-950 equivalent
const MEDIUM_DARK_BG = "#1e293b"; // slate-800 equivalent

// Helper component for the three pillars section (Sections 3, 4, 5)
interface PillarProps {
    icon: React.ReactNode;
    subtitle: string;
    intro: string;
    details: { heading: string; items: string[] }[];
    highlight: string;
    cta: string;
    ctaHref: string;
    bgColor: string; // Used for border-top and icon background
    iconColorClass: string; // Tailwind class for icon color
    patternSvg?: React.ReactNode; // Optional background pattern
}

const PillarCard: React.FC<PillarProps> = ({ icon, subtitle, intro, details, highlight, cta, ctaHref, bgColor, iconColorClass, patternSvg }) => (
    <div className={`relative p-8 md:p-12 rounded-2xl shadow-xl transition-all duration-500 bg-white dark:bg-slate-800 border-t-8 ${bgColor} overflow-hidden group`}>
        {patternSvg && (
            <div className="absolute inset-0 opacity-5 dark:opacity-[0.03] pointer-events-none z-0">
                {patternSvg}
            </div>
        )}
        <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-full ${bgColor.replace('border-t-8', 'bg').replace('border-t-', 'bg-')} bg-opacity-10 ${iconColorClass} text-4xl`}>
                    {icon}
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white">
                    {subtitle}
                </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-base md:text-lg">
                {intro}
            </p>

            {/* Feature List */}
            <div className="space-y-6 md:space-y-8">
                {details.map((section, index) => (
                    <div key={index}>
                        <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                            <IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: BRAND_COLOR }} />
                            {section.heading}
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 pl-8">
                            {section.items.map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="mr-2 text-gray-400 dark:text-gray-600">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Highlight Block */}
            <div className="mt-10 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 transform group-hover:scale-[1.01] transition-transform duration-300">
                <p className="font-semibold text-slate-700 dark:text-slate-200 italic text-base">
                    {highlight}
                </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
                <a
                    href={ctaHref}
                    className="inline-flex items-center text-lg font-bold transition-colors group"
                    style={{ color: BRAND_COLOR }}
                >
                    {cta}
                    <IconArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    </div>
);


// This component is now exported as the default page component
const SaarthiEcosystemPage = () => {
    
    // --- Section 3 Data: GreenMentor ---
    const mentorData: PillarProps = {
        icon: <IconClipboardList className="w-8 h-8" />,
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
        ctaHref: "/ecosystem/greenmentor", 
        bgColor: "border-t-[var(--brand,#33A04A)]",
        iconColorClass: "text-[var(--brand,#33A04A)]",
        patternSvg: (
            <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <circle cx="0" cy="0" r="100" fill="currentColor" opacity="0.1"/>
                <circle cx="200" cy="200" r="100" fill="currentColor" opacity="0.1"/>
                <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1"/>
            </svg>
        )
    };

    // --- Section 4 Data: GreenLabs ---
    const labsData: PillarProps = {
        icon: <IconFlaskConical className="w-8 h-8" />,
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
        ctaHref: "/ecosystem/greenlabs", 
        bgColor: "border-t-orange-500",
        iconColorClass: "text-orange-500",
        patternSvg: (
            <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <rect x="0" y="0" width="200" height="200" fill="currentColor" opacity="0.05" />
                <path d="M 0 0 L 200 200 M 200 0 L 0 200" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1"/>
            </svg>
        )
    };
    
    // --- Section 5 Data: GreenVision ---
    const visionData: PillarProps = {
        icon: <IconGauge className="w-8 h-8" />,
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
        ctaHref: "/ecosystem/greenvision", 
        bgColor: "border-t-blue-500",
        iconColorClass: "text-blue-500",
        patternSvg: (
            <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M 0 0 L 200 0 L 200 200 L 0 200 Z" fill="currentColor" opacity="0.02" />
                <circle cx="100" cy="100" r="50" fill="currentColor" opacity="0.05" />
                <path d="M0 50 Q100 0 200 50 Q100 100 0 50 Z" fill="currentColor" opacity="0.01"/>
            </svg>
        )
    };

    // --- Section 6 Data: Integrated Decarbonisation Loop ---
    const loopSteps = [
        {
            icon: <IconClipboardList className="w-6 h-6" style={{ color: BRAND_COLOR }} />,
            title: "1. GreenMentor — Plan & Design",
            description: "Assessment, strategy, feasibility, deployment planning.",
            bgColorClass: "bg-[var(--brand,#33A04A)]",
            color: BRAND_COLOR
        },
        {
            icon: <IconFlaskConical className="w-6 h-6" style={{ color: "rgb(249 115 22)" }} />,
            title: "2. GreenLabs — Build & Deliver",
            description: "Product engineering, installation, field support, CapEx & DaaS models.",
            bgColorClass: "bg-orange-500",
            color: "rgb(249 115 22)"
        },
        {
            icon: <IconGauge className="w-6 h-6" style={{ color: "rgb(59 130 246)" }} />,
            title: "3. GreenVision — Measure & Verify",
            description: "Telemetry, savings verification, carbon reporting, ESG analytics.",
            bgColorClass: "bg-blue-500",
            color: "rgb(59 130 246)"
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
            <section id="hero-banner" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-green-700 to-green-900 dark:from-green-900 dark:to-black">
                {/* Enhanced Abstract Visual */}
                <div className="absolute inset-0 z-0 opacity-15 dark:opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" style={{stopColor:"rgba(255,255,255,0.2)", stopOpacity:1}} />
                                <stop offset="100%" style={{stopColor:"rgba(255,255,255,0)", stopOpacity:1}} />
                            </radialGradient>
                            <filter id="hero-glow">
                                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        {/* Connecting lines and nodes with improved animation */}
                        <path d="M 10 30 Q 50 5, 90 30" stroke="url(#grad1)" strokeWidth="0.8" fill="none" className="animate-[dashflow_6s_linear_infinite]" style={{ strokeDasharray: '20, 10', strokeDashoffset: '0' }} />
                        <path d="M 90 30 Q 95 60, 60 90" stroke="url(#grad1)" strokeWidth="0.8" fill="none" className="animate-[dashflow_6s_linear_infinite]" style={{ strokeDasharray: '20, 10', strokeDashoffset: '-20' }} />
                        <path d="M 60 90 Q 5 95, 10 30" stroke="url(#grad1)" strokeWidth="0.8" fill="none" className="animate-[dashflow_6s_linear_infinite]" style={{ strokeDasharray: '20, 10', strokeDashoffset: '-40' }} />

                        <circle cx="10" cy="30" r="2.5" fill="white" filter="url(#hero-glow)" className="animate-pulse" style={{ animationDuration: '3s' }}/>
                        <circle cx="90" cy="30" r="2.5" fill="white" filter="url(#hero-glow)" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}/>
                        <circle cx="60" cy="90" r="2.5" fill="white" filter="url(#hero-glow)" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '3s' }}/>

                         {/* More subtle background shapes */}
                         <circle cx="20" cy="80" r="15" fill="white" opacity="0.05" />
                         <rect x="70" y="10" width="10" height="40" fill="white" opacity="0.05" transform="rotate(30 75 30)"/>
                    </svg>
                </div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
                        The Saarthi Ecosystem: <br className="hidden sm:block"/> Engineered Decarbonisation
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light">
                        Three integrated pillars—strategy, hardware, and intelligence—working in harmony to deliver verified fuel savings and emission reductions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/ecosystem/greenmentor" className="px-8 py-3 font-semibold rounded-full bg-white text-gray-900 shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                            Explore GreenMentor
                        </a>
                        <a href="/ecosystem/greenlabs" className="px-8 py-3 font-semibold rounded-full border border-white text-white hover:bg-white hover:text-gray-900 shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            Explore GreenLabs
                        </a>
                        <a href="/ecosystem/greenvision" className="px-8 py-3 font-semibold rounded-full border border-white text-white hover:bg-white hover:text-gray-900 shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            Explore GreenVision
                        </a>
                    </div>
                </div>
                {/* Styles for animations */}
                <style jsx>{`
                    @keyframes dashflow {
                        from {
                            stroke-dashoffset: 0;
                        }
                        to {
                            stroke-dashoffset: -60; /* Adjust to total dash length */
                        }
                    }
                `}</style>
            </section>


            {/* =========================================================
               SECTION 2 — OVERVIEW OF THE ECOSYSTEM (Improved Flow)
            ========================================================= */}
            <section id="ecosystem-overview" className="py-20 md:py-28 lg:py-36 bg-gray-50 dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            A Unified Approach to Decarbonisation
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 font-light">
                            Saarthi integrates strategy, engineering, and data into a single, cohesive ecosystem. Each pillar plays a distinct, yet interconnected role, ensuring measurable fuel savings, emission reduction, and operational improvement across diverse industrial applications.
                        </p>
                    </div>

                    {/* Enhanced Visual Flow */}
                    <div className="relative flex flex-col items-center justify-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 shadow-lg">
                        
                        {/* Core Pillars in a visual flow */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                            {loopSteps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-md transform hover:scale-[1.03] transition-transform duration-300">
                                    <div className={`p-4 rounded-full ${step.bgColorClass} bg-opacity-15 mb-4`} style={{color: step.color}}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2" style={{color: step.color}}>
                                        {step.title.split('—')[0].trim()}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Animated Arrows for flow (simplified for direct code) */}
                        <div className="absolute hidden md:flex items-center justify-between w-[calc(100%-8rem)] max-w-4xl z-0 pointer-events-none">
                            <div className="absolute left-[calc(33%-1rem)] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center animate-bounce-custom">
                                <IconArrowRight className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                            </div>
                            <div className="absolute right-[calc(33%-1rem)] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center animate-bounce-custom" style={{animationDelay: '0.5s'}}>
                                <IconArrowRight className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                            </div>
                        </div>

                        {/* Result Block - Integrated more visually */}
                        <div className="mt-12 p-8 rounded-2xl text-center shadow-2xl w-full max-w-2xl" style={{ backgroundColor: ACCENT_COLOR }}>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center">
                                <IconCheckCircle className="w-7 h-7 mr-3" /> The Verified Result
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-800 text-lg">
                                {resultChecks.map((check, index) => (
                                    <span key={index} className="flex items-center justify-center font-medium">
                                        <span className="mr-2 text-xl">•</span> {check}
                                    </span>
                                ))}
                            </div>
                        </div>
                         <style jsx>{`
                            @keyframes bounce-custom {
                                0%, 100% { transform: translateY(-50%) translateX(0); }
                                50% { transform: translateY(-50%) translateX(10px); }
                            }
                        `}</style>
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTIONS 3, 4, 5 — PILLAR DETAILS (Improved Cards)
            ========================================================= */}
            <section id="pillars-detail" className="py-20 md:py-28 lg:py-36 bg-gray-100 dark:bg-slate-900">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
                        Deep Dive: The Three Integrated Pillars
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <PillarCard {...mentorData} />
                        <PillarCard {...labsData} />
                        <PillarCard {...visionData} />
                    </div>
                </div>
            </section>


            {/* =========================================================
               SECTION 6 — THE INTEGRATED DECARBONISATION LOOP 
            ========================================================= */}
            <section id="integrated-loop" className="py-20 md:py-28 lg:py-36 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: BRAND_COLOR }}>
                            Circular Decarbonisation
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-3 mb-6">
                            From Strategy to Continuous Verification
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300">
                            The Saarthi Ecosystem is a continuous improvement loop. Data from GreenVision feeds back into GreenMentor's strategic planning, creating a constantly optimized decarbonisation journey.
                        </p>
                        
                        {/* Image Suggestion */}
                        

                    </div>

                    <div className="relative flex flex-col items-center">
                        {/* Loop Visual - Simplified Diagram using HTML/CSS */}
                        <div className="w-full max-w-4xl p-8 md:p-12 rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Step 1: Mentor */}
                                <div className="text-center p-6 rounded-xl border-t-4 border-green-500 bg-white dark:bg-slate-900 shadow-lg">
                                    <div className="p-4 rounded-full bg-green-500/10 inline-block mb-3 text-green-500">
                                        <IconClipboardList className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-1 dark:text-white">Plan</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">GreenMentor defines the strategy and expected performance metrics.</p>
                                </div>
                                
                                {/* Step 2: Labs */}
                                <div className="text-center p-6 rounded-xl border-t-4 border-orange-500 bg-white dark:bg-slate-900 shadow-lg">
                                    <div className="p-4 rounded-full bg-orange-500/10 inline-block mb-3 text-orange-500">
                                        <IconFlaskConical className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-1 dark:text-white">Implement</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">GreenLabs delivers the hydrogen system and manages deployment/maintenance.</p>
                                </div>

                                {/* Step 3: Vision */}
                                <div className="text-center p-6 rounded-xl border-t-4 border-blue-500 bg-white dark:bg-slate-900 shadow-lg">
                                    <div className="p-4 rounded-full bg-blue-500/10 inline-block mb-3 text-blue-500">
                                        <IconGauge className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-1 dark:text-white">Verify</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">GreenVision captures real-time data on fuel consumption and CO₂ reduction.</p>
                                </div>
                            </div>
                            
                            {/* Feedback Arrow */}
                            <div className="mt-10 pt-6 border-t border-slate-300 dark:border-slate-700 text-center">
                                <p className="font-semibold text-slate-700 dark:text-slate-200 mb-2">
                                    Feedback Loop
                                </p>
                                <div className="flex items-center justify-center space-x-2 text-sm text-slate-500 dark:text-slate-400 italic">
                                    <IconArrowRight className="w-4 h-4 transform rotate-180" />
                                    <span>GreenVision Data informs GreenMentor's next planning cycle (Optimisation)</span>
                                    <IconArrowRight className="w-4 h-4" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 7 — FINAL CTA
            ========================================================= */}
            <section id="final-cta" className="py-20 md:py-28 lg:py-36 bg-gray-50 dark:bg-slate-900">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                        Ready to Start Your Decarbonisation Journey?
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto">
                        Connect with our GreenMentor team to define your tailored roadmap, explore our DaaS models, and begin realizing measurable savings today.
                    </p>
                    <div className="flex justify-center">
                        <a 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full text-white shadow-xl transition-all duration-300 transform hover:scale-[1.05]"
                            style={{ backgroundColor: BRAND_COLOR }}
                        >
                            Get Started with GreenMentor
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SaarthiEcosystemPage;