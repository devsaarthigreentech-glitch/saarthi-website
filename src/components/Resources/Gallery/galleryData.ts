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
    id: "event-7",
    date: "22 July 2026",
    title: "Continental Power Systems Appointed Authorised Dealer for Rajasthan",
    excerpt:
      "SGT HydroEdge welcomed the team from Continental Power System & Triumph Engineer to our Pune facility to formalise their appointment as our authorised dealer for Rajasthan. The visit included the handover of the dealership certificate, a walkthrough of our assembly area, and a demonstration of the GreenDrive and GreenX hydrogen retrofit units. The partnership brings our Hydrogen-on-Demand technology to diesel generator and industrial customers across Rajasthan.",
    cover: "/images/gallery/event-7/cover.jpeg",
    images: [
      "/images/gallery/event-7/cover.jpeg",
      "/images/gallery/event-7/1.jpeg",
      "/images/gallery/event-7/2.jpeg",
      "/images/gallery/event-7/3.jpeg",
      "/images/gallery/event-7/4.jpeg",
      "/images/gallery/event-7/5.jpeg",
      "/images/gallery/event-7/6.jpeg",
      "/images/gallery/event-7/7.jpeg",
    ],
  },
  {
    id: "event-6",
    date: "30 January 2026",
    title: "Recognized Among the 10 Best Climate Tech Startups of 2026",
    excerpt:
      "Honored among the 10 Best Climate Tech Startups of 2026 for innovation across energy and industrial sustainability.The award reflects our mission to accelerate the transition to low-carbon, resilient systems.",
    cover: "/images/gallery/event-6/cover.png",
    images: [
      "/images/gallery/event-6/1.png",
      "/images/gallery/event-6/cover.png",
    ]
  },
  {
    id: "event-5",
    date: "19 December 2025",
    title: "Surakshit Awards 2025 - Green Impact Award",
    excerpt:
      "Saarthi Greentech Pvt. Ltd. was honoured with the Green Impact Award at the Surakshit Awards 2025 in Pune, recognising outstanding contributions to safety, security, and sustainable impact.",
    cover: "/images/gallery/event-5/3.jpeg",
    images: [
      "/images/gallery/event-5/1.jpeg",
      "/images/gallery/event-5/2.jpeg",
      "/images/gallery/event-5/3.jpeg",
      "/images/gallery/event-5/4.jpeg",
      "/images/gallery/event-5/5.jpeg"
    ]
  },
  {
    id: "event-4",
    title: "Showcasing Sustainable Innovation at the 1st International Science & Technology Clusters Conference",
    date: "December 2025",
    excerpt: "Saarthi Green had the privilege of presenting our Decarbonization as a Service (DaaS) technologies at the 1st International Science & Technology Clusters Conference, held at the Dr. Ambedkar International Center, New Delhi. We showcased innovative solutions like GreenX for Diesel Generator applications, GreenMarine for marine and ship applications, and GreenDrive for commercial trucks. The event, organized by the Office of the Principal Scientific Adviser to the Government of India, fostered collaboration between industry, startups, research institutions, and policymakers — reinforcing our mission toward clean energy and sustainable mobility.",
    cover: "/images/gallery/event-4/cover.jpeg",
    images: [
      "/images/gallery/event-4/1.jpeg",
      "/images/gallery/event-4/2.jpeg",
      "/images/gallery/event-4/3.jpeg",
      "/images/gallery/event-4/4.jpeg",
      "/images/gallery/event-4/5.jpeg"
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
  },

  
  // add more events...
];

export default galleryData;
