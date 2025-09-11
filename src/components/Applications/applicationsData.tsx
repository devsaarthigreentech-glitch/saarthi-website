// src/components/Applications/applicationsData.tsx
import React from "react";

type AppData = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt?: string;
};

const applicationsData: AppData[] = [
  {
    id: 1,
    title: "Ports & Shipping",
    description:
      "Ships, tugboats, port vehicles, and DGs: IMO-aligned decarbonisation and efficiency for maritime assets.",
    image: "/images/apps/ships.webp",
    alt: "ports and shipping",
  },
  {
    id: 2,
    title: "Fleets & Logistics",
    description:
      "Trucks, buses, and last-mile fleets — retrofit validation with GreenVision for measurable fuel savings.",
    image: "/images/apps/fleets.jpg",
    alt: "fleet of trucks",
  },
  {
    id: 3,
    title: "Factories & Campuses",
    description:
      "DG sets, boilers, and HVAC: real-time efficiency, emissions tracking, and operational optimisation.",
    image: "/images/apps/factories.png",
    alt: "factory campus",
  },
  {
    id: 4,
    title: "Smart Cities",
    description:
      "Air quality and energy dashboards for regions — combine GreenVision with city-scale sensor networks.",
    image: "/images/apps/cities.webp",
    alt: "smart city dashboard",
  },
];

export default applicationsData;
