import { ReactNode } from "react";

// Lucide-style SVG Icons
const GaugeIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path d="M12 2v4" /><path d="M17.5 5.5l-2 2" /><path d="M19.9 12h-4" />
    <path d="M18.8 17.5l-2-2" /><path d="M15.5 18.8l-2-2" /><path d="M12 22v-4" />
    <path d="M8.5 18.8l2-2" /><path d="M5.2 15.5l2-2" /><path d="M4.1 12h4" />
    <path d="M5.2 8.5l2-2" />
  </svg>
);
const ZapIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 13V8h-6l-2-7L10 8H4v5h2l-2 7 8 2 2-7h4z" />
  </svg>
);
const ShieldCheckIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);


export type MetricType = {
  id: number;
  icon: ReactNode;
  heading: string;
  subtext: string;
  isCert?: boolean; // Marker to apply custom styling if needed
};

const evidenceData: MetricType[] = [
  {
    id: 1,
    icon: GaugeIcon,
    heading: "5-25% Fuel & CO2 Savings",
    subtext: "Based on real-world telemetry across fleets and DG sets, providing clear ROI.",
  },
  {
    id: 2,
    icon: ZapIcon,
    heading: "50%+ Emission Reduction",
    subtext: "Validated through stack emission tests on 380 kVA and 1500 kVA DG sets.",
  },
  {
    id: 3,
    icon: ShieldCheckIcon,
    heading: "Certified & Compliant",
    subtext: "CE • UL • ROHS • EMC • ISO 9001. Global standards for trust and reliability.",
    isCert: true,
  },
];

export default evidenceData;