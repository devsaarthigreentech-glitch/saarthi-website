// SupportingThemes.tsx
export default function SupportingThemes() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Supporting Innovation Themes</h2>
            <p className="mt-4 text-slate-700">GreenLabs focuses on the systems that enable hydrogen adoption at scale.</p>

            <ul className="mt-6 space-y-4">
              <li>
                <h4 className="font-semibold text-slate-900">Hydrogen Transport & Storage</h4>
                <p className="text-sm text-slate-600">Low-cost, safe and scalable storage research into novel materials and compact technologies.</p>
              </li>

              <li>
                <h4 className="mt-3 font-semibold text-slate-900">Power Electronics & IoT Systems</h4>
                <p className="text-sm text-slate-600">Designing intelligent power supplies, sensors and controls integrated with GreenVision for optimization.</p>
              </li>
            </ul>
          </div>

          <div>
            <div className="relative rounded-xl overflow-hidden border border-slate-100 bg-white p-4 shadow-sm">
              <img src="/images/greenlabs/supporting-themes.png" alt="Themes" className="w-full h-72 object-cover object-center rounded-md" />
              {/* <div className="absolute bottom-4 left-4 bg-white/80 text-sm text-slate-800 px-3 py-2 rounded">IoT + Power Electronics + Storage</div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
