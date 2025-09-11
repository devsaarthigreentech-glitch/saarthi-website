// EventCard.tsx
"use client";

import Image from "next/image";
import { GalleryEvent } from "./galleryData";

export default function EventCard({
  event,
  onOpen,
}: {
  event: GalleryEvent;
  onOpen: (e: GalleryEvent) => void;
}) {
  return (
    <article className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <button onClick={() => onOpen(event)} className="text-left w-full">
        <div className="relative h-52 w-full">
          <Image src={event.cover} alt={event.title} fill className="object-cover" />
        </div>

        <div className="p-4">
          <div className="text-xs font-semibold text-[var(--brand,#33A04A)] mb-2">{event.date}</div>
          <h4 className="text-lg font-semibold text-slate-900">{event.title}</h4>
          {event.excerpt && <p className="mt-2 text-sm text-slate-600 line-clamp-3">{event.excerpt}</p>}
        </div>
      </button>
    </article>
  );
}
