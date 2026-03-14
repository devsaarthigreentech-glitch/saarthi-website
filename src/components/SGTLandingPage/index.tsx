// export default SGTLandingPage;
'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown, Factory, Ship, Truck, Flame, TrendingUp, Users, Award, Database, Play, CheckCircle, ArrowRight, Zap, Shield, Settings } from 'lucide-react';
import MediaCarousel from '../MediaCarousal';


const SGTHomepage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:pr-8">
              <div className="inline-flex items-center px-4 py-2 bg-sgt-green/10 border border-sgt-green/30 rounded-full text-sm font-medium text-sgt-green mb-6">
                <span className="w-2 h-2 bg-sgt-green rounded-full mr-2 animate-pulse"></span>
                Patent-Applied Technology | ARAI Validated | Fuel-Agnostic
              </div>

              <h1 className="text-5xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Profitable Decarbonisation for<br />
                <span className="text-sgt-green">Industry, Marine & Logistics</span>
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Hydrogen-enabled retrofits for any combustion fuel — coal, biomass, diesel, CNG, propane, marine fuels — without replacing engines or switching fuels
              </p>


              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                IoT-powered carbon intelligence delivering 5-18% fuel savings and 50%+ emission reduction at scale
              </p>


              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-sgt-green text-white px-8 py-4 rounded-md hover:bg-green-800 transition-all font-medium text-lg flex items-center shadow-lg">
                  Explore Solutions <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:border-sgt-green hover:text-sgt-green transition-all font-medium text-lg flex items-center">
                  <Play className="mr-2 w-5 h-5" /> Watch Demo
                </button>
              </div>


              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-2" />
                  <span>5-18% Fuel Savings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-2" />
                  <span>50%+ Emission Cut</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-2" />
                  <span>Zero CapEx Option</span>
                </div>
              </div>
            </div>


            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero/hero-square.jpg"
                  alt="Industrial Decarbonization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
                  <p className="text-sm font-medium text-gray-600">Industrial Decarbonization</p>
                  <p className="text-2xl font-bold text-sgt-green">In Action</p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border border-gray-100 hidden lg:block">
                <p className="text-3xl font-bold text-sgt-green">3,00,000+</p>
                <p className="text-sm text-gray-600 font-medium">km Tested</p>
              </div>

              <div className="absolute -top-8 -right-8 bg-white p-6 rounded-xl shadow-2xl border border-gray-100 hidden lg:block">
                <p className="text-3xl font-bold text-sgt-yellow">Patent</p>
                <p className="text-sm text-gray-600 font-medium">Applied</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Bar */}
      <section className="bg-sgt-green text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">5-18%</p>
              <p className="text-green-100">Fuel Savings</p>
              <p className="text-xs text-green-200 mt-1">Verified by Telemetry</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50%+</p>
              <p className="text-green-100">Emission Reduction</p>
              <p className="text-xs text-green-200 mt-1">Stack Test Validated</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">Any</p>
              <p className="text-green-100">Combustion Fuel</p>
              <p className="text-xs text-green-200 mt-1">Fuel-Agnostic Tech</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">2050</p>
              <p className="text-green-100">IMO Compliant</p>
              <p className="text-xs text-green-200 mt-1">Net-Zero Ready</p>
            </div>
          </div>
        </div>
      </section>


      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fuel-Agnostic Solutions for Any Combustion Application
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology works with whatever fuel you're burning today — no fuel switching required
            </p>
          </div>


          {/* Three Main Verticals */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Industrial */}
            <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sgt-green hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-sgt-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sgt-green group-hover:scale-110 transition-all">
                <Factory className="w-8 h-8 text-sgt-green group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">Industrial Solutions</h3>
              <p className="text-sm text-sgt-green font-semibold mb-4">Boilers, Kilns, DG Sets & Smelters</p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Coal, biomass, diesel, CNG, propane, LDO, HFO, pet coke — any combustion fuel
              </p>


              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-3 flex items-center">
                  <Flame className="w-3 h-3 mr-1" /> Compatible Fuels
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Coal", "Biomass", "CNG", "Diesel", "+4"].map((fuel, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                      {fuel}
                    </span>
                  ))}
                </div>
              </div>


              <div className="border-t border-gray-200 pt-6 mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-500">Savings:</span>
                  <span className="font-bold text-sgt-green">5-18%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Applications:</span>
                  <span className="font-bold text-gray-900">4</span>
                </div>
              </div>


              <button className="w-full bg-gray-50 hover:bg-sgt-green hover:text-white text-gray-700 py-3 rounded-lg font-medium transition-all flex items-center justify-center group">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>


            {/* Marine */}
            <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                <Ship className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">Marine Solutions</h3>
              <p className="text-sm text-blue-600 font-semibold mb-4">Coastal to Ocean-Going Vessels</p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                IMO 2050 compliant for all marine fuels — HFO, MDO, MGO, diesel
              </p>


              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-3 flex items-center">
                  <Flame className="w-3 h-3 mr-1" /> Marine Fuels
                </p>
                <div className="flex flex-wrap gap-2">
                  {["HFO", "MDO", "MGO", "Diesel"].map((fuel, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                      {fuel}
                    </span>
                  ))}
                </div>
              </div>


              <div className="border-t border-gray-200 pt-6 mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-500">Model:</span>
                  <span className="font-bold text-blue-600">Zero CapEx</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Payback:</span>
                  <span className="font-bold text-gray-900">2 months</span>
                </div>
              </div>


              <button className="w-full bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-700 py-3 rounded-lg font-medium transition-all flex items-center justify-center group">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>


            {/* Logistics */}
            <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sgt-green hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-sgt-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sgt-green group-hover:scale-110 transition-all">
                <Truck className="w-8 h-8 text-sgt-green group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">Logistics & Fleet</h3>
              <p className="text-sm text-sgt-green font-semibold mb-4">Mining, Construction & Transportation</p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Retrofit solutions for diesel engines in vehicles and heavy equipment
              </p>


              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-3 flex items-center">
                  <Flame className="w-3 h-3 mr-1" /> Fuel Type
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">Diesel</span>
                </div>
              </div>


              <div className="border-t border-gray-200 pt-6 mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-500">Efficiency:</span>
                  <span className="font-bold text-sgt-green">3-15%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Testing:</span>
                  <span className="font-bold text-gray-900">3L+ km</span>
                </div>
              </div>


              <button className="w-full bg-gray-50 hover:bg-sgt-green hover:text-white text-gray-700 py-3 rounded-lg font-medium transition-all flex items-center justify-center group">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>


        </div>
      </section>


      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Three Technology Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Patent-applied hardware combined with AI-powered software for complete decarbonization infrastructure
            </p>
          </div>


          <div className="grid lg:grid-cols-3 gap-8">
            {/* CHFA */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all">
              <div className="inline-flex px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-semibold mb-6">
                Engine Applications
              </div>

              <div className="mb-6">
                <img
                  src="/api/placeholder/400/250"
                  alt="CHFA Technology"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>


              <h3 className="text-2xl font-bold text-gray-900 mb-2">CHFA Technology</h3>
              <p className="text-lg text-blue-600 font-semibold mb-4">Controlled Hydrogen Fuel Assist</p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Precision HHO injection for engines. ARAI validated, 3L+ km tested. Proven for DG sets, marine, and logistics.
              </p>


              <div className="space-y-3 mb-6">
                {["Precision low-volume", "ARAI journal published", "3-15% fuel efficiency"].map((feat, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{feat}</p>
                  </div>
                ))}
              </div>


              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all">
                View Technology Details
              </button>
            </div>


            {/* CHCA */}
            <div className="bg-white rounded-2xl p-8 border-2 border-sgt-green shadow-xl">
              <div className="inline-flex px-4 py-2 bg-sgt-green/10 rounded-full text-sgt-green text-sm font-semibold mb-6">
                Industrial Scale
              </div>

              <div className="mb-6">
                <img
                  src="/api/placeholder/400/250"
                  alt="CHCA Technology"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>


              <h3 className="text-2xl font-bold text-gray-900 mb-2">CHCA Technology</h3>
              <p className="text-lg text-sgt-green font-semibold mb-4">Controlled Hydrogen Combustion Assist</p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Industrial-grade HHO for boilers, kilns, smelters. Any fuel type — coal, biomass, gas, oil.
              </p>


              <div className="space-y-3 mb-6">
                {["Industrial-scale generation", "Fuel-agnostic design", "5-18% fuel savings"].map((feat, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-sgt-green mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{feat}</p>
                  </div>
                ))}
              </div>


              <button className="w-full bg-sgt-green text-white py-3 rounded-lg font-medium hover:bg-green-800 transition-all">
                View Technology Details
              </button>
            </div>


            {/* GreenVision */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all">
              <div className="inline-flex px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-semibold mb-6">
                Software Layer
              </div>

              <div className="mb-6">
                <img
                  src="/api/placeholder/400/250"
                  alt="GreenVision Platform"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>


              <h3 className="text-2xl font-bold text-gray-900 mb-2">GreenVision</h3>
              <p className="text-lg text-gray-700 font-semibold mb-4">AI-Powered Digital Twin</p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Real-time monitoring, ESG reporting, predictive maintenance. Every deployment included.
              </p>


              <div className="space-y-3 mb-6">
                {["Real-time analytics", "ESG & BRSR reporting", "Predictive maintenance"].map((feat, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-700 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{feat}</p>
                  </div>
                ))}
              </div>


              <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all">
                View Platform Details
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Validation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Verified by Stack Tests, Telemetry & Independent Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Globally validated technology with rigorous third-party testing
            </p>
          </div>


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "ARAI", desc: "Govt. of India" },
              { name: "NABL", desc: "Certified Labs" },
              { name: "KOEL", desc: "Kirloskar" },
              { name: "CE, UL, RoHS", desc: "International" },
              { name: "ISO 9001", desc: "Quality Mgmt" },
              { name: "Patent", desc: "Applied" }
            ].map((cert, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-sgt-green/10 transition-all">
                  <Award className="w-12 h-12 text-gray-400 group-hover:text-sgt-green transition-all" />
                </div>
                <p className="font-bold text-gray-900 mb-1">{cert.name}</p>
                <p className="text-sm text-gray-500">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Ecosystem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Engineering Lifecycle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From assessment to ongoing optimization — integrated engineering support at every stage
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">

            {/* Card 1: GreenMentor */}
            <a href="/greenmentor" className="flex-1 bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-sgt-green hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-sgt-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sgt-green transition-all">
                <Users className="w-8 h-8 text-sgt-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-sgt-green transition-colors">GreenMentor</h3>
              <p className="text-sgt-green font-semibold mb-4">Engineering Design & Assessment</p>
              <p className="text-gray-600 leading-relaxed text-sm">Plant assessment, combustion system analysis, and implementation roadmap.</p>
              <div className="mt-6 flex items-center text-sgt-green font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ChevronRight className="ml-1 w-4 h-4" />
              </div>
            </a>

            {/* Arrow 1 */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-sgt-green animate-pulse" />
            </div>

            {/* Card 2: GreenLabs */}
            <a href="/greenlabs" className="flex-1 bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-sgt-yellow hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-sgt-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sgt-yellow transition-all">
                <Factory className="w-8 h-8 text-sgt-yellow group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-sgt-yellow transition-colors">GreenLabs</h3>
              <p className="text-sgt-yellow font-semibold mb-4">Manufacturing & Installation</p>
              <p className="text-gray-600 leading-relaxed text-sm">Custom manufacturing, installation, and operator training.</p>
              <div className="mt-6 flex items-center text-sgt-yellow font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ChevronRight className="ml-1 w-4 h-4" />
              </div>
            </a>

            {/* Arrow 2 */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-sgt-yellow animate-pulse" />
            </div>

            {/* Card 3: GreenVision */}
            <a href="/greenvision" className="flex-1 bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-all">
                <Database className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">GreenVision</h3>
              <p className="text-gray-700 font-semibold mb-4">Monitoring & Maintenance</p>
              <p className="text-gray-600 leading-relaxed text-sm">Real-time monitoring, predictive alerts, and optimization support.</p>
              <div className="mt-6 flex items-center text-gray-700 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ChevronRight className="ml-1 w-4 h-4" />
              </div>
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-8 py-4 bg-white border-2 border-sgt-green rounded-xl shadow-lg">
              <CheckCircle className="w-6 h-6 text-sgt-green mr-3" />
              <span className="text-lg font-bold text-gray-900">Outcome: Turnkey Solution from Assessment to Performance Verification</span>
            </div>
          </div>
        </div>
      </section>


      {/* DaaS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-sgt-green to-green-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16 text-white flex flex-col justify-center">
                <div className="inline-flex px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold mb-6 self-start">
                  Zero CapEx Model
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Retrofit Any Engine.<br />Pay from Savings.
                </h2>

                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  No upfront investment. Monthly fee lower than fuel saved. The savings pay for the system.
                </p>


                <div className="space-y-4 mb-8">
                  {[
                    "Zero Upfront Investment",
                    "Savings-Linked Monthly Fee",
                    "Installation & Maintenance Included",
                    "Verified via GreenVision Telemetry"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-sgt-yellow mr-3 flex-shrink-0" />
                      <span className="text-white text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>


                <button className="bg-white text-sgt-green px-8 py-4 rounded-lg text-lg font-bold hover:bg-sgt-yellow hover:text-gray-900 transition-all inline-flex items-center self-start">
                  Explore DaaS Model <ArrowRight className="ml-2" />
                </button>
              </div>


              <div className="relative h-full min-h-[400px]">
                <img
                  src="/api/placeholder/700/500"
                  alt="DaaS Model"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MediaCarousel />


      {/* Media Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Media Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Recognized across leading publications
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-8">
            {[
              { outlet: "Renewable Mirror", date: "Feb 2026", title: "Green Hydrogen for DG Set Emissions" },
              { outlet: "CNBC-TV18", date: "Jan 2026", title: "Budget 2026 Growth Opportunities" },
              { outlet: "ABP News", date: "Dec 2025", title: "Green Hydrogen Future in India" }
            ].map((article, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all group cursor-pointer">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/api/placeholder/400/300"
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sgt-green text-sm font-bold">{article.outlet}</span>
                    <span className="text-gray-500 text-xs">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-sgt-green transition-colors">
                    {article.title}
                  </h3>
                  <button className="text-sgt-green text-sm font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                    Read Story <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Decarbonize Your Operations?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Partner with us to deliver proven emissions reduction at scale
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-sgt-green text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-green-700 transition-all">
              Schedule Consultation
            </button>
            <button className="bg-white/10 border-2 border-white text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-white/20 transition-all">
              Download Brochure
            </button>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold mb-2">6-12 months</p>
              <p className="text-gray-300">Typical Payback</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">Zero CapEx</p>
              <p className="text-gray-300">DaaS Available</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-gray-300">Remote Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .text-sgt-green { color: #1B6B3D; }
        .text-sgt-yellow { color: #FFD700; }
        .bg-sgt-green { background-color: #1B6B3D; }
        .bg-sgt-yellow { background-color: #FFD700; }
        .border-sgt-green { border-color: #1B6B3D; }
        .border-sgt-yellow { border-color: #FFD700; }
        .hover\\:bg-sgt-green:hover { background-color: #1B6B3D; }
        .hover\\:text-sgt-green:hover { color: #1B6B3D; }
        .hover\\:border-sgt-green:hover { border-color: #1B6B3D; }
        .hover\\:text-sgt-yellow:hover { color: #FFD700; }
        .hover\\:bg-sgt-yellow:hover { background-color: #FFD700; }
      `}</style>
    </div>
  );
};


export default SGTHomepage