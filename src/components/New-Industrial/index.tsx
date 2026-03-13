// "use client"
// import React from 'react';
// import { Factory, Flame, Settings, CheckCircle, AlertCircle, ArrowRight, Zap } from 'lucide-react';

// const IndustrialSolutionsUpdated = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-sm font-medium text-orange-700 mb-6">
//                 <Factory className="w-4 h-4 mr-2" />
//                 Industrial Decarbonization
//               </div>
              
//               <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                 Industrial Solutions for<br />
//                 <span className="text-sgt-green">Any Combustion Fuel</span>
//               </h1>
              
//               <p className="text-xl text-gray-600 mb-6 leading-relaxed">
//                 Custom-engineered hydrogen enhancement systems for boilers, kilns, smelters, and stationary power — regardless of fuel type
//               </p>

//               <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
//                 <div className="flex items-start">
//                   <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-sm font-semibold text-blue-900 mb-1">Custom Engineering Phase</p>
//                     <p className="text-sm text-blue-800">
//                       Industrial boiler, kiln, and smelter solutions are custom-engineered for each application. We're piloting systems with select partners. DG set solutions are proven and available now.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-4">
//                 <button className="bg-sgt-green text-white px-8 py-4 rounded-md hover:bg-green-800 transition-all font-medium text-lg flex items-center">
//                   Request Engineering Consultation <ArrowRight className="ml-2 w-5 h-5" />
//                 </button>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
//                 <img 
//                   src="/api/placeholder/800/600" 
//                   alt="Industrial Facility"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Four Application Areas */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Four Industrial Applications
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Custom-engineered solutions for your specific combustion equipment and fuel type
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* DG Sets - PROVEN */}
//             <div className="bg-white border-2 border-sgt-green rounded-2xl p-6 hover:shadow-2xl transition-all">
//               <div className="inline-flex px-3 py-1 bg-green-100 rounded-full text-green-800 text-xs font-bold mb-4">
//                 ✓ PROVEN & DEPLOYED
//               </div>
              
//               <div className="w-14 h-14 bg-sgt-green/10 rounded-xl flex items-center justify-center mb-4">
//                 <Settings className="w-7 h-7 text-sgt-green" />
//               </div>
              
//               <h3 className="text-xl font-bold text-gray-900 mb-2">DG Sets</h3>
//               <p className="text-sm text-sgt-green font-semibold mb-4">Stationary Power</p>
              
//               <p className="text-gray-600 text-sm mb-4 leading-relaxed">
//                 CHFA technology for diesel and CNG generator sets. ARAI validated, 3L+ km tested.
//               </p>

//               <div className="mb-4">
//                 <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Fuels</p>
//                 <div className="flex flex-wrap gap-1">
//                   {["Diesel", "CNG"].map(fuel => (
//                     <span key={fuel} className="text-xs px-2 py-1 bg-sgt-green/10 text-sgt-green rounded-full font-medium">
//                       {fuel}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
//                 <div className="space-y-1 text-xs text-green-800">
//                   <div className="flex items-center">
//                     <CheckCircle className="w-3 h-3 mr-2" />
//                     <span>3-12% fuel savings</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-3 h-3 mr-2" />
//                     <span>ARAI journal published</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-3 h-3 mr-2" />
//                     <span>Live deployments</span>
//                   </div>
//                 </div>
//               </div>

//               <button className="w-full bg-sgt-green text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-800 transition-all">
//                 View DG Solutions
//               </button>
//             </div>

//             {/* Boilers - PILOT */}
//             <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 hover:shadow-2xl transition-all">
//               <div className="inline-flex px-3 py-1 bg-orange-100 rounded-full text-orange-800 text-xs font-bold mb-4">
//                 PILOT PHASE
//               </div>
              
//               <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
//                 <Flame className="w-7 h-7 text-orange-600" />
//               </div>
              
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Boilers</h3>
//               <p className="text-sm text-orange-600 font-semibold mb-4">Steam Generation</p>
              
//               <p className="text-gray-600 text-sm mb-4 leading-relaxed">
//                 CHCA systems for industrial boilers - any combustion fuel type.
//               </p>

//               <div className="mb-4">
//                 <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Fuels</p>
//                 <div className="flex flex-wrap gap-1">
//                   {["Coal", "Biomass", "Gas", "Oil"].map(fuel => (
//                     <span key={fuel} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
//                       {fuel}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
//                 <p className="text-xs text-blue-800">
//                   <strong>Status:</strong> Custom engineering for each application. Pilot partnerships available.
//                 </p>
//               </div>

//               <button className="w-full bg-orange-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-orange-700 transition-all">
//                 Discuss Application
//               </button>
//             </div>

//             {/* Kilns - PILOT */}
//             <div className="bg-white border-2 border-red-200 rounded-2xl p-6 hover:shadow-2xl transition-all">
//               <div className="inline-flex px-3 py-1 bg-red-100 rounded-full text-red-800 text-xs font-bold mb-4">
//                 DEVELOPMENT PHASE
//               </div>
              
//               <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-4">
//                 <Factory className="w-7 h-7 text-red-600" />
//               </div>
              
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Kilns</h3>
//               <p className="text-sm text-red-600 font-semibold mb-4">High-Temp Processing</p>
              
//               <p className="text-gray-600 text-sm mb-4 leading-relaxed">
//                 CHCA for cement, ceramic, glass kilns burning coal, pet coke, or gas.
//               </p>

//               <div className="mb-4">
//                 <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Fuels</p>
//                 <div className="flex flex-wrap gap-1">
//                   {["Coal", "Pet Coke", "Gas", "LPG"].map(fuel => (
//                     <span key={fuel} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
//                       {fuel}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
//                 <p className="text-xs text-blue-800">
//                   <strong>Status:</strong> High-volume systems under development. Early partnerships available.
//                 </p>
//               </div>

//               <button className="w-full bg-red-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-all">
//                 Discuss Application
//               </button>
//             </div>

//             {/* Smelters/Furnaces - PILOT */}
//             <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 hover:shadow-2xl transition-all">
//               <div className="inline-flex px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-xs font-bold mb-4">
//                 PILOT PHASE
//               </div>
              
//               <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
//                 <Zap className="w-7 h-7 text-purple-600" />
//               </div>
              
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Smelters</h3>
//               <p className="text-sm text-purple-600 font-semibold mb-4">Metal Recycling</p>
              
//               <p className="text-gray-600 text-sm mb-4 leading-relaxed">
//                 Gas-fired reverberatory and rotary furnaces for secondary metal smelting.
//               </p>

//               <div className="mb-4">
//                 <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Fuels</p>
//                 <div className="flex flex-wrap gap-1">
//                   {["CNG", "LPG", "Propane", "NG"].map(fuel => (
//                     <span key={fuel} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
//                       {fuel}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
//                 <p className="text-xs text-blue-800">
//                   <strong>Status:</strong> Gas-fired furnace applications. Custom engineering required.
//                 </p>
//               </div>

//               <button className="w-full bg-purple-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-purple-700 transition-all">
//                 Discuss Application
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Smelters Deep Dive */}
//       <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-bold mb-6">
//                 Secondary Metal Smelters
//               </div>
              
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                 Gas-Fired Smelting Furnaces
//               </h2>
              
//               <p className="text-xl text-gray-600 mb-6 leading-relaxed">
//                 HHO-assisted combustion for reverberatory and rotary furnaces in secondary aluminium, copper, zinc, brass, and lead recycling operations.
//               </p>

//               <div className="space-y-4 mb-8">
//                 <div className="flex items-start">
//                   <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold text-gray-900">3-8% Fuel Savings</p>
//                     <p className="text-sm text-gray-600">Based on peer-reviewed research on hydrogen-enriched gas combustion</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold text-gray-900">Gas-Specific Application</p>
//                     <p className="text-sm text-gray-600">CNG, LPG, Propane, Natural Gas - gas-fired furnaces only</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold text-gray-900">Capacity Range</p>
//                     <p className="text-sm text-gray-600">10,000 - 25,000 tonnes per annum capacity smelters</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold text-gray-900">Emission Reductions</p>
//                     <p className="text-sm text-gray-600">Scope 1 CO₂ reduction plus lower CO, NOx, particulates</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
//                 <p className="text-sm text-orange-900">
//                   <strong>Engineering Status:</strong> Smelter applications are custom-engineered based on furnace type, gas fuel used, capacity, and operating parameters. Contact us to discuss pilot opportunities for secondary metal recycling facilities.
//                 </p>
//               </div>

//               <button className="bg-purple-600 text-white px-8 py-4 rounded-md hover:bg-purple-700 transition-all font-medium flex items-center">
//                 Download Smelter Technical Brief <ArrowRight className="ml-2" />
//               </button>
//             </div>

//             <div>
//               <img 
//                 src="/api/placeholder/600/500" 
//                 alt="Gas-Fired Smelting Furnace"
//                 className="w-full rounded-2xl shadow-2xl"
//               />
              
//               <div className="mt-6 bg-white border-2 border-purple-200 rounded-xl p-6">
//                 <h4 className="text-lg font-bold text-gray-900 mb-4">Target Industries</h4>
//                 <div className="grid grid-cols-2 gap-3">
//                   {["Aluminium Recycling", "Copper Smelting", "Zinc Recovery", "Brass Foundries", "Lead Recycling", "Mixed Metal"].map((industry, idx) => (
//                     <div key={idx} className="flex items-center text-sm text-gray-700">
//                       <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
//                       {industry}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style>{`
//         .text-sgt-green { color: #1B6B3D; }
//         .bg-sgt-green { background-color: #1B6B3D; }
//         .border-sgt-green { border-color: #1B6B3D; }
//         .hover\\:bg-sgt-green:hover { background-color: #1B6B3D; }
//       `}</style>
//     </div>
//   );
// };

// export default IndustrialSolutionsUpdated;
"use client"
import React from 'react';
import { Factory, Flame, Settings, CheckCircle, AlertCircle, ArrowRight, Zap, TrendingUp, Shield, Award } from 'lucide-react';


const IndustrialSolutionsComplete = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-gray-600">
            <a href="/" className="hover:text-sgt-green">Home</a> / <a href="/solutions" className="hover:text-sgt-green">Solutions</a> / <span className="text-gray-900 font-medium">Industrial Solutions</span>
          </p>
        </div>
      </div>


      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-sm font-medium text-orange-700 mb-6">
                <Factory className="w-4 h-4 mr-2" />
                Industrial Decarbonization
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Industrial Solutions for<br />
                <span className="text-sgt-green">Any Combustion Fuel</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Custom-engineered hydrogen enhancement systems for DG sets, boilers, kilns, and smelters — regardless of fuel type
              </p>


              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900 mb-1">Custom Engineering Phase</p>
                    <p className="text-sm text-blue-800">
                      Industrial boiler, kiln, and smelter solutions are custom-engineered for each application. We're piloting systems with select partners. DG set solutions are proven and available now.
                    </p>
                  </div>
                </div>
              </div>


              <div className="flex flex-wrap gap-4">
                <button className="bg-sgt-green text-white px-8 py-4 rounded-md hover:bg-green-800 transition-all font-medium text-lg flex items-center">
                  Request Engineering Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:border-sgt-green hover:text-sgt-green transition-all font-medium text-lg">
                  Download Overview
                </button>
              </div>
            </div>


            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/api/placeholder/800/600" 
                  alt="Industrial Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Four Application Areas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Four Industrial Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom-engineered solutions for your specific combustion equipment and fuel type
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* DG Sets - PROVEN */}
            <div className="bg-white border-2 border-sgt-green rounded-2xl p-6 hover:shadow-2xl transition-all">
              <div className="inline-flex px-3 py-1 bg-green-100 rounded-full text-green-800 text-xs font-bold mb-4">
                ✓ PROVEN & DEPLOYED
              </div>
              
              <div className="w-14 h-14 bg-sgt-green/10 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-7 h-7 text-sgt-green" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">DG Sets</h3>
              <p className="text-sm text-sgt-green font-semibold mb-4">Stationary Power</p>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                CHFA technology for diesel and CNG generator sets. ARAI validated, 3L+ km tested.
              </p>


              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Fuels</p>
                <div className="flex flex-wrap gap-1">
                  {["Diesel", "CNG"].map(fuel => (
                    <span key={fuel} className="text-xs px-2 py-1 bg-sgt-green/10 text-sgt-green rounded-full font-medium">
                      {fuel}
                    </span>
                  ))}
                </div>
              </div>


              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <div className="space-y-1 text-xs text-green-800">
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>3-12% fuel savings</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>ARAI validated</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>Live deployments</span>
                  </div>
                </div>
              </div>


              <button className="w-full bg-sgt-green text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-800 transition-all">
                View Details Below
              </button>
            </div>


            {/* Boilers - PILOT */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 hover:shadow-2xl transition-all">
              <div className="inline-flex px-3 py-1 bg-orange-100 rounded-full text-orange-800 text-xs font-bold mb-4">
                PILOT PHASE
              </div>
              
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                <Flame className="w-7 h-7 text-orange-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Boilers</h3>
              <p className="text-sm text-orange-600 font-semibold mb-4">Steam Generation</p>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                CHCA systems for industrial boilers - any combustion fuel type.
              </p>


              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Fuels</p>
                <div className="flex flex-wrap gap-1">
                  {["Coal", "Biomass", "Gas", "Oil"].map(fuel => (
                    <span key={fuel} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                      {fuel}
                    </span>
                  ))}
                </div>
              </div>


              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <p className="text-xs text-blue-800">
                  <strong>Status:</strong> Custom engineering required. Pilot partnerships available.
                </p>
              </div>


              <button className="w-full bg-orange-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-orange-700 transition-all">
                View Details Below
              </button>
            </div>


            {/* Kilns - PILOT */}
            <div className="bg-white border-2 border-red-200 rounded-2xl p-6 hover:shadow-2xl transition-all">
              <div className="inline-flex px-3 py-1 bg-red-100 rounded-full text-red-800 text-xs font-bold mb-4">
                DEVELOPMENT PHASE
              </div>
              
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <Factory className="w-7 h-7 text-red-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kilns</h3>
              <p className="text-sm text-red-600 font-semibold mb-4">High-Temp Processing</p>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                CHCA for cement, ceramic, glass kilns burning coal, pet coke, or gas.
              </p>


              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Fuels</p>
                <div className="flex flex-wrap gap-1">
                  {["Coal", "Pet Coke", "Gas", "LPG"].map(fuel => (
                    <span key={fuel} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                      {fuel}
                    </span>
                  ))}
                </div>
              </div>


              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <p className="text-xs text-blue-800">
                  <strong>Status:</strong> High-volume systems under development.
                </p>
              </div>


              <button className="w-full bg-red-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-all">
                View Details Below
              </button>
            </div>


            {/* Smelters - PILOT */}
            <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 hover:shadow-2xl transition-all">
              <div className="inline-flex px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-xs font-bold mb-4">
                PILOT PHASE
              </div>
              
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-purple-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smelters</h3>
              <p className="text-sm text-purple-600 font-semibold mb-4">Metal Recycling</p>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Gas-fired reverberatory and rotary furnaces for secondary metal smelting.
              </p>


              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Fuels</p>
                <div className="flex flex-wrap gap-1">
                  {["CNG", "LPG", "Propane", "NG"].map(fuel => (
                    <span key={fuel} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                      {fuel}
                    </span>
                  ))}
                </div>
              </div>


              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <p className="text-xs text-blue-800">
                  <strong>Status:</strong> Custom engineering for gas furnaces.
                </p>
              </div>


              <button className="w-full bg-purple-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-purple-700 transition-all">
                View Details Below
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* DG Sets Deep Dive - PROVEN */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-bold mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                PROVEN & DEPLOYED
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                DG Set Solutions
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Proven CHFA technology for diesel and CNG generator sets from 125 kVA to 1,500 kVA. ARAI validated with extensive road-equivalent testing and multiple live deployments.
              </p>


              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-sgt-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">3-12% Fuel Savings</p>
                    <p className="text-sm text-gray-600">ARAI validated efficiency improvement across different load conditions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-sgt-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">ARAI Journal Published</p>
                    <p className="text-sm text-gray-600">Government of India approved testing and peer-reviewed research</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-sgt-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">3,00,000+ km Tested</p>
                    <p className="text-sm text-gray-600">Extensive durability and reliability testing completed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-sgt-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Multiple Live Deployments</p>
                    <p className="text-sm text-gray-600">Operating 24/7 in industrial facilities, telecom, and data centers</p>
                  </div>
                </div>
              </div>


              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <p className="text-sm text-green-900">
                  <strong>Availability:</strong> DG set solutions using CHFA technology are proven, deployed, and available for immediate installation. No pilot phase - this is mature, validated technology.
                </p>
              </div>


              <button className="bg-sgt-green text-white px-8 py-4 rounded-md hover:bg-green-800 transition-all font-medium flex items-center">
                Get DG Set Solution Details <ArrowRight className="ml-2" />
              </button>
            </div>


            <div>
              <img 
                src="/api/placeholder/600/500" 
                alt="DG Set Installation"
                className="w-full rounded-2xl shadow-2xl"
              />
              
              <div className="mt-6 bg-white border-2 border-green-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Applications</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Industrial Power Backup", "Telecom Towers", "Data Centers", "Hospitals", "Manufacturing Plants", "Critical Infrastructure"].map((app, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-sgt-green rounded-full mr-2"></span>
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Boilers Deep Dive - PILOT */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/api/placeholder/600/500" 
                alt="Industrial Boiler"
                className="w-full rounded-2xl shadow-2xl"
              />
              
              <div className="mt-6 bg-white border-2 border-orange-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Target Industries</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Pharmaceuticals", "Food Processing", "Chemical Mfg", "Textile Mills", "Paper & Pulp", "Refineries"].map((industry, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>


            <div className="order-1 lg:order-2">
              <div className="inline-flex px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-bold mb-6">
                PILOT PHASE
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Boiler Solutions
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Custom CHCA systems for industrial steam and process heat generation. Fuel-agnostic design works with coal, biomass, natural gas, CNG, propane, diesel, LDO, HFO, and multi-fuel boilers.
              </p>


              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">5-18% Target Fuel Savings</p>
                    <p className="text-sm text-gray-600">Application-dependent based on fuel type and baseline efficiency</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Industrial-Scale Generation</p>
                    <p className="text-sm text-gray-600">3000+ LPH capacity for continuous boiler operation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Advanced Automation</p>
                    <p className="text-sm text-gray-600">PLC-based control with safety interlocks and DCS integration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Any Combustion Fuel</p>
                    <p className="text-sm text-gray-600">Coal, biomass, gas, oil - custom engineered for your fuel type</p>
                  </div>
                </div>
              </div>


              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-sm text-blue-900">
                  <strong>Engineering Status:</strong> Boiler applications are custom-engineered for each facility based on fuel type, capacity, and operating parameters. Currently in pilot phase with select industrial partners. Contact us to discuss partnership opportunities.
                </p>
              </div>


              <button className="bg-orange-600 text-white px-8 py-4 rounded-md hover:bg-orange-700 transition-all font-medium flex items-center">
                Discuss Boiler Application <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Kilns Deep Dive - DEVELOPMENT */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-bold mb-6">
                DEVELOPMENT PHASE
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Kiln Solutions
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                High-volume CHCA systems for cement, ceramic, glass, and brick kilns. Specialized design for high-temperature industrial processing using coal, pet coke, natural gas, or LPG.
              </p>


              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">5-18% Target Savings</p>
                    <p className="text-sm text-gray-600">Based on fuel type and kiln configuration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">High-Temperature Application</p>
                    <p className="text-sm text-gray-600">Designed for 1000°C+ kiln operating temperatures</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Continuous Operation</p>
                    <p className="text-sm text-gray-600">Industrial-duty design for 24/7 kiln operation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Multiple Fuel Types</p>
                    <p className="text-sm text-gray-600">Coal, pet coke, natural gas, LPG, biomass applications</p>
                  </div>
                </div>
              </div>


              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-sm text-blue-900">
                  <strong>Development Status:</strong> Kiln solutions are in active development phase. High-volume HHO generation systems are being engineered for cement, ceramic, and glass kiln applications. Early partnership opportunities available for validation testing.
                </p>
              </div>


              <button className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-all font-medium flex items-center">
                Discuss Kiln Partnership <ArrowRight className="ml-2" />
              </button>
            </div>


            <div>
              <img 
                src="/api/placeholder/600/500" 
                alt="Industrial Kiln"
                className="w-full rounded-2xl shadow-2xl"
              />
              
              <div className="mt-6 bg-white border-2 border-red-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Target Industries</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Cement Manufacturing", "Ceramic & Tiles", "Glass Production", "Brick & Lime Kilns", "Refractory", "Specialty Minerals"].map((industry, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Smelters Deep Dive - PILOT */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/api/placeholder/600/500" 
                alt="Gas-Fired Smelting Furnace"
                className="w-full rounded-2xl shadow-2xl"
              />
              
              <div className="mt-6 bg-white border-2 border-purple-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Target Industries</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Aluminium Recycling", "Copper Smelting", "Zinc Recovery", "Brass Foundries", "Lead Recycling", "Mixed Metal Scrap"].map((industry, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>


            <div className="order-1 lg:order-2">
              <div className="inline-flex px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-bold mb-6">
                PILOT PHASE
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Smelter & Furnace Solutions
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                HHO-assisted combustion for gas-fired reverberatory and rotary furnaces in secondary metal recycling. Specifically designed for CNG, LPG, Propane, and Natural Gas applications.
              </p>


              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">3-8% Fuel Savings</p>
                    <p className="text-sm text-gray-600">Based on peer-reviewed research on hydrogen-enriched gas combustion</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Gas-Fired Furnaces Only</p>
                    <p className="text-sm text-gray-600">CNG, LPG, Propane, Natural Gas - not coal or oil applications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Capacity Range</p>
                    <p className="text-sm text-gray-600">10,000 - 25,000 tonnes per annum secondary smelters</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Emission Reductions</p>
                    <p className="text-sm text-gray-600">Scope 1 CO₂ reduction plus lower CO, NOx, particulates</p>
                  </div>
                </div>
              </div>


              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-sm text-blue-900">
                  <strong>Engineering Status:</strong> Smelter applications are custom-engineered based on furnace type (reverberatory/rotary), gas fuel used, capacity, and operating parameters. Currently piloting with secondary metal recycling facilities. Contact us to discuss opportunities.
                </p>
              </div>


              <button className="bg-purple-600 text-white px-8 py-4 rounded-md hover:bg-purple-700 transition-all font-medium flex items-center">
                Download Smelter Technical Brief <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Fuel Agnostic Callout */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Flame className="w-16 h-16 text-yellow-400 mb-6" />
              <h2 className="text-4xl font-bold mb-6 text-white">
                Works With Any Combustion Fuel
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our technology is fuel-agnostic. Whether you burn coal, pet coke, biomass, natural gas, CNG, propane, diesel, LDO, or HFO — we enhance your existing combustion without changing your fuel type.
              </p>


              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Coal", "Pet Coke", "Biomass", "Natural Gas", "CNG/Propane", "Diesel/LDO", "HFO", "Multi-Fuel"].map((fuel, idx) => (
                  <div key={idx} className="bg-gray-800 border-2 border-gray-700 rounded-lg px-4 py-3 hover:border-sgt-green transition-all">
                    <p className="text-white font-semibold">{fuel}</p>
                  </div>
                ))}
              </div>


              <p className="text-gray-300 text-lg">
                Each system is custom-engineered for your specific fuel type and combustion equipment to ensure optimal performance and safety.
              </p>
            </div>


            <div>
              <img 
                src="/api/placeholder/600/500" 
                alt="Various Industrial Fuels"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ROI Calculator CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Calculate Your Potential Savings
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Get a preliminary estimate of fuel savings and ROI for your industrial application
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-6">
              <TrendingUp className="w-12 h-12 text-sgt-green mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-900 mb-2">5-18%</p>
              <p className="text-gray-600 text-sm">Fuel Savings Range</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <Shield className="w-12 h-12 text-sgt-green mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-900 mb-2">6-12 mo</p>
              <p className="text-gray-600 text-sm">Typical Payback</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <Award className="w-12 h-12 text-sgt-green mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-900 mb-2">50%+</p>
              <p className="text-gray-600 text-sm">Emission Reduction</p>
            </div>
          </div>


          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-sgt-green text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-green-800 transition-all">
              Calculate ROI
            </button>
            <button className="bg-white border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg text-lg font-bold hover:border-sgt-green hover:text-sgt-green transition-all">
              Request Engineering Consultation
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
      `}</style>
    </div>
  );
};

export default IndustrialSolutionsComplete;