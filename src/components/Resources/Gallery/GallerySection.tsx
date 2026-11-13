// GallerySection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import galleryData, { photoGroups, type GalleryEvent } from "./galleryData";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

export default function GallerySection() {
  const [active, setActive] = useState<GalleryEvent | null>(null);

  return (
    <section className="py-16 bg-gray-50 mt-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900">Gallery</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            How our systems look and how they are fitted — on burners and furnaces, diesel generator sets and diesel vehicles.
          </p>
        </header>

        {photoGroups.map((group) => (
          <div key={group.id} className="mb-12">
            <div className="mb-4 flex items-baseline gap-3">
              <h2 className="text-xl font-bold text-slate-900">{group.title}</h2>
              <span className="text-sm text-slate-500">{group.subtitle}</span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.photos.map((photo) => (
                <figure
                  key={photo.src}
                  className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="relative h-52 w-full bg-slate-100">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className={photo.fit === "contain" ? "object-contain" : "object-cover"}
                    />
                  </div>
                  <figcaption className="p-4 text-sm text-slate-700">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}

        <header className="mt-16 mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">Events</h2>
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
