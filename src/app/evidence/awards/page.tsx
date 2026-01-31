// export default AwardsPage;
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// Importing your existing source of truth
import galleryData, { GalleryEvent } from '@/components/Resources/Gallery/galleryData';

// --- THEME COLOR VARIABLES ---
const BG_LIGHT = "#f8f9fa";
const BG_CARD_LIGHT = "#ffffff";
const PRIMARY_COLOR = "#10B981"; 
const TEXT_DARK = "#0f172a";
const TEXT_MUTED = "#64748b";

// --- ICONS ---
const IconTrophy = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
);

const IconCalendar = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
);

const IconImages = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
);

// --- GALLERY MODAL ---
const GalleryModal = ({ event, onClose }: { event: GalleryEvent | null, onClose: () => void }) => {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); }
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);

    if (!event) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
                <div className="p-6 border-b flex justify-between items-center bg-slate-50">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
                        <p className="text-sm text-emerald-600 font-medium">{event.date}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>
                <div className="p-6 overflow-y-auto">
                    {event.excerpt && <p className="text-slate-600 mb-8 leading-relaxed italic border-l-4 border-emerald-500 pl-4">{event.excerpt}</p>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {event.images.map((src, i) => (
                            <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 group shadow-sm">
                                <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- AWARD CARD ---
interface AwardCardProps {
    galleryEventId?: string; // The ID to pull data from galleryData
    organization?: string;   // Optional override for the organization label
    isFeatured?: boolean;
    // Fallbacks for non-gallery awards
    customTitle?: string;
    customYear?: string;
    customDesc?: string;
    customImage?: string;
    onViewGallery: (event: GalleryEvent) => void;
}

const AwardCard = ({ galleryEventId, organization, isFeatured, customTitle, customYear, customDesc, customImage, onViewGallery }: AwardCardProps) => {
    // Find the linked event data
    const event = galleryEventId ? galleryData.find(e => e.id === galleryEventId) : null;

    // Derived values: pull from gallery event if available, else use custom props
    const title = event?.title || customTitle || "Award Recognition";
    const year = customYear || (event?.date ? event.date.split(' ').pop() : "2024");
    const desc = event?.excerpt || customDesc || "Recognized for excellence in sustainable innovation.";
    const image = event?.cover || customImage || "https://placehold.co/600x400/10B981/ffffff?text=Award";
    const orgLabel = organization || "Saarthi GreenTech";

    return (
        <div 
            className={`flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border ${isFeatured ? 'border-emerald-500 ring-1 ring-emerald-500/20' : 'border-slate-100 shadow-md'}`}
        >
            <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center">
                    <IconCalendar className="w-3 h-3 mr-1.5 text-emerald-500" />
                    {year}
                </div>
                {isFeatured && (
                    <div className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-tighter px-2.5 py-1 rounded-md shadow-lg">
                        Featured
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <span className="text-emerald-600 text-[11px] font-black uppercase tracking-widest mb-1">{orgLabel}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 leading-snug">{title}</h3>
                <p className="text-slate-500 text-sm line-clamp-4 leading-relaxed flex-grow">{desc}</p>
                
                {event && (
                    <button 
                        onClick={() => onViewGallery(event)}
                        className="mt-6 flex items-center text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors group/btn"
                    >
                        <IconImages className="w-4 h-4 mr-2" />
                        <span>View Gallery Photos</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transition-transform group-hover/btn:translate-x-1"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                )}
            </div>
        </div>
    );
};

// --- MAIN PAGE ---
export default function AwardsPage() {
    const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);

    return (
        <div className="min-h-screen font-sans" style={{ backgroundColor: BG_LIGHT }}>
            {/* 1. HERO SECTION */}
            <section className="bg-slate-900 pt-32 pb-24 px-6 text-center border-b-4 border-emerald-500 relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center p-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                        <IconTrophy className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-xs font-bold tracking-widest uppercase text-white px-2">Global Recognition</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Honored for <span className="text-emerald-400">Impact</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Our journey to decarbonise the world's engines has been acknowledged by global leaders in technology, sustainability, and industrial innovation.
                    </p>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.1" /></svg>
                </div>
            </section>

            {/* 2. AWARDS GRID */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Just pass the galleryEventId! 
                          The card will automatically handle the date, title, excerpt, and image from galleryData.ts 
                        */}
                        <AwardCard 
                            galleryEventId="event-6" 
                            organization="Silicon India"
                            // isFeatured 
                            onViewGallery={setSelectedEvent} 
                        />
                        <AwardCard 
                            galleryEventId="event-5" 
                            organization="ASIS India and PSP (Pune Security Professionals)"
                            // isFeatured 
                            onViewGallery={setSelectedEvent} 
                        />
                        <AwardCard 
                            galleryEventId="event-2" 
                            organization="GH2 India Conference"
                            // isFeatured 
                            onViewGallery={setSelectedEvent} 
                        />
                        
                        <AwardCard 
                            galleryEventId="event-4" 
                            organization="Office of the PSA, Govt of India"
                            onViewGallery={setSelectedEvent} 
                        />

                        <AwardCard 
                            galleryEventId="event-1" 
                            organization="EGYPES 2025"
                            onViewGallery={setSelectedEvent} 
                        />

                        {/* Example of a Static Award not linked to a gallery event */}
                        {/* <AwardCard 
                            customTitle="Top 50 Climate Tech Companies"
                            customOrg="TechFuture Magazine"
                            customYear="2023"
                            customDesc="Selected as one of the most promising companies driving the transition to Net-Zero in the global logistics sector."
                            onViewGallery={setSelectedEvent}
                        /> */}

                        {/* <AwardCard 
                            customTitle="Maritime Decarbonisation Excellence"
                            customOrg="Global Port Alliance"
                            customYear="2024"
                            customDesc="Recognizing the successful deployment of GreenMarine™ retrofits on harbor tugs across international waters."
                            onViewGallery={setSelectedEvent}
                        /> */}

                        {/* <AwardCard 
                            customTitle="Startup of the Year: ESG"
                            customOrg="Sustainability Awards"
                            customYear="2022"
                            customDesc="Awarded for our GreenVision platform which provides auditable, real-time emission reduction data for industrial corporations."
                            onViewGallery={setSelectedEvent}
                        /> */}
                    </div>
                </div>
            </section>

            {/* 3. MEDIA LOGOS */}
            {/* <section className="py-16 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">Featured In</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale">
                         <div className="flex items-center justify-center font-bold text-xl text-slate-800">TechCrunch</div>
                         <div className="flex items-center justify-center font-bold text-xl text-slate-800">Forbes</div>
                         <div className="flex items-center justify-center font-bold text-xl text-slate-800">The Economic Times</div>
                         <div className="flex items-center justify-center font-bold text-xl text-slate-800">CleanTechnica</div>
                    </div>
                </div>
            </section> */}

            {/* SHARED MODAL */}
            <GalleryModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        </div>
    );
}