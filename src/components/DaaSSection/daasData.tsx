import { ReactNode } from "react";

// Lucide-style SVG Icons
// Icon for Zero upfront cost
const PiggyBankIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 18V6" />
    <path d="M12 3a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
  </svg>
);

// Icon for Savings-linked monthly fee (Coin Stack)
const CoinStackIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 10s-2.1-1.7-5-1v2.5" />
    <path d="M19 14.5a7.5 7.5 0 0 1-6.5-7.5" />
    <path d="M14 17a5 5 0 0 1-5-5" />
  </svg>
);

// Icon for Saarthi handles installation, maintenance & support (Toolbox)
const ToolboxIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 13L9 7" />
    <path d="M18 10l-3-3" />
    <path d="M6 16l3 3" />
    <path d="M10 4L2 12" />
    <path d="M22 12l-8 8" />
  </svg>
);

// Icon for Verified savings via GreenVision telemetry (Check Mark)
const CheckCircleIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

// Icon for Scalable across fleets, sites and industries (Graph/Scale)
const ScaleIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h18v18H3z" />
    <path d="M12 21V3" />
    <path d="M3 12h18" />
    <path d="M18 6h3" />
    <path d="M3 6h3" />
    <path d="M18 18h3" />
    <path d="M3 18h3" />
  </svg>
);


export type DaaSFeatureType = {
  id: number;
  icon: ReactNode;
  title: string;
};

const daasData: DaaSFeatureType[] = [
  {
    id: 1,
    icon: PiggyBankIcon,
    title: "Zero Upfront Cost",
  },
  {
    id: 2,
    icon: CoinStackIcon,
    title: "Savings-Linked Monthly Fee",
  },
  {
    id: 3,
    icon: ToolboxIcon,
    title: "Saarthi Handles Installation, Maintenance & Support",
  },
  {
    id: 4,
    icon: CheckCircleIcon,
    title: "Verified Savings via GreenVision Telemetry",
  },
  {
    id: 5,
    icon: ScaleIcon,
    title: "Scalable Across Fleets, Sites, and Industries",
  },
];

export default daasData;