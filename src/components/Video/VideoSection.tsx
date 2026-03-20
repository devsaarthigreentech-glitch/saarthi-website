// // VideosSection.tsx
// "use client";

// import { useState, useMemo } from "react";
// import videoData, {
//   VIDEO_CATEGORIES,
//   type VideoItem,
//   type VideoCategory,
// } from "./videoData";
// import VideoCard from "./VideoCard";
// import VideoPlayerModal from "./VideoPlayerModal";

// export default function VideosSection() {
//   const [activeCategory, setActiveCategory] = useState<VideoCategory>("All");
//   const [playing, setPlaying] = useState<VideoItem | null>(null);

//   const filtered = useMemo(() => {
//     if (activeCategory === "All") return videoData;
//     return videoData.filter((v) => v.category.includes(activeCategory));
//   }, [activeCategory]);

//   // Separate featured from the rest
//   const featured = filtered.filter((v) => v.featured);
//   const rest = filtered.filter((v) => !v.featured);

//   return (
//     <section className="py-16 bg-gray-50 mt-10">
//       <div className="container mx-auto px-6 max-w-6xl">
//         {/* Header */}
//         <header className="mb-8 text-center">
//           <h2 className="text-3xl font-extrabold text-slate-900">Videos</h2>
//           <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
//             Explore product demos, technology explainers, and event highlights
//             from SGT HydroEdge.
//           </p>
//         </header>

//         {/* Filter tabs */}
//         <div className="mb-8 flex flex-wrap justify-center gap-2">
//           {VIDEO_CATEGORIES.map((cat) => {
//             const isActive = activeCategory === cat;
//             return (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`
//                   rounded-full px-4 py-2 text-sm font-medium transition-all duration-200
//                   ${
//                     isActive
//                       ? "bg-[#33A04A] text-white shadow-sm"
//                       : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
//                   }
//                 `}
//               >
//                 {cat}
//               </button>
//             );
//           })}
//         </div>

//         {/* Featured / spotlight video — full-width embed card */}
//         {featured.length > 0 && (
//           <div className="mb-10">
//             {featured.map((vid) => (
//               <button
//                 key={vid.id}
//                 onClick={() => setPlaying(vid)}
//                 className="group relative w-full overflow-hidden rounded-2xl bg-slate-900 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33A04A]"
//                 aria-label={`Play featured video: ${vid.title}`}
//               >
//                 <div
//                   className="relative w-full overflow-hidden"
//                   style={{ paddingBottom: "45%" }}
//                 >
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={`https://img.youtube.com/vi/${vid.youtubeId}/maxresdefault.jpg`}
//                     alt={vid.title}
//                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
//                     onError={(e) => {
//                       (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`;
//                     }}
//                   />
//                   {/* Gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

//                   {/* Content over the image */}
//                   <div className="absolute inset-0 flex items-center p-8 md:p-12">
//                     <div className="max-w-xl">
//                       <span className="inline-block rounded-full bg-[#33A04A] px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider mb-4">
//                         Featured
//                       </span>
//                       <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
//                         {vid.title}
//                       </h3>
//                       {vid.description && (
//                         <p className="text-sm md:text-base text-white/70 line-clamp-2 mb-4">
//                           {vid.description}
//                         </p>
//                       )}
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             fill="#33A04A"
//                             className="h-6 w-6 translate-x-[1px]"
//                           >
//                             <path d="M8 5v14l11-7z" />
//                           </svg>
//                         </div>
//                         <span className="text-sm font-medium text-white/80">
//                           Watch Now
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Video grid */}
//         {rest.length > 0 ? (
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {rest.map((vid) => (
//               <VideoCard key={vid.id} video={vid} onPlay={setPlaying} />
//             ))}
//           </div>
//         ) : (
//           filtered.length === 0 && (
//             <div className="py-16 text-center">
//               <p className="text-slate-500">
//                 No videos found for "{activeCategory}". Check back soon — we're
//                 adding new content regularly.
//               </p>
//             </div>
//           )
//         )}

//         {/* YouTube channel CTA */}
//         <div className="mt-12 text-center">
//           <a
//             href="https://www.youtube.com/@SGTHydroedge"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm hover:shadow-md hover:border-[#33A04A] hover:text-[#33A04A] transition-all duration-200"
//           >
//             {/* YouTube icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="h-5 w-5 text-red-600"
//             >
//               <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
//             </svg>
//             Visit our YouTube Channel
//           </a>
//         </div>
//       </div>

//       {/* Modal player */}
//       <VideoPlayerModal video={playing} onClose={() => setPlaying(null)} />
//     </section>
//   );
// }
// VideoHub.tsx
// Complete "Video Hub" page matching the reference design.
// Drop into: app/resources/videos/page.tsx  (or wherever your route lives)
//
// Fonts required (add to your layout.tsx or _app.tsx):
//   import { Outfit } from 'next/font/google'
//   import { DM_Mono } from 'next/font/google'
//
// Or add to <head>:
//   <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>

"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import videoData, {
  FILTER_TABS,
  type VideoItem,
  type VideoCategory,
} from "./videoData";

/* ══════════════════════════════════════════════
   ICONS (inline SVGs to avoid external deps)
══════════════════════════════════════════════ */
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-[3px]">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" className="w-[11px] h-[11px]">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const YTIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.18 0 12 0 12s0 3.82.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.6 20.5 12 20.5 12 20.5s7.4 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.82 24 12 24 12s0-3.82-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" className="w-[17px] h-[17px]">
    <path d="M12 22V12M12 12C12 7 7 3 2 3c0 5 4 9 10 9zM12 12c0-5 5-9 10-9-1 5-5 9-10 9" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

/* ══════════════════════════════════════════════
   STYLES (CSS Module-style object)
══════════════════════════════════════════════ */

// Using a global <style> tag approach so we can use pseudo-elements,
// hover states, keyframes — things Tailwind inline can't handle well.
const GLOBAL_STYLES = `
  /* ── VIDEO HUB SCOPED STYLES ── */
  .vh-root { font-family: 'Outfit', sans-serif; }
  .vh-mono { font-family: 'DM Mono', monospace; }

  /* Subtle grid texture */
  .vh-root::before {
    content: '';
    position: fixed; inset: 0;
    background-image:
      linear-gradient(rgba(26,111,181,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(26,111,181,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none; z-index: 0;
  }

  /* Hero glow */
  .vh-hero::after {
    content: '';
    position: absolute; top: -80px; left: 50%;
    transform: translateX(-50%);
    width: 700px; height: 400px;
    background: radial-gradient(ellipse, rgba(26,111,181,0.18) 0%, transparent 70%);
    pointer-events: none;
  }

  /* Blink animation for eyebrow dot */
  @keyframes vhBlink { 0%,100%{opacity:1} 50%{opacity:0.2} }
  .vh-blink { animation: vhBlink 1.8s ease-in-out infinite; }

  /* Channel card top border */
  .vh-channel-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, #7eb8f5, transparent);
  }

  /* Section title line */
  .vh-section-title::after {
    content: ''; flex: 1; height: 1px;
    background: #d0dbe8;
  }

  /* Card hover */
  .vh-card { transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; }
  .vh-card:hover {
    border-color: #1a6fb5;
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(26,111,181,0.13), 0 0 0 1px rgba(26,111,181,0.10);
  }
  .vh-card:hover .vh-thumb-img { transform: scale(1.05); }
  .vh-card:hover .vh-thumb-overlay { opacity: 1; }
  .vh-card:hover .vh-play-btn { transform: scale(1.1); }

  /* Fade-up animation */
  @keyframes vhFadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .vh-animate { animation: vhFadeUp 0.45s ease forwards; opacity: 0; }

  /* Modal animation */
  @keyframes vhModalIn {
    from { opacity: 0; transform: scale(0.95) translateY(16px); }
    to   { opacity: 1; transform: none; }
  }
  .vh-modal-box { animation: vhModalIn 0.25s ease; }

  /* CTA glow */
  .vh-cta-inner::before {
    content: '';
    position: absolute; right: -60px; top: -60px;
    width: 280px; height: 280px; border-radius: 50%;
    background: radial-gradient(circle, rgba(26,111,181,0.25), transparent 70%);
    pointer-events: none;
  }

  /* Featured CTA button */
  .vh-featured-cta:hover { background: #155da0; transform: translateY(-1px); }
  .vh-yt-btn:hover { background: #cc0000; transform: translateY(-1px); }
  .vh-yt-sub:hover { opacity: 0.88; }
  .vh-btn-secondary:hover { background: rgba(255,255,255,0.14); transform: translateY(-2px); }
  .vh-btn-primary:hover { background: #cc0000; transform: translateY(-2px); }

  /* Filter active */
  .vh-filter-btn:hover:not(.vh-filter-active) {
    color: #1a6fb5;
    border-color: rgba(26,111,181,0.22);
    background: rgba(26,111,181,0.08);
  }

  /* Footer links */
  .vh-footer a:hover { color: #7eb8f5; }

  /* Video footer link */
  .vh-watch-link:hover { text-decoration: underline; }

  /* Modal close hover */
  .vh-modal-close:hover { color: #1a2a3a; border-color: #1a6fb5; }

  /* Responsive */
  @media (max-width: 1024px) {
    .vh-video-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .vh-featured-grid { grid-template-columns: 1fr !important; }
    .vh-hero-inner { grid-template-columns: 1fr !important; }
    .vh-cta-flex { flex-direction: column !important; gap: 28px !important; }
  }
  @media (max-width: 700px) {
    .vh-px { padding-left: 20px !important; padding-right: 20px !important; }
    .vh-video-grid { grid-template-columns: 1fr !important; }
    .vh-hero { padding: 48px 20px 40px !important; }
    .vh-footer-flex { flex-direction: column !important; gap: 8px !important; text-align: center !important; }
  }
`;

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function VideoHub() {
  const [activeFilter, setActiveFilter] = useState<VideoCategory>("all");
  const [modal, setModal] = useState<VideoItem | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const stylesInjected = useRef(false);

  // Inject global styles once
  useEffect(() => {
    if (stylesInjected.current) return;
    const el = document.createElement("style");
    el.textContent = GLOBAL_STYLES;
    document.head.appendChild(el);
    stylesInjected.current = true;
  }, []);

  const featured = videoData.find((v) => v.featured);

  const gridVideos = useMemo(() => {
    const nonFeatured = videoData.filter((v) => !v.featured);
    if (activeFilter === "all") return nonFeatured;
    return nonFeatured.filter((v) => v.category === activeFilter);
  }, [activeFilter]);

  const handleFilter = (cat: VideoCategory) => {
    setActiveFilter(cat);
    setAnimKey((k) => k + 1);
  };

  const openModal = useCallback((video: VideoItem) => {
    setModal(video);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeModal]);

  // Simulated channel stats (replace with YouTube Data API)
  // const [stats, setStats] = useState({ videos: "—", subs: "—" });
  // useEffect(() => {
  //   const t = setTimeout(() => setStats({ videos: "24+", subs: "1.2K" }), 300);
  //   return () => clearTimeout(t);
  // }, []);

  return (
    <div className="vh-root" style={{ background: "#f0f4f8", color: "#1a2a3a", overflowX: "hidden" }}>

      {/* ════ HEADER ════ */}
      <header
        className="vh-px"
        style={{
          position: "sticky", top: 0, zIndex: 10,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "18px 56px",
          background: "rgba(13,31,53,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <a
          href="https://www.sgthydroedge.com"
          style={{
            fontSize: 20, fontWeight: 800, color: "#fff",
            textDecoration: "none",
            display: "flex", alignItems: "center", gap: 9,
            letterSpacing: "-0.01em",
          }}
        >
          <div style={{
            width: 30, height: 30, background: "#1a6fb5",
            borderRadius: "50% 6px 50% 6px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <LeafIcon />
          </div>
          SGT HydroEdge
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="vh-header-nav">
          <a href="#" style={{ fontSize: "13.5px", fontWeight: 500, color: "#5a7a96", textDecoration: "none" }}>Solutions</a>
          <a href="#" style={{ fontSize: "13.5px", fontWeight: 500, color: "#5a7a96", textDecoration: "none" }}>Technology</a>
          <a href="#" style={{ fontSize: "13.5px", fontWeight: 500, color: "#5a7a96", textDecoration: "none" }}>About</a>
          <a href="#" style={{ fontSize: "13.5px", fontWeight: 500, color: "#5a7a96", textDecoration: "none" }}>Contact</a>
          <a
            className="vh-yt-sub"
            href="https://www.youtube.com/@SGTHydroedge"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 7,
              background: "#ff0000", color: "#fff",
              fontSize: 13, fontWeight: 600,
              padding: "8px 16px", borderRadius: 8,
              textDecoration: "none", transition: "opacity 0.2s",
            }}
          >
            <YTIcon />
            Subscribe
          </a>
        </nav>
      </header>

      {/* ════ HERO ════ */}
      <section
        className="vh-hero vh-px"
        style={{
          position: "relative", zIndex: 1,
          padding: "80px 56px 64px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0d1f35 0%, #122847 100%)",
        }}
      >
        <div
          className="vh-hero-inner"
          style={{
            maxWidth: 1160, margin: "0 auto",
            display: "grid", gridTemplateColumns: "1fr auto",
            alignItems: "center", gap: 48,
          }}
        >
          <div>
            <div
              className="vh-mono"
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                fontSize: 11, fontWeight: 500, color: "#7eb8f5",
                background: "rgba(126,184,245,0.10)",
                border: "1px solid rgba(126,184,245,0.22)",
                borderRadius: 100, padding: "5px 12px",
                marginBottom: 18, letterSpacing: "0.06em",
              }}
            >
              <span className="vh-blink" style={{ width: 6, height: 6, borderRadius: "50%", background: "#7eb8f5", display: "inline-block" }} />
              SGT HydroEdge on YouTube
            </div>
            <h1 style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-0.02em", color: "#ffffff",
              marginBottom: 16,
            }}>
              See <em style={{ fontStyle: "normal", color: "#7eb8f5" }}>Decarbonisation</em><br />in Action
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 520 }}>
              Watch product demonstrations, customer results, technology deep-dives, media features, and industry insights — straight from India&apos;s first industrial HHO manufacturer.
            </p>
          </div>

          {/* Channel card */}
          <div
            className="vh-channel-card"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16, padding: "24px 28px",
              minWidth: 260, textAlign: "center",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "#1a6fb5",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 12px",
              fontSize: 24, fontWeight: 800, color: "#fff",
              border: "2px solid rgba(26,111,181,0.5)",
            }}>
              S
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#ffffff", marginBottom: 4 }}>SGT HydroEdge</div>
            <div className="vh-mono" style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>@SGTHydroedge</div>
            {/* <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 18 }}> */}
              {/* <div style={{ textAlign: "center" }}> */}
                {/* <span className="vh-mono" style={{ display: "block", fontSize: 18, fontWeight: 700, color: "#7eb8f5" }}>{stats.videos}</span> */}
                {/* <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Videos</span> */}
              {/* </div> */}
              {/* <div style={{ textAlign: "center" }}> */}
                {/* <span className="vh-mono" style={{ display: "block", fontSize: 18, fontWeight: 700, color: "#7eb8f5" }}>{stats.subs}</span> */}
                {/* <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Subscribers</span> */}
              {/* </div> */}
              {/* <div style={{ textAlign: "center" }}> */}
                {/* <span className="vh-mono" style={{ display: "block", fontSize: 18, fontWeight: 700, color: "#7eb8f5" }}>▶</span> */}
                {/* <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Free to Watch</span> */}
              {/* </div> */}
            {/* </div> */}
            <a
              className="vh-yt-btn"
              href="https://www.youtube.com/@SGTHydroedge"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                width: "100%", background: "#ff0000", color: "#fff",
                fontSize: 13, fontWeight: 700,
                padding: 10, borderRadius: 10,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
              }}
            >
              <YTIcon />
              View Full Channel
            </a>
          </div>
        </div>
      </section>

      {/* ════ FILTER BAR ════ */}
      <div
        className="vh-px"
        style={{
          position: "relative", zIndex: 1,
          padding: "20px 56px",
          display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap",
          background: "#ffffff",
          borderBottom: "1px solid #d8e3ee",
          borderTop: "1px solid #d8e3ee",
        }}
      >
        <span style={{
          fontSize: "11.5px", fontWeight: 600, color: "#5a7a96",
          textTransform: "uppercase", letterSpacing: "0.08em", marginRight: 4,
        }}>
          Filter:
        </span>
        {FILTER_TABS.map((tab) => {
          const isActive = activeFilter === tab.filter;
          return (
            <button
              key={tab.filter}
              onClick={() => handleFilter(tab.filter)}
              className={`vh-filter-btn ${isActive ? "vh-filter-active" : ""}`}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13, fontWeight: isActive ? 600 : 500,
                color: isActive ? "#ffffff" : "#5a7a96",
                background: isActive ? "#1a6fb5" : "#f0f4f8",
                border: `1px solid ${isActive ? "#1a6fb5" : "#d0dbe8"}`,
                borderRadius: 100,
                padding: "7px 16px", cursor: "pointer",
                transition: "all 0.18s",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ════ FEATURED VIDEO ════ */}
      {featured && (activeFilter === "all" || activeFilter === featured.category) && (
        <div className="vh-px" style={{ position: "relative", zIndex: 1, maxWidth: 1160, margin: "0 auto 48px", padding: "40px 56px 0" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            fontSize: 11, fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.1em", color: "#d97706", marginBottom: 16,
          }}>
            ★ Featured Video
          </div>
          <div
            className="vh-featured-grid"
            style={{
              display: "grid", gridTemplateColumns: "1.65fr 1fr",
              gap: 2, borderRadius: 16, overflow: "hidden",
              border: "1px solid #d0dbe8",
              boxShadow: "0 4px 24px rgba(26,62,100,0.10)",
            }}
          >
            {/* Player */}
            <div style={{ position: "relative", paddingBottom: "56.25%", background: "#000" }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${featured.youtubeId}?rel=0&modestbranding=1&color=white`}
                title="SGT HydroEdge — Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
            {/* Info panel */}
            <div style={{
              background: "#ffffff", padding: "32px 28px",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              <div style={{ flex: 1 }}>
                <span style={{
                  display: "inline-block", fontSize: "10.5px", fontWeight: 600,
                  padding: "3px 10px", borderRadius: 100,
                  background: "rgba(26,111,181,0.08)", color: "#1a6fb5",
                  border: "1px solid rgba(26,111,181,0.22)",
                  marginBottom: 12, letterSpacing: "0.04em",
                }}>
                  {featured.tag}
                </span>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1a2a3a", lineHeight: 1.35, marginBottom: 12 }}>
                  {featured.title}
                </h2>
                <p style={{ fontSize: 14, color: "#5a7a96", lineHeight: 1.65 }}>
                  {featured.description}
                </p>
                <div className="vh-mono" style={{
                  display: "flex", alignItems: "center", gap: 14,
                  marginTop: 20, fontSize: 12, color: "#5a7a96",
                }}>
                  {featured.duration && (
                    <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <ClockIcon /> {featured.duration}
                    </span>
                  )}
                  {featured.views && (
                    <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <EyeIcon /> {featured.views}
                    </span>
                  )}
                </div>
              </div>
              <a
                className="vh-featured-cta"
                href={`https://www.youtube.com/watch?v=${featured.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: 24,
                  display: "inline-flex", alignItems: "center", gap: 8,
                  fontSize: 13, fontWeight: 600, color: "#ffffff",
                  textDecoration: "none",
                  padding: "10px 18px", border: "none", borderRadius: 10,
                  background: "#1a6fb5",
                  transition: "background 0.18s, transform 0.15s",
                  width: "fit-content",
                }}
              >
                Watch on YouTube <ExternalIcon />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ════ VIDEO GRID ════ */}
      <div className="vh-px" style={{ position: "relative", zIndex: 1, maxWidth: 1160, margin: "0 auto 80px", padding: "40px 56px 0" }}>
        <div className="vh-section-title" style={{
          fontSize: 13, fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.1em", color: "#5a7a96", marginBottom: 24,
          display: "flex", alignItems: "center", gap: 10,
        }}>
          All Videos
        </div>

        <div
          className="vh-video-grid"
          key={animKey}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {gridVideos.map((video, idx) => (
            <div
              key={video.id}
              className="vh-card vh-animate"
              onClick={() => openModal(video)}
              style={{
                background: "#ffffff",
                border: "1px solid #d8e3ee",
                borderRadius: 14, overflow: "hidden",
                cursor: "pointer",
                display: "flex", flexDirection: "column",
                animationDelay: `${idx * 0.07}s`,
              }}
            >
              {/* Thumbnail */}
              <div style={{ position: "relative", paddingBottom: "56.25%", background: "#d8e2ed", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                  className="vh-thumb-img"
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.35s ease",
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://placehold.co/480x270/0e1a10/1faa55?text=${encodeURIComponent(video.tag)}`;
                  }}
                />
                {/* Play overlay */}
                <div
                  className="vh-thumb-overlay"
                  style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    opacity: 0, transition: "opacity 0.25s",
                  }}
                >
                  <div
                    className="vh-play-btn"
                    style={{
                      width: 52, height: 52, borderRadius: "50%",
                      background: "rgba(31,170,85,0.92)",
                      backdropFilter: "blur(4px)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "transform 0.2s",
                    }}
                  >
                    <PlayIcon />
                  </div>
                </div>
                {/* Duration badge */}
                {video.duration && (
                  <span
                    className="vh-mono"
                    style={{
                      position: "absolute", bottom: 8, right: 8,
                      background: "rgba(0,0,0,0.8)", color: "#fff",
                      fontSize: "10.5px", fontWeight: 500,
                      padding: "2px 7px", borderRadius: 5,
                    }}
                  >
                    {video.duration}
                  </span>
                )}
              </div>

              {/* Body */}
              <div style={{ padding: "16px 18px 18px", flex: 1, display: "flex", flexDirection: "column" }}>
                <span style={{
                  display: "inline-block", fontSize: "10.5px", fontWeight: 600,
                  padding: "3px 10px", borderRadius: 100, width: "fit-content",
                  background: "rgba(26,111,181,0.08)", color: "#1a6fb5",
                  border: "1px solid rgba(26,111,181,0.22)",
                  marginBottom: 8, letterSpacing: "0.04em",
                }}>
                  {video.tag}
                </span>
                <div style={{
                  fontSize: "14.5px", fontWeight: 600, color: "#1a2a3a",
                  lineHeight: 1.4, marginBottom: 8,
                  display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {video.title}
                </div>
                <div style={{
                  fontSize: "12.5px", color: "#5a7a96", lineHeight: 1.6,
                  display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical",
                  overflow: "hidden", flex: 1,
                }}>
                  {video.description}
                </div>
                <div
                  className="vh-mono"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    marginTop: 14, paddingTop: 12,
                    borderTop: "1px solid #e8eef5",
                    fontSize: "11.5px", color: "#5a7a96",
                  }}
                >
                  <span>{video.date}</span>
                  <a
                    className="vh-watch-link"
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      color: "#1a6fb5", textDecoration: "none",
                      fontSize: 12, fontWeight: 600,
                      display: "flex", alignItems: "center", gap: 4,
                    }}
                  >
                    Watch <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {gridVideos.length === 0 && (
          <div style={{ padding: "64px 0", textAlign: "center", color: "#5a7a96", fontSize: 14 }}>
            No videos found for this category. Check back soon.
          </div>
        )}
      </div>

      {/* ════ CTA BANNER ════ */}
      <div className="vh-px" style={{ position: "relative", zIndex: 1, maxWidth: 1160, margin: "0 auto 80px", padding: "0 56px" }}>
        <div
          className="vh-cta-inner vh-cta-flex"
          style={{
            background: "linear-gradient(135deg, #0d1f35 0%, #1a3a6b 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20, padding: "48px 56px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 40, position: "relative", overflow: "hidden",
          }}
        >
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.1em", color: "#7eb8f5",
              marginBottom: 10, display: "flex", alignItems: "center", gap: 6,
            }}>
              <YTIcon className="w-3.5 h-3.5" />
              YouTube Channel
            </div>
            <h2 style={{
              fontSize: "clamp(22px, 2.8vw, 30px)",
              fontWeight: 800, color: "#ffffff",
              letterSpacing: "-0.01em", lineHeight: 1.2,
              marginBottom: 12,
            }}>
              More Videos on Our<br />YouTube Channel
            </h2>
            <p style={{ fontSize: "14.5px", color: "rgba(255,255,255,0.6)", maxWidth: 460, lineHeight: 1.65 }}>
              New product demonstrations, customer case studies, technology deep-dives, and media features published regularly. Subscribe to stay updated on every new decarbonisation story.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexShrink: 0, flexWrap: "wrap" }}>
            <a
              className="vh-btn-primary"
              href="https://www.youtube.com/@SGTHydroedge"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "#ff0000", color: "#fff",
                fontSize: 14, fontWeight: 700,
                padding: "14px 24px", borderRadius: 12,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              <YTIcon className="w-[18px] h-[18px]" />
              View All Videos
            </a>
            <a
              className="vh-btn-secondary"
              href="https://www.sgthydroedge.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
                fontSize: 14, fontWeight: 600,
                padding: "14px 24px", borderRadius: 12,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              <ChatIcon />
              Request a Demo
            </a>
          </div>
        </div>
      </div>

      {/* ════ MODAL ════ */}
      {modal && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(13,31,53,0.82)",
            backdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            className="vh-modal-box"
            style={{
              background: "#ffffff",
              border: "1px solid #d0dbe8",
              borderRadius: 20, overflow: "hidden",
              width: "100%", maxWidth: 880,
              boxShadow: "0 40px 80px rgba(13,31,53,0.3)",
            }}
          >
            {/* Header */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid #e8eef5",
            }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: "#1a2a3a" }}>{modal.title}</span>
              <button
                className="vh-modal-close"
                onClick={closeModal}
                aria-label="Close"
                style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: "#f0f4f8", border: "1px solid #d0dbe8",
                  color: "#5a7a96", cursor: "pointer", fontSize: 18, lineHeight: 1,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                ✕
              </button>
            </div>
            {/* Player */}
            <div style={{ position: "relative", paddingBottom: "56.25%", background: "#000" }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${modal.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={modal.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
            {/* Description */}
            {modal.description && (
              <div style={{ padding: 20, background: "#f8fafc" }}>
                <p style={{ fontSize: "13.5px", color: "#5a7a96", lineHeight: 1.65 }}>
                  {modal.description}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ════ FOOTER ════ */}
      <footer
        className="vh-px vh-footer-flex"
        style={{
          position: "relative", zIndex: 1,
          borderTop: "1px solid rgba(26,62,100,0.10)",
          padding: "28px 56px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          fontSize: "12.5px", color: "#5a7a96",
          background: "#0d1f35",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.4)" }}>© 2026 SGT HydroEdge Private Limited · Pune, India</span>
        <span>
          <a href="https://www.sgthydroedge.com" className="vh-footer" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>www.sgthydroedge.com</a>
          {" · "}
          <a href="#" className="vh-footer" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Privacy Policy</a>
          {" · "}
          <a href="#" className="vh-footer" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Terms of Service</a>
        </span>
      </footer>
    </div>
  );
}