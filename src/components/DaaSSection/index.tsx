import SingleDaasFeature from "./SingleDaasFeature";
import daasData from "./daasData";
import SectionTitle from "../Common/SectionTitle"; // Assuming SectionTitle is available

const DaasSection = () => {
  return (
    <section id="daas" className="py-16 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Main Content Grid: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Heading, Subheading & CTA */}
          <div className="lg:max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Zero CapEx. Guaranteed Impact.
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10">
              **You save diesel. The savings pay for the system.** We remove the financial barrier to decarbonisation.
            </p>

            {/* CTA Button */}
            <a
              href="/solutions/daas" // Update with your actual DaaS page link
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[var(--brand,#33A04A)] rounded-lg shadow-lg hover:bg-[var(--brand-dark,#2a853d)] transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore DaaS →
            </a>
          </div>

          {/* Right Column: Key Benefits List */}
          <div className="p-8 md:p-12 bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-xl space-y-8 border-t-4 border-[var(--brand,#33A04A)]">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              The DaaS Advantage:
            </h3>
            
            <div className="space-y-6">
              {daasData.map((feature) => (
                <SingleDaasFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DaasSection;