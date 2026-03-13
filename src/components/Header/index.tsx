// // src/components/Header/index.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import ThemeToggler from "./ThemeToggler";
// import menuData from "./menuData";

// const Header = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const [sticky, setSticky] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const onScroll = () => setSticky(window.scrollY >= 80);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const toggleNavbar = () => setNavbarOpen((s) => !s);
//   const toggleSubmenu = (id: number) => setOpenIndex((i) => (i === id ? null : id));

//   return (
//     <header
//       className={`fixed left-0 right-0 top-0 z-50 transition ${
//         sticky ? "backdrop-blur-sm bg-white/80 shadow-sm" : "bg-transparent"
//       }`}
//     >
//       <div className="container">
//         <div className="flex items-center justify-between gap-6 py-3 lg:py-4">
//           {/* Logo */}
//           <div className="flex items-center shrink-0">
//             <Link href="/" className="flex items-center gap-3">
//               <Image src="/images/logo/company_logo.png" alt="Saarthi" width={100} height={100} className="block" />
//               {/* <span className={`hidden md:inline-block font-extrabold text-lg ${sticky ? "text-slate-900" : "text-white"}`}>
//                 Saarthi Green
//               </span> */}
//             </Link>
//           </div>

//           {/* Desktop nav */}
//           <nav className="hidden lg:flex lg:items-center lg:gap-8 lg:flex-nowrap whitespace-nowrap">
//             {menuData.map((menu) => {
//               // Menu with submenu
//               if (menu.submenu && menu.submenu.length) {
//                 return (
//                   // IMPORTANT: attach enter/leave to this wrapper (button + dropdown) so there is no gap
//                   <div
//                     key={menu.id}
//                     className="relative"
//                     onMouseEnter={() => setOpenIndex(menu.id)}
//                     onMouseLeave={() => setOpenIndex(null)}
//                   >
//                     <button
//                       onClick={() => toggleSubmenu(menu.id)}
//                       aria-expanded={openIndex === menu.id}
//                       className={`flex items-center gap-2 text-sm font-medium ${
//                         sticky ? "text-slate-800 hover:text-[var(--brand,#33A04A)]" : "text-white hover:text-[var(--brand,#33A04A)]"
//                       }`}
//                     >
//                       {menu.title}
//                       <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-60">
//                         <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//                       </svg>
//                     </button>

//                     {/* NOTE: use top-full (no mt), tiny translate for animation if needed but avoid gaps */}
//                     <div
//                       // keep the dropdown *directly* under the button (no gap), control visibility via opacity/pointer-events
//                       className={`absolute left-0 top-full min-w-[220px] rounded-md bg-white shadow-lg py-1 z-50 transition-all duration-150 transform origin-top
//                         ${openIndex === menu.id ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-0.5 pointer-events-none"}
//                       `}
//                     >
//                       {menu.submenu.map((s) => (
//                         <Link
//                           key={s.id}
//                           href={s.path}
//                           className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
//                           onClick={() => {
//                             // close menus on navigation (mobile-friendly)
//                             setOpenIndex(null);
//                             setNavbarOpen(false);
//                           }}
//                         >
//                           {s.title}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 );
//               }

//               // simple link
//               return (
//                 <Link
//                   key={menu.id}
//                   href={menu.path ?? "#"}
//                   className={`text-sm font-medium ${
//                     pathname === menu.path
//                       ? "text-[var(--brand,#33A04A)]"
//                       : sticky
//                       ? "text-slate-800 hover:text-[var(--brand,#33A04A)]"
//                       : "text-white hover:text-[var(--brand,#33A04A)]"
//                   }`}
//                 >
//                   {menu.title}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Right side */}
//           <div className="flex items-center gap-4">
//             <div className="hidden md:block">
//               <ThemeToggler />
//             </div>

//             {/* Mobile button */}
//             <button onClick={toggleNavbar} aria-label="Toggle navigation" className="relative z-40 block lg:hidden p-2">
//               <span className={`block h-0.5 w-6 ${sticky ? "bg-slate-900" : "bg-white"} transition-transform ${navbarOpen ? "rotate-45 translate-y-1.5" : ""}`} />
//               <span className={`block h-0.5 w-6 my-1 ${sticky ? "bg-slate-900" : "bg-white"} transition-opacity ${navbarOpen ? "opacity-0" : "opacity-100"}`} />
//               <span className={`block h-0.5 w-6 ${sticky ? "bg-slate-900" : "bg-white"} transition-transform ${navbarOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu panel */}
//       <div className={`lg:hidden transition-all duration-200 bg-white/95 border-t border-slate-100 ${navbarOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
//         <div className="container py-4">
//           <ul className="flex flex-col gap-2">
//             {menuData.map((menu) => (
//               <li key={menu.id} className="border-b last:border-b-0">
//                 {menu.submenu && menu.submenu.length ? (
//                   <>
//                     <button onClick={() => toggleSubmenu(menu.id)} className="w-full text-left py-3 text-base font-medium flex items-center justify-between">
//                       <span>{menu.title}</span>
//                       <svg width="18" height="18" viewBox="0 0 24 24">
//                         <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//                       </svg>
//                     </button>

//                     {openIndex === menu.id && (
//                       <div className="pl-4 pb-3">
//                         {menu.submenu.map((s) => (
//                           <Link key={s.id} href={s.path} className="block py-2 text-sm text-slate-700" onClick={() => setNavbarOpen(false)}>
//                             {s.title}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link href={menu.path ?? "#"} className="block py-3 text-base font-medium text-slate-800" onClick={() => setNavbarOpen(false)}>
//                     {menu.title}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//           <div className="mt-4">
//             <ThemeToggler />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

// ─── Menu Data ────────────────────────────────────────────────────────────────
const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Solutions",
    submenu: [
      { id: 21, title: "Industrial Solutions", path: "/solutions/new-industrial" },
      // { id: 22, title: "Boiler Solutions",     path: "/solutions/boiler" },
      // { id: 23, title: "Kiln Solutions",        path: "/solutions/kiln" },
      // { id: 24, title: "DG & Power Backup",     path: "/solutions/dg-power" },
      { id: 25, title: "Marine Solutions",      path: "/solutions/new-marine" },
      { id: 26, title: "Logistics & Fleet",     path: "/solutions/new-logistics" },
      // { id: 27, title: "Mining & Construction", path: "/solutions/mining" },
    ],
  },
  {
    id: 3,
    title: "Technology",
    submenu: [
      { id: 31, title: "CHFA Technology",     path: "/technology/chfa" },
      { id: 32, title: "CHCA Technology",     path: "/technology/chca" },
      { id: 33, title: "GreenVision Platform",path: "/technology/greenvision" },
      // { id: 34, title: "How It Works",         path: "/technology/how-it-works" },
    ],
  },
  {
    id: 4,
    title: "Resources",
    submenu: [
      { id: 44, title: "Gallery", path: "/resources/gallery" },
      { id: 45, title: "Media", path: "/resources/media" },
      // { id: 41, title: "Calculators - rework",   path: "/resources/calculators" },
      // { id: 42, title: "Downloads - rework",      path: "/resources/downloads" },
      // { id: 43, title: "Knowledge Base - rework",           path: "/resources/knowledgebase" },
    ],
  },
  {
    id: 5,
    title: "About",
    submenu: [
      { id: 51, title: "Founder's Story",         path: "/about/founder" },
      { id: 52, title: "Leadership",      path: "/about/leadership" },
      { id: 53, title: "Our Journey & Mission",  path: "/about/journey" },
      { id: 54, title: "Partners - TBD",        path: "/about/partners" },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setOpenIndex(null);
    setNavbarOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        sticky ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-3 lg:py-4">

          {/* ── Logo + Lockup ─────────────────────────────── */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo/company_logo.png"
              alt="SGT HydroEdge"
              width={56}
              height={56}
              className="object-contain"
            />
            <div className="border-l border-gray-300 pl-3">
              <p className="text-base font-bold text-gray-900 leading-tight">HydroEdge</p>
              <p className="text-xs font-medium text-[#1B6B3D] leading-tight">Profitable Decarbonisation</p>
            </div>
          </Link>

          {/* ── Desktop Nav ───────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuData.map((menu) => {
              const isActive =
                menu.path === pathname ||
                menu.submenu?.some((s) => s.path === pathname);

              if (menu.submenu?.length) {
                return (
                  <div
                    key={menu.id}
                    className="relative"
                    onMouseEnter={() => setOpenIndex(menu.id)}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[#1B6B3D]"
                          : "text-gray-700 hover:text-[#1B6B3D]"
                      }`}
                    >
                      {menu.title}
                      <ChevronDown
                        className={`w-4 h-4 opacity-60 transition-transform duration-150 ${
                          openIndex === menu.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute left-0 top-full min-w-[220px] rounded-lg bg-white border border-gray-100 shadow-xl py-1 z-50 transition-all duration-150 origin-top ${
                        openIndex === menu.id
                          ? "opacity-100 scale-y-100 pointer-events-auto"
                          : "opacity-0 scale-y-95 pointer-events-none"
                      }`}
                    >
                      {menu.submenu.map((s) => (
                        <Link
                          key={s.id}
                          href={s.path}
                          onClick={closeAll}
                          className={`block px-4 py-2.5 text-sm transition-colors border-b border-gray-50 last:border-b-0 ${
                            pathname === s.path
                              ? "text-[#1B6B3D] bg-green-50 font-medium"
                              : "text-gray-700 hover:bg-gray-50 hover:text-[#1B6B3D]"
                          }`}
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // Simple link
              return (
                <Link
                  key={menu.id}
                  href={menu.path ?? "#"}
                  className={`text-sm font-medium transition-colors ${
                    pathname === menu.path
                      ? "text-[#1B6B3D]"
                      : "text-gray-700 hover:text-[#1B6B3D]"
                  }`}
                >
                  {menu.title}
                </Link>
              );
            })}
          </nav>

          {/* ── Right: CTA + Mobile Toggle ────────────────── */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center bg-[#1B6B3D] text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-[#155730] transition-colors"
            >
              Contact Us
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setNavbarOpen((s) => !s)}
              aria-label="Toggle navigation"
              className="lg:hidden p-2 text-gray-700"
            >
              {navbarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu Panel ─────────────────────────────── */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-200 overflow-hidden ${
          navbarOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <ul className="flex flex-col divide-y divide-gray-100">
            {menuData.map((menu) => (
              <li key={menu.id}>
                {menu.submenu?.length ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenIndex((i) => (i === menu.id ? null : menu.id))
                      }
                      className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-800"
                    >
                      {menu.title}
                      <ChevronDown
                        className={`w-4 h-4 opacity-60 transition-transform duration-150 ${
                          openIndex === menu.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openIndex === menu.id && (
                      <div className="pl-4 pb-3 flex flex-col gap-1">
                        {menu.submenu.map((s) => (
                          <Link
                            key={s.id}
                            href={s.path}
                            onClick={closeAll}
                            className={`py-2 text-sm ${
                              pathname === s.path
                                ? "text-[#1B6B3D] font-medium"
                                : "text-gray-600 hover:text-[#1B6B3D]"
                            }`}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={menu.path ?? "#"}
                    onClick={closeAll}
                    className="block py-3 text-sm font-medium text-gray-800 hover:text-[#1B6B3D]"
                  >
                    {menu.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            onClick={closeAll}
            className="mt-4 flex items-center justify-center bg-[#1B6B3D] text-white text-sm font-medium px-5 py-3 rounded-md hover:bg-[#155730] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;