// EventModal.tsx
"use client";

import Image from "next/image";
import { useEffect } from "react";
import { GalleryEvent } from "./galleryData";

type Props = {
  event: GalleryEvent | null;
  onClose: () => void;
};

export default function EventModal({ event, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!event) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${event.title} gallery`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="max-w-5xl w-full max-h-[90vh] overflow-auto bg-white rounded-lg shadow-lg">
        <div className="flex items-start justify-between p-4 border-b">
          <div>
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <div className="text-sm text-slate-500">{event.date}</div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="ml-4 text-slate-600 hover:text-slate-900"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          {event.excerpt && <p className="mb-4 text-slate-700">{event.excerpt}</p>}

          {/* images grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {event.images.map((src) => (
              <div key={src} className="relative w-full aspect-[4/3] rounded-md overflow-hidden bg-slate-100">
                <Image src={src} alt={event.title} fill className="object-cover" sizes="(min-width:1024px) 33vw, 50vw" />
              </div>
            ))}
          </div>

          {/* optional: download / share / view as slideshow controls */}
        </div>
      </div>
    </div>
  );
}
