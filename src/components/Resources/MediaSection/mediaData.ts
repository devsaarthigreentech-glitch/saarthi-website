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
    id: 2,
    title: "Hydrogen Retrofits, India's Most Scalable Decarbonisation Path: Saarthi GreenTech's Alok Kumar",
    date: "December 09, 2025",
    excerpt:
      "At Saarthi Green, our approach is to keep the diesel engine architecture intact and layer a smart hydrogen system on top of it, said Alok Kumar, Director, Saarthi GreenTech, in an interview with Abha Rustagi, Associate Editor, Energetica India.",
    image: "https://www.energetica-india.net/images/entrevistas/NTYj6ty7R0Msjok3daAYenksu1yUrBaLSDnXYZm1G2dExQ1EltwGWd.jpg",
    link: "https://www.energetica-india.net/powerful-thoughts/online/alok-kumar",
  },
  {
    id: 1,
    title: "Green logistics: A shift towards sustainable future",
    date: "June 5, 2024",
    excerpt:
      "As the logistics industry spearheads economic development, it grapples with the urgent challenge of curbing its substantial carbon footprint...",
    image: "/images/media/green-logistics.png",
    link: "https://cargoinsights.co/green-logistics-a-shift-towards-sustainable-future/",
  },
];

export default mediaData;
