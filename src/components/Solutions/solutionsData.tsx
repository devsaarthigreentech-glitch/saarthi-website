// // src/components/Solutions/solutionsData.tsx
// const solutionsData = [
//   {
//     id: 1,
//     name: "GreenDrive",
//     tagline: "Hydrogen for Vehicles",
//     blurb:
//       "Retrofits for trucks, buses, mining, construction, and agriculture engines. Fuel savings up to 20%.",
//     imgAlt: "GreenDrive - vehicles",
//     // small inline SVG for icon
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
//         <path d="M3 13v-2h2V9h2v2h8V9h2v2h2v2h-2v2h-2v-2H7v2H5v-2H3z" />
//       </svg>
//     ),
//   },
//   {
//     id: 2,
//     name: "GreenGen",
//     tagline: "Hydrogen for Generators",
//     blurb:
//       "Designed for 20-4000 kVA DG sets. Fuel savings up to 8%, PM reduced >80%.",
//     imgAlt: "GreenGen - generators",
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
//         <path d="M12 2l3.5 7H18l-6 11-6-11h2.5L12 2z" />
//       </svg>
//     ),
//   },
//   {
//     id: 3,
//     name: "GreenMarine",
//     tagline: "Hydrogen for Maritime & Ports",
//     blurb:
//       "Solutions for tugboats, ships, and small craft. Class testing underway; expected savings + emission cuts.",
//     imgAlt: "GreenMarine - ships",
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
//         <path d="M2 21h20v-2H2v2zm17-9l-1.5 4.5H6.5L5 12l7-5 7 5z" />
//       </svg>
//     ),
//   },
//   {
//     id: 4,
//     name: "GreenVision",
//     tagline: "Emission & Carbon Intelligence",
//     blurb:
//       "IoT + AI platform to monitor, automate, and report emissions across fleets, factories, ports, and cities.",
//     imgAlt: "GreenVision - dashboard",
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
//         <path d="M3 13h2v-2H3v2zm4 0h2v-4H7v4zM13 3h8v2h-8V3zM3 17h2v-2H3v2zm4 0h2v-6H7v6z" />
//       </svg>
//     ),
//   },
// ];

// export default solutionsData;

import { ReactNode } from "react";

export type SolutionType = {
  id: number;
  icon: ReactNode;
  title: string;
  paragraph: string;
  btnText: string;
  href: string;
  variant?: "default" | "highlight"; // Added to distinguish DaaS
};

const solutionsData: SolutionType[] = [
  {
    id: 1,
    icon: (
      // Truck/Logistics
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    title: "Fleets & Logistics",
    paragraph: "Hydrogen retrofits for trucks and buses to reduce fuel use, lower emissions, and optimise total cost of ownership.",
    btnText: "View Fleet Solutions",
    href: "/solutions/fleetlogistics",
    variant: "default",
  },
  {
    id: 2,
    icon: (
      // DG/Power (Lightning/Industry)
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M7 2v11h3v9l7-12h-4l4-8z" />
      </svg>
    ),
    title: "DG Sets / Industrial Power",
    paragraph: "Hydrogen-diesel hybrid systems for 20-4000 kVA DG sets across manufacturing, buildings, hospitals, and telecom.",
    btnText: "View DG Solutions",
    href: "/solutions/dg",
    variant: "default",
  },
  {
    id: 3,
    icon: (
      // Marine/Anchor
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v4h-2z" /> 
        {/* Simple geometric abstraction for marine if precise anchor svg unavailable */}
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" opacity="0"/> 
        <path d="M12 2L9.5 7h5L12 2zm0 13c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z" />
      </svg>
    ),
    title: "Ports & Marine",
    paragraph: "Retrofits for marine auxiliary engines, tugs, barges and port equipment — verified emission results.",
    btnText: "View Marine Solutions",
    href: "/solutions/ports",
    variant: "default",
  },
  // {
  //   id: 4,
  //   icon: (
  //     // Mining/Heavy (Excavator arm style)
  //     <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
  //       <path d="M22 17v-2h-9l-2.8-5.6-3.2 2V17H2v2h20v-2h-1.02zM4 17v-4.1l2.4-1.5 2.6 1.5V17H4zm13.3-6.5l-1.8 1L12 9.2l1.2-2.3 4.1 3.6z" />
  //     </svg>
  //   ),
  //   title: "Mining & Heavy Equipment",
  //   paragraph: "Hydrogen systems for excavators, dumpers and off-highway vehicles where electrification remains difficult.",
  //   btnText: "View Mining Solutions",
  //   href: "/solutions/mining",
  //   variant: "default",
  // },
  {
    id: 5,
    icon: (
      // DaaS/Finance/Loop
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39h-2.01c-.06-1.01-.97-1.64-2.14-1.64-1.94 0-2.07 1.25-2.07 1.59 0 .84.56 1.46 2.67 1.96 2.5.6 4.22 1.77 4.22 3.71 0 1.8-1.48 2.86-3.03 3.19z"/>
      </svg>
    ),
    title: "DaaS (Zero CapEx Model)",
    paragraph: "Retrofit any engine and pay a monthly fee lower than the value of fuel saved. Unlocking cash flow from day one.",
    btnText: "Explore DaaS Model",
    href: "/solutions/daas",
    variant: "highlight", // This triggers special styling
  },
];

export default solutionsData;