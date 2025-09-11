// GallerySection.tsx
"use client";

import { useState } from "react";
import galleryData, { type GalleryEvent } from "./galleryData";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

export default function GallerySection() {
  const [active, setActive] = useState<GalleryEvent | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">Events & Gallery</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Click an event to view photos and details.</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryData.map((ev) => (
            <EventCard key={ev.id} event={ev} onOpen={(e) => setActive(e)} />
          ))}
        </div>

        <EventModal event={active} onClose={() => setActive(null)} />
      </div>
    </section>
  );
}
