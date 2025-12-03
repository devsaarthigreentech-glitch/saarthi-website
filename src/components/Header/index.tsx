// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import ThemeToggler from "./ThemeToggler";
// import menuData from "./menuData";

// const Header = () => {
//   // Navbar toggle
//   const [navbarOpen, setNavbarOpen] = useState(false);
//   const navbarToggleHandler = () => {
//     setNavbarOpen(!navbarOpen);
//   };

//   // Sticky Navbar
//   const [sticky, setSticky] = useState(false);
//   const handleStickyNavbar = () => {
//     if (window.scrollY >= 80) {
//       setSticky(true);
//     } else {
//       setSticky(false);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyNavbar);
//   });

//   // submenu handler
//   const [openIndex, setOpenIndex] = useState(-1);
//   const handleSubmenu = (index) => {
//     if (openIndex === index) {
//       setOpenIndex(-1);
//     } else {
//       setOpenIndex(index);
//     }
//   };

//   const usePathName = usePathname();

//   return (
//     <>
//       <header
//         className={`header top-0 left-0 z-40 flex w-full items-center ${
//           sticky
//             ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
//             : "absolute bg-transparent"
//         }`}
//       >
//         <div className="container">
//           <div className="relative -mx-4 flex items-center justify-between">
//             <div className="w-60 max-w-full px-4 xl:mr-12">
//               <Link
//                 href="/"
//                 className={`header-logo block w-full ${
//                   sticky ? "py-5 lg:py-2" : "py-8"
//                 } `}
//               >
//                 <Image
//   src="/images/logo/company_logo.png"
//   alt="Saarthi GreenTech logo"
//   width={120}  // tweak as needed
//   height={40}
//   className="h-14 w-auto dark:hidden"
// />

//                 <Image
//                   src="/images/logo/company_logo.png"
//                   alt="logo"
//                   width={140}
//                   height={30}
//                   className="hidden h-14 w-auto dark:block"
//                 />
//               </Link>
//             </div>
//             <div className="flex w-full items-center justify-between px-4">
//               <div>
//                 <button
//                   onClick={navbarToggleHandler}
//                   id="navbarToggler"
//                   aria-label="Mobile Menu"
//                   className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
//                 >
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
//                       navbarOpen ? "top-[7px] rotate-45" : " "
//                     }`}
//                   />
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
//                       navbarOpen ? "opacity-0" : " "
//                     }`}
//                   />
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
//                       navbarOpen ? "top-[-8px] -rotate-45" : " "
//                     }`}
//                   />
//                 </button>
//                 <nav
//                   id="navbarCollapse"
//                   className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
//                     navbarOpen
//                       ? "visibility top-full opacity-100"
//                       : "invisible top-[120%] opacity-0"
//                   }`}
//                 >
//                   <ul className="block lg:flex lg:space-x-12">
//                     {menuData.map((menuItem, index) => (
//                       <li key={index} className="group relative">
//                         {menuItem.path ? (
//                           <Link
//                             href={menuItem.path}
//                             className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
//                               usePathName === menuItem.path
//                                 ? "text-primary dark:text-white"
//                                 : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
//                             }`}
//                           >
//                             {menuItem.title}
//                           </Link>
//                         ) : (
//                           <>
//                             <p
//                               onClick={() => handleSubmenu(index)}
//                               className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
//                             >
//                               {menuItem.title}
//                               <span className="pl-3">
//                                 <svg width="25" height="24" viewBox="0 0 25 24">
//                                   <path
//                                     fillRule="evenodd"
//                                     clipRule="evenodd"
//                                     d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
//                                     fill="currentColor"
//                                   />
//                                 </svg>
//                               </span>
//                             </p>
//                             <div
//                               className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
//                                 openIndex === index ? "block" : "hidden"
//                               }`}
//                             >
//                               {menuItem.submenu.map((submenuItem, index) => (
//                                 <Link
//                                   href={submenuItem.path}
//                                   key={index}
//                                   className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
//                                 >
//                                   {submenuItem.title}
//                                 </Link>
//                               ))}
//                             </div>
//                           </>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 </nav>
//               </div>
//               <div className="flex items-center justify-end pr-16 lg:pr-0">
//                 <Link
//                   href="/signin"
//                   className="text-dark hidden px-7 py-3 text-base font-medium hover:opacity-70 md:block dark:text-white"
//                 >
//                   Sign In
//                 </Link>
//                 <Link
//                   href="/signup"
//                   className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden rounded-xs px-8 py-3 text-base font-medium text-white transition duration-300 md:block md:px-9 lg:px-6 xl:px-9"
//                 >
//                   Sign Up
//                 </Link>
//                 <div>
//                   <ThemeToggler />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// // export default Header;
// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import ThemeToggler from './ThemeToggler'
// import menuData from './menuData'

// const Header = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false)
//   const [openIndex, setOpenIndex] = useState(-1)
//   const [sticky, setSticky] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const fn = () => setSticky(window.scrollY >= 80)
//     window.addEventListener('scroll', fn)
//     return () => window.removeEventListener('scroll', fn)
//   }, [])

//   const navbarToggleHandler = () => setNavbarOpen((s) => !s)
//   const handleSubmenu = (index: number) => setOpenIndex((i) => (i === index ? -1 : index))

//   return (
//     <header
//       className={`fixed left-0 right-0 top-0 z-50 transition ${sticky ? 'backdrop-blur-sm bg-white/80 shadow-sm' : 'bg-transparent'}`}
//     >
//       <div className="container">
//         <div className="flex items-center justify-between gap-6 py-3 lg:py-4">
//           {/* Logo */}
//           <div className="flex items-center shrink-0">
//             <Link href="/" className="flex items-center gap-3">
//               {/* small consistent logo size - adjust width/height as needed */}
//               <Image src="/images/logo/company_logo.png" alt="Saarthi" width={48} height={48} className="block" />
//               <span className="hidden md:inline-block font-extrabold text-lg text-slate-900">Saarthi GreenTech</span>
//             </Link>
//           </div>

//           {/* Nav (desktop) - keep on one line */}
//           <nav className="hidden lg:flex lg:items-center lg:gap-8 lg:flex-nowrap whitespace-nowrap">
//             {menuData.map((menu) => {
//               // item with submenu
//               // if (menu.submenu && menu.submenu.length) {
//               //   return (
//               //     <div key={menu.id} className="relative group" onMouseLeave={() => setOpenIndex(-1)}>
//               //       <button
//               //         onClick={() => handleSubmenu(menu.id)}
//               //         aria-expanded={openIndex === menu.id}
//               //         className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-[var(--brand,#33A04A)]"
//               //       >
//               //         {menu.title}
//               //         <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-60">
//               //           <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//               //         </svg>
//               //       </button>

//               //       {/* desktop submenu */}
//               //       <div
//               //         className={`absolute left-0 top-full mt-3 w-48 rounded-md bg-white shadow-md py-2 transition-opacity ${
//               //           openIndex === menu.id ? 'block' : 'hidden group-hover:block'
//               //         }`}
//               //       >
//               //         {menu.submenu.map((s) => (
//               //           <Link
//               //             key={s.id}
//               //             href={s.path}
//               //             className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
//               //           >
//               //             {s.title}
//               //           </Link>
//               //         ))}
//               //       </div>
//               //     </div>
//               //   )
//               // }
// /* submenu item (desktop + mobile safe) */
// if (menu.submenu && menu.submenu.length) {
//   return (
//     <div
//       key={menu.id}
//       className="relative"
//       // keep it open when the mouse is over either the button or the submenu
//       onMouseEnter={() => setOpenIndex(menu.id)}
//       onMouseLeave={() => setOpenIndex(-1)}
//     >
//       <button
//         onClick={() => handleSubmenu(menu.id)} // toggles on mobile
//         aria-expanded={openIndex === menu.id}
//         className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-[var(--brand,#33A04A)]"
//       >
//         {menu.title}
//         <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-60">
//           <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//         </svg>
//       </button>

//       {/* Dropdown: keep in DOM on desktop (visibility/opacity/pointer-events) so it remains hoverable */}
//       <div
//         className={`
//           absolute left-0 top-full transform lg:translate-y-1 lg:transition-all lg:duration-150
//           w-48 rounded-md bg-white shadow-md py-1 lg:z-50

//           /* Desktop: hidden by opacity/visibility/pointer-events when not open */
//           lg:invisible lg:opacity-0 lg:pointer-events-none lg:translate-y-1
//           ${openIndex === menu.id ? 'lg:visible lg:opacity-100 lg:pointer-events-auto lg:translate-y-0' : ''}

//           /* Mobile fallback: use block/hidden controlled by openIndex */
//           ${openIndex === menu.id ? 'block' : 'hidden'}
//         `}
//         // also ensure submenu keeps open if pointer is inside it (defensive)
//         onMouseEnter={() => setOpenIndex(menu.id)}
//         onMouseLeave={() => setOpenIndex(-1)}
//       >
//         {menu.submenu.map((s) => (
//           <Link
//             key={s.id}
//             href={s.path}
//             className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
//           >
//             {s.title}
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

//               // simple link
//               return (
//                 <Link
//                   key={menu.id}
//                   href={menu.path ?? '#'}
//                   className={`text-sm font-medium ${
//                     pathname === menu.path ? 'text-[var(--brand,#33A04A)]' : 'text-slate-800 hover:text-[var(--brand,#33A04A)]'
//                   }`}
//                 >
//                   {menu.title}
//                 </Link>
//               )
//             })}
//           </nav>

//           {/* Right: theme toggler + mobile hamburger */}
//           <div className="flex items-center gap-4">
//             <div className="hidden md:block">
//               <ThemeToggler />
//             </div>

//             {/* mobile menu button */}
//             <button
//               onClick={navbarToggleHandler}
//               aria-label="Toggle navigation"
//               className="relative z-40 block lg:hidden p-2"
//             >
//               {/* accessible hamburger lines */}
//               <span className={`block h-0.5 w-6 bg-slate-900 transition-transform ${navbarOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
//               <span className={`block h-0.5 w-6 bg-slate-900 my-1 transition-opacity ${navbarOpen ? 'opacity-0' : 'opacity-100'}`} />
//               <span className={`block h-0.5 w-6 bg-slate-900 transition-transform ${navbarOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu panel */}
//       <div
//         className={`lg:hidden transition-all duration-200 bg-white/95 border-t border-slate-100 ${
//           navbarOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
//         }`}
//       >
//         <div className="container py-4">
//           <ul className="flex flex-col gap-2">
//             {menuData.map((menu) => (
//               <li key={menu.id} className="border-b last:border-b-0">
//                 {menu.submenu && menu.submenu.length ? (
//                   <>
//                     <button
//                       onClick={() => handleSubmenu(menu.id)}
//                       className="w-full text-left py-3 text-base font-medium flex items-center justify-between"
//                     >
//                       <span>{menu.title}</span>
//                       <svg width="18" height="18" viewBox="0 0 24 24">
//                         <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                       </svg>
//                     </button>

//                     {openIndex === menu.id && (
//                       <div className="pl-4 pb-3">
//                         {menu.submenu.map((s) => (
//                           <Link key={s.id} href={s.path} className="block py-2 text-sm text-slate-700">
//                             {s.title}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link href={menu.path ?? '#'} className="block py-3 text-base font-medium text-slate-800">
//                     {menu.title}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* small theme toggler visible in mobile menu */}
//           <div className="mt-4">
//             <ThemeToggler />
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header
// src/components/Header/index.tsx   (or wherever your Header component file is)
"use client";

// src/components/Header/index.tsx
// src/components/Header/index.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

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

  const toggleNavbar = () => setNavbarOpen((s) => !s);
  const toggleSubmenu = (id: number) => setOpenIndex((i) => (i === id ? null : id));

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition ${
        sticky ? "backdrop-blur-sm bg-white/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-6 py-3 lg:py-4">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo/company_logo.png" alt="Saarthi" width={48} height={48} className="block" />
              <span className={`hidden md:inline-block font-extrabold text-lg ${sticky ? "text-slate-900" : "text-white"}`}>
                Saarthi Green
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8 lg:flex-nowrap whitespace-nowrap">
            {menuData.map((menu) => {
              // Menu with submenu
              if (menu.submenu && menu.submenu.length) {
                return (
                  // IMPORTANT: attach enter/leave to this wrapper (button + dropdown) so there is no gap
                  <div
                    key={menu.id}
                    className="relative"
                    onMouseEnter={() => setOpenIndex(menu.id)}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    <button
                      onClick={() => toggleSubmenu(menu.id)}
                      aria-expanded={openIndex === menu.id}
                      className={`flex items-center gap-2 text-sm font-medium ${
                        sticky ? "text-slate-800 hover:text-[var(--brand,#33A04A)]" : "text-white hover:text-[var(--brand,#33A04A)]"
                      }`}
                    >
                      {menu.title}
                      <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-60">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </button>

                    {/* NOTE: use top-full (no mt), tiny translate for animation if needed but avoid gaps */}
                    <div
                      // keep the dropdown *directly* under the button (no gap), control visibility via opacity/pointer-events
                      className={`absolute left-0 top-full min-w-[220px] rounded-md bg-white shadow-lg py-1 z-50 transition-all duration-150 transform origin-top
                        ${openIndex === menu.id ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-0.5 pointer-events-none"}
                      `}
                    >
                      {menu.submenu.map((s) => (
                        <Link
                          key={s.id}
                          href={s.path}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                          onClick={() => {
                            // close menus on navigation (mobile-friendly)
                            setOpenIndex(null);
                            setNavbarOpen(false);
                          }}
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // simple link
              return (
                <Link
                  key={menu.id}
                  href={menu.path ?? "#"}
                  className={`text-sm font-medium ${
                    pathname === menu.path
                      ? "text-[var(--brand,#33A04A)]"
                      : sticky
                      ? "text-slate-800 hover:text-[var(--brand,#33A04A)]"
                      : "text-white hover:text-[var(--brand,#33A04A)]"
                  }`}
                >
                  {menu.title}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ThemeToggler />
            </div>

            {/* Mobile button */}
            <button onClick={toggleNavbar} aria-label="Toggle navigation" className="relative z-40 block lg:hidden p-2">
              <span className={`block h-0.5 w-6 ${sticky ? "bg-slate-900" : "bg-white"} transition-transform ${navbarOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 w-6 my-1 ${sticky ? "bg-slate-900" : "bg-white"} transition-opacity ${navbarOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-0.5 w-6 ${sticky ? "bg-slate-900" : "bg-white"} transition-transform ${navbarOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`lg:hidden transition-all duration-200 bg-white/95 border-t border-slate-100 ${navbarOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="container py-4">
          <ul className="flex flex-col gap-2">
            {menuData.map((menu) => (
              <li key={menu.id} className="border-b last:border-b-0">
                {menu.submenu && menu.submenu.length ? (
                  <>
                    <button onClick={() => toggleSubmenu(menu.id)} className="w-full text-left py-3 text-base font-medium flex items-center justify-between">
                      <span>{menu.title}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </button>

                    {openIndex === menu.id && (
                      <div className="pl-4 pb-3">
                        {menu.submenu.map((s) => (
                          <Link key={s.id} href={s.path} className="block py-2 text-sm text-slate-700" onClick={() => setNavbarOpen(false)}>
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={menu.path ?? "#"} className="block py-3 text-base font-medium text-slate-800" onClick={() => setNavbarOpen(false)}>
                    {menu.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
