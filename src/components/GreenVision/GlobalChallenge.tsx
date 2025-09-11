import Image from "next/image";

export default function GlobalChallenge() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/images/greenvision/pollution-esg.png"
            alt="Pollution + ESG report"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            The Global Challenge
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Businesses are under pressure to cut emissions and meet ESG & Net Zero commitments.
            But most tools today only record data for compliance — offering no control or ROI.
            <br /><br />
            Decision makers need a single platform that delivers emission intelligence +
            operational savings + reporting transparency.
          </p>
        </div>
      </div>
    </section>
  );
}
