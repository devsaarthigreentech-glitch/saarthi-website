"use client"
import React from 'react';
import { Microscope, Cog, Award, CheckCircle, ArrowRight, Lightbulb, Shield, FlaskConical, Zap, FileCheck, Boxes, TrendingUp } from 'lucide-react';

const GreenLabsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-gray-600">
            <a href="/" className="hover:text-sgt-green">Home</a> / <a href="/ecosystem" className="hover:text-sgt-green">Ecosystem</a> / <span className="text-gray-900 font-medium">GreenLabs</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              <Microscope className="w-4 h-4 mr-2" />
              R&D | DESIGN | MANUFACTURING
            </div>
            
            <h1 className="text-5xl font-bold mb-6 leading-tight">GreenLabs</h1>
            <p className="text-2xl text-blue-100 font-semibold mb-6">
              Where Innovation Meets Industrial Reality
            </p>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Our R&D-driven core: design, engineering, testing, manufacturing, quality control, and continuous innovation. GreenLabs is where ideas transform into proven, industrial-grade decarbonization technology.
            </p>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 mb-8">
              <p className="font-bold text-white mb-3">Our Foundation</p>
              <p className="text-blue-100">
                R&D-driven company focused on profitable decarbonization. We stand behind our technology because we design it, test it, manufacture it, and validate it - all in-house at GreenLabs.
              </p>
            </div>

            <button className="bg-white text-blue-900 px-8 py-4 rounded-md hover:bg-blue-50 font-medium text-lg flex items-center">
              Schedule Lab Visit <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* What is GreenLabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Heart of SGT HydroEdge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GreenLabs is our integrated R&D and manufacturing facility where every SGT product is conceived, developed, tested, and produced
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete In-House Capability</h3>
              <p className="text-gray-700 mb-4">
                From initial concept to final production unit, everything happens under one roof. This integration ensures rapid iteration, quality control, and the ability to innovate without external dependencies.
              </p>
              <p className="text-gray-700 mb-6">
                We are not assemblers or resellers - we are creators. Every electrode design, every control algorithm, every material choice is made by our engineering team based on rigorous testing and validation.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <Lightbulb className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="font-bold text-gray-900">Design & Engineering</p>
                  <p className="text-xs text-gray-600 mt-1">Concept to CAD</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <FlaskConical className="w-8 h-8 text-green-600 mb-2" />
                  <p className="font-bold text-gray-900">Testing & Validation</p>
                  <p className="text-xs text-gray-600 mt-1">Lab to field trials</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <Cog className="w-8 h-8 text-orange-600 mb-2" />
                  <p className="font-bold text-gray-900">Manufacturing</p>
                  <p className="text-xs text-gray-600 mt-1">Prototype to production</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <Shield className="w-8 h-8 text-purple-600 mb-2" />
                  <p className="font-bold text-gray-900">Quality Control</p>
                  <p className="text-xs text-gray-600 mt-1">100% inspection</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="font-bold text-gray-900 mb-6">What GreenLabs Encompasses:</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">R&D Laboratory</p>
                    <p className="text-sm text-gray-600">Materials research, electrochemistry, hydrogen generation optimization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">Design Engineering</p>
                    <p className="text-sm text-gray-600">CAD modeling, system architecture, control system development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">Testing Facility</p>
                    <p className="text-sm text-gray-600">Performance testing, durability trials, safety validation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">Manufacturing Unit</p>
                    <p className="text-sm text-gray-600">Production assembly, quality control, final inspection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">Certification Lab</p>
                    <p className="text-sm text-gray-600">ARAI collaboration, CE/UL testing, compliance validation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">Pilot Production</p>
                    <p className="text-sm text-gray-600">Small-batch trials, customer POCs, field testing coordination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              R&D-Driven Innovation
            </h2>
            <p className="text-xl text-gray-600">
              Continuous research, rigorous testing, real-world validation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
              <Microscope className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research Focus</h3>
              <p className="text-gray-700 mb-4">
                Deep dive into electrochemistry, materials science, and hydrogen generation efficiency. Our R&D team explores both incremental improvements and breakthrough innovations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Electrode material optimization</li>
                <li>• Electrolyte chemistry research</li>
                <li>• Thermal management studies</li>
                <li>• Gas purity enhancement</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
              <FlaskConical className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Validation Protocol</h3>
              <p className="text-gray-700 mb-4">
                Every design goes through rigorous validation before production. Lab testing, endurance trials, safety verification, and field pilots ensure proven performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 1,000+ hour durability testing</li>
                <li>• Safety scenario simulations</li>
                <li>• Performance benchmarking</li>
                <li>• Real-world pilot deployments</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
              <FileCheck className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patent Portfolio</h3>
              <p className="text-gray-700 mb-4">
                We protect our innovations through patent filings. Our intellectual property portfolio covers system design, control methods, and manufacturing processes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Wet cell architecture (patent applied)</li>
                <li>• Control algorithms</li>
                <li>• Safety systems</li>
                <li>• Manufacturing methods</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why R&D Matters for Customers</h3>
            <p className="text-gray-700 mb-4">
              Our R&D investment directly benefits you. Every efficiency gain we discover in the lab translates to fuel savings in your operations. Every durability enhancement means lower maintenance costs. Every safety improvement means peace of mind.
            </p>
            <p className="text-gray-700">
              <strong>We don't just sell technology - we continuously improve it.</strong> When you deploy SGT systems, you benefit from ongoing R&D advancements through software updates, design refinements, and next-generation upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Excellence
            </h2>
            <p className="text-xl text-gray-600">
              From prototype to production - quality at every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Production Capability</h3>
              <p className="text-gray-700 mb-6">
                Our manufacturing facility is designed for both flexibility and scale. We can produce custom pilot units for trials and ramp up to volume production for deployments.
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Boxes className="w-6 h-6 text-sgt-green mr-3" />
                    <h4 className="font-bold text-gray-900">Modular Manufacturing</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Standardized modules for CHFA/CHCA systems enable efficient production while maintaining quality consistency.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="w-6 h-6 text-sgt-green mr-3" />
                    <h4 className="font-bold text-gray-900">Quality Control</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    100% inspection protocol - every unit tested before shipment. Performance verification, leak testing, safety checks.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Cog className="w-6 h-6 text-sgt-green mr-3" />
                    <h4 className="font-bold text-gray-900">Custom Engineering</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ability to customize systems for specific applications - tailored capacity, integration requirements, environmental conditions.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Standards</h3>
              <p className="text-gray-700 mb-6">
                We adhere to international quality and safety standards. Our manufacturing processes are ISO-certified and our products meet CE, UL, and RoHS requirements.
              </p>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
                <h4 className="font-bold mb-4">Certifications & Compliance</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Award className="w-8 h-8 text-sgt-yellow mb-2" />
                    <p className="font-bold">ISO 9001:2015</p>
                    <p className="text-gray-300 text-xs">Quality Management</p>
                  </div>
                  <div>
                    <Award className="w-8 h-8 text-sgt-yellow mb-2" />
                    <p className="font-bold">CE Certified</p>
                    <p className="text-gray-300 text-xs">European Standards</p>
                  </div>
                  <div>
                    <Award className="w-8 h-8 text-sgt-yellow mb-2" />
                    <p className="font-bold">UL Listed</p>
                    <p className="text-gray-300 text-xs">Safety Standards</p>
                  </div>
                  <div>
                    <Award className="w-8 h-8 text-sgt-yellow mb-2" />
                    <p className="font-bold">RoHS Compliant</p>
                    <p className="text-gray-300 text-xs">Environmental Safety</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-300">
                    <strong>ARAI Collaboration:</strong> Research published in collaboration with Automotive Research Association of India validates our technology performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Validation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rigorous Testing & Validation
            </h2>
            <p className="text-xl text-gray-600">
              Every claim backed by data, every product proven in the field
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Lab Testing</h3>
              <p className="text-sm text-gray-700 mb-3">
                Controlled environment testing of individual components and complete systems. Performance mapping across operating conditions.
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Hydrogen generation rate verification</li>
                <li>• Power consumption measurement</li>
                <li>• Gas purity analysis</li>
                <li>• Thermal performance mapping</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Endurance Trials</h3>
              <p className="text-sm text-gray-700 mb-3">
                Long-duration testing to validate durability and reliability. Systems run continuously for 1,000+ hours under various load conditions.
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Continuous operation testing</li>
                <li>• Thermal cycling trials</li>
                <li>• Component degradation monitoring</li>
                <li>• Maintenance interval validation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Field Pilots</h3>
              <p className="text-sm text-gray-700 mb-3">
                Real-world deployment with customer operations. Data collection, performance verification, and continuous monitoring.
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• On-site performance validation</li>
                <li>• Fuel savings measurement</li>
                <li>• Emissions reduction verification</li>
                <li>• Operator feedback integration</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 border-2 border-sgt-green">
            <div className="flex items-start">
              <Zap className="w-12 h-12 text-sgt-green mr-6 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proof of Concept (POC) Program</h3>
                <p className="text-gray-700 mb-4">
                  We offer POC deployments for qualifying customers. Install a pilot system, monitor performance for 30-90 days, and verify savings before committing to full deployment. This is how confident we are in our technology.
                </p>
                <p className="text-sm text-gray-600">
                  POC includes: Installation, monitoring equipment, GreenVision access, performance reporting, and technical support. No long-term commitment required during trial period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-4xl font-bold mb-6">Future-Focused Innovation</h2>
            <p className="text-xl text-blue-100 mb-8">
              GreenLabs is where we shape the future of decarbonization technology. Our roadmap includes next-generation hydrogen systems, advanced materials, and breakthrough efficiency improvements.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <h3 className="font-bold mb-2">Next-Gen CHFA</h3>
                <p className="text-sm text-blue-100">
                  Higher efficiency, compact design, extended service life, reduced power consumption.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <h3 className="font-bold mb-2">Advanced CHCA</h3>
                <p className="text-sm text-blue-100">
                  Scaled capacity, improved thermal management, modular architecture, simplified maintenance.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <h3 className="font-bold mb-2">New Applications</h3>
                <p className="text-sm text-blue-100">
                  Exploring aviation, heavy mining equipment, marine propulsion, and distributed power generation.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-blue-100">
                <strong className="text-white">Our Commitment:</strong> Invest 15-20% of revenue back into R&D annually. Continuous innovation is not optional - it is core to who we are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Experience GreenLabs
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a visit to see our R&D and manufacturing facility
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-900 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-blue-800">
              Schedule Lab Visit
            </button>
            <button className="bg-white border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg text-lg font-bold hover:border-blue-900">
              Download R&D Overview
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .text-sgt-green { color: #1B6B3D; }
        .bg-sgt-green { background-color: #1B6B3D; }
        .text-sgt-yellow { color: #FFD700; }
        .bg-sgt-yellow { background-color: #FFD700; }
        .hover\\:text-sgt-green:hover { color: #1B6B3D; }
        .hover\\:bg-blue-50:hover { background-color: #eff6ff; }
        .hover\\:bg-blue-800:hover { background-color: #1e40af; }
        .hover\\:border-blue-900:hover { border-color: #1e3a8a; }
      `}</style>
    </div>
  );
};

export default GreenLabsPage;