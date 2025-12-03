// // src/components/WhoWeAre/index.tsx
// import SectionTitle from "../Common/SectionTitle";
// import SingleWho from "./SingleWho";
// import whoData from "./whoData";

// const WhoWeAre = () => {
//   return (
//     <section id="who-we-are" className="py-12 md:py-20 lg:py-28">
//       <div className="container">
//         {/* <SectionTitle 
//           title="We make decarbonisation practical, profitable, and provable."
//           paragraph="Practical → Easy-to-install hydrogen retrofits. Profitable → Fuel savings + ROI. Provable → IoT & AI GreenVision for auditable reporting."
//           center
//           mb="60px"
//         /> */}
//         <SectionTitle 
//           title="Three Pillars. One Decarbonisation Engine."
//           paragraph="Saarthi operates through three integrated pillars that together deliver strategy, hardware, and verified data."
//           center
//           mb="60px"
//         />

//         <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 mt-8">
//           {whoData.map((item) => (
//             <div key={item.id} className="h-full">
//               <SingleWho item={item} />
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhoWeAre;
import SectionTitle from "../Common/SectionTitle";
import SingleWho from "./SingleWho";
import whoData from "./whoData";

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-16 md:py-24 lg:py-32 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <SectionTitle
          title="Three Pillars. One Decarbonisation Engine."
          paragraph="Saarthi operates through three integrated pillars that together deliver strategy, hardware, and verified data."
          center
          mb="30px"
        />

        {/* Grid of 3 Pillars */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {whoData.map((item) => (
            <div key={item.id} className="h-full">
              <SingleWho item={item} />
            </div>
          ))}
        </div>

        {/* Bottom Main CTA */}
        <div className="flex justify-center mt-16">
          <a
            href="/ecosystem"
            className="rounded-full bg-[var(--brand,#33A04A)] px-8 py-4 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:bg-[var(--brand-dark,#2a853d)] hover:shadow-lg hover:-translate-y-0.5"
          >
            Explore the Saarthi Ecosystem →
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;