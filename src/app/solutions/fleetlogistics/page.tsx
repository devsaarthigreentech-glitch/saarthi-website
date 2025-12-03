'use client';

import React from 'react';

// --- THEME COLOR VARIABLES (Updated for Light Theme) ---
// Background: Near White / Light Gray
const BG_LIGHT = "var(--bg-light, #f8f9fa)";
// Card/Section Background: Pure White or slightly lighter than main background
const BG_CARD_LIGHT = "var(--bg-card-light, #ffffff)";
// Primary Feature Color (Saarthi Green)
const PRIMARY_COLOR = "var(--primary-saarthi, #10B981)"; // Tailwind Green-500
// Text color: Dark Slate Gray (Primary Text)
const TEXT_DARK = "var(--text-dark, #212529)";
// Muted Text color: Standard Gray
const TEXT_MUTED = "var(--text-muted, #495057)";

// --- INLINE SVG ICON COMPONENTS ---
const IconTruck = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M5 18H3c-1.1 0-2-.9-2-2V9a2 2 0 0 1 2-2h3l2-2h4l2 2h3a2 2 0 0 1 2 2v7c0 1.1-.9 2-2 2h-2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
        <path d="M10 7h4" />
        <path d="M10 10h4" />
    </svg>
);

const IconGauge = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="m12 14 4-4" />
        <path d="M3.34 19A10 10 0 1 1 20.7 19" />
        <path d="M16.7 17.5a2.9 2.9 0 0 0-4.6 0" />
    </svg>
);

const IconZap = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.44a2 2 0 0 1-.44 2h-.44a2 2 0 0 0-2 2v.44a2 2 0 0 1-2 .44h-.44a2 2 0 0 0-2 2v.44a2 2 0 0 1 2 .44h.44a2 2 0 0 0 2 2v.44a2 2 0 0 1 .44 2h.44a2 2 0 0 0 2 2v.44a2 2 0 0 1 .44 2h.44a2 2 0 0 0 2 2v.44a2 2 0 0 1 2 .44h.44a2 2 0 0 0 2 2v.44a2 2 0 0 1 2 .44h.44a2 2 0 0 0 2-2v-.44a2 2 0 0 1 .44-2h.44a2 2 0 0 0 2-2v-.44a2 2 0 0 1 2-.44h.44a2 2 0 0 0 2-2v-.44a2 2 0 0 1-2-.44h-.44a2 2 0 0 0-2-2v-.44a2 2 0 0 1-.44-2h-.44a2 2 0 0 0-2-2v-.44a2 2 0 0 1-.44-2h-.44a2 2 0 0 0-2-2v-.44a2 2 0 0 1-.44-2z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const IconArrowRight = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

// Helper component for the Intro Bullets
interface IntroBulletProps {
    text: string;
}
const IntroBullet: React.FC<IntroBulletProps> = ({ text }) => (
    <li className="flex items-start text-lg" style={{ color: TEXT_DARK }}>
        <IconCheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
        {text}
    </li>
);

// Helper component for the Core Solution Benefits
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

// Helper component for the Installation Steps
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

// Helper component for the Client Image with Fallback
const ClientImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    
    const [imgSrc, setImgSrc] = React.useState(src);
    // Fallback color matches the primary green accent, but with dark text for visibility on light bg
    const fallbackSrc = "https://placehold.co/800x450/10B981/212529?text=Fleet+Truck+Retrofit+Diagram"; 

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

const FleetSolutionsPage = () => {

    const heroImageUrl = "/images/greenlabs/products/greendrive-fleet.png"; // Placeholder for a truck image
    const systemDiagramUrl = "/images/solutions/retrofit-demo.jpeg"; // Placeholder for an engine diagram
    
    const introBullets = [
        "Works on existing diesel engines",
        "Improves km/l across duty cycles",
        "Verified via real-time data",
        "Savings validated through GreenVision",
        "Zero CapEx option available via DaaS",
    ];

    const benefits = [
        { icon: <IconPercent className="w-6 h-6" />, title: "Improved Fuel Economy", description: "10–25% improvement in km/l (duty cycle dependent) achieved through cleaner, more complete diesel combustion." },
        { icon: <IconLeaf className="w-6 h-6" />, title: "Reduced Emissions", description: "Significantly lower PM, CO, and HC emissions, reducing your fleet's carbon footprint and urban pollution." },
        { icon: <IconTruck className="w-6 h-6" />, title: "Enhanced Performance", description: "Reduced soot formation (cleaner engine internals) and improved throttle response for smoother, more stable operation." },
    ];
    
    const systemSteps = [
        { step: 1, title: "Hydrogen Generated On-Demand", description: "No high-pressure storage. Safe wet electrolyser generates H-Oxy gas only when the engine is running." },
        { step: 2, title: "Optimised H-Oxy Injection", description: "A controlled volume of gas is infused into the air intake, precisely adjusted based on engine load and RPM via the ECU." },
        { step: 3, title: "Cleaner Combustion", description: "Hydrogen acts as a combustion catalyst, making diesel burn more efficiently and completely, leaving minimal soot." },
        { step: 4, title: "Real-Time Verification", description: "GreenVision telematics measures pre- and post-retrofit fuel consumption, validating savings and CO₂ reduction instantly." },
    ];
    
    const deliveryModels = [
        {
            title: "A. CapEx Purchase (Own the System)",
            description: "A single, one-time payment for the hardware installation. Includes GreenVision monitoring and a standard 12/24-month warranty.",
            features: ["One-time cost", "Hardware ownership", "Standard warranty", "Full GreenVision monitoring"]
        },
        {
            title: "B. DaaS — Decarbonisation-as-a-Service",
            description: "Zero CapEx. You pay a monthly fee that is less than your guaranteed monthly fuel savings. Saarthi handles everything.",
            features: ["Zero CapEx", "Monthly fee < monthly fuel savings", "All maintenance & spares included", "Guaranteed performance & savings verification"]
        },
    ];
    
    const supportedEngines = [
        "BS-III to BS-VI",
        "4-16L displacement",
        "Tata, Leyland, BharatBenz",
        "Volvo, Scania, and more",
    ];

    const safetyFeatures = [
        "No high-pressure hydrogen storage",
        "Auto shutdown on anomaly (temp, flow)",
        "Engine-load-based control system",
        "Automotive-grade wiring & enclosures",
    ];
    
    const ecosystemLoop = [
        "GreenMentor: Assess fleet & duty cycles",
        "GreenLabs: Install GreenDrive™ hydrogen system",
        "GreenVision: Verify km/l & CO₂ reduction in real-time",
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
                        Fleets & Logistics — Hydrogen Retrofit Solutions
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light text-gray-200">
                        Improve fuel efficiency, reduce emissions and enhance engine performance across trucks and buses—without replacing your fleet.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="#solution-details" 
                            className="px-8 py-3 font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.05] hover:shadow-2xl"
                            style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}
                        >
                            Explore Retrofit Options
                        </a>
                        {/* <a 
                            href="/contact-assessment" 
                            className="px-8 py-3 font-semibold rounded-full border border-gray-400 hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-[1.05] text-white"
                        >
                            Request Fleet Assessment
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
                            Decarbonising Fleets Without Replacing the Fleet
                        </h2>
                        <p className="text-lg leading-relaxed mb-6" style={{ color: TEXT_MUTED }}>
                            Saarthi’s hydrogen-diesel hybrid retrofit solution, powered by GreenLabs engineering and verified by GreenVision telemetry, helps fleet operators achieve measurable fuel savings and emission reductions.
                        </p>
                        <p className="text-lg leading-relaxed mb-10 font-semibold" style={{ color: TEXT_MUTED }}>
                            Ideal for long-haul trucks, city buses, staff transportation fleets and last-mile commercial vehicles.
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
               SECTION 3 — CORE SOLUTION: GREENDRIVE™
            ========================================================= */}
            <section id="solution-details" className="py-20 md:py-28 lg:py-36" style={{ backgroundColor: BG_LIGHT }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: TEXT_DARK }}>
                        GreenDrive™ — Hydrogen Retrofit for Trucks & Buses
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {benefits.map((benefit, index) => (
                            <BenefitCard key={index} {...benefit} />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 rounded-xl shadow-lg" style={{ backgroundColor: BG_CARD_LIGHT, border: `1px solid #e9ecef` }}>
                        <div>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Key Benefits:</h3>
                            <p className="text-md mb-6" style={{ color: TEXT_MUTED }}>
                                GreenDrive™ injects controlled volumes of hydrogen-oxygen (H-Oxy) into the combustion chamber, enabling cleaner, more efficient burning of diesel.
                            </p>
                            <ul className="space-y-3 mb-8" style={{ color: TEXT_DARK }}>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: PRIMARY_COLOR }} /> 10–25% improvement in km/l (duty cycle dependent)</li>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: PRIMARY_COLOR }} /> Reduced soot formation (cleaner engine internals)</li>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: PRIMARY_COLOR }} /> Lower PM, CO, HC emissions</li>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: PRIMARY_COLOR }} /> Improved throttle response & smoother performance</li>
                                <li className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: PRIMARY_COLOR }} /> Consistent performance on highways & mixed-road conditions</li>
                            </ul>
                            
                            <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Supported Vehicles:</h3>
                            <div className="grid grid-cols-2 gap-y-3" style={{ color: TEXT_MUTED }}>
                                <p>14T–55T trucks</p>
                                <p>City & intercity buses</p>
                                <p>School/staff transport buses</p>
                                <p>Light commercial vehicles</p>
                                <p>Refrigerated trucks</p>
                                <p>Multi-axle trailers</p>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-gray-200">
                            {/* Diagram of GreenDrive system installation on a truck engine */}
                            <ClientImage 
                                src={systemDiagramUrl} 
                                alt="GreenDrive hydrogen retrofit system diagram" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    
                    {/* <div className="text-center mt-12">
                        <a 
                            href="/greendrive-details" 
                            className="inline-flex items-center text-lg font-bold transition-colors group"
                            style={{ color: PRIMARY_COLOR }}
                        >
                            Learn More About GreenDrive 
                            <IconArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div> */}
                </div>
            </section>
            
            {/* =========================================================
               SECTION 4 — HOW THE SYSTEM WORKS
            ========================================================= */}
            <section id="how-it-works" className="py-20 md:py-28" style={{ backgroundColor: BG_LIGHT, borderTop: `1px solid #e9ecef` }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: TEXT_DARK }}>
                        Hydrogen Integration Designed for Fleet Realities
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {systemSteps.map((step, index) => (
                            <InstallationStep key={index} {...step} />
                        ))}
                    </div>
                    
                    <div className="text-center mt-12 p-6 rounded-xl border border-dashed shadow-md" style={{ borderColor: PRIMARY_COLOR, backgroundColor: BG_CARD_LIGHT }}>
                        <h4 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>System Flow:</h4>
                        <p className="text-lg font-mono" style={{ color: TEXT_DARK }}>
                            Electrolyser <IconArrowRight className="w-4 h-4 inline-block mx-2" style={{ color: TEXT_MUTED }}/> Injection Module <IconArrowRight className="w-4 h-4 inline-block mx-2" style={{ color: TEXT_MUTED }}/> Engine Combustion <IconArrowRight className="w-4 h-4 inline-block mx-2" style={{ color: TEXT_MUTED }}/> GreenVision Data
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 5 — REAL-WORLD SAVINGS (DATA PREVIEW)
            ========================================================= */}
            <section id="savings-data" className="py-20 md:py-28 lg:py-36" style={{ backgroundColor: BG_LIGHT }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_DARK }}>
                                Verified Gains Across Different Duty Cycles
                            </h2>
                            <p className="text-lg mb-4" style={{ color: TEXT_MUTED }}>
                                Savings depend on terrain, load, idle ratio and driving patterns. GreenVision provides real-time measurement and verification (M&V) on your specific fleet.
                            </p>
                            
                            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: PRIMARY_COLOR }}>Sample Observations:</h3>
                            <div className="space-y-4 p-6 rounded-xl shadow-lg border-l-4" style={{ borderColor: PRIMARY_COLOR, backgroundColor: BG_CARD_LIGHT, border: `1px solid #e9ecef` }}>
                                <p className="text-lg font-semibold" style={{ color: TEXT_DARK }}>
                                    <IconGauge className="w-5 h-5 inline-block mr-2" style={{ color: PRIMARY_COLOR }} /> Long highway routes: <span className="font-extrabold" style={{ color: PRIMARY_COLOR }}>5–20% fuel savings</span>
                                </p>
                                <p className="text-lg font-semibold" style={{ color: TEXT_DARK }}>
                                    <IconGauge className="w-5 h-5 inline-block mr-2" style={{ color: PRIMARY_COLOR }} /> Mixed city-highway: <span className="font-extrabold" style={{ color: PRIMARY_COLOR }}>6–15% fuel savings</span>
                                </p>
                                <p className="text-lg font-semibold" style={{ color: TEXT_DARK }}>
                                    <IconGauge className="w-5 h-5 inline-block mr-2" style={{ color: PRIMARY_COLOR }} /> High-idle vehicles: <span className="font-extrabold" style={{ color: PRIMARY_COLOR }}>8–20% fuel savings</span>
                                </p>
                                <p className="text-base italic pt-2" style={{ color: TEXT_MUTED }}>
                                    Cleaner combustion leads to lower soot accumulation and more stable engine performance.
                                </p>
                            </div>
                        </div>
                        
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-gray-200">
                            {/* Placeholder for an actual data chart from GreenVision */}
                            <ClientImage 
                                src="/images/solutions/gvchart.png" 
                                alt="Sample fuel savings chart from GreenVision"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    
                    {/* <div className="text-center mt-12">
                        <a 
                            href="/evidence-hub/case-studies" 
                            className="inline-flex items-center text-lg font-bold transition-colors group"
                            style={{ color: PRIMARY_COLOR }}
                        >
                            See Full Fleet Case Studies 
                            <IconArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div> */}
                </div>
            </section>
            
            {/* =========================================================
               SECTION 6 — EMISSION IMPACT
            ========================================================= */}
            <section id="emission-impact" className="py-20 md:py-28" style={{ backgroundColor: BG_LIGHT, borderTop: `1px solid #e9ecef` }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_DARK }}>
                                Cleaner Combustion = Lower Emissions
                            </h2>
                            <p className="text-lg mb-8" style={{ color: TEXT_MUTED }}>
                                Hydrogen-enriched combustion reduces soot and unburnt hydrocarbons, lowering PM and CO levels significantly, improving air quality, and meeting compliance goals.
                            </p>
                            {/* <a 
                                href="/evidence-hub/emission-reports" 
                                className="inline-flex items-center text-lg font-bold transition-colors group"
                                style={{ color: PRIMARY_COLOR }}
                            >
                                Visit the Evidence Hub → Emission Reports
                                <IconArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </a> */}
                        </div>
                        
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 rounded-xl shadow-lg border-l-4" style={{ backgroundColor: BG_CARD_LIGHT, borderColor: PRIMARY_COLOR, border: `1px solid #e9ecef` }}>
                                    <IconLeaf className="w-10 h-10 mb-3" style={{ color: PRIMARY_COLOR }} />
                                    <h3 className="text-4xl font-extrabold mb-1" style={{ color: PRIMARY_COLOR }}>40–90%</h3>
                                    <p className="text-lg font-semibold" style={{ color: TEXT_DARK }}>Particulate Matter (PM) Reduced</p>
                                </div>
                                <div className="p-6 rounded-xl shadow-lg border-l-4" style={{ backgroundColor: BG_CARD_LIGHT, borderColor: PRIMARY_COLOR, border: `1px solid #e9ecef` }}>
                                    <IconLeaf className="w-10 h-10 mb-3" style={{ color: PRIMARY_COLOR }} />
                                    <h3 className="text-4xl font-extrabold mb-1" style={{ color: PRIMARY_COLOR }}>Significant</h3>
                                    <p className="text-lg font-semibold" style={{ color: TEXT_DARK }}>CO & HC Reduction Observed</p>
                                </div>
                            </div>
                            <p className="text-sm italic mt-4" style={{ color: TEXT_MUTED }}>
                                *Observed reductions based on certified DG set and on-road test results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* =========================================================
               SECTION 7 — DELIVERY MODELS
            ========================================================= */}
            <section id="delivery-models" className="py-20 md:py-28 lg:py-36" style={{ backgroundColor: BG_LIGHT }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: TEXT_DARK }}>
                        Choose How You Want to Deploy
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {deliveryModels.map((model, index) => (
                            <div key={index} className="p-8 rounded-xl shadow-xl flex flex-col h-full border border-gray-200" style={{ backgroundColor: BG_CARD_LIGHT, borderLeft: `6px solid ${PRIMARY_COLOR}` }}>
                                <h3 className="text-2xl font-extrabold mb-4" style={{ color: PRIMARY_COLOR }}>{model.title}</h3>
                                <p className="text-lg mb-6 flex-grow" style={{ color: TEXT_MUTED }}>{model.description}</p>
                                
                                <ul className="space-y-3 pt-4 border-t border-gray-100">
                                    {model.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start" style={{ color: TEXT_DARK }}>
                                            <IconCheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: PRIMARY_COLOR }} /> 
                                            <span className='font-semibold'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* <div className="text-center mt-12">
                        <a 
                            href="/daas-vs-capex" 
                            className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                            style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}
                        >
                            Compare CapEx vs DaaS
                        </a>
                    </div> */}
                </div>
            </section>

            {/* =========================================================
               SECTION 8 — SAFETY & RELIABILITY
            ========================================================= */}
            <section id="safety" className="py-20 md:py-28" style={{ backgroundColor: BG_LIGHT, borderTop: `1px solid #e9ecef` }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: TEXT_DARK }}>
                        Fleet-Proven, Safe and Certified
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1 p-6 rounded-xl shadow-lg border-l-4 border-gray-200" style={{ backgroundColor: BG_CARD_LIGHT, borderColor: PRIMARY_COLOR }}>
                            <IconShield className="w-10 h-10 mb-4" style={{ color: PRIMARY_COLOR }} />
                            <h3 className="text-xl font-bold mb-3" style={{ color: TEXT_DARK }}>Certified By:</h3>
                            <p className="text-lg font-semibold" style={{ color: PRIMARY_COLOR }}>CE • UL • ROHS • EMC • ISO 9001</p>
                        </div>
                        
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Integrated Safety Features:</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {safetyFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start text-lg" style={{ color: TEXT_MUTED }}>
                                        <IconCheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {/* <div className="text-center mt-12">
                        <a 
                            href="/certifications" 
                            className="inline-flex items-center text-lg font-bold transition-colors group"
                            style={{ color: PRIMARY_COLOR }}
                        >
                            View Certifications
                            <IconArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div> */}
                </div>
            </section>

            {/* =========================================================
               SECTION 9 — COMPATIBILITY & INSTALLATION
            ========================================================= */}
            <section id="compatibility" className="py-20 md:py-28 lg:py-36" style={{ backgroundColor: BG_LIGHT }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_DARK }}>
                                Compatible With Most Diesel Engines
                            </h2>
                            <p className="text-lg mb-8" style={{ color: TEXT_MUTED }}>
                                Our system is designed for broad compatibility, allowing fast, non-invasive installation on most heavy-duty diesel platforms.
                            </p>
                            
                            <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Supported Engines:</h3>
                            <ul className="grid grid-cols-2 gap-4 mb-10">
                                {supportedEngines.map((engine, index) => (
                                    <li key={index} className="flex items-center text-lg" style={{ color: TEXT_DARK }}>
                                        <IconSettings className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: PRIMARY_COLOR }} /> {engine}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="p-8 rounded-xl shadow-xl border-l-4 border-gray-200" style={{ backgroundColor: BG_CARD_LIGHT, borderLeft: `6px solid ${PRIMARY_COLOR}` }}>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Installation Details:</h3>
                            <div className="space-y-4">
                                <div className="p-3 rounded-lg border-b border-gray-100" style={{ color: TEXT_DARK }}>
                                    <p className="font-bold">Installation Time:</p>
                                    <p className="text-xl font-extrabold" style={{ color: PRIMARY_COLOR }}>4-6 hours per vehicle</p>
                                    <p className="text-sm" style={{ color: TEXT_MUTED }}>Minimal downtime ensures fleet operational continuity.</p>
                                </div>
                                <div className="p-3 rounded-lg" style={{ color: TEXT_DARK }}>
                                    <p className="font-bold">Technicians:</p>
                                    <p className="text-xl font-extrabold" style={{ color: PRIMARY_COLOR }}>Certified Saarthi Experts</p>
                                    <p className="text-sm" style={{ color: TEXT_MUTED }}>Installation is performed by our specialised, certified service team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 10 — HOW GREENMENTOR & GREENVISION SUPPORT FLEETS
            ========================================================= */}
            <section id="ecosystem-support" className="py-20 md:py-28" style={{ backgroundColor: BG_LIGHT, borderTop: `1px solid #e9ecef` }}>
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: TEXT_DARK }}>
                        The Complete Fleet Decarbonisation Loop
                    </h2>

                    <div className="flex flex-col md:flex-row items-stretch justify-center p-8 rounded-2xl shadow-2xl border border-gray-200" style={{ backgroundColor: BG_CARD_LIGHT }}>
                        {ecosystemLoop.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center text-center p-4">
                                    <div className="p-4 rounded-full mb-3 shadow-lg" style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}>
                                        {index === 0 && <IconGauge className="w-8 h-8" />}
                                        {index === 1 && <IconTruck className="w-8 h-8" />}
                                        {index === 2 && <IconZap className="w-8 h-8" />}
                                    </div>
                                    <p className="text-lg font-bold" style={{ color: TEXT_DARK }}>{item.split(":")[0]}</p>
                                    <p className="text-sm mt-1" style={{ color: TEXT_MUTED }}>{item.split(":")[1]}</p>
                                </div>
                                {index < ecosystemLoop.length - 1 && (
                                    <div className="flex items-center justify-center py-4 md:p-4">
                                        <IconArrowRight className="w-6 h-6 rotate-90 md:rotate-0" style={{ color: TEXT_MUTED }} />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    
                    <div className="text-center mt-12">
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
               SECTION 11 — CTA SECTION (Final)
            ========================================================= */}
            <section id="cta-final" className="py-20 md:py-28" style={{ backgroundColor: PRIMARY_COLOR }}>
                <div className="container mx-auto px-4 max-w-5xl text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Ready to Improve Fuel Efficiency Across Your Fleet?
                    </h2>
                    <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                        Share your routes, engine types and monthly diesel usage for a custom savings estimate.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* <a 
                            href="/request-retrofit-plan" 
                            className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full shadow-xl transition-all duration-300 transform hover:scale-[1.05] bg-white text-gray-900 hover:bg-gray-100"
                        >
                            Request Fleet Retrofit Plan
                        </a> */}
                        <a 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            Contact Fleet Solutions Specialist
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default FleetSolutionsPage;