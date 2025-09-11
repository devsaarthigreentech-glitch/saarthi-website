// src/components/Products/GreenDrive/Advantage.tsx
export default function Advantage() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900">The GreenDrive Advantage</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Hydrogen from water, generated on-demand; retrofit friendly; integrated with GreenVision for monitoring and validation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-slate-900">On-demand hydrogen</h3>
            <p className="mt-2 text-sm text-slate-600">No large on-vehicle storage required. Hydrogen generated as needed from water.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-slate-900">Universal compatibility</h3>
            <p className="mt-2 text-sm text-slate-600">Compression ignition engines across vehicle classes supported via retrofit modules.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-slate-900">Smart & connected</h3>
            <p className="mt-2 text-sm text-slate-600">Automated controls + GreenVision integration for remote monitoring and ROI validation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
