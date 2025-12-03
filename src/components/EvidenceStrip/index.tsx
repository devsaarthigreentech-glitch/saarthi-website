// import SingleMetric from "./singleEvidence";
// import evidenceData from "./evidencestripData";

// const EvidenceStrip = () => {
//   return (
//     <section id="evidence-strip" className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-slate-900">
//       <div className="container mx-auto px-4 max-w-7xl">
        
//         {/* Section Heading & Subtitle */}
//         <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
//           {/* Note: Using a custom h2 here instead of SectionTitle for specific styling */}
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
//             Verified by Stack Tests, Telemetry & Independent Certifications
//           </h2>
//         </div>

//         {/* 3-Column Metric Grid */}
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {evidenceData.map((item) => (
//             <div key={item.id} className="h-full">
//               <SingleMetric item={item} />
//             </div>
//           ))}
//         </div>

//         {/* Centered CTA */}
//         <div className="flex justify-center mt-12 md:mt-16">
//           <a
//             href="/evidence-hub" // Update with your actual Evidence Hub link
//             className="inline-flex items-center text-lg font-bold text-[var(--brand,#33A04A)] hover:text-[var(--brand-dark,#2a853d)] transition-colors group p-3 rounded-lg"
//           >
//             Visit the Evidence Hub
//             <span className="ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1">
//               →
//             </span>
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default EvidenceStrip;
import SingleMetric from "./singleEvidence";
import evidenceData from "./evidencestripData";

const EvidenceStrip = () => {
  return (
    <section id="evidence-strip" className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-slate-900">
      {/* Reduced max-width and adjusted horizontal padding for compaction */}
      <div className="container mx-auto px-4 md:px-8 max-w-6xl"> 
        
        {/* Section Heading & Subtitle */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          {/* Note: Using a custom h2 here instead of SectionTitle for specific styling */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Verified by Stack Tests, Telemetry & Independent Certifications
          </h2>
        </div>

        {/* 3-Column Metric Grid: Gap reduced from gap-8 to gap-6 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {evidenceData.map((item) => (
            <div key={item.id} className="h-full">
              {/* Assuming SingleMetric is a card component that takes the item prop */}
              <SingleMetric item={item} />
            </div>
          ))}
        </div>

        {/* Centered CTA */}
        {/* <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="/evidence-hub" // Update with your actual Evidence Hub link
            className="inline-flex items-center text-lg font-bold text-[var(--brand,#33A04A)] hover:text-[var(--brand-dark,#2a853d)] transition-colors group p-3 rounded-lg"
          >
            Visit the Evidence Hub
            <span className="ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div> */}

      </div>
    </section>
  );
};

export default EvidenceStrip;