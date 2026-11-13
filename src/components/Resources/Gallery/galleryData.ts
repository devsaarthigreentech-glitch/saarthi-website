// galleryData.ts
import { PHOTOS } from "@/data/siteContent";

export type GalleryEvent = {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  cover: string;      // cover image path (public/...)
  images: string[];   // array of image paths for modal
};

// ─── Systems and installations ──────────────────────────────────────────────
// Captions are generic and customer-neutral: no customer names, no site names.
export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
};

export type GalleryPhotoGroup = {
  id: string;
  title: string;
  subtitle: string;
  photos: GalleryPhoto[];
};

export const photoGroups: GalleryPhotoGroup[] = [
  {
    id: "greenedge",
    title: "GreenEdge",
    subtitle: "Burners and furnaces",
    photos: [
      {
        ...PHOTOS.greenedgeSystem,
        caption: "GreenEdge system for industrial burners and furnaces",
        fit: "contain",
      },
      {
        ...PHOTOS.greenedgeFurnace,
        caption: "GreenEdge unit and digital rectifier installed beside an industrial furnace",
      },
      {
        ...PHOTOS.greenedgeAssembly,
        caption: "Engineers assembling a GreenEdge module",
      },
    ],
  },
  {
    id: "greenx",
    title: "GreenX",
    subtitle: "Diesel generator sets",
    photos: [
      {
        ...PHOTOS.greenxSiteUnits,
        caption: "Two GreenX units fitted inside a diesel generator enclosure",
      },
      {
        ...PHOTOS.greenxGasMixer,
        caption: "Gas mixer fitted on a diesel generator air intake",
      },
      {
        ...PHOTOS.greenxWithDg,
        caption: "GreenX unit connected to the air intake of a diesel generator set",
        fit: "contain",
      },
    ],
  },
  {
    id: "greendrive",
    title: "GreenDrive",
    subtitle: "Diesel vehicles",
    photos: [
      {
        ...PHOTOS.malaysia1,
        caption: "GreenDrive unit being fitted on a truck chassis, Malaysia",
      },
      {
        ...PHOTOS.malaysia2,
        caption: "Connecting a GreenDrive unit during installation, Malaysia",
      },
      // TODO(owner): the truck and quarry application images
      // (PHOTOS.greendriveTruck, PHOTOS.greendriveQuarry) show the old company
      // name on the cab door. Supply corrected artwork and
      // they can be added here.
    ],
  },
];

// ─── Events ─────────────────────────────────────────────────────────────────
const galleryData: GalleryEvent[] = [
  {
    id: "event-7",
    date: "22 July 2026",
    // TODO(owner): confirm the dealer may be named publicly on the gallery.
    title: "Continental Power Systems Appointed Authorised Dealer for Rajasthan",
    excerpt:
      "SGT HydroEdge welcomed the team from Continental Power System & Triumph Engineer to our Pune facility to formalise their appointment as our authorised dealer for Rajasthan. The visit included the handover of the dealership certificate, a walkthrough of our assembly area, and a demonstration of the GreenDrive and GreenX units.",
    cover: "/images/gallery/event-7/6.jpeg",
    images: [
      "/images/gallery/event-7/6.jpeg",
      "/images/gallery/event-7/4.jpeg",
      "/images/gallery/event-7/5.jpeg",
      "/images/gallery/event-7/7.jpeg",
    ],
  },
  {
    id: "event-5",
    date: "19 December 2025",
    title: "Surakshit Awards 2025 - Green Impact Award",
    excerpt:
      "SGT HydroEdge was honoured with the Green Impact Award at the Surakshit Awards 2025 in Pune.",
    cover: "/images/gallery/event-5/1.jpeg",
    images: [
      "/images/gallery/event-5/1.jpeg",
      "/images/gallery/event-5/5.jpeg",
    ],
  },
  {
    id: "event-4",
    title: "1st International Science & Technology Clusters Conference",
    date: "December 2025",
    excerpt:
      "SGT HydroEdge exhibited at the 1st International Science & Technology Clusters Conference, held at the Dr. Ambedkar International Center, New Delhi, showing GreenX for diesel generator sets, GreenDrive for commercial vehicles and GreenMarine for marine engines. The event, organised by the Office of the Principal Scientific Adviser to the Government of India, brought together industry, startups, research institutions and policymakers.",
    cover: "/images/gallery/event-4/4.jpeg",
    images: [
      "/images/gallery/event-4/4.jpeg",
      "/images/gallery/event-4/5.jpeg",
    ],
  },
  {
    id: "event-2",
    title: "Winner — LEAP Energy Award",
    date: "September 03, 2025",
    excerpt:
      "SGT HydroEdge was honoured with the Energy Leap Award at the GH2 India Conference 2025 in New Delhi. The conference was also an opportunity to engage with industry leaders, policymakers and investors on accelerating the clean energy transition.",
    cover: "/images/gallery/event-2/1.jpg",
    images: ["/images/gallery/event-2/1.jpg"],
  },
  {
    id: "event-1",
    title: "Advancing Sustainable Mobility with On-Demand Hydrogen at EGYPES 2025",
    date: "June 12, 2024",
    excerpt:
      "At EGYPES 2025, we presented our work on on-demand hydrogen generation for internal combustion engines — a scalable way to save fuel and cut emissions without overhauling existing engines.",
    cover: "/images/gallery/event-1/cover.jpg",
    images: [
      "/images/gallery/event-1/1.jpg",
      "/images/gallery/event-1/2.jpg",
      "/images/gallery/event-1/3.jpg",
      "/images/gallery/event-1/4.jpg",
    ],
  },
  {
    id: "event-3",
    title: "Facility Inauguration: A New Era of Innovation and Sustainability",
    date: "April 10, 2024",
    excerpt:
      "On April 10, 2024, we inaugurated our facility in Pune. Our Chief Guest Mr. Paul Murphy, Australia's Consul General, and Ms. Malini Dutt, Investment NSW Trade, attended along with entrepreneurs, industry guests and media.",
    cover: "/images/gallery/event-3/cover.jpeg",
    images: [
      "/images/gallery/event-3/cover.jpeg",
      "/images/gallery/event-3/2.jpeg",
      "/images/gallery/event-3/3.jpeg",
    ],
  },
];

export default galleryData;
