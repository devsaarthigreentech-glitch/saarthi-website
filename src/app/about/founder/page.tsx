import React from 'react';

// Using a standard modern sans-serif font like Inter (default in Tailwind)

const FounderStory = () => {
    // Placeholder image for the founder (Alok Kumar)
    const founderImageUrl = "/images/about/founder.png";
    const brandColor = 'var(--brand, #33A04A)';

    return (
        <div className="bg-white dark:bg-gray-900 py-16 md:py-24 text-gray-800 dark:text-gray-200 font-inter">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* Header Section */}
                <header className="text-center mb-16 md:mb-20">
                    <h1 className="text-sm font-semibold uppercase tracking-widest" style={{ color: brandColor }}>
                        Our Foundation
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-extrabold mt-2 leading-tight">
                        The Founder's Story
                    </h2>
                </header>

                {/* Main Content Grid: Image and Core Narrative */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                    
                    {/* Column 1: Founder's Image and Title */}
                    <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left top-8">
                        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-full lg:h-auto lg:aspect-square overflow-hidden rounded-3xl shadow-2xl mb-6 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl">
                            <img 
                                src={founderImageUrl} 
                                alt="Portrait of Alok Kumar, Founder of Saarthi GreenTech" 
                                className="w-full h-full object-cover transition duration-500 ease-in-out"
                                // Fallback handler if image fails to load
                                // onError={(e) => {
                                //     e.currentTarget.onerror = null;
                                //     e.currentTarget.src = "https://placehold.co/800x800/6b7280/ffffff?text=Founder+Photo";
                                // }}
                            />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Alok Kumar</h3>
                        <p className="text-xl font-medium" style={{ color: brandColor }}>
                            CEO & Founder, Saarthi GreenTech
                        </p>
                    </div>

                    {/* Column 2/3: Narrative Content */}
                    <div className="lg:col-span-2 space-y-8 text-lg leading-relaxed">
                        
                        {/* Section 1: Purpose and Roots */}
                        <section className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-lg">
                            <h4 className="text-2xl font-bold mb-3" style={{ color: brandColor }}>A Life Rooted in Purpose, Driven by Innovation</h4>
                            <p className="mb-4">
                                Today, Alok Kumar leads Saarthi GreenTech with a singular mission: to make sustainability practical, accessible, and profitable through hydrogen-enabled innovations for diesel engines. His work reflects not only technological progress, but also a deep personal commitment to creating meaningful, long-term impact.
                            </p>
                            <p>
                                His journey traces back to the holy city of Varanasi, where ancient wisdom, simplicity, and struggle coexist in every street. Growing up in this spiritual environment shaped his resilience, humility, and belief that transformation begins with one’s own effort. With a natural curiosity for how things work, he pursued Engineering, followed by a Master’s degree in Management, blending technical insight with strategic thinking.
                            </p>
                        </section>

                        {/* Section 2: Career & Leadership */}
                        <section className="space-y-4">
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">The Builder of Leaders</h4>
                            <p>
                                Across a 35-year career, Alok spent the early years mastering execution and the later decades redefining entrepreneurship. For more than 20 years, he has founded and scaled organisations — most notably Sears India, SRKAY Consulting, and now Saarthi.
                            </p>
                            <p>
                                In parallel, he has supported and invested in emerging founders, guided by a core belief that true leadership lies in empowering others to rise, carry the legacy forward, and multiply the growth and impact. He sees himself not just as a builder of companies, but as a builder of leaders.
                            </p>
                        </section>
                        
                        {/* Section 3: The Saarthi Mission and Breakthrough */}
                        <section className="p-6 rounded-2xl border-l-4" style={{ borderColor: brandColor }}>
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Engineering Sustainability for the Real World</h4>
                            <p className="mb-4">
                                Saarthi GreenTech is the expression of his deepest purpose. His pursuit of hydrogen-assisted decarbonisation has been a long and demanding journey: years of experimentation, failures, redesigns, and breakthroughs. 
                            </p>
                            <p className="italic text-gray-600 dark:text-gray-400">
                                What began as a concept slowly transformed into a working system capable of reducing emissions and optimizing fuel efficiency across diesel engines of any size. Today, this innovation stands poised to mark a new milestone in practical decarbonisation.
                            </p>
                        </section>

                        {/* Section 4: Family and Legacy */}
                        <section className="space-y-4">
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">A Family Grounded in Shared Values</h4>
                            <p>
                                Behind this mission is a family grounded in shared values. His wife, Nandani, serves as a Director at Saarthi, anchoring the organisation with strength and stability. Their son, pursuing an Economics degree at King’s College London, represents the next generation of global thinkers who pair curiosity with purpose.
                            </p>
                        </section>

                        {/* Final Vision Statement */}
                        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                            <h4 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Alok’s profound vision is simple yet clear:
                            </h4>
                            <ul className="list-none space-y-3 pl-0 text-xl font-medium">
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3" style={{ color: brandColor }}>•</span>
                                    <span>To demonstrate that sustainability can be engineered, scaled, and delivered without compromise;</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3" style={{ color: brandColor }}>•</span>
                                    <span>And to build leaders who will carry this mission beyond him, amplifying its reach and impact for decades to come.</span>
                                </li>
                            </ul>
                            <p className="mt-6 text-base italic text-gray-500 dark:text-gray-400">
                                From the sacred ghats of Varanasi to the global stage of clean-tech innovation, his story remains one of perseverance, belief, and a lifelong dedication to building what tomorrow needs.
                            </p>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default FounderStory;