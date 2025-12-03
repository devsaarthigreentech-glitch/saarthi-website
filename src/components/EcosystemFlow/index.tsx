// import SingleFlowStep from "./SingleFlowStep";
// import flowData from "./flowdata";

// const EcosystemFlow = () => {
//   return (
//     <section id="ecosystem-flow" className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-slate-900 overflow-hidden">
//       <div className="container mx-auto px-4 max-w-7xl">
        
//         {/* Section Heading & Subtitle */}
//         <div className="text-center mb-16 max-w-4xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
//             The Complete Decarbonisation Loop
//           </h2>
//           <p className="text-lg text-slate-600 dark:text-slate-400">
//             Strategy, engineering and intelligence working together — all in one integrated ecosystem.
//           </p>
//         </div>

//         {/* Flow Container: Grid with Relative Positioning for Arrows */}
//         <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

//           {/* Map through data to render the steps */}
//           {flowData.map((item, index) => (
//             <div key={item.id} className="h-full relative z-10">
//               <SingleFlowStep item={item} />

//               {/* Arrow Logic (Appears between steps, hidden after the last step) */}
//               {index < flowData.length - 1 && (
//                 <>
//                   {/* Arrow for Desktop (Horizontal) - Width and left position increased for better fit */}
//                   <div className="hidden lg:block absolute left-[calc(100%+1.25rem)] top-1/2 w-12 h-[3px] -translate-y-1/2 bg-[var(--brand,#33A04A)] z-0 
//                     before:content-[''] 
//                     before:absolute 
//                     before:right-0 
//                     before:top-1/2 
//                     before:-translate-y-1/2 
//                     before:w-0 
//                     before:h-0 
//                     before:border-t-[8px] 
//                     before:border-t-transparent 
//                     before:border-b-[8px] 
//                     before:border-b-transparent 
//                     before:border-l-[10px] 
//                     before:border-l-[var(--brand,#33A04A)]" 
//                   >
//                     <span className="sr-only">Next Step</span>
//                   </div>

//                   {/* Arrow for Tablet/Mobile (Vertical) - Same as before */}
//                   <div className="lg:hidden absolute bottom-[-2.5rem] left-1/2 w-[3px] h-10 -translate-x-1/2 bg-[var(--brand,#33A04A)] z-0 
//                     before:content-[''] 
//                     before:absolute 
//                     before:bottom-0 
//                     before:left-1/2 
//                     before:-translate-x-1/2 
//                     before:w-0 
//                     before:h-0 
//                     before:border-l-[8px] 
//                     before:border-l-transparent 
//                     before:border-r-[8px] 
//                     before:border-r-transparent 
//                     before:border-t-[10px] 
//                     before:border-t-[var(--brand,#33A04A)]"
//                   >
//                     <span className="sr-only">Next Step</span>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}

//           {/* The "Loop Back" Arrow using SVG for a smooth curve on desktop (Refined UI) */}
//           <svg 
//             className="hidden lg:block absolute left-0 top-[100%] w-full h-[100px] pointer-events-none z-0" 
//             viewBox="0 0 1000 100" 
//             preserveAspectRatio="none"
//           >
//             {/* Define the path for the loop. Widened horizontal path for better fit */}
//             <path 
//               // Adjusted path start (980) and end (20) points for better alignment with card edges
//               d="M 980 0 C 900 100, 100 100, 20 0" 
//               stroke="var(--brand, #33A04A)" 
//               strokeWidth="3" 
//               fill="none" 
//               strokeDasharray="8 8" 
//               className="opacity-70 dark:opacity-50"
//             />
//             {/* Arrowhead at the start of the loop (under GreenMentor) */}
//             <polygon 
//               points="30,0 20,-5 20,5" 
//               fill="var(--brand, #33A04A)" 
//               // Adjusted translation to align the point (10, 0) with the path start (20, 0)
//               transform="translate(10, 0) rotate(180 25 0)"
//             />
//           </svg>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default EcosystemFlow;
import SingleFlowStep from "./SingleFlowStep";
import flowData from "./flowdata";

const EcosystemFlow = () => {
  return (
    <section id="ecosystem-flow" className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Heading & Subtitle */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            The Complete Decarbonisation Loop
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Strategy, engineering and intelligence working together — all in one integrated ecosystem.
          </p>
        </div>

        {/* Flow Container: Grid with enhanced horizontal connection logic */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">

          {/* Map through data to render the steps */}
          {flowData.map((item, index) => (
            <div 
              key={item.id} 
              className={`h-full relative z-10 group`}
            >
              <SingleFlowStep item={item} />

              {/* Connector Logic: Applies to all except the last step */}
              {index < flowData.length - 1 && (
                <>
                  {/* Desktop Horizontal Connector */}
                  <div className="hidden lg:block absolute left-[100%] top-1/2 w-10 h-[3px] -translate-y-1/2 bg-[var(--brand,#33A04A)] z-0 
                    before:content-[''] 
                    before:absolute 
                    before:right-0 
                    before:top-1/2 
                    before:-translate-y-1/2 
                    before:w-0 
                    before:h-0 
                    before:border-t-[8px] 
                    before:border-t-transparent 
                    before:border-b-[8px] 
                    before:border-b-transparent 
                    before:border-l-[10px] 
                    before:border-l-[var(--brand,#33A04A)]" 
                  >
                    <span className="sr-only">Next Step</span>
                  </div>

                  {/* Tablet/Mobile Vertical Connector */}
                  <div className="lg:hidden absolute bottom-[-4rem] left-1/2 w-[3px] h-12 -translate-x-1/2 bg-[var(--brand,#33A04A)] z-0 
                    before:content-[''] 
                    before:absolute 
                    before:bottom-0 
                    before:left-1/2 
                    before:-translate-x-1/2 
                    before:w-0 
                    before:h-0 
                    before:border-l-[8px] 
                    before:border-l-transparent 
                    before:border-r-[8px] 
                    before:border-r-transparent 
                    before:border-t-[10px] 
                    before:border-t-[var(--brand,#33A04A)]"
                  >
                    <span className="sr-only">Next Step</span>
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Loop Back Visual (CSS-based on Desktop) */}
          <div className="hidden lg:block absolute bottom-[-50px] left-0 right-0 h-12 z-0">
            {/* The main horizontal dashed line at the bottom */}
            <div className="absolute left-[3%] right-[3%] bottom-0 h-[3px] border-b-3 border-solid border-[var(--brand,#33A04A)] opacity-70"></div>
            
            {/* Left Vertical Line (Connects loop to GreenMentor) */}
            <div className="absolute left-[3%] bottom-0 w-[3px] h-12 bg-[var(--brand,#33A04A)]"></div>
            
            {/* Right Vertical Line (Connects Verified Reduction to loop) */}
            <div className="absolute right-[3%] bottom-0 w-[3px] h-12 bg-[var(--brand,#33A04A)] 
                before:content-[''] 
                before:absolute 
                before:bottom-0 
                before:left-1/2 
                before:-translate-x-1/2 
                before:w-0 
                before:h-0 
                before:border-l-[8px] 
                before:border-l-transparent 
                before:border-r-[8px] 
                before:border-r-transparent 
                before:border-t-[10px] 
                before:border-t-[var(--brand,#33A04A)]" 
            ></div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EcosystemFlow;