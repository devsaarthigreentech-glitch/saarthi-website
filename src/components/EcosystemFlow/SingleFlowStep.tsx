import React from "react";
import { FlowStep } from "./flowdata";

const SingleFlowStep = ({ item }: { item: FlowStep }) => {
  // We keep the isResult property defined in data for potential non-visual differences, 
  // but the styling is now unified across all cards.

  // --- 1. Define Base (Default, White Shade, Subtle) Classes ---
  // This is the desired default state for ALL cards.
  const baseCardClasses = 'bg-white border-gray-200 shadow-sm dark:bg-slate-800 dark:border-slate-700';
  const baseIconClasses = 'bg-[var(--brand,#33A04A)]/20 text-[var(--brand,#33A04A)]';
  const baseTitleClasses = 'text-slate-900 dark:text-white';
  const baseDescClasses = 'text-slate-600 dark:text-slate-400';

  // --- 2. Define Hover (Prominent, Green Border) Classes ---
  // This is the desired prominent state for ALL cards on hover.
  const hoverCardClasses = 'bg-white border-4 border-[var(--brand,#33A04A)] shadow-2xl shadow-[var(--brand,#33A04A)]/10 dark:bg-slate-700 dark:border-[var(--brand,#33A04A)]';
  const hoverIconClasses = 'bg-[var(--brand,#33A04A)] text-white';
  const hoverTitleClasses = 'text-[var(--brand,#33A04A)]';
  const hoverDescClasses = 'text-slate-700 dark:text-slate-200';

  // Helper function to map hover classes correctly
  const mapHoverClasses = (classes: string) => classes.split(' ').map(cls => `hover:${cls}`).join(' ');

  return (
    // Card Container: Apply base style + hover effect using the prominent classes
    <div className={`p-6 rounded-xl h-full flex flex-col justify-start text-center transition-all duration-300 border-[2px] 
      ${baseCardClasses} 
      hover:scale-[1.03] 
      ${mapHoverClasses(hoverCardClasses)}
    `}>
      
      {/* Icon Wrapper */}
      <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300
        ${baseIconClasses} 
        ${mapHoverClasses(hoverIconClasses)}`}
      >
        {item.icon}
      </div>

      {/* Title */}
      <h3 className={`mb-2 text-xl font-bold leading-tight transition-colors duration-300
        ${baseTitleClasses} 
        ${mapHoverClasses(hoverTitleClasses)}`}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p className={`text-sm leading-relaxed transition-colors duration-300
        ${baseDescClasses} 
        ${mapHoverClasses(hoverDescClasses)}`}
      >
        {item.description}
      </p>
    </div>
  );
};

export default SingleFlowStep;