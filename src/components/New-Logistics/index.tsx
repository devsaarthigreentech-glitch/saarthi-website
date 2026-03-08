"use client"
import React from 'react';
import { Truck, Construction, Tractor, TrendingUp, CheckCircle, AlertCircle, ArrowRight, Award, Shield, Zap, Activity } from 'lucide-react';

const LogisticsFleetPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-gray-600">
            <a href="/" className="hover:text-sgt-green">Home</a> / <a href="/solutions" className="hover:text-sgt-green">Solutions</a> / <span className="text-gray-900 font-medium">Logistics & Fleet</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-bold text-blue-800 mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                ARAI RESEARCH PUBLISHED | 3,00,000+ KM TESTED
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Fleet Solutions for<br />
                <span className="text-sgt-green">Diesel Vehicles</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Low-cost CHFA retrofit for trucks, mining equipment, construction machinery, and agricultural vehicles. Proven 3-15% fuel savings through extensive real-world testing on diesel engines.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900 mb-1">Proven Through Extensive Testing</p>
                    <p className="text-sm text-blue-800">
                      CHFA technology tested on various vehicles for 3,00,000+ km with proven fuel savings and emission improvements. Research conducted at ARAI and published in their journal — making SGT the only company with comprehensive understanding of hydrogen dosing for diesel engines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-sgt-green text-white px-8 py-4 rounded-md hover:bg-green-800 transition-all font-medium text-lg flex items-center">
                  Request Fleet Assessment <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:border-sgt-green hover:text-sgt-green transition-all font-medium text-lg">
                  Download Fleet Brief
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/api/placeholder/800/600" 
                  alt="Fleet Vehicles"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Fuel Savings</p>
                <p className="text-4xl font-bold text-sgt-green">3-15%</p>
                <p className="text-xs text-gray-500 mt-1">Road Proven</p>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Road Testing</p>
                <p className="text-4xl font-bold text-blue-600">3L+</p>
                <p className="text-xs text-gray-500 mt-1">km Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARAI Research & Testing */}
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
                SGT's research on hydrogen dosing for diesel engines has been published in the ARAI (Automotive Research Association of India) scientific journal — making us the only company with comprehensive, research-backed understanding of this technology.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Research conducted at ARAI facilities",
                  "Published in ARAI scientific journal",
                  "3,00,000+ km real-world road testing",
                  "Testing on various vehicle types",
                  "Comprehensive engine behavior analysis"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-sgt-yellow mr-3 flex-shrink-0" />
                    <span className="text-white text-lg">{point}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
                <p className="text-sm font-semibold text-sgt-yellow mb-3">Novel Innovation</p>
                <p className="text-white leading-relaxed mb-4">
                  As an innovative technology for fuel consumption reduction and emission improvement, there is no existing regulatory framework for approval. Our research and extensive testing demonstrate proven results.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                  <div>
                    <p className="text-3xl font-bold text-white">3-15%</p>
                    <p className="text-sm text-blue-100">Fuel Savings</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">20-80%</p>
                    <p className="text-sm text-blue-100">Emission Reduction</p>
                  </div>
                </div>
              </div>

              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-sgt-yellow hover:text-gray-900 transition-all">
                Download Research Paper
              </button>
            </div>

            <div>
              <img 
                src="/api/placeholder/600/500" 
                alt="Research Testing"
                className="w-full rounded-xl shadow-2xl"
              />
              
              <div className="mt-6 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <p className="text-sm font-semibold text-sgt-yellow mb-3">SGT's Unique Position</p>
                <p className="text-white text-sm leading-relaxed">
                  Through our published research and extensive testing program, SGT has developed the most comprehensive understanding of hydrogen dosing technology for diesel engines. This knowledge base enables us to optimize CHFA systems for maximum fuel savings and emission reduction across different vehicle types and operating conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Application Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Four Fleet Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CHFA technology for diesel engines across commercial, industrial, and agricultural fleets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Commercial Fleets */}
            <div className="bg-white border-2 border-sgt-green rounded-2xl p-6 hover:shadow-2xl transition-all">
              <div className="inline-flex px-3 py-1 bg-green-100 rounded-full text-green-800 text-xs font-bold mb-4">
                ✓ PROVEN
              </div>
              
              <div className="w-14 h-14 bg-sgt-green/10 rounded-xl flex items-center justify-center mb-4">
                <Truck className="w-7 h-7 text-sgt-green" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Fleets</h3>
              <p className="text-sm text-sgt-green font-semibold mb-4">Long-Haul & Distribution</p>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Trucks, buses, last-mile delivery vehicles — any diesel commercial fleet.
              </p>

              <div className="space-y-2 mb-4 text-xs">
                {["Long-haul trucks", "City distribution", "Last-mile delivery", "Bus fleets"].map((app, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-sgt-green rounded-full mr-2"></span>
                    {app}
                  </div>
                ))}
              </div>

              <button className="w-full bg-sgt-green text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-800 transition-all">
                View Fleet Solutions
              </button>
            </div>

            {/* Mining */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 hover:shadow-2xl transition-all">
              <div className="inline-flex px-3 py-1 bg-orange-100 rounded-full text-orange-800 text-xs font-bold mb-4">
                ✓ PROVEN
              </div>
              
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                <Construction className="w-7 h-7 text-orange-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mining</h3>
              <p className="text-sm text-orange-600 font-semibold mb-4">Heavy Equipment</p>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Haul trucks, excavators, loaders, dozers — diesel mining equipment.
              </p>

              <div className="space-y-2 mb-4 text-xs">
                {["Haul trucks", "Excavators", "Loaders & dozers", "Dump trucks"].map((app, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                    {app}
                  </div>
                ))}
              </div>

              <button className="w-full bg-orange-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-orange-700 transition-all">
                View Mining Solutions
              </button>
            </div>

            {/* Construction */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 hover:shadow-2xl transition-all">
              <div className="inline-flex px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-xs font-bold mb-4">
                ✓ PROVEN
              </div>
              
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Construction className="w-7 h-7 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Construction</h3>
              <p className="text-sm text-blue-600 font-semibold mb-4">Site Equipment</p>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Cranes, excavators, concrete mixers, generators — construction diesel equipment.
              </p>

              <div className="space-y-2 mb-4 text-xs">
                {["Cranes & lifts", "Excavators", "Concrete mixers", "Site generators"].map((app, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {app}
                  </div>
                ))}
              </div>

              <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all">
                View Construction Solutions
              </button>
            </div>

            {/* Agriculture */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6 hover:shadow-2xl transition-all">
              <div className="inline-flex px-3 py-1 bg-green-100 rounded-full text-green-800 text-xs font-bold mb-4">
                ✓ PROVEN
              </div>
              
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                <Tractor className="w-7 h-7 text-green-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agriculture</h3>
              <p className="text-sm text-green-600 font-semibold mb-4">Farm Equipment</p>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Tractors, harvesters, irrigation pumps — diesel agricultural machinery.
              </p>

              <div className="space-y-2 mb-4 text-xs">
                {["Tractors", "Harvesters", "Irrigation pumps", "Farm equipment"].map((app, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                    {app}
                  </div>
                ))}
              </div>

              <button className="w-full bg-green-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-all">
                View Agriculture Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emission Reduction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Emission Reduction
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Beyond fuel savings, CHFA delivers measurable reductions across all major diesel pollutants.
              </p>

              <div className="space-y-4">
                {[
                  { pollutant: "Visible Smoke", reduction: "50-80%", desc: "Cleaner diesel combustion" },
                  { pollutant: "Particulate Matter (PM)", reduction: "40-70%", desc: "Lower soot and black carbon" },
                  { pollutant: "Carbon Monoxide (CO)", reduction: "30-60%", desc: "More complete combustion" },
                  { pollutant: "Hydrocarbons (HC)", reduction: "25-50%", desc: "Reduced unburnt fuel" },
                  { pollutant: "Nitrogen Oxides (NOx)", reduction: "20-40%", desc: "Lower combustion temps" },
                  { pollutant: "Sulfur Oxides (SOx)", reduction: "20-35%", desc: "Better fuel utilization" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-900">{item.pollutant}</span>
                      <span className="text-2xl font-bold text-sgt-green">{item.reduction}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> Emission reduction percentages vary based on vehicle type, engine condition, operating profile, and baseline emissions. Results from comprehensive testing program.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-sgt-green/10 to-white rounded-2xl p-8 border-2 border-sgt-green">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Fleet-Wide Benefits</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-sgt-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Lower Operating Costs</p>
                      <p className="text-sm text-gray-600">3-15% fuel savings directly reduces your largest operating expense</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-sgt-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">ESG Compliance</p>
                      <p className="text-sm text-gray-600">Meet corporate sustainability targets with verified emission reductions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-sgt-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">No Vehicle Downtime</p>
                      <p className="text-sm text-gray-600">Retrofit installation takes 2-3 hours per vehicle with no operational disruption</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-sgt-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Fleet-Wide Monitoring</p>
                      <p className="text-sm text-gray-600">GreenVision platform tracks every vehicle with real-time savings verification</p>
                    </div>
                  </div>
                </div>

                <img 
                  src="/api/placeholder/500/300" 
                  alt="Fleet Monitoring Dashboard"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GreenVision Fleet Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              GreenVision Fleet Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every vehicle gets a digital twin for real-time monitoring and performance optimization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Real-Time Tracking",
                features: ["Per-vehicle fuel consumption", "Live emission monitoring", "Performance dashboards", "Route optimization insights"]
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Fleet Analytics",
                features: ["Baseline normalization", "Driver behavior analysis", "Vehicle-level ROI", "Fleet-wide trends"]
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Predictive Maintenance",
                features: ["System health monitoring", "Early warning alerts", "Maintenance scheduling", "Uptime maximization"]
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="w-16 h-16 bg-sgt-green/10 rounded-xl flex items-center justify-center mb-6 text-sgt-green">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-sgt-green mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Fleet Operators Choose SGT
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Research-Backed",
                desc: "Published in ARAI journal. 3,00,000+ km road testing. Comprehensive understanding of hydrogen dosing for diesel engines."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Proven Savings",
                desc: "6-24 month ROI. 3-15% fuel savings demonstrated through extensive real-world testing."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "No Engine Modification",
                desc: "Retrofit on air intake. No warranty void. Fully reversible installation."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Quick Installation",
                desc: "2-3 hours per vehicle. No downtime. Fleet can be retrofitted progressively."
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Live Fleet Monitoring",
                desc: "GreenVision platform included. Real-time savings verification. Automated reporting."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Low-Cost Solution",
                desc: "Affordable retrofit for fuel and emission improvement. Positive ROI across fleet operations."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-sgt-green hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-sgt-green/10 rounded-xl flex items-center justify-center mb-4 text-sgt-green">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Optimize Your Fleet?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join fleet operators achieving proven fuel savings and emission reductions
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-sgt-green text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-green-800 transition-all">
              Request Fleet Assessment
            </button>
            <button className="bg-white border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-lg text-lg font-bold hover:border-sgt-green hover:text-sgt-green transition-all">
              Download Fleet Brief
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-sgt-green mb-2">3-15%</p>
              <p className="text-gray-600">Fuel Savings</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-sgt-green mb-2">3L+</p>
              <p className="text-gray-600">km Road Tested</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-sgt-green mb-2">6-24</p>
              <p className="text-gray-600">months ROI</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .text-sgt-green { color: #1B6B3D; }
        .bg-sgt-green { background-color: #1B6B3D; }
        .text-sgt-yellow { color: #FFD700; }
        .bg-sgt-yellow { background-color: #FFD700; }
        .hover\\:bg-sgt-green:hover { background-color: #1B6B3D; }
        .hover\\:text-sgt-green:hover { color: #1B6B3D; }
        .hover\\:border-sgt-green:hover { border-color: #1B6B3D; }
        .hover\\:bg-sgt-yellow:hover { background-color: #FFD700; }
      `}</style>
    </div>
  );
};

export default LogisticsFleetPage;