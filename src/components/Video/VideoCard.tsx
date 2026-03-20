// // VideoCard.tsx
// "use client";

// import { VideoItem } from "./videoData";

// type Props = {
//   video: VideoItem;
//   onPlay: (v: VideoItem) => void;
// };

// export default function VideoCard({ video, onPlay }: Props) {
//   const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

//   return (
//     <article className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
//       <button
//         onClick={() => onPlay(video)}
//         className="text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33A04A] focus-visible:ring-offset-2 rounded-xl"
//         aria-label={`Play video: ${video.title}`}
//       >
//         {/* Thumbnail with play overlay */}
//         <div className="relative h-52 w-full overflow-hidden bg-slate-200">
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src={thumbnailUrl}
//             alt={video.title}
//             className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//             loading="lazy"
//             onError={(e) => {
//               // Fallback to hqdefault if maxresdefault isn't available
//               (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
//             }}
//           />

//           {/* Dark gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

//           {/* Play button */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="#33A04A"
//                 className="h-7 w-7 translate-x-[1px]"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>
//           </div>

//           {/* Category badges on thumbnail */}
//           <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
//             {video.category
//               .filter((c) => c !== "All")
//               .slice(0, 2)
//               .map((cat) => (
//                 <span
//                   key={cat}
//                   className="rounded bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
//                 >
//                   {cat}
//                 </span>
//               ))}
//             {video.category.filter((c) => c !== "All").length > 2 && (
//               <span className="rounded bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
//                 +{video.category.filter((c) => c !== "All").length - 2}
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Text content */}
//         <div className="p-4">
//           <div className="text-xs font-semibold text-[#33A04A] mb-2">
//             {video.date}
//           </div>
//           <h4 className="text-base font-semibold text-slate-900 leading-snug line-clamp-2">
//             {video.title}
//           </h4>
//           {video.description && (
//             <p className="mt-2 text-sm text-slate-500 line-clamp-2">
//               {video.description}
//             </p>
//           )}
//         </div>
//       </button>
//     </article>
//   );
// }