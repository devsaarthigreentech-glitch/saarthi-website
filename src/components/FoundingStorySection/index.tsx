import React from 'react';

const FoundingStory = () => {
  return (
    // Minimal section, using a light background for contrast with the previous DaaS section.
    <section id="founding-story" className="py-20 md:py-28 lg:py-36 bg-gray-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
          Why We Built Saarthi
        </h2>

        {/* Paragraph (The Core Story/Mission) */}
        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed">
          After three decades of building and scaling global technology organisations, our team chose to solve a harder problem — decarbonising the diesel engines the world already depends on. Saarthi brings together hydrogen engineering, deep operational knowledge, and real-time carbon intelligence to make climate action practical, profitable and immediate.
        </p>

        {/* CTA Button */}
        <a
          href="/about/founder" // Link to the full founder's story page
          className="inline-flex items-center justify-center text-lg font-bold text-[var(--brand,#33A04A)] group transition-colors duration-300 transform hover:text-[var(--brand-dark,#2a853d)] p-3 rounded-lg"
        >
          Read the Founder's Story
          <span className="ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
};

export default FoundingStory;