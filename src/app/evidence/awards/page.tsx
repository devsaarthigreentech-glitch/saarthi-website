// // 'use client';

// // import React from 'react';

// // // --- THEME COLOR VARIABLES (Consistent with Saarthi Design System) ---
// // const BG_LIGHT = "var(--bg-light, #f8f9fa)";
// // const BG_CARD_LIGHT = "var(--bg-card-light, #ffffff)";
// // const PRIMARY_COLOR = "var(--primary-saarthi, #10B981)"; // Tailwind Green-500
// // const ACCENT_COLOR = "#059669"; // Darker Green for text emphasis
// // const TEXT_DARK = "var(--text-dark, #212529)";
// // const TEXT_MUTED = "var(--text-muted, #495057)";

// // // --- INLINE SVG ICON COMPONENTS ---
// // const IconTrophy = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
// //         <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
// //         <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
// //         <path d="M4 22h16" />
// //         <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
// //         <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
// //         <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
// //     </svg>
// // );

// // const IconMedal = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
// //         <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
// //         <path d="M11 12 5.12 2.2" />
// //         <path d="m13 12 5.88-9.8" />
// //         <path d="M8 7h8" />
// //         <circle cx="12" cy="17" r="5" />
// //         <path d="M12 18v-2h-.5" />
// //     </svg>
// // );

// // const IconStar = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
// //         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
// //     </svg>
// // );

// // const IconCalendar = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
// //         <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
// //         <line x1="16" x2="16" y1="2" y2="6" />
// //         <line x1="8" x2="8" y1="2" y2="6" />
// //         <line x1="3" x2="21" y1="10" y2="10" />
// //     </svg>
// // );

// // const IconAward = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
// //         <circle cx="12" cy="8" r="6" />
// //         <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
// //     </svg>
// // );

// // // --- COMPONENT: AWARD CARD ---
// // interface AwardCardProps {
// //     title: string;
// //     organization: string;
// //     year: string;
// //     description: string;
// //     isFeatured?: boolean;
// // }

// // const AwardCard: React.FC<AwardCardProps> = ({ title, organization, year, description, isFeatured = false }) => {
// //     return (
// //         <div 
// //             className={`relative p-6 rounded-xl shadow-md border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full bg-white group`}
// //             style={{ 
// //                 borderColor: isFeatured ? PRIMARY_COLOR : '#e5e7eb',
// //                 borderWidth: isFeatured ? '2px' : '1px'
// //             }}
// //         >
// //             {isFeatured && (
// //                 <div className="absolute -top-3 left-6 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider rounded-full shadow-sm" style={{ backgroundColor: PRIMARY_COLOR }}>
// //                     Featured Recognition
// //                 </div>
// //             )}
            
// //             <div className="mb-4 flex items-center justify-between">
// //                 <div className={`p-3 rounded-full ${isFeatured ? 'bg-green-100' : 'bg-gray-50'}`}>
// //                     {isFeatured ? 
// //                         <IconTrophy className="w-8 h-8" style={{ color: PRIMARY_COLOR }} /> : 
// //                         <IconMedal className="w-6 h-6" style={{ color: TEXT_MUTED }} />
// //                     }
// //                 </div>
// //                 <div className="flex items-center text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
// //                     <IconCalendar className="w-4 h-4 mr-2" />
// //                     {year}
// //                 </div>
// //             </div>

// //             <h3 className="text-xl font-bold mb-2 leading-tight" style={{ color: TEXT_DARK }}>
// //                 {title}
// //             </h3>
            
// //             <p className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: PRIMARY_COLOR }}>
// //                 {organization}
// //             </p>
            
// //             <p className="text-sm leading-relaxed flex-grow" style={{ color: TEXT_MUTED }}>
// //                 {description}
// //             </p>
// //         </div>
// //     );
// // };

// // // --- DATA: AWARDS LIST ---
// // // Placeholder data - replace with actual Saarthi awards
// // const awardsList: AwardCardProps[] = [
// //     {
// //         title: "Clean Mobility Startup of the Year",
// //         organization: "Global GreenTech Summit",
// //         year: "2024",
// //         description: "Recognized for our innovative hydrogen retrofit technology that significantly reduces particulate matter in heavy diesel fleets.",
// //         isFeatured: true
// //     },
// //     {
// //         title: "Excellence in Sustainable Innovation",
// //         organization: "Industrial Energy Association",
// //         year: "2023",
// //         description: "Awarded for the GreenGen™ system's ability to lower carbon footprints in remote mining and industrial sites.",
// //         isFeatured: false
// //     },
// //     {
// //         title: "Top 50 Climate Tech Companies",
// //         organization: "TechFuture Magazine",
// //         year: "2023",
// //         description: "Selected as one of the most promising companies driving the transition to Net-Zero in the logistics sector.",
// //         isFeatured: false
// //     },
// //     {
// //         title: "Best ESG Enabler Technology",
// //         organization: "Corporate Sustainability Awards",
// //         year: "2022",
// //         description: "Honored for the GreenVision™ platform's capability to provide auditable, real-time emission reduction data.",
// //         isFeatured: false
// //     },
// //     {
// //         title: "Maritime Decarbonisation Award",
// //         organization: "Port Authority Alliance",
// //         year: "2024",
// //         description: "For the successful deployment of GreenMarine™ retrofits on harbour tugs, demonstrating 15% fuel savings.",
// //         isFeatured: false
// //     },
// //     {
// //         title: "Safety in Engineering",
// //         organization: "National Safety Council",
// //         year: "2023",
// //         description: "Recognizing the multi-layered safety protocols inherent in our on-demand hydrogen generation systems.",
// //         isFeatured: false
// //     },
// // ];

// // // --- MAIN PAGE COMPONENT ---
// // const AwardsPage = () => {
    
// //     // Placeholder image for Hero Background (using one from your fleet set for industrial vibe)
// //     const heroImageUrl = "/images/hero/hero-illustration.png"; 

// //     return (
// //         <main className="min-h-screen font-sans" style={{ backgroundColor: BG_LIGHT }}>

// //             {/* 1. HERO SECTION (Dark Theme) */}
// //             <section 
// //                 className="relative py-24 md:py-32 text-center overflow-hidden"
// //                 style={{
// //                     backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url(${heroImageUrl})`,
// //                     backgroundSize: 'cover',
// //                     backgroundPosition: 'center',
// //                     borderBottom: `4px solid ${PRIMARY_COLOR}`
// //                 }}
// //             >
// //                 <div className="container mx-auto px-4 max-w-5xl relative z-10 text-white">
// //                     <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
// //                         <IconTrophy className="w-6 h-6 text-yellow-400 mr-2" />
// //                         <span className="text-sm font-bold tracking-widest uppercase">Excellence & Recognition</span>
// //                     </div>
                    
// //                     <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
// //                         Recognized for <span style={{ color: PRIMARY_COLOR }}>Impact</span>. <br/> Trusted by Industry.
// //                     </h1>
                    
// //                     <p className="text-lg md:text-xl mb-0 max-w-3xl mx-auto font-light text-gray-300 leading-relaxed">
// //                         Our journey to decarbonise the world's engines has been acknowledged by global leaders in technology, sustainability, and industrial innovation.
// //                     </p>
// //                 </div>
// //             </section>

// //             {/* 2. INTRODUCTION SECTION */}
// //             <section className="py-16 md:py-24" style={{ backgroundColor: BG_LIGHT }}>
// //                 <div className="container mx-auto px-4 max-w-4xl text-center">
// //                     <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_DARK }}>
// //                         Validating Our Mission
// //                     </h2>
// //                     <p className="text-lg text-gray-600 mb-10 leading-relaxed">
// //                         Every award we receive is a testament to the rigorous engineering behind our GreenLabs, the strategic foresight of GreenMentor, and the verifiable truth provided by GreenVision. It confirms that practical, profitable decarbonisation is not just a concept, but a working reality.
// //                     </p>
// //                     <div className="h-1 w-24 mx-auto rounded-full" style={{ backgroundColor: PRIMARY_COLOR }}></div>
// //                 </div>
// //             </section>

// //             {/* 3. AWARDS GRID SECTION */}
// //             <section className="py-16 bg-white" style={{ backgroundColor: BG_CARD_LIGHT }}>
// //                 <div className="container mx-auto px-4 max-w-7xl">
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //                         {awardsList.map((award, index) => (
// //                             <AwardCard 
// //                                 key={index}
// //                                 title={award.title}
// //                                 organization={award.organization}
// //                                 year={award.year}
// //                                 description={award.description}
// //                                 isFeatured={award.isFeatured}
// //                             />
// //                         ))}
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* 4. MEDIA MENTIONS (Optional textual section) */}
// //             <section className="py-20" style={{ backgroundColor: BG_LIGHT }}>
// //                 <div className="container mx-auto px-4 max-w-5xl">
// //                     <div className="text-center mb-12">
// //                         <IconStar className="w-10 h-10 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
// //                         <h2 className="text-2xl md:text-3xl font-bold" style={{ color: TEXT_DARK }}>Featured In</h2>
// //                     </div>
                    
// //                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
// //                         {/* Placeholders for Media Logos - using text styling for now */}
// //                         <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center font-bold text-xl text-gray-400">TechCrunch</div>
// //                         <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center font-bold text-xl text-gray-400">Forbes Asia</div>
// //                         <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center font-bold text-xl text-gray-400">CleanTechnica</div>
// //                         <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center font-bold text-xl text-gray-400">The Economic Times</div>
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* 5. CTA SECTION */}
// //             <section className="py-20 text-center" style={{ backgroundColor: TEXT_DARK, color: 'white' }}>
// //                 <div className="container mx-auto px-4 max-w-4xl">
// //                     <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
// //                         Partner with an Award-Winning Team
// //                     </h2>
// //                     <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
// //                         See how our certified and recognized solutions can transform your fleet or facility.
// //                     </p>
// //                     <div className="flex flex-wrap justify-center gap-4">
// //                         <a 
// //                             href="/contact" 
// //                             className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.05]"
// //                             style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}
// //                         >
// //                             Contact Us
// //                         </a>
// //                         <a 
// //                             href="/solutions" 
// //                             className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full border border-gray-500 hover:bg-white hover:text-gray-900 transition-all duration-300"
// //                         >
// //                             View Solutions
// //                         </a>
// //                     </div>
// //                 </div>
// //             </section>

// //         </main>
// //     );
// // };

// // export default AwardsPage;
// 'use client';

// import React, { useState } from 'react';

// // --- THEME COLOR VARIABLES ---
// const BG_LIGHT = "var(--bg-light, #f8f9fa)";
// const BG_CARD_LIGHT = "var(--bg-card-light, #ffffff)";
// const PRIMARY_COLOR = "var(--primary-saarthi, #10B981)"; // Tailwind Green-500
// const TEXT_DARK = "var(--text-dark, #212529)";
// const TEXT_MUTED = "var(--text-muted, #495057)";

// // --- INLINE SVG ICON COMPONENTS ---
// const IconTrophy = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
//         <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
//         <path d="M4 22h16" />
//         <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
//         <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
//         <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
//     </svg>
// );

// const IconMedal = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
//         <path d="M11 12 5.12 2.2" />
//         <path d="m13 12 5.88-9.8" />
//         <path d="M8 7h8" />
//         <circle cx="12" cy="17" r="5" />
//         <path d="M12 18v-2h-.5" />
//     </svg>
// );

// const IconStar = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
// );

// const IconCalendar = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//         <line x1="16" x2="16" y1="2" y2="6" />
//         <line x1="8" x2="8" y1="2" y2="6" />
//         <line x1="3" x2="21" y1="10" y2="10" />
//     </svg>
// );

// // --- HELPER COMPONENT: CLIENT IMAGE ---
// // Handles loading states and fallbacks for images gracefully
// const ClientImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
//     const [imgSrc, setImgSrc] = useState(src);
//     const fallbackSrc = "https://placehold.co/600x400/10B981/ffffff?text=Award+Photo";

//     const handleError = () => {
//         if (imgSrc !== fallbackSrc) {
//             setImgSrc(fallbackSrc);
//         }
//     };
    
//     return (
//         <img 
//             src={imgSrc} 
//             alt={alt} 
//             className={className || "w-full h-full object-cover"}
//             onError={handleError}
//         />
//     );
// };

// // --- COMPONENT: AWARD CARD ---
// interface AwardCardProps {
//     title: string;
//     organization: string;
//     year: string;
//     description: string;
//     isFeatured?: boolean;
//     imageSrc?: string; // New prop for the award photo
// }

// const AwardCard: React.FC<AwardCardProps> = ({ title, organization, year, description, isFeatured = false, imageSrc }) => {
//     return (
//         <div 
//             className={`relative rounded-xl shadow-md border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full bg-white group overflow-hidden`}
//             style={{ 
//                 borderColor: isFeatured ? PRIMARY_COLOR : '#e5e7eb',
//                 borderWidth: isFeatured ? '2px' : '1px'
//             }}
//         >
//             {/* Image Section (Top Half) */}
//             <div className="w-full h-48 md:h-56 bg-gray-100 relative">
//                 {imageSrc ? (
//                     <ClientImage 
//                         src={imageSrc} 
//                         alt={`Photo of ${title}`} 
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                 ) : (
//                     <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300">
//                         <IconTrophy className="w-16 h-16 opacity-20" />
//                     </div>
//                 )}
                
//                 {/* Year Badge Overlay */}
//                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center" style={{ color: TEXT_DARK }}>
//                     <IconCalendar className="w-3 h-3 mr-1.5 opacity-70" />
//                     {year}
//                 </div>

//                 {isFeatured && (
//                     <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider rounded-full shadow-md" style={{ backgroundColor: PRIMARY_COLOR }}>
//                         Featured
//                     </div>
//                 )}
//             </div>

//             {/* Content Section (Bottom Half) */}
//             <div className="p-6 flex flex-col flex-grow">
//                 <div className="mb-3 flex items-start justify-between">
//                     <div>
//                          <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: PRIMARY_COLOR }}>
//                             {organization}
//                         </p>
//                         <h3 className="text-xl font-bold leading-tight" style={{ color: TEXT_DARK }}>
//                             {title}
//                         </h3>
//                     </div>
//                     {/* Small Icon for context */}
//                     <div className={`p-2 rounded-full flex-shrink-0 ml-2 ${isFeatured ? 'bg-green-100' : 'bg-gray-100'}`}>
//                         {isFeatured ? 
//                             <IconTrophy className="w-5 h-5" style={{ color: PRIMARY_COLOR }} /> : 
//                             <IconMedal className="w-5 h-5" style={{ color: TEXT_MUTED }} />
//                         }
//                     </div>
//                 </div>
                
//                 <p className="text-sm leading-relaxed flex-grow" style={{ color: TEXT_MUTED }}>
//                     {description}
//                 </p>
//             </div>
//         </div>
//     );
// };

// // --- DATA: AWARDS LIST ---
// // Added 'imageSrc' placeholders. Replace these paths with your actual uploaded images!
// const awardsList: AwardCardProps[] = [
//     {
//         title: "Clean Mobility Startup of the Year",
//         organization: "Global GreenTech Summit",
//         year: "2024",
//         description: "Recognized for our innovative hydrogen retrofit technology that significantly reduces particulate matter in heavy diesel fleets.",
//         isFeatured: true,
//         imageSrc: "/images/awards/award-startup-year.jpg" // REPLACE with your image path
//     },
//     {
//         title: "Excellence in Sustainable Innovation",
//         organization: "Industrial Energy Association",
//         year: "2023",
//         description: "Awarded for the GreenGen™ system's ability to lower carbon footprints in remote mining and industrial sites.",
//         isFeatured: false,
//         imageSrc: "/images/awards/award-innovation.jpg" // REPLACE with your image path
//     },
//     {
//         title: "Top 50 Climate Tech Companies",
//         organization: "TechFuture Magazine",
//         year: "2023",
//         description: "Selected as one of the most promising companies driving the transition to Net-Zero in the logistics sector.",
//         isFeatured: false,
//         imageSrc: "/images/awards/award-top50.jpg" // REPLACE with your image path
//     },
//     {
//         title: "Best ESG Enabler Technology",
//         organization: "Corporate Sustainability Awards",
//         year: "2022",
//         description: "Honored for the GreenVision™ platform's capability to provide auditable, real-time emission reduction data.",
//         isFeatured: false,
//         imageSrc: "/images/awards/award-esg.jpg" // REPLACE with your image path
//     },
//     {
//         title: "Maritime Decarbonisation Award",
//         organization: "Port Authority Alliance",
//         year: "2024",
//         description: "For the successful deployment of GreenMarine™ retrofits on harbour tugs, demonstrating 15% fuel savings.",
//         isFeatured: false,
//         imageSrc: "/images/awards/award-marine.jpg" // REPLACE with your image path
//     },
//     {
//         title: "Safety in Engineering",
//         organization: "National Safety Council",
//         year: "2023",
//         description: "Recognizing the multi-layered safety protocols inherent in our on-demand hydrogen generation systems.",
//         isFeatured: false,
//         imageSrc: "/images/awards/award-safety.jpg" // REPLACE with your image path
//     },
// ];

// // --- MAIN PAGE COMPONENT ---
// const AwardsPage = () => {
    
//     // Placeholder image for Hero Background 
//     const heroImageUrl = "/images/hero/hero-illustration.png"; 

//     return (
//         <main className="min-h-screen font-sans" style={{ backgroundColor: BG_LIGHT }}>

//             {/* 1. HERO SECTION (Dark Theme) */}
//             <section 
//                 className="relative py-24 md:py-32 text-center overflow-hidden"
//                 style={{
//                     backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url(${heroImageUrl})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     borderBottom: `4px solid ${PRIMARY_COLOR}`
//                 }}
//             >
//                 <div className="container mx-auto px-4 max-w-5xl relative z-10 text-white">
//                     <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
//                         <IconTrophy className="w-6 h-6 text-yellow-400 mr-2" />
//                         <span className="text-sm font-bold tracking-widest uppercase">Excellence & Recognition</span>
//                     </div>
                    
//                     <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
//                         Recognized for <span style={{ color: PRIMARY_COLOR }}>Impact</span>. <br/> Trusted by Industry.
//                     </h1>
                    
//                     <p className="text-lg md:text-xl mb-0 max-w-3xl mx-auto font-light text-gray-300 leading-relaxed">
//                         Our journey to decarbonise the world's engines has been acknowledged by global leaders in technology, sustainability, and industrial innovation.
//                     </p>
//                 </div>
//             </section>

//             {/* 2. INTRODUCTION SECTION */}
//             <section className="py-16 md:py-24" style={{ backgroundColor: BG_LIGHT }}>
//                 <div className="container mx-auto px-4 max-w-4xl text-center">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_DARK }}>
//                         Validating Our Mission
//                     </h2>
//                     <p className="text-lg text-gray-600 mb-10 leading-relaxed">
//                         Every award we receive is a testament to the rigorous engineering behind our GreenLabs, the strategic foresight of GreenMentor, and the verifiable truth provided by GreenVision. It confirms that practical, profitable decarbonisation is not just a concept, but a working reality.
//                     </p>
//                     <div className="h-1 w-24 mx-auto rounded-full" style={{ backgroundColor: PRIMARY_COLOR }}></div>
//                 </div>
//             </section>

//             {/* 3. AWARDS GRID SECTION */}
//             <section className="py-16 bg-white" style={{ backgroundColor: BG_CARD_LIGHT }}>
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {awardsList.map((award, index) => (
//                             <AwardCard 
//                                 key={index}
//                                 title={award.title}
//                                 organization={award.organization}
//                                 year={award.year}
//                                 description={award.description}
//                                 isFeatured={award.isFeatured}
//                                 imageSrc={award.imageSrc}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* 4. MEDIA MENTIONS (Optional textual section) */}
//             <section className="py-20" style={{ backgroundColor: BG_LIGHT }}>
//                 <div className="container mx-auto px-4 max-w-5xl">
//                     <div className="text-center mb-12">
//                         <IconStar className="w-10 h-10 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
//                         <h2 className="text-2xl md:text-3xl font-bold" style={{ color: TEXT_DARK }}>Featured In</h2>
//                     </div>
                    
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
//                         {/* Placeholders for Media Logos - using text styling for now */}
//                         <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center font-bold text-xl text-gray-400">TechCrunch</div>
//                         <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center font-bold text-xl text-gray-400">Forbes Asia</div>
//                         <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center font-bold text-xl text-gray-400">CleanTechnica</div>
//                         <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center font-bold text-xl text-gray-400">The Economic Times</div>
//                     </div>
//                 </div>
//             </section>

//             {/* 5. CTA SECTION */}
//             <section className="py-20 text-center" style={{ backgroundColor: TEXT_DARK, color: 'white' }}>
//                 <div className="container mx-auto px-4 max-w-4xl">
//                     <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
//                         Partner with an Award-Winning Team
//                     </h2>
//                     <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
//                         See how our certified and recognized solutions can transform your fleet or facility.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-4">
//                         <a 
//                             href="/contact" 
//                             className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.05]"
//                             style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}
//                         >
//                             Contact Us
//                         </a>
//                         <a 
//                             href="/solutions" 
//                             className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full border border-gray-500 hover:bg-white hover:text-gray-900 transition-all duration-300"
//                         >
//                             View Solutions
//                         </a>
//                     </div>
//                 </div>
//             </section>

//         </main>
//     );
// };

// // export default AwardsPage;
// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// // --- THEME COLOR VARIABLES ---
// const BG_LIGHT = "var(--bg-light, #f8f9fa)";
// const BG_CARD_LIGHT = "var(--bg-card-light, #ffffff)";
// const PRIMARY_COLOR = "var(--primary-saarthi, #10B981)"; // Tailwind Green-500
// const TEXT_DARK = "var(--text-dark, #212529)";
// const TEXT_MUTED = "var(--text-muted, #495057)";

// // --- INLINE SVG ICON COMPONENTS ---
// const IconTrophy = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
//         <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
//         <path d="M4 22h16" />
//         <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
//         <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
//         <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
//     </svg>
// );

// const IconMedal = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
//         <path d="M11 12 5.12 2.2" />
//         <path d="m13 12 5.88-9.8" />
//         <path d="M8 7h8" />
//         <circle cx="12" cy="17" r="5" />
//         <path d="M12 18v-2h-.5" />
//     </svg>
// );

// const IconStar = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
// );

// const IconCalendar = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//         <line x1="16" x2="16" y1="2" y2="6" />
//         <line x1="8" x2="8" y1="2" y2="6" />
//         <line x1="3" x2="21" y1="10" y2="10" />
//     </svg>
// );

// const IconImages = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//         <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
//         <circle cx="9" cy="9" r="2" />
//         <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
//     </svg>
// );

// // --- GALLERY DATA TYPE ---
// // (Replicated from your galleryData.ts for self-containment)
// type GalleryEvent = {
//   id: string;
//   title: string;
//   date: string;
//   excerpt?: string;
//   cover: string;      
//   images: string[];   
// };

// // --- HELPER COMPONENT: CLIENT IMAGE ---
// const ClientImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
//     const [imgSrc, setImgSrc] = useState(src);
//     const fallbackSrc = "https://placehold.co/600x400/10B981/ffffff?text=Award+Photo";

//     const handleError = () => {
//         if (imgSrc !== fallbackSrc) {
//             setImgSrc(fallbackSrc);
//         }
//     };
    
//     return (
//         <img 
//             src={imgSrc} 
//             alt={alt} 
//             className={className || "w-full h-full object-cover"}
//             onError={handleError}
//         />
//     );
// };

// // --- COMPONENT: GALLERY MODAL (Integrated from your example) ---
// const GalleryModal = ({ event, onClose }: { event: GalleryEvent | null, onClose: () => void }) => {
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     }
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, [onClose]);

//   if (!event) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
//       role="dialog"
//       aria-modal="true"
//       onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
//     >
//       <div className="max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl flex flex-col relative animate-fadeIn">
//         {/* Close Button */}
//         <button
//             onClick={onClose}
//             className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full text-slate-800 transition-colors"
//             aria-label="Close"
//         >
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
//         </button>

//         <div className="p-6 md:p-8 border-b border-gray-100">
//             <h3 className="text-2xl font-bold text-slate-900 pr-8">{event.title}</h3>
//             <div className="text-sm font-medium text-green-600 mt-1">{event.date}</div>
//         </div>

//         <div className="p-6 md:p-8 overflow-y-auto">
//           {event.excerpt && <p className="mb-8 text-slate-600 text-lg leading-relaxed">{event.excerpt}</p>}

//           {/* Images Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {event.images.map((src, idx) => (
//               <div key={idx} className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-md transition-shadow group">
//                  {/* Using standard img for simplicity in this file context, but Image is preferred in Next.js */}
//                  <img src={src} alt={`${event.title} - ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         @keyframes fadeIn {
//             from { opacity: 0; transform: scale(0.95); }
//             to { opacity: 1; transform: scale(1); }
//         }
//         .animate-fadeIn {
//             animation: fadeIn 0.2s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }

// // --- COMPONENT: AWARD CARD ---
// interface AwardCardProps {
//     title: string;
//     organization: string;
//     year: string;
//     description: string;
//     isFeatured?: boolean;
//     imageSrc?: string; 
//     galleryEventId?: string; // ID to link to gallery data
//     onViewGallery?: (id: string) => void;
// }

// const AwardCard: React.FC<AwardCardProps> = ({ 
//     title, organization, year, description, isFeatured = false, imageSrc, galleryEventId, onViewGallery 
// }) => {
//     return (
//         <div 
//             className={`relative rounded-xl shadow-md border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full bg-white group overflow-hidden`}
//             style={{ 
//                 borderColor: isFeatured ? PRIMARY_COLOR : '#e5e7eb',
//                 borderWidth: isFeatured ? '2px' : '1px'
//             }}
//         >
//             {/* Image Section (Top Half) */}
//             <div className="w-full h-48 md:h-56 bg-gray-100 relative group-hover:opacity-90 transition-opacity">
//                 {imageSrc ? (
//                     <ClientImage 
//                         src={imageSrc} 
//                         alt={`Photo of ${title}`} 
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                 ) : (
//                     <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300">
//                         <IconTrophy className="w-16 h-16 opacity-20" />
//                     </div>
//                 )}
                
//                 {/* Year Badge Overlay */}
//                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center" style={{ color: TEXT_DARK }}>
//                     <IconCalendar className="w-3 h-3 mr-1.5 opacity-70" />
//                     {year}
//                 </div>

//                 {isFeatured && (
//                     <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider rounded-full shadow-md" style={{ backgroundColor: PRIMARY_COLOR }}>
//                         Featured
//                     </div>
//                 )}
//             </div>

//             {/* Content Section (Bottom Half) */}
//             <div className="p-6 flex flex-col flex-grow">
//                 <div className="mb-3 flex items-start justify-between">
//                     <div>
//                          <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: PRIMARY_COLOR }}>
//                             {organization}
//                         </p>
//                         <h3 className="text-xl font-bold leading-tight" style={{ color: TEXT_DARK }}>
//                             {title}
//                         </h3>
//                     </div>
//                 </div>
                
//                 <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: TEXT_MUTED }}>
//                     {description}
//                 </p>

//                 {/* View Gallery Link */}
//                 {galleryEventId && onViewGallery && (
//                     <button 
//                         onClick={() => onViewGallery(galleryEventId)}
//                         className="flex items-center text-sm font-semibold hover:underline transition-all group/link"
//                         style={{ color: PRIMARY_COLOR }}
//                     >
//                         <IconImages className="w-4 h-4 mr-2" />
//                         View Gallery Photos
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transition-transform group-hover/link:translate-x-1">
//                             <path d="M5 12h14" />
//                             <path d="m12 5 7 7-7 7" />
//                         </svg>
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// // --- DATA: GALLERY EVENTS (Mapped from your galleryData.ts) ---
// // Note: In a real app, you might import this from galleryData.ts
// const galleryEvents: GalleryEvent[] = [
//   {
//     id: "event-2",
//     title: "Saarthi GreenTech Recieves the Energy Leap Award",
//     date: "September 03, 2025",
//     excerpt: "Honoured with the Energy Leap Award at the GH2 India Conference 2025 in New Delhi.",
//     cover: "/images/gallery/event-2/cover.jpg",
//     images: [
//       "/images/gallery/event-2/1.jpg",
//       "/images/gallery/event-2/3.jpeg",
//       "/images/gallery/event-2/4.jpeg",
//       "/images/gallery/event-2/5.jpeg"
//     ],
//   },
//   {
//       id: "event-1",
//       title: "Advancing Sustainable Mobility at EGYPES 2025",
//       date: "June 12, 2024",
//       excerpt: "Presenting our On-Demand Hydrogen Generation technology for Internal Combustion Engines.",
//       cover: "/images/gallery/event-1/cover.jpg",
//       images: [
//         "/images/gallery/event-1/1.jpg",
//         "/images/gallery/event-1/2.jpg",
//         "/images/gallery/event-1/3.jpg",
//         "/images/gallery/event-1/4.jpg"
//       ]
//   }
//   // Add other events here...
// ];

// // --- DATA: AWARDS LIST ---
// const awardsList: AwardCardProps[] = [
//     {
//         title: "Energy Leap Award - GH2 India",
//         organization: "Global GreenTech Summit",
//         year: "2024",
//         description: "Recognized for our innovative hydrogen retrofit technology that significantly reduces particulate matter in heavy diesel fleets.",
//         isFeatured: false,
//         imageSrc: "/images/gallery/event-2/cover.jpg", // Using cover from gallery
//         galleryEventId: "event-2" // Linked to gallery event
//     },
//     {
//         title: "Excellence in Sustainable Innovation",
//         organization: "Industrial Energy Association",
//         year: "2023",
//         description: "Awarded for the GreenGen™ system's ability to lower carbon footprints in remote mining and industrial sites.",
//         isFeatured: false,
//         imageSrc: "/images/gallery/event-1/cover.jpg",
//         galleryEventId: "event-1"
//     },
//     {
//         title: "Top 50 Climate Tech Companies",
//         organization: "TechFuture Magazine",
//         year: "2023",
//         description: "Selected as one of the most promising companies driving the transition to Net-Zero in the logistics sector.",
//         isFeatured: false,
//         imageSrc: "/images/awards/award-top50.jpg"
//     },
//     {
//         title: "Best ESG Enabler Technology",
//         organization: "Corporate Sustainability Awards",
//         year: "2022",
//         description: "Honored for the GreenVision™ platform's capability to provide auditable, real-time emission reduction data.",
//         isFeatured: false,
//         imageSrc: "/images/awards/award-esg.jpg"
//     },
//     {
//         title: "Maritime Decarbonisation Award",
//         organization: "Port Authority Alliance",
//         year: "2024",
//         description: "For the successful deployment of GreenMarine™ retrofits on harbour tugs, demonstrating 15% fuel savings.",
//         isFeatured: false,
//         imageSrc: "/images/awards/award-marine.jpg"
//     },
//     {
//         title: "Safety in Engineering",
//         organization: "National Safety Council",
//         year: "2023",
//         description: "Recognizing the multi-layered safety protocols inherent in our on-demand hydrogen generation systems.",
//         isFeatured: false,
//         imageSrc: "/images/awards/award-safety.jpg"
//     },
// ];

// // --- MAIN PAGE COMPONENT ---
// const AwardsPage = () => {
//     // State for managing the active gallery modal
//     const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);

//     const handleViewGallery = (eventId: string) => {
//         const event = galleryEvents.find(e => e.id === eventId);
//         if (event) {
//             setSelectedEvent(event);
//         } else {
//             console.warn(`Gallery event with ID ${eventId} not found.`);
//         }
//     };

//     const handleCloseModal = () => {
//         setSelectedEvent(null);
//     };
    
//     const heroImageUrl = "/images/hero/hero-illustration.png"; 

//     return (
//         <main className="min-h-screen font-sans" style={{ backgroundColor: BG_LIGHT }}>

//             {/* 1. HERO SECTION */}
//             <section 
//                 className="relative py-24 md:py-32 text-center overflow-hidden"
//                 style={{
//                     backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url(${heroImageUrl})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     borderBottom: `4px solid ${PRIMARY_COLOR}`
//                 }}
//             >
//                 <div className="container mx-auto px-4 max-w-5xl relative z-10 text-white">
//                     <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
//                         <IconTrophy className="w-6 h-6 text-yellow-400 mr-2" />
//                         <span className="text-sm font-bold tracking-widest uppercase">Excellence & Recognition</span>
//                     </div>
                    
//                     <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
//                         Recognized for <span style={{ color: PRIMARY_COLOR }}>Impact</span>. <br/> Trusted by Industry.
//                     </h1>
                    
//                     <p className="text-lg md:text-xl mb-0 max-w-3xl mx-auto font-light text-gray-300 leading-relaxed">
//                         Our journey to decarbonise the world's engines has been acknowledged by global leaders in technology, sustainability, and industrial innovation.
//                     </p>
//                 </div>
//             </section>

//             {/* 2. INTRODUCTION SECTION */}
//             <section className="py-16 md:py-24" style={{ backgroundColor: BG_LIGHT }}>
//                 <div className="container mx-auto px-4 max-w-4xl text-center">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: TEXT_DARK }}>
//                         Validating Our Mission
//                     </h2>
//                     <p className="text-lg text-gray-600 mb-10 leading-relaxed">
//                         Every award we receive is a testament to the rigorous engineering behind our GreenLabs, the strategic foresight of GreenMentor, and the verifiable truth provided by GreenVision.
//                     </p>
//                     <div className="h-1 w-24 mx-auto rounded-full" style={{ backgroundColor: PRIMARY_COLOR }}></div>
//                 </div>
//             </section>

//             {/* 3. AWARDS GRID SECTION */}
//             <section className="py-16 bg-white" style={{ backgroundColor: BG_CARD_LIGHT }}>
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {awardsList.map((award, index) => (
//                             <AwardCard 
//                                 key={index}
//                                 {...award}
//                                 onViewGallery={handleViewGallery}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* 4. MEDIA MENTIONS */}
//             <section className="py-20" style={{ backgroundColor: BG_LIGHT }}>
//                 <div className="container mx-auto px-4 max-w-5xl">
//                     <div className="text-center mb-12">
//                         <IconStar className="w-10 h-10 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
//                         <h2 className="text-2xl md:text-3xl font-bold" style={{ color: TEXT_DARK }}>Featured In</h2>
//                     </div>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
//                         <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center font-bold text-xl text-gray-400">TechCrunch</div>
//                         <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center font-bold text-xl text-gray-400">Forbes Asia</div>
//                         <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center font-bold text-xl text-gray-400">CleanTechnica</div>
//                         <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center font-bold text-xl text-gray-400">The Economic Times</div>
//                     </div>
//                 </div>
//             </section>

//             {/* 5. CTA SECTION */}
//             <section className="py-20 text-center" style={{ backgroundColor: TEXT_DARK, color: 'white' }}>
//                 <div className="container mx-auto px-4 max-w-4xl">
//                     <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
//                         Partner with an Award-Winning Team
//                     </h2>
//                     <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
//                         See how our certified and recognized solutions can transform your fleet or facility.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-4">
//                         <a 
//                             href="/contact" 
//                             className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.05]"
//                             style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}
//                         >
//                             Contact Us
//                         </a>
//                         <a 
//                             href="/solutions" 
//                             className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full border border-gray-500 hover:bg-white hover:text-gray-900 transition-all duration-300"
//                         >
//                             View Solutions
//                         </a>
//                     </div>
//                 </div>
//             </section>

//             {/* GALLERY MODAL OVERLAY */}
//             <GalleryModal event={selectedEvent} onClose={handleCloseModal} />

//         </main>
//     );
// };

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