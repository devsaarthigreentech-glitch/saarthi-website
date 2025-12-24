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
    id: 9,
    title: "How Green Hydrogen will transform India's fuel future!",
    date: "December 24, 2025",
    excerpt:
      "This episode was originally recorded with  @ABPNews  and is shared here with their permission.In this in-depth podcast conversation, we discuss how hydrogen can function as an enhancer—not a replacement—for diesel, enabling meaningful emission reductions across real-world applications such as commercial trucks, generator sets, buses, and marine engines, without requiring changes to existing infrastructure.The discussion also touches on the journey of building climate-focused innovation at scale, and why sustainability does not need to come at the cost of performance or profitability. Clean energy solutions, when designed right, can be practical, measurable, and economically viable.",
    image: "https://img.youtube.com/vi/ZeqxHMRH8RQ/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=ZeqxHMRH8RQ",
  },
  {
    id: 8,
    title: "Green Hydrogen: The Clean Energy Alternative That Is Yet To Be",
    date: "December 16, 2025",
    excerpt:
      "India’s green hydrogen drive could spark a new era of clean industrial power, but high delivery costs and patchy availability may derail the momentum. Could decentralised, point-of-use hydrogen be the real game-changer?",
    image: "https://api.thesecretariat.in/the-secretariat-api/public//file/download-content-attachment?fileId=c86324417d2a42e2ab3a55de9cbf5943",
    link: "https://thesecretariat.in/article/india-s-green-hydrogen-bet-boom-or-bubble",
  },
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
  {
    id: 3,
    title: "Hydrogen Retrofits, India's Most Scalable Decarbonisation Path: Saarthi GreenTech's Alok Kumar",
    date: "May 21, 2024",
    excerpt:
      "At Saarthi Green, our approach is to keep the diesel engine architecture intact and layer a smart hydrogen system on top of it, said Alok Kumar, Director, Saarthi GreenTech, in an interview with Abha Rustagi, Associate Editor, Energetica India.",
    image: "https://assets.entrepreneur.com/content/3x2/2000/1716294282-Untitleddesign7.jpg?format=pjeg&auto=webp&crop=16:9&width=675&height=380",
    link: "https://www.entrepreneur.com/en-in/growth-strategies/green-hydrogen-adoption-where-does-india-stand/474456",
  },
  {
    id: 7,
    title: "Indo-Australian Innovation Takes Center Stage at Saarthi GreenTech’s Factory Inauguration in Pune by Paul Murphy, Bridging Continents for Sustainability",
    date: "April 11, 2024",
    excerpt:"Saarthi GreenTech, an Indo-Australian clean-tech company, has proudly announced the grand inauguration of its state-of-the-art factory in Chakan, Pune. In first phase of its operation the 10,000 sq. ft production unit will manufacture approximately 1,00,000 units annually. The K series Hydrogen Fuel Systems will be available in different variants like K20, K30, K40, K50 corresponding to the engine capacity they support. Their patented electrolyser-based Hydrogen Fuel Systems, a cutting-edge technology, converts diesel-run engines into hydrogen-based hybrids instantly, leading to a remarkable reduction in fuel consumption and harmful emissions.",
    image: "https://www.marketinginasia.com/wp-content/uploads/2024/04/Indo-Australian-Innovation-Takes-Center-Stage-at-Saarthi-GreenTechs-Factory-Inauguration-in-Pune-by-Paul-Murphy-Bridging-Continents-for-Sustainability.jpg",
    link: "https://www.marketinginasia.com/indo-australian-innovation-takes-center-stage-at-saarthi-greentechs-factory-inauguration-in-pune-by-paul-murphy-bridging-continents-for-sustainability/",
  },
  {
    id: 6,
    title: "Saarthi Greentech launches Pune's first hydrogen fuel systems factory",
    date: "April 13, 2024",
    excerpt:
      "Saarthi GreenTech, an Indo-Australian clean-tech company, launched a state-of-the-art factory in Chakan, Pune. ",
    image: "https://www.hindustantimes.com/ht-img/img/2024/04/12/550x309/Saarthi-Greentech-unveils-Pune-s-first-factory-to-_1712947126942.jpg",
    link: "https://www.hindustantimes.com/cities/pune-news/bitsnbytes-know-about-startup-business-news-in-pune-101712947171038.html",
  },
  {
    id: 5,
    title: "Saarthi Greentech Unveils First Factory in Pune to Produce Hydrogen Fuel Systems That Aim to Reduce Fuel Consumption and Carbon Emissions in an Indo- Australian Collaboration",
    date: "April 22, 2024",
    excerpt:
      "At Saarthi Green, our approach is to keep the diesel engine architecture intact and layer a smart hydrogen system on top of it, said Alok Kumar, Director, Saarthi GreenTech, in an interview with Abha Rustagi, Associate Editor, Energetica India.",
    image: "https://img.fuelcellsworks.com/wp-content/uploads/2024/04/2024-04-22_07-43-22-1-1.webp",
    link: "https://fuelcellsworks.com/news/saarthi-greentech-unveils-first-factory-in-pune-to-produce-hydrogen-fuel-systems-that-aim-to-reduce-fuel-consumption-and-carbon-emissions-in-an-indo-australian-collaboration",
  },
  {
    id: 4,
    title: "Hydrogen Retrofits, India's Most Scalable Decarbonisation Path: Saarthi GreenTech's Alok Kumar",
    date: "April 22, 2024",
    excerpt:
      "This factory represents a significant step forward for Saarthi GreenTech, making it India’s first manufacturing & assembly unit for Saarthi GreenTech’s innovative products to be sold in India as well as exported to global markets like Australia, Middle-East, Africa & the USA.",
    image: "https://hydrogen-central.com/wp-content/uploads/2024/04/hydrogen-fuel-systems.png",
    link: "https://hydrogen-central.com/saarthi-greentech-unveils-first-factory-in-pune-to-produce-hydrogen-fuel-systems-that-aim-to-reduce-fuel-consumption-and-carbon-emissions-in-an-indo-australian-collaboration/",
  },
];

export default mediaData;
