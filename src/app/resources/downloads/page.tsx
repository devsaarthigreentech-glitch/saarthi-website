"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Download, Eye, ChevronRight, ArrowLeft, Search,
  FileText, FolderOpen, Zap,
  Factory, Ship, Truck, Beaker, Shield, Settings,
  BookOpen, ArrowRight, LayoutGrid,
  Award,
  BadgeCheck
} from "lucide-react";


// ─── DOWNLOADS DATA ───
const downloadCategories = [
  {
    id: "flyers",
    name: "Flyers",
    description: "Product one-pagers for all SGT solutions",
    icon: <FileText className="w-5 h-5" />,
    files: [
      { name: "Boiler Solution Flyer", path: "/downloads/flyers/Boiler_Flyer.pdf", size: "171 KB", tag: "Industrial", tagIcon: <Factory className="w-3 h-3" /> },
      { name: "Kiln Solution Flyer", path: "/downloads/flyers/Kiln_Flyer.pdf", size: "172 KB", tag: "Industrial", tagIcon: <Factory className="w-3 h-3" /> },
      { name: "GreenX DG Solution Flyer", path: "/downloads/flyers/GreenX_DG_Flyer.pdf", size: "226 KB", tag: "Industrial", tagIcon: <Factory className="w-3 h-3" /> },
      { name: "GreenDrive Logistics Flyer", path: "/downloads/flyers/GreenDrive_Flyer.pdf", size: "207 KB", tag: "Logistics", tagIcon: <Truck className="w-3 h-3" /> },
      { name: "GreenMarine Solution Flyer", path: "/downloads/flyers/GreenMarine_Flyer.pdf", size: "190 KB", tag: "Marine", tagIcon: <Ship className="w-3 h-3" /> },
    ]
  },
  {
    id: "certificates",
    name: "Certifications",
    description: "Global quality, safety, and regulatory compliance certifications",
    icon: <Award className="w-5 h-5" />,
    files: [
      { name: "ISO Certificate", path: "/downloads/certifications/ISO_Certificate.jpg", size: "171 KB", tag: "Compliance", tagIcon: <BadgeCheck className="w-3 h-3" /> },
      { name: "RoHS Certificate", path: "/downloads/certifications/ROHS-SGT-1.jpg", size: "200 KB", tag: "Compliance", tagIcon: <BadgeCheck className="w-3 h-3" /> },
      { name: "CE Certificate", path: "/downloads/certifications/CE.pdf", size: "320 KB", tag: "Compliance", tagIcon: <BadgeCheck className="w-3 h-3" /> },
      { name: "UL Certificate", path: "/downloads/certifications/UL.pdf", size: "400 KB", tag: "Compliance", tagIcon: <BadgeCheck className="w-3 h-3" /> },
      { name: "FCC Certificate", path: "/downloads/certifications/FCC.pdf", size: "112 KB", tag: "Compliance", tagIcon: <BadgeCheck className="w-3 h-3" /> },
      { name: "EMC Certificate", path: "/downloads/certifications/EMC.pdf", size: "220 KB", tag: "Compliance", tagIcon: <BadgeCheck className="w-3 h-3" /> },
      { name: "IEC Certificate", path: "/downloads/certifications/IEC.pdf", size: "108 KB", tag: "Compliance", tagIcon: <BadgeCheck className="w-3 h-3" /> },
    ]
  },
  {
    id: "pamphlets",
    name: "Pamphlets",
    description: "Detailed solution pamphlets with technical specifications",
    icon: <BookOpen className="w-5 h-5" />,
    files: [
      { name: "Boiler Solution Pamphlet", path: "/downloads/pamphlets/SGT_Pamphlet_Boiler_Solution.pdf", size: "1.2 MB", tag: "Industrial", tagIcon: <Factory className="w-3 h-3" /> },
      { name: "Kiln Solution Pamphlet", path: "/downloads/pamphlets/SGT_Pamphlet_Kiln_Solution.pdf", size: "1.1 MB", tag: "Industrial", tagIcon: <Factory className="w-3 h-3" /> },
      { name: "DG Set Solution Pamphlet", path: "/downloads/pamphlets/SGT_Pamphlet_DG_Set_Solution.pdf", size: "1.3 MB", tag: "Industrial", tagIcon: <Factory className="w-3 h-3" /> },
      { name: "Logistics Fleet Solution", path: "/downloads/pamphlets/SGT_Pamphlet_Logistics_Fleet_Solution.pdf", size: "1.4 MB", tag: "Logistics", tagIcon: <Truck className="w-3 h-3" /> },
      // { name: "GreenDrive Logistics Solution", path: "/downloads/pamphlets/SGT_Pamphlet_GreenDrive_Logistics_Solution.pdf", size: "1.5 MB", tag: "Logistics", tagIcon: <Truck className="w-3 h-3" /> },
      { name: "Marine Engine Solution", path: "/downloads/pamphlets/SGT_Pamphlet_Marine_Engine_Solution.pdf", size: "1.3 MB", tag: "Marine", tagIcon: <Ship className="w-3 h-3" /> },
    ]
  },
  {
    id: "patent",
    name: "Patent",
    description: "Intellectual property documentation",
    icon: <Shield className="w-5 h-5" />,
    files: [
      { name: "Apparatus for hydrogen generation", path: "/downloads/patent/2316701IN-CS_AN APPARATUS FOR HYDROGEN GENERATION AND A METHOD THEREOF.pdf", size: "2.1 MB", tag: "Technology", tagIcon: <Zap className="w-3 h-3" /> },
      { name: "Grant Certificate", path: "/downloads/patent/Grant Certificate_2316701IN-CS.pdf", size: "1.4 MB", tag: "Technology", tagIcon: <Zap className="w-3 h-3" /> },
      { name: "Intimation of Grant Certificate", path: "/downloads/patent/Intimation of Grant_2316701IN-CS.pdf", size: "1.4 MB", tag: "Technology", tagIcon: <Zap className="w-3 h-3" /> },
      ]
  },
  {
    id: "presentations",
    name: "Presentations",
    description: "Corporate and solution decks for stakeholders",
    icon: <LayoutGrid className="w-5 h-5" />,
    files: [
      { name: "GreenDrive Immediate Decarbonisation", path: "/downloads/presentations/GreenDrive_Immediate_Decarbonisation.pdf", size: "1.6 MB", tag: "Logistics", tagIcon: <Truck className="w-3 h-3" /> },
      { name: "GreenMarine Overview", path: "/downloads/presentations/GreenMarine Overview.pdf", size: "1.9 MB", tag: "Marine", tagIcon: <Ship className="w-3 h-3" /> },
      { name: "Reducing GHG Emissions from DG Using GreenX™", path: "/downloads/presentations/Reducing GHG Emissions from Diesel Generators Using GreenX™ Hydrogen Fuel Assist Retrofit.pdf", size: "1.4 MB", tag: "Industrial", tagIcon: <Factory className="w-3 h-3" /> },
      { name: "SGT HydroEdge Corporate Presentation (Feb 2026)", path: "/downloads/presentations/SGT Hydroedge Corporate presentation-Feb 26.pdf", size: "2.7 MB", tag: "Corporate", tagIcon: <Zap className="w-3 h-3" /> },
    ]
  },
  {
    id: "research",
    name: "Research Paper",
    description: "ARAI-validated technical papers",
    icon: <Beaker className="w-5 h-5" />,
    files: [
      { name: "Research Paper - ARAI 1", path: "/downloads/research/Research Paper - ARAI-1.pdf", size: "850 KB", tag: "Technology", tagIcon: <Zap className="w-3 h-3" /> },
      { name: "Research Paper - ARAI 2", path: "/downloads/research/Research Paper -ARAI-2.pdf", size: "920 KB", tag: "Technology", tagIcon: <Zap className="w-3 h-3" /> },
    ]
  },
  {
    id: "technical",
    name: "Technical Documents",
    description: "Safety data sheets and technical specifications",
    icon: <Settings className="w-5 h-5" />,
    files: [
      { name: "GreenX Safety Data Sheet", path: "/downloads/technical/GreenX_Safety_Data_Sheet.pdf", size: "162 KB", tag: "Industrial", tagIcon: <Factory className="w-3 h-3" /> },
      { name: "SGT Boiler Technical Document", path: "/downloads/technical/SGT_Boiler_Technical_Document.pdf", size: "340 KB", tag: "Industrial", tagIcon: <Factory className="w-3 h-3" /> },
      { name: "SGT GreenDrive Technical Document", path: "/downloads/technical/SGT_GreenDrive_Technical Document.pdf", size: "380 KB", tag: "Logistics", tagIcon: <Truck className="w-3 h-3" /> },
      { name: "SGT GreenX DG Technical Document", path: "/downloads/technical/SGT_GreenX_DG_Technical_document.pdf", size: "350 KB", tag: "Industrial", tagIcon: <Factory className="w-3 h-3" /> },
      { name: "SGT Kiln Technical Document", path: "/downloads/technical/SGT_Kiln_Technical_document.pdf", size: "320 KB", tag: "Industrial", tagIcon: <Factory className="w-3 h-3" /> },
      { name: "SGT Smelter Technical Document", path: "/downloads/technical/SGT_Smelter_technical_Document.pdf", size: "290 KB", tag: "Industrial", tagIcon: <Factory className="w-3 h-3" /> },
    ]
  },
];

// ─── TAG STYLES ───
const tagStyles: Record<string, string> = {
  Industrial: "bg-green-50 text-green-700 border-green-200",
  Logistics: "bg-blue-50 text-blue-700 border-blue-200",
  Marine: "bg-cyan-50 text-cyan-700 border-cyan-200",
  Corporate: "bg-gray-100 text-gray-600 border-gray-200",
  Technology: "bg-amber-50 text-amber-700 border-amber-200",
  Industry: "bg-green-50 text-green-700 border-green-200",
};


export default function DownloadsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = downloadCategories.find(c => c.id === activeCategory);
  const totalFiles = downloadCategories.reduce((sum, cat) => sum + cat.files.length, 0);

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

  return (
    <div className="min-h-screen bg-white">

      {/* ── INLINE STYLES for sgt-green / sgt-yellow ── */}
      <style>{`
        .text-sgt-green { color: #1B6B3D; }
        .bg-sgt-green { background-color: #1B6B3D; }
        .border-sgt-green { border-color: #1B6B3D; }
        .hover\\:bg-sgt-green:hover { background-color: #1B6B3D; }
        .hover\\:text-sgt-green:hover { color: #1B6B3D; }
        .hover\\:border-sgt-green:hover { border-color: #1B6B3D; }
        .focus\\:border-sgt-green:focus { border-color: #1B6B3D; }
        .text-sgt-yellow { color: #FFD700; }
        .bg-sgt-yellow { background-color: #FFD700; }
        .hover\\:bg-sgt-yellow:hover { background-color: #FFD700; }
        .hover\\:text-sgt-yellow:hover { color: #FFD700; }
        .group:hover .group-hover\\:bg-sgt-green { background-color: #1B6B3D; }
        .group:hover .group-hover\\:text-sgt-green { color: #1B6B3D; }
      `}</style>


      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1B6B3D14] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-sgt-green transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/resources" className="hover:text-sgt-green transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Downloads</span>
          </div>

          <div className="inline-flex items-center px-3 py-1.5 bg-[#1B6B3D26] border border-[#1B6B3D40] rounded-full text-sgt-green text-xs font-semibold mb-5">
            <FolderOpen className="w-3.5 h-3.5 mr-1.5" />
            Resource Library
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Downloads & Resources
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            Product flyers, technical pamphlets, presentations, research papers — everything you need to evaluate our decarbonisation solutions.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { label: "Categories", value: String(downloadCategories.length) },
              { label: "Documents", value: String(totalFiles) },
              { label: "Format", value: "PDF" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg px-5 py-3">
                <p className="text-xl font-bold text-sgt-green">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SEARCH ── */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="relative max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, category, or tag..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value.trim()) setActiveCategory(null);
            }}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B6B3D4D] focus:border-sgt-green transition-all"
          />
        </div>
      </div>


      {/* ── CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 pb-20">

        {/* Search results */}
        {isSearching && (
          <div>
            <p className="text-sm text-gray-500 mb-6">
              {filteredFiles.length} result{filteredFiles.length !== 1 ? "s" : ""} for &quot;{searchQuery}&quot;
            </p>
            {filteredFiles.length > 0 ? (
              <div className="space-y-2">
                {filteredFiles.map((file, idx) => (
                  <FileRow key={idx} file={file} showCategory />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No documents found</p>
                <button onClick={() => setSearchQuery("")} className="mt-3 text-sgt-green text-sm font-medium hover:underline">
                  Clear search
                </button>
              </div>
            )}
          </div>
        )}


        {/* Category grid */}
        {!isSearching && !activeCategory && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Browse by Category</h2>
            <p className="text-gray-500 mb-8">Select a category to view available documents</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {downloadCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="group bg-white border-2 border-gray-200 rounded-2xl p-6 text-left hover:border-sgt-green hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#1B6B3D1A] flex items-center justify-center text-sgt-green group-hover:bg-sgt-green group-hover:text-white transition-all">
                      {cat.icon}
                    </div>
                    <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2.5 py-1 rounded-full">
                      {cat.files.length} file{cat.files.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-sgt-green transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="flex items-center gap-1 mt-4 text-sm text-sgt-green font-medium opacity-0 group-hover:opacity-100 transition-all">
                    Browse files <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}


        {/* Files inside a category */}
        {!isSearching && activeCategory && currentCategory && (
          <div>
            <button
              onClick={() => setActiveCategory(null)}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-sgt-green transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all categories
            </button>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#1B6B3D1A] flex items-center justify-center text-sgt-green">
                {currentCategory.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{currentCategory.name}</h2>
                <p className="text-sm text-gray-500">
                  {currentCategory.files.length} document{currentCategory.files.length !== 1 ? "s" : ""} available
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {currentCategory.files.map((file, idx) => (
                <FileRow key={idx} file={file} />
              ))}
            </div>
          </div>
        )}
      </div>


      {/* ── CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-800 to-[#1B6B3D] rounded-3xl p-10 lg:p-14 text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
            <div className="relative max-w-2xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Need a custom document?
              </h3>
              <p className="text-green-100 text-lg mb-8">
                Our engineering team can provide tailored solution briefs, technical proposals, and ROI analyses specific to your requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-center bg-white text-[#1B6B3D] px-8 py-3 rounded-lg text-sm font-bold hover:bg-sgt-yellow hover:text-gray-900 transition-all"
                >
                  Request Engineering Consultation
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center text-center bg-white/10 border border-white/30 text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-white/20 transition-all"
                >
                  Browse All Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


// ─── FILE ROW ───
interface FileRowProps {
  file: {
    name: string;
    path: string;
    size: string;
    tag: string;
    tagIcon?: React.ReactNode;
    category?: string;
  };
  showCategory?: boolean;
}

function FileRow({ file, showCategory = false }: FileRowProps) {
  const tagStyle = tagStyles[file.tag] || "bg-gray-100 text-gray-600 border-gray-200";

  return (
    <div className="group flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 hover:border-[#1B6B3D66] hover:shadow-sm transition-all">
      {/* PDF badge */}
      <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
        <span className="text-red-500 text-[10px] font-bold tracking-wider">PDF</span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-gray-900 text-sm font-semibold truncate group-hover:text-sgt-green transition-colors">
          {file.name}
        </h4>
        <div className="flex items-center gap-3 mt-0.5">
          <span className="text-xs text-gray-400">{file.size}</span>
          {showCategory && file.category && (
            <>
              <span className="text-gray-300">·</span>
              <span className="text-xs text-gray-400">{file.category}</span>
            </>
          )}
        </div>
      </div>

      {/* Tag */}
      <div className={`hidden sm:flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${tagStyle}`}>
        {file.tagIcon}
        {file.tag}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <a
          href={file.path}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-sgt-green text-white text-xs font-semibold rounded-lg hover:bg-green-800 transition-all"
        >
          <Eye className="w-3.5 h-3.5" />
          View
        </a>
        {/* ── DOWNLOAD BUTTON START — comment out to hide ── */}
        <a
          href={file.path}
          download
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          Download
        </a>
        {/* ── DOWNLOAD BUTTON END ── */}
      </div>
    </div>
  );
}