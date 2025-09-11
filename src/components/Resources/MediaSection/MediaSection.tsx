// // src/components/Resources/MediaSection.tsx
// import React from "react";
// import MediaCard from "./MediaCardData";
// import mediaData from "./mediaData";
// import Image from "next/image";

// export default function MediaSection({ logos = [] as string[] }) {
//   return (
//     <section className="py-16 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-6">
//         <header className="mb-8 text-center">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
//             Media & Coverage
//           </h2>
//           <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
//             Selected press coverage, features and interviews about our pilots, products and research.
//           </p>
//         </header>

//         {/* logos row */}
//         {logos.length > 0 && (
//           <div className="flex flex-wrap gap-6 items-center justify-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-8">
//             {logos.map((l, i) => (
//               <div key={i} className="h-10 w-28 relative">
//                 <Image src={l} alt={`press-${i}`} fill className="object-contain" />
//               </div>
//             ))}
//           </div>
//         )}

//         {/* cards grid */}
// <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {Array.isArray(mediaData) && mediaData.map((m) => <MediaCard item={m} key={m.id} />)}
//         </div>
//       </div>
//     </section>
//   );
// }

// src/components/Resources/MediaSection.tsx
import React from "react";
import MediaCard from "./MediaCardData";
import mediaData from "./mediaData";

export default function MediaSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Media & Coverage
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Selected press coverage, features and interviews about our pilots, products and research.
          </p>
        </header>

        {/* cards grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(mediaData) && mediaData.length > 0 ? (
            mediaData.map((m) => <MediaCard item={m} key={m.id} />)
          ) : (
            <div className="col-span-full text-center text-slate-500">No media items found.</div>
          )}
        </div>
      </div>
    </section>
  );
}

