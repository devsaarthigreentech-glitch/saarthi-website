// src/components/Products/GreenDrive/Results.tsx
export default function Results() {
  const rows = [
    { param: 'Fuel Savings', value: 'Up to 20% depending on load & engine type' },
    { param: 'PM Emissions', value: '>50% reduction' },
    { param: 'CO₂ Output', value: 'Reduced proportional to fuel saved' },
    { param: 'HC & CO', value: 'Significant reduction' },
  ];

  return (
    <section id="results" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-4">Proven Results</h2>
        <p className="text-center text-slate-600 mb-8">Tested over months and hundreds of thousands of km across vehicles and equipment.</p>

        <div className="overflow-x-auto rounded-xl shadow ring-1 ring-slate-200">
          <table className="w-full text-left divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-slate-700">Parameter</th>
                <th className="px-6 py-3 text-sm font-semibold text-slate-700">Improvement (Expected / Tested)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{r.param}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
