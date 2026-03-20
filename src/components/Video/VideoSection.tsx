// VideosSection.tsx
"use client";

import { useState, useMemo } from "react";
import videoData, {
  VIDEO_CATEGORIES,
  type VideoItem,
  type VideoCategory,
} from "./videoData";
import VideoCard from "./VideoCard";
import VideoPlayerModal from "./VideoPlayerModal";

export default function VideosSection() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("All");
  const [playing, setPlaying] = useState<VideoItem | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return videoData;
    return videoData.filter((v) => v.category.includes(activeCategory));
  }, [activeCategory]);

  // Separate featured from the rest
  const featured = filtered.filter((v) => v.featured);
  const rest = filtered.filter((v) => !v.featured);

  return (
    <section className="py-16 bg-gray-50 mt-10">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">Videos</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Explore product demos, technology explainers, and event highlights
            from SGT HydroEdge.
          </p>
        </header>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {VIDEO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  rounded-full px-4 py-2 text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#33A04A] text-white shadow-sm"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured / spotlight video — full-width embed card */}
        {featured.length > 0 && (
          <div className="mb-10">
            {featured.map((vid) => (
              <button
                key={vid.id}
                onClick={() => setPlaying(vid)}
                className="group relative w-full overflow-hidden rounded-2xl bg-slate-900 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33A04A]"
                aria-label={`Play featured video: ${vid.title}`}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ paddingBottom: "45%" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${vid.youtubeId}/maxresdefault.jpg`}
                    alt={vid.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                  {/* Content over the image */}
                  <div className="absolute inset-0 flex items-center p-8 md:p-12">
                    <div className="max-w-xl">
                      <span className="inline-block rounded-full bg-[#33A04A] px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider mb-4">
                        Featured
                      </span>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
                        {vid.title}
                      </h3>
                      {vid.description && (
                        <p className="text-sm md:text-base text-white/70 line-clamp-2 mb-4">
                          {vid.description}
                        </p>
                      )}
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#33A04A"
                            className="h-6 w-6 translate-x-[1px]"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-white/80">
                          Watch Now
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Video grid */}
        {rest.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((vid) => (
              <VideoCard key={vid.id} video={vid} onPlay={setPlaying} />
            ))}
          </div>
        ) : (
          filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-slate-500">
                No videos found for "{activeCategory}". Check back soon — we're
                adding new content regularly.
              </p>
            </div>
          )
        )}

        {/* YouTube channel CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@SGTHydroedge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm hover:shadow-md hover:border-[#33A04A] hover:text-[#33A04A] transition-all duration-200"
          >
            {/* YouTube icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-red-600"
            >
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
            </svg>
            Visit our YouTube Channel
          </a>
        </div>
      </div>

      {/* Modal player */}
      <VideoPlayerModal video={playing} onClose={() => setPlaying(null)} />
    </section>
  );
}