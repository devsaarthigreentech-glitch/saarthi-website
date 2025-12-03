// import React, { useState } from 'react';

// const FinalCTA = () => {
//   const [formData, setFormData] = useState({
//     industry: '',
//     engineCount: '',
//     monthlyDieselSpend: '',
//     name: '',
//     email: '',
//   });
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Note: For a real application, this would post data to a server/CRM.
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     // Simulate form submission success/failure
//     setTimeout(() => {
//       setLoading(false);
//       if (formData.email && formData.name) {
//         setMessage('Thank you! Your custom retrofit scenario request has been submitted. We will be in touch shortly.');
//         setFormData({ industry: '', engineCount: '', monthlyDieselSpend: '', name: '', email: '' }); // Clear form
//       } else {
//         setMessage('Please fill in at least your Name and Email address.');
//       }
//     }, 1500);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     // High-contrast section using the brand green for the background
//     <section id="final-cta" className="py-20 md:py-28 lg:py-36 bg-[var(--brand,#33A04A)] dark:bg-slate-900/90 text-white">
//       <div className="container mx-auto px-4 max-w-7xl">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
//           {/* Left Column: Heading and Subheading */}
//           <div className="lg:pr-10">
//             <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
//               Ready to Decarbonise Your Engines with Verified Savings?
//             </h2>
//             <p className="text-xl md:text-2xl opacity-90 mb-8">
//               Share a few details and we’ll create a customised retrofit scenario for your fleet, DG sets or marine engines.
//             </p>
            
//             {/* Secondary Button */}
//             <a 
//               href="/contact"
//               className="inline-block px-6 py-3 text-lg font-bold border border-white rounded-lg transition-colors duration-300 hover:bg-white hover:text-[var(--brand,#33A04A)]"
//             >
//               Contact Us
//             </a>
//           </div>
          
//           {/* Right Column: Lead Capture Form */}
//           <div className="bg-white dark:bg-slate-700 p-8 md:p-10 rounded-xl shadow-2xl text-slate-800 dark:text-white">
            
//             <form onSubmit={handleSubmit} className="space-y-6">
              
//               {/* Field 1: Industry (Dropdown is better for consistency) */}
//               <div>
//                 <label htmlFor="industry" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Industry</label>
//                 <select 
//                   id="industry" 
//                   name="industry"
//                   value={formData.industry}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand,#33A04A)] focus:border-[var(--brand,#33A04A)] dark:bg-slate-600 dark:border-slate-600 dark:text-white"
//                 >
//                   <option value="" disabled>Select Industry</option>
//                   <option value="logistics">Logistics & Transportation</option>
//                   <option value="manufacturing">Manufacturing</option>
//                   <option value="marine">Marine / Shipping</option>
//                   <option value="mining">Mining / Construction</option>
//                   <option value="data-center">Data Center</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               {/* Field 2: Engine Count */}
//               <div>
//                 <label htmlFor="engineCount" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Total Engine Count</label>
//                 <input 
//                   type="number" 
//                   id="engineCount" 
//                   name="engineCount"
//                   placeholder="e.g., 50"
//                   value={formData.engineCount}
//                   onChange={handleChange}
//                   min="1"
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand,#33A04A)] focus:border-[var(--brand,#33A04A)] dark:bg-slate-600 dark:border-slate-600 dark:text-white"
//                 />
//               </div>

//               {/* Field 3: Monthly Diesel Spend */}
//               <div>
//                 <label htmlFor="monthlyDieselSpend" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Monthly Diesel Spend (USD)</label>
//                 <input 
//                   type="number" 
//                   id="monthlyDieselSpend" 
//                   name="monthlyDieselSpend"
//                   placeholder="e.g., 20000"
//                   value={formData.monthlyDieselSpend}
//                   onChange={handleChange}
//                   min="0"
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand,#33A04A)] focus:border-[var(--brand,#33A04A)] dark:bg-slate-600 dark:border-slate-600 dark:text-white"
//                 />
//               </div>

//               {/* Field 4: Name */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Name</label>
//                 <input 
//                   type="text" 
//                   id="name" 
//                   name="name"
//                   placeholder="John Doe"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand,#33A04A)] focus:border-[var(--brand,#33A04A)] dark:bg-slate-600 dark:border-slate-600 dark:text-white"
//                 />
//               </div>

//               {/* Field 5: Email */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Email</label>
//                 <input 
//                   type="email" 
//                   id="email" 
//                   name="email"
//                   placeholder="you@company.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand,#33A04A)] focus:border-[var(--brand,#33A04A)] dark:bg-slate-600 dark:border-slate-600 dark:text-white"
//                 />
//               </div>

//               {/* Primary Button */}
//               <button 
//                 type="submit"
//                 disabled={loading}
//                 className="w-full mt-4 flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-[var(--brand,#33A04A)] rounded-lg shadow-md hover:bg-[var(--brand-dark,#2a853d)] transition-colors duration-300 disabled:opacity-50"
//               >
//                 {loading ? (
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                 ) : (
//                   'Get My Retrofit Scenario'
//                 )}
//               </button>
              
//               {/* Submission Message */}
//               {message && (
//                 <div className={`mt-4 p-3 rounded-lg text-center ${message.includes('Thank you') ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'}`}>
//                   {message}
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FinalCTA;
"use client";
import React, { useState } from 'react';

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    industry: '',
    engineCount: '',
    monthlyDieselSpend: '',
    name: '',
    email: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Note: For a real application, this would post data to a server/CRM.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Simulate form submission success/failure
    setTimeout(() => {
      setLoading(false);
      if (formData.email && formData.name) {
        setMessage('Thank you! Your custom retrofit scenario request has been submitted. We will be in touch shortly.');
        setFormData({ industry: '', engineCount: '', monthlyDieselSpend: '', name: '', email: '' }); // Clear form
      } else {
        setMessage('Please fill in at least your Name and Email address.');
      }
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    // High-contrast section using the brand green for the background
    <section id="final-cta" className="py-20 md:py-28 lg:py-36 bg-[var(--brand,#33A04A)] dark:bg-slate-900/90 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading and Subheading */}
          <div className="lg:pr-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready to Decarbonise Your Engines with Verified Savings?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Share a few details and we’ll create a customised retrofit scenario for your fleet, DG sets or marine engines.
            </p>
            
            {/* Secondary Button */}
            <a 
              href="/contact"
              className="inline-block px-6 py-3 text-lg font-bold border border-white rounded-lg transition-colors duration-300 hover:bg-white hover:text-[var(--brand,#33A04A)]"
            >
              Contact Us
            </a>
          </div>
          
          {/* Right Column: Lead Capture Form */}
          <div className="bg-white dark:bg-slate-700 p-8 md:p-10 rounded-xl shadow-2xl text-slate-800 dark:text-white">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Field 1: Industry (Dropdown is better for consistency) */}
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Industry</label>
                <select 
                  id="industry" 
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand,#33A04A)] focus:border-[var(--brand,#33A04A)] dark:bg-slate-600 dark:border-slate-600 dark:text-white"
                >
                  <option value="" disabled>Select Industry</option>
                  <option value="logistics">Logistics & Transportation</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="marine">Marine / Shipping</option>
                  <option value="mining">Mining / Construction</option>
                  <option value="data-center">Data Center</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Field 2: Engine Count */}
              <div>
                <label htmlFor="engineCount" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Total Engine Count</label>
                <input 
                  type="number" 
                  id="engineCount" 
                  name="engineCount"
                  placeholder="e.g., 50"
                  value={formData.engineCount}
                  onChange={handleChange}
                  min="1"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand,#33A04A)] focus:border-[var(--brand,#33A04A)] dark:bg-slate-600 dark:border-slate-600 dark:text-white"
                />
              </div>

              {/* Field 3: Monthly Diesel Spend */}
              <div>
                <label htmlFor="monthlyDieselSpend" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Monthly Diesel Spend (USD)</label>
                <input 
                  type="number" 
                  id="monthlyDieselSpend" 
                  name="monthlyDieselSpend"
                  placeholder="e.g., 20000"
                  value={formData.monthlyDieselSpend}
                  onChange={handleChange}
                  min="0"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand,#33A04A)] focus:border-[var(--brand,#33A04A)] dark:bg-slate-600 dark:border-slate-600 dark:text-white"
                />
              </div>

              {/* Field 4: Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="Raj Kapoor"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand,#33A04A)] focus:border-[var(--brand,#33A04A)] dark:bg-slate-600 dark:border-slate-600 dark:text-white"
                />
              </div>

              {/* Field 5: Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand,#33A04A)] focus:border-[var(--brand,#33A04A)] dark:bg-slate-600 dark:border-slate-600 dark:text-white"
                />
              </div>

              {/* Primary Button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full mt-4 flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-[var(--brand,#33A04A)] rounded-lg shadow-md hover:bg-[var(--brand-dark,#2a853d)] transition-colors duration-300 disabled:opacity-50"
              >
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Get My Retrofit Scenario'
                )}
              </button>
              
              {/* Submission Message */}
              {message && (
                <div className={`mt-4 p-3 rounded-lg text-center ${message.includes('Thank you') ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;