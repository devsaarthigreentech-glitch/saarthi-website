// // src/components/Resources/DownloadsList.tsx
// import Link from "next/link";

// export default function DownloadsList({ items }: { items: { id: string; title: string; href: string }[] }) {
//   return (
//     <div className="space-y-3">
//       {items.map((d) => (
//         <div key={d.id} className="flex items-center justify-between rounded-md border px-4 py-3 bg-white">
//           <div>
//             <div className="font-semibold">{d.title}</div>
//             <div className="text-sm text-slate-500">PDF • {d.href.split(".").pop()?.toUpperCase()}</div>
//           </div>
//           <Link href={d.href} className="inline-flex items-center gap-2 rounded-full bg-[var(--brand,#33A04A)] px-4 py-2 text-sm font-semibold text-black">
//             Download
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";

// ─── ICONS (inline SVGs to avoid dependency issues) ───
const FolderIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const FileIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const EyeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const DownloadIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ArrowLeft = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const GridIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const ListIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);


// ─── DOWNLOADS DATA ───
const downloadCategories = [
  {
    id: "flyers",
    name: "Flyers",
    description: "Product flyers and one-pagers for all SGT solutions",
    icon: "📄",
    color: "from-emerald-500 to-green-600",
    files: [
      { name: "Boiler Solution Flyer", filename: "Boiler_Flyer.pdf", path: "/downloads/flyers/Boiler_Flyer.pdf", size: "171 KB", tag: "Industrial" },
      { name: "Kiln Solution Flyer", filename: "Kiln_Flyer.pdf", path: "/downloads/flyers/Kiln_Flyer.pdf", size: "172 KB", tag: "Industrial" },
      { name: "GreenX DG Solution Flyer", filename: "GreenX_DG_Flyer.pdf", path: "/downloads/flyers/GreenX_DG_Flyer.pdf", size: "226 KB", tag: "Industrial" },
      { name: "GreenDrive Logistics Flyer", filename: "GreenDrive_Flyer.pdf", path: "/downloads/flyers/GreenDrive_Flyer.pdf", size: "207 KB", tag: "Logistics" },
      { name: "GreenMarine Solution Flyer", filename: "GreenMarine_Flyer.pdf", path: "/downloads/flyers/GreenMarine_Flyer.pdf", size: "190 KB", tag: "Marine" },
    ]
  },
  {
    id: "pamphlets",
    name: "Pamphlets",
    description: "Detailed solution pamphlets with technical specifications",
    icon: "📋",
    color: "from-blue-500 to-indigo-600",
    files: [
      { name: "Boiler Solution Pamphlet", filename: "SGT_Pamphlet_Boiler_Solution.pdf", path: "/downloads/pamphlets/SGT_Pamphlet_Boiler_Solution.pdf", size: "1.2 MB", tag: "Industrial" },
      { name: "Kiln Solution Pamphlet", filename: "SGT_Pamphlet_Kiln_Solution.pdf", path: "/downloads/pamphlets/SGT_Pamphlet_Kiln_Solution.pdf", size: "1.1 MB", tag: "Industrial" },
      { name: "DG Set Solution Pamphlet", filename: "SGT_Pamphlet_DG_Set_Solution.pdf", path: "/downloads/pamphlets/SGT_Pamphlet_DG_Set_Solution.pdf", size: "1.3 MB", tag: "Industrial" },
      { name: "Logistics Fleet Solution Pamphlet", filename: "SGT_Pamphlet_Logistics_Fleet_Solution.pdf", path: "/downloads/pamphlets/SGT_Pamphlet_Logistics_Fleet_Solution.pdf", size: "1.4 MB", tag: "Logistics" },
      { name: "GreenDrive Logistics Pamphlet", filename: "SGT_Pamphlet_GreenDrive_Logistics_Solution.pdf", path: "/downloads/pamphlets/SGT_Pamphlet_GreenDrive_Logistics_Solution.pdf", size: "1.5 MB", tag: "Logistics" },
      { name: "Marine Engine Solution Pamphlet", filename: "SGT_Pamphlet_Marine_Engine_Solution.pdf", path: "/downloads/pamphlets/SGT_Pamphlet_Marine_Engine_Solution.pdf", size: "1.3 MB", tag: "Marine" },
    ]
  },
  {
    id: "patent",
    name: "Patent",
    description: "Patent documentation and intellectual property filings",
    icon: "🛡️",
    color: "from-amber-500 to-orange-600",
    files: [
      { name: "SGT CHFA Patent Filing", filename: "SGT_CHFA_Patent.pdf", path: "/downloads/patent/SGT_CHFA_Patent.pdf", size: "2.1 MB", tag: "Technology" },
    ]
  },
  {
    id: "presentations",
    name: "Presentations",
    description: "Corporate and solution decks for stakeholders",
    icon: "📊",
    color: "from-violet-500 to-purple-600",
    files: [
      // { name: "GreenMarine Corporate Presentation", filename: "GreenMarine_Corp_PPT.pdf", path: "/downloads/presentations/GreenMarine_Corp_PPT.pdf", size: "1.9 MB", tag: "Marine" },
      // { name: "GreenX DG Presentation (Jan 2026)", filename: "SGT_GreenX_presentation_Jan26.pdf", path: "/downloads/presentations/SGT_GreenX_presentation_Jan26.pdf", size: "1.4 MB", tag: "Industrial" },
      // { name: "GreenDrive Deck (Feb 2026)", filename: "SGT_GreenDrive_Deck_Feb_26.pdf", path: "/downloads/presentations/SGT_GreenDrive_Deck_Feb_26.pdf", size: "1.6 MB", tag: "Logistics" },
      // { name: "SGT HydroEdge Investor Presentation (Feb 2026)", filename: "SGT_Hydroedge_Investor_presentation_Feb26.pdf", path: "/downloads/presentations/SGT_Hydroedge_Investor_presentation_Feb26.pdf", size: "2.7 MB", tag: "Corporate" },
      // { name: "Corporate Decarbonization — Profitably Delivered", filename: "SGT_CorpDecarbonization_Profitably_Delivered.pdf", path: "/downloads/presentations/SGT_CorpDecarbonization_Profitably_Delivered.pdf", size: "1.9 MB", tag: "Corporate" },
      // { name: "Decarbonizing the Present", filename: "Decarbonizing_the_Present.pdf", path: "/downloads/presentations/Decarbonizing_the_Present.pdf", size: "1.7 MB", tag: "Corporate" },
    ]
  },
  {
    id: "research",
    name: "Research Paper",
    description: "Published research and ARAI-validated technical papers",
    icon: "🔬",
    color: "from-teal-500 to-cyan-600",
    files: [
      { name: "CHFA Research Paper (ARAI Published)", filename: "CHFA_Research_Paper_Revised_v4.pdf", path: "/downloads/research/CHFA_Research_Paper_Revised_v4.pdf", size: "850 KB", tag: "Technology" },
    ]
  },
  {
    id: "technical",
    name: "Technical Documents",
    description: "Industry whitepapers, comparison matrices, and technical briefs",
    icon: "⚙️",
    color: "from-rose-500 to-red-600",
    files: [
      { name: "Industrial Decarbonisation Whitepaper", filename: "Industrial_Decarbonisation_1.pdf", path: "/downloads/technical/Industrial_Decarbonisation_1.pdf", size: "162 KB", tag: "Industry" },
    ]
  },
];


// ─── TAG COLORS ───
const tagColors = {
  Industrial: "bg-emerald-100 text-emerald-700",
  Logistics: "bg-blue-100 text-blue-700",
  Marine: "bg-cyan-100 text-cyan-700",
  Corporate: "bg-gray-100 text-gray-700",
  Technology: "bg-amber-100 text-amber-700",
  Industry: "bg-emerald-100 text-emerald-700",
};


// ─── MAIN COMPONENT ───
export default function DownloadsPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

  const currentCategory = downloadCategories.find(c => c.id === activeCategory);

  // Flatten all files for search
  const allFiles = downloadCategories.flatMap(cat =>
    cat.files.map(f => ({ ...f, category: cat.name, categoryId: cat.id }))
  );

  const filteredFiles = searchQuery.trim()
    ? allFiles.filter(f =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const isSearching = searchQuery.trim().length > 0;

  const totalFiles = downloadCategories.reduce((sum, cat) => sum + cat.files.length, 0);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-sgt-green/20 border border-sgt-green/30 rounded-full text-sgt-green text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Resource Library
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Downloads & Resources
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Access product flyers, technical pamphlets, presentations, research papers and more — everything you need to evaluate SGT HydroEdge solutions.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-sgt-green">{downloadCategories.length}</p>
                <p className="text-sm text-gray-500">Categories</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sgt-green">{totalFiles}</p>
                <p className="text-sm text-gray-500">Documents</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sgt-green">PDF</p>
                <p className="text-sm text-gray-500">Format</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── SEARCH & CONTROLS ── */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search documents by name, category, or tag..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value.trim()) setActiveCategory(null);
              }}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sgt-green/30 focus:border-sgt-green transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-sgt-green text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
            >
              <GridIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2.5 rounded-lg transition-all ${viewMode === "list" ? "bg-sgt-green text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
            >
              <ListIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>


      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Search Results */}
        {isSearching && (
          <div>
            <p className="text-sm text-gray-500 mb-6">
              {filteredFiles.length} result{filteredFiles.length !== 1 ? "s" : ""} for "<span className="text-gray-900 font-medium">{searchQuery}</span>"
            </p>
            {filteredFiles.length > 0 ? (
              <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-3"}>
                {filteredFiles.map((file, idx) => (
                  <FileCard key={idx} file={file} viewMode={viewMode} showCategory />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No documents found matching your search.</p>
                <button onClick={() => setSearchQuery("")} className="mt-4 text-sgt-green font-medium hover:underline">
                  Clear search
                </button>
              </div>
            )}
          </div>
        )}


        {/* Folder View */}
        {!isSearching && !activeCategory && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse by Category</h2>
            <p className="text-gray-500 mb-8">Select a category to view available documents</p>

            <div className={viewMode === "grid"
              ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-3"
            }>
              {downloadCategories.map((cat) => (
                viewMode === "grid" ? (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="group bg-white rounded-2xl border-2 border-gray-200 p-6 text-left hover:border-sgt-green hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform`}>
                      {cat.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-sgt-green transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                      {cat.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                        {cat.files.length} file{cat.files.length !== 1 ? "s" : ""}
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-sgt-green group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ) : (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="group w-full bg-white rounded-xl border border-gray-200 px-5 py-4 text-left hover:border-sgt-green hover:shadow-md transition-all flex items-center gap-4"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg flex-shrink-0`}>
                      {cat.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 group-hover:text-sgt-green transition-colors">{cat.name}</h3>
                      <p className="text-sm text-gray-500 truncate">{cat.description}</p>
                    </div>
                    <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full flex-shrink-0">
                      {cat.files.length}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-sgt-green flex-shrink-0" />
                  </button>
                )
              ))}
            </div>
          </div>
        )}


        {/* Files inside a category */}
        {!isSearching && activeCategory && currentCategory && (
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <button onClick={() => setActiveCategory(null)} className="hover:text-sgt-green transition-colors font-medium">
                All Categories
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-semibold">{currentCategory.name}</span>
            </div>

            {/* Category header */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setActiveCategory(null)}
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-sgt-green hover:text-white text-gray-500 flex items-center justify-center transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{currentCategory.name}</h2>
                <p className="text-gray-500 text-sm">{currentCategory.description} — {currentCategory.files.length} document{currentCategory.files.length !== 1 ? "s" : ""}</p>
              </div>
            </div>

            <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-3"}>
              {currentCategory.files.map((file, idx) => (
                <FileCard key={idx} file={file} viewMode={viewMode} />
              ))}
            </div>
          </div>
        )}

      </div>


      {/* ── NEED HELP CTA ── */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-green-800 to-sgt-green rounded-2xl p-10 lg:p-14 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">Can't find what you're looking for?</h3>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Our team can provide customized technical documentation, solution briefs, or detailed proposals tailored to your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-sgt-green px-8 py-3 rounded-lg font-bold hover:bg-sgt-yellow hover:text-gray-900 transition-all"
            >
              Contact Our Team
            </a>
            <a
              href="/resources"
              className="inline-flex items-center bg-white/10 border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all"
            >
              Browse All Resources
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}


// ─── FILE CARD COMPONENT ───
function FileCard({ file, viewMode, showCategory = false }) {
  const tagColor = tagColors[file.tag] || "bg-gray-100 text-gray-700";

  if (viewMode === "list") {
    return (
      <div className="group bg-white rounded-xl border border-gray-200 px-5 py-4 hover:border-sgt-green hover:shadow-md transition-all flex items-center gap-4">
        <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
          <FileIcon className="w-5 h-5 text-red-500" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm truncate">{file.name}</h4>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs text-gray-400">{file.size}</span>
            {showCategory && <span className="text-xs text-gray-400">in {file.category}</span>}
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColor}`}>{file.tag}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={file.path}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-sgt-green text-white text-xs font-semibold rounded-lg hover:bg-green-800 transition-all"
          >
            <EyeIcon className="w-3.5 h-3.5" />
            View
          </a>
          {/* ── DOWNLOAD BUTTON — comment out the block below to hide download ── */}
          <a
            href={file.path}
            download={file.filename}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-all"
          >
            <DownloadIcon className="w-3.5 h-3.5" />
            Download
          </a>
          {/* ── END DOWNLOAD BUTTON ── */}
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 p-5 hover:border-sgt-green hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* File icon header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
          <FileIcon className="w-6 h-6 text-red-500" />
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagColor}`}>{file.tag}</span>
      </div>

      <h4 className="font-bold text-gray-900 mb-1 leading-snug">{file.name}</h4>
      <div className="flex items-center gap-2 mb-5">
        <span className="text-xs text-gray-400">{file.size}</span>
        <span className="text-xs text-gray-300">•</span>
        <span className="text-xs text-gray-400">PDF</span>
        {showCategory && (
          <>
            <span className="text-xs text-gray-300">•</span>
            <span className="text-xs text-gray-400">{file.category}</span>
          </>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-auto">
        <a
          href={file.path}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-sgt-green text-white text-sm font-semibold rounded-lg hover:bg-green-800 transition-all"
        >
          <EyeIcon className="w-4 h-4" />
          View
        </a>
        {/* ── DOWNLOAD BUTTON — comment out the block below to hide download ── */}
        <a
          href={file.path}
          download={file.filename}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-gray-100 text-gray-600 text-sm font-semibold rounded-lg hover:bg-gray-200 transition-all"
        >
          <DownloadIcon className="w-4 h-4" />
          Download
        </a>
        {/* ── END DOWNLOAD BUTTON ── */}
      </div>
    </div>
  );
}