// Problem.tsx
export default function Problem() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">The Problem</h2>
        <p className="mt-4 text-lg text-slate-700">
          Global industry and transport remain heavily dependent on fossil fuels. Hydrogen offers a clean path,
          but it faces technical, transport and cost barriers. Many existing emission solutions lack commercial ROI,
          limiting adoption. GreenLabs bridges that gap by focusing on practical, scalable technologies with economic payback.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold text-slate-900">Technical Barriers</h3>
            <p className="mt-2 text-sm text-slate-600">Engine compatibility, storage safety, and integration challenges.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold text-slate-900">Cost & Logistics</h3>
            <p className="mt-2 text-sm text-slate-600">Hydrogen transport/storage adds cost and complexity to adoption.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold text-slate-900">Poor ROI</h3>
            <p className="mt-2 text-sm text-slate-600">Many solutions fail to show business returns, limiting real-world uptake.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
