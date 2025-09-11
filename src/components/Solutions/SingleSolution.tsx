// src/components/Solutions/SingleSolution.tsx
import React from "react";

const SingleSolution = ({ item }: { item: { id: number; name: string; tagline: string; blurb: string; icon: React.ReactNode } }) => {
  return (
    <div className="w-full h-full">
      <article className="h-full flex flex-col bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-md bg-[var(--accent,#98C948)]/10 text-[var(--brand,#33A04A)] flex items-center justify-center">
            {item.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.name}</h3>
            <div className="text-sm text-slate-500 dark:text-slate-300">{item.tagline}</div>
          </div>
        </div>

        <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed flex-grow">{item.blurb}</p>

        {/* <div className="mt-6">
          <a
            href={`/products/${item.name.toLowerCase()}`}
            className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-4 py-2 bg-[var(--brand,#33A04A)] text-slate-900 hover:brightness-95"
          >
            Learn More
          </a>
        </div> */}
      </article>
    </div>
  );
};

export default SingleSolution;
