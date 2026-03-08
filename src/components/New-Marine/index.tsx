"use client"
import React from 'react';
import { Ship, Anchor, Waves, CheckCircle, AlertCircle, ArrowRight, TrendingUp, Shield, Award, Globe, Fuel, DollarSign } from 'lucide-react';

const MarineSolutionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-gray-600">
            <a href="/" className="hover:text-sgt-green">Home</a> / <a href="/solutions" className="hover:text-sgt-green">Solutions</a> / <span className="text-gray-900 font-medium">Marine Solutions</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-sm font-bold text-blue-800 mb-6">
                <Ship className="w-4 h-4 mr-2" />
                IMO 2050 COMPLIANT
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Marine Solutions for<br />
                <span className="text-blue-600">Any Marine Fuel</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                CHFA for auxiliary engines and ship boilers on all vessels. Main propulsion engines on smaller support vessels (tugboats, barges, fishing vessels, DP ships, supply vessels). Proven 3-12% fuel savings on any marine fuel — HFO, MDO, MGO, diesel.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900 mb-1">Our Marine Focus</p>
                    <p className="text-sm text-blue-800 mb-2">
                      <strong>Proven Applications:</strong> Ship boilers and auxiliary engines (all vessels). Main propulsion engines and DGs on high-RPM support vessels (tugs, barges, fishing, DP ships, supply vessels).
                    </p>
                    <p className="text-sm text-blue-800">
                      <strong>Under Evaluation:</strong> We are open to testing HHO impact on 2-stroke HFO main propulsion engines for larger commercial vessels. This is not our current focus but available for pilot partnerships.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-all font-medium text-lg flex items-center">
                  Request Marine Assessment <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:border-blue-600 hover:text-blue-600 transition-all font-medium text-lg">
                  Download Marine Brief
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/api/placeholder/800/600" 
                  alt="Marine Vessel"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Fuel Savings</p>
                <p className="text-4xl font-bold text-blue-600">3-12%</p>
                <p className="text-xs text-gray-500 mt-1">Validated</p>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">ROI Period</p>
                <p className="text-4xl font-bold text-sgt-green">6-36</p>
                <p className="text-xs text-gray-500 mt-1">months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marine Fuels Compatibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Works With All Marine Fuels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our CHFA technology is fuel-agnostic — from heavy fuel oil to marine diesel
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                fuel: "HFO",
                name: "Heavy Fuel Oil",
                desc: "Auxiliary engines and ship boilers on ocean-going vessels",
                savings: "3-12%",
                color: "red"
              },
              {
                fuel: "MDO",
                name: "Marine Diesel Oil",
                desc: "Auxiliary and high-RPM propulsion engines",
                savings: "3-12%",
                color: "orange"
              },
              {
                fuel: "MGO",
                name: "Marine Gas Oil",
                desc: "Low sulfur fuel for ECA zones and coastal vessels",
                savings: "3-12%",
                color: "blue"
              },
              {
                fuel: "Diesel",
                name: "Marine Diesel",
                desc: "Smaller vessels, auxiliaries, and ship boilers",
                savings: "3-12%",
                color: "green"
              }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white border-2 border-${item.color}-200 rounded-2xl p-6 hover:shadow-xl transition-all`}>
                <div className={`w-16 h-16 bg-${item.color}-50 rounded-xl flex items-center justify-center mb-4`}>
                  <Fuel className={`w-8 h-8 text-${item.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.fuel}</h3>
                <p className={`text-sm text-${item.color}-600 font-semibold mb-3`}>{item.name}</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                
                <div className={`bg-${item.color}-50 rounded-lg p-3`}>
                  <p className="text-xs text-gray-600 mb-1">Target Savings</p>
                  <p className={`text-2xl font-bold text-${item.color}-600`}>{item.savings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMO 2050 Compliance */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex px-4 py-2 bg-white/20 rounded-full text-white text-sm font-bold mb-6">
                <Globe className="w-4 h-4 mr-2" />
                International Compliance
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                IMO 2050 Net-Zero Pathway
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                The International Maritime Organization's 2050 net-zero target requires immediate action. Our CHFA technology helps vessels meet interim targets while planning long-term transitions.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    year: "2030",
                    target: "40% CO₂ intensity reduction",
                    status: "SGT delivers 50%+ reduction now"
                  },
                  {
                    year: "2040",
                    target: "70% CO₂ intensity reduction",
                    status: "Pathway enabled with CHFA + future fuels"
                  },
                  {
                    year: "2050",
                    target: "Net-zero GHG emissions",
                    status: "H₂-ready infrastructure today"
                  }
                ].map((milestone, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-2xl font-bold text-sgt-yellow">{milestone.year}</span>
                      <CheckCircle className="w-6 h-6 text-sgt-yellow" />
                    </div>
                    <p className="text-white font-semibold mb-1">{milestone.target}</p>
                    <p className="text-sm text-blue-100">{milestone.status}</p>
                  </div>
                ))}
              </div>

              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-sgt-yellow hover:text-gray-900 transition-all">
                Download IMO Compliance Guide
              </button>
            </div>

            <div>
              <img 
                src="/api/placeholder/600/500" 
                alt="IMO 2050 Pathway"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emission Reduction Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Emission Reduction
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Beyond fuel savings, CHFA technology delivers measurable reductions across all major pollutants — critical for IMO compliance and port regulations.
              </p>

              <div className="space-y-4">
                {[
                  { pollutant: "Visible Smoke", reduction: "50-80%", desc: "Cleaner combustion, reduced black smoke plumes" },
                  { pollutant: "Particulate Matter (PM)", reduction: "40-70%", desc: "Lower soot formation and particulates" },
                  { pollutant: "Carbon Monoxide (CO)", reduction: "30-60%", desc: "More complete combustion of fuel" },
                  { pollutant: "Hydrocarbons (HC)", reduction: "25-50%", desc: "Reduced unburnt fuel emissions" },
                  { pollutant: "Nitrogen Oxides (NOx)", reduction: "20-40%", desc: "Lower combustion temperatures" },
                  { pollutant: "Sulfur Oxides (SOx)", reduction: "20-35%", desc: "Better fuel utilization, less sulfur burnt" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
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
                  <strong>Note:</strong> Emission reduction percentages vary based on engine type, fuel quality, operating conditions, and baseline emissions. Stack test verification available.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Port & ECA Compliance</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">ECA Zone Ready</p>
                      <p className="text-sm text-gray-600">Meet stringent emission limits in Emission Control Areas</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Port State Control</p>
                      <p className="text-sm text-gray-600">Reduced visible smoke for port inspections</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">IMO 2050 Pathway</p>
                      <p className="text-sm text-gray-600">50%+ CO₂ reduction toward net-zero target</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">CII Rating Improvement</p>
                      <p className="text-sm text-gray-600">Better Carbon Intensity Indicator scores</p>
                    </div>
                  </div>
                </div>

                <img 
                  src="/api/placeholder/500/300" 
                  alt="Emission Comparison"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vessel Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solutions for Every Vessel Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From coastal ferries to ocean-going cargo ships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* All Large Vessels */}
            <div className="bg-white rounded-2xl p-8 border-2 border-sgt-green shadow-xl">
              <div className="inline-flex px-3 py-1 bg-green-100 rounded-full text-green-800 text-xs font-bold mb-4">
                PROVEN APPLICATIONS
              </div>
              
              <div className="w-16 h-16 bg-sgt-green/10 rounded-xl flex items-center justify-center mb-6">
                <Ship className="w-8 h-8 text-sgt-green" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">All Vessels</h3>
              <p className="text-sm text-sgt-green font-semibold mb-4">Boilers & Auxiliary Engines</p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ship boilers and auxiliary engines on all vessel types — ocean-going to coastal.
              </p>

              <div className="space-y-3 mb-6">
                {["Ship boilers (any fuel)", "Auxiliary generators", "Cargo pumps & compressors", "Hotel load systems"].map((feat, i) => (
                  <div key={i} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-sgt-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-sgt-green text-white py-3 rounded-lg font-medium hover:bg-green-800 transition-all">
                Explore Boiler & Auxiliary Solutions
              </button>
            </div>

            {/* Support Vessels - Main Propulsion */}
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-xl">
              <div className="inline-flex px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-xs font-bold mb-4">
                MAIN PROPULSION - PROVEN
              </div>
              
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Anchor className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Support Vessels</h3>
              <p className="text-sm text-blue-600 font-semibold mb-4">High-RPM Main Propulsion</p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Main propulsion engines and DGs on tugboats, barges, fishing vessels, DP ships, supply vessels.
              </p>

              <div className="space-y-3 mb-6">
                {["Tugboats & barges", "Fishing vessels", "DP (Dynamic Positioning) ships", "Offshore supply vessels"].map((feat, i) => (
                  <div key={i} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all">
                Explore Support Vessel Solutions
              </button>
            </div>

            {/* Large Commercial - Pilot Available */}
            <div className="bg-white rounded-2xl p-8 border-2 border-orange-200">
              <div className="inline-flex px-3 py-1 bg-orange-100 rounded-full text-orange-800 text-xs font-bold mb-4">
                PILOT TESTING AVAILABLE
              </div>
              
              <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <Waves className="w-8 h-8 text-orange-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Large Commercial</h3>
              <p className="text-sm text-orange-600 font-semibold mb-4">2-Stroke Main Propulsion</p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are open to testing HHO impact on 2-stroke HFO main propulsion engines for bulk carriers, container ships, tankers.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-xs text-blue-900 leading-relaxed">
                  <strong>Pilot Partnership:</strong> Not our current focus, but available for vessels interested in testing HHO on large 2-stroke main engines. Contact us to discuss pilot opportunities.
                </p>
              </div>

              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-all">
                Discuss Pilot Opportunity
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DaaS Model - Zero CapEx */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-sgt-green to-green-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16 text-white flex flex-col justify-center">
                <div className="inline-flex px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold mb-6 self-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Marine DaaS Model
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Device-as-a-Service for Marine
                </h2>
                
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  Minimize upfront investment with our marine DaaS model. Small down payment followed by monthly subscription covering system, installation, monitoring, and ongoing support.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Reduced upfront capital requirement",
                    "Down payment + monthly subscription",
                    "Installation & commissioning included",
                    "GreenVision monitoring included",
                    "Maintenance & technical support",
                    "Performance verification via telemetry"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-sgt-yellow mr-3 flex-shrink-0" />
                      <span className="text-white text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
                  <p className="text-sm font-semibold text-sgt-yellow mb-3">Custom Financial Model</p>
                  <p className="text-white leading-relaxed mb-4">
                    Each vessel deployment requires a customized financial model based on:
                  </p>
                  <ul className="space-y-2 text-sm text-green-100">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Vessel type, engine configuration, and operating profile</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Current fuel consumption and baseline efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>System size, installation complexity, and criticality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Support requirements and service level needs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-900/30 rounded-xl p-6 border border-white/20 mb-8">
                  <p className="text-sm font-semibold text-white mb-2">ROI Timeline</p>
                  <p className="text-green-100 text-sm mb-3">
                    Typical return on investment ranges from <span className="text-white font-bold">6 to 36 months</span> depending on vessel operations, fuel consumption, and financial structure.
                  </p>
                  <p className="text-xs text-green-200">
                    Contact us for detailed financial modeling specific to your vessel
                  </p>
                </div>

                <button className="bg-white text-sgt-green px-8 py-4 rounded-lg text-lg font-bold hover:bg-sgt-yellow hover:text-gray-900 transition-all inline-flex items-center self-start">
                  Discuss DaaS Options <ArrowRight className="ml-2" />
                </button>
              </div>

              <div className="relative h-full min-h-[500px]">
                <img 
                  src="/api/placeholder/700/600" 
                  alt="Marine DaaS Model"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Marine Operators Choose SGT
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Positive ROI",
                desc: "6-36 month return on investment depending on vessel type and operations. DaaS model available to reduce upfront costs."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "No Engine Modification",
                desc: "Retrofit installation on air intake. No warranty void. Fully reversible installation if needed."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Comprehensive Emission Cuts",
                desc: "20-80% reduction across pollutants (PM, CO, HC, NOx, SOx, visible smoke). IMO 2050 pathway enabled. CII rating improvement."
              },
              {
                icon: <Fuel className="w-8 h-8" />,
                title: "Any Marine Fuel",
                desc: "HFO, MDO, MGO, Diesel — works with whatever fuel your auxiliaries and boilers are burning today."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Proven Technology",
                desc: "ARAI validated CHFA technology. 3,00,000+ km tested on land. Same proven retrofit approach for marine."
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Verified Savings",
                desc: "GreenVision digital twin monitors every voyage. Real-time fuel tracking. Automated performance reporting."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
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
            Ready to Decarbonize Your Fleet?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join leading marine operators achieving IMO compliance while reducing fuel costs
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all">
              Request Vessel Assessment
            </button>
            <button className="bg-white border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-lg text-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-all">
              Calculate ROI
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">3-12%</p>
              <p className="text-gray-600">Fuel Savings</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">50%+</p>
              <p className="text-gray-600">Emission Reduction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">6-36</p>
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
        .hover\\:bg-sgt-yellow:hover { background-color: #FFD700; }
        .hover\\:text-sgt-yellow:hover { color: #FFD700; }
      `}</style>
    </div>
  );
};

export default MarineSolutionsPage;