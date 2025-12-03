import React from "react";
import { DaaSFeatureType } from "./daasData";

const SingleDaasFeature = ({ feature }: { feature: DaaSFeatureType }) => {
  return (
    <div className="flex items-start space-x-4">
      {/* Icon with Brand Accent */}
      <div className="flex-shrink-0 mt-1 h-6 w-6 text-[var(--brand,#33A04A)]">
        {feature.icon}
      </div>
      
      {/* Feature Title */}
      <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
        {feature.title}
      </p>
    </div>
  );
};

export default SingleDaasFeature;