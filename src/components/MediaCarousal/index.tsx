'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// Importing the real data and type from your existing files
import mediaData, { MediaItem } from '@/components/Resources/MediaSection/mediaData';

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