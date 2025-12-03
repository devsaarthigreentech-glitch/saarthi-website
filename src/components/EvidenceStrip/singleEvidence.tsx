import React from "react";
import { MetricType } from "./evidencestripData";

const SingleMetric = ({ item }: { item: MetricType }) => {
  return (
    <div className="p-6 md:p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg h-full flex flex-col justify-start transition-all duration-300 hover:shadow-xl hover:border-[var(--brand,#33A04A)] border border-gray-100 dark:border-transparent">
      
      {/* Icon Wrapper (Brand Green Accent) */}
      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand,#33A04A)]/10 text-[var(--brand,#33A04A)]`}>
        {item.icon}
      </div>

      {/* Heading (The Metric) */}
      <h3 className="mb-3 text-2xl font-extrabold text-slate-900 dark:text-white">
        {item.heading}
      </h3>

      {/* Subtext/Description */}
      <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
        {item.subtext}
      </p>

      {/* Special Style for Certifications Card */}
      {item.isCert && (
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700">
          <p className="text-sm font-semibold text-[var(--brand,#33A04A)] uppercase tracking-wider">
            Industry & Safety Standards
          </p>
        </div>
      )}
    </div>
  );
};

export default SingleMetric;