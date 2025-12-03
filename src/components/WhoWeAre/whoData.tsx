// // src/components/WhoWeAre/whoData.tsx
// const whoData = [
//   // {
//   //   id: 1,
//   //   icon: (
//   //     <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
//   //       <path
//   //         opacity="0.9"
//   //         d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
//   //       />
//   //     </svg>
//   //   ),
//   //   title: "Practical",
//   //   paragraph: "Easy-to-install hydrogen retrofits — no engine redesigns; compact hardware and simple wiring.",
//   // },
//   {
//     id: 1,
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
//         {/* <path
//           opacity="0.9"
//           d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
//         /> */}
//       </svg>
//     ),
//     title: "GreenMentor™",
//     paragraph: "Strategy, Advisory & Deployment Planning",
//   },
//   {
//     id: 2,
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
//         <path opacity="0.9" d="M12 3L2 9l10 6 10-6-10-6zm0 8.1L4.24 9 12 5.9 19.76 9 12 11.1z" />
//         <path d="M2 13l10 6 10-6v6H2v-6z" />
//       </svg>
//     ),
//     title: "Profitable",
//     paragraph: "Fuel savings up to ~20% (vehicles) and ~8% (DGs at high loads) — clear ROI and flexible commercial models.",
//   },
//   {
//     id: 3,
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
//         <path opacity="0.9" d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 6h2v6h-2zM11 14h2v2h-2z" />
//       </svg>
//     ),
//     title: "Provable",
//     paragraph: "IoT & AI-powered GreenVision for auditable emissions reporting (Scope 1/2/3) and data-driven validation.",
//   },
// ];

// export default whoData;
import { ReactNode } from "react";

export type WhoDataType = {
  id: number;
  icon: ReactNode;
  title: string;
  subtitle: string;
  paragraph: string;
  btnText: string;
  btnLink: string;
};

const whoData: WhoDataType[] = [
  {
    id: 1,
    icon: (
      // Icon: User/Mentor
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    title: "GreenMentor™",
    subtitle: "Strategy, Advisory & Deployment Planning",
    paragraph:
      "Decarbonisation consulting, engine assessments, roadmaps, and deployment planning — powered by GreenVision data.",
    btnText: "Learn More",
    btnLink: "/green-mentor", // Update with actual route
  },
  {
    id: 2,
    icon: (
      // Icon: Flask/Labs/Science
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M6 22h12a1 1 0 001-1v-1a2 2 0 00-2-2h-1v-6.9a6.64 6.64 0 003.18-5.32A6.68 6.68 0 0011 0H9a1 1 0 000 2h.22A4.66 4.66 0 0113 5.76a4.67 4.67 0 01-2.07 3.82L9 11.2V18H8a2 2 0 00-2 2v1a1 1 0 000 1z" opacity="0.5"/>
        <path d="M19 20v-1a3.94 3.94 0 00-1.12-2.86l-4-4.57A6.64 6.64 0 0017 5.76 6.68 6.68 0 0014.22 0H13a1 1 0 000 2h.22a4.66 4.66 0 012.07 3.82 4.64 4.64 0 01-1.28 3.22l-4.57 5.22A6 6 0 015 18v2H3a1 1 0 000 2h18a1 1 0 00-2-2h-2z" />
      </svg>
    ),
    title: "GreenLabs™",
    subtitle: "Hydrogen Retrofit Systems & DaaS Delivery",
    paragraph:
      "Engineered hydrogen-diesel hybrid systems for trucks, buses, DG sets, marine engines and heavy equipment. Available via CapEx purchase or DaaS.",
    btnText: "Explore GreenLabs",
    btnLink: "/green-labs",
  },
  {
    id: 3,
    icon: (
      // Icon: Eye/Vision/Data
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </svg>
    ),
    title: "GreenVision™",
    subtitle: "Real-Time Fuel, Emission & Carbon Intelligence",
    paragraph:
      "Independent IoT + AI platform delivering real-time telemetry, savings measurement, carbon reporting, and audit-ready ESG intelligence.",
    btnText: "View GreenVision Dashboard",
    btnLink: "/green-vision",
  },
];

export default whoData;