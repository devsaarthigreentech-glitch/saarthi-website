"use client"
import React from 'react';
import { Activity, Database, TrendingUp, Shield, CheckCircle, ArrowRight, Globe, FileText, Zap, BarChart3, Cloud } from 'lucide-react';

const GreenVisionPlatformPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-gray-600">
            <a href="/" className="hover:text-sgt-green">Home</a> / <a href="/technology" className="hover:text-sgt-green">Technology</a> / <span className="text-gray-900 font-medium">GreenVision Platform</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-bold text-blue-800 mb-6">
                <Database className="w-4 h-4 mr-2" />
                AI-POWERED IoT DIGITAL TWIN
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                GreenVision Platform
              </h1>
              
              <p className="text-2xl text-gray-600 font-semibold mb-6">
                Digital Twin for Decarbonization
              </p>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Six-layer AI-powered platform that creates a digital twin of your decarbonization systems. Real-time monitoring, predictive analytics, automated ESG reporting, and verified Scope 1, 2 and 3 emissions tracking.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                <p className="text-sm font-bold text-green-900 mb-3">Complete ESG Compliance Platform</p>
                <div className="space-y-2 text-sm text-green-800">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Scope 1, 2 and 3 emissions tracking and verification</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>BRSR (Business Responsibility and Sustainability Report) compliant</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>CBAM (Carbon Border Adjustment Mechanism) ready</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>API access for enterprise integration</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-all font-medium text-lg flex items-center">
                  Explore GreenVision Subsite <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:border-gray-900 hover:text-gray-900 transition-all font-medium text-lg">
                  View Interactive Demo
                </button>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                <p>Visit <strong>greenvision.sgthydroedge.com</strong> for interactive demos, API documentation, and technical details</p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/api/placeholder/800/600" 
                  alt="GreenVision Platform Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Architecture</p>
                <p className="text-4xl font-bold text-gray-900">6-Layer</p>
                <p className="text-xs text-gray-500 mt-1">AI-Powered</p>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Monitoring</p>
                <p className="text-4xl font-bold text-sgt-green">Real-Time</p>
                <p className="text-xs text-gray-500 mt-1">24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope 1, 2, 3 Emissions Tracking */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Comprehensive Emissions Tracking
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Complete visibility across all three emission scopes with automated verification and reporting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Scope 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Scope 1</h3>
              <p className="text-sm text-blue-100 font-semibold mb-4">Direct Emissions</p>
              <p className="text-white mb-6 leading-relaxed">
                Track direct emissions from owned or controlled sources - boilers, kilns, furnaces, DG sets, and fleet vehicles.
              </p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fuel consumption monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Emission factor calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Baseline vs actual tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Reduction verification</span>
                </li>
              </ul>
            </div>

            {/* Scope 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Scope 2</h3>
              <p className="text-sm text-blue-100 font-semibold mb-4">Indirect Energy Emissions</p>
              <p className="text-white mb-6 leading-relaxed">
                Monitor indirect emissions from purchased electricity, steam, heating, and cooling consumed by your operations.
              </p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Grid electricity tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Regional emission factors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Renewable energy credits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Location-based accounting</span>
                </li>
              </ul>
            </div>

            {/* Scope 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Scope 3</h3>
              <p className="text-sm text-blue-100 font-semibold mb-4">Value Chain Emissions</p>
              <p className="text-white mb-6 leading-relaxed">
                Track upstream and downstream emissions across your entire value chain - suppliers, logistics, product use.
              </p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Supply chain emissions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Transportation and distribution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Waste and end-of-life</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>15 GHG Protocol categories</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 inline-block">
              <p className="text-sgt-yellow font-bold mb-2">Automated ESG Reporting</p>
              <p className="text-white text-sm">
                GreenVision automatically generates BRSR-compliant reports and CBAM declarations from verified emissions data
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .text-sgt-green { color: #1B6B3D; }
        .bg-sgt-green { background-color: #1B6B3D; }
        .text-sgt-yellow { color: #FFD700; }
        .bg-sgt-yellow { background-color: #FFD700; }
        .hover\\:text-sgt-green:hover { color: #1B6B3D; }
        .hover\\:bg-sgt-yellow:hover { background-color: #FFD700; }
      `}</style>

      {/* How Data is Generated & Captured */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How GreenVision Captures Your Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data collection across all emission scopes using embedded IoT sensors and flexible integration
            </p>
          </div>

          {/* Embedded IoT Sensors */}
          <div className="mb-16 bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-2xl">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Built-In IoT Sensors in Every SGT System</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  All SGT HydroEdge systems (CHFA and CHCA) come embedded with IoT sensors that continuously track system performance and health.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Real-time system performance monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Component health tracking</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Safety parameter monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Telemetry data for verification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Scope-Specific Data Capture */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Scope 1 */}
            <div className="bg-white border-2 border-red-200 rounded-2xl p-6">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scope 1 Data</h3>
              <p className="text-sm text-gray-600 mb-4">Direct Emissions - Fuel Tracking</p>
              
              <div className="space-y-3 text-xs text-gray-600">
                <p className="font-bold text-gray-900">Automated Integration:</p>
                <p>Vehicle fuel sensors, DG set meters, boiler/kiln fuel meters</p>
                
                <p className="font-bold text-gray-900 mt-3">Manual Entry:</p>
                <p>Direct input, bill upload, spreadsheet import</p>
                
                <div className="bg-red-50 rounded p-2 mt-3">
                  <p className="text-red-900"><strong>Sensor Agnostic:</strong> Any IoT fuel sensor supported</p>
                </div>
              </div>
            </div>

            {/* Scope 2 */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-6">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scope 2 Data</h3>
              <p className="text-sm text-gray-600 mb-4">Indirect Energy - Power Tracking</p>
              
              <div className="space-y-3 text-xs text-gray-600">
                <p className="font-bold text-gray-900">External Sensors:</p>
                <p>Smart meters, energy management systems, building automation, sub-metering</p>
                
                <p className="font-bold text-gray-900 mt-3">Integration:</p>
                <p>Modbus/API connectivity, manual billing upload</p>
                
                <div className="bg-orange-50 rounded p-2 mt-3">
                  <p className="text-orange-900"><strong>Flexible:</strong> Works with existing infrastructure</p>
                </div>
              </div>
            </div>

            {/* Scope 3 */}
            <div className="bg-white border-2 border-yellow-200 rounded-2xl p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scope 3 Data</h3>
              <p className="text-sm text-gray-600 mb-4">Value Chain - Logistics</p>
              
              <div className="space-y-3 text-xs text-gray-600">
                <p className="font-bold text-gray-900">Primary Focus:</p>
                <p>Fleet fuel consumption, transportation emissions, logistics tracking</p>
                
                <p className="font-bold text-gray-900 mt-3">Sensors:</p>
                <p>SGT-authorized sensors preferred, manual entry available</p>
                
                <div className="bg-yellow-50 rounded p-2 mt-3">
                  <p className="text-yellow-900"><strong>Expanding:</strong> All 15 GHG categories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .text-sgt-green { color: #1B6B3D; }
        .bg-sgt-green { background-color: #1B6B3D; }
        .text-sgt-yellow { color: #FFD700; }
        .bg-sgt-yellow { background-color: #FFD700; }
        .hover\\:text-sgt-green:hover { color: #1B6B3D; }
        .hover\\:bg-sgt-yellow:hover { background-color: #FFD700; }
      `}</style>
    </div>
  );
};

export default GreenVisionPlatformPage;