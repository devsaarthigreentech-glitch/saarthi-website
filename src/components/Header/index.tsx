"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { ROUTES } from "@/data/siteContent";

// ─── Menu Data ────────────────────────────────────────────────────────────────
type MenuLink = { id: number; title: string; path: string; group?: string };
type MenuEntry = { id: number; title: string; path?: string; submenu?: MenuLink[] };

const menuData: MenuEntry[] = [
  { id: 1, title: "Home", path: ROUTES.home },
  {
    id: 2,
    title: "Solutions",
    submenu: [
      { id: 21, title: "GreenDrive — Road", path: ROUTES.greendrive, group: "Engines" },
      { id: 22, title: "GreenX — Power", path: ROUTES.greenx },
      { id: 23, title: "GreenMarine — Marine", path: ROUTES.greenmarine },
      { id: 24, title: "GreenEdge", path: ROUTES.greenedge, group: "Burners & Furnaces" },
      { id: 25, title: "Decarbonisation-as-a-Service", path: ROUTES.daas, group: "Service" },
    ],
  },
  {
    id: 3,
    title: "Technology",
    submenu: [
      { id: 31, title: "CHFA Technology", path: ROUTES.chfa },
      { id: 32, title: "SGT OS", path: ROUTES.sgtos },
      { id: 33, title: "GreenVision", path: ROUTES.greenvision },
    ],
  },
  {
    id: 4,
    title: "Resources",
    submenu: [
      { id: 41, title: "Savings Calculator", path: ROUTES.calculator },
      { id: 42, title: "Gallery", path: ROUTES.gallery },
      { id: 43, title: "Media", path: ROUTES.media },
      { id: 44, title: "Videos", path: ROUTES.videos },
      { id: 45, title: "Downloads", path: ROUTES.downloads },
      { id: 46, title: "Knowledge Base", path: ROUTES.knowledgebase },
      { id: 47, title: "Training & Certification", path: ROUTES.certification },
    ],
  },
  {
    id: 5,
    title: "About",
    submenu: [
      { id: 51, title: "Our Journey & Mission", path: ROUTES.journey },
      { id: 52, title: "Leadership", path: ROUTES.leadership },
      { id: 53, title: "Partners", path: ROUTES.partners },
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
              width={72}
              height={72}
              className="object-contain"
            />
            <div className="border-l border-gray-300 pl-3">
              <p className="text-base font-bold text-gray-900 leading-tight">SGT HydroEdge</p>
              <p className="text-xs font-medium text-[#1B6B3D] leading-tight">Decarbonisation Infrastructure</p>
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
                      className={`absolute left-0 top-full min-w-[250px] rounded-lg bg-white border border-gray-100 shadow-xl py-1 z-50 transition-all duration-150 origin-top ${
                        openIndex === menu.id
                          ? "opacity-100 scale-y-100 pointer-events-auto"
                          : "opacity-0 scale-y-95 pointer-events-none"
                      }`}
                    >
                      {menu.submenu.map((s) => (
                        <Fragment key={s.id}>
                        {s.group && (
                          <p className="px-4 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                            {s.group}
                          </p>
                        )}
                        <Link
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
                        </Fragment>
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