"use client"
import React from 'react';
import { Lightbulb, CheckCircle, ArrowRight, ClipboardCheck, Wrench, Activity, Database, FileText, Award, Target, TrendingUp, Users } from 'lucide-react';


const GreenMentorPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-sgt-green to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">GreenMentor</h1>
            <p className="text-2xl text-green-100 mb-6">
              End-to-End Decarbonization Engineering
            </p>
            <p className="text-xl text-green-100 mb-8">
              Technology-agnostic engineering and consulting services that evaluate, design, implement, monitor, and integrate complete decarbonization solutions.
            </p>


            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8">
              <p className="font-bold mb-3">Our Mission</p>
              <p className="text-green-100">
                Deliver auditable decarbonization data for ESG reporting while maximizing carbon footprint reduction, ROI, and operational savings.
              </p>
            </div>


            <button className="bg-white text-sgt-green px-8 py-4 rounded-md hover:bg-green-50 font-medium text-lg flex items-center">
              Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology-Agnostic Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring all technologies under one roof
            </p>
          </div>


          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Navigating Complexity</h3>
              <p className="text-gray-700 mb-4">
                The decarbonization landscape is evolving rapidly - new technologies emerge constantly, regulations shift, and what works for one operation may not suit another.
              </p>
              <p className="text-gray-700 mb-6">
                GreenMentor scans the entire decarbonization landscape, evaluates every viable technology, and recommends the optimal combination for your specific needs - whether that includes our products or not.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="font-bold text-blue-900 mb-2">Our Philosophy</p>
                <p className="text-sm text-blue-800">
                  Engineering consultants first, technology vendors second.
                </p>
              </div>
            </div>


            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="font-bold text-gray-900 mb-6">Our Process:</h4>
              <div className="space-y-3 text-sm">
                <p><strong>1. Technology Scanning</strong> - Monitor emerging solutions globally</p>
                <p><strong>2. Objective Evaluation</strong> - Assess all options on merit</p>
                <p><strong>3. Custom Selection</strong> - Optimal mix from multiple providers</p>
                <p><strong>4. Implementation</strong> - End-to-end project management</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our 5-Step Engineering Process
            </h2>
            <p className="text-xl text-gray-600">From assessment to ESG integration</p>
          </div>


          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-blue-600 mr-4">01</span>
                <h3 className="text-xl font-bold text-gray-900">Evaluate</h3>
              </div>
              <p className="text-gray-700">
                Comprehensive baseline assessment - operations, fuel consumption, emissions, energy systems. Technical audit, data collection, gap analysis.
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 border-l-4 border-green-600">
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-green-600 mr-4">02</span>
                <h3 className="text-xl font-bold text-gray-900">Design</h3>
              </div>
              <p className="text-gray-700">
                Custom engineering design combining best technologies for maximum carbon reduction and ROI. Technology selection, system design, financial modeling.
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-orange-600 mr-4">03</span>
                <h3 className="text-xl font-bold text-gray-900">Implement</h3>
              </div>
              <p className="text-gray-700">
                Turnkey project execution - procurement to commissioning. Project management, installation, testing, operator training.
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-purple-600 mr-4">04</span>
                <h3 className="text-xl font-bold text-gray-900">Monitor</h3>
              </div>
              <p className="text-gray-700">
                Continuous monitoring via GreenVision digital twin. Real-time performance tracking, predictive maintenance, savings verification.
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-red-600 mr-4">05</span>
                <h3 className="text-xl font-bold text-gray-900">Integrate with ESG Reporting</h3>
              </div>
              <p className="text-gray-700">
                Provide auditable emissions data for BRSR and CBAM reports. Data verification, ESG integration, automated reporting.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-br from-sgt-green to-green-800 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-4xl font-bold mb-6">Our Core Deliverable: Auditable ESG Data</h2>
          <p className="text-xl text-green-100 mb-8">
            While we implement decarbonization technologies, our ultimate deliverable is verified, auditable emissions data that populates your ESG reports with confidence.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="font-bold mb-3">What We Provide:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Verified Scope 1, 2, 3 emissions data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>BRSR-ready reports (Section C)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>CBAM quarterly declarations</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="font-bold mb-3">Audit Trail:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sensor calibration certificates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Methodology documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Third-party verification support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose GreenMentor
            </h2>
            <p className="text-xl text-gray-600">
              Engineering expertise + technology neutrality + ESG focus
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <Award className="w-12 h-12 text-sgt-green mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Engineering Excellence</h3>
              <p className="text-sm text-gray-700">
                Deep expertise in combustion systems and industrial processes - true engineering partners, not product vendors.
              </p>
            </div>


            <div className="bg-gray-50 rounded-xl p-6">
              <Target className="w-12 h-12 text-sgt-green mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Technology Agnostic</h3>
              <p className="text-sm text-gray-700">
                We recommend the best solution - SGT, competitors, or hybrid approaches. Your success is our success.
              </p>
            </div>


            <div className="bg-gray-50 rounded-xl p-6">
              <FileText className="w-12 h-12 text-sgt-green mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">ESG Data Focus</h3>
              <p className="text-sm text-gray-700">
                Auditable emissions data that your ESG team, auditors, and stakeholders can trust.
              </p>
            </div>


            <div className="bg-gray-50 rounded-xl p-6">
              <TrendingUp className="w-12 h-12 text-sgt-green mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">ROI Optimization</h3>
              <p className="text-sm text-gray-700">
                Maximum carbon reduction per rupee invested - environmental impact and financial returns.
              </p>
            </div>


            <div className="bg-gray-50 rounded-xl p-6">
              <Users className="w-12 h-12 text-sgt-green mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">End-to-End Support</h3>
              <p className="text-sm text-gray-700">
                From baseline assessment to ongoing monitoring - one team manages your entire journey.
              </p>
            </div>


            <div className="bg-gray-50 rounded-xl p-6">
              <Database className="w-12 h-12 text-sgt-green mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">GreenVision Integration</h3>
              <p className="text-sm text-gray-700">
                Every project includes digital twin monitoring and automated reporting.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Decarbonization Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a consultation with our engineering team
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-sgt-green text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-green-700">
              Schedule Engineering Consultation
            </button>
            <button className="bg-white border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg text-lg font-bold hover:border-sgt-green">
              Download Capabilities Brief
            </button>
          </div>
        </div>
      </section>


      <style>{`
        .text-sgt-green { color: #1B6B3D; }
        .bg-sgt-green { background-color: #1B6B3D; }
        .hover\\:bg-green-50:hover { background-color: #f0fdf4; }
        .hover\\:bg-green-700:hover { background-color: #155a33; }
        .hover\\:border-sgt-green:hover { border-color: #1B6B3D; }
      `}</style>
    </div>
  );
};


export default GreenMentorPage;