// // src/components/Solutions/index.tsx
// import SectionTitle from "../Common/SectionTitle";
// import SingleSolution from "./SingleSolution";
// import solutionsData from "./solutionsData";

// const Solutions = () => {
//   return (
//     <section id="solutions" className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 border-t border-slate-200 dark:border-slate-700">
//       <div className="container">
//         <SectionTitle
//           title="Our Solutions"
//           subtitle="Product Suite at a Glance"
//           paragraph="Hydrogen retrofits and IoT intelligence that work together as one ecosystem — practical, profitable, and provable."
//           center
//           mb="60px"
//         />


//         <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {solutionsData.map((s) => (
//             <SingleSolution key={s.id} item={s} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solutions;
import SectionTitle from "../Common/SectionTitle";
import SingleSolution from "./SingleSolution";
import solutionsData from "./solutionsData";

const Solutions = () => {
  return (
    <section id="solutions" className="py-16 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <SectionTitle
          title="Solutions Built for the Hardest-to-Abate Diesel Applications"
          paragraph="Explore results-driven retrofit solutions designed specifically for your industry."
          center
          mb="60px"
        />

        {/* Grid Layout Logic:
           1. 'grid-cols-1' for mobile
           2. 'md:grid-cols-2' for tablet
           3. 'lg:grid-cols-3' for desktop
           4. 'justify-center' centers the items if the last row isn't full (though grid usually stretches).
           
           We use a specific technique here for the 5th item centering:
           We will actually leave it as a standard grid, but use flex behavior on the wrapper 
           if we wanted perfect centering for the last row. 
           
           However, a cleaner way for React maps is simply letting the grid flow. 
           To make the last row centered in a 3-col grid is tricky with pure CSS Grid without specific classes on specific children.
           
           Instead, we will use Flexbox wrapping for a "Smart Grid" feel that centers the orphans.
        */}
        
        <div className="flex flex-wrap justify-center gap-8">
          {solutionsData.map((item) => (
            // Flex basis logic:
            // Mobile: 100% width
            // Tablet: ~45% width (2 per row)
            // Desktop: ~30% width (3 per row)
            <div 
              key={item.id} 
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-[400px]"
            >
              <SingleSolution item={item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;