'use client';

import React from 'react';

// --- THEME COLOR VARIABLES ---
const BG_LIGHT = "var(--bg-light, #f8f9fa)";
const BG_CARD_LIGHT = "var(--bg-card-light, #ffffff)";
const PRIMARY_COLOR = "var(--primary-saarthi, #10B981)"; // Tailwind Green-500
const TEXT_DARK = "var(--text-dark, #212529)";
const TEXT_MUTED = "var(--text-muted, #495057)";

// --- CORE ICON COMPONENTS (USED INTERNALLY) ---
const IconTruck = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M5 18H3c-1.1 0-2-.9-2-2V9a2 2 0 0 1 2-2h3l2-2h4l2 2h3c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2h-2c0 1.1-.9 2-2 2s-2-.9-2-2h-4c0 1.1-.9 2-2 2s-2-.9-2-2z"/><path d="M12 11V7"/><path d="M12 11h7"/><path d="M12 11H5"/>
    </svg>
);

const IconBattery = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <rect width="20" height="12" x="2" y="6" rx="2" ry="2"/><line x1="2" x2="2" y1="12" y2="12"/><path d="M22 10V14"/>
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
const BenefitListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start text-lg">
        <IconChevronRight className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
        <span className="text-gray-700">{children}</span>
    </li>
);


// --- START: EVIDENCE STRIP COMPONENTS (Local Implementation of src/components/EvidenceStrip/*) ---

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
const ZapIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 13V8h-6l-2-7L10 8H4v5h2l-2 7 8 2 2-7h4z" />
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
    heading: "8–20% Fuel Savings (RTG/RMG)", // Updated for Ports context
    subtext: "Achieved by optimizing natural gas substitution during variable load cycles.",
  },
  {
    id: 2,
    icon: ZapIcon,
    heading: "Up to 50% PM/CO Reduction", // Updated for Ports context
    subtext: "Validated through real-time telemetry on port handling equipment, enhancing air quality.",
  },
  {
    id: 3,
    icon: ShieldCheckIcon,
    heading: "Certified & Compliant",
    subtext: "CE • UL • ROHS • EMC • ISO 9001. Global standards for trust and reliability.",
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
                        Industry & Safety Standards
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


// --- START: ECOSYSTEM FLOW COMPONENTS (Local Implementation of src/components/EcosystemFlow/*) ---

// 1. Icons for Flow
const PlanningIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a8 8 0 0 0 8-8V7l-8-4-8 4v7a8 8 0 0 0 8 8z" />
    <path d="M15 9l-4 4-2-2" />
  </svg>
);
const BuildIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <path d="M10 12v3" />
    <path d="M14 12v3" />
    <path d="M2 15h20" />
    <path d="M2 19h20" />
    <path d="M4 15v4" />
    <path d="M20 15v4" />
  </svg>
);
const MeasureIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-6a2 2 0 0 0-2 2v6" />
    <path d="M15 15l-3 3-3-3" />
    <path d="M20 7V4H4v3" />
    <path d="M4 17v3h16v-3" />
  </svg>
);
const ResultIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

// 2. Data for Ecosystem Flow
type FlowStep = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isResult?: boolean;
};

const flowData: FlowStep[] = [
  {
    id: 1,
    icon: PlanningIcon,
    title: "GreenMentor",
    description: "Plan & Design: Equipment assessment, gas supply integration plan, and ROI estimation.",
  },
  {
    id: 2,
    icon: BuildIcon,
    title: "GreenLabs",
    description: "Build & Deliver: Non-invasive installation of the Dual Fuel system during scheduled downtime.",
  },
  {
    id: 3,
    icon: MeasureIcon,
    title: "GreenVision",
    description: "Measure & Verify: Real-time telemetry, efficiency monitoring, and auditable ESG reporting.",
  },
  {
    id: 4,
    icon: ResultIcon,
    title: "Verified Green Port",
    description: "The outcome: Proven CO₂ Reduction, Fuel Savings, and Compliance for sustainable operations.",
    isResult: true,
  },
];

// 3. Single Flow Step Card Component
const SingleFlowStep = ({ item }: { item: FlowStep }) => {
    const baseCardClasses = 'bg-white border-gray-200 shadow-sm dark:bg-slate-800 dark:border-slate-700';
    const baseIconClasses = 'bg-[var(--primary-saarthi,#10B981)]/20 text-[var(--primary-saarthi,#10B981)]';
    const baseTitleClasses = 'text-slate-900 dark:text-white';
    const baseDescClasses = 'text-slate-600 dark:text-slate-400';

    const hoverCardClasses = 'bg-white border-4 border-[var(--primary-saarthi,#10B981)] shadow-2xl shadow-[var(--primary-saarthi,#10B981)]/10 dark:bg-slate-700 dark:border-[var(--primary-saarthi,#10B981)]';
    const hoverIconClasses = 'bg-[var(--primary-saarthi,#10B981)] text-white';
    const hoverTitleClasses = 'text-[var(--primary-saarthi,#10B981)]';
    const hoverDescClasses = 'text-slate-700 dark:text-slate-200';

    const mapHoverClasses = (classes: string) => classes.split(' ').map(cls => `hover:${cls}`).join(' ');

    return (
        <div className={`p-6 rounded-xl h-full flex flex-col justify-start text-center transition-all duration-300 border-[2px] 
            ${baseCardClasses} 
            hover:scale-[1.03] 
            ${mapHoverClasses(hoverCardClasses)}
        `}>
            
            {/* Icon Wrapper */}
            <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300
                ${baseIconClasses} 
                ${mapHoverClasses(hoverIconClasses)}`}
            >
                {item.icon}
            </div>

            {/* Title */}
            <h3 className={`mb-2 text-xl font-bold leading-tight transition-colors duration-300
                ${baseTitleClasses} 
                ${mapHoverClasses(hoverTitleClasses)}`}
            >
                {item.title}
            </h3>

            {/* Description */}
            <p className={`text-sm leading-relaxed transition-colors duration-300
                ${baseDescClasses} 
                ${mapHoverClasses(hoverDescClasses)}`}
            >
                {item.description}
            </p>
        </div>
    );
};

// 4. Ecosystem Flow Wrapper Component
const EcosystemFlow = () => (
    <section id="flow" className="py-20" style={{ backgroundColor: BG_LIGHT }}>
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: PRIMARY_COLOR }}>
                    The Saarthi Ecosystem
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: TEXT_DARK }}>
                    The 4-Step Journey to a Green Port
                </h2>
                <p className="text-lg max-w-4xl mx-auto" style={{ color: TEXT_MUTED }}>
                    Our integrated approach ensures success from initial assessment to ongoing, verified impact.
                </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                {flowData.map((item) => (
                    <SingleFlowStep key={item.id} item={item} />
                ))}
            </div>
        </div>
    </section>
);

// --- END: ECOSYSTEM FLOW COMPONENTS ---


// --- MAIN PAGE COMPONENT ---
const FleetSolutionsPage = () => {
    // Determine user ID for demonstration/future use
    const userId = 'demo_user_001';

    return (
        <main className="min-h-screen pt-20" style={{ backgroundColor: BG_LIGHT }}>
            {/* Header / Hero Section */}
            <section className="py-20 text-center" style={{ backgroundColor: BG_CARD_LIGHT }}>
                <div className="container mx-auto px-4">
                    <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: PRIMARY_COLOR }}>
                        Solutions for Ports & Terminals
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight" style={{ color: TEXT_DARK }}>
                        Fuel Transition for Port Efficiency and Sustainability
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto" style={{ color: TEXT_MUTED }}>
                        Implementing Dual Fuel technology in RTGs, RMGs, and Port Equipment achieves significant cost savings and compliance with global green port initiatives.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a 
                            href="#technology" 
                            className="px-8 py-3 text-lg font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg"
                        >
                            Explore Technology
                        </a>
                        <a 
                            href="/contact" 
                            className="px-8 py-3 text-lg font-semibold rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                        >
                            Get a Custom Quote
                        </a>
                    </div>
                </div>
            </section>

            {/* Evidence Strip (Unified Pattern) */}
            <EvidenceStrip />

            {/* Overview Section (The Challenge) - Adjusted margin to fit with Evidence Strip */}
            <section id="overview" className="py-16 pt-8">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: TEXT_DARK }}>The Challenge in Port Operations</h2>
                        <p className="text-lg max-w-3xl mx-auto" style={{ color: TEXT_MUTED }}>
                            Port terminals rely on heavy, diesel-powered equipment (RTGs, RMGs, large forklifts) that generates high operating costs and substantial emissions. Transitioning to cleaner, more efficient power sources is critical for both financial resilience and environmental responsibility in line with global shipping trends.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {/* Metric 1 */}
                        <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: BG_CARD_LIGHT }}>
                            <IconBattery className="w-10 h-10 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
                            <h3 className="text-2xl font-bold mb-2" style={{ color: TEXT_DARK }}>Operational Costs</h3>
                            <p className="text-gray-600">Fuel accounts for a disproportionate share of operating expenses as port equipment runs continuously under high, variable loads.</p>
                        </div>
                        {/* Metric 2 */}
                        <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: BG_CARD_LIGHT }}>
                            <IconLeaf className="w-10 h-10 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
                            <h3 className="text-2xl font-bold mb-2" style={{ color: TEXT_DARK }}>Local Air Quality</h3>
                            <p className="text-gray-600">Dense concentrations of diesel emissions (PM, NOx) from yard equipment directly impact local air quality and human health near port cities.</p>
                        </div>
                        {/* Metric 3 */}
                        <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: BG_CARD_LIGHT }}>
                            <IconTruck className="w-10 h-10 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
                            <h3 className="text-2xl font-bold mb-2" style={{ color: TEXT_DARK }}>Maintenance Complexity</h3>
                            <p className="text-gray-600">Frequent maintenance cycles due to carbon buildup in diesel engines reduce operational uptime and increase service costs.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="technology" className="py-20" style={{ backgroundColor: BG_CARD_LIGHT }}>
                <div className="container mx-auto px-4">
                    {/* Content is now full-width, centered, and constrained for better readability */}
                    <div className="max-w-4xl mx-auto">
                        <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: PRIMARY_COLOR }}>
                            Our Dual Fuel Retrofit
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: TEXT_DARK }}>
                            Converting Existing Port Machinery to LNG/CNG
                        </h2>
                        
                        <div className="space-y-8">
                            <p className="text-xl" style={{ color: TEXT_MUTED }}>
                                Our proprietary Dual Fuel system seamlessly integrates with your existing diesel engines (on RTGs, RMGs, Terminal Tractors, etc.). This allows the engine to run primarily on cleaner, cheaper Natural Gas (LNG or CNG) while using a small pilot quantity of diesel for ignition.
                            </p>

                            <div className="p-6 bg-gray-50 rounded-xl shadow-md border border-gray-100">
                                <p className="text-xl mb-4 font-bold" style={{ color: TEXT_DARK }}>
                                    Key Technological Advantages:
                                </p>
                                <ul className="space-y-4">
                                    <BenefitListItem>
                                        <span className="font-semibold" style={{ color: TEXT_DARK }}>Intelligent Substitution:</span> The system automatically and dynamically optimizes the gas-diesel ratio (up to 70% gas substitution) based on real-time engine load to maximize efficiency and safety.
                                    </BenefitListItem>
                                    <BenefitListItem>
                                        <span className="font-semibold" style={{ color: TEXT_DARK }}>Non-Invasive Installation:</span> The conversion is external to the engine block, preserving the original diesel engine warranty and core integrity, ensuring minimal downtime.
                                    </BenefitListItem>
                                    <BenefitListItem>
                                        <span className="font-semibold" style={{ color: TEXT_DARK }}>High Reliability:</span> Maintains 100% of the original torque and power output required for continuous, heavy-duty port lifting operations.
                                    </BenefitListItem>
                                    <BenefitListItem>
                                        <span className="font-semibold" style={{ color: TEXT_DARK }}>Flexibility:</span> The machinery can instantly switch back to 100% diesel operation if gas supply is low or unavailable.
                                    </BenefitListItem>
                                </ul>
                            </div>

                            <p className="text-lg italic" style={{ color: TEXT_MUTED }}>
                                This retrofit provides a rapid, cost-effective pathway to decarbonization without requiring the complete replacement of expensive legacy equipment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            

            {/* Ecosystem Flow (Unified Pattern, replacing the old Implementation Section) */}
            <EcosystemFlow />

            {/* Key Benefits Section (Remaining content consolidated) */}
            <section id="key-benefits" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: TEXT_DARK }}>Transforming Port Economics and Operations</h2>
                        <p className="text-lg max-w-4xl mx-auto" style={{ color: TEXT_MUTED }}>
                            Our solution delivers a triple win: immediate cost savings, compliance with green mandates, and extended equipment life.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Benefit 1: Cost Reduction (Financial Focus) */}
                        <div className="p-8 rounded-xl shadow-lg border-t-4 border-[var(--primary-saarthi,#10B981)]" style={{ backgroundColor: BG_CARD_LIGHT }}>
                            <h3 className="text-3xl font-bold mb-3" style={{ color: TEXT_DARK }}>Financial ROI</h3>
                            <ul className="space-y-3" style={{ listStyle: 'none', padding: 0 }}>
                                <BenefitListItem>Lower fuel bill due to natural gas price differential (quick payback period).</BenefitListItem> 
                                <BenefitListItem>Increased engine uptime and reliability, minimizing expensive idle time.</BenefitListItem>
                                <BenefitListItem>Reduced total cost of ownership (TCO) across the equipment fleet.</BenefitListItem>
                            </ul>
                        </div>

                        {/* Benefit 2: Environmental Impact */}
                        <div className="p-8 rounded-xl shadow-lg border-t-4 border-[var(--primary-saarthi,#10B981)]" style={{ backgroundColor: BG_CARD_LIGHT }}>
                            <h3 className="text-3xl font-bold mb-3" style={{ color: TEXT_DARK }}>Sustainability Leadership</h3>
                            <ul className="space-y-3" style={{ listStyle: 'none', padding: 0 }}>
                                <BenefitListItem>Significant step towards achieving Net-Zero targets for container terminals.</BenefitListItem>
                                <BenefitListItem>Enhanced corporate image and compliance with international "Green Port" requirements.</BenefitListItem>
                                <BenefitListItem>Measurable reduction in carbon footprint verifiable via the GreenVision IoT platform.</BenefitListItem>
                            </ul>
                        </div>
                        
                        {/* Benefit 3: Maintenance & Longevity */}
                        <div className="p-8 rounded-xl shadow-lg border-t-4 border-[var(--primary-saarthi,#10B981)]" style={{ backgroundColor: BG_CARD_LIGHT }}>
                            <h3 className="text-3xl font-bold mb-3" style={{ color: TEXT_DARK }}>Engine Health</h3>
                            <ul className="space-y-3" style={{ listStyle: 'none', padding: 0 }}>
                                <BenefitListItem>Reduced soot buildup leading to cleaner engine internals and reduced turbocharger strain.</BenefitListItem> 
                                <BenefitListItem>Extended engine oil life and lower frequency of costly filter and oil changes.</BenefitListItem>
                                <BenefitListItem>Mitigation of engine knocking and thermal stress associated with heavy diesel cycling.</BenefitListItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center" style={{ backgroundColor: TEXT_DARK, color: 'white' }}>
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Ready to Improve Fuel Efficiency Across Your Port Fleet?
                    </h2>
                    <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                        Share your equipment inventory (RTG/RMG models), duty cycles and monthly diesel usage for a custom savings estimate and Green Port Roadmap.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* <a 
                            href="/request-retrofit-plan" 
                            className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full shadow-xl transition-all duration-300 transform hover:scale-[1.05] bg-white text-gray-900 hover:bg-gray-100"
                        >
                            Request Port Retrofit Plan
                        </a> */}
                        <a 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            Contact Port Specialist
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default FleetSolutionsPage;