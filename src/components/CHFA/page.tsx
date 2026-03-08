"use client"
import React from 'react';
import { Zap, CheckCircle, Award, FileText, Settings, TrendingUp, ArrowRight, Download } from 'lucide-react';

const CHFATechnologyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-gray-600">
            <a href="/" className="hover:text-sgt-green">Home</a> / <a href="/technology" className="hover:text-sgt-green">Technology</a> / <span className="text-gray-900 font-medium">CHFA Technology</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-bold text-blue-800 mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                ARAI RESEARCH PUBLISHED | 3,00,000+ KM TESTED
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                CHFA Technology
              </h1>
              
              <p className="text-2xl text-blue-600 font-semibold mb-6">
                Controlled Hydrogen Fuel Assist
              </p>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Patent-applied precision HHO generation for engines. Low-volume, precisely measured hydrogen injection optimized for diesel engines, DG sets, and mobile applications. Delivers 3-22% fuel savings depending on engine age and type.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-sm font-bold text-blue-900 mb-3">Research-Backed Technology</p>
                <div className="space-y-2 text-sm text-blue-800">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Published in ARAI journal</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Tested on multiple DG sets and vehicle engines at ARAI</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>3,00,000+ km road testing completed</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>3-22% savings (varies by engine age and emission standard)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-sgt-green text-white px-8 py-4 rounded-md hover:bg-green-800 transition-all font-medium text-lg flex items-center">
                  Download Technical Datasheet <Download className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:border-sgt-green hover:text-sgt-green transition-all font-medium text-lg">
                  View Research Paper
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/api/placeholder/800/600" 
                  alt="CHFA Technology System"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Fuel Efficiency</p>
                <p className="text-4xl font-bold text-sgt-green">3-22%</p>
                <p className="text-xs text-gray-500 mt-1">Improvement</p>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Testing</p>
                <p className="text-4xl font-bold text-blue-600">3L+</p>
                <p className="text-xs text-gray-500 mt-1">km Verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How CHFA Technology Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Precision hydrogen injection optimized for variable-load engine applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">On-Demand Generation</h3>
              <p className="text-gray-600">
                Water electrolysis produces HHO gas on-demand. No storage required - zero safety risk from stored hydrogen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precision Metering</h3>
              <p className="text-gray-600">
                Low-volume HHO precisely measured and injected based on engine load, RPM, and operating conditions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Combustion</h3>
              <p className="text-gray-600">
                HHO increases flame speed and combustion efficiency, resulting in better fuel utilization and lower emissions.
              </p>
            </div>
          </div>

          {/* Technical Diagram Placeholder */}
          <div className="bg-gray-100 rounded-2xl p-12 text-center">
            <img 
              src="/api/placeholder/1000/400" 
              alt="CHFA Technology Diagram"
              className="w-full rounded-xl"
            />
            <p className="text-sm text-gray-600 mt-4">CHFA System Architecture and Integration</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Technical Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Precision Low-Volume",
                description: "150-3000 ml/min capacity range. Precise dosing based on real-time engine parameters and application requirements."
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Variable Load Adaptation",
                description: "Automatically adjusts HHO generation based on engine load, RPM, and operating conditions for optimal performance."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Retrofit Compatible",
                description: "Integrates with existing engines without modification. Installation on air intake - no engine changes required."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "3-22% Efficiency Gain",
                description: "Savings depend on engine age and emission standard (Euro/BS). Older engines show higher savings due to carbon cleaning effect. Newer engines deliver 3-8%, older engines achieve 12-22%."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Safety by Design",
                description: "On-demand generation eliminates storage risks. Multiple fail-safe systems and automatic shutdown protection."
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Real-Time Monitoring",
                description: "Integrated with GreenVision platform for live performance tracking and predictive maintenance."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-sgt-green hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engine Age & Savings Relationship */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Savings Vary by Engine Age & Type
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Fuel savings from CHFA technology range from 3% to 22%, depending on the engine's age, emission standard, and baseline condition. Older engines show significantly higher savings due to carbon cleaning effects.
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">Newer Engines (BS-VI, Euro 5/6)</h3>
                    <span className="text-2xl font-bold text-blue-600">3-8%</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Modern engines with advanced emission controls already operate at higher baseline efficiency. CHFA provides incremental efficiency gains.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Lower baseline carbon deposits</li>
                    <li>• Already optimized combustion</li>
                    <li>• Still delivers attractive ROI</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">Mid-Age Engines (BS-IV, Euro 3/4)</h3>
                    <span className="text-2xl font-bold text-orange-600">8-15%</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Moderate carbon buildup over operating life. CHFA improves efficiency and begins carbon cleaning process.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Moderate carbon deposits present</li>
                    <li>• Efficiency improvement plus cleaning</li>
                    <li>• Excellent ROI potential</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">Older Engines (BS-III, Pre-Euro 3)</h3>
                    <span className="text-2xl font-bold text-sgt-green">12-22%</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Significant carbon buildup reduces baseline efficiency. CHFA delivers substantial efficiency gains through improved combustion and carbon cleaning.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Heavy carbon deposits cleaned</li>
                    <li>• Maximum efficiency improvement</li>
                    <li>• Outstanding ROI - often under 12 months</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Older Engines Save More</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-sgt-green/10 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-sgt-green font-bold">1</span>
                      </div>
                      <h4 className="font-bold text-gray-900">Carbon Deposit Cleaning</h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-13">
                      HHO combustion breaks down accumulated carbon deposits in combustion chambers, valves, and piston crowns, restoring engine efficiency.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-sgt-green/10 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-sgt-green font-bold">2</span>
                      </div>
                      <h4 className="font-bold text-gray-900">Lower Baseline Efficiency</h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-13">
                      Older engines operate at lower baseline efficiency, providing more room for improvement compared to optimized modern engines.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-sgt-green/10 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-sgt-green font-bold">3</span>
                      </div>
                      <h4 className="font-bold text-gray-900">Cumulative Benefits</h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-13">
                      Immediate combustion improvement plus gradual carbon cleaning creates compounding efficiency gains over time.
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    <strong>ROI Impact:</strong> Older engines typically achieve ROI in 6-12 months due to higher fuel savings, while newer engines achieve ROI in 12-24 months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              CHFA Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven across multiple engine applications with consistent results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* DG Sets */}
            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-8">
              <div className="inline-flex px-3 py-1 bg-green-100 rounded-full text-green-800 text-xs font-bold mb-4">
                DEPLOYED & OPERATIONAL
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">DG Sets</h3>
              <p className="text-gray-600 mb-6">
                Diesel and CNG generator sets from 125 kVA to 1,500 kVA capacity.
              </p>
              <ul className="space-y-3 mb-6 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>3-12% fuel savings demonstrated</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Multiple installations live</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Proven reliability 24/7 operation</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-all">
                View DG Set Solutions
              </button>
            </div>

            {/* Marine */}
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8">
              <div className="inline-flex px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-xs font-bold mb-4">
                PROVEN TECHNOLOGY
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Marine Engines</h3>
              <p className="text-gray-600 mb-6">
                Auxiliary engines and ship boilers. All marine fuels - HFO, MDO, MGO, diesel.
              </p>
              <ul className="space-y-3 mb-6 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>IMO 2050 compliant</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Works with any marine fuel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>DaaS model available</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all">
                View Marine Solutions
              </button>
            </div>

            {/* Logistics */}
            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-8">
              <div className="inline-flex px-3 py-1 bg-green-100 rounded-full text-green-800 text-xs font-bold mb-4">
                ROAD TESTED
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Logistics Fleet</h3>
              <p className="text-gray-600 mb-6">
                Trucks, mining, construction equipment. Diesel engine applications.
              </p>
              <ul className="space-y-3 mb-6 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>3,00,000+ km tested</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>3-22% fuel efficiency (depends on engine age)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fleet management via GreenVision</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-all">
                View Logistics Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ARAI Research */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex px-4 py-2 bg-white/20 rounded-full text-white text-sm font-bold mb-6">
                <Award className="w-4 h-4 mr-2" />
                Published Research
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                ARAI Journal Published Research
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                SGT's research on CHFA technology and hydrogen dosing for engines has been published in the ARAI (Automotive Research Association of India) scientific journal.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Research conducted at ARAI facilities",
                  "Published in ARAI scientific journal",
                  "3,00,000+ km real-world road testing",
                  "Multiple vehicle types tested",
                  "Comprehensive engine behavior analysis"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-sgt-yellow mr-3 flex-shrink-0" />
                    <span className="text-lg text-white">{point}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
                <p className="text-sm font-semibold text-sgt-yellow mb-3">SGT's Unique Position</p>
                <p className="text-white leading-relaxed">
                  Through published research and extensive testing, SGT has developed the most comprehensive understanding of hydrogen dosing technology for engines. This enables us to optimize CHFA systems for maximum fuel savings across applications.
                </p>
              </div>

              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-sgt-yellow hover:text-gray-900 transition-all inline-flex items-center">
                Download Research Paper <Download className="ml-2" />
              </button>
            </div>

            <div className="relative">
              <img 
                src="/api/placeholder/600/500" 
                alt="Research Testing"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Parameter</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { param: "HHO Generation Capacity", spec: "150 - 3000 ml/min (application dependent)" },
                    { param: "Power Supply", spec: "12V DC or 24V DC" },
                    { param: "Power Consumption", spec: "80W - 450W (load dependent)" },
                    { param: "Operating Temperature", spec: "0°C to 55°C ambient" },
                    { param: "Water Requirement", spec: "Distilled water or DM (demineralized) water" },
                    { param: "Control System", spec: "Microcontroller-based with load sensing" },
                    { param: "Safety Features", spec: "Pressure relief, flashback arrestor, auto-shutdown" },
                    { param: "Installation", spec: "Retrofit to air intake, no engine modification" },
                    { param: "Maintenance", spec: "Water refill every 3-6 months (usage dependent)" },
                    { param: "Certifications", spec: "CE, UL, RoHS, EMC, ISO 9001" },
                    { param: "Warranty", spec: "1 year standard warranty, 2 years support via annual AMC" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.param}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-sgt-green text-white px-8 py-4 rounded-lg font-bold hover:bg-green-800 transition-all inline-flex items-center">
              Download Complete Technical Datasheet <Download className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Deploy CHFA Technology?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our engineering team to discuss your specific application
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-sgt-green text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-green-800 transition-all">
              Schedule Technical Consultation
            </button>
            <button className="bg-white border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg text-lg font-bold hover:border-sgt-green hover:text-sgt-green transition-all">
              Request Quote
            </button>
          </div>
        </div>
      </section>
      

      <style>{`
        .text-sgt-green { color: #1B6B3D; }
        .bg-sgt-green { background-color: #1B6B3D; }
        .border-sgt-green { border-color: #1B6B3D; }
        .hover\\:bg-sgt-green:hover { background-color: #1B6B3D; }
        .hover\\:text-sgt-green:hover { color: #1B6B3D; }
        .hover\\:border-sgt-green:hover { border-color: #1B6B3D; }
        .text-sgt-yellow { color: #FFD700; }
        .bg-sgt-yellow { background-color: #FFD700; }
        .hover\\:bg-sgt-yellow:hover { background-color: #FFD700; }
      `}</style>
    </div>
  );
};

export default CHFATechnologyPage;