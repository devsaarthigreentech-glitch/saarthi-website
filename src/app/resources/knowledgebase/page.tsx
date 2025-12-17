'use client';

import React, { useState } from 'react';

// --- INLINE SVG ICON COMPONENTS ---
const ChevronDown = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m6 9 6 6 6-6"/>
    </svg>
);

const Shield = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
);

const Wrench = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"/>
        <path d="m14.7 6.3 1.6 1.6"/>
    </svg>
);

const Zap = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
);

const DollarSign = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
);

const Target = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
    </svg>
);
// ------------------------------------

// --- Theme Colors ---
const PRIMARY_COLOR = '#10B981'; // Saarthi Green
const BG_LIGHT = '#f8f9fa';
const TEXT_DARK = '#212529';

// Data Structure for FAQs
const faqs = [
    {
        title: 'Safety & Reliability',
        icon: Shield,
        items: [
            {
                q: 'Is hydrogen retrofit technology safe for existing diesel engines?',
                a: 'Yes, Saarthi\'s hydrogen retrofit systems are engineered with safety as the top priority. The systems use on-demand hydrogen generation through low-pressure wet electrolysers—meaning there are no high-pressure cylinders or hydrogen storage tanks. Safety features include automatic shutdown on anomalies, anti-backflow controls, flame arrestors, temperature monitoring, and engine-load-based control systems. All products are certified to global standards including CE, UL, ROHS, EMC, and ISO 9001, ensuring they meet stringent safety requirements for industrial, marine, and commercial deployment.',
            },
            {
                q: 'What happens if there\'s a system malfunction or abnormal condition?',
                a: 'The system is designed with multiple fail-safe mechanisms. If any abnormal condition is detected—such as unusual temperature, low water levels, pressure irregularities, or safety parameter breaches—the system automatically shuts down to protect the engine. Additionally, GreenVision\'s real-time monitoring provides instant alerts for any anomalies, allowing for quick response and diagnosis. All installations include redundant safety sensors and integrated interlocks to ensure continuous protection.',
            },
        ],
    },
    {
        title: 'Installation & Compatibility',
        icon: Wrench,
        items: [
            {
                q: 'How long does installation take and will it disrupt my operations?',
                a: 'Installation is surprisingly quick and minimally disruptive. For trucks and buses, typical installation takes 4-6 hours per vehicle. DG sets require 4-8 hours depending on size, while marine and heavy equipment installations take 6-10 hours. The process involves no engine modification or replacement—the hydrogen system integrates seamlessly with your existing diesel engine. Installation is performed by certified technicians, and scheduling can be arranged to minimize operational downtime. Most fleet operators can stagger installations across their assets to maintain continuous operations.',
            },
            {
                q: 'Which diesel engines are compatible with Saarthi\'s retrofit systems?',
                a: 'Saarthi\'s systems work with a wide range of diesel engines across multiple applications. For vehicles, compatibility includes BS-III to BS-VI engines with 4-16L displacement from manufacturers like Tata, Leyland, BharatBenz, Volvo, and Scania. DG sets from 20 kVA to 4000 kVA are supported, including brands like Cummins, Kirloskar, Caterpillar, Mahindra, and Perkins. Marine engines and heavy equipment from Caterpillar, Komatsu, Volvo, JCB, Hitachi, and others are also compatible. The GreenMentor assessment process evaluates your specific engines to ensure optimal configuration and performance.',
            },
        ],
    },
    {
        title: 'Performance & Benefits',
        icon: Zap,
        items: [
            {
                q: 'How much fuel savings can I realistically expect?',
                a: 'Fuel savings vary based on engine type, duty cycle, and operational patterns, but verified results show consistent improvements. Fleets typically see 5-25% fuel savings, with long highway routes achieving 5-20% and high-idle vehicles reaching 8-20%. DG sets show 2-15% savings depending on load profiles, with low-load generators achieving the highest efficiency gains of 10-20%. Mining and heavy equipment with high idle times can see 5-18% savings. All savings are independently verified through GreenVision\'s real-time telemetry, ensuring transparent and auditable results.',
            },
            {
                q: 'What emission reductions have been verified through testing?',
                a: 'Stack emission tests conducted on 380 kVA and 1500 kVA DG sets at 75% load demonstrate significant emission reductions. Particulate Matter (PM) reduction exceeds 50% and can reach up to 95%. Carbon Monoxide (CO) and Hydrocarbon (HC) emissions also show substantial reductions. The cleaner combustion achieved through hydrogen-oxygen infusion reduces soot formation, leading to cleaner engine internals, smoother exhaust quality, and improved long-term engine performance. These results are directly applicable to marine auxiliary engines and similar duty-cycle applications.',
            },
        ],
    },
    {
        title: 'Business Models & Investment',
        icon: DollarSign,
        items: [
            {
                q: 'What\'s the difference between CapEx purchase and DaaS (Decarbonisation-as-a-Service)?',
                a: 'CapEx purchase means you own the system outright through a one-time payment, including full installation, commissioning, warranty support, and GreenVision integration. DaaS requires zero upfront investment—you pay a predictable monthly fee that is always lower than your verified fuel savings. Under DaaS, Saarthi handles everything: installation, maintenance, spares, technical support, and performance guarantees. The monthly fee is linked to verified savings measured through GreenVision telemetry. DaaS is ideal for organizations wanting immediate decarbonisation without capital expenditure, making it easier to scale across large fleets or multiple sites.',
            },
            {
                q: 'How does GreenVision verify that I\'m actually saving fuel and reducing emissions?',
                a: 'GreenVision is Saarthi\'s independent IoT and AI platform that captures comprehensive real-time data from every engine. It monitors fuel consumption, engine load, run hours, RPM, hydrogen system activity, temperature, and safety parameters—all timestamped and tamper-proof. The platform establishes baseline performance before retrofit installation, then continuously measures actual performance to calculate precise fuel savings and CO₂ reductions. Before-and-after comparisons are adjusted for duty cycles, seasonal variations, and operational patterns. All data is exportable for auditors and integrates with ESG reporting systems, providing complete transparency and audit-ready documentation.',
            },
        ],
    },
    {
        title: 'Strategic Approach',
        icon: Target,
        items: [
            {
                q: 'Do I need to replace my diesel engines to decarbonise my operations?',
                a: 'No—and that\'s precisely why Saarthi exists. The world cannot replace billions of diesel engines overnight, yet climate action cannot wait. Saarthi\'s hydrogen retrofit technology transforms existing diesel engines to achieve measurable emission reductions and fuel efficiency improvements without engine replacement. This approach is practical, immediate, and scalable. Whether you operate trucks, buses, DG sets, marine vessels, or heavy mining equipment, you can begin decarbonising today using the assets you already own, avoiding massive capital expenditure while achieving real environmental impact.',
            },
            {
                q: 'How does the complete Saarthi ecosystem work together?',
                a: 'Saarthi operates through three integrated pillars that deliver end-to-end decarbonisation. GreenMentor provides strategy, advisory, and deployment planning—assessing your engines, duty cycles, and ESG goals to create a customized roadmap. GreenLabs engineers, manufactures, and installs the hydrogen retrofit systems, delivering certified hardware through either CapEx purchase or DaaS models. GreenVision independently measures and verifies all performance metrics through real-time telemetry, ensuring every fuel savings claim and CO₂ reduction is transparent and auditable. This integrated loop—Plan & Design → Build & Deliver → Measure & Verify—ensures engineered decarbonisation with proven, verified impact',
            },
        ],
    },
];

// Component for a single FAQ item (Accordion)
const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-start w-full py-5 text-left font-semibold transition duration-300 hover:text-opacity-80 focus:outline-none"
                style={{ color: TEXT_DARK }}
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="text-lg md:text-xl pr-6">{question}</span>
                <ChevronDown
                    className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    style={{ color: PRIMARY_COLOR }}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
                style={{ color: TEXT_DARK }}
            >
                <p className="text-base leading-relaxed pl-2 pr-6">{answer}</p>
            </div>
        </div>
    );
};

// Main Component
const FAQsApp = () => {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        // <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: BG_LIGHT }}>
            // {/* <div className="max-w-6xl mx-auto"> */}
                // {/* Header Section */}
                <>
                      <section className="relative bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-20 md:py-24 text-center max-w-5xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
Find quick answers about safety, installation, performance, and business models for hydrogen retrofit technology.
                    
          </p>
        </div>
      </section>
                {/* <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight" style={{ color: TEXT_DARK }}>
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto" style={{ color: TEXT_DARK }}>
                        Find quick answers about safety, installation, performance, and business models for hydrogen retrofit technology.
                    </p>
                </div> */}

                {/* FAQ Sections */}
                <div className="space-y-12">
                    {faqs.map((section, sectionIndex) => (
                        <div key={section.title} className="bg-white p-6 md:p-10 rounded-2xl shadow-xl transition duration-500 hover:shadow-2xl">
                            {/* Section Title */}
                            <div className="flex items-center mb-8">
                                {/* Using the imported SVG component as the icon */}
                                <section.icon className="h-10 w-10 mr-4" style={{ color: PRIMARY_COLOR }} />
                                <h2 className="text-3xl font-bold" style={{ color: TEXT_DARK }}>
                                    {section.title}
                                </h2>
                            </div>

                            {/* Accordion Items */}
                            <div className="divide-y divide-gray-100">
                                {section.items.map((item, itemIndex) => {
                                    // Unique index for each item across all sections
                                    const uniqueIndex = `${sectionIndex}-${itemIndex}`;
                                    return (
                                        <FAQItem
                                            key={uniqueIndex}
                                            question={item.q}
                                            answer={item.a}
                                            isOpen={openItem === uniqueIndex}
                                            onClick={() => toggleItem(uniqueIndex)}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center bg-gray-900 text-white p-10 md:p-16 rounded-2xl shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                        Didn't find your answer?
                    </h2>
                    <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
                        Connect with one of our specialized engineers for detailed technical support or a custom decarbonisation plan.
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.05] border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
                    >
                        Contact an Expert
                    </a>
                </div>
                </>
            // {/* </div> */}
        // {/* </div> */}
    );
};

export default FAQsApp;