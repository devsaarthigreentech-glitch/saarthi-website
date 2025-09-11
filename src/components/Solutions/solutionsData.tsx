// src/components/Solutions/solutionsData.tsx
const solutionsData = [
  {
    id: 1,
    name: "GreenDrive",
    tagline: "Hydrogen for Vehicles",
    blurb:
      "Retrofits for trucks, buses, mining, construction, and agriculture engines. Fuel savings up to 20%.",
    imgAlt: "GreenDrive - vehicles",
    // small inline SVG for icon
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M3 13v-2h2V9h2v2h8V9h2v2h2v2h-2v2h-2v-2H7v2H5v-2H3z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "GreenGen",
    tagline: "Hydrogen for Generators",
    blurb:
      "Designed for 20–4000 kVA DG sets. Fuel savings up to 8%, PM reduced >80%.",
    imgAlt: "GreenGen - generators",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 2l3.5 7H18l-6 11-6-11h2.5L12 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "GreenMarine",
    tagline: "Hydrogen for Maritime & Ports",
    blurb:
      "Solutions for tugboats, ships, and small craft. Class testing underway; expected savings + emission cuts.",
    imgAlt: "GreenMarine - ships",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M2 21h20v-2H2v2zm17-9l-1.5 4.5H6.5L5 12l7-5 7 5z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "GreenVision",
    tagline: "Emission & Carbon Intelligence",
    blurb:
      "IoT + AI platform to monitor, automate, and report emissions across fleets, factories, ports, and cities.",
    imgAlt: "GreenVision - dashboard",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M3 13h2v-2H3v2zm4 0h2v-4H7v4zM13 3h8v2h-8V3zM3 17h2v-2H3v2zm4 0h2v-6H7v6z" />
      </svg>
    ),
  },
];

export default solutionsData;
