// // src/components/About/TeamGrid.tsx
// // Server component - no "use client"
// import React from "react";

// export type Person = {
//   id: string;
//   name: string;
//   role: string;
//   bio: string;
//   photo?: string;
//   linkedin?: string;
// };

// export default function TeamGrid({
//   people,
//   columns = 4,
//   cardSize = "lg",
// }: {
//   people: Person[];
//   columns?: 2 | 3 | 4;
//   cardSize?: "md" | "lg";
// }) {
//   // size adjustments
//   const avatarSizeClass = cardSize === "lg" ? "w-36 h-36 md:w-44 md:h-44" : "w-28 h-28";
//   const paddingClass = cardSize === "lg" ? "p-8" : "p-6";

//   const gridCols = {
//     2: "sm:grid-cols-2 lg:grid-cols-2",
//     3: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3",
//     4: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
//   }[columns];

//   return (
//     <section className="py-12 lg:py-16 bg-white">
//       <div className="container mx-auto px-6 lg:px-8">
//         <div className={`grid gap-8 ${gridCols} items-start`}>
//           {people.map((p) => (
//             <article
//               key={p.id}
//               className={`flex flex-col items-center text-center rounded-2xl border border-slate-100 bg-white shadow-sm ${paddingClass}`}
//               aria-labelledby={`person-${p.id}-name`}
//             >
//               {/* Avatar */}
//               <div className={`rounded-full overflow-hidden bg-slate-100 ${avatarSizeClass}`}>
//                 {p.photo ? (
//                   // use native img to avoid next/image issues in server components if you prefer
//                   <img
//                     src={p.photo}
//                     alt={p.name}
//                     className="w-full h-full object-cover object-center"
//                     loading="lazy"
//                   />
//                 ) : (
//                   <div className="flex h-full w-full items-center justify-center text-slate-400">
//                     No image
//                   </div>
//                 )}
//               </div>

//               {/* Name */}
//               <h3 id={`person-${p.id}-name`} className="mt-4 text-lg md:text-xl font-semibold text-slate-900">
//                 {p.name}
//               </h3>

//               {/* Role / designation */}
//               <div className="mt-1 text-sm font-semibold text-[var(--brand,#33A04A)] uppercase">
//                 {p.role}
//               </div>

//               {/* Bio / description */}
//               <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-[20rem] md:max-w-[22rem]">
//                 {p.bio}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// src/components/About/TeamGrid.tsx
"use client";

import Image from "next/image";
import React from "react";

export type Person = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export default function TeamGrid({
  people,
  columns = 4,
  cardSize = "lg",
}: {
  people: Person[];
  columns?: number;
  cardSize?: "sm" | "lg";
}) {
  // grid column classes
  const colClass =
    columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const avatarSizeClass = cardSize === "lg" ? "h-40 w-40" : "h-28 w-28";

  return (
    <section className="py-12">
      {/* constrain the row width and center it */}
      <div className="container mx-auto px-6">
        <div className={`max-w-7xl mx-auto`}>
          <div className={`grid gap-8 ${colClass}`}>
            {people.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center text-center rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition h-full"
              >
                {/* Avatar */}
                <div className={`relative ${avatarSizeClass} rounded-full overflow-hidden`}>
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes={cardSize === "lg" ? "160px" : "112px"}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 mt-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium text-[var(--brand,#33A04A)]">
                    {p.role}
                  </p>

                  {/* flex-1 makes all bios grow to align card bottoms */}
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 flex-1">
                    {p.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
