export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="py-24 text-center bg-slate-900 text-white">
        <h1 className="text-4xl font-extrabold mb-4">Resources</h1>
        <p className="text-lg text-slate-200 max-w-2xl mx-auto">
          Blogs, downloads, gallery, and media coverage — everything you need in one place.
        </p>
      </section>

      <section className="container mx-auto px-6 py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <a href="/resources/blogs" className="block rounded-lg border p-6 hover:shadow-lg">
          <h2 className="font-semibold text-xl mb-2">Blogs</h2>
          <p className="text-slate-600 text-sm">Articles, insights, and updates from Saarthi GreenTech.</p>
        </a>
        <a href="/resources/downloads" className="block rounded-lg border p-6 hover:shadow-lg">
          <h2 className="font-semibold text-xl mb-2">Downloads</h2>
          <p className="text-slate-600 text-sm">Brochures, fact sheets, and technical documents.</p>
        </a>
        <a href="/resources/gallery" className="block rounded-lg border p-6 hover:shadow-lg">
          <h2 className="font-semibold text-xl mb-2">Gallery</h2>
          <p className="text-slate-600 text-sm">Images and project visuals.</p>
        </a>
        <a href="/resources/media" className="block rounded-lg border p-6 hover:shadow-lg">
          <h2 className="font-semibold text-xl mb-2">Media</h2>
          <p className="text-slate-600 text-sm">Press coverage, videos, and features.</p>
        </a>
      </section>
    </main>
  );
}
