// // VideoPlayerModal.tsx
// "use client";

// import { useEffect, useCallback } from "react";
// import { VideoItem } from "./videoData";

// type Props = {
//   video: VideoItem | null;
//   onClose: () => void;
// };

// export default function VideoPlayerModal({ video, onClose }: Props) {
//   const handleKey = useCallback(
//     (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     },
//     [onClose]
//   );

//   useEffect(() => {
//     document.addEventListener("keydown", handleKey);
//     if (video) document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", handleKey);
//       document.body.style.overflow = "";
//     };
//   }, [handleKey, video]);

//   if (!video) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
//       role="dialog"
//       aria-modal="true"
//       aria-label={`Playing: ${video.title}`}
//       onClick={(e) => {
//         if (e.target === e.currentTarget) onClose();
//       }}
//     >
//       <div className="relative w-full max-w-4xl">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           aria-label="Close video player"
//           className="absolute -top-10 right-0 flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
//         >
//           <span>Close</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button>

//         {/* 16:9 responsive iframe */}
//         <div className="relative w-full overflow-hidden rounded-lg shadow-2xl bg-black"
//              style={{ paddingBottom: "56.25%" }}>
//           <iframe
//             className="absolute inset-0 w-full h-full"
//             src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
//             title={video.title}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         </div>

//         {/* Title + meta below the player */}
//         <div className="mt-4 px-1">
//           <h3 className="text-lg font-semibold text-white">{video.title}</h3>
//           <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-white/60">
//             <span>{video.date}</span>
//             {video.category
//               .filter((c) => c !== 'all')
//               .map((cat) => (
//                 <span
//                   key={cat}
//                   className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/80"
//                 >
//                   {cat}
//                 </span>
//               ))}
//           </div>
//           {video.description && (
//             <p className="mt-2 text-sm text-white/50 line-clamp-2">
//               {video.description}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }