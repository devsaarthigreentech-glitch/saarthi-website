// src/components/Solutions/index.tsx
import SectionTitle from "../Common/SectionTitle";
import SingleSolution from "./SingleSolution";
import solutionsData from "./solutionsData";

const Solutions = () => {
  return (
    <section id="solutions" className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container">
        <SectionTitle
          title="Our Solutions"
          subtitle="Product Suite at a Glance"
          paragraph="Hydrogen retrofits and IoT intelligence that work together as one ecosystem — practical, profitable, and provable."
          center
          mb="60px"
        />


        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutionsData.map((s) => (
            <SingleSolution key={s.id} item={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
