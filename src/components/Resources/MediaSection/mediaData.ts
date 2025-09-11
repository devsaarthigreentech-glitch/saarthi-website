// src/components/Resources/mediaData.ts

export type MediaItem = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
};

const mediaData: MediaItem[] = [
  {
    id: 1,
    title: "Green logistics: A shift towards sustainable future",
    date: "June 5, 2024",
    excerpt:
      "As the logistics industry spearheads economic development, it grapples with the urgent challenge of curbing its substantial carbon footprint...",
    image: "/images/media/green-logistics.png",
    link: "https://cargoinsights.co/green-logistics-a-shift-towards-sustainable-future/",
  }
];

export default mediaData;
