import { Award } from "lucide-react";
import { CREDENTIALS, PHOTOS } from "@/data/siteContent";

/** The fixed credentials list (home, About). Content lives in siteContent.ts. */
export default function CredentialsBlock({
  heading = "Credentials",
  intro,
  className = "",
}: {
  heading?: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">{heading}</h2>
        {intro && <p className="mx-auto max-w-3xl text-lg text-gray-600">{intro}</p>}
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CREDENTIALS.map((c) => {
          const isCii = c.title.includes("CII");
          return (
            <li
              key={c.title}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6"
            >
              {isCii ? (
                <img
                  src={PHOTOS.ciiLogo.src}
                  alt={PHOTOS.ciiLogo.alt}
                  loading="lazy"
                  className="h-11 w-16 shrink-0 rounded object-contain"
                />
              ) : (
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1B6B3D]/10">
                  <Award className="h-5 w-5 text-[#1B6B3D]" />
                </span>
              )}
              <div>
                <p className="font-bold leading-snug text-gray-900">{c.title}</p>
                {c.detail && <p className="mt-1 text-sm leading-relaxed text-gray-600">{c.detail}</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
