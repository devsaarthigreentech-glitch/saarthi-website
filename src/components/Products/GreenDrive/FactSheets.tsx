// src/components/Products/GreenDrive/FactSheets.tsx
export default function FactSheets() {
  const cases = [
    { title: 'Fleet Operator - Trucks', summary: 'Fuel savings & emission cuts over 3 months', link: '/documents/fleet-case-study.pdf' },
    { title: 'Construction Loader', summary: 'Idling emission reductions in heavy earthmoving', link: '/documents/construction-case.pdf' },
    { title: 'Agriculture Tractor', summary: 'Field efficiency improvements', link: '/documents/agri-case.pdf' },
  ];

  return (
    <section id="fact-sheets" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold">Fact Sheets & Case Studies</h2>
          <p className="mt-2 text-slate-600">Independent trials, field deployments, and downloadable fact sheets.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c, idx) => (
            <article key={idx} className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900">{c.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{c.summary}</p>
              <div className="mt-4">
                <a href={c.link} className="text-[var(--brand,#33A04A)] hover:underline text-sm font-medium">Download</a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="/documents/all-fact-sheets.pdf" className="inline-flex rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 text-white font-semibold">Download All Fact Sheets</a>
        </div>
      </div>
    </section>
  );
}
