'use client';

import React from 'react';

// --- THEME COLOR VARIABLES (Matching the GreenMentor palette) ---
// Background: Deep Slate Gray (Primary Background)
const BG_DEEP_SLATE_GRAY = "var(--bg-deep-slate-gray, #212529)";
// Text/Cards: Slightly lighter gray for contrast
const BG_CARD_GRAY = "var(--bg-card-gray, #2c3034)";
// Primary Feature Color (Saarthi Green): Used for all primary accents, matching GreenMentor
const PRIMARY_COLOR = "var(--primary-saarthi, #10B981)"; // Tailwind Green-500
// Secondary Accent Color: Same as Primary Color for consistent theme
const ACCENT_COLOR = PRIMARY_COLOR; 
// Text color
const TEXT_LIGHT = "var(--text-light, #f8f9fa)";
const TEXT_MUTED = "var(--text-muted, #adb5bd)";

// --- INLINE SVG ICON COMPONENTS ---

const IconArrowRight = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

const IconActivity = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

const IconCloud = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    </svg>
);

const IconFileText = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
    </svg>
);

const IconGauge = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="m12 14 4-4" />
        <path d="M3.34 19A10 10 0 1 1 20.7 19" />
        <path d="M16.7 17.5a2.9 2.9 0 0 0-4.6 0" />
    </svg>
);

const IconFuel = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <line x1="3" x2="15" y1="22" y2="22" />
        <path d="M18 20V8.35a2 2 0 1 0-2 0V20" />
        <path d="M4.5 17.5 7 15h11" />
        <path d="M12 18V6" />
        <path d="M12 6H8a2 2 0 0 0-2 2v10" />
    </svg>
);

const IconAlertTriangle = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14a2 2 0 0 0 1.74 3H19.9a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
    </svg>
);

const IconZap = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

const IconCheckCircle = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
    </svg>
);

// Icon for the GreenMentor part of the flow
const IconMap = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" />
        <line x1="9" x2="9" y1="3" y2="18" />
        <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
);

// Icon for the GreenLabs part of the flow
const IconFactory = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3l-2-2H9L7 6H4a2 2 0 0 0-2 2Z" />
        <path d="M4 10h16" />
        <path d="M10 22V10" />
        <path d="M14 22V10" />
        <path d="M12 2v4" />
    </svg>
);

// Icon for the Result part of the flow
const IconTarget = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);


// Helper component for the measurement blocks
interface MeasureBlockProps {
    icon: React.ReactNode;
    title: string;
    text: string;
    includes: string[];
}

const MeasureBlock: React.FC<MeasureBlockProps> = ({ icon, title, text, includes }) => (
    // Used BG_CARD_GRAY for card background and TEXT_MUTED for text
    <div className="flex flex-col p-6 rounded-xl shadow-lg transition-all duration-300 h-full" style={{ backgroundColor: BG_CARD_GRAY, border: `1px solid ${BG_DEEP_SLATE_GRAY}`}}>
        
        <div className="flex items-start space-x-4 mb-4">
             {/* Icon color uses PRIMARY_COLOR (Green) */}
             <div className="p-3 rounded-full flex-shrink-0 shadow-lg" style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}>
                {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold pt-1 leading-snug" style={{ color: TEXT_LIGHT }}>
                {title}
            </h3>
        </div>
        
        <p className="mb-6 flex-grow" style={{ color: TEXT_MUTED }}>{text}</p>
        
        <div className="mt-auto pt-4 border-t" style={{ borderColor: BG_DEEP_SLATE_GRAY }}>
            <h4 className="text-lg font-semibold mb-3" style={{ color: PRIMARY_COLOR }}>Key Data Points:</h4>
            <ul className="space-y-2 text-sm" style={{ color: TEXT_MUTED }}>
                {includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                        {/* List icon color uses ACCENT_COLOR (Green) */}
                        <IconActivity className="w-4 h-4 mr-2 mt-1 flex-shrink-0" style={{ color: ACCENT_COLOR }} /> {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

// Helper component for the use case blocks
interface UseCaseBlockProps {
    title: string;
    description: string;
}

const UseCaseBlock: React.FC<UseCaseBlockProps> = ({ title, description }) => (
    // Used BG_CARD_GRAY for card background and PRIMARY_COLOR (Green) for the border
    <div className="p-6 rounded-xl shadow-lg border-l-4 transition-colors duration-200 h-full flex flex-col justify-center" style={{ backgroundColor: BG_CARD_GRAY, borderColor: PRIMARY_COLOR }}>
        <h3 className="text-xl font-bold mb-2" style={{ color: TEXT_LIGHT }}>{title}</h3>
        <p style={{ color: TEXT_MUTED }}>{description}</p>
    </div>
);

// --- CLIENT COMPONENT FOR IMAGE WITH ERROR HANDLING ---
interface ClientImageProps {
    src: string;
    alt: string;
}

const ClientImage: React.FC<ClientImageProps> = ({ src, alt }) => (
    <img
        // KEY CHANGE 1: We are now enforcing a height (h-full) inside a parent with a fixed height.
        // KEY CHANGE 2: object-contain remains to ensure the whole image is visible.
        className="w-full h-full object-contain" 
        src={src}
        alt={alt}
        onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            // Fallback placeholder
            target.src = `https://placehold.co/600x400/D3D3D3/000000?text=Dashboard+Image+Unavailable`;
        }}
    />
);

const GreenVisionPage = () => {
    
    // Placeholder URL for a professional data dashboard image
    const heroImageUrl = "/images/greenvision/GnVisionHero.png"; // Placeholder for an uploaded data dashboard image
    const dashboardImageUrl = "/images/greenvision/dashboard.png"; // Placeholder for an uploaded data dashboard image

    // Data for What GreenVision Measures
    const measures = [
        {
            icon: <IconGauge className="w-6 h-6" />,
            title: "1. Real-Time Engine Telemetry",
            text: "GreenVision captures a unified view across fleets, DG rooms, marine engines and mining equipment.",
            includes: [
                "Fuel consumption",
                "Engine RPM",
                "Engine load",
                "Run hours",
                "Fuel flow consistency",
                "Temperature & safety parameters",
                "Hydrogen system activity",
                "Generator kWh output (for DG sets)",
            ],
        },
        {
            icon: <IconCloud className="w-6 h-6" />,
            title: "2. Emission & Carbon Analytics",
            text: "Every data point is timestamped, tamper-proof, and exportable for auditors.",
            includes: [
                "CO₂ reduction calculations",
                "Duty-cycle-adjusted emission impact",
                "Estimated HC, CO and PM profile changes",
                "Per-engine carbon intensity",
                "Per-site or per-fleet emission summary",
            ],
        },
        {
            icon: <IconFuel className="w-6 h-6" />,
            title: "3. Savings Measurement & Verification (M&V)",
            text: "GreenVision ensures measurement that is defensible, transparent and ESG-ready.",
            includes: [
                "Fuel savings comparison (before vs after)",
                "Engine-specific performance baselines",
                "Seasonal/duty-cycle adjustments",
                "M&V logic for DaaS billing",
                "Efficiency per kWh (DG) or per km (fleet)",
                "Operator behaviour patterns",
            ],
        },
        {
            icon: <IconAlertTriangle className="w-6 h-6" />,
            title: "4. Alerts, Exceptions & Diagnostics",
            text: "Prevents misuse, protects the system and ensures consistent performance.",
            includes: [
                "Abnormal fuel patterns",
                "Hydrogen system deviation alerts",
                "Engine temperature anomalies",
                "Low-efficiency events",
                "System shutdown signals",
                "Safety-critical notifications",
            ],
        },
    ];
    
    // Data for Dashboard Modules (Section 4)
    const dashboardModules = [
        "Live engine panel",
        "Fuel & hydrogen activity",
        "CO₂ & emission trend",
        "Efficiency & savings graph",
        "Alerts & diagnostic feed",
        "Asset comparison view",
        "Multi-site summary",
    ];

    // Data for Use Cases (Section 6)
    const useCases = [
        { title: "Fleets & Logistics", description: "Track kmpl improvement, idling behaviour, duty-cycle fuel patterns." },
        { title: "DG Sets & Industrial Power", description: "Monitor kWh/litre, load, run hours, fuel flow, grid interactions." },
        { title: "Ports & Marine", description: "Track auxiliary engine performance, harbour duty cycles, cold ironing benefits." },
        { title: "Mining & Heavy Equipment", description: "Monitor excavation cycles, fuel load, shock events, and idle-heavy operations." },
    ];
    
    // Data for Technical Architecture (Section 7)
    const techArchitecture = [
        "On-engine IoT device integration",
        "CAN/J1939 support",
        "Custom sensor inputs (flow, temperature, pressure)",
        "Encrypted transmission",
        "Cloud storage & analytics",
        "API-driven data layers",
        "Role-based access control",
    ];

    // Data for Downloadable Outputs (Section 8)
    const downloadableOutputs = [
        "Daily fuel reports",
        "Monthly CO₂ reduction reports",
        "Before–after savings summary",
        "DaaS billing reports",
        "Asset performance comparisons",
        "Quarterly ESG-ready audit files",
    ];


    return (
        <main className="min-h-screen font-inter" style={{ backgroundColor: BG_DEEP_SLATE_GRAY, color: TEXT_LIGHT }}>

            {/* =========================================================
               SECTION 1 — HERO BANNER
            ========================================================= */}
            <section 
                id="hero-banner" 
                className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" 
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url(${heroImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // Use PRIMARY_COLOR (Green) for the bottom border
                    borderBottom: `6px solid ${PRIMARY_COLOR}`
                }}
            >
                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight" style={{ color: PRIMARY_COLOR }}>
                        GreenVision™ — Real-Time Fuel, Emission & Carbon Intelligence
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light" style={{ color: TEXT_MUTED }}>
                        The independent data backbone of Saarthi. GreenVision verifies every litre saved and every gram of CO₂ reduced through real-time telemetry and audit-ready reporting.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="#dashboard" 
                            className="px-8 py-3 font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.05] hover:shadow-2xl"
                            style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}
                        >
                            View Dashboard Samples
                        </a>
                        <a 
                            href="/contact" 
                            className="px-8 py-3 font-semibold rounded-full border border-gray-500 hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-[1.05]"
                            style={{ color: TEXT_LIGHT }}
                        >
                            Talk to Our Data Team
                        </a>
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 2 — INTRODUCTION
            ========================================================= */}
            <section id="introduction" className="py-20 md:py-28" style={{ backgroundColor: BG_DEEP_SLATE_GRAY, borderBottom: `1px solid ${BG_CARD_GRAY}` }}>
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_LIGHT }}>
                        Verified Decarbonisation Requires <span style={{ color: PRIMARY_COLOR }}>Verified Data</span>
                    </h2>
                    <p className="text-xl leading-relaxed" style={{ color: TEXT_MUTED }}>
                        GreenVision is Saarthi’s IoT + AI platform built specifically for measuring, validating and reporting the impact of hydrogen retrofit systems on diesel engines.
                    </p>
                    <p className="text-xl leading-relaxed mt-4" style={{ color: TEXT_MUTED }}>
                        It records every relevant parameter — fuel, load, run hours, emissions, system activity — and converts raw data into actionable savings, CO₂ reduction and ESG reports.
                    </p>
                    <p className="text-xl font-semibold mt-6 p-4 rounded-xl border-l-4" style={{ borderColor: PRIMARY_COLOR, backgroundColor: BG_CARD_GRAY, color: TEXT_MUTED }}>
                        GreenVision is intentionally independent from both hardware (GreenLabs) and advisory (GreenMentor), ensuring full transparency and trust in every result.
                    </p>
                </div>
            </section>


            {/* =========================================================
               SECTION 3 — WHAT GREENVISION MEASURES
            ========================================================= */}
            <section id="measures" className="py-20 md:py-28 lg:py-36" style={{ backgroundColor: BG_DEEP_SLATE_GRAY }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: TEXT_LIGHT }}>
                        A Complete Monitoring Layer Built for Diesel+Hydrogen Systems
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {measures.map((block, index) => (
                            <MeasureBlock key={index} {...block} />
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 4 — DASHBOARD EXPERIENCE
            ========================================================= */}
            <section id="dashboard" className="py-20 md:py-28" style={{ backgroundColor: BG_DEEP_SLATE_GRAY, borderTop: `1px solid ${BG_CARD_GRAY}` }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_LIGHT }}>
                                Operational Clarity in a Single Unified Dashboard
                            </h2>
                            <p className="text-lg mb-10" style={{ color: TEXT_MUTED }}>
                                The GreenVision dashboard is designed for fleet managers, DG room operators, and enterprise executives, providing an immediate, clear view of decarbonisation progress and system health.
                            </p>
                            
                            <h3 className="text-xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Dashboard Modules:</h3>
                            <ul className="grid grid-cols-2 gap-4 mb-10" style={{ color: TEXT_LIGHT }}>
                                {dashboardModules.map((module, index) => (
                                    <li key={index} className="flex items-center text-lg">
                                        <IconZap className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: ACCENT_COLOR }} /> {module}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Key Features:</h3>
                            <ul className="space-y-3" style={{ color: TEXT_LIGHT }}>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: ACCENT_COLOR }} /> Dark mode for control room visibility</li>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: ACCENT_COLOR }} /> Mobile access for remote monitoring</li>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: ACCENT_COLOR }} /> Multi-asset and multi-location support</li>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: ACCENT_COLOR }} /> Exportable reports (PDF, CSV)</li>
                            </ul>
                        </div>
                        
<div className="lg:col-span-6 relative rounded-xl overflow-hidden shadow-2xl border-4 p-4 h-96" style={{ borderColor: BG_CARD_GRAY }}>
                            {/* Dashboard Image using the ClientImage component to handle onError */}
                            <ClientImage 
                                src={dashboardImageUrl} 
                                alt="GreenVision Real-Time Dashboard Mockup" 
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* =========================================================
               SECTION 5 — HOW GREENVISION INTEGRATES INTO THE ECOSYSTEM
            ========================================================= */}
            <section id="ecosystem-fit" className="py-20 md:py-28 lg:py-36" style={{ backgroundColor: BG_DEEP_SLATE_GRAY }}>
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_LIGHT }}>
                        The Verification Layer That Closes the Loop
                    </h2>
                    <p className="text-xl mb-12 max-w-3xl mx-auto" style={{ color: TEXT_MUTED }}>
                        GreenMentor defines the roadmap. GreenLabs delivers the retrofit hardware. GreenVision verifies the outcomes.
                    </p>

                    {/* Graphic (Flow Diagram) */}
                    <div className="flex flex-col md:flex-row items-stretch justify-center p-8 md:p-12 rounded-2xl shadow-2xl" style={{ border: `1px solid ${BG_CARD_GRAY}`, backgroundColor: BG_CARD_GRAY }}>
                        
                        {/* 1. GreenMentor (Plan) */}
                        <div className="flex flex-col items-center text-center w-full md:w-40 p-4 rounded-lg hover:bg-black/20 transition-colors duration-200 border-b md:border-b-0 md:border-r" style={{ borderColor: BG_DEEP_SLATE_GRAY }}>
                            <div className="p-4 rounded-full mb-3" style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}>
                                <IconMap className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold" style={{ color: TEXT_LIGHT }}>GreenMentor</h3>
                            <p className="text-sm font-semibold mt-1" style={{ color: TEXT_MUTED }}>(Plan)</p>
                        </div>
                        
                        {/* Arrow 1 */}
                        <div className="flex items-center justify-center py-4 md:p-4">
                            <IconArrowRight className="w-8 h-8" style={{ color: TEXT_MUTED }} />
                        </div>

                        {/* 2. GreenLabs (Deliver) */}
                        <div className="flex flex-col items-center text-center w-full md:w-40 p-4 rounded-lg hover:bg-black/20 transition-colors duration-200 border-b md:border-b-0 md:border-r" style={{ borderColor: BG_DEEP_SLATE_GRAY }}>
                            <div className="p-4 rounded-full mb-3" style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}>
                                <IconFactory className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold" style={{ color: TEXT_LIGHT }}>GreenLabs</h3>
                            <p className="text-sm font-semibold mt-1" style={{ color: TEXT_MUTED }}>(Deliver)</p>
                        </div>

                        {/* Arrow 2 */}
                        <div className="flex items-center justify-center py-4 md:p-4">
                            <IconArrowRight className="w-8 h-8" style={{ color: TEXT_MUTED }} />
                        </div>
                        
                        {/* 3. GreenVision (Verify) - Highlighted with PRIMARY_COLOR (Green) */}
                        <div className="flex flex-col items-center text-center w-full md:w-40 p-4 rounded-lg border-2 transition-colors duration-200" style={{ borderColor: PRIMARY_COLOR, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: TEXT_LIGHT }}>
                            <div className="p-4 rounded-full mb-3 shadow-lg" style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}>
                                <IconCloud className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-extrabold" style={{ color: PRIMARY_COLOR }}>GreenVision</h3>
                            <p className="text-sm font-bold mt-1" style={{ color: PRIMARY_COLOR }}>(Verify)</p>
                        </div>

                        {/* Arrow 3 */}
                        <div className="flex items-center justify-center py-4 md:p-4">
                            <IconArrowRight className="w-8 h-8" style={{ color: TEXT_MUTED }} />
                        </div>
                        
                        {/* 4. Result */}
                        <div className="flex flex-col items-center text-center w-full md:w-40 p-4 rounded-lg hover:bg-black/20 transition-colors duration-200 border-t md:border-t-0 md:border-l" style={{ borderColor: BG_DEEP_SLATE_GRAY }}>
                            <div className="p-4 rounded-full mb-3 shadow-lg" style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}>
                                <IconTarget className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold" style={{ color: TEXT_LIGHT }}>Proven Savings</h3>
                            <p className="text-sm font-semibold mt-1" style={{ color: PRIMARY_COLOR }}>(CO₂ Reduction)</p>
                        </div>

                    </div>
                    
                    <div className="mt-12 text-center">
                        <a 
                            href="/ecosystem" 
                            className="inline-flex items-center text-lg font-bold transition-colors group"
                            style={{ color: PRIMARY_COLOR }}
                        >
                            Explore the Saarthi Ecosystem
                            <IconArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 6 — USE CASES BY INDUSTRY
            ========================================================= */}
            <section id="use-cases" className="py-20 md:py-28" style={{ backgroundColor: BG_DEEP_SLATE_GRAY, borderTop: `1px solid ${BG_CARD_GRAY}` }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: TEXT_LIGHT }}>
                        Built for Every Diesel-Driven Sector
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((useCase, index) => (
                            <UseCaseBlock key={index} {...useCase} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a 
                            href="/solutions" 
                            className="inline-flex items-center text-lg font-bold transition-colors group"
                            style={{ color: PRIMARY_COLOR }}
                        >
                            Explore Solutions
                            <IconArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 7 — TECHNICAL ARCHITECTURE
            ========================================================= */}
            <section id="architecture" className="py-20 md:py-28 lg:py-36" style={{ backgroundColor: BG_DEEP_SLATE_GRAY }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_LIGHT }}>
                                Secure, Scalable & Future-Ready
                            </h2>
                            <p className="text-lg mb-10" style={{ color: TEXT_MUTED }}>
                                GreenVision is designed for enterprise security, multi-location management and seamless integration with external ESG reporting systems.
                            </p>
                            
                            <h3 className="text-xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Data Architecture Includes:</h3>
                            <ul className="space-y-3" style={{ color: TEXT_LIGHT }}>
                                {techArchitecture.map((item, index) => (
                                    <li key={index} className="flex items-start text-lg">
                                        <IconZap className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: ACCENT_COLOR }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative p-8 rounded-xl shadow-inner border" style={{ backgroundColor: BG_CARD_GRAY, borderColor: BG_DEEP_SLATE_GRAY }}>
                            
                            <h3 className="text-2xl font-bold mb-4 border-b pb-3" style={{ color: TEXT_LIGHT, borderColor: BG_DEEP_SLATE_GRAY }}>Architecture Concept</h3>
                            <p className="text-sm italic mb-6" style={{ color: TEXT_MUTED }}>
                                The GreenVision system is built on a robust IoT stack for reliability in harsh industrial environments.
                            </p>
                            
                            <div className="space-y-4">
                                {/* Use PRIMARY_COLOR (Green) for highlight */}
                                <div className="p-4 rounded-lg font-mono flex items-center justify-between border-l-4" style={{ borderColor: PRIMARY_COLOR, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: TEXT_LIGHT }}>
                                    <span className="font-semibold">On-Engine IoT Device (Edge)</span>
                                    <span className="text-sm font-light" style={{ color: PRIMARY_COLOR }}>CAN/J1939</span>
                                </div>
                                <div className="text-center text-lg font-bold flex items-center justify-center space-x-2" style={{ color: ACCENT_COLOR }}>
                                    <IconCloud className="w-5 h-5" style={{ color: ACCENT_COLOR }}/>
                                    <span>Encrypted Transmission</span>
                                    {/* <IconArrowRight className="w-5 h-5" /> */}
                                </div>
                                <div className="p-4 rounded-lg font-mono flex items-center justify-between border-l-4" style={{ borderColor: PRIMARY_COLOR, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: TEXT_LIGHT }}>
                                    <span className="font-semibold">Cloud Ingestion & Data Lake</span>
                                    <span className="text-sm font-light" style={{ color: PRIMARY_COLOR }}>Scalable Storage</span>
                                </div>
                                <div className="text-center text-lg font-bold flex items-center justify-center space-x-2" style={{ color: ACCENT_COLOR }}>
                                    <IconGauge className="w-5 h-5" style={{ color: ACCENT_COLOR }}/>
                                    <span>AI/ML Analytics</span>
                                    {/* <IconArrowRight className="w-5 h-5" /> */}
                                </div>
                                <div className="p-4 rounded-lg font-mono flex items-center justify-between border-l-4" style={{ borderColor: PRIMARY_COLOR, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: TEXT_LIGHT }}>
                                    <span className="font-semibold">API Gateway & Dashboard</span>
                                    <span className="text-sm font-light" style={{ color: PRIMARY_COLOR }}>User Interface</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 8 — DOWNLOADABLE OUTPUTS
            ========================================================= */}
            <section id="outputs" className="py-20 md:py-28" style={{ backgroundColor: BG_DEEP_SLATE_GRAY, borderTop: `1px solid ${BG_CARD_GRAY}` }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: TEXT_LIGHT }}>
                        ESG & Compliance Reporting Made Easy
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {downloadableOutputs.map((output, index) => (
                            <div key={index} className="flex items-start p-5 rounded-xl shadow-lg border-l-4 hover:shadow-xl transition-shadow duration-200" style={{ backgroundColor: BG_CARD_GRAY, borderColor: PRIMARY_COLOR }}>
                                <IconFileText className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: ACCENT_COLOR }} />
                                <span className="text-lg font-medium" style={{ color: TEXT_LIGHT }}>{output}</span>
                            </div>
                        ))}
                    </div>

                    {/* <div className="text-center mt-12">
                        <a 
                            href="/sample-report.pdf" 
                            className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-2xl"
                            style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download Sample Report 
                            <IconArrowRight className="w-5 h-5 ml-2" />
                        </a>
                    </div> */}
                </div>
            </section>

            {/* =========================================================
               SECTION 9 — WHY GREENVISION MATTERS
            ========================================================= */}
            <section id="trust" className="py-20 md:py-28 lg:py-36" style={{ backgroundColor: BG_DEEP_SLATE_GRAY }}>
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_LIGHT }}>
                        Transparency <span style={{ color: ACCENT_COLOR }}>Builds Trust</span>
                    </h2>
                    <p className="text-xl leading-relaxed mb-6" style={{ color: TEXT_MUTED }}>
                        GreenVision eliminates guesswork.
                    </p>
                    <p className="text-2xl font-semibold leading-relaxed mb-8 border-b-2 border-t-2 py-4" style={{ color: TEXT_LIGHT, borderColor: PRIMARY_COLOR }}>
                        Every claim — fuel savings, CO₂ reduction, emission impact — is supported by clean, timestamped, tamper-proof data.
                    </p>
                    <p className="text-xl leading-relaxed" style={{ color: TEXT_MUTED }}>
                        For enterprises, regulators and global partners, GreenVision becomes the verifiable proof behind Saarthi’s hydrogen retrofit technology.
                    </p>
                </div>
            </section>

            {/* =========================================================
               SECTION 10 — CTA SECTION (Final)
            ========================================================= */}
            <section id="cta-final" className="py-20 md:py-28" style={{ backgroundColor: PRIMARY_COLOR }}>
                <div className="container mx-auto px-4 max-w-5xl text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Experience GreenVision in Action
                    </h2>
                    <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                        Request a demo or view a real sample dashboard.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="/request-demo" 
                            className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full shadow-xl transition-all duration-300 transform hover:scale-[1.05] bg-white text-gray-900 hover:bg-gray-100"
                        >
                            Request Demo
                        </a>
                        {/* <a 
                            href="#dashboard" 
                            className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            View Dashboard Samples
                        </a> */}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default GreenVisionPage;