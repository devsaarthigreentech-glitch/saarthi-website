// src/components/Products/GreenDrive/Benefits.tsx
export default function Benefits() {
  const items = [
    'Fuel Savings - measurable ROI (up to 20%)',
    'Emission Reduction - PM, CO₂, HC, CO',
    'Smart Monitoring - Linked with GreenVision',
    'No Engine Modifications - Easy retrofit installation',
    'Applications Across Industries - Transport, construction, mining, agriculture',
    'Proven on the Road - Real-world validations'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-6">Benefits at a Glance</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((t,i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-md" style={{ background: 'var(--accent,#98C948)', color: '#07121a' }}>✅</div>
              <div className="text-sm text-slate-700">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
