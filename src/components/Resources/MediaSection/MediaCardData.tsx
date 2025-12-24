// // // src/components/Resources/MediaCard.tsx
// // import Image from "next/image";
// // import React from "react";
// // import { MediaItem } from "./mediaData";

// // export default function MediaCard({ item }: { item: MediaItem }) {
// //   return (
// //     <article className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
// //       <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
// //         <div className="relative w-full h-44 md:h-52">
// //           <Image
// //             src={item.image}
// //             alt={item.title}
// //             fill
// //             className="object-cover"
// //             sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
// //           />
// //         </div>
// //       </a>

// //       <div className="p-5">
// //         <p className="text-[13px] font-semibold text-[var(--brand,#33A04A)] mb-2">
// //           {item.date}
// //         </p>

// //         <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
// //           <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
// //             {item.title}
// //           </a>
// //         </h3>

// //         <p className="text-sm text-slate-600 dark:text-slate-300 mb-4" style={{ maxHeight: 72, overflow: "hidden" }}>
// //           {item.excerpt}
// //         </p>

// //         <div className="flex items-center">
// //           <a
// //             href={item.link}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-[var(--brand,#33A04A)] font-semibold hover:underline"
// //           >
// //             Read more →
// //           </a>
// //         </div>
// //       </div>
// //     </article>
// //   );
// // }
// import Image from "next/image";
// import React from "react";
// import { MediaItem } from "./mediaData";

// export default function MediaCard({ item }: { item: MediaItem }) {
//   const isExternal = item.image.startsWith("http://") || item.image.startsWith("https://");

//   return (
//     <article className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
//       <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
//         <div className="relative w-full h-44 md:h-52">
//           <Image
//             src={item.image}
//             alt={item.title}
//             fill
//             unoptimized={isExternal}   // prevents Next.js from trying to optimize remote images
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
// import Image from "next/image";
// import React from "react";
// import { MediaItem } from "./mediaData";

// export default function MediaCard({ item }: { item: MediaItem }) {
//   const isExternal =
//     item.image.startsWith("http://") || item.image.startsWith("https://");

//   return (
//     <article className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition 
//                         flex flex-col h-full">

//       {/* FIXED IMAGE HEIGHT (aspect ratio 16:9) */}
//       <a
//         href={item.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="block"
//       >
//         <div className="relative w-full aspect-[16/9]">
//           <Image
//             src={item.image}
//             alt={item.title}
//             fill
//             unoptimized={isExternal}
//             className="object-cover"
//             sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
//           />
//         </div>
//       </a>

//       {/* TEXT SECTION — fixed padding & equalized height */}
//       <div className="p-5 flex flex-col flex-1">

//         <p className="text-[13px] font-semibold text-[var(--brand,#33A04A)] mb-2">
//           {item.date}
//         </p>

//         <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
//           <a
//             href={item.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline"
//           >
//             {item.title}
//           </a>
//         </h3>

//         {/* Shortened excerpt with clean multi-line truncation */}
//         <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
//           {item.excerpt}
//         </p>

//         {/* "Read More" ALWAYS at the bottom */}
//         <div className="mt-auto">
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
"use client";

import React, { useState } from "react";
import { MediaItem } from "./mediaData";

/**
 * MediaCard - Component for individual media articles/videos.
 * Updated to fix "useState" ReferenceError and include SEO-friendly sharing functionality.
 */

export default function MediaCard({ item }: { item: MediaItem }) {
  const [copied, setCopied] = useState(false);
  
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Construct the shareable link using the item ID as an anchor point
    // This allows users to share a direct link to this specific section on your site
    const shareUrl = `${window.location.origin}${window.location.pathname}#media-${item.id}`;
    
    // Fallback copy to clipboard method for compatibility
    const textArea = document.createElement("textarea");
    textArea.value = shareUrl;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      // Reset the "Copied" state after a short delay
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link: ', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <article 
      id={`media-${item.id}`} 
      className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 scroll-mt-24"
    >
      {/* IMAGE / VIDEO PREVIEW SECTION */}
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden"
      >
        <div className="relative w-full aspect-[16/9] bg-slate-200 dark:bg-slate-800 transition-transform duration-500 group-hover:scale-105">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Visual Indicator for Video Content */}
          {(item.link.includes('youtube.com') || item.link.includes('youtu.be')) && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
               <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 transition-transform">
                 <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                   <path d="M8 5v14l11-7z"/>
                 </svg>
               </div>
            </div>
          )}
        </div>
      </a>

      {/* TEXT CONTENT SECTION */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[12px] font-bold text-[var(--brand,#33A04A)] uppercase tracking-wider">
            {item.date}
          </span>
          
          {/* Share Button to boost internal SEO traffic */}
          <button 
            onClick={handleShare}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-[var(--brand,#33A04A)] hover:bg-[var(--brand,#33A04A)]/10 transition-all border border-slate-200 dark:border-slate-700"
            title="Copy link to this highlight"
          >
            {copied ? (
              <span className="text-[10px] font-bold uppercase text-[var(--brand,#33A04A)]">Link Copied!</span>
            ) : (
              <>
                <span className="text-[10px] font-bold uppercase">Share</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </>
            )}
          </button>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 leading-tight">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--brand,#33A04A)] transition-colors"
          >
            {item.title}
          </a>
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed">
          {item.excerpt}
        </p>

        {/* Action Button - Always pushed to the bottom */}
        <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center text-xs font-black text-[var(--brand,#33A04A)] uppercase tracking-[0.15em]"
          >
            Watch Coverage
            <svg className="w-4 h-4 ml-2 transform transition-transform group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}