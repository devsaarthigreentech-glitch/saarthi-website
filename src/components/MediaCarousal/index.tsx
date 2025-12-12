// src/components/MediaCarousel.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import mediaData from '@/components/Resources/MediaSection/mediaData';
import MediaCard from '@/components/Resources/MediaSection/MediaCardData'; // make sure this path matches your repo

/**
 * MediaCarousel
 * - Re-uses MediaCard for each card.
 * - Autoplay, arrows, dots, keyboard navigation, swipe support.
 * - No external dependency.
 */

const AUTOPLAY_MS = 4500;
const VISIBLE_COUNT_BY_BREAKPOINT = [
  { min: 1024, count: 3 }, // lg and up
  { min: 768, count: 2 },  // md
  { min: 0, count: 1 },    // sm
];

function getVisibleCount(width: number) {
  for (const br of VISIBLE_COUNT_BY_BREAKPOINT) {
    if (width >= br.min) return br.count;
  }
  return 1;
}

export default function MediaCarousel() {
  const [index, setIndex] = useState(0); // index of first visible card
  const [visible, setVisible] = useState(1);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const startX = useRef<number | null>(null);
  const deltaX = useRef<number>(0);

  const items = Array.isArray(mediaData) ? mediaData : [];

  useEffect(() => {
    const onResize = () => setVisible(getVisibleCount(window.innerWidth));
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (paused) return;
    clearAutoplay();
    autoplayRef.current = window.setInterval(() => {
      moveNext();
    }, AUTOPLAY_MS);
    return () => clearAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, visible]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') movePrev();
      if (e.key === 'ArrowRight') moveNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, visible]);

  function clearAutoplay() {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }

  function moveNext() {
    const maxStart = Math.max(0, items.length - visible);
    setIndex(prev => (prev >= maxStart ? 0 : prev + 1));
  }

  function movePrev() {
    const maxStart = Math.max(0, items.length - visible);
    setIndex(prev => (prev <= 0 ? maxStart : prev - 1));
  }

  function goTo(i: number) {
    const maxStart = Math.max(0, items.length - visible);
    const next = Math.min(maxStart, Math.max(0, i));
    setIndex(next);
  }

  // Pointer / touch handlers for swipe
  function onPointerDown(e: React.PointerEvent) {
    startX.current = e.clientX;
    deltaX.current = 0;
    (e.target as Element).setPointerCapture(e.pointerId);
    setPaused(true);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (startX.current == null) return;
    deltaX.current = e.clientX - startX.current;
    // small drag visual effect
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${deltaX.current}px)`;
    }
  }
  function onPointerUp(e: React.PointerEvent) {
    if (startX.current == null) return;
    (e.target as Element).releasePointerCapture(e.pointerId);
    if (Math.abs(deltaX.current) > 60) {
      if (deltaX.current < 0) moveNext();
      else movePrev();
    }
    // reset transform
    if (trackRef.current) {
      trackRef.current.style.transform = '';
    }
    startX.current = null;
    deltaX.current = 0;
    setPaused(false);
  }

  // Accessibility: number of pages
  const pages = Math.max(1, Math.ceil(items.length / visible));
  const pageIndex = Math.floor(index / visible);

  // Inline style for slide translation
  const percent = (index * (100 / visible));

  return (
    <section
      aria-label="Media carousel - press left/right to navigate"
      className="py-12 bg-gray-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Media & Coverage
          </h2>
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => { setPaused(true); movePrev(); }}
              className="inline-flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:bg-slate-100 transition"
            >
              <svg className="w-5 h-5 text-slate-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              aria-label="Next"
              onClick={() => { setPaused(true); moveNext(); }}
              className="inline-flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:bg-slate-100 transition"
            >
              <svg className="w-5 h-5 text-slate-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* TRACK (mask + moving inner) */}
        <div
          className="relative overflow-hidden rounded-xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            role="list"
            aria-live="polite"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="flex will-change-transform transition-transform duration-500"
            style={{
              width: `${(items.length * 100) / visible}%`,
              transform: `translateX(-${percent}%)`
            }}
          >
            {items.map((item, i) => (
              <div
                key={item.id}
                role="listitem"
                className="px-3 py-2"
                style={{
                  width: `${100 / items.length}%`, // ensures correct width inside the flex track
                  flex: `0 0 ${100 / items.length}%`,
                }}
              >
                <div className="h-full">
                  <MediaCard item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PAGINATION DOTS */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: pages }).map((_, p) => (
            <button
              key={p}
              aria-label={`Go to page ${p + 1}`}
              onClick={() => goTo(p * visible)}
              className={`w-2.5 h-2.5 rounded-full transition ${p === pageIndex ? 'bg-[var(--brand,#33A04A)]' : 'bg-slate-300 dark:bg-slate-700'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
