// videoData.ts

export type VideoCategory =
  | "All"
  | "Boiler"
  | "Kiln"
  | "DG & Power"
  | "Marine"
  | "Engine on Wheels"
  | "Company";

export type VideoItem = {
  id: string;
  youtubeId: string;              // YouTube video ID (e.g. "ZeqxHMRH8RQ")
  title: string;
  description?: string;
  date: string;                   // display date
  category: VideoCategory[];      // one video can belong to multiple verticals
  featured?: boolean;             // pin to top / hero treatment
};

/**
 * ─────────────────────────────────────────────
 *  HOW TO ADD A NEW VIDEO
 * ─────────────────────────────────────────────
 *  1. Copy the template below.
 *  2. Fill in the youtubeId — that's the part
 *     after "v=" in a YouTube URL.
 *  3. Tag one or more categories from
 *     VideoCategory above.
 *  4. Add `featured: true` if it should appear
 *     in the hero / spotlight row.
 * ─────────────────────────────────────────────
 *
 *  {
 *    id: "vid-N",
 *    youtubeId: "XXXXXXXXXXX",
 *    title: "Video Title",
 *    description: "Short description...",
 *    date: "Month DD, YYYY",
 *    category: ["DG & Power", "Company"],
 *    featured: false,
 *  },
 */

const videoData: VideoItem[] = [
  // ── Featured / Spotlight ──────────────────
  {
    id: "vid-1",
    youtubeId: "ZeqxHMRH8RQ",
    title: "How Green Hydrogen Will Transform India's Fuel Future",
    description:
      "In-depth podcast with ABP News discussing how hydrogen enhances — not replaces — diesel across trucks, DG sets, buses, and marine engines.",
    date: "December 24, 2025",
    category: ["DG & Power", "Engine on Wheels", "Marine", "Company"],
    featured: true,
  },

  {
    id: "vid-2",
    youtubeId: "UgL2hP1vuSk",
    title: "GreenX™ — The Future of Clean Diesel Power.",
    description:
      "Diesel generators are the silent backbone of India’s economy — powering hospitals, factories, data centers, and telecom towers when the grid fails.",
    date: "January 15, 2026",
    category: ["DG & Power"],
    featured: false,
  },
  {
    id: "vid-3",
    youtubeId: "UuDDxr38i1g",
    title: "GreenMarine™ — Decarbonising Marine Engines That Keep Global Trade Moving",
    description:
      "Global trade isn’t powered by future ships.It’s powered by marine engines already running—tugboats, harbour craft, offshore vessels, fishing fleets, and auxiliary engines operating day and night.",
    date: "January 21, 2026",
    category: ["Marine"],
    featured: false,
  },
  {
    id: "vid-4",
    youtubeId: "VLol8FCih7s",
    title: "GreenDrive™ — Fuel Savings Today. Compliance Tomorrow. Leadership Always.",
    description:
      "GreenDrive was built for one purpose first: save diesel and improve profitability.Sustainability is the outcome — not the burden.",
    date: "January 19, 2026",
    category: ["Engine on Wheels"],
    featured: false,
  },
  {
    id: "vid-5",
    youtubeId: "Q1m9MgjhSW0",
    title: "SGT HydroEdge",
    description:
      "The global challenge of emissions is not limited to the future — it exists in the engines already powering our world today.Real decarbonisation begins inside the engine.",
    date: "January 16, 2026",
    category: ["Company"],
    featured: true,
  },
  // {
  //   id: "vid-6",
  //   youtubeId: "YOUR_VIDEO_ID",
  //   title: "GreenDrive™ — Fleet Decarbonisation in Action",
  //   description:
  //     "Real-world fleet deployment across logistics trucks showing fuel savings and emission data.",
  //   date: "March 10, 2026",
  //   category: ["Engine on Wheels"],
  //   featured: false,
  // },
];

export const VIDEO_CATEGORIES: VideoCategory[] = [
  "All",
  "Boiler",
  "Kiln",
  "DG & Power",
  "Marine",
  "Engine on Wheels",
  "Company",
];

export default videoData;