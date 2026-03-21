"use client"
// export default GreenVisionPlatformPage;
import React from 'react';
import { Activity, Database, CheckCircle, ArrowRight, Zap, Globe, TrendingUp, FileText, BarChart3, Cloud, Shield, VideoOff } from 'lucide-react';
import Link from 'next/link';


const GreenVisionPlatformPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">GreenVision Platform</h1>
            <p className="text-2xl text-gray-600 mb-6">Digital Twin for Decarbonization</p>
            <p className="text-xl text-gray-600 mb-8">
              Six-layer AI-powered platform with Scope 1, 2 and 3 emissions tracking, BRSR and CBAM compliance.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <p className="font-bold text-green-900 mb-3">Complete ESG Compliance</p>
              <div className="space-y-2 text-sm text-green-800">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Scope 1, 2 and 3 emissions tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>BRSR compliant reporting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>CBAM ready declarations</span>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap gap-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 flex items-center">
                Explore GreenVision <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:border-gray-900">
                View Demo
              </button>
            </div>


            <p className="text-sm text-gray-600 mt-4">
              Visit <strong>greenvision.sgthydroedge.com</strong> for interactive demos and API docs
            </p>
          </div>
        </div>
      </section> */}

      <section className="py-24 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — Text */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-300 rounded-full text-sm font-bold text-green-800 mb-2">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse" />
                AI-POWERED DIGITAL TWIN
              </div>

              <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                GreenVision Platform
              </h1>

              <p className="text-2xl text-[#1B6B3D] font-semibold mb-4">
                Digital Twin for Decarbonisation
              </p>

              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Six-layer AI-powered platform with real-time emissions tracking, predictive
                maintenance, and ESG reporting — across every vertical SGT serves.
              </p>

              <div className="bg-green-50 border-l-4 border-[#1B6B3D] p-6 mb-4">
                <p className="text-sm font-bold text-green-900 mb-3">Complete ESG Compliance</p>
                <div className="space-y-2 text-sm text-green-800">
                  {[
                    "Scope 1, 2 & 3 emissions tracking across all assets",
                    "BRSR compliant reporting — auto-generated",
                    "CBAM-ready declarations for export-facing industries",
                    "Predictive maintenance and baseline normalisation",
                  ].map((item) => (
                    <div key={item} className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="flex flex-wrap gap-4">
                <button className="bg-[#1B6B3D] text-white px-8 py-4 rounded-md hover:bg-[#155730] transition-all font-medium text-lg flex items-center">
                  Explore GreenVision <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:border-[#1B6B3D] hover:text-[#1B6B3D] transition-all font-medium text-lg">
                  View Demo
                </button>
              </div>
              <div className="flex items-center px-8 py-4 text-gray-400 font-medium italic text-lg">
  <VideoOff className="mr-2 w-5 h-5 opacity-50" />
  Video Walkthrough Coming Soon
</div> */}

{/* <div className="relative">
  <button className="opacity-60 bg-white border-2 border-gray-300 text-gray-500 px-8 py-4 rounded-md font-medium text-lg cursor-default">
    Watch Videos
  </button>
  <span className="absolute -top-3 -right-2 bg-sgt-yellow text-gray-900 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
    Coming Soon
  </span>
</div> */}


{/* 
              <p className="text-sm text-gray-500 mt-4">
                Visit <span className="font-medium text-gray-700">greenvision.sgthydroedge.com</span> for interactive demos and API docs
              </p> */}

<button 
  disabled 
  className="bg-gray-100 border-2 border-gray-200 text-gray-400 px-8 py-4 rounded-md font-medium text-lg cursor-not-allowed flex items-center"
>
  Explore GreenVision <span className="ml-2 text-xs uppercase bg-gray-200 px-2 py-1 rounded text-gray-500">Coming Soon</span>
</button>
            </div>

            {/* Right — Image + Floating Stats */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/solutions/greenvision.jpg"
                  alt="GreenVision Platform"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Emissions Tracked</p>
                <p className="text-4xl font-bold text-[#1B6B3D]">Scope</p>
                <p className="text-xs text-gray-500 mt-1">1, 2 & 3</p>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Compliance</p>
                <p className="text-4xl font-bold text-[#FFD700]">ESG</p>
                <p className="text-xs text-gray-500 mt-1">BRSR · CBAM · IMO</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Emissions Tracking</h2>
            <p className="text-xl text-blue-100">Complete visibility across all three emission scopes</p>
          </div>


          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scope 1</h3>
              <p className="text-sm text-blue-100 mb-4">Direct Emissions</p>
              <p className="text-white text-sm">
                Track direct emissions from owned sources - boilers, kilns, furnaces, DG sets, fleet vehicles.
              </p>
            </div>


            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scope 2</h3>
              <p className="text-sm text-blue-100 mb-4">Indirect Energy</p>
              <p className="text-white text-sm">
                Monitor emissions from purchased electricity, steam, heating, and cooling.
              </p>
            </div>


            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scope 3</h3>
              <p className="text-sm text-blue-100 mb-4">Value Chain</p>
              <p className="text-white text-sm">
                Track emissions across your value chain - suppliers, logistics, product use.
              </p>
            </div>
          </div>


          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 inline-block">
              <p className="text-yellow-300 font-bold mb-2">Automated ESG Reporting</p>
              <p className="text-white text-sm">
                Automatically generates BRSR-compliant reports and CBAM declarations
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How GreenVision Captures Your Data</h2>
            <p className="text-xl text-gray-600">Comprehensive data collection using embedded IoT sensors</p>
          </div>


          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-xl mb-12">
            <div className="flex items-start">
              <Activity className="w-12 h-12 text-blue-600 mr-6 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Built-In IoT Sensors in Every SGT System</h3>
                <p className="text-gray-700 mb-4">
                  All SGT HydroEdge systems (CHFA and CHCA) come embedded with IoT sensors that continuously track system performance and health.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    <span>Real-time performance monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    <span>Safety parameter alerts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-red-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Scope 1 Data Capture</h3>
              <p className="text-sm text-gray-600 mb-4">Fuel Consumption Tracking</p>

              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-bold mb-1">Automated:</p>
                  <p className="text-xs">Vehicle fuel sensors, DG meters, boiler fuel meters</p>
                </div>
                <div>
                  <p className="font-bold mb-1">Manual Entry:</p>
                  <p className="text-xs">Direct input, bill upload, spreadsheet import</p>
                </div>
                <div className="bg-red-50 rounded p-2 text-xs">
                  <strong>Sensor Agnostic:</strong> Works with any IoT fuel sensor
                </div>
              </div>
            </div>


            <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Scope 2 Data Capture</h3>
              <p className="text-sm text-gray-600 mb-4">Electricity and Power Tracking</p>

              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-bold mb-1">External Sensors:</p>
                  <p className="text-xs">Smart meters, energy systems, sub-metering</p>
                </div>
                <div>
                  <p className="font-bold mb-1">Integration:</p>
                  <p className="text-xs">Modbus/API connectivity, manual billing upload</p>
                </div>
                <div className="bg-orange-50 rounded p-2 text-xs">
                  <strong>Flexible:</strong> Works with existing infrastructure
                </div>
              </div>
            </div>


            <div className="bg-white border-2 border-yellow-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Scope 3 Data Capture</h3>
              <p className="text-sm text-gray-600 mb-4">Logistics and Operations</p>

              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-bold mb-1">Primary Focus:</p>
                  <p className="text-xs">Fleet fuel, transportation, logistics tracking</p>
                </div>
                <div>
                  <p className="font-bold mb-1">Sensors:</p>
                  <p className="text-xs">SGT-authorized sensors, manual entry available</p>
                </div>
                <div className="bg-yellow-50 rounded p-2 text-xs">
                  <strong>Expanding:</strong> All 15 GHG Protocol categories
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Custom Digital Twin Creation</h2>
            <p className="text-xl text-gray-600">From single assets to entire ecosystems</p>
          </div>


          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-2xl font-bold text-sgt-green mb-4">01</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Asset-Level</h3>
              <p className="text-sm text-gray-600">
                Individual CHFA/CHCA systems, DG sets, boilers, kilns, vehicles - each with dedicated monitoring and health tracking.
              </p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-2xl font-bold text-sgt-green mb-4">02</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Factory-Level</h3>
              <p className="text-sm text-gray-600">
                Entire plant operations - aggregate fuel consumption, emission tracking, production correlation, baseline normalization.
              </p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-2xl font-bold text-sgt-green mb-4">03</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ecosystem-Level</h3>
              <p className="text-sm text-gray-600">
                Multi-site operations, logistics network, supply chain - comprehensive view with consolidated ESG reporting.
              </p>
            </div>
          </div>


          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <p className="font-bold text-blue-900 mb-2">Beyond Decarbonization</p>
            <p className="text-sm text-blue-800">
              Our tech team can extend your digital twin into a full-fledged SCADA system - integrating operational monitoring, process control, and real-time decision support.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Six-Layer AI-Powered Architecture</h2>
            <p className="text-xl text-gray-600">Enterprise-grade platform built for scale and reliability</p>
          </div>


          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Layer 1</span>
                <Activity className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">IoT Data Collection</h3>
              <p className="text-sm text-gray-600">Real-time telemetry from CHFA/CHCA systems, sensors, and meters.</p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Layer 2</span>
                <Database className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Data Processing</h3>
              <p className="text-sm text-gray-600">Time-series databases with industrial-grade retention and backup.</p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Layer 3</span>
                <BarChart3 className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Baseline Normalization</h3>
              <p className="text-sm text-gray-600">AI algorithms establish accurate baselines for load and weather.</p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Layer 4</span>
                <TrendingUp className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Predictive Analytics</h3>
              <p className="text-sm text-gray-600">ML models predict maintenance needs and optimize performance.</p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Layer 5</span>
                <FileText className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">ESG Reporting</h3>
              <p className="text-sm text-gray-600">Automated BRSR and CBAM reports with audit trails.</p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Layer 6</span>
                <Cloud className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">API Integration</h3>
              <p className="text-sm text-gray-600">RESTful APIs for ERP/SCADA integration and webhooks.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Automated ESG Compliance</h2>
              <p className="text-xl text-gray-600 mb-8">
                GreenVision automates ESG reporting for SEBI BRSR framework and EU CBAM regulations.
              </p>


              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <h3 className="font-bold text-gray-900 mb-2">BRSR Compliance</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Mandatory for top 1,000 listed companies in India. Automatically populates Section C (Principle 6).
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                      <span>Scope 1, 2 and 3 GHG emissions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                      <span>Intensity metrics per turnover</span>
                    </li>
                  </ul>
                </div>


                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <h3 className="font-bold text-gray-900 mb-2">CBAM Ready</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    EU regulation for embedded emissions in imports (steel, cement, aluminum). Effective 2026.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                      <span>Product-level emissions calculation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                      <span>Quarterly CBAM declarations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Automated Compliance Matters</h3>
              <p className="text-gray-700 mb-6">
                Manual ESG reporting is time-consuming and error-prone. GreenVision eliminates 90%+ of manual effort by automatically collecting, calculating, and formatting data.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="font-bold text-gray-900 mb-3">On-Demand Reporting</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-sgt-green mr-2" />
                    <span>Real-time dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-sgt-green mr-2" />
                    <span>BRSR compliance reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-sgt-green mr-2" />
                    <span>CBAM declarations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-sgt-green mr-2" />
                    <span>Executive summaries</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Explore the Full GreenVision Platform</h2>
          <p className="text-xl text-gray-300 mb-12">
            Visit our dedicated subsite for interactive demos, API documentation, and technical specifications
          </p>


          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Activity className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Interactive Demo</h3>
              <p className="text-sm text-gray-300">Live dashboards with sample industrial data</p>
            </div>


            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Cloud className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">API Documentation</h3>
              <p className="text-sm text-gray-300">Complete reference with code examples</p>
            </div>


            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <FileText className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Technical Deep Dive</h3>
              <p className="text-sm text-gray-300">Architecture diagrams and data models</p>
            </div>
          </div>

{/* 
          <a
            href="https://greenvision.sgthydroedge.com"
            className="inline-flex items-center bg-yellow-400 text-gray-900 px-12 py-5 rounded-lg text-xl font-bold hover:bg-yellow-300"
          >
            Visit greenvision.sgthydroedge.com <ArrowRight className="ml-3 w-6 h-6" />
          </a> */}
        </div>
      </section>


      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Deploy GreenVision?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our team to discuss platform deployment and integration
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href='/contact' className="bg-gray-900 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-800">
              Request Platform Demo
            </Link>
            {/* <Link href='/resources/downloads' className="bg-white border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg text-lg font-bold hover:border-gray-900">
              Download Overview
            </Link> */}
          </div>
        </div>
      </section>

      <style>{`
        .text-sgt-green { color: #1B6B3D; }
        .bg-sgt-green { background-color: #1B6B3D; }
      `}</style>
    </div>
  );
};

export default GreenVisionPlatformPage;