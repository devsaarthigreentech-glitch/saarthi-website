// ValueProps.tsx
export default function ValueProps() {
  const props = [
    { title: "Applied R&D", text: "Practical hydrogen tech with commercial ROI." },
    { title: "Retrofit Pathways", text: "Enable diesel fleets, DG sets, and marine engines to adopt hydrogen faster." },
    { title: "Systems Integration", text: "Power electronics + IoT → smarter, connected hydrogen systems." },
    { title: "Global Scalability", text: "Solutions adaptable across industries and geographies." },
    { title: "Decarbonisation Leadership", text: "Positioning Saarthi as a pioneer in applied hydrogen R&D." },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">GreenLabs Value Proposition</h2>
          <p className="mt-3 text-slate-600">How GreenLabs turns research into deployable, profitable solutions.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {props.map((p) => (
            <div key={p.title} className="p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
