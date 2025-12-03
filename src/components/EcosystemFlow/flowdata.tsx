import { ReactNode } from "react";

// Icon for GreenMentor (Planning/Strategy)
const PlanningIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a8 8 0 0 0 8-8V7l-8-4-8 4v7a8 8 0 0 0 8 8z" />
    <path d="M15 9l-4 4-2-2" />
  </svg>
);

// Icon for GreenLabs (Build/Hardware)
const BuildIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <path d="M10 12v3" />
    <path d="M14 12v3" />
    <path d="M2 15h20" />
    <path d="M2 19h20" />
    <path d="M4 15v4" />
    <path d="M20 15v4" />
  </svg>
);

// Icon for GreenVision (Measure/Verify)
const MeasureIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-6a2 2 0 0 0-2 2v6" />
    <path d="M15 15l-3 3-3-3" />
    <path d="M20 7V4H4v3" />
    <path d="M4 17v3h16v-3" />
  </svg>
);

// Icon for Result (Goal/Check)
const ResultIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);


export type FlowStep = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
  isResult?: boolean;
};

const flowData: FlowStep[] = [
  {
    id: 1,
    icon: PlanningIcon,
    title: "GreenMentor",
    description: "Plan & Design: Decarbonisation strategy, engine assessment, and roadmap creation.",
  },
  {
    id: 2,
    icon: BuildIcon,
    title: "GreenLabs",
    description: "Build & Deliver: Engineering and installation of the hydrogen retrofit systems (CapEx or DaaS).",
  },
  {
    id: 3,
    icon: MeasureIcon,
    title: "GreenVision",
    description: "Measure & Verify: IoT/AI platform delivering real-time telemetry, savings and auditable ESG reporting.",
  },
  {
    id: 4,
    icon: ResultIcon,
    title: "Verified Reduction",
    description: "The outcome: Proven CO₂ Reduction, Fuel Savings, and Compliance for your business.",
    isResult: true,
  },
];

export default flowData;