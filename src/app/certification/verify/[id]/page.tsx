import Link from "next/link";

// Fallback only. When ACADEMY_URL is set, next.config.js redirects this route to
// the training app, which owns the certificate records.
export default async function VerifyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-[70vh] bg-[#F8FAF9] px-6 pt-40 pb-20">
      <div className="mx-auto max-w-xl rounded-xl border border-[#d8e4dc] bg-white p-8 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#33A04A]">
          Certificate verification
        </p>
        <p className="mb-6 break-all font-mono text-lg font-semibold">
          {decodeURIComponent(id)}
        </p>
        <p className="mb-8 text-slate-600">
          Online verification is not available right now. To confirm this
          certificate, contact us with the ID above.
        </p>
        <Link
          href="/contact"
          className="inline-flex rounded-md bg-[#1B6B3D] px-6 py-3 font-semibold text-white hover:bg-[#155730]"
        >
          Contact us
        </Link>
      </div>
    </main>
  );
}
