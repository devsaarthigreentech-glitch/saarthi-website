// src/components/WhoWeAre/index.tsx
import SectionTitle from "../Common/SectionTitle";
import SingleWho from "./SingleWho";
import whoData from "./whoData";

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We make decarbonisation practical, profitable, and provable."
          paragraph="Practical → Easy-to-install hydrogen retrofits. Profitable → Fuel savings + ROI. Provable → IoT & AI GreenVision for auditable reporting."
          center
        />

<div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 mt-8">
  {whoData.map((item) => (
    <div key={item.id} className="h-full">
      <SingleWho item={item} />
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default WhoWeAre;
