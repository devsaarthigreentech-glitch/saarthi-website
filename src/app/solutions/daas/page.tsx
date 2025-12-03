'use client';

import React from 'react';

// --- THEME COLOR VARIABLES ---
const BG_LIGHT = "var(--bg-light, #f8f9fa)";
const BG_CARD = "var(--bg-card-light, #ffffff)";
const PRIMARY_COLOR = "var(--primary-saarthi, #10B981)"; // Tailwind Green-500
const TEXT_DARK = "var(--text-dark, #212529)";
const TEXT_MUTED = "var(--text-muted, #495057)";
const FINANCE_BLUE = "#3B82F6"; // Blue for financial/trust elements

// --- INLINE SVG ICON COMPONENTS ---
const IconWallet = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
);

const IconTrendingUp = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
    </svg>
);

const IconCheckCircle = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
    </svg>
);

const IconShieldCheck = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const IconSettings = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.39a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.73v.54a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.22.39a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.73v-.54a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2-0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const IconBarChart = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
);

const IconChevronRight = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 18l6-6-6-6"/>
    </svg>
);

const IconArrowRight = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);


// --- COMPONENT FOR BENEFIT LIST ITEMS ---
const BenefitListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start text-lg mb-2">
        <IconCheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
        <span className="text-gray-700">{children}</span>
    </li>
);

// --- MAIN PAGE COMPONENT ---
const DaaSPage = () => {

    const ctaPrimaryStyle = `inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-xl transition-all duration-300 transform hover:scale-[1.05] bg-[${PRIMARY_COLOR}] text-white hover:bg-green-600`;
    const ctaSecondaryStyle = `inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-300`;

    // Mock background image URL
    const heroBgUrl = "/images/solutions/daas-hero.png";

    return (
        <main className="min-h-screen font-sans" style={{ backgroundColor: BG_LIGHT, color: TEXT_DARK }}>

            {/* SECTION 1 — HERO BANNER */}
            <section
                className="relative py-20 md:py-32 lg:py-48 text-white text-center overflow-hidden"
                style={{
                    backgroundImage: `url('${heroBgUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: PRIMARY_COLOR,
                    clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto px-4 max-w-7xl z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        DaaS — Decarbonisation-as-a-Service
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto opacity-90 font-light">
                        Retrofit any diesel engine with <strong>zero upfront cost</strong>. Pay a predictable monthly fee that is always lower than the value of fuel saved — verified by GreenVision.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/calculate-daas"
                            className={`inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.05]`}
                            style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}
                        >
                            Calculate My DaaS Plan
                        </a>
                        <a
                            href="/contact"
                            className={`inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300`}
                        >
                            Talk to Us
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — INTRODUCTION */}
            <section className="py-16 md:py-24" style={{ backgroundColor: BG_CARD }}>
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: TEXT_DARK }}>
                        Zero CapEx. Zero Risk. Guaranteed Outcomes.
                    </h2>
                    <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                        DaaS makes large-scale decarbonisation simple and financially attractive. Instead of buying the retrofit system, you pay a monthly subscription fee that is always less than the fuel you save. Saarthi handles installation, maintenance, warranty, spares and monitoring — while GreenVision verifies real savings and CO₂ reduction in real time.
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
                        <div className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-2 text-green-500"/> Zero upfront cost</div>
                        <div className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-2 text-green-500"/> No asset purchase required</div>
                        <div className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-2 text-green-500"/> Guaranteed savings model</div>
                        <div className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-2 text-green-500"/> Verified performance via GreenVision</div>
                        <div className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-2 text-green-500"/> Easy scaling across fleets/sites</div>
                        <div className="flex items-center"><IconCheckCircle className="w-5 h-5 mr-2 text-green-500"/> Ideal for multi-site operations</div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — HOW DAAS WORKS */}
            <section className="py-16 md:py-24" style={{ backgroundColor: BG_LIGHT }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16" style={{ color: TEXT_DARK }}>
                        A Simple, Transparent, Savings-Linked Model
                    </h2>

                    <div className="grid md:grid-cols-5 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-gray-200 -z-10 transform translate-y-4"></div>

                        {[
                            { step: "1", title: "Install", desc: "Saarthi installs the hydrogen retrofit system on your engines." },
                            { step: "2", title: "Save", desc: "You start saving diesel from day one via cleaner combustion." },
                            { step: "3", title: "Verify", desc: "GreenVision tracks fuel, load, and savings in real-time." },
                            { step: "4", title: "Pay Monthly", desc: "Pay a fee that is always less than your fuel savings." },
                            { step: "5", title: "Net Profit", desc: "The difference becomes your immediate net operating profit." }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg border-t-4" style={{ borderColor: PRIMARY_COLOR }}>
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 shadow-md" style={{ backgroundColor: PRIMARY_COLOR }}>
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* <div className="text-center mt-16 font-mono text-lg bg-white p-4 rounded-lg shadow-inner inline-block w-full max-w-3xl mx-auto border border-gray-200">
                         Fuel Savings &rarr; Monthly Fee &rarr; <span className="font-bold text-green-600">Net Profit</span> &rarr; CO₂ Reduced
                    </div> */}
                     <div className="mt-8 text-center text-gray-500 italic">
                        
                    </div>
                </div>
            </section>

            {/* SECTION 4 — WHO DAAS IS IDEAL FOR */}
            <section className="py-16 md:py-24" style={{ backgroundColor: BG_CARD }}>
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: TEXT_DARK }}>Designed for Companies with High Diesel Spend</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                If your business spends heavily on diesel every month, DaaS can convert a part of that spend into guaranteed net profit + CO₂ reduction without any investment.
                            </p>
                            <ul className="space-y-2">
                                {['Fleets (trucks & buses)', 'DG-heavy industries', 'Ports & marine operators', 'Mining & heavy equipment', 'Manufacturing sites', 'Hospitality & real estate', 'Remote power-based operations'].map((item, i) => (
                                    <BenefitListItem key={i}>{item}</BenefitListItem>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center min-h-[300px] border-2 border-dashed border-gray-300">
                            {/* <div className="relative rounded-xl overflow-hidden min-h-[300px] border-2 border-gray-200"> */}
  <img
    src="/images/solutions/daas_img.png"   // 👈 replace with your actual image path
    alt="Industries — truck, ship, factory"
    className="object-cover object-center"
  />
{/* </div> */}

                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 — DAAS FINANCIAL MODEL */}
            <section className="py-16 md:py-24 text-white" style={{ backgroundColor: TEXT_DARK }}>
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-white">Always Save More Than You Pay</h2>
                    <p className="text-xl mb-12 opacity-90">
                        DaaS is a performance-first model. The fee is engineered to be significantly lower than the verified diesel savings.
                    </p>

                    <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto transform hover:scale-[1.02] transition-transform">
                        <h3 className="text-2xl font-bold mb-6 text-blue-600">Monthly Financial Example</h3>
                        <div className="space-y-4 text-lg">
                            <div className="flex justify-between border-b pb-2">
                                <span>Fuel Saved per Month:</span>
                                <span className="font-bold text-green-600">₹40,000</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span>DaaS Monthly Fee:</span>
                                <span className="font-bold text-gray-600">₹25,000</span>
                            </div>
                            <div className="flex justify-between pt-2 text-xl">
                                <span className="font-extrabold">Your Net Profit:</span>
                                <span className="font-extrabold text-green-600">₹15,000/month</span>
                            </div>
                        </div>
                        <div className="mt-6 text-sm text-gray-500">
                            *CO₂ Reduction verified via GreenVision. Figures are for illustration.
                        </div>
                    </div>

                    {/* <div className="mt-12">
                        <a href="#" className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg">
                            Use the DaaS Estimator &rarr;
                        </a>
                    </div> */}
                </div>
            </section>

            {/* SECTION 6 — WHAT SAARTHI HANDLES */}
            <section className="py-16 md:py-24" style={{ backgroundColor: BG_LIGHT }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: TEXT_DARK }}>Complete Lifecycle Responsibility</h2>
                        <p className="text-lg text-gray-600">You focus on operations — Saarthi handles everything else.</p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Hardware installation", "Calibration & tuning", "Preventive maintenance", 
                            "On-site service", "Replacement of consumables", "24×7 support", 
                            "Real-time monitoring", "Performance guarantees", "Fail-safe safety protocols"
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-5 rounded-lg shadow-md flex items-center border-l-4" style={{ borderColor: PRIMARY_COLOR }}>
                                <IconSettings className="w-6 h-6 mr-3 text-gray-400"/>
                                <span className="font-medium text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7 — WHAT YOU GET */}
            <section className="py-16 md:py-24" style={{ backgroundColor: BG_CARD }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: TEXT_DARK }}>Guaranteed Impact, Clean Data & Zero Complexity</h2>
                            <div className="space-y-4">
                                <BenefitListItem>Hydrogen retrofit system (GreenDrive / GreenX / GreenMarine)</BenefitListItem>
                                <BenefitListItem>Installation on your engines</BenefitListItem>
                                <BenefitListItem>Verified fuel savings & CO₂ reduction analytics</BenefitListItem>
                                <BenefitListItem>Monthly ESG report & Engine performance insights</BenefitListItem>
                                <BenefitListItem>DaaS billing based on GreenVision M&V</BenefitListItem>
                                <BenefitListItem>Predictable OPEX (no CapEx)</BenefitListItem>
                            </div>
                            {/* <div className="mt-8">
                                <a href="#" className="text-blue-600 font-bold hover:underline text-lg flex items-center">
                                    Request a Sample Monthly Report <IconChevronRight className="w-5 h-5 ml-1"/>
                                </a>
                            </div> */}
                        </div>
                        <div className="order-1 lg:order-2 bg-gray-50 rounded-xl p-8 shadow-inner flex items-center justify-center min-h-[300px]">
                            <div className="relative rounded-xl overflow-hidden min-h-[300px] border-2 border-gray-200">
  <img
    src="/images/solutions/daas_img_2.png"   // 👈 replace with your actual image path
    alt="Industries — truck, ship, factory"
    className="object-cover"
  />
</div>

                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8 — WHY DAAS WORKS BETTER */}
            <section className="py-16 md:py-24" style={{ backgroundColor: BG_LIGHT }}>
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-8" style={{ color: TEXT_DARK }}>Perfect for Enterprises Scaling Across Multiple Sites</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="font-bold text-xl mb-3 text-blue-600">Financial Agility</h3>
                            <p className="text-gray-600">No budget approval needed for CapEx. Predictable P&L impact. Faster contract cycles.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="font-bold text-xl mb-3 text-green-600">Operational Ease</h3>
                            <p className="text-gray-600">Performance risk shifts entirely to Saarthi. Easy expansion to new fleets. Strong ESG alignment.</p>
                        </div>
                    </div>
                    {/* <div className="mt-10">
                        <a href="#" className="inline-flex items-center px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition">
                            Compare CapEx vs DaaS &rarr;
                        </a>
                    </div> */}
                </div>
            </section>

            {/* SECTION 9 — GREENVISION ENABLED PAYMENT */}
            <section className="py-16 md:py-24" style={{ backgroundColor: BG_CARD }}>
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                        <IconBarChart className="w-8 h-8"/>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: TEXT_DARK }}>Transparent, Tamper-Proof Billing Powered by GreenVision</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        GreenVision’s telemetry platform acts as the single source of truth for all DaaS contracts. Billing is based on automated M&V reports verifying fuel consumed, saved, uptime, and CO₂ reduction.
                    </p>
                    <a href="#" className="text-green-600 font-bold hover:underline text-lg">Explore GreenVision &rarr;</a>
                </div>
            </section>

            {/* SECTION 10 — ECOSYSTEM INTEGRATION */}
            <section className="py-16 md:py-24" style={{ backgroundColor: BG_LIGHT }}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-10" style={{ color: TEXT_DARK }}>Powered by the Full Saarthi Ecosystem</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg font-semibold text-gray-700">
                        <div className="bg-white px-6 py-3 rounded-lg shadow">GreenMentor</div>
                        <IconArrowRight className="hidden md:block text-green-500"/>
                        <div className="bg-white px-6 py-3 rounded-lg shadow">GreenLabs</div>
                        <IconArrowRight className="hidden md:block text-green-500"/>
                        <div className="bg-white px-6 py-3 rounded-lg shadow">GreenVision</div>
                        <IconArrowRight className="hidden md:block text-green-500"/>
                        <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">DaaS Profit</div>
                    </div>
                    <div className="mt-10">
                        <a href="#" className="text-blue-600 font-bold hover:underline">Explore the Saarthi Ecosystem &rarr;</a>
                    </div>
                </div>
            </section>

            {/* SECTION 11 — SAFETY & COMPLIANCE */}
            <section className="py-16 md:py-24" style={{ backgroundColor: TEXT_DARK, color: 'white' }}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Certified. Safe. Enterprise-Ready.</h2>
                            <ul className="space-y-3 text-lg opacity-90">
                                <li className="flex items-center"><IconShieldCheck className="w-6 h-6 mr-3 text-green-400"/> No compressed hydrogen storage</li>
                                <li className="flex items-center"><IconShieldCheck className="w-6 h-6 mr-3 text-green-400"/> Auto shutoff on abnormal conditions</li>
                                <li className="flex items-center"><IconShieldCheck className="w-6 h-6 mr-3 text-green-400"/> Marine-/DG-/fleet-safe wiring</li>
                                <li className="flex items-center"><IconShieldCheck className="w-6 h-6 mr-3 text-green-400"/> Redundancy in safety sensors</li>
                            </ul>
                            <div className="mt-8 flex gap-4 text-sm font-mono text-green-400">
                                <span>CE</span> <span>UL</span> <span>ROHS</span> <span>EMC</span> <span>ISO 9001</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="#" className="inline-block border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition font-bold">View Safety Standards &rarr;</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 12 — CTA SECTION */}
            <section className="py-20 md:py-28 text-center" style={{ backgroundColor: PRIMARY_COLOR }}>
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready for Zero CapEx Decarbonisation?</h2>
                    <p className="text-xl text-white opacity-90 mb-10">
                        Share your engines and monthly diesel spend — we’ll calculate your savings and monthly fee.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="/calculate-daas" className="px-8 py-4 bg-white text-green-600 font-bold text-xl rounded-full shadow-xl hover:bg-gray-100 transition transform hover:scale-105">
                            Calculate My DaaS Plan
                        </a>
                        <a href="/contact" className="px-8 py-4 border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white/10 transition">
                            Speak With a Specialist
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default DaaSPage;