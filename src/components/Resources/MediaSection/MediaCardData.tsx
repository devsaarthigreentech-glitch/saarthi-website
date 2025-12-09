// // src/components/Resources/MediaCard.tsx
// import Image from "next/image";
// import React from "react";
// import { MediaItem } from "./mediaData";

// export default function MediaCard({ item }: { item: MediaItem }) {
//   return (
//     <article className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
//       <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
//         <div className="relative w-full h-44 md:h-52">
//           <Image
//             src={item.image}
//             alt={item.title}
//             fill
//             className="object-cover"
//             sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
//           />
//         </div>
//       </a>

//       <div className="p-5">
//         <p className="text-[13px] font-semibold text-[var(--brand,#33A04A)] mb-2">
//           {item.date}
//         </p>

//         <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
//           <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
//             {item.title}
//           </a>
//         </h3>

//         <p className="text-sm text-slate-600 dark:text-slate-300 mb-4" style={{ maxHeight: 72, overflow: "hidden" }}>
//           {item.excerpt}
//         </p>

//         <div className="flex items-center">
//           <a
//             href={item.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[var(--brand,#33A04A)] font-semibold hover:underline"
//           >
//             Read more →
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// }
import Image from "next/image";
import React from "react";
import { MediaItem } from "./mediaData";

export default function MediaCard({ item }: { item: MediaItem }) {
  const isExternal = item.image.startsWith("http://") || item.image.startsWith("https://");

  return (
    <article className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative w-full h-44 md:h-52">
          <Image
            src={item.image}
            alt={item.title}
            fill
            unoptimized={isExternal}   // prevents Next.js from trying to optimize remote images
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
      </a>

      <div className="p-5">
        <p className="text-[13px] font-semibold text-[var(--brand,#33A04A)] mb-2">
          {item.date}
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {item.title}
          </a>
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4" style={{ maxHeight: 72, overflow: "hidden" }}>
          {item.excerpt}
        </p>

        <div className="flex items-center">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brand,#33A04A)] font-semibold hover:underline"
          >
            Read more →
          </a>
        </div>
      </div>
    </article>
  );
}
