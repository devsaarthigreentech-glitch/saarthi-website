// "use client";

// import React, { useRef } from "react";
// import { ChevronLeft, ChevronRight, Factory, Ship, Truck } from "lucide-react";


// // ─── PRODUCT DATA — update images to your actual paths ───
// const products = [
//   {
//     id: "greendrive-mini",
//     name: "GreenDrive Mini",
//     description: "Compact hydrogen fuel assist for light commercial vehicles and 3-wheelers. Ideal for last-mile delivery fleets.",
//     image: "/images/products/greendrive-mini.jpg",
//     vertical: "Logistics",
//     verticalIcon: <Truck className="w-3 h-3" />,
//   },
//   {
//     id: "greendrive-neo",
//     name: "GreenDrive Neo",
//     description: "Mid-range CHFA system for trucks, buses, and medium commercial vehicles. 3L+ km road-tested.",
//     image: "/images/products/greendrive-neo.jpg",
//     vertical: "Logistics",
//     verticalIcon: <Truck className="w-3 h-3" />,
//   },
//   {
//     id: "greendrive-heavy",
//     name: "GreenDrive Heavy-Duty",
//     description: "High-output system for mining dumpers, construction equipment, and heavy haul trucks.",
//     image: "/images/products/greendrive-heavy.jpg",
//     vertical: "Logistics",
//     verticalIcon: <Truck className="w-3 h-3" />,
//   },
//   {
//     id: "greenx-dg",
//     name: "GreenX DG",
//     description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
//     image: "/images/products/greenx-dg.jpg",
//     vertical: "Industrial",
//     verticalIcon: <Factory className="w-3 h-3" />,
//   },
//   {
//     id: "greenmarine",
//     name: "GreenMarine",
//     description: "Marine-grade hydrogen fuel assist for auxiliary and propulsion engines. IMO 2050 ready.",
//     image: "/images/products/greenmarine.jpg",
//     vertical: "Marine",
//     verticalIcon: <Ship className="w-3 h-3" />,
//   },
//   {
//     id: "greenedge-boiler",
//     name: "GreenEdge — Boiler",
//     description: "Industrial CHCA system for steam boilers. Fuel-agnostic — works with coal, gas, biomass, oil.",
//     image: "/images/products/greenedge-boiler.jpg",
//     vertical: "Industrial",
//     verticalIcon: <Factory className="w-3 h-3" />,
//   },
//   {
//     id: "greenedge-kiln",
//     name: "GreenEdge — Kiln",
//     description: "High-volume CHCA for cement, ceramic, and glass kilns. Designed for 1000°C+ operations.",
//     image: "/images/products/greenedge-kiln.jpg",
//     vertical: "Industrial",
//     verticalIcon: <Factory className="w-3 h-3" />,
//   },
// ];

// const verticalColors: Record<string, string> = {
//   Industrial: "bg-green-50 text-green-700 border-green-200",
//   Logistics: "bg-blue-50 text-blue-700 border-blue-200",
//   Marine: "bg-cyan-50 text-cyan-700 border-cyan-200",
// };


// export default function ProductCarousel() {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (!carouselRef.current) return;
//     const amount = carouselRef.current.offsetWidth * 0.75;
//     carouselRef.current.scrollBy({
//       left: direction === "left" ? -amount : amount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="py-20 bg-white">

//       {/* ── Inline styles ── */}
//       <style>{`
//         .text-sgt-green { color: #1B6B3D; }
//         .bg-sgt-green { background-color: #1B6B3D; }
//         .border-sgt-green { border-color: #1B6B3D; }
//         .hover\\:border-sgt-green:hover { border-color: #1B6B3D; }
//         .hover\\:text-sgt-green:hover { color: #1B6B3D; }
//         .group:hover .group-hover\\:text-sgt-green { color: #1B6B3D; }
//         .hide-scrollbar::-webkit-scrollbar { display: none; }
//         .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="flex items-end justify-between mb-10">
//           <div>
//             <div className="inline-flex items-center px-3 py-1.5 bg-[#1B6B3D1A] rounded-full text-sgt-green text-xs font-semibold mb-4">
//               Product Lineup
//             </div>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
//               Our Products
//             </h2>
//             <p className="text-gray-500 max-w-xl">
//               One core technology, tailored for the world&apos;s most demanding combustion applications.
//             </p>
//           </div>

//           {/* Nav arrows */}
//           <div className="hidden sm:flex items-center gap-2">
//             <button
//               onClick={() => scroll("left")}
//               className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-sgt-green hover:text-sgt-green transition-all"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-sgt-green hover:text-sgt-green transition-all"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Carousel */}
//         <div
//           ref={carouselRef}
//           className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2"
//         >
//           {products.map((product) => {
//             const tagColor = verticalColors[product.vertical] || "bg-gray-100 text-gray-600 border-gray-200";
//             return (
//               <div
//                 key={product.id}
//                 className="group flex-shrink-0 w-[300px] lg:w-[330px] snap-start bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-sgt-green hover:shadow-xl transition-all duration-300"
//               >
//                 {/* Image */}
//                 <div className="relative h-52 bg-gray-100 overflow-hidden">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className={`absolute top-3 right-3 flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border backdrop-blur-sm bg-white/90 ${tagColor}`}>
//                     {product.verticalIcon}
//                     {product.vertical}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5">
//                   <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sgt-green transition-colors">
//                     {product.name}
//                   </h3>
//                   <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
//                     {product.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Mobile arrows (below carousel) */}
//         <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
//           <button
//             onClick={() => scroll("left")}
//             className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-sgt-green hover:text-sgt-green transition-all"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={() => scroll("right")}
//             className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-sgt-green hover:text-sgt-green transition-all"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Factory, Ship, Truck } from "lucide-react";


// ─── PRODUCT DATA ───
const products = [
  {
    id: "greenx-1",
    name: "GreenX",
    description: "Compact hydrogen fuel assist for light commercial vehicles and 3-wheelers. Ideal for last-mile delivery fleets.",
    image: "/images/gallery/product-gallery/greenx/1.jpeg",
    vertical: "Industrial",
    stat: "3-15% savings",
  },
  {
    id: "greenx-2",
    name: "GreenX",
    description: "Compact hydrogen fuel assist for light commercial vehicles and 3-wheelers. Ideal for last-mile delivery fleets.",
    image: "/images/gallery/product-gallery/greenx/2.jpeg",
    vertical: "Industrial",
    stat: "3-15% savings",
  },
  {
    id: "greenx-3",
    name: "GreenX",
    description: "Compact hydrogen fuel assist for light commercial vehicles and 3-wheelers. Ideal for last-mile delivery fleets.",
    image: "/images/gallery/product-gallery/greenx/3.jpeg",
    vertical: "Industrial",
    stat: "3-15% savings",
  },
  {
    id: "greenx-4",
    name: "GreenX",
    description: "Compact hydrogen fuel assist for light commercial vehicles and 3-wheelers. Ideal for last-mile delivery fleets.",
    image: "/images/gallery/product-gallery/greenx/4.jfif",
    vertical: "Industrial",
    stat: "3-15% savings",
  },
  {
    id: "greenx-5",
    name: "GreenX",
    description: "Compact hydrogen fuel assist for light commercial vehicles and 3-wheelers. Ideal for last-mile delivery fleets.",
    image: "/images/gallery/product-gallery/greenx/5.jfif",
    vertical: "Industrial",
    stat: "3-15% savings",
  },
  {
    id: "greenx-6",
    name: "GreenX",
    description: "Compact hydrogen fuel assist for light commercial vehicles and 3-wheelers. Ideal for last-mile delivery fleets.",
    image: "/images/gallery/product-gallery/greenx/6.jfif",
    vertical: "Industrial",
    stat: "3-15% savings",
  },
  {
    id: "greendrive-neo-1",
    name: "GreenDrive Neo",
    description: "Mid-range CHFA system for trucks, buses, and medium commercial vehicles. 3L+ km road-tested.",
    image: "/images/gallery/product-gallery/sgt-neo/neo-1.png",
    vertical: "Logistics",
    stat: "3L+ km tested",
  },
  {
    id: "greendrive-neo-2",
    name: "GreenDrive Neo",
    description: "Mid-range CHFA system for trucks, buses, and medium commercial vehicles. 3L+ km road-tested.",
    image: "/images/gallery/product-gallery/sgt-neo/neo-2.png",
    vertical: "Logistics",
    stat: "3L+ km tested",
  },
  {
    id: "greendrive-neo-3",
    name: "GreenDrive Neo",
    description: "Mid-range CHFA system for trucks, buses, and medium commercial vehicles. 3L+ km road-tested.",
    image: "/images/gallery/product-gallery/sgt-neo/neo-3.jpg",
    vertical: "Logistics",
    stat: "3L+ km tested",
  },
  {
    id: "greendrive-neo-4",
    name: "GreenDrive Neo",
    description: "Mid-range CHFA system for trucks, buses, and medium commercial vehicles. 3L+ km road-tested.",
    image: "/images/gallery/product-gallery/sgt-neo/neo-4.jpg",
    vertical: "Logistics",
    stat: "3L+ km tested",
  },
  {
    id: "sgt-mini-1",
    name: "SGT Mini",
    description: "High-output system for mining dumpers, construction equipment, and heavy haul trucks.",
    image: "/images/gallery/product-gallery/SGT-MINI/1.png",
    vertical: "Logistics",
    stat: "3-12% savings",
  },
  {
    id: "sgt-mini-2",
    name: "SGT Mini",
    description: "High-output system for mining dumpers, construction equipment, and heavy haul trucks.",
    image: "/images/gallery/product-gallery/SGT-MINI/2.png",
    vertical: "Logistics",
    stat: "3-12% savings",
  },
  {
    id: "sgt-mini-3",
    name: "SGT Mini",
    description: "High-output system for mining dumpers, construction equipment, and heavy haul trucks.",
    image: "/images/gallery/product-gallery/SGT-MINI/3.png",
    vertical: "Logistics",
    stat: "3-12% savings",
  },
  {
    id: "sgt-mini-4",
    name: "SGT Mini",
    description: "High-output system for mining dumpers, construction equipment, and heavy haul trucks.",
    image: "/images/gallery/product-gallery/SGT-MINI/4.png",
    vertical: "Logistics",
    stat: "3-12% savings",
  },
  {
    id: "mini-plus-1",
    name: "SGT Mini Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-MINI-PLUS/SGT-MINI-PLUS-01.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "mini-plus-2",
    name: "SGT Mini Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-MINI-PLUS/SGT-MINI-PLUS-02.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "mini-plus-3",
    name: "SGT Mini Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-MINI-PLUS/SGT-MINI-PLUS-03.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "mini-plus-4",
    name: "SGT Mini Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-MINI-PLUS/SGT-MINI-PLUS-04.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "mini-plus-5",
    name: "SGT Mini Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-MINI-PLUS/SGT-MINI-PLUS-06.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "nano-plus-1",
    name: "SGT Nano Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-NANO-PLUS/SGT-NANO-PLUS-01.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "nano-plus-3",
    name: "SGT Nano Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-NANO-PLUS/SGT-NANO-PLUS-03.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "nano-plus-4",
    name: "SGT Nano Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-NANO-PLUS/SGT-NANO-PLUS-04.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "nano-plus-5",
    name: "SGT Nano Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-NANO-PLUS/SGT-NANO-PLUS-05.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "nano-plus-6",
    name: "SGT Nano Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-NANO-PLUS/SGT-NANO-PLUS-06.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "nano-1",
    name: "SGT Nano Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-NANO/SGT-NANO-01.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "nano-2",
    name: "SGT Nano Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-NANO/SGT-NANO-02.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "nano-3",
    name: "SGT Nano Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-NANO/SGT-NANO-03.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "nano-4",
    name: "SGT Nano Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-NANO/SGT-NANO-04.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "nano-5",
    name: "SGT Nano Plus",
    description: "CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated.",
    image: "/images/gallery/product-gallery/SGT-NANO/SGT-NANO-05.png",
    vertical: "Logistics",
    stat: "ARAI validated",
  },
  {
    id: "greenmarine-1",
    name: "GreenMarine",
    description: "Marine-grade hydrogen fuel assist for auxiliary and propulsion engines. IMO 2050 ready.",
    image: "/images/gallery/product-gallery/greenmarine/1.png",
    vertical: "Marine",
    stat: "IMO 2050 ready",
  },
  {
    id: "greenmarine-2",
    name: "GreenMarine",
    description: "Marine-grade hydrogen fuel assist for auxiliary and propulsion engines. IMO 2050 ready.",
    image: "/images/gallery/product-gallery/greenmarine/3.png",
    vertical: "Marine",
    stat: "IMO 2050 ready",
  },
  {
    id: "greenmarine-3",
    name: "GreenMarine",
    description: "Marine-grade hydrogen fuel assist for auxiliary and propulsion engines. IMO 2050 ready.",
    image: "/images/gallery/product-gallery/greenmarine/2.png",
    vertical: "Marine",
    stat: "IMO 2050 ready",
  },
  {
    id: "install-1",
    name: "GreenDrive - Installation",
    description: "Industrial CHCA system for steam boilers. Fuel-agnostic — works with coal, gas, biomass, oil.",
    image: "/images/gallery/product-gallery/Installation/1.jpg",
    vertical: "Logistics",
    stat: "Any combustion fuel",
  },
  {
    id: "install-2",
    name: "GreenDrive - Installation",
    description: "Industrial CHCA system for steam boilers. Fuel-agnostic — works with coal, gas, biomass, oil.",
    image: "/images/gallery/product-gallery/Installation/2.jpg",
    vertical: "Logistics",
    stat: "Any combustion fuel",
  },
  {
    id: "install-3",
    name: "GreenDrive - Installation",
    description: "Industrial CHCA system for steam boilers. Fuel-agnostic — works with coal, gas, biomass, oil.",
    image: "/images/gallery/product-gallery/Installation/3.jpg",
    vertical: "Logistics",
    stat: "Any combustion fuel",
  },
  {
    id: "install-4",
    name: "GreenDrive - Installation",
    description: "Industrial CHCA system for steam boilers. Fuel-agnostic — works with coal, gas, biomass, oil.",
    image: "/images/gallery/product-gallery/Installation/4.jpg",
    vertical: "Logistics",
    stat: "Any combustion fuel",
  },
  {
    id: "install-5",
    name: "GreenDrive - Installation",
    description: "Industrial CHCA system for steam boilers. Fuel-agnostic — works with coal, gas, biomass, oil.",
    image: "/images/gallery/product-gallery/Installation/5.jpg",
    vertical: "Logistics",
    stat: "Any combustion fuel",
  },
  // {
  //   id: "greenedge-kiln",
  //   name: "GreenEdge — Kiln",
  //   description: "High-volume CHCA for cement, ceramic, and glass kilns. Designed for 1000°C+ operations.",
  //   image: "/images/products/greenedge-kiln.jpg",
  //   vertical: "Industrial",
  //   stat: "1000°C+ rated",
  // },
];

const verticalIcons: Record<string, React.ReactNode> = {
  Industrial: <Factory className="w-3.5 h-3.5" />,
  Logistics: <Truck className="w-3.5 h-3.5" />,
  Marine: <Ship className="w-3.5 h-3.5" />,
};


export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.75;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [paused]);

  const [shuffled, setShuffled] = useState(products);

  useEffect(() => {
    setShuffled([...products].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <section className="py-20 bg-white">

      <style>{`
        .text-sgt-green { color: #1B6B3D; }
        .bg-sgt-green { background-color: #1B6B3D; }
        .border-sgt-green { border-color: #1B6B3D; }
        .hover\\:border-sgt-green:hover { border-color: #1B6B3D; }
        .hover\\:text-sgt-green:hover { color: #1B6B3D; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .product-card .overlay {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .product-card:hover .overlay {
          opacity: 1;
          transform: translateY(0);
        }
        .product-card .shade {
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .product-card:hover .shade {
          opacity: 1;
        }
        .product-card img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .product-card:hover img {
          transform: scale(1.08);
        }
        .product-card .tag-pill {
          transition: opacity 0.3s ease;
        }
        .product-card:hover .tag-pill {
          opacity: 0;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center px-3 py-1.5 bg-[#1B6B3D1A] rounded-full text-sgt-green text-xs font-semibold mb-4">
              Product Lineup
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Our Products
            </h2>
            <p className="text-gray-500 max-w-xl">
              One core technology, tailored for the world&apos;s most demanding combustion applications.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-sgt-green hover:text-sgt-green transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-sgt-green hover:text-sgt-green transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2"
        >
          {shuffled.map((product) => (
            <div
              key={product.id}
              className="product-card flex-shrink-0 w-[300px] lg:w-[340px] h-[420px] lg:h-[460px] snap-start rounded-2xl overflow-hidden relative cursor-pointer"
            >
              {/* Full image */}
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-contain"
              />

              {/* Top tag — visible by default, fades on hover */}
              <div className="tag-pill absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 border border-white/50">
                {verticalIcons[product.vertical]}
                {product.vertical}
              </div>

              {/* Bottom name strip — always visible */}
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-5 pb-5 pt-16">
                <h3 className="text-white text-xl font-bold">{product.name}</h3>
              </div>

              {/* Hover shade */}
              <div className="shade absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-20" />

              {/* Hover overlay content — slides up */}
              <div className="overlay absolute inset-0 z-30 flex flex-col justify-end px-6 pb-6">
                {/* Tag */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1B6B3D] text-white text-xs font-semibold w-fit mb-3">
                  {verticalIcons[product.vertical]}
                  {product.vertical}
                </div>

                {/* Name */}
                <h3 className="text-white text-2xl font-bold mb-2">{product.name}</h3>

                {/* Description */}
                <p className="text-white/75 text-sm leading-relaxed mb-4">{product.description}</p>

                {/* Stat + CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-[#4ade80] text-sm font-semibold">{product.stat}</span>
                  <span className="text-white/50 text-xs flex items-center gap-1">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-sgt-green hover:text-sgt-green transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-sgt-green hover:text-sgt-green transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}