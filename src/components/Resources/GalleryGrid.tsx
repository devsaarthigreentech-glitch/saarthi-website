// src/components/Resources/GalleryGrid.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

export default function GalleryGrid({ images }: { images: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button key={i} onClick={() => setOpenIndex(i)} className="block overflow-hidden rounded-lg">
            <div className="relative h-40 w-full">
              <Image src={src} alt={`gallery-${i}`} fill className="object-cover" />
            </div>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="max-w-4xl w-full">
            <div className="relative aspect-[16/9] w-full bg-black rounded">
              <Image src={images[openIndex]} alt={`large-${openIndex}`} fill className="object-contain" />
            </div>

            <div className="mt-4 flex justify-between">
              <button onClick={() => setOpenIndex((i) => (i! > 0 ? i! - 1 : i))} className="rounded px-4 py-2 bg-white/90">Prev</button>
              <div className="space-x-2">
                <button onClick={() => setOpenIndex(null)} className="rounded px-4 py-2 bg-white/90">Close</button>
              </div>
              <button onClick={() => setOpenIndex((i) => (i! < images.length - 1 ? i! + 1 : i))} className="rounded px-4 py-2 bg-white/90">Next</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
