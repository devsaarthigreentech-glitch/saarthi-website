// videoData.ts
//
// The Videos page list. YouTube IDs, titles and descriptions are NOT stored
// here — they come from VIDEOS in src/data/siteContent.ts, the single data
// file for video IDs. To swap a film, change its ID there.
import { VIDEOS } from "@/data/siteContent";

export type VideoCategory =
  | "all"
  | "company"
  | "greendrive"
  | "greenx"
  | "marine"
  | "media";

export type VideoItem = {
  id: string;
  youtubeId: string;
  title: string;
  description?: string;
  date: string;
  duration?: string; // e.g. "3:45"
  category: VideoCategory;
  tag: string; // display label
  featured?: boolean;
};

const videoData: VideoItem[] = [
  // ── Featured: the corporate film ──────────
  {
    id: "vid-corporate",
    ...VIDEOS.corporate,
    category: "company",
    tag: "Company",
    featured: true,
  },
  {
    id: "vid-greendrive",
    ...VIDEOS.greendrive,
    category: "greendrive",
    tag: "GreenDrive",
  },
  {
    id: "vid-greenx",
    ...VIDEOS.greenx,
    category: "greenx",
    tag: "GreenX",
  },
  // TODO(owner): confirm GreenMarine video claims match current wording
  {
    id: "vid-greenmarine",
    ...VIDEOS.greenmarine,
    category: "marine",
    tag: "GreenMarine",
  },
  {
    id: "vid-abp-podcast",
    ...VIDEOS.abpPodcast,
    category: "media",
    tag: "Media",
  },
  // TODO(owner): supply the YouTube IDs of the GreenDrive and GreenX short
  // social clips. Add them to VIDEOS in src/data/siteContent.ts and a "Shorts"
  // row can then be listed here.
];

export const FILTER_TABS: { filter: VideoCategory; label: string }[] = [
  { filter: "all", label: "All Videos" },
  { filter: "company", label: "Company" },
  { filter: "greendrive", label: "GreenDrive" },
  { filter: "greenx", label: "GreenX" },
  { filter: "marine", label: "GreenMarine" },
  { filter: "media", label: "Media" },
];

export default videoData;
