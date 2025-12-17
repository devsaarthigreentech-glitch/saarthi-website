import React from 'react';

// Define the brand color for consistency
const brandColor = 'var(--brand, #33A04A)';

// --- INLINE SVG ICON COMPONENTS (Replaces lucide-react) ---

const IconTimeline = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const IconScale = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M16 16v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1" />
        <path d="M7 16V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <path d="M3 3l.7 18.2a.2.2 0 0 0 .4 0L5 3" />
        <path d="M21 3l-.7 18.2a.2.2 0 0 1-.4 0L19 3" />
    </svg>
);

const IconZap = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

const IconTruck = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M5 18H3c-1.1 0-2-.9-2-2V9a2 2 0 0 1 2-2h3l2-2h4l2 2h3a2 2 0 0 1 2 2v7c0 1.1-.9 2-2 2h-1" />
        <path d="M18 18h2c1.1 0 2-.9 2-2v-7a2 2 0 0 0-2-2h-3l-2 2h-4l-2-2H3a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2" />
        <circle cx="7.5" cy="18.5" r="2.5" />
        <circle cx="17.5" cy="18.5" r="2.5" />
    </svg>
);

const IconTarget = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

const IconBookOpen = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M2 19.5c0 .769.545 1.396 1.218 1.488L12 21.5l8.782-.512c.673-.092 1.218-.719 1.218-1.488V16c0-1.077-.923-2-2-2h-1V3c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v11H3c-1.077 0-2 .923-2 2v3.5z" />
        <path d="M21 15v-2" />
        <path d="M22 19V6" />
    </svg>
);


const MissionJourney = () => {
    
    // Icon mapping updated to use inline SVG components
    const philosophyPoints = [
        { icon: IconScale, text: "Practical, not aspirational" },
        { icon: IconZap, text: "Affordable, not elite" },
        { icon: IconTruck, text: "Deployable today, not dependent on distant technologies" },
        { icon: IconTarget, text: "Scientifically validated, not promised" },
        { icon: IconBookOpen, text: "A catalyst for growth, not a burden on businesses" },
    ];

    const roadmapPoints = [
        "Global adoption of retrofit hydrogen technology",
        "Integration of real-time IoT and ESG intelligence through GreenVision",
        "Partnerships that accelerate emission reduction at enterprise and national levels",
        "Innovation pipelines through GreenLabs to advance hydrogen-based solutions",
    ];

    return (
        // <div className="bg-gray-50 dark:bg-gray-950 py-16 md:py-24 text-gray-800 dark:text-gray-200 font-inter">
        //     <div className="container mx-auto px-4 max-w-7xl">
                <>
                {/* Main Mission Header */}
                <section className="relative bg-slate-900 text-white">
    <div className="container mx-auto px-6 py-20 md:py-24 text-center max-w-6xl">
      <p
        className="text-sm font-semibold uppercase tracking-widest mb-3"
        style={{ color: brandColor }}
      >
        Driving Change
      </p>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
        Our Journey & Mission
      </h1>

      <p className="mt-4 text-xl md:text-2xl text-slate-300 font-medium">
        Engineering a Profitable Path to Net-Zero
      </p>
    </div>
  </section>


                {/* Section 1: A Journey Born From a Simple Question */}
                <section className="mb-16 md:mb-24 p-8 rounded-3xl shadow-xl bg-white dark:bg-gray-900 border-t-4" style={{ borderColor: brandColor }}>
                    <div className="flex items-center justify-center mb-6">
                        <IconTimeline color={brandColor} />
                    </div>
                    <h4 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                        How do we decarbonise the world today, not ten years from now?
                    </h4>
                    <div className="max-w-4xl mx-auto text-xl space-y-4 text-gray-700 dark:text-gray-300">
                        <p>
                            Saarthi GreenTech was born from this question — not in a lab, but in the real world where diesel engines power logistics, manufacturing, shipping, mining, telecom infrastructure, and essential public services. The world cannot simply replace these engines overnight. Yet the climate cannot wait for long-term transitions.
                        </p>
                        <p className="font-semibold" style={{ color: brandColor }}>
                            We realised the world needed a solution that was practical, immediate, and scalable.
                        </p>
                        <ul className="list-none space-y-2 pl-0">
                            <li><span className="text-2xl mr-2 font-bold" style={{ color: brandColor }}>→</span> A solution that reduces emissions without replacing the engines.</li>
                            <li><span className="text-2xl mr-2 font-bold" style={{ color: brandColor }}>→</span> A solution that saves fuel while saving the planet.</li>
                            <li><span className="text-2xl mr-2 font-bold" style={{ color: brandColor }}>→</span> A solution that works across any engine, any size, any geography.</li>
                        </ul>
                        <p>
                            This is where our journey began.
                        </p>
                    </div>
                </section>

                {/* Section 2: From an Idea to a Breakthrough (The Timeline) */}
                <section className="mb-16 md:mb-24">
    <h4 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        From an Idea to a Breakthrough
    </h4>
    <div className="relative max-w-4xl mx-auto">
        {/* Timeline Connector Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
            {/* Item 1: Experimentation (Content on Left) */}
            <div className="flex flex-col md:flex-row items-center md:items-start relative">
                <div className="md:w-1/2 md:pr-10 text-right space-y-2 order-2 md:order-1">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white">Years of Experimentation</h5>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Years of experimentation, failures, redesigns, and repeated field trials followed. We went from small engines to heavy trucks, from city buses to remote diesel generators, from testing grounds in India to validation trials across Asia.
                    </p>
                </div>
                {/* <div className="z-10 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border-4 mb-4 md:mb-0" style={{ borderColor: brandColor }}>
                    <span className="text-lg font-bold" style={{ color: brandColor }}>1</span>
                </div> */}
                {/* Empty Spacer on Right */}
                <div className="md:w-1/2 md:pl-10 order-1 md:order-2"></div>
            </div>
            
            {/* Item 2: Clarity and Confirmation (Content on Right) - FIXED */}
            <div className="flex flex-col md:flex-row items-center md:items-start relative">
                {/* Empty Spacer on Left (order-2 on mobile, order-1 on desktop) */}
                <div className="md:w-1/2 md:pr-10 order-2 md:order-1"></div> 

                {/* <div className="z-10 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border-4 mb-4 md:mb-0" style={{ borderColor: brandColor }}>
                    <span className="text-lg font-bold" style={{ color: brandColor }}>2</span>
                </div>
                 */}
                {/* Content Block on Right (order-1 on mobile, order-2 on desktop) */}
                <div className="md:w-1/2 md:pl-10 text-left space-y-2 order-1 md:order-2">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white">The Breakthrough Confirmation</h5>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Each setback sharpened the clarity of our vision. Each breakthrough confirmed that hydrogen-assisted combustion could become a powerful bridge to a cleaner world.
                    </p>
                </div>
            </div>

            {/* Item 3: The Proprietary System (Content on Left) */}
            <div className="flex flex-col md:flex-row items-center md:items-start relative">
                <div className="md:w-1/2 md:pr-10 text-right space-y-2 order-2 md:order-1">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white">Engineered for Dual Benefit</h5>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Our proprietary hydrogen retrofit systems eventually emerged from this long, disciplined pursuit — engineered to deliver both measurable decarbonisation and economic value. This dual benefit defines everything we build.
                    </p>
                </div>
                {/* <div className="z-10 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border-4 mb-4 md:mb-0" style={{ borderColor: brandColor }}>
                    <span className="text-lg font-bold" style={{ color: brandColor }}>3</span>
                </div> */}
                <div className="md:w-1/2 md:pl-10 order-1 md:order-2"></div>
            </div>
        </div>
        <p className='mt-8 text-center text-gray-500 dark:text-gray-400'>
            
        </p>
    </div>
</section>
                

                {/* Section 3: A Mission Rooted in Purpose */}
                <section className="mb-16 md:mb-24 p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl">
                    <h4 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        A Mission Rooted in Purpose, Not Trends
                    </h4>
                    <p className="text-center text-xl max-w-3xl mx-auto mb-10 text-gray-700 dark:text-gray-300">
                        At Saarthi, we believe sustainability must be:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {philosophyPoints.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-md">
                                    <Icon className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: brandColor }} />
                                    <p className="text-lg font-medium text-gray-900 dark:text-white">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-10 text-center max-w-4xl mx-auto text-lg pt-4 border-t border-gray-200 dark:border-gray-800">
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                            We exist to solve the world’s diesel problem at scale — by transforming engines already in operation.
                        </p>
                        <p className="text-xl font-semibold" style={{ color: brandColor }}>
                            Our hydrogen-enabled systems deliver immediate emission reduction and notable fuel savings, creating a path where profitability and sustainability reinforce each other.
                        </p>
                    </div>
                </section>

                {/* Section 4: The Saarthi Philosophy */}
                <section className="mb-16 md:mb-24 p-8 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-inner">
                    <h4 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        The Saarthi Philosophy
                    </h4>
                    <div className="max-w-4xl mx-auto text-xl space-y-4 text-gray-700 dark:text-gray-300">
                        <p className="text-center italic mb-6">
                            Our name reflects who we are. In ancient tradition, a Saarthi is a guide, a navigator, the one who helps others travel farther with clarity and strength.
                        </p>
                        <ul className="list-none space-y-3 pl-0">
                            <li className="flex items-start"><span className="text-2xl mr-3 font-bold" style={{ color: brandColor }}>•</span> <span>Guiding industries on their decarbonisation journey</span></li>
                            <li className="flex items-start"><span className="text-2xl mr-3 font-bold" style={{ color: brandColor }}>•</span> <span>Engineering solutions that create measurable value</span></li>
                            <li className="flex items-start"><span className="text-2xl mr-3 font-bold" style={{ color: brandColor }}>•</span> <span>Supporting organisations in transitioning smoothly and affordably</span></li>
                            <li className="flex items-start"><span className="text-2xl mr-3 font-bold" style={{ color: brandColor }}>•</span> <span>Building a future where sustainability is not an option, but an advantage</span></li>
                        </ul>
                    </div>
                </section>
                
                {/* Section 5: Where the Journey Leads Next (Roadmap) */}
                <section className="mb-16 md:mb-24">
                    <h4 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        Where the Journey Leads Next
                    </h4>
                    <p className="text-center text-xl max-w-4xl mx-auto mb-10 text-gray-700 dark:text-gray-300">
                        We stand at an inflection point. Hydrogen-enabled decarbonisation has moved from possibility to proof. The next chapter is scale — across fleets, factories, telecom networks, ports, marine engines, and beyond.
                    </p>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {roadmapPoints.map((item, index) => (
                            <div key={index} className="flex items-start space-x-4 p-5 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
                                <span className="text-2xl font-extrabold flex-shrink-0" style={{ color: brandColor }}>{index + 1}.</span>
                                <p className="text-lg text-gray-900 dark:text-white font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final Mission Statement (Call-to-Action Style) */}
                <section className="bg-gradient-to-r from-green-600 to-green-800 p-10 md:p-16 rounded-3xl shadow-2xl text-white text-center">
                    <h4 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Our Core Mission
                    </h4>
                    <p className="text-xl md:text-2xl font-light max-w-5xl mx-auto leading-relaxed">
                        To make sustainability profitable, scalable, and accessible by engineering hydrogen-enabled solutions that reduce emissions today and build a cleaner tomorrow.
                    </p>
                    <div className="mt-6 text-lg font-medium space-y-1">
                        <p>Not merely to innovate, but to create impact.</p>
                        <p>Not just to build technology, but to shape an ecosystem.</p>
                        <p>Not just to decarbonise machines, but to empower people and industries to lead the transition.</p>
                    </div>
                    <p className="mt-8 text-base italic opacity-80">
                        The journey continues — with purpose, persistence, and an unwavering belief that the future must be built, not awaited.
                    </p>
                </section>
                
            {/* </div>
        </div> */}
</>
    );
};
export default MissionJourney;