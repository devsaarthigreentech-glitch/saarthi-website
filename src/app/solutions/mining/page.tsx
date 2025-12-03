'use client';

import React from 'react';

// --- THEME COLOR VARIABLES ---
const BG_LIGHT = "var(--bg-light, #f8f9fa)";
const BG_CARD_LIGHT = "var(--bg-card-light, #ffffff)";
const PRIMARY_COLOR = "var(--primary-saarthi, #10B981)"; // Tailwind Green-500
const TEXT_DARK = "var(--text-dark, #212529)";
const TEXT_MUTED = "var(--text-muted, #495057)";

// --- CORE ICON COMPONENTS (Used Internally) ---
const IconTruck = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M5 18H3c-1.1 0-2-.9-2-2V9a2 2 0 0 1 2-2h3l2-2h4l2 2h3c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2h-2c0 1.1-.9 2-2 2s-2-.9-2-2h-4c0 1.1-.9 2-2 2s-2-.9-2-2z"/><path d="M12 11V7"/><path d="M12 11h7"/><path d="M12 11H5"/>
    </svg>
);

const IconBolt = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M12 2L6 12h4l-1 8 10-10h-4z"/>
    </svg>
);

const IconLeaf = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M11 20A7 7 0 0 1 9.88 6.33L4 12V20"/><path d="M18 13V4a2 2 0 0 0-2-2h-3v7z"/><path d="M15.5 16.5l-3.5 3.5"/><path d="M20 17l-3.5 3.5"/>
    </svg>
);

const IconChevronRight = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 18l6-6-6-6"/>
    </svg>
);

// --- COMPONENT FOR BENEFIT LIST ITEMS ---
const BenefitListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start text-lg">
        <IconChevronRight className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
        <span className="text-gray-700">{children}</span>
    </li>
);


// --- START: EVIDENCE STRIP COMPONENTS ---
// 1. Icons for Evidence Strip
const GaugeIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path d="M12 2v4" /><path d="M17.5 5.5l-2 2" /><path d="M19.9 12h-4" />
    <path d="M18.8 17.5l-2-2" /><path d="M15.5 18.8l-2-2" /><path d="M12 22v-4" />
    <path d="M8.5 18.8l2-2" /><path d="M5.2 15.5l2-2" /><path d="M4.1 12h4" />
    <path d="M5.2 8.5l2-2" />
  </svg>
);
const CarbonIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
);
const ShieldCheckIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// 2. Data for Evidence Strip
type MetricType = {
  id: number;
  icon: React.ReactNode;
  heading: string;
  subtext: string;
  isCert?: boolean;
};

const evidenceData: MetricType[] = [
  {
    id: 1,
    icon: GaugeIcon,
    heading: "4–15% Diesel Savings",
    subtext: "Maximized during high-idle and variable-load cycles typical of excavation and loading.",
  },
  {
    id: 2,
    icon: CarbonIcon,
    heading: "40–90% PM Reduction",
    subtext: "Verified reduction in particulate matter (PM), CO, and HC emissions for cleaner operations.",
  },
  {
    id: 3,
    icon: ShieldCheckIcon,
    heading: "Rugged & Certified",
    subtext: "Vibration-resistant, dust-protected, and compliant with CE, UL, and ISO 9001 standards.",
    isCert: true,
  },
];

// 3. Single Metric Card Component
const SingleMetric = ({ item }: { item: MetricType }) => {
    return (
        <div className="p-6 md:p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg h-full flex flex-col justify-start transition-all duration-300 hover:shadow-xl hover:border-blue-500 border border-gray-100 dark:border-transparent">
            
            {/* Icon Wrapper (Brand Green Accent) */}
            <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-saarthi,#10B981)]/10 text-[var(--primary-saarthi,#10B981)]`}>
                {item.icon}
            </div>

            {/* Heading (The Metric) */}
            <h3 className="mb-3 text-2xl font-extrabold text-slate-900 dark:text-white">
                {item.heading}
            </h3>

            {/* Subtext/Description */}
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {item.subtext}
            </p>

            {/* Special Style for Certifications Card */}
            {item.isCert && (
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700">
                    <p className="text-sm font-semibold text-[var(--primary-saarthi,#10B981)] uppercase tracking-wider">
                        Safety & Durability Standards
                    </p>
                </div>
            )}
        </div>
    );
};

// 4. Evidence Strip Wrapper Component
const EvidenceStrip = () => (
    <section id="evidence" className="py-16 -mt-20 z-10 relative">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
                {evidenceData.map((item) => (
                    <SingleMetric key={item.id} item={item} />
                ))}
            </div>
        </div>
    </section>
);

// --- END: EVIDENCE STRIP COMPONENTS ---


// --- START: ECOSYSTEM FLOW COMPONENTS (How System Works) ---

// 1. Icons for Flow
const GasTankIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" />
    <path d="M12 18v-6" />
    <path d="M15 15l-3 3-3-3" />
    <path d="M8 8l4-4 4 4" />
    <path d="M12 4v4" />
  </svg>
);
const InjectorIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20v-8" />
    <path d="M6 12v4a6 6 0 0 0 12 0v-4" />
    <path d="M12 2L9 8h6z" />
  </svg>
);
const CombustionIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 8V6a2 2 0 0 1 4 0v2" />
    <path d="M8 10h8" />
    <path d="M12 21c-4.9 0-9-4.1-9-9s4.1-9 9-9 9 4.1 9 9-4.1 9-9 9z" />
    <path d="M12 12c-2.8 0-5-2.2-5-5h10c0 2.8-2.2 5-5 5z" />
  </svg>
);
const VerificationIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a8 8 0 0 0 8-8V7l-8-4-8 4v7a8 8 0 0 0 8 8z" />
    <path d="M15 9l-4 4-2-2" />
  </svg>
);

// 2. Data for System Flow
const systemFlowData: FlowStep[] = [
  {
    id: 1,
    icon: GasTankIcon,
    title: "Hydrogen Generated On-Demand",
    description: "Safe, low-pressure H-Oxy electrolyser unit produces gas only when needed. No bulky compressed cylinders required.",
  },
  {
    id: 2,
    icon: InjectorIcon,
    title: "Controlled H-Oxy Injection",
    description: "The system adjusts the hydrogen flow automatically to match the engine’s real-time load, RPM, and duty-cycle patterns.",
  },
  {
    id: 3,
    icon: CombustionIcon,
    title: "Cleaner Diesel Combustion",
    description: "Hydrogen acts as a combustion enhancer, leading to lower soot production, better engine breathing, and stable power delivery.",
  },
  {
    id: 4,
    icon: VerificationIcon,
    title: "Real-Time Verification",
    description: "GreenVision tracks fuel use, idling, CO₂ reduction, and engine health, providing auditable performance data.",
    isResult: true,
  },
];

// 3. Single Flow Step Card Component
type FlowStep = {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    isResult?: boolean;
};

const SingleSystemStep = ({ item }: { item: FlowStep }) => {
    const baseCardClasses = 'bg-white border-gray-200 shadow-sm dark:bg-slate-800 dark:border-slate-700';
    const baseIconClasses = 'bg-[var(--primary-saarthi,#10B981)]/20 text-[var(--primary-saarthi,#10B981)]';
    const baseTitleClasses = 'text-slate-900 dark:text-white';
    const baseDescClasses = 'text-slate-600 dark:text-slate-400';

    const mapHoverClasses = (classes: string) => classes.split(' ').map(cls => `hover:${cls}`).join(' ');

    return (
        <div className={`p-6 rounded-xl h-full flex flex-col justify-start text-center transition-all duration-300 border-[2px] 
            ${baseCardClasses} 
            hover:scale-[1.03] 
            ${mapHoverClasses('hover:bg-white hover:border-4 hover:border-[var(--primary-saarthi,#10B981)] hover:shadow-2xl hover:shadow-[var(--primary-saarthi,#10B981)]/10 dark:hover:bg-slate-700 dark:hover:border-[var(--primary-saarthi,#10B981)]')}
        `}>
            
            {/* Icon Wrapper */}
            <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300
                ${baseIconClasses} 
                ${mapHoverClasses('hover:bg-[var(--primary-saarthi,#10B981)] hover:text-white')}`}
            >
                {item.icon}
            </div>

            {/* Title */}
            <h3 className={`mb-2 text-xl font-bold leading-tight transition-colors duration-300
                ${baseTitleClasses} 
                ${mapHoverClasses('hover:text-[var(--primary-saarthi,#10B981)]')}`}
            >
                {item.title}
            </h3>

            {/* Description */}
            <p className={`text-sm leading-relaxed transition-colors duration-300
                ${baseDescClasses} 
                ${mapHoverClasses('hover:text-slate-700 dark:hover:text-slate-200')}`}
            >
                {item.description}
            </p>
        </div>
    );
};

// 4. System Flow Wrapper Component
const SystemFlowSection = () => (
    <section id="system-flow" className="py-20" style={{ backgroundColor: BG_LIGHT }}>
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: TEXT_DARK }}>
                    Cleaner Combustion for Extreme Duty Cycles
                </h2>
                <p className="text-lg max-w-4xl mx-auto" style={{ color: TEXT_MUTED }}>
                    The process ensures safety and efficiency, delivering hydrogen on demand to enhance diesel combustion.
                </p>
            </div>
            {/* Graphic (Text-Based) */}
            <div className="text-center text-sm font-mono text-gray-500 mb-10">
                Electrolyser → Injection → Engine → Hydraulics/Drivetrain → GreenVision
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {systemFlowData.map((item) => (
                    <SingleSystemStep key={item.id} item={item} />
                ))}
            </div>
            {/* Image Tag */}
            <div className="text-center mt-12">
                [Image of Hydrogen Injection System Flow Diagram]
            </div>
        </div>
    </section>
);

// --- END: ECOSYSTEM FLOW COMPONENTS (How System Works) ---


// --- MAIN PAGE COMPONENT ---
const MiningSolutionsPage = () => {
    return (
        <main className="min-h-screen pt-20" style={{ backgroundColor: BG_LIGHT }}>
            {/* SECTION 1 — HERO BANNER */}
            <section className="py-20 text-center" style={{ 
                backgroundColor: TEXT_DARK, 
                color: 'white',
                backgroundImage: 'url(https://placehold.co/1920x600/212529/ffffff?text=Mining+Excavator+with+Hydrogen+Overlay)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                zIndex: 0
            }}>
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div className="container mx-auto px-4 relative z-20">
                    <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: PRIMARY_COLOR }}>
                        SOLUTIONS — MINING & HEAVY EQUIPMENT
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        Mining & Heavy Equipment — Hydrogen Retrofit Solutions
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                        Reduce diesel consumption, improve engine performance and lower emissions in heavy-duty mining and off-highway equipment — without replacing machines.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a 
                            href="#solution" 
                            className="px-8 py-3 text-lg font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg"
                        >
                            Explore Heavy Equipment Retrofit
                        </a>
                        <a 
                            href="/request-assessment" 
                            className="px-8 py-3 text-lg font-semibold rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            Request Site Assessment
                        </a>
                    </div>
                </div>
            </section>

            {/* Evidence Strip (Unified Pattern) */}
            <EvidenceStrip />

            {/* SECTION 2 — INTRODUCTION */}
            <section id="introduction" className="py-16 pt-8">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: TEXT_DARK }}>Decarbonising Off-Highway Operations Without Machine Replacement</h2>
                        <p className="text-lg max-w-3xl mx-auto" style={{ color: TEXT_MUTED }}>
                            Mining and heavy equipment operate under some of the harshest duty cycles in the world — high idling, variable load, heavy fuel burn and continuous operation. Saarthi’s hydrogen retrofit system helps reduce diesel usage and emissions while improving combustion quality and engine stability.
                        </p>
                        <p className="text-lg font-semibold mt-4 max-w-3xl mx-auto" style={{ color: PRIMARY_COLOR }}>
                            This solution integrates GreenLabs’ engineering, GreenMentor’s advisory and GreenVision’s real-time verification.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — CORE SOLUTION: GREENDRIVE™ HEAVY */}
            <section id="solution" className="py-20" style={{ backgroundColor: BG_CARD_LIGHT }}>
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: PRIMARY_COLOR }}>
                                CORE TECHNOLOGY
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: TEXT_DARK }}>
                                GreenDrive™ Heavy — Hydrogen Retrofit
                            </h2>
                            <p className="text-xl mb-6" style={{ color: TEXT_MUTED }}>
                                A rugged, vibration-resistant, dust-protected hydrogen retrofit system engineered specifically for mining and construction equipment. Our system ensures high reliability and safety in extreme duty cycles.
                            </p>
                            
                            <h3 className="text-2xl font-bold mb-4 mt-8" style={{ color: TEXT_DARK }}>Key Benefits:</h3>
                            <ul className="space-y-3" style={{ listStyle: 'none', padding: 0 }}>
                                <BenefitListItem>4–15% fuel savings (depending on load & idle ratio)</BenefitListItem>
                                <BenefitListItem>Reduced soot accumulation leading to longer engine life</BenefitListItem>
                                <BenefitListItem>Significant reduction in PM, CO and HC emissions</BenefitListItem>
                                <BenefitListItem>Improved combustion stability under heavy load</BenefitListItem>
                                <BenefitListItem>Lower black-smoke output and cleaner exhaust</BenefitListItem>
                                <BenefitListItem>Verified performance via GreenVision telemetry</BenefitListItem>
                            </ul>
                            
                            <a 
                                href="/technology/heavy-equipment" 
                                className="inline-flex items-center text-lg font-semibold mt-8 px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                            >
                                Learn More About Heavy Equipment Retrofit
                                <IconChevronRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                        
                        {/* Supported Equipment List */}
                        <div className="p-8 rounded-xl shadow-inner bg-gray-50">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: TEXT_DARK }}>Supported Equipment:</h3>
                            <div className="grid grid-cols-2 gap-y-2 text-base" style={{ color: TEXT_MUTED }}>
                                <p>Excavators (10–100+ tons)</p>
                                <p>Rigid Dump Trucks (RDTs)</p>
                                <p>Articulated Dump Trucks (ADTs)</p>
                                <p>Front-end loaders</p>
                                <p>Backhoe loaders</p>
                                <p>Dozers & graders</p>
                                <p>Cranes & material handlers</p>
                                <p>Drilling rigs</p>
                                <p>Heavy mining site generators</p>
                            </div>
                            <div className="text-center mt-6">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 — WHY MINING BENEFITS SIGNIFICANTLY */}
            <section id="high-savings" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-gray-200 p-8 rounded-xl shadow-lg min-h-[300px] flex flex-col justify-center">
                            <h3 className="text-3xl font-extrabold mb-4" style={{ color: TEXT_DARK }}>
                                High Fuel Burn + High Idle Time = High Savings Potential
                            </h3>
                            <p className="text-lg mb-4" style={{ color: TEXT_MUTED }}>
                                Mining equipment often idles for long durations and works under highly varying load. Hydrogen-enabled cleaner combustion makes idling far more efficient, reducing wasted diesel during transient load periods.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: BG_CARD_LIGHT }}>
                                <p className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>Typical Observations:</p>
                                <ul className="space-y-1 text-gray-700 list-disc list-inside">
                                    <li>Idle-heavy machines: **5–18% savings**</li>
                                    <li>Constant-load equipment: **3–15% savings**</li>
                                    <li>Reduced particulate build-up and cleaner injector performance.</li>
                                    <li>Lower engine stress under quick load changes.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* SECTION 5 — HOW THE SYSTEM WORKS (Using SystemFlowSection Component) */}
            <SystemFlowSection />

            {/* SECTION 6 — VERIFIED PERFORMANCE (DATA PREVIEW) */}
            <section id="data-preview" className="py-20" style={{ backgroundColor: BG_CARD_LIGHT }}>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: TEXT_DARK }}>Real-World Performance Validated Across Similar Engines</h2>
                        <p className="text-lg max-w-4xl mx-auto" style={{ color: TEXT_MUTED }}>
                            Mining equipment uses high-displacement diesel engines similar to truck or DG engines. Our extensive DG test data and truck telemetry offer accurate performance indicators for heavy machinery.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        <div className="p-8 rounded-xl shadow-lg bg-gray-50 border-l-4 border-red-500">
                            <h3 className="text-2xl font-bold mb-4 text-red-700">Emission Reduction (DG Test Equivalent):</h3>
                            <ul className="space-y-2 text-lg text-gray-700">
                                <li>Particulate Matter (PM): **40–90% reduction**</li>
                                <li>Hydrocarbons (HC): **Significant reduction**</li>
                                <li>Carbon Monoxide (CO): **Significant reduction**</li>
                                <li>Black Smoke: **Visibly clearer exhaust**</li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-xl shadow-lg bg-gray-50 border-l-4 border-green-600">
                            <h3 className="text-2xl font-bold mb-4 text-green-700">Fuel Efficiency:</h3>
                            <ul className="space-y-2 text-lg text-gray-700">
                                <li>Idle cycles: **5–18% savings**</li>
                                <li>Heavy excavation cycles: **5–15% savings**</li>
                                <li>Transport cycles (dumpers): **4–12% savings**</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="text-center mt-12">
                        <a 
                            href="/evidence-hub" 
                            className="inline-flex items-center text-lg font-semibold px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
                        >
                            View Technical Evidence
                            <IconChevronRight className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 7 — INDUSTRIES & USE CASES */}
            <section id="use-cases" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-1">
                            <h2 className="text-4xl font-bold mb-4" style={{ color: TEXT_DARK }}>Designed for Rugged, High-Demand Environments</h2>
                            <p className="text-lg" style={{ color: TEXT_MUTED }}>
                                Our GreenDrive™ Heavy system thrives where diesel engines are pushed to their limit, providing stability and savings in the toughest conditions.
                            </p>
                        </div>
                        <div className="md:col-span-2 p-6 rounded-xl shadow-lg" style={{ backgroundColor: BG_CARD_LIGHT }}>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Where This Solution Works:</h3>
                            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-lg text-gray-700">
                                <div><IconLeaf className="inline w-5 h-5 mr-2" style={{ color: PRIMARY_COLOR }} />Mining & quarrying</div>
                                <div><IconLeaf className="inline w-5 h-5 mr-2" style={{ color: PRIMARY_COLOR }} />Construction & infrastructure</div>
                                <div><IconLeaf className="inline w-5 h-5 mr-2" style={{ color: PRIMARY_COLOR }} />Cement & aggregate sites</div>
                                <div><IconLeaf className="inline w-5 h-5 mr-2" style={{ color: PRIMARY_COLOR }} />Remote site operations</div>
                                <div><IconLeaf className="inline w-5 h-5 mr-2" style={{ color: PRIMARY_COLOR }} />Metal & coal mines</div>
                                <div><IconLeaf className="inline w-5 h-5 mr-2" style={{ color: PRIMARY_COLOR }} />Material handling yards</div>
                                <div><IconLeaf className="inline w-5 h-5 mr-2" style={{ color: PRIMARY_COLOR }} />Port-side heavy equipment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8 — DELIVERY MODELS */}
            <section id="delivery-models" className="py-20" style={{ backgroundColor: BG_LIGHT }}>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: TEXT_DARK }}>Two Deployment Options to Fit Any Operation</h2>
                        <p className="text-lg max-w-3xl mx-auto" style={{ color: TEXT_MUTED }}>
                            Choose the financing model that best suits your capital expenditure strategy and operational scale.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        <div className="p-8 rounded-xl shadow-xl border-2 border-gray-100 transition-all duration-300 hover:shadow-2xl" style={{ backgroundColor: BG_CARD_LIGHT }}>
                            <h3 className="text-3xl font-extrabold mb-4" style={{ color: TEXT_DARK }}>A. CapEx Purchase</h3>
                            <p className="text-lg mb-4" style={{ color: TEXT_MUTED }}>The traditional route for full asset ownership and control over the long term.</p>
                            <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                <li>Own the system outright (Asset on your balance sheet)</li>
                                <li>Full installation & commissioning included</li>
                                <li>Comprehensive warranty and technical support</li>
                                <li>Integrated GreenVision dashboard for monitoring</li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-xl shadow-xl border-2 border-[var(--primary-saarthi,#10B981)] transition-all duration-300 hover:shadow-2xl" style={{ backgroundColor: BG_CARD_LIGHT }}>
                            <h3 className="text-3xl font-extrabold mb-4" style={{ color: PRIMARY_COLOR }}>B. DaaS — Decarbonisation-as-a-Service (Zero CapEx)</h3>
                            <p className="text-lg mb-4" style={{ color: TEXT_MUTED }}>Ideal for mine operators with large fleets seeking immediate savings without upfront investment.</p>
                            <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                <li>**No upfront investment** required</li>
                                <li>Monthly fee is **less than** monthly fuel savings (pay-for-performance model)</li>
                                <li>Saarthi handles all system maintenance & spares</li>
                                <li>Savings are verified through GreenVision platform</li>
                                <li>Scales easily across large fleets and multiple sites</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a 
                            href="/delivery-models-comparison" 
                            className="inline-flex items-center text-lg font-semibold px-8 py-3 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                        >
                            Compare Deployment Models
                            <IconChevronRight className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 9 — SAFETY & DURABILITY */}
            <section id="safety" className="py-20" style={{ backgroundColor: BG_CARD_LIGHT }}>
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12 items-start">
                        <div className="md:col-span-1">
                            <h2 className="text-4xl font-bold mb-4" style={{ color: TEXT_DARK }}>Engineered for Dust, Heat, Vibration & Harsh Conditions</h2>
                            <p className="text-lg" style={{ color: TEXT_MUTED }}>
                                Safety and durability are non-negotiable. The GreenDrive™ Heavy system is built to withstand the physical demands of any mining or construction environment.
                            </p>
                        </div>
                        <div className="md:col-span-2 p-6 rounded-xl shadow-md bg-gray-50">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Features & Safeguards:</h3>
                            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-lg text-gray-700">
                                <div><IconBolt className="inline w-5 h-5 mr-2" style={{ color: PRIMARY_COLOR }} />Vibration-resistant mounting</div>
                                <div><IconBolt className="inline w-5 h-5 mr-2" style={{ color: PRIMARY_COLOR }} />Reinforced, dust-protected enclosures</div>
                                <div><IconBolt className="inline w-5 h-5 mr-2" style={{ color: PRIMARY_COLOR }} />Industrial-grade wiring and connectors</div>
                                <div><IconBolt className="inline w-5 h-5 mr-2" style={{ color: PRIMARY_COLOR }} />Auto-shutdown on abnormal parameters</div>
                                <div><IconBolt className="inline w-5 h-5 mr-2" style={{ color: PRIMARY_COLOR }} />Temperature & water-level monitoring</div>
                                <div><IconBolt className="inline w-5 h-5 mr-2" style={{ color: PRIMARY_COLOR }} />**Crucially, No compressed hydrogen storage**</div>
                            </div>
                            <h3 className="text-xl font-bold mt-6 mb-2" style={{ color: TEXT_DARK }}>Certifications:</h3>
                            <p className="text-lg font-semibold text-gray-600">CE • UL • ROHS • EMC • ISO 9001</p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <a 
                            href="/certifications" 
                            className="inline-flex items-center text-lg font-semibold px-8 py-3 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                        >
                            View Certifications
                            <IconChevronRight className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 10 — COMPATIBILITY & INSTALLATION */}
            <section id="compatibility" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-1">
                            <h2 className="text-4xl font-bold mb-4" style={{ color: TEXT_DARK }}>Compatible With Most Heavy Equipment Engines</h2>
                            <p className="text-lg" style={{ color: TEXT_MUTED }}>
                                Our system is engine-agnostic and designed for quick, non-invasive integration with the most common brands found in mining and construction fleets globally.
                            </p>
                        </div>
                        <div className="md:col-span-2 p-6 rounded-xl shadow-lg" style={{ backgroundColor: BG_CARD_LIGHT }}>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Supported Engine Brands:</h3>
                            <div className="grid sm:grid-cols-3 gap-x-6 gap-y-2 text-lg text-gray-700">
                                <p>Caterpillar</p>
                                <p>Komatsu</p>
                                <p>Volvo</p>
                                <p>JCB</p>
                                <p>Hitachi</p>
                                <p>Tata Hitachi</p>
                                <p>SANY</p>
                                <p>Doosan</p>
                                <p>Bobcat</p>
                                <p>Scania</p>
                                <p>Ashok Leyland</p>
                                <p>Cummins</p>
                                <p>Kirloskar</p>
                            </div>
                            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: PRIMARY_COLOR }}>Installation Process:</h3>
                            <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                                <li>**Quick turn-around:** Typically 6–10 hours per machine</li>
                                <li>Minimal operational downtime (often during off-hours or scheduled breaks)</li>
                                <li>On-site installation by Saarthi-certified technicians</li>
                                <li>GreenVision monitoring enabled post-installation for immediate verification</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 11 — ECOSYSTEM SUPPORT (The End-to-End Decarbonisation Flow) */}
            <section id="ecosystem" className="py-20" style={{ backgroundColor: TEXT_DARK, color: 'white' }}>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">The End-to-End Decarbonisation Flow for Mining</h2>
                        <p className="text-xl opacity-90 max-w-4xl mx-auto">
                            Saarthi provides a complete solution, from financial modeling to deployment and verifiable long-term reporting.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1: GreenMentor */}
                        <div className="p-6 rounded-xl text-center bg-white/10 backdrop-blur-sm">
                            <IconLeaf className="w-10 h-10 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
                            <h3 className="text-2xl font-bold mb-2">GreenMentor</h3>
                            <p className="text-sm opacity-80">Assess duty cycles, idle patterns, and calculate site-specific ROI and CO₂ reduction potential.</p>
                        </div>
                        {/* Step 2: GreenLabs */}
                        <div className="p-6 rounded-xl text-center bg-white/10 backdrop-blur-sm">
                            <IconTruck className="w-10 h-10 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
                            <h3 className="text-2xl font-bold mb-2">GreenLabs</h3>
                            <p className="text-sm opacity-80">Install the custom-engineered GreenDrive™ Heavy Retrofit System on your fleet.</p>
                        </div>
                        {/* Step 3: GreenVision */}
                        <div className="p-6 rounded-xl text-center bg-white/10 backdrop-blur-sm">
                            <IconBolt className="w-10 h-10 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
                            <h3 className="text-2xl font-bold mb-2">GreenVision</h3>
                            <p className="text-sm opacity-80">Verify fuel savings, track engine performance, and provide auditable ESG compliance data in real-time.</p>
                        </div>
                    </div>
                    
                    <div className="text-center mt-12">
                        <a 
                            href="/ecosystem" 
                            className="inline-flex items-center text-lg font-semibold px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            Explore Saarthi Ecosystem
                            <IconChevronRight className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>
            </section>


            {/* SECTION 12 — CTA SECTION */}
            <section className="py-20 text-center" style={{ backgroundColor: PRIMARY_COLOR, color: TEXT_DARK }}>
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
                        Ready to Improve Fuel Efficiency Across Your Heavy Equipment?
                    </h2>
                    <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto text-white">
                        Share your equipment details, idle ratios and monthly diesel usage for a custom savings estimate.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="/request-retrofit-plan" 
                            className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full shadow-xl transition-all duration-300 transform hover:scale-[1.05] bg-white text-gray-900 hover:bg-gray-100"
                        >
                            Request Heavy Equipment Retrofit Plan
                        </a>
                        <a 
                            href="/contact-mining-specialist" 
                            className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            Contact Mining Solutions Specialist
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default MiningSolutionsPage;