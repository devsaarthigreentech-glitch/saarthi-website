// CHCA Technology Page - Part 1: Hero + Why Industrial Scale is Different
"use client"
import React from 'react';
import { Factory, Flame, CheckCircle, Award, Settings, Shield, Database, TrendingUp, ArrowRight, Zap, AlertCircle } from 'lucide-react';

const CHCATechnologyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-gray-600">
            <a href="/" className="hover:text-sgt-green">Home</a> / <a href="/technology" className="hover:text-sgt-green">Technology</a> / <span className="text-gray-900 font-medium">CHCA Technology</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 border border-orange-300 rounded-full text-sm font-bold text-orange-800 mb-6">
                <Factory className="w-4 h-4 mr-2" />
                INDUSTRIAL-SCALE TECHNOLOGY
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                CHCA Technology
              </h1>
              
              <p className="text-2xl text-orange-600 font-semibold mb-6">
                Controlled Hydrogen Combustion Assist
              </p>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Industrial-scale HHO generation starting from 3,600 LPH per module. Patent-applied wet cell technology - the first industrial-scale system developed outside China using Indian engineering.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-sm font-bold text-blue-900 mb-3">Breakthrough Indigenous Technology</p>
                <div className="space-y-2 text-sm text-blue-800">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>First industrial-scale HHO system developed in India</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Patent-applied wet cell architecture for superior safety & efficiency</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Fully digitally connected with PLC, SCADA & IoT integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Fuel-agnostic: coal, biomass, gas, oil - any combustion fuel</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-md hover:bg-orange-700 transition-all font-medium text-lg flex items-center">
                  Download Technical Whitepaper <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:border-orange-600 hover:text-orange-600 transition-all font-medium text-lg">
                  Request Engineering Consultation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/api/placeholder/800/600" 
                  alt="CHCA Industrial System"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Base Capacity</p>
                <p className="text-4xl font-bold text-orange-600">3,600</p>
                <p className="text-xs text-gray-500 mt-1">LPH per module</p>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Scalable to</p>
                <p className="text-4xl font-bold text-sgt-green">20K+</p>
                <p className="text-xs text-gray-500 mt-1">LPH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industrial Scale is Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Industrial Scale is Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CHCA requires fundamentally different engineering than automotive CHFA systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-200">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High-Volume Generation</h3>
              <p className="text-gray-600 mb-4">
                3,600+ LPH per module vs. 150-3000 ml/min for engines. Industrial boilers and kilns require sustained high-volume HHO production.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2 mt-2"></span>
                  <span>Modular 3,600 LPH base units (0-3,600 LPH per module)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2 mt-2"></span>
                  <span>Scalable to 20,000+ LPH per installation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2 mt-2"></span>
                  <span>Case-by-case capacity customization possible</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Duty 24/7</h3>
              <p className="text-gray-600 mb-4">
                Industrial equipment runs continuously for months. Requires robust thermal management and automated operation.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2"></span>
                  <span>24/7/365 continuous operation capability</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2"></span>
                  <span>Advanced PLC-based automation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2"></span>
                  <span>Industrial-duty thermal buffering</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Integration</h3>
              <p className="text-gray-600 mb-4">
                Full SCADA and DCS integration. IoT-enabled digital twin via GreenVision platform for remote monitoring and control.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2"></span>
                  <span>SCADA/DCS integration ready</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2"></span>
                  <span>GreenVision digital twin included</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2"></span>
                  <span>Real-time performance analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wet Cell Technology Advantage */}
      <section className="py-20 bg-gradient-to-br from-sgt-green to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex px-4 py-2 bg-white/20 rounded-full text-white text-sm font-bold mb-6">
                <Award className="w-4 h-4 mr-2" />
                Patent-Applied Technology
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Wet Cell Architecture: Safer & More Efficient
              </h2>
              
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                SGT's patent-applied wet cell (immersed-electrode) technology delivers superior performance, safety, and reliability compared to conventional dry cell designs commonly used in smaller systems.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "25-40% more active electrode surface area",
                  "Superior thermal management with inherent buffering",
                  "Efficient bubble dynamics - no gas slug formation",
                  "Lower maintenance - no gasket degradation",
                  "Scales economically to 20,000+ LPH capacity",
                  "Aligned with global industrial electrolyser practice"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-sgt-yellow mr-3 flex-shrink-0" />
                    <span className="text-lg text-white">{point}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
                <p className="text-sm font-semibold text-sgt-yellow mb-3">Indigenous Engineering Achievement</p>
                <p className="text-white leading-relaxed mb-4">
                  SGT HydroEdge has developed the first industrial-scale wet cell HHO generation system outside China. Our engineering team in Pune has created a safer, more efficient alternative to dry cell technology - validated through extensive testing and proven in industrial deployments.
                </p>
                <p className="text-green-100 text-sm">
                  Global industrial electrolyser manufacturers (thyssenkrupp, NEL, McPhy, INEOS) all use immersed-electrode (wet cell) architecture for the same engineering reasons: superior thermal management, electrode utilisation, and reliability at scale.
                </p>
              </div>

              <button className="bg-white text-sgt-green px-8 py-4 rounded-lg text-lg font-bold hover:bg-sgt-yellow hover:text-gray-900 transition-all flex items-center">
                Download Wet Cell Engineering Whitepaper <ArrowRight className="ml-2" />
              </button>
            </div>

            <div>
              <img 
                src="/api/placeholder/600/500" 
                alt="Wet Cell Technology"
                className="w-full rounded-xl shadow-2xl"
              />
              
              <div className="mt-6 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-3">Key Technical Advantages</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-green-100">
                  <div>
                    <p className="font-semibold text-white mb-1">Efficiency</p>
                    <p>2.72 kWh/m³ HHO</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Operating Temp</p>
                    <p>60-85°C optimal</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Pressure</p>
                    <p>&lt; 0.1 bar gauge</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Service Life</p>
                    <p>10,000+ hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Agnostic */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Works With Any Combustion Fuel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CHCA is fuel-agnostic - enhances combustion regardless of fuel type
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { category: "Solid Fuels", fuels: ["Coal", "Biomass", "Pet Coke", "Wood"], color: "gray" },
              { category: "Gaseous Fuels", fuels: ["Natural Gas", "CNG", "Propane", "LPG"], color: "blue" },
              { category: "Liquid Fuels", fuels: ["Diesel", "LDO", "HFO", "MDO"], color: "orange" },
              { category: "Multi-Fuel", fuels: ["Combined", "Switchable", "Blend", "Hybrid"], color: "green" }
            ].map((group, idx) => (
              <div key={idx} className={`bg-${group.color}-50 rounded-xl p-6 border border-${group.color}-200`}>
                <h4 className="font-bold text-gray-900 mb-4">{group.category}</h4>
                <ul className="space-y-2">
                  {group.fuels.map((fuel, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <Flame className="w-4 h-4 text-orange-600 mr-2" />
                      <span>{fuel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
            <p className="text-gray-900">
              <strong>No Fuel Switching Required:</strong> CHCA enhances your existing combustion system without changing fuels or replacing burners. Custom engineered for your specific fuel type and combustion equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              CHCA Industrial Applications
            </h2>
            <p className="text-xl text-gray-600">
              Custom-engineered systems for boilers, kilns, and smelters
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Boilers */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="inline-flex px-3 py-1 bg-orange-100 rounded-full text-orange-800 text-xs font-bold mb-4">
                PILOT PHASE
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Industrial Boilers</h3>
              <p className="text-gray-600 mb-6">
                Steam and process heat generation. Any fuel type - coal, biomass, gas, oil.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-xs text-blue-900">
                  <strong>Status:</strong> Custom engineering required per boiler type and fuel. Pilot partnerships available.
                </p>
              </div>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-all">
                View Boiler Solutions
              </button>
            </div>

            {/* Kilns */}
            <div className="bg-white border-2 border-red-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="inline-flex px-3 py-1 bg-red-100 rounded-full text-red-800 text-xs font-bold mb-4">
                DEVELOPMENT PHASE
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Industrial Kilns</h3>
              <p className="text-gray-600 mb-6">
                Cement, ceramic, glass kilns. Coal, pet coke, gas, LPG applications.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-xs text-blue-900">
                  <strong>Status:</strong> High-volume systems under development. Early partnerships available for validation testing.
                </p>
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-all">
                View Kiln Solutions
              </button>
            </div>

            {/* Smelters */}
            <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="inline-flex px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-xs font-bold mb-4">
                PILOT PHASE
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Smelters & Furnaces</h3>
              <p className="text-gray-600 mb-6">
                Gas-fired reverberatory and rotary furnaces for metal recycling.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-xs text-blue-900">
                  <strong>Status:</strong> Gas-fired furnaces only (CNG, LPG, propane, natural gas). Custom engineering per application.
                </p>
              </div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-all">
                View Smelter Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PLC & SCADA Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Industrial Control & Monitoring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for seamless integration with industrial control systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* PLC Control */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">PLC-Based Automation</h3>
              <p className="text-gray-600 mb-6">
                Industrial-grade programmable logic controller manages all system functions with multiple safety interlocks and automated operation.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automatic water level control and refill</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Temperature monitoring with thermal protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pressure sensing and safety shutdown</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Hydrogen leak detection with latching fault</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Flame arrestor integrity monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Modbus RTU/TCP communication</span>
                </li>
              </ul>
            </div>

            {/* SCADA/DCS Integration */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SCADA/DCS Integration</h3>
              <p className="text-gray-600 mb-6">
                Ready for integration with existing plant control systems. Standard industrial protocols supported.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Modbus RTU/TCP for SCADA connectivity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>4-20mA analog outputs for legacy systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Digital I/O for emergency shutdown integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Real-time status monitoring and data logging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Alarm forwarding to plant DCS</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom protocol support available</span>
                </li>
              </ul>
            </div>
          </div>

          {/* GreenVision Digital Twin */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex px-4 py-2 bg-white/20 rounded-full text-white text-sm font-bold mb-6">
                  <Database className="w-4 h-4 mr-2" />
                  IoT Digital Twin
                </div>
                <h3 className="text-3xl font-bold mb-6">GreenVision Digital Twin Platform</h3>
                <p className="text-xl text-gray-300 mb-8">
                  Every CHCA installation includes IoT connectivity to the GreenVision platform - your digital twin for complete system visibility and performance analytics.
                </p>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-sgt-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span>Real-time system monitoring from anywhere</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-sgt-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span>Predictive maintenance alerts and diagnostics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-sgt-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span>Performance analytics and baseline trending</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-sgt-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span>Automated ESG reporting (BRSR, CBAM compliant)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-sgt-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span>Mobile app for plant operators</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-sgt-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span>Historical data archival and reporting</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="/api/placeholder/500/400" 
                  alt="GreenVision Dashboard"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Safety by Design
            </h2>
            <p className="text-xl text-gray-600">
              Multiple redundant safety systems for industrial environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Low-Pressure Operation",
                desc: "< 0.1 bar gauge - near atmospheric pressure eliminates high-pressure explosion risk. Pressure relief valves prevent over-pressurization."
              },
              {
                icon: <AlertCircle className="w-8 h-8" />,
                title: "Hydrogen Leak Detection",
                desc: "Opto-isolated sensors continuously monitor for hydrogen leaks. Immediate shutdown with latching fault requires manual reset."
              },
              {
                icon: <Flame className="w-8 h-8" />,
                title: "Flame Arrestors",
                desc: "Industrial-grade flame arrestors on all gas outlets prevent flashback into the generation system."
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "PLC Safety Interlocks",
                desc: "Multiple safety checks before startup. Continuous monitoring during operation with automatic shutdown on fault conditions."
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Thermal Protection",
                desc: "Temperature sensors with automatic shutdown if operating limits exceeded. Thermal buffering prevents hot spots."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Water Level Management",
                desc: "Automatic water level monitoring with low-level shutdown. PLC-controlled refill system maintains optimal levels."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-600 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-4 text-red-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
            <div className="flex items-start">
              <Shield className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-red-900 mb-2">Industrial Safety Standards</p>
                <p className="text-sm text-red-800">
                  CHCA systems are designed for industrial safety compliance with multiple redundant safety layers. Every installation undergoes thorough safety review and commissioning validation before commercial operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Engineering Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Custom Engineering Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every industrial installation is unique - CHCA systems are custom-designed for your specific application
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Site Assessment",
                desc: "Analyze combustion system, fuel type, capacity, and operating parameters. Engineering team conducts detailed technical evaluation.",
                color: "orange"
              },
              {
                step: "2",
                title: "System Design",
                desc: "Custom HHO generation capacity sizing, integration points design, control strategy, and SCADA interface specification.",
                color: "blue"
              },
              {
                step: "3",
                title: "Installation & Commissioning",
                desc: "Complete turnkey installation with SCADA/DCS integration, operator training, and performance validation testing.",
                color: "green"
              },
              {
                step: "4",
                title: "Performance Validation",
                desc: "GreenVision monitoring validates fuel savings and emission reduction. Ongoing optimization support provided.",
                color: "purple"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className={`bg-gradient-to-br from-${item.color}-50 to-white rounded-xl p-6 border-2 border-${item.color}-200 h-full`}>
                  <div className={`w-12 h-12 bg-${item.color}-600 rounded-full flex items-center justify-center mb-4`}>
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-orange-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Custom Engineering is Essential</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-700 mb-4">
                  Unlike automotive CHFA systems which can be standardized, industrial CHCA installations must account for:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Combustion system type and design (boiler, kiln, furnace)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Fuel type and characteristics (coal, gas, biomass, oil)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Operating capacity and load profile</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Existing control systems and integration requirements</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-4">
                  Our engineering team designs each installation to deliver optimal performance for your specific conditions:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>HHO generation capacity matched to combustion load</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Injection point design for maximum combustion enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Control logic integration with existing automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Performance monitoring and verification methodology</span>
                  </li>
                </ul>
              </div>
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
            <p className="text-xl text-gray-600">Base 3,600 LPH module specifications</p>
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
                    { param: "HHO Generation Capacity", spec: "3,600 LPH per module (0-3,600 LPH variable)" },
                    { param: "Modular Scalability", spec: "Multiple modules to 20,000+ LPH per installation" },
                    { param: "Power Supply", spec: "380-415V AC, 3-phase, 50Hz" },
                    { param: "Power Consumption", spec: "~9.8 kW per 3,600 LPH module" },
                    { param: "Specific Energy Consumption", spec: "2.72 kWh/m³ HHO (actual gas)" },
                    { param: "Operating Temperature", spec: "60-85°C optimal range" },
                    { param: "Operating Pressure", spec: "< 0.1 bar gauge (near atmospheric)" },
                    { param: "Electrolyte", spec: "Potassium hydroxide (KOH) in DM water" },
                    { param: "Cell Configuration", spec: "4S5P (4 series × 5 parallel), 6 cells per electrolyser" },
                    { param: "Cell Architecture", spec: "Wet cell (immersed-electrode), polymeric casing" },
                    { param: "Control System", spec: "Industrial PLC with HMI touchscreen" },
                    { param: "Communication Protocols", spec: "Modbus RTU/TCP, 4-20mA, digital I/O" },
                    { param: "Safety Features", spec: "H₂ leak detection, flame arrestors, pressure relief, thermal protection" },
                    { param: "IoT Connectivity", spec: "GreenVision digital twin platform included" },
                    { param: "Service Life", spec: "10,000+ hours continuous operation" },
                    { param: "Maintenance", spec: "Water refill periodic, electrode inspection annual" },
                    { param: "Certifications", spec: "CE, UL, RoHS, ISO 9001:2015" }
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
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition-all inline-flex items-center">
              Download Complete Technical Datasheet <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Deploy Industrial-Scale CHCA?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Contact our engineering team to discuss your industrial decarbonization requirements
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-orange-600 text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-orange-700 transition-all flex items-center">
              Request Engineering Consultation <ArrowRight className="ml-2" />
            </button>
            <button className="bg-white border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-lg text-lg font-bold hover:border-orange-600 hover:text-orange-600 transition-all">
              Download Technical Documentation
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-orange-600 mb-2">3,600+</p>
              <p className="text-gray-600">LPH per module</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-600 mb-2">20K+</p>
              <p className="text-gray-600">LPH scalability</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-600 mb-2">24/7</p>
              <p className="text-gray-600">Continuous duty</p>
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
      `}</style>
    </div>
  );
};

export default CHCATechnologyPage;