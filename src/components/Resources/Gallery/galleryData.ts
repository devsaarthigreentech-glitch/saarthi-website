// galleryData.ts
export type GalleryEvent = {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  cover: string;      // cover image path (public/...)
  images: string[];   // array of image paths for modal
};

const galleryData: GalleryEvent[] = [
  {
    id: "event-1",
    title: "Advancing Sustainable Mobility with On-Demand Hydrogen at EGYPES 2025",
    date: "June 12, 2024",
    excerpt: "At EGYPES 2025, We presented our work on On-Demand Hydrogen Generation for Internal Combustion Engines, a cost-effective, scalable solution to cut fuel consumption and emissions. This patented technology accelerates cleaner transportation without overhauling existing engines. Engaging with global experts reinforced the potential of bridging today’s systems with a zero-emission future.",
    cover: "/images/gallery/event-1/cover.jpg",
    images: [
      "/images/gallery/event-1/1.jpg",
      "/images/gallery/event-1/2.jpg",
      "/images/gallery/event-1/3.jpg",
      "/images/gallery/event-1/4.jpg"

    ],
  },
  
  {
    id: "event-2",
    title: "Saarthi GreenTech Recieves the Energy Leap Award",
    date: "September 03, 2025",
    excerpt: "We are proud to announce that Saarthi Greentech has been honoured with the 𝐄𝐧𝐞𝐫𝐠𝐲 𝐋𝐞𝐚𝐩 𝐀𝐰𝐚𝐫𝐝 at the 𝐆𝐇2 𝐈𝐧𝐝𝐢𝐚 𝐂𝐨𝐧𝐟𝐞𝐫𝐞𝐧𝐜𝐞 2025 in New Delhi.This recognition is a testament to our commitment to innovation in the green hydrogen sector and our efforts to contribute towards a sustainable energy future.The conference also provided us with a valuable opportunity to engage with global industry leaders, policymakers, and investors — exchanging ideas, insights, and collaborations that will help accelerate the clean energy transition.We are deeply encouraged by this recognition and remain dedicated to advancing 𝐠𝐫𝐞𝐞𝐧 𝐡𝐲𝐝𝐫𝐨𝐠𝐞𝐧 as a key driver of sustainability and innovation.",
    cover: "/images/gallery/event-2/cover.jpg",
    images: [
      "/images/gallery/event-2/1.jpg",
    //   "/images/gallery/event-2/2.jpeg",
      "/images/gallery/event-2/3.jpeg",
      "/images/gallery/event-2/4.jpeg",
      "/images/gallery/event-2/5.jpeg"
    ],
  },
  {
    id: "event-3",
    title: "Saarthi GreenTech Inauguration: A New Era of Innovation and Sustainability",
    date: "April 10, 2024",
    excerpt: "On April 10, 2024, Saarthi GreenTech inaugurated its state-of-the-art facility, marking a milestone in sustainable innovation. Our esteemed Chief Guest Mr. Paul Murphy, Australia's Consul General, and Ms. Malini Dutt, Investment NSW Trade, attended along with entrepreneurs, potential customers from India, and media. This event celebrated our achievements and set the stage for future advancements in hydrogen fuel technology.",
    cover: "/images/gallery/event-3/cover.jpeg",
    images: [
      "/images/gallery/event-3/1.jpg",
      "/images/gallery/event-3/2.jpeg",
      "/images/gallery/event-3/3.jpeg"
    ],
  }
  
  // add more events...
];

export default galleryData;
