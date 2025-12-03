import React from 'react';

// --- INLINE SVG ICON COMPONENTS (replacing lucide-react) ---
const BRAND_COLOR = "var(--brand, #33A04A)"; // GreenMentor's primary color
const ACCENT_COLOR = "var(--accent, #98C948)";

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

const IconDollarSign = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
);

const IconUsers = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 5.74" />
    </svg>
);

const IconTruck = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <path d="M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <path d="M5 17H3V6h10l2 2h3l2 2v7h-2M9 18h6" />
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

const IconAnchor = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <circle cx="12" cy="5" r="3" />
        <line x1="12" x2="12" y1="22" y2="8" />
        <path d="M5 17H2l10 5 10-5h-3" />
    </svg>
);

const IconMountain = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
);

// Helper component for the function blocks
interface FunctionBlockProps {
    icon: React.ReactNode;
    title: string;
    text: string;
    includes: string[];
}

const FunctionBlock: React.FC<FunctionBlockProps> = ({ icon, title, text, includes }) => (
    <div className="flex flex-col p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-all duration-300">
        
        {/* FIX: Ensure the header allows the title to wrap and uses available space */}
        <div className="mb-5">
            <div className="flex items-start space-x-4 mb-3">
                 <div className="p-3 rounded-full bg-green-500/10 flex-shrink-0" style={{ color: BRAND_COLOR }}>
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white pt-2 leading-snug">
                    {title}
                </h3>
            </div>
        </div>
        
        <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">{text}</p>
        
        <div className="mt-auto">
            <h4 className="text-lg font-semibold mb-3 text-slate-700 dark:text-slate-200">Includes:</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className="mt-1 mr-2 text-green-500 flex-shrink-0">•</span> {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);


const GreenMentorPage = () => {
    // Placeholder URL for a professional image (Boardroom/Engineer)
    const heroImageUrl = "/images/ecosystem/GreenMentor_Hero1.png";

    // Data for the industry tiles
    const industryTiles = [
        { name: "Fleets & Logistics", icon: <IconTruck className="w-8 h-8" />, link: "/solutions/fleets" },
        { name: "DG Sets & Industrial Power", icon: <IconFactory className="w-8 h-8" />, link: "/solutions/industrial-power" },
        { name: "Ports & Marine", icon: <IconAnchor className="w-8 h-8" />, link: "/solutions/marine" },
        { name: "Mining & Heavy Equipment", icon: <IconMountain className="w-8 h-8" />, link: "/solutions/mining" },
        { name: "Building Power & Remote Sites", icon: <IconFactory className="w-8 h-8" />, link: "/solutions/remote-sites" },
    ];


    return (
        <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">

            {/* =========================================================
               SECTION 1 — HERO BANNER
            ========================================================= */}
            <section 
                id="hero-banner" 
                className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" 
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${heroImageUrl})`,
                    // backgroundImage: `${heroImageUrl}`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                        GreenMentor™ — Strategy, Advisory & Deployment Planning
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light">
                        Expert guidance and engineered planning to transform diesel-dependent operations into measurable, profitable decarbonisation programs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* <a 
                            href="#assessment" 
                            className="px-8 py-3 font-semibold rounded-full text-gray-900 shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:-translate-y-1"
                            style={{ backgroundColor: ACCENT_COLOR }}
                        >
                            Start Your Assessment
                        </a> */}
                        <a 
                            href="/contact" 
                            className="px-8 py-3 font-semibold rounded-full text-gray-900 shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:-translate-y-1"
                            style={{ backgroundColor: ACCENT_COLOR }}
                        >
                            Contact Us
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
                        Your Decarbonisation Journey Starts Here
                    </h2>
                    <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                        GreenMentor is the strategic core of the Saarthi ecosystem. It evaluates your engines, operational conditions, duty cycles, and ESG goals to create a decarbonisation roadmap tailored to your business.
                    </p>
                    <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                        From assessments to deployment planning to long-term customer success, GreenMentor ensures every retrofit delivers real technical and financial results.
                    </p>
                </div>
            </section>


            {/* =========================================================
               SECTION 3 — WHAT GREENMENTOR DOES (FOUR FUNCTIONS)
            ========================================================= */}
            <section id="functions" className="py-20 md:py-28 lg:py-36 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
                        The Four Pillars of GreenMentor Planning
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        <FunctionBlock
                            icon={<IconClipboardList className="w-6 h-6" />}
                            title="Decarbonisation Advisory"
                            text="GreenMentor provides the analysis and strategic guidance required to move from diesel dependency to engineered hydrogen-enabled decarbonisation."
                            includes={[
                                "Engine & duty-cycle evaluation",
                                "Fuel/emission baseline studies",
                                "Technical feasibility assessment",
                                "Emission & operational risk analysis",
                                "Hydrogen retrofit compatibility review",
                                "Recommended solution path (GreenDrive, GreenX, etc.)",
                            ]}
                        />
                        
                        <FunctionBlock
                            icon={<IconClipboardList className="w-6 h-6" style={{ transform: 'rotate(90deg)' }} />}
                            title="Deployment Planning"
                            text="Once feasibility is established, GreenMentor engineers the deployment plan for your sites, fleets or vessels — ensuring minimal disruption and maximum performance."
                            includes={[
                                "Engine-by-engine configuration",
                                "Installation sequencing & logistics",
                                "Safety planning & compliance",
                                "Coordination with OEM, facility & operations teams",
                                "Site readiness checklists",
                                "GreenVision onboarding & telemetry setup",
                            ]}
                        />

                        <FunctionBlock
                            icon={<IconDollarSign className="w-6 h-6" />}
                            title="Business Case & ROI Modelling"
                            text="GreenMentor ensures every decision is financially justified with clear, data-backed projections."
                            includes={[
                                "Fuel savings forecasting",
                                "CO₂ reduction estimates",
                                "Duty cycle-adjusted benefit modelling",
                                "CapEx vs DaaS comparison",
                                "Payback period calculations",
                                "GreenVision-enabled measurement plan",
                            ]}
                        />
                        
                        <FunctionBlock
                            icon={<IconUsers className="w-6 h-6" />}
                            title="Customer Success & Performance Oversight"
                            text="GreenMentor continues to support you after deployment, ensuring the solution performs as designed and delivers long-term savings."
                            includes={[
                                "Driver/operator training",
                                "Performance review meetings",
                                "Operational improvement recommendations",
                                "Fleet-wide rollout planning",
                                "DaaS performance validation",
                                "GreenVision data interpretation support",
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 4 — WHY GREENMENTOR MATTERS
            ========================================================= */}
            <section id="why-it-matters" className="py-20 md:py-28 bg-gray-50 dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="lg:pr-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                Decarbonisation Requires More Than Hardware
                            </h2>
                            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                                Retrofitting engines with hydrogen systems is not a plug-and-play process. The success of every deployment depends on correct engine assessment, correct configuration, correct operational understanding, and correct data validation.
                            </p>
                        </div>
                        
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-2xl border-l-4 border-green-500">
                            <ul className="space-y-4 text-lg font-medium text-slate-800 dark:text-slate-200">
                                <li className="flex items-start">
                                    <IconCheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: BRAND_COLOR }} />
                                    <span>Correct engineering decisions tailored to your engine make and model.</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: BRAND_COLOR }} />
                                    <span>Correct financial modelling and comparison of CapEx vs DaaS.</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: BRAND_COLOR }} />
                                    <span>Correct deployment with minimal operational downtime.</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: BRAND_COLOR }} />
                                    <span>Verified outcomes via GreenVision data platform.</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: BRAND_COLOR }} />
                                    <span>Smooth scale-up across multiple sites or fleets.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 5 — HOW GREENMENTOR CONNECTS TO OTHER PILLARS
            ========================================================= */}
            <section id="connection" className="py-20 md:py-28 lg:py-36 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                        The Strategic Pillar That Powers Deployment & Verification
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
                        GreenMentor defines the roadmap, connecting the technical deployment to the verified reporting in a single, closed loop ecosystem.
                    </p>

                    {/* Graphic (text-based) */}
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 p-8 md:p-12 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
                        
                        {/* 1. GreenMentor */}
                        <div className="flex flex-col items-center text-center w-full md:w-auto">
                            <div className="p-4 rounded-full bg-green-500/20 mb-3" style={{ color: BRAND_COLOR }}>
                                <IconClipboardList className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">GreenMentor</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">(Plan & Design)</p>
                        </div>
                        
                        <IconArrowRight className="w-8 h-8 text-slate-400 dark:text-slate-500 hidden md:block" />
                        <IconArrowRight className="w-8 h-8 text-slate-400 dark:text-slate-500 md:hidden transform rotate-90" />

                        {/* 2. GreenLabs */}
                        <div className="flex flex-col items-center text-center w-full md:w-auto">
                            <div className="p-4 rounded-full bg-orange-500/20 mb-3 text-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                    <path d="M10 2v7.31" /><path d="M14 9.3V2" /><path d="M3 11v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6c0-1.7-.5-3.3-1.4-4.7l-2.6-4" /><path d="M10 11h4" /><path d="M10 19v3" /><path d="M14 19v3" /><path d="M8.5 22h7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">GreenLabs</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">(Build & Deliver)</p>
                        </div>

                        <IconArrowRight className="w-8 h-8 text-slate-400 dark:text-slate-500 hidden md:block" />
                        <IconArrowRight className="w-8 h-8 text-slate-400 dark:text-slate-500 md:hidden transform rotate-90" />
                        
                        {/* 3. GreenVision */}
                        <div className="flex flex-col items-center text-center w-full md:w-auto">
                            <div className="p-4 rounded-full bg-blue-500/20 mb-3 text-blue-500">
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
               SECTION 6 — INDUSTRIES WE SUPPORT
            ========================================================= */}
            <section id="industries" className="py-20 md:py-28 bg-gray-50 dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">
                        GreenMentor Supports All Sectors Powered by Diesel
                    </h2>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {industryTiles.map((tile, index) => (
                            <a 
                                key={index} 
                                href={tile.link} 
                                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border-b-4 border-transparent hover:border-green-500 transition-all duration-300 transform hover:scale-[1.03]"
                            >
                                <div className="mb-3 text-green-600 dark:text-green-400">
                                    {tile.icon}
                                </div>
                                <span className="text-base font-semibold text-slate-800 dark:text-white text-center">{tile.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 7 — SAMPLE OUTPUTS FROM GREENMENTOR
            ========================================================= */}
            <section id="outputs" className="py-20 md:py-28 lg:py-36 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
                        What You Receive From a GreenMentor Engagement
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        
                        {/* Left Column: Output List */}
                        <div className="lg:col-span-2 space-y-6">
                            {[
                                "Engine-by-engine retrofit compatibility analysis",
                                "Duty-cycle based savings forecast",
                                "CO₂ reduction potential report",
                                "Operational constraints report",
                                "Custom engineering design & deployment plan",
                                "Business case & financial modelling",
                                "Recommended delivery model: CapEx or DaaS",
                                "GreenVision map: Data points to track for M&V",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-slate-800 rounded-lg shadow-sm">
                                    <IconCheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: ACCENT_COLOR }} />
                                    <span className="text-lg text-slate-800 dark:text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Right Column: Placeholder Report Image */}
                        <div className="lg:col-span-1 flex justify-center">
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 w-full max-w-sm">
                                <img 
                                    src="/images/ecosystem/GreenMentor_Report.png" 
                                    alt="Sample GreenMentor Advisory Report" 
                                    className="rounded-lg w-full h-auto object-cover"
                                />
                                <div className="mt-6 text-center">
                                    <a 
                                        href="/request-template" 
                                        className="inline-flex items-center text-base font-bold transition-colors group"
                                        style={{ color: BRAND_COLOR }}
                                    >
                                        Request an Assessment Report Template
                                        <IconArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
               SECTION 8 — CTA SECTION (Final)
            ========================================================= */}
            <section id="assessment" className="py-20 md:py-28 bg-green-800 dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-5xl text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Ready to Begin Your Decarbonisation Journey?
                    </h2>
                    <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                        Share your engines, load profiles, and monthly diesel usage — and we’ll prepare a custom advisory plan.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* <a 
                            href="/start-assessment" 
                            className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full text-gray-900 shadow-xl transition-all duration-300 transform hover:scale-[1.05]"
                            style={{ backgroundColor: ACCENT_COLOR }}
                        >
                            Start Assessment
                        </a> */}
                        <a 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default GreenMentorPage;