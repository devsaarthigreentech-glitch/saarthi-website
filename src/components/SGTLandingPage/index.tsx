"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown, Factory, Ship, Truck, Flame, Award, Database, Play, CheckCircle, ArrowRight, Zap, Shield, Users, TrendingUp } from 'lucide-react';

const SGTLandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('industrial');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Using transparent PNG properly */}
            <div className="flex items-center space-x-3">
              <div className="relative w-32 h-12">
                <img 
                  src="/api/placeholder/128/48"
                  alt="SGT Logo" 
                  className="w-full h-full object-contain"
                  style={{
                    mixBlendMode: 'multiply' // Ensures transparent PNG displays correctly
                  }}
                />
              </div>
              <div className="border-l border-gray-300 pl-3">
                <h1 className="text-lg font-bold text-gray-900">HydroEdge</h1>
                <p className="text-xs text-sgt-green font-medium">Decarbonization Infrastructure</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button className="text-gray-700 hover:text-sgt-green transition-colors font-medium">Home</button>
              
              <div className="relative group">
                <button className="text-gray-700 hover:text-sgt-green transition-colors font-medium flex items-center">
                  Solutions <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-sgt-green border-b border-gray-100">Industrial Solutions</a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-sgt-green border-b border-gray-100">Marine Solutions</a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-sgt-green">Logistics & Fleet</a>
                </div>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-sgt-green transition-colors font-medium flex items-center">
                  Technology <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="/technology/chfa" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-sgt-green border-b border-gray-100">CHFA Technology</a>
                  <a href="/technology/chca" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-sgt-green border-b border-gray-100">CHCA Technology</a>
                  <a href="/technology/greenvision" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-sgt-green">GreenVision Platform</a>
                </div>
              </div>

              <button className="text-gray-700 hover:text-sgt-green transition-colors font-medium">Resources</button>
              <button className="text-gray-700 hover:text-sgt-green transition-colors font-medium">About</button>
              
              <button className="bg-sgt-green text-white px-6 py-2.5 rounded-md hover:bg-green-800 transition-all font-medium">
                Contact Us
              </button>
            </div>

            <button className="lg:hidden text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Large Image + Content */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:pr-8">
              <div className="inline-flex items-center px-4 py-2 bg-sgt-yellow/10 border border-sgt-yellow/30 rounded-full text-sm font-medium text-sgt-green mb-6">
                <span className="w-2 h-2 bg-sgt-green rounded-full mr-2"></span>
                Patent-Applied Technology | ARAI Validated | Fuel-Agnostic
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Engineering a<br />Profitable Path to<br />
                <span className="text-sgt-green">Net-Zero</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Hydrogen-enabled retrofits for any combustion fuel — coal, biomass, diesel, CNG, propane, marine fuels
              </p>

              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                IoT-powered carbon intelligence for industry, marine and logistics — without replacing existing engines or changing fuel type
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
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-2" />
                  <span>5-18% Fuel Savings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-2" />
                  <span>50%+ Emission Cut</span>
                </div>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/api/placeholder/800/600" 
                  alt="Industrial Facility with SGT Technology"
                  className="w-full h-full object-cover"
                />
                {/* Image Overlay Label */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
                  <p className="text-sm font-medium text-gray-600">Industrial Decarbonization</p>
                  <p className="text-2xl font-bold text-sgt-green">In Action</p>
                </div>
              </div>
              
              {/* Floating Stats Cards */}
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

      {/* Solutions Section with Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fuel-Agnostic Solutions for Any Combustion Application
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology works with whatever fuel you're burning today — no fuel switching required
            </p>
          </div>

          {/* Solution Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Industrial Card */}
            <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sgt-green hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-sgt-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sgt-green group-hover:scale-110 transition-all">
                <Factory className="w-8 h-8 text-sgt-green group-hover:text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Industrial Solutions</h3>
              <p className="text-sm text-sgt-green font-semibold mb-4">Boilers, Kilns & Stationary Power</p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Works with coal, biomass, diesel, CNG, propane, LDO, HFO, pet coke — any combustion fuel
              </p>

              {/* Fuel Compatibility Badges */}
              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-3 flex items-center">
                  <Flame className="w-3 h-3 mr-1" /> Compatible Fuels
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">Coal</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">Biomass</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">CNG</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">+5 more</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-500">Savings:</span>
                  <span className="font-bold text-sgt-green">5-18%</span>
                </div>
                <button className="w-full bg-gray-50 hover:bg-sgt-green hover:text-white text-gray-700 py-3 rounded-lg font-medium transition-all flex items-center justify-center group">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Marine Card */}
            <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                <Ship className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Marine Solutions</h3>
              <p className="text-sm text-blue-600 font-semibold mb-4">Coastal to Ocean-Going Vessels</p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                IMO 2050 compliant for all marine fuels — HFO, MDO, MGO, diesel. Zero-CapEx DaaS model available
              </p>

              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-3 flex items-center">
                  <Flame className="w-3 h-3 mr-1" /> Marine Fuels
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">HFO</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">MDO</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">MGO</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">Diesel</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-500">Model:</span>
                  <span className="font-bold text-blue-600">Zero CapEx</span>
                </div>
                <button className="w-full bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-700 py-3 rounded-lg font-medium transition-all flex items-center justify-center group">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Logistics Card */}
            <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sgt-green hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-sgt-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sgt-green group-hover:scale-110 transition-all">
                <Truck className="w-8 h-8 text-sgt-green group-hover:text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Logistics & Fleet</h3>
              <p className="text-sm text-sgt-green font-semibold mb-4">Mining, Construction & Transportation</p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Retrofit solutions for diesel engines in vehicles, mining equipment, and construction fleets
              </p>

              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-3 flex items-center">
                  <Flame className="w-3 h-3 mr-1" /> Fuel Type
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">Diesel</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-500">Efficiency:</span>
                  <span className="font-bold text-sgt-green">3-15%</span>
                </div>
                <button className="w-full bg-gray-50 hover:bg-sgt-green hover:text-white text-gray-700 py-3 rounded-lg font-medium transition-all flex items-center justify-center group">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Fuel Agnostic Callout with Image */}
          <div className="bg-gradient-to-r from-sgt-green/5 to-sgt-yellow/5 border-2 border-sgt-green/20 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center">
                <Flame className="w-12 h-12 text-sgt-yellow mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Works With Any Combustion Fuel</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our technology is fuel-agnostic. Whether you burn coal, biomass, diesel, CNG, propane, or marine fuels — we enhance your existing combustion without changing your fuel type.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Coal", "Biomass", "Diesel", "CNG", "Propane", "LDO", "HFO", "Pet Coke"].map((fuel) => (
                    <span key={fuel} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm font-medium">
                      {fuel}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Various Fuel Types"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section - Three Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Three Technology Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Patent-applied hardware technologies combined with AI-powered software for complete decarbonization infrastructure
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* CHFA Technology */}
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
                Patent-applied precision HHO generation for engines. Low-volume, precisely measured hydrogen injection optimized for diesel engines, DG sets, and mobile applications.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">Precision low-volume HHO generation</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">ARAI validated and journal published</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">3-15% fuel efficiency improvement</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-3">Applications</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full">DG Sets</span>
                  <span className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full">Marine</span>
                  <span className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full">Logistics</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all">
                  View Technology Details
                </button>
              </div>
            </div>

            {/* CHCA Technology */}
            <div className="bg-white rounded-2xl p-8 border-2 border-sgt-green hover:shadow-xl transition-all">
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
                Patent-applied industrial-grade HHO generation for high-volume applications. Advanced automation ensures safe operation for any fuel — coal, biomass, gas, oil.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">Industrial-scale high-volume generation</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">Fuel-agnostic - works with any combustion fuel</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sgt-green mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">5-18% fuel savings across all fuel types</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-3">Applications</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-sgt-green/10 text-sgt-green rounded-full">Boilers</span>
                  <span className="text-xs px-3 py-1 bg-sgt-green/10 text-sgt-green rounded-full">Kilns</span>
                  <span className="text-xs px-3 py-1 bg-sgt-green/10 text-sgt-green rounded-full">Furnaces</span>
                </div>
                <button className="w-full bg-sgt-green text-white py-3 rounded-lg font-medium hover:bg-green-800 transition-all">
                  View Technology Details
                </button>
              </div>
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
                Every SGT deployment includes a digital twin that monitors, analyzes, and optimizes performance in real-time. ESG-grade MRV reporting for carbon credits.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-700 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">Real-time monitoring and analytics</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-700 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">Predictive maintenance alerts</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-700 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">Automated ESG and BRSR reporting</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-3">Capabilities</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">IoT</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">AI-Powered</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">ESG Ready</span>
                </div>
                <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all">
                  View Platform Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Section with Logos */}
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
              { name: "CEMEX", desc: "Global Validation" },
              { name: "CE, UL, RoHS", desc: "International" },
              { name: "ISO 9001", desc: "Quality Mgmt" }
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

      {/* Ecosystem Section - GreenMentor, GreenLabs, GreenVision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Complete Decarbonisation Loop
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategy, engineering and intelligence working together — all in one integrated ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* GreenMentor */}
            <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-sgt-green hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-sgt-green/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-sgt-green" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">GreenMentor</h3>
              <p className="text-sgt-green font-semibold mb-4">Plan & Design</p>
              <p className="text-gray-600 leading-relaxed">
                Decarbonisation strategy, combustion system assessment, and roadmap creation
              </p>
              
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-sgt-green" />
              </div>
            </div>

            {/* GreenLabs */}
            <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-sgt-yellow hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-sgt-yellow/10 rounded-xl flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-sgt-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">GreenLabs</h3>
              <p className="text-sgt-yellow font-semibold mb-4">Build & Deliver</p>
              <p className="text-gray-600 leading-relaxed">
                Engineering and installation of hydrogen retrofit systems (CapEx or DaaS)
              </p>
              
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-sgt-yellow" />
              </div>
            </div>

            {/* GreenVision */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">GreenVision</h3>
              <p className="text-gray-700 font-semibold mb-4">Measure & Verify</p>
              <p className="text-gray-600 leading-relaxed">
                IoT/AI platform delivering real-time telemetry, savings and auditable ESG reporting
              </p>
            </div>
          </div>

          {/* Outcome Badge */}
          <div className="text-center">
            <div className="inline-flex items-center px-8 py-4 bg-white border-2 border-sgt-green rounded-xl shadow-lg">
              <CheckCircle className="w-6 h-6 text-sgt-green mr-3" />
              <span className="text-lg font-bold text-gray-900">Outcome: Proven CO₂ Reduction, Fuel Savings, and Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* DaaS Section with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-sgt-green to-green-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-12 lg:p-16 text-white flex flex-col justify-center">
                <div className="inline-flex px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold mb-6 self-start">
                  Zero CapEx Model
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Retrofit Any Engine.<br />Pay from Savings.
                </h2>
                
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  You save fuel. The savings pay for the system. We remove the financial barrier to decarbonisation.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Zero Upfront Investment",
                    "Savings-Linked Monthly Fee",
                    "Installation, Maintenance & Support Included",
                    "Verified Savings via GreenVision Telemetry"
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

              {/* Right Image */}
              <div className="relative h-full min-h-[400px]">
                <img 
                  src="/api/placeholder/700/500" 
                  alt="DaaS Model Implementation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Media Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Recognized across leading publications for our approach to industrial decarbonization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { outlet: "Renewable Mirror", date: "Feb 2026", title: "How Green Hydrogen Can Reduce Emissions from DG Sets" },
              { outlet: "CNBC-TV18", date: "Jan 2026", title: "Budget 2026: Key growth opportunities across sectors" },
              { outlet: "ABP News", date: "Dec 2025", title: "How Green Hydrogen will transform India's fuel future" }
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

          <div className="text-center mt-12">
            <button className="text-sgt-green font-bold hover:text-green-800 transition-colors inline-flex items-center">
              View All Media Coverage <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
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
              <p className="text-gray-300">Typical Payback Period</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">Zero CapEx</p>
              <p className="text-gray-300">DaaS Model Available</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-gray-300">Remote Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-24 h-10">
                  <img 
                    src="/api/placeholder/96/40"
                    alt="SGT Logo" 
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Patent-applied CHFA and CHCA technologies delivering proven emissions reduction at scale across industry, marine, and logistics.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sgt-green transition-colors">Industrial Solutions</a></li>
                <li><a href="#" className="hover:text-sgt-green transition-colors">Marine Solutions</a></li>
                <li><a href="#" className="hover:text-sgt-green transition-colors">Logistics & Fleet</a></li>
                <li><a href="#" className="hover:text-sgt-green transition-colors">DaaS Model</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Technology</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sgt-green transition-colors">CHFA Technology</a></li>
                <li><a href="#" className="hover:text-sgt-green transition-colors">CHCA Technology</a></li>
                <li><a href="#" className="hover:text-sgt-green transition-colors">GreenVision Platform</a></li>
                <li><a href="#" className="hover:text-sgt-green transition-colors">Research & Validation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sgt-green transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-sgt-green transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-sgt-green transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-sgt-green transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-sgt-green transition-colors">Media</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2026 SGT HydroEdge. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="hover:text-sgt-green transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sgt-green transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-sgt-green transition-colors">Contact</a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="mailto:solutions@sgthydroedge.com" className="text-sgt-green font-semibold hover:text-sgt-yellow transition-colors">
              solutions@sgthydroedge.com
            </a>
          </div>
        </div>
      </footer> */}

      {/* CSS for brand colors */}
      <style>{`
        .text-sgt-green { color: #1B6B3D; }
        .text-sgt-yellow { color: #FFD700; }
        .bg-sgt-green { background-color: #1B6B3D; }
        .bg-sgt-yellow { background-color: #FFD700; }
        .border-sgt-green { border-color: #1B6B3D; }
        .border-sgt-yellow { border-color: #FFD700; }
        .hover\:bg-sgt-green:hover { background-color: #1B6B3D; }
        .hover\:text-sgt-green:hover { color: #1B6B3D; }
        .hover\:border-sgt-green:hover { border-color: #1B6B3D; }
        .hover\:text-sgt-yellow:hover { color: #FFD700; }
      `}</style>
    </div>
  );
};

export default SGTLandingPage;