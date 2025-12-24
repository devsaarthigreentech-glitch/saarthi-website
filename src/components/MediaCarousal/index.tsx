// // src/components/MediaCarousel.tsx
// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import mediaData from '@/components/Resources/MediaSection/mediaData';
// import MediaCard from '@/components/Resources/MediaSection/MediaCardData'; // make sure this path matches your repo

// /**
//  * MediaCarousel
//  * - Re-uses MediaCard for each card.
//  * - Autoplay, arrows, dots, keyboard navigation, swipe support.
//  * - No external dependency.
//  */

// const AUTOPLAY_MS = 4500;
// const VISIBLE_COUNT_BY_BREAKPOINT = [
//   { min: 1024, count: 3 }, // lg and up
//   { min: 768, count: 2 },  // md
//   { min: 0, count: 1 },    // sm
// ];

// function getVisibleCount(width: number) {
//   for (const br of VISIBLE_COUNT_BY_BREAKPOINT) {
//     if (width >= br.min) return br.count;
//   }
//   return 1;
// }

// export default function MediaCarousel() {
//   const [index, setIndex] = useState(0); // index of first visible card
//   const [visible, setVisible] = useState(1);
//   const [paused, setPaused] = useState(false);
//   const trackRef = useRef<HTMLDivElement | null>(null);
//   const autoplayRef = useRef<number | null>(null);
//   const startX = useRef<number | null>(null);
//   const deltaX = useRef<number>(0);

//   const items = Array.isArray(mediaData) ? mediaData : [];

//   useEffect(() => {
//     const onResize = () => setVisible(getVisibleCount(window.innerWidth));
//     onResize();
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   useEffect(() => {
//     if (paused) return;
//     clearAutoplay();
//     autoplayRef.current = window.setInterval(() => {
//       moveNext();
//     }, AUTOPLAY_MS);
//     return () => clearAutoplay();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [index, paused, visible]);

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === 'ArrowLeft') movePrev();
//       if (e.key === 'ArrowRight') moveNext();
//     };
//     window.addEventListener('keydown', onKey);
//     return () => window.removeEventListener('keydown', onKey);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [index, visible]);

//   function clearAutoplay() {
//     if (autoplayRef.current) {
//       window.clearInterval(autoplayRef.current);
//       autoplayRef.current = null;
//     }
//   }

//   function moveNext() {
//     const maxStart = Math.max(0, items.length - visible);
//     setIndex(prev => (prev >= maxStart ? 0 : prev + 1));
//   }

//   function movePrev() {
//     const maxStart = Math.max(0, items.length - visible);
//     setIndex(prev => (prev <= 0 ? maxStart : prev - 1));
//   }

//   function goTo(i: number) {
//     const maxStart = Math.max(0, items.length - visible);
//     const next = Math.min(maxStart, Math.max(0, i));
//     setIndex(next);
//   }

//   // Pointer / touch handlers for swipe
//   function onPointerDown(e: React.PointerEvent) {
//     startX.current = e.clientX;
//     deltaX.current = 0;
//     (e.target as Element).setPointerCapture(e.pointerId);
//     setPaused(true);
//   }
//   function onPointerMove(e: React.PointerEvent) {
//     if (startX.current == null) return;
//     deltaX.current = e.clientX - startX.current;
//     // small drag visual effect
//     if (trackRef.current) {
//       trackRef.current.style.transform = `translateX(${deltaX.current}px)`;
//     }
//   }
//   function onPointerUp(e: React.PointerEvent) {
//     if (startX.current == null) return;
//     (e.target as Element).releasePointerCapture(e.pointerId);
//     if (Math.abs(deltaX.current) > 60) {
//       if (deltaX.current < 0) moveNext();
//       else movePrev();
//     }
//     // reset transform
//     if (trackRef.current) {
//       trackRef.current.style.transform = '';
//     }
//     startX.current = null;
//     deltaX.current = 0;
//     setPaused(false);
//   }

//   // Accessibility: number of pages
//   const pages = Math.max(1, Math.ceil(items.length / visible));
//   const pageIndex = Math.floor(index / visible);

//   // Inline style for slide translation
//   const percent = (index * (100 / visible));

//   return (
//     <section
//       aria-label="Media carousel - press left/right to navigate"
//       className="py-12 bg-gray-50 dark:bg-slate-900"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
//             Media & Coverage
//           </h2>
//           <div className="flex items-center gap-3">
//             <button
//               aria-label="Previous"
//               onClick={() => { setPaused(true); movePrev(); }}
//               className="inline-flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:bg-slate-100 transition"
//             >
//               <svg className="w-5 h-5 text-slate-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             <button
//               aria-label="Next"
//               onClick={() => { setPaused(true); moveNext(); }}
//               className="inline-flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:bg-slate-100 transition"
//             >
//               <svg className="w-5 h-5 text-slate-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* TRACK (mask + moving inner) */}
//         <div
//           className="relative overflow-hidden rounded-xl"
//           onMouseEnter={() => setPaused(true)}
//           onMouseLeave={() => setPaused(false)}
//         >
//           <div
//             ref={trackRef}
//             role="list"
//             aria-live="polite"
//             onPointerDown={onPointerDown}
//             onPointerMove={onPointerMove}
//             onPointerUp={onPointerUp}
//             onPointerCancel={onPointerUp}
//             className="flex will-change-transform transition-transform duration-500"
//             style={{
//               width: `${(items.length * 100) / visible}%`,
//               transform: `translateX(-${percent}%)`
//             }}
//           >
//             {items.map((item, i) => (
//               <div
//                 key={item.id}
//                 role="listitem"
//                 className="px-3 py-2"
//                 style={{
//                   width: `${100 / items.length}%`, // ensures correct width inside the flex track
//                   flex: `0 0 ${100 / items.length}%`,
//                 }}
//               >
//                 <div className="h-full">
//                   <MediaCard item={item} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* PAGINATION DOTS */}
//         <div className="mt-6 flex items-center justify-center gap-2">
//           {Array.from({ length: pages }).map((_, p) => (
//             <button
//               key={p}
//               aria-label={`Go to page ${p + 1}`}
//               onClick={() => goTo(p * visible)}
//               className={`w-2.5 h-2.5 rounded-full transition ${p === pageIndex ? 'bg-[var(--brand,#33A04A)]' : 'bg-slate-300 dark:bg-slate-700'}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// Importing the real data and type from your existing files
import mediaData, { MediaItem } from '@/components/Resources/MediaSection/mediaData';

/**
 * MediaCarousel - Center Focus Layout
 * Linked directly to the central mediaData.ts source.
 */

// export default function MediaCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   // Auto-play logic
//   useEffect(() => {
//     if (isPaused || !mediaData || mediaData.length === 0) return;
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % mediaData.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [currentIndex, isPaused]);

//   const handleNext = () => setCurrentIndex((prev) => (prev + 1) % mediaData.length);
//   const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + mediaData.length) % mediaData.length);
//   const goTo = (idx) => setCurrentIndex(idx);

//   if (!mediaData || mediaData.length === 0) return null;

//   return (
//     <section className="py-12 bg-slate-50 dark:bg-slate-950 overflow-hidden w-full border-y border-slate-200 dark:border-slate-900">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3">
//             Media <span className="text-[var(--brand,#33A04A)]">Highlights</span>
//           </h2>
//           <div className="h-1.5 w-12 bg-[var(--brand,#33A04A)] mx-auto rounded-full"></div>
//         </div>

//         <div 
//           className="relative flex items-center justify-center h-[480px] w-full"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           {/* Navigation Arrows */}
//           <div className="absolute inset-x-0 z-30 flex justify-between px-2 pointer-events-none">
//             <button
//               onClick={handlePrev}
//               className="w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-xl flex items-center justify-center text-slate-800 dark:text-white hover:bg-[var(--brand,#33A04A)] hover:text-white transition-all pointer-events-auto backdrop-blur-sm"
//               aria-label="Previous slide"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <button
//               onClick={handleNext}
//               className="w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-xl flex items-center justify-center text-slate-800 dark:text-white hover:bg-[var(--brand,#33A04A)] hover:text-white transition-all pointer-events-auto backdrop-blur-sm"
//               aria-label="Next slide"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>

//           {/* Cards Track */}
//           <div className="relative w-full h-full flex items-center justify-center">
//             {mediaData.map((item, i) => {
//               let position = i - currentIndex;
              
//               // Handle infinite wrapping logic for smooth transitions
//               if (position < -1) position += mediaData.length;
//               if (position > 1) position -= mediaData.length;

//               const isCenter = position === 0;
//               const isVisible = Math.abs(position) <= 1;

//               return (
//                 <div
//                   key={item.id}
//                   className="absolute w-[90%] sm:w-[540px] transition-all duration-700 ease-in-out"
//                   style={{
//                     transform: `translateX(${position * 80}%) scale(${isCenter ? 1 : 0.8})`,
//                     zIndex: isCenter ? 20 : 10,
//                     opacity: isVisible ? (isCenter ? 1 : 0.4) : 0,
//                     pointerEvents: isCenter ? 'auto' : 'none',
//                     filter: isCenter ? 'none' : 'blur(4px)'
//                   }}
//                 >
//                   <div className={`bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border transition-all duration-500 ${isCenter ? 'border-slate-200 dark:border-slate-800' : 'border-transparent'}`}>
//                     <div className="relative h-52 sm:h-64">
//                       <Image 
//                         src={item.image} 
//                         alt={item.title} 
//                         fill
//                         className="object-cover"
//                         unoptimized={item.image.startsWith('http')}
//                       />
//                       <div className="absolute top-5 left-5">
//                         <span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
//                           {item.date}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="p-6 sm:p-10">
//                       <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2 leading-tight">
//                         {item.title}
//                       </h3>
//                       <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base line-clamp-2 mb-8 leading-relaxed">
//                         {item.excerpt}
//                       </p>
//                       <a 
//                         href={item.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="group inline-flex items-center text-sm font-bold text-[var(--brand,#33A04A)] uppercase tracking-widest"
//                       >
//                         <span className="relative">
//                           Explore Story
//                           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand,#33A04A)] transition-all group-hover:w-full"></span>
//                         </span>
//                         <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Custom Pagination */}
//         <div className="flex justify-center items-center gap-3 mt-8">
//           {mediaData.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goTo(i)}
//               className={`transition-all duration-500 rounded-full h-2 ${
//                 i === currentIndex ? 'w-12 bg-[var(--brand,#33A04A)]' : 'w-2 bg-slate-300 dark:bg-slate-800'
//               }`}
//               aria-label={`Go to slide ${i + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function MediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || !mediaData || mediaData.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaData.length);
    }, 60000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % mediaData.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + mediaData.length) % mediaData.length);
  const goTo = (idx) => setCurrentIndex(idx);

  if (!mediaData || mediaData.length === 0) return null;

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950 overflow-hidden w-full border-y border-slate-200 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
            Media <span className="text-[var(--brand,#33A04A)]">Highlights</span>
          </h2>
          <div className="h-1 w-10 bg-[var(--brand,#33A04A)] mx-auto rounded-full"></div>
        </div>

        <div 
          className="relative flex items-center justify-center h-[380px] w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 z-30 flex justify-between px-2 pointer-events-none">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-800 hover:bg-[var(--brand,#33A04A)] hover:text-white transition-all pointer-events-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-800 hover:bg-[var(--brand,#33A04A)] hover:text-white transition-all pointer-events-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Cards Track */}
          <div className="relative w-full h-full flex items-center justify-center">
            {mediaData.map((item, i) => {
              let position = i - currentIndex;
              if (position < -1) position += mediaData.length;
              if (position > 1) position -= mediaData.length;

              const isCenter = position === 0;
              const isVisible = Math.abs(position) <= 1;

              return (
                <div
                  key={item.id}
                  className="absolute w-[85%] sm:w-[400px] transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${position * 85}%) scale(${isCenter ? 1 : 0.85})`,
                    zIndex: isCenter ? 20 : 10,
                    opacity: isVisible ? (isCenter ? 1 : 0.4) : 0,
                    pointerEvents: isCenter ? 'auto' : 'none',
                    filter: isCenter ? 'none' : 'blur(1px)'
                  }}
                >
                  <div className={`bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl border transition-all duration-500 ${isCenter ? 'border-slate-200 dark:border-slate-800' : 'border-transparent'}`}>
                    <div className="relative h-40 sm:h-44">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-black/60 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest border border-white/10">
                          {item.date}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-md sm:text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2 mb-4">
                        {item.excerpt}
                      </p>
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center text-xs font-bold text-[var(--brand,#33A04A)] uppercase tracking-wider"
                      >
                        Explore Story
                        <svg className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-2 mt-2">
          {mediaData.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-500 rounded-full h-1.5 ${
                i === currentIndex ? 'w-8 bg-[var(--brand,#33A04A)]' : 'w-1.5 bg-slate-300 dark:bg-slate-800'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}