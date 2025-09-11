// src/components/Resources/DownloadsList.tsx
import Link from "next/link";

export default function DownloadsList({ items }: { items: { id: string; title: string; href: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((d) => (
        <div key={d.id} className="flex items-center justify-between rounded-md border px-4 py-3 bg-white">
          <div>
            <div className="font-semibold">{d.title}</div>
            <div className="text-sm text-slate-500">PDF • {d.href.split(".").pop()?.toUpperCase()}</div>
          </div>
          <Link href={d.href} className="inline-flex items-center gap-2 rounded-full bg-[var(--brand,#33A04A)] px-4 py-2 text-sm font-semibold text-black">
            Download
          </Link>
        </div>
      ))}
    </div>
  );
}
