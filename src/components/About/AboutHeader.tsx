// // small presentational header for About / team pages
// export default function AboutHeader({
//   title = "Leadership Team",
//   subtitle,
//   imgSrc,
// }: {
//   title?: string;
//   subtitle?: string;
//   imgSrc?: string;
// }) {
//   return (
//     <header className="relative w-full bg-white">
//       <div className="container mx-auto px-6 lg:px-8 py-12">
//         <div className="grid gap-6 lg:grid-cols-12 items-center">
//           <div className="lg:col-span-7">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
//               {title}
//             </h1>
//             {subtitle && (
//               <p className="mt-3 text-slate-600 max-w-2xl">{subtitle}</p>
//             )}
//           </div>

//           <div className="lg:col-span-5">
//             {imgSrc ? (
//               <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm">
//                 <img
//                   src={imgSrc}
//                   alt="Group photo"
//                   className="w-full h-40 md:h-48 object-cover object-center"
//                 />
//               </div>
//             ) : (
//               <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-500">
//                 Group photo placeholder
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// src/components/About/AboutHeader.tsx
import Image from "next/image";
import React from "react";

export default function AboutHeader({
  title = "Leadership Team",
  subtitle,
  imgSrc,
  hero = false,
}: {
  title?: string;
  subtitle?: string;
  imgSrc?: string;
  hero?: boolean;
}) {
  if (hero) {
    return (
      <header className="relative w-full bg-slate-900 text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={imgSrc ?? "/images/team/group-photo.jpg"}
            alt="Group photo"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 py-28 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg md:text-xl text-slate-200">{subtitle}</p>
            )}
          </div>
        </div>
      </header>
    );
  }

  // non-hero / compact header (used as section heading with small photo to the right)
  return (
    <header className="relative w-full bg-white">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid gap-6 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-slate-600 max-w-2xl">{subtitle}</p>
            )}
          </div>

          <div className="lg:col-span-5">
            {imgSrc ? (
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                <Image
                  src={imgSrc}
                  alt="Group photo"
                  width={900}
                  height={420}
                  className="w-full h-40 md:h-48 object-cover object-center"
                />
              </div>
            ) : (
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-500">
                Group photo placeholder
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
