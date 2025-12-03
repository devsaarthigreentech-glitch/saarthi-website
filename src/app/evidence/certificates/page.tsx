'use client';

import React from 'react';

// --- INLINE SVG ICON COMPONENTS ---
const IconScrollText = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M12 18v-6"/>
        <path d="M8 15h8"/>
    </svg>
);

const IconAward = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
);

const IconCheckCircle = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <path d="M9 11l3 3L22 4"/>
    </svg>
);

const IconDownload = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" x2="12" y1="15" y2="3"/>
    </svg>
);

const IconExternalLink = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" x2="21" y1="14" y2="3"/>
    </svg>
);
// ------------------------------------

// --- Data Structure ---

const PLACEHOLDER_PDF = "/downloads/patent-hydrogen.pdf"; 

// Array for Certifications (CE, ISO, etc.)
const certifications = [
    { id: 1, title: "ISO 9001:2015", issuer: "Quality Management", description: "Global standard for Quality Management Systems." },
    { id: 2, title: "CE Marking", issuer: "European Conformity", description: "Meets EU safety, health, and environmental standards." },
    { id: 3, title: "ROHS Compliant", issuer: "Hazardous Substances", description: "Ensures no restricted hazardous materials are used." },
    { id: 4, title: "EMC Certified", issuer: "Electromagnetic Compatibility", description: "Guarantees no interference with other electrical equipment." },
    { id: 5, title: "TUV Sud Tested", issuer: "Independent Verification", description: "Third-party validation of performance and safety." },
    { id: 6, title: "UL 1741", issuer: "Safety Standard", description: "Compliance for inverter and converter equipment." },
];

// Array for Patents (Updated based on user input)
const patents = [
    {
        id: 1,
        title: "AN APPARATUS FOR HYDROGEN GENERATION AND A METHOD THEREOF",
        //number: "US 11,XXX,XXX B2",
        //status: "Granted",
        //summary: "Protects the proprietary, low-pressure wet electrolyser design optimized for seamless integration with diesel engines.",
        link: PLACEHOLDER_PDF, 
        type: "pdf"
    },
    // {
    //     id: 2,
    //     title: "AI-DRIVEN TELEMETRY SYSTEM FOR REAL-TIME VERIFICATION (GREENVISION)",
    //     number: "IN 2023X4XXXX A",
    //     status: "Application Filed",
    //     summary: "Covers the intellectual property behind the tamper-proof data logging and verified savings algorithms for ESG reporting.",
    //     link: 'image_6a8694.png', 
    //     type: "image"
    // },
    {
        id: 3,
        title: "ELECTROLYSER UNIT, SYSTEM AND METHOD OF WORKING OF ELECTROLYSER UNIT",
        //number: "CN ZLXXXXXX",
        //status: "Granted",
        //summary: "Patent on the unique communication methods used to modulate hydrogen injection based on real-time engine load and parameters.",
        link: '/downloads/patent-electrolyser.pdf', // Assuming this is also an image for now based on request context
        type: "pdf"
    },
];

// --- Theme Colors ---
const PRIMARY_COLOR = '#10B981'; // Saarthi Green
const ACCENT_COLOR = '#059669'; // Darker Green

// Note: Background and Text colors are now handled via Tailwind classes (bg-white/dark:bg-slate-800, text-gray-900/dark:text-white)

// Certification Card Component - Compact Grid
const CertificationCard = ({ item }) => (
    <div className="flex flex-col p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 h-full group">
        <div className="flex items-center mb-3">
            <div className="p-2 rounded-full bg-green-50 dark:bg-green-900/30 mr-3">
                <IconCheckCircle className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />
            </div>
            <div>
                <h3 className="text-sm font-bold leading-tight text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-xs font-medium" style={{ color: PRIMARY_COLOR }}>{item.issuer}</p>
            </div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
    </div>
);

// Patent Card Component - Compact Row
const PatentCard = ({ item }) => (
    <div className="flex flex-col sm:flex-row sm:items-start justify-between p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 group">
        <div className="flex-grow pr-4">
            <div className="flex items-center mb-2">
                <IconScrollText className="w-5 h-5 mr-2" style={{ color: ACCENT_COLOR }} />
                <h3 className="text-base font-bold leading-snug text-gray-900 dark:text-white">
                    {item.title}
                </h3>
            </div>
            {/* <div className="flex flex-wrap items-center gap-3 mb-2 text-xs">
                <span className="font-mono font-medium px-2 py-0.5 bg-gray-100 dark:bg-slate-700 rounded text-gray-600 dark:text-gray-300">
                    {item.number}
                </span>
                <span className={`px-2 py-0.5 rounded-full font-semibold ${
                    item.status === 'Granted' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' 
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300'
                }`}>
                    {item.status}
                </span>
            </div> */}
            {/* <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
                {item.summary}
            </p> */}
        </div>
        
        <div className="mt-4 sm:mt-0 sm:self-center flex-shrink-0">
            <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 dark:border-slate-600 text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-400 hover:border-green-200 dark:hover:border-green-500/30 transition-colors duration-200"
            >
                {item.type === 'pdf' ? 'Download PDF' : 'View Image'}
                {item.type === 'pdf' ? <IconDownload className="w-4 h-4 ml-2" /> : <IconExternalLink className="w-4 h-4 ml-2" />}
            </a>
        </div>
    </div>
);

// Main Component
const CertificationsPageCompact = () => {
    return (
        <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950">
            <div className="max-w-5xl mx-auto">
                
                {/* Header Section */}
                <header className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                        <IconAward className="w-8 h-8" style={{ color: ACCENT_COLOR }} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900 dark:text-white">
                        Innovation & Compliance
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Backed by global standards and proprietary intellectual property.
                    </p>
                </header>

                {/* Patents Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 pl-4 border-l-4 text-gray-900 dark:text-white" style={{ borderColor: PRIMARY_COLOR }}>
                        Patents & Intellectual Property
                    </h2>
                    <div className="space-y-4">
                        {patents.map(patent => (
                            <PatentCard key={patent.id} item={patent} />
                        ))}
                    </div>
                </section>

                {/* Certifications Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 pl-4 border-l-4 text-gray-900 dark:text-white" style={{ borderColor: PRIMARY_COLOR }}>
                        Quality Certifications
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {certifications.map(cert => (
                            <CertificationCard key={cert.id} item={cert} />
                        ))}
                    </div>
                </section>

                {/* Contact/Compliance CTA */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center border border-gray-100 dark:border-slate-700">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Need specific compliance documents?</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">Our compliance team is available to assist with detailed audits.</p>
                    <a 
                        href="/contact-compliance" 
                        className="inline-block px-6 py-2.5 text-sm font-bold text-white rounded-full shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-0.5"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                    >
                        Contact Compliance Team
                    </a>
                </div>

            </div>
        </main>
    );
};

export default CertificationsPageCompact;