"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export type BrochureLanguage = {
  code: string;
  label: string;
  href: string;
};

type Props = {
  /** The language versions of one document. */
  languages: readonly BrochureLanguage[];
  /** "download" saves the file; "view" opens it in a new tab. */
  mode?: "download" | "view";
  className?: string;
  /** Where the menu opens relative to the button. */
  placement?: "bottom" | "top";
  children: ReactNode;
};

/**
 * A brochure button that asks which language to open before it does anything.
 * Styled by the caller through `className`, so it drops in where a plain
 * download link used to be.
 */
export default function BrochureLanguageButton({
  languages,
  mode = "download",
  className,
  placement = "bottom",
  children,
}: Props) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <span ref={wrapperRef} className="relative inline-flex">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpen((v) => !v)}
        className={className}
      >
        {children}
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label="Choose a language"
          className={`absolute left-0 z-50 min-w-[11rem] overflow-hidden rounded-lg border border-gray-200 bg-white py-1 text-left shadow-xl ${
            placement === "top" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          <p className="px-4 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Choose a language
          </p>
          {languages.map((lang) => (
            <a
              key={lang.code}
              role="menuitem"
              href={encodeURI(lang.href)}
              hrefLang={lang.code}
              {...(mode === "download"
                ? { download: true }
                : { target: "_blank", rel: "noopener noreferrer" })}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-6 px-4 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-[#1B6B3D0F] hover:text-[#1B6B3D] focus:bg-[#1B6B3D0F] focus:text-[#1B6B3D] focus:outline-none"
            >
              {lang.label}
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                {lang.code}
              </span>
            </a>
          ))}
        </div>
      )}
    </span>
  );
}
