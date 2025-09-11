// src/components/WhoWeAre/whoData.tsx
const whoData = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path
          opacity="0.9"
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
        />
      </svg>
    ),
    title: "Practical",
    paragraph: "Easy-to-install hydrogen retrofits — no engine redesigns; compact hardware and simple wiring.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path opacity="0.9" d="M12 3L2 9l10 6 10-6-10-6zm0 8.1L4.24 9 12 5.9 19.76 9 12 11.1z" />
        <path d="M2 13l10 6 10-6v6H2v-6z" />
      </svg>
    ),
    title: "Profitable",
    paragraph: "Fuel savings up to ~20% (vehicles) and ~8% (DGs at high loads) — clear ROI and flexible commercial models.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path opacity="0.9" d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 6h2v6h-2zM11 14h2v2h-2z" />
      </svg>
    ),
    title: "Provable",
    paragraph: "IoT & AI-powered GreenVision for auditable emissions reporting (Scope 1/2/3) and data-driven validation.",
  },
];

export default whoData;
