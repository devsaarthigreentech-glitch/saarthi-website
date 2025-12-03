// // src/components/WhoWeAre/SingleWho.tsx
// import React from "react";

// const SingleWho = ({ item }: { item: { id: number; icon: React.ReactNode; title: string; paragraph: string } }) => {
//   return (
//     <div className="w-full h-full">
//       <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 h-full flex flex-col">
//         <div className="flex items-start gap-4 mb-4">
//           {/* <div className="bg-[var(--accent,#98C948)]/10 text-[var(--brand,#33A04A)] rounded-md h-[70px] w-[70px] flex items-center justify-center shrink-0">
//             {item.icon}
//           </div> */}
//           <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
//         </div>

//         <p className="text-body-color text-base leading-relaxed font-medium text-slate-600 flex-grow">
//           {item.paragraph}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SingleWho;
import React from "react";
import { WhoDataType } from "./whoData";

const SingleWho = ({ item }: { item: WhoDataType }) => {
  return (
    <div className="w-full h-full">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-gray-100 dark:border-gray-700">
        
        {/* Header: Icon & Title */}
        <div className="flex flex-col mb-6">
          <div className="bg-[var(--accent,#98C948)]/10 text-[var(--brand,#33A04A)] rounded-lg h-14 w-14 flex items-center justify-center mb-5">
            {item.icon}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <h4 className="text-sm font-semibold text-[var(--brand,#33A04A)] uppercase tracking-wide">
            {item.subtitle}
          </h4>
        </div>

        {/* Body Paragraph */}
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 mb-8 flex-grow">
          {item.paragraph}
        </p>

        {/* Individual Card CTA */}
        <a
          href={item.btnLink}
          className="inline-flex items-center text-sm font-bold text-slate-900 dark:text-white hover:text-[var(--brand,#33A04A)] transition-colors group"
        >
          {item.btnText}
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default SingleWho;