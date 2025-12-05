'use client';

import React from 'react';

// --- THEME COLOR VARIABLES ---
const BG_LIGHT = "var(--bg-light, #f8f9fa)";
const BG_CARD_LIGHT = "var(--bg-card-light, #ffffff)";
const PRIMARY_COLOR = "var(--primary-saarthi, #10B981)";
const TEXT_DARK = "var(--text-dark, #212529)";
const TEXT_MUTED = "var(--text-muted, #495057)";

// --- INLINE SVG ICON COMPONENTS ---
const IconZap = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

const IconGauge = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="m12 14 4-4" />
        <path d="M3.34 19A10 10 0 1 1 20.7 19" />
        <path d="M16.7 17.5a2.9 2.9 0 0 0-4.6 0" />
    </svg>
);

const IconLeaf = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 20.3 8.2 22 12c-2.4 2.6-5.8 4-8.5 4a3.8 3.8 0 0 1-7.6 0c0-1.2.6-2.3 1.5-3.2" />
        <path d="M3.5 15.5a9.4 9.4 0 0 0 6.6 2.5 7.9 7.9 0 0 0 5-1.5" />
    </svg>
);

const IconCheckCircle = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
    </svg>
);

const IconPercent = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <line x1="19" x2="5" y1="5" y2="19" />
        <circle cx="6.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
);

const IconShield = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M20 13c0 5-3.5 7.5-7.6 9C6.5 20.5 3 18 3 13V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2z" />
    </svg>
);

const IconSettings = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.44a2 2 0 0 1-.44 2h-.44a2 2 0 0 0-2 2v.44a2 2 0 0 1-2 .44h-.44a2 2 0 0 0-2 2v.44a2 2 0 0 1 2 .44h.44a2 2 0 0 0 2 2v.44a2 2 0 0 1 .44 2h.44a2 2 0 0 0 2 2v.44a2 2 0 0 1 .44 2h.44a2 2 0 0 0 2 2v.44a2 2 0 0 1 2 .44h.44a2 2 0 0 0 2-2v-.44a2 2 0 0 1 .44-2h.44a2 2 0 0 0 2-2v-.44a2 2 0 0 1 2-.44h.44a2 2 0 0 0 2-2v-.44a2 2 0 0 1-2-.44h-.44a2 2 0 0 0-2-2v-.44a2 2 0 0 1-.44-2h-.44a2 2 0 0 0-2-2v-.44a2 2 0 0 1-.44-2z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const IconFactory = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1" />
        <path d="M12 18h1" />
        <path d="M7 18h1" />
    </svg>
);

const IconTruck = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M5 18H3c-1.1 0-2-.9-2-2V9a2 2 0 0 1 2-2h3l2-2h4l2 2h3a2 2 0 0 1 2 2v7c0 1.1-.9 2-2 2h-2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
        <path d="M10 7h4" />
        <path d="M10 10h4" />
    </svg>
);

const IconArrowRight = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

const IconClipboardList = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" />
        <path d="M12 15h4" />
        <path d="M8 11h.01" />
        <path d="M8 15h.01" />
    </svg>
);

const IconFlaskConical = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
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

// Helper component for Intro Bullets
interface IntroBulletProps {
    text: string;
}
const IntroBullet: React.FC<IntroBulletProps> = ({ text }) => (
    <li className="flex items-start text-lg" style={{ color: TEXT_DARK }}>
        <IconCheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
        {text}
    </li>
);

// Helper component for Benefit Cards
interface BenefitCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}
const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
    <div className="p-6 rounded-xl shadow-lg h-full flex flex-col transition-all duration-300 hover:scale-[1.02]" style={{ backgroundColor: BG_CARD_LIGHT, borderBottom: `4px solid ${PRIMARY_COLOR}`, border: `1px solid #e9ecef` }}>
        <div className="flex items-center mb-4">
            <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}>
                {icon}
            </div>
            <h3 className="text-xl font-bold ml-4" style={{ color: TEXT_DARK }}>{title}</h3>
        </div>
        <p style={{ color: TEXT_MUTED }}>{description}</p>
    </div>
);

// Helper component for Installation Steps
interface StepProps {
    step: number;
    title: string;
    description: string;
}
const InstallationStep: React.FC<StepProps> = ({ step, title, description }) => (
    <div className="flex items-start space-x-4 p-4 rounded-lg transition-colors duration-200 hover:bg-gray-100">
        <div className="text-2xl font-extrabold flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}>
            {step}
        </div>
        <div className="flex-grow">
            <h4 className="text-xl font-semibold mb-1" style={{ color: TEXT_DARK }}>{title}</h4>
            <p className="text-sm" style={{ color: TEXT_MUTED }}>{description}</p>
        </div>
    </div>
);

// Helper component for Client Image with Fallback
const ClientImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    const [imgSrc, setImgSrc] = React.useState(src);
    const fallbackSrc = "https://placehold.co/800x450/10B981/ffffff?text=DG+Set+Retrofit+System";

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
        }
    };
    
    return (
        <img 
            src={imgSrc} 
            alt={alt} 
            className={className || "w-full h-full object-cover"}
            onError={handleError}
        />
    );
};

const DGSetsIndustrialPowerPage = () => {

    const heroImageUrl = "/images/greenlabs/products/greenx.png";
    const systemDiagramUrl = "/images/solutions/greenx-demo.png";
    
    const introBullets = [
        "Works on existing DG sets (20-4000 kVA)",
        "2-15% fuel savings (load-dependent)",
        "Significant emission reductions",
        "Real-time GreenVision monitoring",
        "Zero CapEx option via DaaS",
    ];

    const benefits = [
        { icon: <IconPercent className="w-6 h-6" />, title: "Proven Fuel Savings", description: "2–15% reduction in diesel consumption, with highest gains at low-load operations. Verified through continuous telemetry." },
        { icon: <IconLeaf className="w-6 h-6" />, title: "Lower Emissions", description: "50–95% PM reduction, significant CO and HC cuts. Cleaner exhaust with improved combustion stability." },
        { icon: <IconGauge className="w-6 h-6" />, title: "Better Efficiency", description: "Improved kWh per litre performance, reduced soot loading, and lower maintenance requirements." },
    ];
    
    const systemSteps = [
        { step: 1, title: "Hydrogen Generated On-Demand", description: "Low-pressure wet electrolyser; no storage, no cylinders." },
        { step: 2, title: "Precise HHO Injection", description: "Proportional to DG load, voltage, and runtime." },
        { step: 3, title: "Cleaner, More Complete Combustion", description: "Diesel burns more fully, reducing soot and unburnt hydrocarbons." },
        { step: 4, title: "Real-Time Performance Tracking", description: "GreenVision verifies kWh/litre improvements & CO₂ reduction." },
    ];
    
    const applications = [
        "Factories & Industrial Plants",
        "Commercial Buildings",
        "Hospitals",
        "Hotels & IT Parks",
        "Remote Operations & Mining Sites",
        "Manufacturing & Process Industries",
        "Telecom DG rooms",
        "Ports, Warehouses & Logistics Parks",
    ];

    const industries = [
        "Manufacturing",
        "Pharma & Chemicals",
        "Hospitals & Healthcare",
        "Commercial Buildings",
        "IT Parks",
        "Hospitality",
        "Agriculture & Irrigation",
        "Construction",
        "Mining operations",
        "Ports & Maritime Facilities",
        "Telecom infrastructure",
    ];
    
    const deliveryModels = [
        {
            title: "A. CapEx Purchase",
            description: "Own the GreenX system with full control and long-term asset ownership.",
            features: [
                "One-time hardware purchase",
                "Full installation & commissioning",
                "Warranty & technical support",
                "GreenVision dashboard included"
            ]
        },
        {
            title: "B. DaaS - Decarbonisation-as-a-Service (Zero CapEx)",
            description: "Pay only a monthly fee lower than the fuel saved with zero upfront investment.",
            features: [
                "No upfront investment",
                "Saarthi handles installation, maintenance & spares",
                "Savings verified through GreenVision telemetry",
                "Perfect for multi-site industrial clients"
            ]
        },
    ];
    
    const compatibleBrands = [
        "Cummins",
        "Kirloskar",
        "Caterpillar",
        "Mahindra",
        "Volvo Penta",
        "Perkins",
        "MTU",
        "Greaves",
        "Scania",
    ];

    const safetyFeatures = [
        "No compressed hydrogen cylinders",
        "Auto-shutdown on anomaly",
        "High-temperature and low-water protection",
        "Anti-backflow control",
        "Engine-load–based monitoring logic",
        "Alternator-verified safety interlocks",
    ];
    
    const ecosystemLoop = [
        "GreenMentor: Assess DG load profiles",
        "GreenLabs: Install GreenX",
        "GreenVision: Verify kWh/litre & CO₂ reduction",
    ];

    return (
        <main className="min-h-screen font-inter" style={{ backgroundColor: BG_LIGHT, color: TEXT_DARK }}>

            {/* =========================================================
                SECTION 1 — HERO BANNER
            ========================================================= */}
            <section 
                id="hero-banner" 
                className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" 
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderBottom: `6px solid ${PRIMARY_COLOR}`
                }}
            >
                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight text-white" style={{ color: PRIMARY_COLOR }}>
                        DG Sets & Industrial Power — Hydrogen Retrofit Solutions
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light text-gray-200">
                        Reduce diesel consumption, lower emissions, and improve generator efficiency using Saarthi's hydrogen-diesel hybrid retrofit systems — verified through real-time telemetry and stack emission tests.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="#solution-details" 
                            className="px-8 py-3 font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.05] hover:shadow-2xl"
                            style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}
                        >
                            Explore DG Retrofit Options
                        </a>
                        {/* <a 
                            href="/contact-assessment" 
                            className="px-8 py-3 font-semibold rounded-full border border-gray-400 hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-[1.05] text-white"
                        >
                            Request Site Assessment
                        </a> */}
                    </div>
                </div>
            </section>

            {/* =========================================================
                SECTION 2 — INTRODUCTION
            ========================================================= */}
            <section id="introduction" className="py-20 md:py-28" style={{ backgroundColor: BG_LIGHT, borderBottom: `1px solid #e9ecef` }}>
                <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:pr-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_DARK }}>
                            Decarbonising Power Without Replacing DG Sets
                        </h2>
                        <p className="text-lg leading-relaxed mb-6" style={{ color: TEXT_MUTED }}>
                            Diesel generators power factories, buildings, hospitals, telecom towers, data centers, plantations, remote sites and critical industrial processes. Saarthi's hydrogen retrofit system enables cleaner, more efficient combustion — without modifying or replacing the existing DG set.
                        </p>
                        <p className="text-lg leading-relaxed mb-10 font-semibold" style={{ color: TEXT_MUTED }}>
                            Supported by GreenMentor advisory, engineered by GreenLabs, and verified through GreenVision telemetry.
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-4">
                            {introBullets.map((text, index) => (
                                <IntroBullet key={index} text={text} />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            
            {/* =========================================================
                SECTION 3 — CORE SOLUTION: GREENGEN™ / GREENX™
            ========================================================= */}
            <section id="solution-details" className="py-20 md:py-28 lg:py-36" style={{ backgroundColor: BG_LIGHT }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: TEXT_DARK }}>
                        GreenX™ — Hydrogen Retrofit for DG Sets
                    </h2>
                    
                    <div className="mb-12 text-center max-w-4xl mx-auto">
                        <p className="text-lg leading-relaxed" style={{ color: TEXT_MUTED }}>
                            A modular hydrogen-diesel hybrid retrofit designed for DG sets ranging from <span className="font-bold" style={{ color: PRIMARY_COLOR }}>20 kVA to 4000 kVA</span>. Engineered to integrate with the alternator load profile, operational runtime and fuel patterns of industrial use.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {benefits.map((benefit, index) => (
                            <BenefitCard key={index} {...benefit} />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 rounded-xl shadow-lg" style={{ backgroundColor: BG_CARD_LIGHT, border: `1px solid #e9ecef` }}>
                        <div>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Key Benefits:</h3>
                            <ul className="space-y-3 mb-8" style={{ color: TEXT_DARK }}>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: PRIMARY_COLOR }} /> Proven 2–15% fuel savings (load-dependent)</li>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: PRIMARY_COLOR }} /> Significant reduction in CO, HC and PM emissions</li>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: PRIMARY_COLOR }} /> Improved kWh per litre efficiency</li>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: PRIMARY_COLOR }} /> Lower soot loading → reduced maintenance</li>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: PRIMARY_COLOR }} /> Continuous GreenVision monitoring</li>
                            </ul>
                            
                            <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Supported Applications:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3" style={{ color: TEXT_MUTED }}>
                                {applications.map((app, index) => (
                                    <p key={index} className="flex items-start">
                                        <span className="mr-2" style={{ color: PRIMARY_COLOR }}>•</span> {app}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-gray-200">
                            <ClientImage 
                                src={systemDiagramUrl} 
                                alt="GreenX hydrogen retrofit system diagram" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    
                    <div className="text-center mt-12">
                        <a 
                            href="/products/greenx" 
                            className="inline-flex items-center text-lg font-bold transition-colors group"
                            style={{ color: PRIMARY_COLOR }}
                        >
                            Learn About GreenX
                            <IconArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </section>
            
            {/* =========================================================
                SECTION 4 — HOW IT WORKS
            ========================================================= */}
            <section id="how-it-works" className="py-20 md:py-28" style={{ backgroundColor: BG_LIGHT, borderTop: `1px solid #e9ecef` }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: TEXT_DARK }}>
                        Hydrogen-Enabled Cleaner Combustion for DG Sets
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {systemSteps.map((step, index) => (
                            <InstallationStep key={index} {...step} />
                        ))}
                    </div>
                    
                    <div className="text-center mt-12 p-6 rounded-xl border border-dashed shadow-md" style={{ borderColor: PRIMARY_COLOR, backgroundColor: BG_CARD_LIGHT }}>
                        <h4 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>System Flow:</h4>
                        <p className="text-lg font-mono" style={{ color: TEXT_DARK }}>
                            Electrolyser <IconArrowRight className="w-4 h-4 inline-block mx-2" style={{ color: TEXT_MUTED }}/> Injection System <IconArrowRight className="w-4 h-4 inline-block mx-2" style={{ color: TEXT_MUTED }}/> DG Engine <IconArrowRight className="w-4 h-4 inline-block mx-2" style={{ color: TEXT_MUTED }}/> Alternator <IconArrowRight className="w-4 h-4 inline-block mx-2" style={{ color: TEXT_MUTED }}/> GreenVision
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================================
                SECTION 5 — VERIFIED RESULTS (Continuation from user input)
            ========================================================= */}
            <section id="verified-results" className="py-20 md:py-28 lg:py-36" style={{ backgroundColor: BG_LIGHT }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_DARK }}>
                                Backed by Real Emission Tests & <span style={{ color: PRIMARY_COLOR }}>Telemetry</span>
                            </h2>
                            <p className="text-lg leading-relaxed mb-6" style={{ color: TEXT_MUTED }}>
                                Our commitment to decarbonisation is validated by GreenVision, our proprietary IoT platform, which provides continuous, tamper-proof tracking of key performance indicators.
                            </p>
                            
                            <div className="space-y-4 mb-8">
                                <div className="p-4 rounded-lg flex items-start" style={{ backgroundColor: BG_CARD_LIGHT, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                                    <IconFlaskConical className="w-6 h-6 flex-shrink-0 mr-4 mt-1" style={{ color: PRIMARY_COLOR }} />
                                    <div>
                                        <h4 className="font-semibold text-lg" style={{ color: TEXT_DARK }}>Verified Stack Emission Reduction</h4>
                                        <p className="text-sm" style={{ color: TEXT_MUTED }}>Independent third-party verification confirms substantial reduction in Particulate Matter (PM) up to 95%, and significant cuts in CO and unburnt Hydrocarbons (HC).  </p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-lg flex items-start" style={{ backgroundColor: BG_CARD_LIGHT, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                                    <IconClipboardList className="w-6 h-6 flex-shrink-0 mr-4 mt-1" style={{ color: PRIMARY_COLOR }} />
                                    <div>
                                        <h4 className="font-semibold text-lg" style={{ color: TEXT_DARK }}>Continuous Data Assurance (GreenVision)</h4>
                                        <p className="text-sm" style={{ color: TEXT_MUTED }}>Real-time dashboard tracks fuel consumption, kVA load, run hours, kWh/litre efficiency, and calculated CO₂ reduction, giving you auditable sustainability data.</p>
                                    </div>
                                </div>
                            </div>

                            <a 
                                href="/casestudies" 
                                className="inline-flex items-center text-md font-semibold transition-colors group"
                                style={{ color: PRIMARY_COLOR }}
                            >
                                View Case Studies and Reports
                                <IconArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                        
                        <div className="p-8 rounded-xl shadow-2xl" style={{ backgroundColor: BG_CARD_LIGHT, border: `1px solid ${PRIMARY_COLOR}` }}>
                            <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: TEXT_DARK }}>Saarthi's Ecosystem: Continuous Improvement</h3>
                            <ul className="space-y-4">
                                {ecosystemLoop.map((item, index) => (
                                    <li key={index} className="flex items-center p-3 rounded-lg border-l-4" style={{ borderColor: PRIMARY_COLOR, backgroundColor: BG_LIGHT }}>
                                        <IconZap className="w-6 h-6 flex-shrink-0 mr-4" style={{ color: PRIMARY_COLOR }} />
                                        <span className="font-medium" style={{ color: TEXT_DARK }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 text-center text-sm" style={{ color: TEXT_MUTED }}>
                                This closed-loop system ensures optimal performance and verifiable carbon reduction throughout the asset's lifecycle.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* =========================================================
                SECTION 6 — DEPLOYMENT & SAFETY
            ========================================================= */}
            <section id="deployment-models" className="py-20 md:py-28" style={{ backgroundColor: BG_LIGHT, borderTop: `1px solid #e9ecef` }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: TEXT_DARK }}>
                        Flexible Deployment and Industrial-Grade Safety
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        
                        {/* Deployment Models */}
                        <div className="lg:col-span-2">
                            <h3 className="text-3xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>Choose Your Model</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {deliveryModels.map((model, index) => (
                                    <div key={index} className="p-6 rounded-xl shadow-lg h-full border-t-8 transition-shadow duration-300 hover:shadow-2xl" style={{ backgroundColor: BG_CARD_LIGHT, borderTopColor: PRIMARY_COLOR }}>
                                        <h4 className="text-xl font-bold mb-3" style={{ color: TEXT_DARK }}>{model.title}</h4>
                                        <p className="mb-4 text-sm" style={{ color: TEXT_MUTED }}>{model.description}</p>
                                        <ul className="space-y-2 text-sm" style={{ color: TEXT_DARK }}>
                                            {model.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center">
                                                    <IconCheckCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Safety Features */}
                        <div className="lg:col-span-1">
                            <div className="p-6 rounded-xl shadow-xl h-full" style={{ backgroundColor: BG_CARD_LIGHT, border: `2px solid #ced4da` }}>
                                <div className="flex items-center mb-4">
                                    <IconShield className="w-8 h-8 mr-3" style={{ color: PRIMARY_COLOR }} />
                                    <h3 className="text-2xl font-bold" style={{ color: TEXT_DARK }}>Inherent Safety</h3>
                                </div>
                                <p className="text-sm mb-4" style={{ color: TEXT_MUTED }}>Engineered for industrial environments, our systems prioritize safety through design and comprehensive electronic controls.</p>
                                <ul className="space-y-3">
                                    {safetyFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start text-sm" style={{ color: TEXT_DARK }}>
                                            <span className="text-xl mr-2 leading-none" style={{ color: PRIMARY_COLOR }}>&bull;</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                SECTION 7 — COMPATIBILITY AND CTA
            ========================================================= */}
            <section id="compatibility" className="py-20 md:py-28 bg-white" style={{ backgroundColor: BG_CARD_LIGHT }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_DARK }}>
                                Universal Compatibility with Major DG Brands
                            </h2>
                            <p className="text-lg leading-relaxed mb-8" style={{ color: TEXT_MUTED }}>
                                The GreenGen system is a non-invasive, bolt-on solution that is successfully installed and operating on DG sets across all major brands and engine types (DI/IDI, mechanical/electronic).
                            </p>

                            <div className="grid grid-cols-3 gap-4">
                                {compatibleBrands.map((brand, index) => (
                                    <div key={index} className="p-3 bg-gray-100 rounded-lg text-center font-semibold text-sm shadow-sm" style={{ color: TEXT_DARK }}>
                                        {brand}
                                    </div>
                                ))}
                                <div className="p-3 rounded-lg text-center font-bold text-sm" style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}>
                                    & many more...
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Industries Served</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-sm" style={{ color: TEXT_MUTED }}>
                                    {industries.map((industry, index) => (
                                        <p key={index} className="flex items-center">
                                            <IconFactory className="w-4 h-4 mr-2" style={{ color: PRIMARY_COLOR }} />
                                            {industry}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Final CTA */}
                        <div className="p-8 md:p-12 rounded-xl shadow-2xl text-center" style={{ backgroundColor: PRIMARY_COLOR }}>
                            <IconZap className="w-12 h-12 mx-auto mb-4 text-white" />
                            <h3 className="text-3xl font-extrabold mb-4 text-white">
                                Start Your Decarbonisation Journey Today
                            </h3>
                            <p className="text-lg text-gray-100 mb-8">
                                Get a free site assessment and a detailed ROI projection based on your specific DG set usage profile.
                            </p>
                            <a 
                                href="/resources/calculators" 
                                className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.05]"
                                style={{ backgroundColor: BG_CARD_LIGHT, color: PRIMARY_COLOR }}
                            >
                                Request Detailed Proposal
                                <IconArrowRight className="w-5 h-5 ml-2" style={{ color: PRIMARY_COLOR }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default DGSetsIndustrialPowerPage;