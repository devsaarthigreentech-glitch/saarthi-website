// // src/components/Solutions/SingleSolution.tsx
// import React from "react";

// const SingleSolution = ({ item }: { item: { id: number; name: string; tagline: string; blurb: string; icon: React.ReactNode } }) => {
//   return (
//     <div className="w-full h-full">
//       <article className="h-full flex flex-col bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
//         <div className="flex items-center gap-4">
//           <div className="h-14 w-14 rounded-md bg-[var(--accent,#98C948)]/10 text-[var(--brand,#33A04A)] flex items-center justify-center">
//             {item.icon}
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.name}</h3>
//             <div className="text-sm text-slate-500 dark:text-slate-300">{item.tagline}</div>
//           </div>
//         </div>

//         <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed flex-grow">{item.blurb}</p>

//         {/* <div className="mt-6">
//           <a
//             href={`/products/${item.name.toLowerCase()}`}
//             className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-4 py-2 bg-[var(--brand,#33A04A)] text-slate-900 hover:brightness-95"
//           >
//             Learn More
//           </a>
//         </div> */}
//       </article>
//     </div>
//   );
// };

// export default SingleSolution;
import React from "react";
import { SolutionType } from "./solutionsData";

const SingleSolution = ({ item }: { item: SolutionType }) => {
  const isHighlight = item.variant === "highlight";

  return (
    <div className="group h-full">
      <div
        className={`relative overflow-hidden rounded-xl p-8 h-full flex flex-col transition-all duration-300 border 
        ${
          isHighlight
            ? "bg-[var(--brand,#33A04A)] border-transparent shadow-lg hover:shadow-green-500/30 text-white"
            : "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-[var(--brand,#33A04A)] hover:shadow-lg dark:hover:border-[var(--brand,#33A04A)]"
        }`}
      >
        
        {/* Decorative Background Blob for Highlight Card */}
        {isHighlight && (
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-2xl transition-all group-hover:bg-white/20" />
        )}

        {/* Icon */}
        <div
          className={`mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-lg transition-colors
          ${
            isHighlight
              ? "bg-white/20 text-white"
              : "bg-gray-100 text-[var(--brand,#33A04A)] dark:bg-slate-700 group-hover:bg-[var(--brand,#33A04A)] group-hover:text-white"
          }`}
        >
          {item.icon}
        </div>

        {/* Content */}
        <h3
          className={`mb-4 text-xl font-bold leading-tight ${
            isHighlight ? "text-white" : "text-slate-900 dark:text-white"
          }`}
        >
          {item.title}
        </h3>

        <p
          className={`mb-8 text-base leading-relaxed flex-grow ${
            isHighlight
              ? "text-white/90 font-medium"
              : "text-slate-600 dark:text-slate-300"
          }`}
        >
          {item.paragraph}
        </p>

        {/* CTA Button */}
        <a
          href={item.href}
          className={`inline-flex items-center text-sm font-bold transition-all
          ${
            isHighlight
              ? "text-white hover:opacity-80"
              : "text-slate-900 dark:text-white group-hover:text-[var(--brand,#33A04A)]"
          }`}
        >
          {item.btnText}
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
        
      </div>
    </div>
  );
};

export default SingleSolution;