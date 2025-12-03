import React from 'react';

// --- COLOR VARIABLES ---
// Updated to use a Green/Emerald theme for GreenLabs (Engineering/Manufacturing)
const BRAND_COLOR = "var(--brand-labs, #047857)"; // Dark Emerald Green
const ACCENT_COLOR = "var(--accent-labs, #10B981)"; // Bright Emerald Green

// --- INLINE SVG ICON COMPONENTS (replacing lucide-react) ---

const IconArrowRight = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

const IconCheckCircle = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
    </svg>
);

const IconSettings = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.39a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.73v.54a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.22.39a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.73v-.54a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2-0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const IconFactory = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3l-2-2H9L7 6H4a2 2 0 0 0-2 2Z" />
        <path d="M4 10h16" />
        <path d="M10 22V10" />
        <path d="M14 22V10" />
        <path d="M12 2v4" />
    </svg>
);

const IconDollarSign = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
);

const IconPackage = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <line x1="12" x2="12" y1="12" y2="22" />
    </svg>
);

const IconTruck = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <path d="M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <path d="M5 17H3V6h10l2 2h3l2 2v7h-2M9 18h6" />
    </svg>
);

const IconGauge = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="m12 14 4-4" />
        <path d="M3.34 19A10 10 0 1 1 20.7 19" />
        <path d="M16.7 17.5a2.9 2.9 0 0 0-4.6 0" />
    </svg>
);

const IconShipWheel = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
        <path d="M4.9 7.7a.2.2 0 0 1-.2-.1L4 7.2a.2.2 0 0 1-.1-.2.2.2 0 0 1 0-.2L4.6 6a.2.2 0 0 1 .2-.1.2.2 0 0 1 .2.1l.7.3a.2.2 0 0 1 .1.2c0 .1 0 .2-.1.2L5 7.7Z" />
        <path d="M12 2v20" />
        <path d="M22 12H2" />
        <path d="m16 16-3.8-3.8" />
        <path d="m8 8 3.8 3.8" />
    </svg>
);

const IconExcavator = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M17 19H7a4 4 0 0 1-4-4V6h10.5l4.5 4.5v4.5a4 4 0 0 1-4 4Z" />
        <path d="M17 19 22 21" />
        <path d="M17 19H12" />
        <path d="M12 10V6" />
        <path d="M12 6H5.5" />
        <path d="M10 15h7a3 3 0 0 0 3-3V6" />
        <path d="M8 15h4" />
        <path d="M17 15H9" />
    </svg>
);

const IconAward = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 10.15 15.83 14.85 11.13" />
        <path d="M10 19l2 3 2-3" />
    </svg>
);


// Helper component for the function blocks
interface FunctionBlockProps {
    icon: React.ReactNode;
    title: string;
    text: string;
    includes: string[];
    certificationList?: string[];
}

const FunctionBlock: React.FC<FunctionBlockProps> = ({ icon, title, text, includes, certificationList }) => (
    <div className="flex flex-col p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-2xl transition-all duration-300 h-full" style={{ borderColor: BRAND_COLOR }}>
        
        <div className="mb-5">
            <div className="flex items-start space-x-4 mb-3">
                 <div className="p-3 rounded-full bg-green-500/10 flex-shrink-0" style={{ color: ACCENT_COLOR }}>
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white pt-2 leading-snug">
                    {title}
                </h3>
            </div>
        </div>
        
        <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">{text}</p>
        
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
            {certificationList ? (
                <>
                    <h4 className="text-lg font-semibold mb-3 text-slate-700 dark:text-slate-200">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                        {certificationList.map((cert, index) => (
                            <span key={index} className="px-3 py-1 text-xs font-bold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 shadow-sm">{cert}</span>
                        ))}
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300 shadow-sm">Patents Filed</span>
                    </div>
                </>
            ) : (
                <>
                    <h4 className="text-lg font-semibold mb-3 text-slate-700 dark:text-slate-200">Includes:</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        {includes.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <IconSettings className="w-4 h-4 mr-2 mt-1 flex-shrink-0" style={{ color: ACCENT_COLOR }} /> {item}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    </div>
);

// // Helper component for the product range tiles
// interface ProductTileProps {
//     title: string;
//     description: string;
//     icon: React.ReactNode;
//     linkText: string;
//     linkHref: string;
// }

// const ProductTile: React.FC<ProductTileProps> = ({ title, description, icon, linkText, linkHref }) => (
//     <div className="flex flex-col p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
//         <div className="mb-4 p-3 rounded-full w-fit bg-green-500/20" style={{ color: BRAND_COLOR }}>
//             {icon}
//         </div>
//         <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
//         <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">{description}</p>
//         <a 
//             href={linkHref} 
//             className="mt-auto inline-flex items-center text-sm font-semibold transition-colors group"
//             style={{ color: BRAND_COLOR }}
//         >
//             {linkText}
//             <IconArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//         </a>
//     </div>
// );
interface ProductTileProps {
    title: string;
    description: string;
    imageUrl: string; // Changed from 'icon' to 'imageUrl'
    linkText: string;
    linkHref: string;
}

const ProductTile: React.FC<ProductTileProps> = ({ title, description, imageUrl, linkText, linkHref }) => (
    <div className="flex flex-col p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
        
        {/* Image Placeholder/Display Area */}
        <div className="mb-4 w-full h-40 rounded-lg overflow-hidden relative border border-slate-300 dark:border-slate-700">
            <img 
                src={imageUrl} 
                alt={`${title} product illustration`} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                // onError={(e) => {
                //     // Fallback to a placeholder image if the specified URL fails
                //     const target = e.target as HTMLImageElement;
                //     target.onerror = null; 
                //     // Fallback placeholder with GreenLabs branding colors
                //     target.src = `https://placehold.co/600x400/${BRAND_COLOR.replace('#', '')}/ffffff?text=Product+Image`;
                // }}
            />
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow" dangerouslySetInnerHTML={{ __html: description }}/>
        
        <a 
            href={linkHref} 
            className="mt-auto inline-flex items-center text-sm font-semibold transition-colors group"
            style={{ color: BRAND_COLOR }}
        >
            {linkText}
            <IconArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
    </div>
);


const GreenLabsPage = () => {
    // Placeholder URL for a professional image (Engineering/Manufacturing)
    // Updated image color scheme to match the new green branding
    const heroImageUrl = "/images/ecosystem/GreenLabsHero.png";
    
    // Data for Product Range
    // const productRange = [
    //     {
    //         title: "GreenDrive™ — Fleets & Logistics",
    //         description: "Hydrogen retrofit systems for trucks, buses and commercial vehicles. Improves km/l, reduces emissions, enhances engine smoothness.",
    //         icon: <IconTruck className="w-6 h-6" />,
    //         linkText: "View Fleet Retrofit",
    //         linkHref: "/products/greendrive",
    //     },
    //     {
    //         title: "GreenX™ — DG Sets & Industrial Power",
    //         description: "Hydrogen-diesel hybrid kits for 20-4000 kVA DG sets. Validated emission and fuel savings across 380 kVA & 1500 kVA tests.",
    //         icon: <IconFactory className="w-6 h-6" />,
    //         linkText: "View DG Retrofit",
    //         linkHref: "/products/greengen",
    //     },
    //     {
    //         title: "GreenMarine™ — Ports & Marine Engines",
    //         description: "Retrofit-ready systems for auxiliary engines, tugs and port equipment. DG test results replicate marine load profiles.",
    //         icon: <IconShipWheel className="w-6 h-6" />,
    //         linkText: "View Marine Retrofit",
    //         linkHref: "/products/greenmarine",
    //     },
    //     {
    //         title: "Mining & Heavy Equipment Retrofit",
    //         description: "Hydrogen systems for excavators, dumpers, off-highway vehicles.",
    //         icon: <IconExcavator className="w-6 h-6" />,
    //         linkText: "View Mining Retrofit",
    //         linkHref: "/products/mining",
    //     },
    // ];
const productRange = [
   {
        title: "GreenDrive™ — Fleets & Heavy Equipment",
        description: "Hydrogen retrofit systems for trucks, buses, commercial vehicles, and **heavy off-highway equipment** like excavators and dumpers. Improves km/l, reduces emissions, and enhances engine life across diverse duty cycles.",
        imageUrl: "/images/greenlabs/products/greendrive-fleet.png", // Path to your GreenDrive image (now covering both)
        linkText: "View Fleet & Mining Retrofit",
        linkHref: "/products/greendrive",
    },
    {
        title: "GreenX™ — DG Sets & Industrial Power",
        description: "Hydrogen-diesel hybrid kits for 20-4000 kVA DG sets. Validated emission and fuel savings across high-load industrial scenarios. Ideal for stationary power generation.",
        imageUrl: "/images/greenlabs/products/greenx.png", // Path to your GreenX image
        linkText: "View DG Retrofit",
        linkHref: "/products/greenx",
    },
    {
        title: "GreenMarine™ — Ports & Marine Engines",
        description: "Retrofit-ready systems for auxiliary engines, tugs and port equipment. Engineered to replicate the load profiles and demanding duty cycles of marine environments.",
        imageUrl: "/images/greenlabs/products/greenmarine.png", // Path to your GreenMarine image (kept separate)
        linkText: "View Marine Retrofit",
        linkHref: "/products/greenmarine",
    },
];

    // Data for Certifications
    const certifications = [
        { name: "CE Mark", description: "Conformité Européenne (European Conformity) for health, safety, and environmental protection standards." },
        { name: "UL Certification", description: "Underwriters Laboratories standard for product safety and quality." },
        { name: "ROHS Compliance", description: "Restriction of Hazardous Substances directive compliance." },
        { name: "EMC Certified", description: "Electromagnetic Compatibility ensures safe operation around other electronics." },
        { name: "ISO 9001", description: "International standard for Quality Management Systems." },
        { name: "Patent Filings", description: "Patents filed in India & Australia protecting our core H-Oxy electrolyser and control technology." },
    ];

    // Array for the list of certifications in FunctionBlock 2
    const certList = ["CE", "UL", "ROHS", "EMC", "ISO 9001"];

    return (
        <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-inter">

            {/* =========================================================
               SECTION 1 — HERO BANNER
            ========================================================= */}
            <section 
                id="hero-banner" 
                className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" 
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${heroImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                        GreenLabs™ — Hydrogen Retrofit Systems & DaaS Delivery
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light">
                        Engineered hydrogen-diesel hybrid systems for trucks, buses, DG sets, marine engines and heavy equipment — available via CapEx purchase or Zero CapEx DaaS.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="#products" 
                            className="px-8 py-3 font-semibold rounded-full text-gray-900 shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:-translate-y-1"
                            style={{ backgroundColor: ACCENT_COLOR }}
                        >
                            Explore Retrofit Solutions
                        </a>
                        <a 
                            href="/contact" 
                            className="px-8 py-3 font-semibold rounded-full border border-white text-white hover:bg-white hover:text-gray-900 shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Contact Technical Team
                        </a>
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 2 — INTRODUCTION
            ========================================================= */}
            <section id="introduction" className="py-20 md:py-28 bg-gray-50 dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                        Engineering That Transforms Existing Engines
                    </h2>
                    <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                        GreenLabs is the engineering and innovation pillar of Saarthi. 
                        It designs, develops, tests and manufactures hydrogen retrofit systems that deliver measurable improvements in fuel efficiency and emissions — without replacing the engine.
                    </p>
                    <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                        From R&D and certifications to installation, commissioning and field support, GreenLabs ensures every system meets global standards and delivers long-term performance.
                    </p>
                </div>
            </section>


            {/* =========================================================
               SECTION 3 — WHAT GREENLABS DELIVERS (FOUR FUNCTIONS)
            ========================================================= */}
            <section id="functions" className="py-20 md:py-28 lg:py-36 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
                        What GreenLabs Delivers
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        <FunctionBlock
                            icon={<IconSettings className="w-6 h-6" />}
                            title="1. Retrofit Hardware Engineering"
                            text="GreenLabs designs hydrogen-diesel hybrid retrofit systems tailored to engine type, duty cycle, and application."
                            includes={[
                                "Modular hydrogen generation units",
                                "On-demand H-Oxy electrolyser systems",
                                "Injection manifolds & venturi assemblies",
                                "Electronic control systems (ECU/Fuel Enhancer)",
                                "Safety sensors & shutoff mechanisms",
                                "Load- and duty-cycle-based variable infusion control",
                            ]}
                        />
                        
                        <FunctionBlock
                            icon={<IconFactory className="w-6 h-6" />}
                            title="2. Manufacturing & Quality Assurance"
                            text="GreenLabs ensures every retrofit system is built and validated to global engineering standards."
                            includes={[
                                "Component fabrication & assembly",
                                "End-of-line testing",
                                "Vibration & thermal endurance checks",
                                "Safety and pressure validation",
                                "Material and corrosion testing",
                                "Batch-level QC protocols",
                            ]}
                            certificationList={certList}
                        />

                        {/* Custom Block for DaaS/CapEx Model */}
                        <div className="flex flex-col p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-2xl transition-all duration-300 h-full" style={{ borderColor: BRAND_COLOR }}>
                            <div className="mb-5">
                                <div className="flex items-start space-x-4 mb-3">
                                    <div className="p-3 rounded-full bg-green-500/10 flex-shrink-0" style={{ color: ACCENT_COLOR }}>
                                        <IconDollarSign className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white pt-2 leading-snug">
                                        3. Delivery Models: CapEx + DaaS
                                    </h3>
                                </div>
                            </div>
                            
                            <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                                Both delivery models are supported by GreenMentor advisory and measured through GreenVision telemetry.
                            </p>

                            <div className="mt-auto">
                                <div className="space-y-4">
                                    {/* CapEx */}
                                    <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg border-l-4 border-slate-400">
                                        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">A. CapEx Purchase (Own the System)</h4>
                                        <ul className="text-sm text-slate-600 dark:text-slate-300 list-inside space-y-1">
                                            <li className="flex items-start"><span className="mr-2 text-green-500">•</span> One-time purchase</li>
                                            <li className="flex items-start"><span className="mr-2 text-green-500">•</span> Full installation & commissioning</li>
                                            <li className="flex items-start"><span className="mr-2 text-green-500">•</span> Warranty support & GreenVision integration</li>
                                        </ul>
                                    </div>
                                    {/* DaaS */}
                                    <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg border-l-4" style={{ borderColor: ACCENT_COLOR }}>
                                        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">B. DaaS - Decarbonisation-as-a-Service</h4>
                                        <ul className="text-sm text-slate-600 dark:text-slate-300 list-inside space-y-1">
                                            <li className="flex items-start"><span className="mr-2 text-green-500">•</span> Zero CapEx. Guaranteed savings.</li>
                                            <li className="flex items-start"><span className="mr-2 text-green-500">•</span> Monthly fee lower than fuel saved</li>
                                            <li className="flex items-start"><span className="mr-2 text-green-500">•</span> Saarthi handles installation, maintenance & spares</li>
                                            <li className="flex items-start"><span className="mr-2 text-green-500">•</span> Ideal for large fleets & multi-site DG operations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <FunctionBlock
                            icon={<IconPackage className="w-6 h-6" />}
                            title="4. Installation, Commissioning & Technical Support"
                            text="GreenLabs manages the technical deployment of every retrofit system to ensure seamless integration into your existing operations."
                            includes={[
                                "Pre-installation engine inspection",
                                "On-site installation & wiring",
                                "Calibration & tuning",
                                "Safety compliance verification",
                                "Field engineering support",
                                "Replacement of consumables",
                                "Warranty service & performance audits",
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 4 — GREENLABS PRODUCT RANGE
            ========================================================= */}
            {/* <section id="products" className="py-20 md:py-28 bg-gray-50 dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
                        Retrofit Systems for Every Diesel Application
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {productRange.map((product, index) => (
                            <ProductTile key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section> */}
<section id="products" className="py-20 md:py-28 bg-gray-50 dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
                        Retrofit Systems for Every Diesel Application
                    </h2>
                    
                    {/* Updated to lg:grid-cols-3 for a clean layout with 3 products */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {productRange.map((product, index) => (
                            <ProductTile key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section>            
            {/* =========================================================
               SECTION 5 — HOW GREENLABS FITS INTO THE ECOSYSTEM
            ========================================================= */}
            <section id="ecosystem-fit" className="py-20 md:py-28 lg:py-36 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                        Engineering at the Heart of Saarthi’s Decarbonisation Loop
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
                        GreenLabs transforms GreenMentor’s strategy into real hardware and delivers it with world-class technical execution. GreenVision then verifies the results through independent data.
                    </p>

                    {/* Graphic (text-based) */}
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 p-8 md:p-12 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
                        
                        {/* 1. GreenMentor */}
                        <div className="flex flex-col items-center text-center w-full md:w-auto">
                            <div className="p-4 rounded-full bg-lime-500/20 mb-3 text-lime-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                    <path d="M12 11h4" />
                                    <path d="M12 15h4" />
                                    <path d="M8 11h.01" />
                                    <path d="M8 15h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">GreenMentor</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">(Plan & Assess)</p>
                        </div>
                        
                        <IconArrowRight className="w-8 h-8 text-slate-400 dark:text-slate-500 hidden md:block" />
                        <IconArrowRight className="w-8 h-8 text-slate-400 dark:text-slate-500 md:hidden transform rotate-90" />

                        {/* 2. GreenLabs (Highlight) */}
                        <div className="flex flex-col items-center text-center w-full md:w-auto scale-105 transform">
                            <div className="p-4 rounded-full bg-green-500/30 mb-3" style={{ color: ACCENT_COLOR }}>
                                <IconFactory className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">GreenLabs</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-bold">(Engineer & Deliver)</p>
                        </div>

                        <IconArrowRight className="w-8 h-8 text-slate-400 dark:text-slate-500 hidden md:block" />
                        <IconArrowRight className="w-8 h-8 text-slate-400 dark:text-slate-500 md:hidden transform rotate-90" />
                        
                        {/* 3. GreenVision */}
                        <div className="flex flex-col items-center text-center w-full md:w-auto">
                            <div className="p-4 rounded-full bg-lime-500/20 mb-3 text-lime-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                    <path d="M12 14c.1 0 .2 0 .3-.1.5-.2.8-.7.8-1.3 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .6.3 1.1.8 1.3.1 0 .2.1.3.1z" /><path d="M15.5 15.5 17 17" /><path d="M9 18v3" /><path d="M21 7.5c0 3.3-2.7 6-6 6M3 7.5c0 3.3 2.7 6 6 6" /><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">GreenVision</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">(Measure & Verify)</p>
                        </div>
                    </div>
                    
                    <div className="mt-12">
                        <a 
                            href="/ecosystem" 
                            className="inline-flex items-center text-lg font-bold transition-colors group text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400"
                        >
                            Explore the Saarthi Ecosystem
                            <IconArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 6 — WHY CHOOSE GREENLABS
            ========================================================= */}
            <section id="why-choose" className="py-20 md:py-28 bg-gray-50 dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
                        Certified Engineering. Real Savings. Proven Results.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Works with existing engines (no replacement required)",
                            "Certified & safety-compliant designs",
                            "Patent-backed innovations",
                            "Real-time performance verification via GreenVision",
                            "Suitable for all duty cycles",
                            "Field-tested across India and international pilots",
                        ].map((point, index) => (
                            <div key={index} className="flex items-start p-5 bg-white dark:bg-slate-800 rounded-xl shadow-md border-b-2 border-green-400">
                                <IconAward className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: BRAND_COLOR }} />
                                <span className="text-lg font-medium text-slate-800 dark:text-slate-200">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 7 — CERTIFICATIONS & PATENTS
            ========================================================= */}
            <section id="certifications" className="py-20 md:py-28 lg:py-36 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
                        Built to Global Standards
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex flex-col p-6 bg-gray-50 dark:bg-slate-800 rounded-xl shadow-sm border-l-4 border-green-400">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{cert.name}</h3>
                                <p className="text-base text-slate-600 dark:text-slate-300">{cert.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-xl text-slate-700 dark:text-slate-300 mt-12 max-w-4xl mx-auto">
                        GreenLabs products adhere to global electrical, mechanical and environmental safety standards required for industrial, marine and commercial deployment.
                    </p>

                    <div className="text-center mt-8">
                        <a 
                            href="/certifications" 
                            className="inline-flex items-center text-lg font-bold transition-colors group"
                            style={{ color: BRAND_COLOR }}
                        >
                            View All Certifications
                            <IconArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 8 — CTA SECTION (Final)
            ========================================================= */}
            <section id="cta-final" className="py-20 md:py-28 bg-green-800 dark:bg-slate-950" style={{ backgroundColor: BRAND_COLOR }}>
                <div className="container mx-auto px-4 max-w-5xl text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Ready to Retrofit Your Engines with Hydrogen?
                    </h2>
                    <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                        Choose CapEx or DaaS. Both options are backed by GreenMentor advisory and GreenVision verification.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="#products" 
                            className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full text-gray-900 shadow-xl transition-all duration-300 transform hover:scale-[1.05]"
                            style={{ backgroundColor: ACCENT_COLOR }}
                        >
                            Explore Retrofit Options
                        </a>
                        <a 
                            href="/contact-tech" 
                            className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            Request Technical Consultation
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default GreenLabsPage;