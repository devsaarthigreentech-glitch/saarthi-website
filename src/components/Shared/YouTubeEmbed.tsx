"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { youtubeEmbedUrl, youtubePoster } from "@/data/siteContent";

/**
 * Privacy-enhanced, lazy YouTube embed: shows a poster image and only loads
 * the youtube-nocookie.com player when the visitor presses play.
 */
export default function YouTubeEmbed({
  youtubeId,
  title,
  className = "",
}: {
  youtubeId: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-900 shadow-xl ${className}`}
    >
      {playing ? (
        <iframe
          src={youtubeEmbedUrl(youtubeId, true)}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <img
            src={youtubePoster(youtubeId)}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-110">
            <Play className="ml-1 h-7 w-7 text-[#1B6B3D]" fill="currentColor" />
          </span>
          <span className="absolute bottom-4 left-5 right-5 text-left text-sm font-semibold text-white md:text-base">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}
