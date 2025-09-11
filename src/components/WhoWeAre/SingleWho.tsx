// src/components/WhoWeAre/SingleWho.tsx
import React from "react";

const SingleWho = ({ item }: { item: { id: number; icon: React.ReactNode; title: string; paragraph: string } }) => {
  return (
    <div className="w-full h-full">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-[var(--accent,#98C948)]/10 text-[var(--brand,#33A04A)] rounded-md h-[70px] w-[70px] flex items-center justify-center shrink-0">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
        </div>

        <p className="text-body-color text-base leading-relaxed font-medium text-slate-600 flex-grow">
          {item.paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleWho;
