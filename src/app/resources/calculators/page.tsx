// // // import React, { useState, useMemo, useEffect } from 'react';

// // // // --- CONFIGURATION CONSTANTS (Easily Configurable) ---

// // // const CONFIG = {
// // //     // Default 10% fuel saving assumption for Saarthi systems
// // //     FUEL_SAVING_PERCENT: 10, 
// // //     // kg CO₂ emitted per litre of diesel burnt (Standard factor)
// // //     CO2_PER_LITER_DIESEL: 2.68, 
// // //     // Mapping of countries to currency symbols
// // //     countryCurrencyMap: {
// // //         "India": { symbol: "₹", placeholderPrice: 95.00 },
// // //         "United Kingdom": { symbol: "£", placeholderPrice: 1.50 },
// // //         "United States": { symbol: "$", placeholderPrice: 1.05 },
// // //         "Europe": { symbol: "€", placeholderPrice: 1.80 },
// // //         "Australia": { symbol: "A$", placeholderPrice: 1.85 },
// // //         "South Africa": { symbol: "R", placeholderPrice: 25.00 },
// // //     },
// // // };

// // // // --- THEME COLORS (Based on Saarthi Green) ---
// // // const BRAND_COLOR = '#33A04A'; // Primary Saarthi Green
// // // const BG_DARK = '#1f2937';      // Dark background (gray-800 equivalent)
// // // const BG_LIGHT = '#ffffff';     // Light card background

// // // // --- HELPER FUNCTIONS ---

// // // const formatNumber = (num, decimalPlaces = 0, currencySymbol = '') => {
// // //     if (isNaN(num)) return `${currencySymbol} 0`;
// // //     const formatted = new Intl.NumberFormat('en-US', {
// // //         minimumFractionDigits: decimalPlaces,
// // //         maximumFractionDigits: decimalPlaces,
// // //     }).format(num);
// // //     return currencySymbol ? `${currencySymbol} ${formatted}` : formatted;
// // // };

// // // // --- CALCULATOR LOGIC FUNCTION ---

// // // const calculateResults = (inputs) => {
// // //     const { applicationType, vehicleCategory, monthlyMileageKm, fuelAverageKmPerLitre, dieselCostPerLitre, engineHoursPerDay, fuelLitresPerHour, monthlyFuelLitresDG } = inputs;
// // //     const { FUEL_SAVING_PERCENT, CO2_PER_LITER_DIESEL } = CONFIG;

// // //     let annualFuelLitres = 0;

// // //     if (applicationType === "Vehicle") {
// // //         if (vehicleCategory === "Logistics" || vehicleCategory === "Transport") {
// // //             if (monthlyMileageKm > 0 && fuelAverageKmPerLitre > 0) {
// // //                 const monthlyFuelLitres = monthlyMileageKm / fuelAverageKmPerLitre;
// // //                 annualFuelLitres = monthlyFuelLitres * 12;
// // //             }
// // //         } else if (vehicleCategory === "Construction" || vehicleCategory === "Mining") {
// // //             if (engineHoursPerDay > 0 && fuelLitresPerHour > 0) {
// // //                 const monthlyHours = engineHoursPerDay * 30.4167; // Average days per month
// // //                 const monthlyFuelLitres = monthlyHours * fuelLitresPerHour;
// // //                 annualFuelLitres = monthlyFuelLitres * 12;
// // //             }
// // //         }
// // //     } else if (applicationType === "DG") {
// // //         if (monthlyFuelLitresDG > 0) {
// // //             annualFuelLitres = monthlyFuelLitresDG * 12;
// // //         }
// // //     }

// // //     if (annualFuelLitres === 0 || dieselCostPerLitre <= 0) {
// // //         return null;
// // //     }

// // //     const annualFuelSavedLitres = annualFuelLitres * (FUEL_SAVING_PERCENT / 100);
// // //     const annualCostSaved = annualFuelSavedLitres * dieselCostPerLitre;
// // //     const annualCO2ReductionKg = annualFuelSavedLitres * CO2_PER_LITER_DIESEL;

// // //     return {
// // //         annualFuelSavedLitres,
// // //         annualCO2ReductionKg,
// // //         annualCostSaved,
// // //         annualFuelLitres,
// // //     };
// // // };

// // // // --- UI COMPONENTS ---

// // // const InputField = ({ label, name, value, onChange, placeholder, prefix, type = 'number', unit = '', min = 0, required = true, error }) => (
// // //     <div className="flex flex-col space-y-1">
// // //         <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
// // //             {label} {required && <span className="text-red-500">*</span>}
// // //         </label>
// // //         <div className="relative flex rounded-xl shadow-sm overflow-hidden border dark:border-gray-700">
// // //             {prefix && (
// // //                 <span className="inline-flex items-center px-4 bg-gray-50 dark:bg-gray-700 border-r dark:border-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm font-semibold">
// // //                     {prefix}
// // //                 </span>
// // //             )}
// // //             <input
// // //                 id={name}
// // //                 name={name}
// // //                 type={type}
// // //                 value={value}
// // //                 onChange={onChange}
// // //                 min={min}
// // //                 placeholder={placeholder}
// // //                 step={type === 'number' ? '0.1' : undefined}
// // //                 className="block w-full p-3 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-0 focus:border-transparent transition duration-150"
// // //                 style={{ outline: 'none' }}
// // //                 required={required}
// // //             />
// // //             {unit && (
// // //                 <span className="inline-flex items-center px-4 bg-gray-50 dark:bg-gray-700 border-l dark:border-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm font-semibold">
// // //                     {unit}
// // //                 </span>
// // //             )}
// // //         </div>
// // //         {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
// // //     </div>
// // // );

// // // const SelectField = ({ label, name, value, onChange, options, error }) => (
// // //     <div className="flex flex-col space-y-1">
// // //         <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
// // //             {label} <span className="text-red-500">*</span>
// // //         </label>
// // //         <div className="relative">
// // //             <select
// // //                 id={name}
// // //                 name={name}
// // //                 value={value}
// // //                 onChange={onChange}
// // //                 className="block w-full p-3 text-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-xl shadow-sm appearance-none transition duration-150 focus:ring-2"
// // //                 style={{ borderColor: BRAND_COLOR, borderWidth: '1px' }}
// // //                 required
// // //             >
// // //                 <option value="">Select...</option>
// // //                 {options.map(opt => (
// // //                     <option key={opt.value || opt} value={opt.value || opt}>
// // //                         {opt.label || opt}
// // //                     </option>
// // //                 ))}
// // //             </select>
// // //             {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
// // //         </div>
// // //     </div>
// // // );

// // // const ResultCard = ({ results, currencySymbol, savingPercent, co2Factor }) => (
// // //     <div className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-t-4" style={{ borderColor: BRAND_COLOR }}>
// // //         <h3 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white text-center">
// // //             Your Estimated Annual Impact
// // //         </h3>
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
// // //             {/* Annual Cost Saving */}
// // //             <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
// // //                 <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
// // //                     {formatNumber(results.annualCostSaved, 0, currencySymbol)}
// // //                 </p>
// // //                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
// // //                     Annual Cost Saving
// // //                 </p>
// // //             </div>

// // //             {/* Annual Fuel Saved */}
// // //             <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
// // //                 <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
// // //                     {formatNumber(results.annualFuelSavedLitres, 0)}
// // //                 </p>
// // //                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
// // //                     Fuel Saved (Litres)
// // //                 </p>
// // //             </div>

// // //             {/* Annual CO₂ Reduction */}
// // //             <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
// // //                 <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
// // //                     {formatNumber(results.annualCO2ReductionKg, 0)}
// // //                 </p>
// // //                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
// // //                     CO₂ Reduced (kg)
// // //                 </p>
// // //             </div>
// // //         </div>

// // //         <p className="text-center text-sm italic mt-8 text-gray-500 dark:text-gray-400">
// // //             *Assumes a conservative fuel saving of {savingPercent}% and {co2Factor} kg CO₂ per litre of diesel. Results are estimates only.
// // //         </p>
// // //     </div>
// // // );

// // // // --- MAIN COMPONENT ---

// // // const initialFormState = {
// // //     country: '',
// // //     applicationType: '',
// // //     vehicleCategory: '',
// // //     // Calculation Inputs
// // //     monthlyMileageKm: 10000,
// // //     fuelAverageKmPerLitre: 3.5,
// // //     dieselCostPerLitre: 95,
// // //     engineHoursPerDay: 8,
// // //     fuelLitresPerHour: 15,
// // //     dgHoursPerMonth: 250,
// // //     monthlyFuelLitresDG: 3000,
// // // };

// // // const SavingsCalculator = () => {
// // //     const [inputs, setInputs] = useState(initialFormState);
// // //     const [errors, setErrors] = useState({});
// // //     const [calculatedResults, setCalculatedResults] = useState(null);

// // //     const countryOptions = Object.keys(CONFIG.countryCurrencyMap).map(c => ({ label: c, value: c }));
// // //     const applicationOptions = ['Vehicle', 'DG', 'Marine'];
// // //     const vehicleCategoryOptions = ['Logistics', 'Transport', 'Construction', 'Mining'];

// // //     // Memoized Currency Symbol and Placeholder Price
// // //     const currencyInfo = useMemo(() => CONFIG.countryCurrencyMap[inputs.country] || { symbol: '$', placeholderPrice: 1.05 }, [inputs.country]);
// // //     const currencySymbol = currencyInfo.symbol;

// // //     // Reset irrelevant fields when major selections change
// // //     useEffect(() => {
// // //         setInputs(prev => ({
// // //             ...prev,
// // //             vehicleCategory: prev.applicationType === 'Vehicle' ? prev.vehicleCategory : '',
// // //         }));
// // //         setCalculatedResults(null);
// // //     }, [inputs.applicationType]);

// // //     useEffect(() => {
// // //         // Update diesel cost placeholder when country changes
// // //         setInputs(prev => ({
// // //             ...prev,
// // //             dieselCostPerLitre: currencyInfo.placeholderPrice,
// // //         }));
// // //         setCalculatedResults(null);
// // //     }, [inputs.country, currencyInfo.placeholderPrice]);
    
// // //     useEffect(() => {
// // //         setCalculatedResults(null);
// // //     }, [inputs.vehicleCategory]);


// // //     const handleChange = (e) => {
// // //         const { name, value, type } = e.target;
        
// // //         let processedValue = value;
// // //         if (type === 'number') {
// // //             processedValue = value === '' ? '' : parseFloat(value);
// // //         }

// // //         setInputs(prev => ({
// // //             ...prev,
// // //             [name]: processedValue
// // //         }));
        
// // //         // Clear the specific error for the field being edited
// // //         if (errors[name]) {
// // //             setErrors(prev => {
// // //                 const newErrors = { ...prev };
// // //                 delete newErrors[name];
// // //                 return newErrors;
// // //             });
// // //         }
// // //         setCalculatedResults(null);
// // //     };

// // //     const validateInputs = () => {
// // //         const newErrors = {};

// // //         // Helper to check if a required field is missing or invalid
// // //         const checkRequired = (field, message) => {
// // //             const val = inputs[field];
// // //             if (val === '' || val === null || (typeof val === 'number' && val <= 0)) {
// // //                 newErrors[field] = message || "Please enter a value greater than zero.";
// // //             }
// // //         };

// // //         // Step 1 & 2 Validation
// // //         checkRequired('country', 'Please select your country.');
// // //         checkRequired('applicationType', 'Please select the application type.');
// // //         checkRequired('dieselCostPerLitre', 'Please enter the cost of diesel.');


// // //         // Conditional Validation
// // //         if (inputs.applicationType === 'Vehicle') {
// // //             checkRequired('vehicleCategory', 'Please select a vehicle category.');
// // //             if (inputs.vehicleCategory === 'Logistics' || inputs.vehicleCategory === 'Transport') {
// // //                 checkRequired('monthlyMileageKm');
// // //                 checkRequired('fuelAverageKmPerLitre');
// // //             } else if (inputs.vehicleCategory === 'Construction' || inputs.vehicleCategory === 'Mining') {
// // //                 checkRequired('engineHoursPerDay');
// // //                 checkRequired('fuelLitresPerHour');
// // //             }
// // //         } else if (inputs.applicationType === 'DG') {
// // //             checkRequired('dgHoursPerMonth');
// // //             checkRequired('monthlyFuelLitresDG');
// // //         }

// // //         setErrors(newErrors);
// // //         return Object.keys(newErrors).length === 0;
// // //     };

// // //     const handleSubmit = (e) => {
// // //         e.preventDefault();
// // //         if (validateInputs()) {
// // //             const results = calculateResults(inputs);
// // //             setCalculatedResults(results);
// // //         }
// // //     };

// // //     const renderVehicleInputs = () => {
// // //         if (!inputs.vehicleCategory) return null;

// // //         const commonInput = (
// // //             <InputField
// // //                 label={`Cost of diesel per litre (${currencySymbol})`}
// // //                 name="dieselCostPerLitre"
// // //                 value={inputs.dieselCostPerLitre}
// // //                 onChange={handleChange}
// // //                 placeholder={currencyInfo.placeholderPrice}
// // //                 prefix={currencySymbol}
// // //                 unit=" / Litre"
// // //                 error={errors.dieselCostPerLitre}
// // //             />
// // //         );

// // //         if (inputs.vehicleCategory === 'Logistics' || inputs.vehicleCategory === 'Transport') {
// // //             return (
// // //                 <div className="space-y-6">
// // //                     <InputField
// // //                         label="Average Monthly Distance (km)"
// // //                         name="monthlyMileageKm"
// // //                         value={inputs.monthlyMileageKm}
// // //                         onChange={handleChange}
// // //                         placeholder="e.g., 10000"
// // //                         unit="km"
// // //                         error={errors.monthlyMileageKm}
// // //                     />
// // //                     <InputField
// // //                         label="Current Fuel Average (km per litre)"
// // //                         name="fuelAverageKmPerLitre"
// // //                         value={inputs.fuelAverageKmPerLitre}
// // //                         onChange={handleChange}
// // //                         placeholder="e.g., 3.5"
// // //                         unit="km/L"
// // //                         error={errors.fuelAverageKmPerLitre}
// // //                     />
// // //                     {commonInput}
// // //                 </div>
// // //             );
// // //         } else if (inputs.vehicleCategory === 'Construction' || inputs.vehicleCategory === 'Mining') {
// // //             return (
// // //                 <div className="space-y-6">
// // //                     <InputField
// // //                         label="Average Engine Usage per Day (Hours)"
// // //                         name="engineHoursPerDay"
// // //                         value={inputs.engineHoursPerDay}
// // //                         onChange={handleChange}
// // //                         placeholder="e.g., 8"
// // //                         unit="Hours"
// // //                         error={errors.engineHoursPerDay}
// // //                     />
// // //                     <InputField
// // //                         label="Average Diesel Consumption per Hour (Litres)"
// // //                         name="fuelLitresPerHour"
// // //                         value={inputs.fuelLitresPerHour}
// // //                         onChange={handleChange}
// // //                         placeholder="e.g., 15"
// // //                         unit="L / Hour"
// // //                         error={errors.fuelLitresPerHour}
// // //                     />
// // //                     {commonInput}
// // //                 </div>
// // //             );
// // //         }
// // //         return null;
// // //     };

// // //     const renderDGInputs = () => {
// // //         return (
// // //             <div className="space-y-6">
// // //                 <InputField
// // //                     label="Hours of DG usage per Month"
// // //                     name="dgHoursPerMonth"
// // //                     value={inputs.dgHoursPerMonth}
// // //                     onChange={handleChange}
// // //                     placeholder="e.g., 250"
// // //                     unit="Hours"
// // //                     error={errors.dgHoursPerMonth}
// // //                 />
// // //                 <InputField
// // //                     label="Total Diesel Consumption per Month (Litres)"
// // //                     name="monthlyFuelLitresDG"
// // //                     value={inputs.monthlyFuelLitresDG}
// // //                     onChange={handleChange}
// // //                     placeholder="e.g., 3000"
// // //                     unit="Litres"
// // //                     error={errors.monthlyFuelLitresDG}
// // //                 />
// // //                 <InputField
// // //                     label={`Cost of diesel per litre (${currencySymbol})`}
// // //                     name="dieselCostPerLitre"
// // //                     value={inputs.dieselCostPerLitre}
// // //                     onChange={handleChange}
// // //                     placeholder={currencyInfo.placeholderPrice}
// // //                     prefix={currencySymbol}
// // //                     unit=" / Litre"
// // //                     error={errors.dieselCostPerLitre}
// // //                 />
// // //             </div>
// // //         );
// // //     };
    
// // //     const renderMarineMessage = () => (
// // //         <div className="p-8 bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 rounded-xl text-yellow-800 dark:text-yellow-200">
// // //             <h4 className="text-2xl font-bold mb-4">Custom Marine Estimate</h4>
// // //             <p className="text-lg">
// // //                 Marine engines are highly application-specific and complex. Please contact us and we will provide a customised savings & CO₂ reduction estimate for your vessel.
// // //             </p>
// // //             <button
// // //                 type="button"
// // //                 className="mt-6 w-full px-6 py-3 text-lg font-bold rounded-xl shadow-md transition duration-300 transform hover:scale-[1.01] text-white"
// // //                 style={{ backgroundColor: BRAND_COLOR }}
// // //                 onClick={() => alert("Simulating Marine Savings Estimate Request. In a real app, this would open a dedicated lead form.")}
// // //             >
// // //                 Request Marine Savings Estimate
// // //             </button>
// // //             <p className="text-xs mt-3 opacity-80">
// // //                 (Note: This button simulates opening a contact form for Name, Company, Email, Vessel Type, etc.)
// // //             </p>
// // //         </div>
// // //     );

// // //     return (
// // //         <div className="min-h-screen p-8 md:p-12 bg-gray-100 dark:bg-gray-900 font-sans">
// // //             <div className="max-w-4xl mx-auto">
// // //                 {/* Header */}
// // //                 <header className="text-center mb-12">
// // //                     <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
// // //                         Estimated Savings Calculator
// // //                     </h1>
// // //                     <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
// // //                         See your potential annual fuel cost savings and CO₂ reduction by implementing Saarthi GreenTech systems.
// // //                     </p>
// // //                 </header>

// // //                 {/* Calculator Card */}
// // //                 <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-white dark:bg-gray-950 rounded-3xl shadow-2xl border-t-8" style={{ borderColor: BRAND_COLOR }}>
// // //                     <div className="space-y-8">
// // //                         {/* Step 1: Country Selection */}
// // //                         <div className="p-4 rounded-xl border dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
// // //                             <h4 className="text-xl font-bold mb-4" style={{ color: BRAND_COLOR }}>Step 1: Location & Cost</h4>
// // //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                                 <SelectField
// // //                                     label="Select Country"
// // //                                     name="country"
// // //                                     value={inputs.country}
// // //                                     onChange={handleChange}
// // //                                     options={countryOptions}
// // //                                     error={errors.country}
// // //                                 />
// // //                                 <InputField
// // //                                     label={`Cost of diesel per litre (estimated ${currencySymbol})`}
// // //                                     name="dieselCostPerLitre"
// // //                                     value={inputs.dieselCostPerLitre}
// // //                                     onChange={handleChange}
// // //                                     placeholder={currencyInfo.placeholderPrice}
// // //                                     prefix={currencySymbol}
// // //                                     unit=" / Litre"
// // //                                     error={errors.dieselCostPerLitre}
// // //                                 />
// // //                             </div>
// // //                         </div>

// // //                         {/* Step 2: Application Type Selection */}
// // //                         <div className={`p-4 rounded-xl border dark:border-gray-800 ${inputs.country ? 'bg-white dark:bg-gray-800' : 'bg-gray-200 dark:bg-gray-700 opacity-50'}`}>
// // //                             <h4 className="text-xl font-bold mb-4" style={{ color: BRAND_COLOR }}>Step 2: Application Details</h4>
// // //                             <SelectField
// // //                                 label="Application Type"
// // //                                 name="applicationType"
// // //                                 value={inputs.applicationType}
// // //                                 onChange={handleChange}
// // //                                 options={applicationOptions}
// // //                                 error={errors.applicationType}
// // //                             />
// // //                         </div>

// // //                         {/* Step 2A: Vehicle Category (Progressive Reveal) */}
// // //                         {inputs.applicationType === 'Vehicle' && (
// // //                             <div className="p-4 rounded-xl border dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
// // //                                 <h4 className="text-xl font-bold mb-4" style={{ color: BRAND_COLOR }}>Step 2A: Vehicle Category</h4>
// // //                                 <SelectField
// // //                                     label="Vehicle Category"
// // //                                     name="vehicleCategory"
// // //                                     value={inputs.vehicleCategory}
// // //                                     onChange={handleChange}
// // //                                     options={vehicleCategoryOptions}
// // //                                     error={errors.vehicleCategory}
// // //                                 />
// // //                             </div>
// // //                         )}

// // //                         {/* Step 3: Specific Inputs (Progressive Reveal) */}
// // //                         <div className="p-4 rounded-xl border dark:border-gray-800 bg-white dark:bg-gray-800">
// // //                             <h4 className="text-xl font-bold mb-6" style={{ color: BRAND_COLOR }}>Step 3: Usage Parameters</h4>
                            
// // //                             {inputs.applicationType === 'Vehicle' && renderVehicleInputs()}
// // //                             {inputs.applicationType === 'DG' && renderDGInputs()}
// // //                             {inputs.applicationType === 'Marine' && renderMarineMessage()}
                            
// // //                             {/* Calculation Trigger */}
// // //                             {inputs.applicationType !== 'Marine' && (
// // //                                 <button
// // //                                     type="submit"
// // //                                     className="mt-8 w-full px-6 py-4 text-xl font-bold rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.01] text-white"
// // //                                     style={{ backgroundColor: BRAND_COLOR, filter: 'brightness(0.95)' }}
// // //                                 >
// // //                                     Calculate Estimated Annual Impact
// // //                                 </button>
// // //                             )}
// // //                         </div>
// // //                     </div>
// // //                 </form>

// // //                 {/* Results Block */}
// // //                 {calculatedResults && (
// // //                     <ResultCard
// // //                         results={calculatedResults}
// // //                         currencySymbol={currencySymbol}
// // //                         savingPercent={CONFIG.FUEL_SAVING_PERCENT}
// // //                         co2Factor={CONFIG.CO2_PER_LITER_DIESEL}
// // //                     />
// // //                 )}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default SavingsCalculator;
// // 'use client';

// // import React, { useState, useMemo, useEffect } from 'react';

// // // --- CONFIGURATION CONSTANTS (Easily Configurable) ---

// // const CONFIG = {
// //     // Default 10% fuel saving assumption for Saarthi systems
// //     FUEL_SAVING_PERCENT: 10, 
// //     // kg CO₂ emitted per litre of diesel burnt (Standard factor)
// //     CO2_PER_LITER_DIESEL: 2.68, 
// //     // Mapping of countries to currency symbols
// //     countryCurrencyMap: {
// //         "India": { symbol: "₹", placeholderPrice: 95.00 },
// //         "United Kingdom": { symbol: "£", placeholderPrice: 1.50 },
// //         "United States": { symbol: "$", placeholderPrice: 1.05 },
// //         "Europe": { symbol: "€", placeholderPrice: 1.80 },
// //         "Australia": { symbol: "A$", placeholderPrice: 1.85 },
// //         "South Africa": { symbol: "R", placeholderPrice: 25.00 },
// //     },
// // };

// // // --- THEME COLORS (Based on Saarthi Green) ---
// // const BRAND_COLOR = '#33A04A'; // Primary Saarthi Green
// // const BG_DARK = '#1f2937';      // Dark background (gray-800 equivalent)
// // const BG_LIGHT = '#ffffff';     // Light card background

// // // --- HELPER FUNCTIONS ---

// // const formatNumber = (num, decimalPlaces = 0, currencySymbol = '') => {
// //     if (isNaN(num)) return `${currencySymbol} 0`;
// //     const formatted = new Intl.NumberFormat('en-US', {
// //         minimumFractionDigits: decimalPlaces,
// //         maximumFractionDigits: decimalPlaces,
// //     }).format(num);
// //     return currencySymbol ? `${currencySymbol} ${formatted}` : formatted;
// // };

// // // --- CALCULATOR LOGIC FUNCTION ---

// // const calculateResults = (inputs) => {
// //     const { applicationType, vehicleCategory, monthlyMileageKm, fuelAverageKmPerLitre, dieselCostPerLitre, engineHoursPerDay, fuelLitresPerHour, monthlyFuelLitresDG } = inputs;
// //     const { FUEL_SAVING_PERCENT, CO2_PER_LITER_DIESEL } = CONFIG;

// //     let annualFuelLitres = 0;

// //     if (applicationType === "Vehicle") {
// //         if (vehicleCategory === "Logistics" || vehicleCategory === "Transport") {
// //             if (monthlyMileageKm > 0 && fuelAverageKmPerLitre > 0) {
// //                 const monthlyFuelLitres = monthlyMileageKm / fuelAverageKmPerLitre;
// //                 annualFuelLitres = monthlyFuelLitres * 12;
// //             }
// //         } else if (vehicleCategory === "Construction" || vehicleCategory === "Mining") {
// //             if (engineHoursPerDay > 0 && fuelLitresPerHour > 0) {
// //                 const monthlyHours = engineHoursPerDay * 30.4167; // Average days per month
// //                 const monthlyFuelLitres = monthlyHours * fuelLitresPerHour;
// //                 annualFuelLitres = monthlyFuelLitres * 12;
// //             }
// //         }
// //     } else if (applicationType === "DG") {
// //         if (monthlyFuelLitresDG > 0) {
// //             annualFuelLitres = monthlyFuelLitresDG * 12;
// //         }
// //     }

// //     if (annualFuelLitres === 0 || dieselCostPerLitre <= 0) {
// //         return null;
// //     }

// //     const annualFuelSavedLitres = annualFuelLitres * (FUEL_SAVING_PERCENT / 100);
// //     const annualCostSaved = annualFuelSavedLitres * dieselCostPerLitre;
// //     const annualCO2ReductionKg = annualFuelSavedLitres * CO2_PER_LITER_DIESEL;

// //     return {
// //         annualFuelSavedLitres,
// //         annualCO2ReductionKg,
// //         annualCostSaved,
// //         annualFuelLitres,
// //     };
// // };

// // // --- UI COMPONENTS ---

// // const InputField = ({ label, name, value, onChange, placeholder, prefix, type = 'number', unit = '', min = 0, required = true, error }) => (
// //     <div className="flex flex-col space-y-1">
// //         <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
// //             {label} {required && <span className="text-red-500">*</span>}
// //         </label>
// //         <div className="relative flex rounded-xl shadow-sm overflow-hidden border dark:border-gray-700">
// //             {prefix && (
// //                 <span className="inline-flex items-center px-4 bg-gray-50 dark:bg-gray-700 border-r dark:border-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm font-semibold">
// //                     {prefix}
// //                 </span>
// //             )}
// //             <input
// //                 id={name}
// //                 name={name}
// //                 type={type}
// //                 value={value}
// //                 onChange={onChange}
// //                 min={min}
// //                 placeholder={placeholder}
// //                 step={type === 'number' ? '0.1' : undefined}
// //                 className="block w-full p-3 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-0 focus:border-transparent transition duration-150"
// //                 style={{ outline: 'none' }}
// //                 required={required}
// //             />
// //             {unit && (
// //                 <span className="inline-flex items-center px-4 bg-gray-50 dark:bg-gray-700 border-l dark:border-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm font-semibold">
// //                     {unit}
// //                 </span>
// //             )}
// //         </div>
// //         {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
// //     </div>
// // );

// // const SelectField = ({ label, name, value, onChange, options, error }) => (
// //     <div className="flex flex-col space-y-1">
// //         <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
// //             {label} <span className="text-red-500">*</span>
// //         </label>
// //         <div className="relative">
// //             <select
// //                 id={name}
// //                 name={name}
// //                 value={value}
// //                 onChange={onChange}
// //                 className="block w-full p-3 text-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-xl shadow-sm appearance-none transition duration-150 focus:ring-2"
// //                 style={{ borderColor: BRAND_COLOR, borderWidth: '1px' }}
// //                 required
// //             >
// //                 <option value="">Select...</option>
// //                 {options.map(opt => (
// //                     <option key={opt.value || opt} value={opt.value || opt}>
// //                         {opt.label || opt}
// //                     </option>
// //                 ))}
// //             </select>
// //             {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
// //         </div>
// //     </div>
// // );

// // const ResultCard = ({ results, currencySymbol, savingPercent, co2Factor }) => (
// //     <div className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-t-4" style={{ borderColor: BRAND_COLOR }}>
// //         <h3 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white text-center">
// //             Your Estimated Annual Impact
// //         </h3>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
// //             {/* Annual Cost Saving */}
// //             <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
// //                 <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
// //                     {formatNumber(results.annualCostSaved, 0, currencySymbol)}
// //                 </p>
// //                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
// //                     Annual Cost Saving
// //                 </p>
// //             </div>

// //             {/* Annual Fuel Saved */}
// //             <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
// //                 <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
// //                     {formatNumber(results.annualFuelSavedLitres, 0)}
// //                 </p>
// //                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
// //                     Fuel Saved (Litres)
// //                 </p>
// //             </div>

// //             {/* Annual CO₂ Reduction */}
// //             <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
// //                 <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
// //                     {formatNumber(results.annualCO2ReductionKg, 0)}
// //                 </p>
// //                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
// //                     CO₂ Reduced (kg)
// //                 </p>
// //             </div>
// //         </div>

// //         <p className="text-center text-sm italic mt-8 text-gray-500 dark:text-gray-400">
// //             *Assumes a conservative fuel saving of {savingPercent}% and {co2Factor} kg CO₂ per litre of diesel. Results are estimates only.
// //         </p>
// //     </div>
// // );

// // // --- MAIN COMPONENT ---

// // const initialFormState = {
// //     country: '',
// //     applicationType: '',
// //     vehicleCategory: '',
// //     // Calculation Inputs
// //     monthlyMileageKm: 10000,
// //     fuelAverageKmPerLitre: 3.5,
// //     dieselCostPerLitre: 95,
// //     engineHoursPerDay: 8,
// //     fuelLitresPerHour: 15,
// //     dgHoursPerMonth: 250,
// //     monthlyFuelLitresDG: 3000,
// // };

// // const SavingsCalculator = () => {
// //     const [inputs, setInputs] = useState(initialFormState);
// //     const [errors, setErrors] = useState({});
// //     const [calculatedResults, setCalculatedResults] = useState(null);

// //     const countryOptions = Object.keys(CONFIG.countryCurrencyMap).map(c => ({ label: c, value: c }));
// //     const applicationOptions = ['Vehicle', 'DG', 'Marine'];
// //     const vehicleCategoryOptions = ['Logistics', 'Transport', 'Construction', 'Mining'];

// //     // Memoized Currency Symbol and Placeholder Price
// //     const currencyInfo = useMemo(() => CONFIG.countryCurrencyMap[inputs.country] || { symbol: '$', placeholderPrice: 1.05 }, [inputs.country]);
// //     const currencySymbol = currencyInfo.symbol;

// //     // Reset irrelevant fields when major selections change
// //     useEffect(() => {
// //         setInputs(prev => ({
// //             ...prev,
// //             vehicleCategory: prev.applicationType === 'Vehicle' ? prev.vehicleCategory : '',
// //         }));
// //         setCalculatedResults(null);
// //     }, [inputs.applicationType]);

// //     useEffect(() => {
// //         // Update diesel cost placeholder when country changes
// //         setInputs(prev => ({
// //             ...prev,
// //             dieselCostPerLitre: currencyInfo.placeholderPrice,
// //         }));
// //         setCalculatedResults(null);
// //     }, [inputs.country, currencyInfo.placeholderPrice]);
    
// //     useEffect(() => {
// //         setCalculatedResults(null);
// //     }, [inputs.vehicleCategory]);


// //     const handleChange = (e) => {
// //         const { name, value, type } = e.target;
        
// //         let processedValue = value;
// //         if (type === 'number') {
// //             processedValue = value === '' ? '' : parseFloat(value);
// //         }

// //         setInputs(prev => ({
// //             ...prev,
// //             [name]: processedValue
// //         }));
        
// //         // Clear the specific error for the field being edited
// //         if (errors[name]) {
// //             setErrors(prev => {
// //                 const newErrors = { ...prev };
// //                 delete newErrors[name];
// //                 return newErrors;
// //             });
// //         }
// //         setCalculatedResults(null);
// //     };

// //     const validateInputs = () => {
// //         const newErrors = {};

// //         // Helper to check if a required field is missing or invalid
// //         const checkRequired = (field, message) => {
// //             const val = inputs[field];
// //             if (val === '' || val === null || (typeof val === 'number' && val <= 0)) {
// //                 newErrors[field] = message || "Please enter a value greater than zero.";
// //             }
// //         };

// //         // Step 1 & 2 Validation
// //         checkRequired('country', 'Please select your country.');
// //         checkRequired('applicationType', 'Please select the application type.');
// //         checkRequired('dieselCostPerLitre', 'Please enter the cost of diesel.');


// //         // Conditional Validation
// //         if (inputs.applicationType === 'Vehicle') {
// //             checkRequired('vehicleCategory', 'Please select a vehicle category.');
// //             if (inputs.vehicleCategory === 'Logistics' || inputs.vehicleCategory === 'Transport') {
// //                 checkRequired('monthlyMileageKm');
// //                 checkRequired('fuelAverageKmPerLitre');
// //             } else if (inputs.vehicleCategory === 'Construction' || inputs.vehicleCategory === 'Mining') {
// //                 checkRequired('engineHoursPerDay');
// //                 checkRequired('fuelLitresPerHour');
// //             }
// //         } else if (inputs.applicationType === 'DG') {
// //             checkRequired('dgHoursPerMonth');
// //             checkRequired('monthlyFuelLitresDG');
// //         }

// //         setErrors(newErrors);
// //         return Object.keys(newErrors).length === 0;
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         if (validateInputs()) {
// //             const results = calculateResults(inputs);
// //             setCalculatedResults(results);
// //         }
// //     };

// //     const renderVehicleInputs = () => {
// //         if (!inputs.vehicleCategory) return null;

// //         const commonInput = (
// //             <InputField
// //                 label={`Cost of diesel per litre (${currencySymbol})`}
// //                 name="dieselCostPerLitre"
// //                 value={inputs.dieselCostPerLitre}
// //                 onChange={handleChange}
// //                 placeholder={currencyInfo.placeholderPrice}
// //                 prefix={currencySymbol}
// //                 unit=" / Litre"
// //                 error={errors.dieselCostPerLitre}
// //             />
// //         );

// //         if (inputs.vehicleCategory === 'Logistics' || inputs.vehicleCategory === 'Transport') {
// //             return (
// //                 <div className="space-y-6">
// //                     <InputField
// //                         label="Average Monthly Distance (km)"
// //                         name="monthlyMileageKm"
// //                         value={inputs.monthlyMileageKm}
// //                         onChange={handleChange}
// //                         placeholder="e.g., 10000"
// //                         unit="km"
// //                         error={errors.monthlyMileageKm}
// //                     />
// //                     <InputField
// //                         label="Current Fuel Average (km per litre)"
// //                         name="fuelAverageKmPerLitre"
// //                         value={inputs.fuelAverageKmPerLitre}
// //                         onChange={handleChange}
// //                         placeholder="e.g., 3.5"
// //                         unit="km/L"
// //                         error={errors.fuelAverageKmPerLitre}
// //                     />
// //                     {commonInput}
// //                 </div>
// //             );
// //         } else if (inputs.vehicleCategory === 'Construction' || inputs.vehicleCategory === 'Mining') {
// //             return (
// //                 <div className="space-y-6">
// //                     <InputField
// //                         label="Average Engine Usage per Day (Hours)"
// //                         name="engineHoursPerDay"
// //                         value={inputs.engineHoursPerDay}
// //                         onChange={handleChange}
// //                         placeholder="e.g., 8"
// //                         unit="Hours"
// //                         error={errors.engineHoursPerDay}
// //                     />
// //                     <InputField
// //                         label="Average Diesel Consumption per Hour (Litres)"
// //                         name="fuelLitresPerHour"
// //                         value={inputs.fuelLitresPerHour}
// //                         onChange={handleChange}
// //                         placeholder="e.g., 15"
// //                         unit="L / Hour"
// //                         error={errors.fuelLitresPerHour}
// //                     />
// //                     {commonInput}
// //                 </div>
// //             );
// //         }
// //         return null;
// //     };

// //     const renderDGInputs = () => {
// //         return (
// //             <div className="space-y-6">
// //                 <InputField
// //                     label="Hours of DG usage per Month"
// //                     name="dgHoursPerMonth"
// //                     value={inputs.dgHoursPerMonth}
// //                     onChange={handleChange}
// //                     placeholder="e.g., 250"
// //                     unit="Hours"
// //                     error={errors.dgHoursPerMonth}
// //                 />
// //                 <InputField
// //                     label="Total Diesel Consumption per Month (Litres)"
// //                     name="monthlyFuelLitresDG"
// //                     value={inputs.monthlyFuelLitresDG}
// //                     onChange={handleChange}
// //                     placeholder="e.g., 3000"
// //                     unit="Litres"
// //                     error={errors.monthlyFuelLitresDG}
// //                 />
// //                 <InputField
// //                     label={`Cost of diesel per litre (${currencySymbol})`}
// //                     name="dieselCostPerLitre"
// //                     value={inputs.dieselCostPerLitre}
// //                     onChange={handleChange}
// //                     placeholder={currencyInfo.placeholderPrice}
// //                     prefix={currencySymbol}
// //                     unit=" / Litre"
// //                     error={errors.dieselCostPerLitre}
// //                 />
// //             </div>
// //         );
// //     };
    
// //     const renderMarineMessage = () => (
// //         <div className="p-8 bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 rounded-xl text-yellow-800 dark:text-yellow-200">
// //             <h4 className="text-2xl font-bold mb-4">Custom Marine Estimate</h4>
// //             <p className="text-lg">
// //                 Marine engines are highly application-specific and complex. Please contact us and we will provide a customised savings & CO₂ reduction estimate for your vessel.
// //             </p>
// //             <button
// //                 type="button"
// //                 className="mt-6 w-full px-6 py-3 text-lg font-bold rounded-xl shadow-md transition duration-300 transform hover:scale-[1.01] text-white"
// //                 style={{ backgroundColor: BRAND_COLOR }}
// //                 onClick={() => alert("Simulating Marine Savings Estimate Request. In a real app, this would open a dedicated lead form.")}
// //             >
// //                 Request Marine Savings Estimate
// //             </button>
// //             <p className="text-xs mt-3 opacity-80">
// //                 (Note: This button simulates opening a contact form for Name, Company, Email, Vessel Type, etc.)
// //             </p>
// //         </div>
// //     );

// //     return (
// //         <div className="min-h-screen p-8 md:p-12 bg-gray-100 dark:bg-gray-900 font-sans">
// //             <div className="max-w-4xl mx-auto">
// //                 {/* Header */}
// //                 <header className="text-center mb-12">
// //                     <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
// //                         Estimated Savings Calculator
// //                     </h1>
// //                     <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
// //                         See your potential annual fuel cost savings and CO₂ reduction by implementing Saarthi GreenTech systems.
// //                     </p>
// //                 </header>

// //                 {/* Calculator Card */}
// //                 <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-white dark:bg-gray-950 rounded-3xl shadow-2xl border-t-8" style={{ borderColor: BRAND_COLOR }}>
// //                     <div className="space-y-8">
// //                         {/* Step 1: Country Selection */}
// //                         <div className="p-4 rounded-xl border dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
// //                             <h4 className="text-xl font-bold mb-4" style={{ color: BRAND_COLOR }}>Step 1: Location & Cost</h4>
// //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                                 <SelectField
// //                                     label="Select Country"
// //                                     name="country"
// //                                     value={inputs.country}
// //                                     onChange={handleChange}
// //                                     options={countryOptions}
// //                                     error={errors.country}
// //                                 />
// //                                 <InputField
// //                                     label={`Cost of diesel per litre (estimated ${currencySymbol})`}
// //                                     name="dieselCostPerLitre"
// //                                     value={inputs.dieselCostPerLitre}
// //                                     onChange={handleChange}
// //                                     placeholder={currencyInfo.placeholderPrice}
// //                                     prefix={currencySymbol}
// //                                     unit=" / Litre"
// //                                     error={errors.dieselCostPerLitre}
// //                                 />
// //                             </div>
// //                         </div>

// //                         {/* Step 2: Application Type Selection */}
// //                         <div className={`p-4 rounded-xl border dark:border-gray-800 ${inputs.country ? 'bg-white dark:bg-gray-800' : 'bg-gray-200 dark:bg-gray-700 opacity-50'}`}>
// //                             <h4 className="text-xl font-bold mb-4" style={{ color: BRAND_COLOR }}>Step 2: Application Details</h4>
// //                             <SelectField
// //                                 label="Application Type"
// //                                 name="applicationType"
// //                                 value={inputs.applicationType}
// //                                 onChange={handleChange}
// //                                 options={applicationOptions}
// //                                 error={errors.applicationType}
// //                             />
// //                         </div>

// //                         {/* Step 2A: Vehicle Category (Progressive Reveal) */}
// //                         {inputs.applicationType === 'Vehicle' && (
// //                             <div className="p-4 rounded-xl border dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
// //                                 <h4 className="text-xl font-bold mb-4" style={{ color: BRAND_COLOR }}>Step 2A: Vehicle Category</h4>
// //                                 <SelectField
// //                                     label="Vehicle Category"
// //                                     name="vehicleCategory"
// //                                     value={inputs.vehicleCategory}
// //                                     onChange={handleChange}
// //                                     options={vehicleCategoryOptions}
// //                                     error={errors.vehicleCategory}
// //                                 />
// //                             </div>
// //                         )}

// //                         {/* Step 3: Specific Inputs (Progressive Reveal) */}
// //                         <div className="p-4 rounded-xl border dark:border-gray-800 bg-white dark:bg-gray-800">
// //                             <h4 className="text-xl font-bold mb-6" style={{ color: BRAND_COLOR }}>Step 3: Usage Parameters</h4>
                            
// //                             {inputs.applicationType === 'Vehicle' && renderVehicleInputs()}
// //                             {inputs.applicationType === 'DG' && renderDGInputs()}
// //                             {inputs.applicationType === 'Marine' && renderMarineMessage()}
                            
// //                             {/* Calculation Trigger */}
// //                             {inputs.applicationType !== 'Marine' && (
// //                                 <button
// //                                     type="submit"
// //                                     className="mt-8 w-full px-6 py-4 text-xl font-bold rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.01] text-white"
// //                                     style={{ backgroundColor: BRAND_COLOR, filter: 'brightness(0.95)' }}
// //                                 >
// //                                     Calculate Estimated Annual Impact
// //                                 </button>
// //                             )}
// //                         </div>
// //                     </div>
// //                 </form>

// //                 {/* Results Block */}
// //                 {calculatedResults && (
// //                     <ResultCard
// //                         results={calculatedResults}
// //                         currencySymbol={currencySymbol}
// //                         savingPercent={CONFIG.FUEL_SAVING_PERCENT}
// //                         co2Factor={CONFIG.CO2_PER_LITER_DIESEL}
// //                     />
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default SavingsCalculator;

// 'use client';

// import React, { useState, useMemo, useEffect } from 'react';

// // --- TYPE DEFINITIONS ---
// interface InputFieldProps {
//     label: string;
//     name: string;
//     value: string | number;
//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     placeholder?: string | number;
//     prefix?: string;
//     type?: string;
//     unit?: string;
//     min?: number;
//     required?: boolean;
//     error?: string;
// }

// interface SelectFieldProps {
//     label: string;
//     name: string;
//     value: string;
//     onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//     options: Array<{ label: string; value: string } | string>;
//     error?: string;
// }

// interface ResultCardProps {
//     results: {
//         annualFuelSavedLitres: number;
//         annualCO2ReductionKg: number;
//         annualCostSaved: number;
//         annualFuelLitres: number;
//     };
//     currencySymbol: string;
//     savingPercent: number;
//     co2Factor: number;
// }

// interface FormInputs {
//     country: string;
//     applicationType: string;
//     vehicleCategory: string;
//     monthlyMileageKm: number | string;
//     fuelAverageKmPerLitre: number | string;
//     dieselCostPerLitre: number | string;
//     engineHoursPerDay: number | string;
//     fuelLitresPerHour: number | string;
//     dgHoursPerMonth: number | string;
//     monthlyFuelLitresDG: number | string;
// }

// // --- CONFIGURATION CONSTANTS ---
// const CONFIG = {
//     FUEL_SAVING_PERCENT: 10,
//     CO2_PER_LITER_DIESEL: 2.68,
//     countryCurrencyMap: {
//         "India": { symbol: "₹", placeholderPrice: 95.00 },
//         "United Kingdom": { symbol: "£", placeholderPrice: 1.50 },
//         "United States": { symbol: "$", placeholderPrice: 1.05 },
//         "Europe": { symbol: "€", placeholderPrice: 1.80 },
//         "Australia": { symbol: "A$", placeholderPrice: 1.85 },
//         "South Africa": { symbol: "R", placeholderPrice: 25.00 },
//     },
// };

// // --- THEME COLORS ---
// const BRAND_COLOR = '#33A04A';

// // --- HELPER FUNCTIONS ---
// const formatNumber = (num: number, decimalPlaces: number = 0, currencySymbol: string = ''): string => {
//     if (isNaN(num)) return `${currencySymbol} 0`;
//     const formatted = new Intl.NumberFormat('en-US', {
//         minimumFractionDigits: decimalPlaces,
//         maximumFractionDigits: decimalPlaces,
//     }).format(num);
//     return currencySymbol ? `${currencySymbol} ${formatted}` : formatted;
// };

// // --- CALCULATOR LOGIC FUNCTION ---
// const calculateResults = (inputs: FormInputs) => {
//     const { applicationType, vehicleCategory, monthlyMileageKm, fuelAverageKmPerLitre, dieselCostPerLitre, engineHoursPerDay, fuelLitresPerHour, monthlyFuelLitresDG } = inputs;
//     const { FUEL_SAVING_PERCENT, CO2_PER_LITER_DIESEL } = CONFIG;

//     let annualFuelLitres = 0;

//     if (applicationType === "Vehicle") {
//         if (vehicleCategory === "Logistics" || vehicleCategory === "Transport") {
//             const mileage = Number(monthlyMileageKm);
//             const fuelAvg = Number(fuelAverageKmPerLitre);
//             if (mileage > 0 && fuelAvg > 0) {
//                 const monthlyFuelLitres = mileage / fuelAvg;
//                 annualFuelLitres = monthlyFuelLitres * 12;
//             }
//         } else if (vehicleCategory === "Construction" || vehicleCategory === "Mining") {
//             const hours = Number(engineHoursPerDay);
//             const litresPerHour = Number(fuelLitresPerHour);
//             if (hours > 0 && litresPerHour > 0) {
//                 const monthlyHours = hours * 30.4167;
//                 const monthlyFuelLitres = monthlyHours * litresPerHour;
//                 annualFuelLitres = monthlyFuelLitres * 12;
//             }
//         }
//     } else if (applicationType === "DG") {
//         const fuelLitres = Number(monthlyFuelLitresDG);
//         if (fuelLitres > 0) {
//             annualFuelLitres = fuelLitres * 12;
//         }
//     }

//     const dieselCost = Number(dieselCostPerLitre);
//     if (annualFuelLitres === 0 || dieselCost <= 0) {
//         return null;
//     }

//     const annualFuelSavedLitres = annualFuelLitres * (FUEL_SAVING_PERCENT / 100);
//     const annualCostSaved = annualFuelSavedLitres * dieselCost;
//     const annualCO2ReductionKg = annualFuelSavedLitres * CO2_PER_LITER_DIESEL;

//     return {
//         annualFuelSavedLitres,
//         annualCO2ReductionKg,
//         annualCostSaved,
//         annualFuelLitres,
//     };
// };

// // --- UI COMPONENTS ---
// const InputField: React.FC<InputFieldProps> = ({ 
//     label, 
//     name, 
//     value, 
//     onChange, 
//     placeholder, 
//     prefix, 
//     type = 'number', 
//     unit = '', 
//     min = 0, 
//     required = true, 
//     error 
// }) => (
//     <div className="flex flex-col space-y-1">
//         <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
//             {label} {required && <span className="text-red-500">*</span>}
//         </label>
//         <div className="relative flex rounded-xl shadow-sm overflow-hidden border dark:border-gray-700">
//             {prefix && (
//                 <span className="inline-flex items-center px-4 bg-gray-50 dark:bg-gray-700 border-r dark:border-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm font-semibold">
//                     {prefix}
//                 </span>
//             )}
//             <input
//                 id={name}
//                 name={name}
//                 type={type}
//                 value={value}
//                 onChange={onChange}
//                 min={min}
//                 placeholder={String(placeholder)}
//                 step={type === 'number' ? '0.1' : undefined}
//                 className="block w-full p-3 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-0 focus:border-transparent transition duration-150"
//                 style={{ outline: 'none' }}
//                 required={required}
//             />
//             {unit && (
//                 <span className="inline-flex items-center px-4 bg-gray-50 dark:bg-gray-700 border-l dark:border-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm font-semibold">
//                     {unit}
//                 </span>
//             )}
//         </div>
//         {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
//     </div>
// );

// const SelectField: React.FC<SelectFieldProps> = ({ label, name, value, onChange, options, error }) => (
//     <div className="flex flex-col space-y-1">
//         <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
//             {label} <span className="text-red-500">*</span>
//         </label>
//         <div className="relative">
//             <select
//                 id={name}
//                 name={name}
//                 value={value}
//                 onChange={onChange}
//                 className="block w-full p-3 text-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-xl shadow-sm appearance-none transition duration-150 focus:ring-2"
//                 style={{ borderColor: BRAND_COLOR, borderWidth: '1px' }}
//                 required
//             >
//                 <option value="">Select...</option>
//                 {options.map(opt => {
//                     const optValue = typeof opt === 'string' ? opt : opt.value;
//                     const optLabel = typeof opt === 'string' ? opt : opt.label;
//                     return (
//                         <option key={optValue} value={optValue}>
//                             {optLabel}
//                         </option>
//                     );
//                 })}
//             </select>
//             {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
//         </div>
//     </div>
// );

// const ResultCard: React.FC<ResultCardProps> = ({ results, currencySymbol, savingPercent, co2Factor }) => (
//     <div className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-t-4" style={{ borderColor: BRAND_COLOR }}>
//         <h3 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white text-center">
//             Your Estimated Annual Impact
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//             <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
//                 <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
//                     {formatNumber(results.annualCostSaved, 0, currencySymbol)}
//                 </p>
//                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//                     Annual Cost Saving
//                 </p>
//             </div>
//             <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
//                 <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
//                     {formatNumber(results.annualFuelSavedLitres, 0)}
//                 </p>
//                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//                     Fuel Saved (Litres)
//                 </p>
//             </div>
//             <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
//                 <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
//                     {formatNumber(results.annualCO2ReductionKg, 0)}
//                 </p>
//                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//                     CO₂ Reduced (kg)
//                 </p>
//             </div>
//         </div>
//         <p className="text-center text-sm italic mt-8 text-gray-500 dark:text-gray-400">
//             *Assumes a conservative fuel saving of {savingPercent}% and {co2Factor} kg CO₂ per litre of diesel. Results are estimates only.
//         </p>
//     </div>
// );

// // --- MAIN COMPONENT ---
// const initialFormState: FormInputs = {
//     country: '',
//     applicationType: '',
//     vehicleCategory: '',
//     monthlyMileageKm: 10000,
//     fuelAverageKmPerLitre: 3.5,
//     dieselCostPerLitre: 95,
//     engineHoursPerDay: 8,
//     fuelLitresPerHour: 15,
//     dgHoursPerMonth: 250,
//     monthlyFuelLitresDG: 3000,
// };

// const SavingsCalculator: React.FC = () => {
//     const [inputs, setInputs] = useState<FormInputs>(initialFormState);
//     const [errors, setErrors] = useState<Record<string, string>>({});
//     const [calculatedResults, setCalculatedResults] = useState<ReturnType<typeof calculateResults>>(null);

//     const countryOptions = Object.keys(CONFIG.countryCurrencyMap).map(c => ({ label: c, value: c }));
//     const applicationOptions = ['Vehicle', 'DG', 'Marine'];
//     const vehicleCategoryOptions = ['Logistics', 'Transport', 'Construction', 'Mining'];

//     const currencyInfo = useMemo(() => 
//         CONFIG.countryCurrencyMap[inputs.country as keyof typeof CONFIG.countryCurrencyMap] || 
//         { symbol: '$', placeholderPrice: 1.05 }, 
//         [inputs.country]
//     );
//     const currencySymbol = currencyInfo.symbol;

//     useEffect(() => {
//         setInputs(prev => ({
//             ...prev,
//             vehicleCategory: prev.applicationType === 'Vehicle' ? prev.vehicleCategory : '',
//         }));
//         setCalculatedResults(null);
//     }, [inputs.applicationType]);

//     useEffect(() => {
//         setInputs(prev => ({
//             ...prev,
//             dieselCostPerLitre: currencyInfo.placeholderPrice,
//         }));
//         setCalculatedResults(null);
//     }, [inputs.country, currencyInfo.placeholderPrice]);
    
//     useEffect(() => {
//         setCalculatedResults(null);
//     }, [inputs.vehicleCategory]);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value, type } = e.target;
        
//         let processedValue: string | number = value;
//         if (type === 'number') {
//             processedValue = value === '' ? '' : parseFloat(value);
//         }

//         setInputs(prev => ({
//             ...prev,
//             [name]: processedValue
//         }));
        
//         if (errors[name]) {
//             setErrors(prev => {
//                 const newErrors = { ...prev };
//                 delete newErrors[name];
//                 return newErrors;
//             });
//         }
//         setCalculatedResults(null);
//     };

//     const validateInputs = (): boolean => {
//         const newErrors: Record<string, string> = {};

//         const checkRequired = (field: keyof FormInputs, message?: string) => {
//             const val = inputs[field];
//             if (val === '' || val === null || (typeof val === 'number' && val <= 0)) {
//                 newErrors[field] = message || "Please enter a value greater than zero.";
//             }
//         };

//         checkRequired('country', 'Please select your country.');
//         checkRequired('applicationType', 'Please select the application type.');
//         checkRequired('dieselCostPerLitre', 'Please enter the cost of diesel.');

//         if (inputs.applicationType === 'Vehicle') {
//             checkRequired('vehicleCategory', 'Please select a vehicle category.');
//             if (inputs.vehicleCategory === 'Logistics' || inputs.vehicleCategory === 'Transport') {
//                 checkRequired('monthlyMileageKm');
//                 checkRequired('fuelAverageKmPerLitre');
//             } else if (inputs.vehicleCategory === 'Construction' || inputs.vehicleCategory === 'Mining') {
//                 checkRequired('engineHoursPerDay');
//                 checkRequired('fuelLitresPerHour');
//             }
//         } else if (inputs.applicationType === 'DG') {
//             checkRequired('dgHoursPerMonth');
//             checkRequired('monthlyFuelLitresDG');
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (validateInputs()) {
//             const results = calculateResults(inputs);
//             setCalculatedResults(results);
//         }
//     };

//     const renderVehicleInputs = () => {
//         if (!inputs.vehicleCategory) return null;

//         const commonInput = (
//             <InputField
//                 label={`Cost of diesel per litre (${currencySymbol})`}
//                 name="dieselCostPerLitre"
//                 value={inputs.dieselCostPerLitre}
//                 onChange={handleChange}
//                 placeholder={currencyInfo.placeholderPrice}
//                 prefix={currencySymbol}
//                 unit=" / Litre"
//                 error={errors.dieselCostPerLitre}
//             />
//         );

//         if (inputs.vehicleCategory === 'Logistics' || inputs.vehicleCategory === 'Transport') {
//             return (
//                 <div className="space-y-6">
//                     <InputField
//                         label="Average Monthly Distance (km)"
//                         name="monthlyMileageKm"
//                         value={inputs.monthlyMileageKm}
//                         onChange={handleChange}
//                         placeholder="e.g., 10000"
//                         unit="km"
//                         error={errors.monthlyMileageKm}
//                     />
//                     <InputField
//                         label="Current Fuel Average (km per litre)"
//                         name="fuelAverageKmPerLitre"
//                         value={inputs.fuelAverageKmPerLitre}
//                         onChange={handleChange}
//                         placeholder="e.g., 3.5"
//                         unit="km/L"
//                         error={errors.fuelAverageKmPerLitre}
//                     />
//                     {commonInput}
//                 </div>
//             );
//         } else if (inputs.vehicleCategory === 'Construction' || inputs.vehicleCategory === 'Mining') {
//             return (
//                 <div className="space-y-6">
//                     <InputField
//                         label="Average Engine Usage per Day (Hours)"
//                         name="engineHoursPerDay"
//                         value={inputs.engineHoursPerDay}
//                         onChange={handleChange}
//                         placeholder="e.g., 8"
//                         unit="Hours"
//                         error={errors.engineHoursPerDay}
//                     />
//                     <InputField
//                         label="Average Diesel Consumption per Hour (Litres)"
//                         name="fuelLitresPerHour"
//                         value={inputs.fuelLitresPerHour}
//                         onChange={handleChange}
//                         placeholder="e.g., 15"
//                         unit="L / Hour"
//                         error={errors.fuelLitresPerHour}
//                     />
//                     {commonInput}
//                 </div>
//             );
//         }
//         return null;
//     };

//     const renderDGInputs = () => {
//         return (
//             <div className="space-y-6">
//                 <InputField
//                     label="Hours of DG usage per Month"
//                     name="dgHoursPerMonth"
//                     value={inputs.dgHoursPerMonth}
//                     onChange={handleChange}
//                     placeholder="e.g., 250"
//                     unit="Hours"
//                     error={errors.dgHoursPerMonth}
//                 />
//                 <InputField
//                     label="Total Diesel Consumption per Month (Litres)"
//                     name="monthlyFuelLitresDG"
//                     value={inputs.monthlyFuelLitresDG}
//                     onChange={handleChange}
//                     placeholder="e.g., 3000"
//                     unit="Litres"
//                     error={errors.monthlyFuelLitresDG}
//                 />
//                 <InputField
//                     label={`Cost of diesel per litre (${currencySymbol})`}
//                     name="dieselCostPerLitre"
//                     value={inputs.dieselCostPerLitre}
//                     onChange={handleChange}
//                     placeholder={currencyInfo.placeholderPrice}
//                     prefix={currencySymbol}
//                     unit=" / Litre"
//                     error={errors.dieselCostPerLitre}
//                 />
//             </div>
//         );
//     };
    
//     const renderMarineMessage = () => (
//         <div className="p-8 bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 rounded-xl text-yellow-800 dark:text-yellow-200">
//             <h4 className="text-2xl font-bold mb-4">Custom Marine Estimate</h4>
//             <p className="text-lg">
//                 Marine engines are highly application-specific and complex. Please contact us and we will provide a customised savings & CO₂ reduction estimate for your vessel.
//             </p>
//             <button
//                 type="button"
//                 className="mt-6 w-full px-6 py-3 text-lg font-bold rounded-xl shadow-md transition duration-300 transform hover:scale-[1.01] text-white"
//                 style={{ backgroundColor: BRAND_COLOR }}
//                 onClick={() => alert("Simulating Marine Savings Estimate Request. In a real app, this would open a dedicated lead form.")}
//             >
//                 Request Marine Savings Estimate
//             </button>
//             <p className="text-xs mt-3 opacity-80">
//                 (Note: This button simulates opening a contact form for Name, Company, Email, Vessel Type, etc.)
//             </p>
//         </div>
//     );

//     return (
//         <>
//         {/* // <div className="min-h-screen p-8 md:p-12 bg-gray-100 dark:bg-gray-900 font-sans"> */}
//             {/* <div className="max-w-4xl mx-auto"> */}
//                 {/* <header className="text-center mb-12">
//                     <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
//                     Estimated Savings Calculator
//                     </h1>
//                     <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//                     See your potential annual fuel cost savings and CO₂ reduction by implementing Saarthi GreenTech systems.
//                     </p>
//                     </header> */}
//       {/* =========================
//           HERO SECTION (NEW)
//           ========================= */}
//       <section className="relative bg-slate-900 text-white">
//         <div className="container mx-auto px-6 py-20 md:py-24 text-center max-w-5xl">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
//             Estimated Savings Calculator
//           </h1>
//           <p className="text-xl text-slate-300 max-w-3xl mx-auto">
//             See your potential annual fuel cost savings and CO₂ reduction by
//             implementing Saarthi GreenTech systems.
//           </p>
//         </div>
//       </section>


//                 <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-white dark:bg-gray-950 rounded-3xl shadow-2xl border-t-8" style={{ borderColor: BRAND_COLOR }}>
//                     <div className="space-y-8">
//                         <div className="p-4 rounded-xl border dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
//                             <h4 className="text-xl font-bold mb-4" style={{ color: BRAND_COLOR }}>Step 1: Location & Cost</h4>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <SelectField
//                                     label="Select Country"
//                                     name="country"
//                                     value={inputs.country}
//                                     onChange={handleChange}
//                                     options={countryOptions}
//                                     error={errors.country}
//                                     />
//                                 <InputField
//                                     label={`Cost of diesel per litre (estimated ${currencySymbol})`}
//                                     name="dieselCostPerLitre"
//                                     value={inputs.dieselCostPerLitre}
//                                     onChange={handleChange}
//                                     placeholder={currencyInfo.placeholderPrice}
//                                     prefix={currencySymbol}
//                                     unit=" / Litre"
//                                     error={errors.dieselCostPerLitre}
//                                     />
//                             </div>
//                         </div>

//                         <div className={`p-4 rounded-xl border dark:border-gray-800 ${inputs.country ? 'bg-white dark:bg-gray-800' : 'bg-gray-200 dark:bg-gray-700 opacity-50'}`}>
//                             <h4 className="text-xl font-bold mb-4" style={{ color: BRAND_COLOR }}>Step 2: Application Details</h4>
//                             <SelectField
//                                 label="Application Type"
//                                 name="applicationType"
//                                 value={inputs.applicationType}
//                                 onChange={handleChange}
//                                 options={applicationOptions}
//                                 error={errors.applicationType}
//                                 />
//                         </div>

//                         {inputs.applicationType === 'Vehicle' && (
//                             <div className="p-4 rounded-xl border dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
//                                 <h4 className="text-xl font-bold mb-4" style={{ color: BRAND_COLOR }}>Step 2A: Vehicle Category</h4>
//                                 <SelectField
//                                     label="Vehicle Category"
//                                     name="vehicleCategory"
//                                     value={inputs.vehicleCategory}
//                                     onChange={handleChange}
//                                     options={vehicleCategoryOptions}
//                                     error={errors.vehicleCategory}
//                                     />
//                             </div>
//                         )}

//                         <div className="p-4 rounded-xl border dark:border-gray-800 bg-white dark:bg-gray-800">
//                             <h4 className="text-xl font-bold mb-6" style={{ color: BRAND_COLOR }}>Step 3: Usage Parameters</h4>
                            
//                             {inputs.applicationType === 'Vehicle' && renderVehicleInputs()}
//                             {inputs.applicationType === 'DG' && renderDGInputs()}
//                             {inputs.applicationType === 'Marine' && renderMarineMessage()}
                            
//                             {inputs.applicationType !== 'Marine' && (
//                                 <button
//                                 type="submit"
//                                 className="mt-8 w-full px-6 py-4 text-xl font-bold rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.01] text-white"
//                                 style={{ backgroundColor: BRAND_COLOR, filter: 'brightness(0.95)' }}
//                                 >
//                                     Calculate Estimated Annual Impact
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                 </form>

//                 {calculatedResults && (
//                     <ResultCard
//                     results={calculatedResults}
//                     currencySymbol={currencySymbol}
//                     savingPercent={CONFIG.FUEL_SAVING_PERCENT}
//                     co2Factor={CONFIG.CO2_PER_LITER_DIESEL}
//                     />
//                 )}
                
//             {/* </div> */}
//         {/* </div> */}
//                 </>
//     );
// };

// export default SavingsCalculator;

"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { CheckCircle, RotateCcw, Calculator, ChevronRight } from "lucide-react";
import {
  COUNTRY_CURRENCY, CURRENCY_SYMBOLS, ASSET_FUELS, FUEL_UNITS,
  EF, SAVINGS_BANDS, ASSET_META, ASSET_GROUPS, ASSET_SVGS,
} from "./calculatorData";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Results {
  annQty: number;
  unit: string;
  annCost: number;
  currency: string;
  saveMin: number;
  saveMax: number;
  bandMin: number;
  bandMax: number;
  assetLabel: string;
  annCO2: number;
  annCO2e: number;
  co2RedMin: number;
  co2RedMax: number;
  co2eRedMin: number;
  co2eRedMax: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmt(n: number, decimals = 0) {
  return Number(n.toFixed(decimals)).toLocaleString("en-IN");
}

function getPeriodMultiplier(period: string) {
  if (period === "day") return 365;
  if (period === "month") return 12;
  return 1;
}

// ─── Pollutant data ───────────────────────────────────────────────────────────
const POLLUTANTS = [
  { name: "Particulate Matter", abbr: "PM / PM₂.₅ / PM₁₀", range: "40–95% reduction", pct: 95, color: "#ef4444", desc: "Soot and unburnt carbon significantly reduced through more complete combustion." },
  { name: "Carbon Monoxide",    abbr: "CO",                 range: ">50% reduction",   pct: 70, color: "#f59e0b", desc: "Hydrogen catalyses more complete oxidation of carbon to CO₂." },
  { name: "Hydrocarbons",       abbr: "HC / THC / VOC",     range: ">50% reduction",   pct: 65, color: "#a855f7", desc: "Unburnt fuel hydrocarbons reduced through improved combustion efficiency." },
  { name: "Visible Smoke",      abbr: "Opacity / Black Smoke", range: "Significantly reduced", pct: 85, color: "#64748b", desc: "Black smoke visibly eliminated — cleaner exhaust from more complete combustion." },
  { name: "Nitrogen Oxides",    abbr: "NOₓ",                range: "15–60% reduction", pct: 60, color: "#ea580c", desc: "Lower peak flame temperatures and faster burn reduce thermal NOₓ formation." },
  { name: "Sulphur Oxides",     abbr: "SOₓ",                range: "Proportional to fuel saved", pct: 50, color: "#16a34a", desc: "SOₓ reduction directly mirrors fuel savings — less fuel burned, less sulphur emitted." },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function CalculatorPage() {
  const [country, setCountry]     = useState("");
  const [currency, setCurrency]   = useState("INR");
  const [asset, setAsset]         = useState("");
  const [fuel, setFuel]           = useState("");
  const [unit, setUnit]           = useState("");
  const [period, setPeriod]       = useState("day");
  const [qty, setQty]             = useState("");
  const [rate, setRate]           = useState("");
  const [error, setError]         = useState(false);
  const [results, setResults]     = useState<Results | null>(null);

  // Derived options
  const fuelOptions = asset ? (ASSET_FUELS[asset] ?? []) : [];
  const unitOptions = fuel  ? (FUEL_UNITS[fuel]   ?? []) : [];
  const efEntry     = fuel && unit ? EF[fuel]?.[unit] : null;
  const assetMeta   = asset ? ASSET_META[asset] : null;
  const assetSvg    = asset ? ASSET_SVGS[asset] : null;
  const sym         = CURRENCY_SYMBOLS[currency] ?? (currency + " ");

  const handleCountryChange = (c: string) => {
    setCountry(c);
    if (COUNTRY_CURRENCY[c]) setCurrency(COUNTRY_CURRENCY[c]);
  };

  const handleAssetChange = (a: string) => {
    setAsset(a);
    setFuel("");
    setUnit("");
  };

  const handleFuelChange = (f: string) => {
    setFuel(f);
    const firstUnit = FUEL_UNITS[f]?.[0] ?? "";
    setUnit(firstUnit);
  };

  const calculate = useCallback(() => {
    const qtyNum  = parseFloat(qty);
    const rateNum = parseFloat(rate);
    if (!asset || !fuel || !unit || isNaN(qtyNum) || qtyNum <= 0 || isNaN(rateNum) || rateNum <= 0) {
      setError(true);
      setTimeout(() => setError(false), 4000);
      return;
    }
    setError(false);

    const mult    = getPeriodMultiplier(period);
    const annQty  = qtyNum * mult;
    const annCost = annQty * rateNum;
    const ef      = EF[fuel]?.[unit];
    const annCO2  = ef ? (annQty * ef.co2)   / 1000 : 0;
    const annCO2e = ef ? (annQty * ef.tco2e) / 1000 : 0;
    const band    = SAVINGS_BANDS[asset] ?? [0.02, 0.12];

    setResults({
      annQty, unit, annCost, currency,
      saveMin: annCost * band[0],
      saveMax: annCost * band[1],
      bandMin: band[0] * 100,
      bandMax: band[1] * 100,
      assetLabel: ASSET_META[asset]?.label ?? asset,
      annCO2, annCO2e,
      co2RedMin:  annCO2  * band[0],
      co2RedMax:  annCO2  * band[1],
      co2eRedMin: annCO2e * band[0],
      co2eRedMax: annCO2e * band[1],
    });

    setTimeout(() => {
      document.getElementById("calc-results")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  }, [asset, fuel, unit, period, qty, rate, currency]);

  const reset = () => {
    setCountry(""); setCurrency("INR"); setAsset(""); setFuel("");
    setUnit(""); setPeriod("day"); setQty(""); setRate(""); setResults(null);
  };

  // ─── Shared input classes ──────────────────────────────────────────────────
  const selectCls = "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#1B6B3D] focus:ring-2 focus:ring-[#1B6B3D]/10 transition disabled:bg-gray-50 disabled:text-gray-400 appearance-none";
  const inputCls  = "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#1B6B3D] focus:ring-2 focus:ring-[#1B6B3D]/10 transition";
  const labelCls  = "block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5";

  return (
    <div className="min-h-screen bg-gray-50 pt-16">

      {/* ── Page Header ──────────────────────────────────────────── */}
      <div className="bg-[#1B6B3D] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 py-6 relative z-10">
          {/* <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/60">Resources</span>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/80">Calculator</span>
          </div> */}
          <h1 className="text-3xl font-bold mt-3 mb-2 leading-tight">
            Fuel Savings & Emissions<br />
            <span className="text-[#FFD700]">Calculator</span>
          </h1>
          <p className="text-white/75 text-sm max-w-xl leading-relaxed">
            Estimate your annual fuel cost, potential savings, and emission reduction opportunity with SGT HydroEdge hydrogen fuel assist technologies.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
            Savings shown are indicative ranges based on asset class and operating conditions.
          </div>
        </div>
        {/* Decorative circles */}
        <svg className="absolute right-0 top-0 opacity-5 w-72 h-72" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="2"/>
          <line x1="20" y1="100" x2="180" y2="100" stroke="white" strokeWidth="1.5"/>
          <line x1="100" y1="20" x2="100" y2="180" stroke="white" strokeWidth="1.5"/>
        </svg>
        <div className="h-1 w-full bg-[#FFD700]" />
      </div>

      {/* ── Form ─────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-5">

        {/* Step 1 — Location & Currency */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
            <div className="w-7 h-7 rounded-md bg-green-50 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-[#1B6B3D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h2 className="text-sm font-semibold text-gray-800">Location &amp; Currency</h2>
            <span className="ml-auto text-xs font-semibold text-[#1B6B3D] bg-green-50 px-2.5 py-0.5 rounded-full">Step 1</span>
          </div>
          <div className="p-5 grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Country</label>
              <select className={selectCls} value={country} onChange={e => handleCountryChange(e.target.value)}>
                <option value="">Select Country</option>
                {Object.keys(COUNTRY_CURRENCY).map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Calculation Currency</label>
              <select className={selectCls} value={currency} onChange={e => setCurrency(e.target.value)}>
                {Object.entries(CURRENCY_SYMBOLS).map(([k, v]) => (
                  <option key={k} value={k}>{v} {k}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Step 2 — Asset Class */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
            <div className="w-7 h-7 rounded-md bg-green-50 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-[#1B6B3D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            <h2 className="text-sm font-semibold text-gray-800">Asset Class</h2>
            <span className="ml-auto text-xs font-semibold text-[#1B6B3D] bg-green-50 px-2.5 py-0.5 rounded-full">Step 2</span>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <label className={labelCls}>Select Asset Type</label>
              <select className={selectCls} value={asset} onChange={e => handleAssetChange(e.target.value)}>
                <option value="">— Select Asset Class —</option>
                {ASSET_GROUPS.map(g => (
                  <optgroup key={g.label} label={g.label}>
                    {g.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Asset visual */}
            {assetSvg && assetMeta ? (
              <div className="flex gap-4 items-start border border-[#1B6B3D]/20 bg-green-50/50 rounded-lg p-4">
                <div className="w-40 shrink-0" dangerouslySetInnerHTML={{ __html: assetSvg }} />
                <div className="min-w-0">
                  <p className="font-semibold text-[#1B6B3D] text-sm">{assetMeta.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5 mb-2">{assetMeta.sub}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {assetMeta.specs.map(s => (
                      <span key={s} className="inline-flex items-center gap-1 bg-white border border-[#1B6B3D]/20 text-[#134f2e] text-xs font-medium px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B6B3D]" />{s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 border-2 border-dashed border-gray-200 rounded-lg p-4 text-gray-400 text-sm bg-gray-50">
                <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                Select an asset class above to see the visualisation
              </div>
            )}
          </div>
        </div>

        {/* Step 3 — Fuel & Consumption */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
            <div className="w-7 h-7 rounded-md bg-green-50 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-[#1B6B3D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 22V8l9-6 9 6v14H3z"/><path d="M9 22V12h6v10"/></svg>
            </div>
            <h2 className="text-sm font-semibold text-gray-800">Fuel &amp; Consumption</h2>
            <span className="ml-auto text-xs font-semibold text-[#1B6B3D] bg-green-50 px-2.5 py-0.5 rounded-full">Step 3</span>
          </div>
          <div className="p-5 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Fuel Type</label>
                <select className={selectCls} value={fuel} onChange={e => handleFuelChange(e.target.value)} disabled={!asset}>
                  <option value="">{asset ? "— Select Fuel Type —" : "— Select Asset First —"}</option>
                  {fuelOptions.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Consumption Unit</label>
                <select className={selectCls} value={unit} onChange={e => setUnit(e.target.value)} disabled={!fuel}>
                  <option value="">{fuel ? "— Select Unit —" : "— Select Fuel First —"}</option>
                  {unitOptions.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Period</label>
                <select className={selectCls} value={period} onChange={e => setPeriod(e.target.value)}>
                  <option value="day">Per Day</option>
                  <option value="month">Per Month</option>
                  <option value="year">Per Year</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Fuel Consumption</label>
                <input type="number" className={inputCls} placeholder="Enter quantity" min="0" value={qty} onChange={e => setQty(e.target.value)} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Fuel Price ({sym.trim()})</label>
                <input type="number" className={inputCls} placeholder="Price per unit" min="0" value={rate} onChange={e => setRate(e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Price Unit</label>
                <input type="text" className={`${inputCls} bg-gray-50 text-gray-500`} value={unit ? `per ${unit}` : ""} readOnly />
              </div>
            </div>

            {/* Emission factor inline */}
            {efEntry && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-700">{fuel} — Emission Factors (IPCC AR6):</span>{" "}
                TTW {efEntry.co2} kg CO₂/{unit} | WTW {efEntry.tco2e} kg CO₂e/{unit}
                <br /><span className="text-gray-400">{efEntry.src}</span>
              </div>
            )}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
            Please fill in all required fields before calculating.
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculate}
            className="flex-1 flex items-center justify-center gap-2 bg-[#1B6B3D] hover:bg-[#134f2e] text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition shadow-sm"
          >
            <Calculator className="w-4 h-4" />
            Calculate Savings &amp; Emissions
          </button>
          <button
            onClick={reset}
            className="flex items-center gap-2 border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-800 text-sm px-5 py-3.5 rounded-lg transition"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>

        {/* ── Results ────────────────────────────────────────────── */}
        {results && (
          <div id="calc-results" className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

            {/* Results header */}
            <div className="flex items-center gap-3 bg-[#1B6B3D] text-white px-5 py-4">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              <h2 className="text-sm font-semibold">Results &amp; Savings Opportunity</h2>
            </div>

            <div className="p-5 space-y-5">

              {/* Summary */}
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest pb-2 border-b border-gray-100 mb-3">Summary</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Annual Fuel Consumption</p>
                    <p className="font-mono text-lg font-medium text-gray-900">{fmt(results.annQty, 1)}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{results.unit} per year</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Annual Fuel Spend</p>
                    <p className="font-mono text-xl font-medium text-[#134f2e]">{sym}{fmt(results.annCost)}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Annual | {results.currency}</p>
                  </div>
                </div>
              </div>

              {/* Savings */}
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest pb-2 border-b border-gray-100 mb-3">Fuel Cost Savings Opportunity</p>
                <div className="rounded-lg p-5 text-white" style={{ background: "linear-gradient(135deg,#1B6B3D 0%,#134f2e 100%)" }}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#FFD700] mr-2" />
                    Potential Annual Savings Range
                  </p>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-mono text-2xl font-medium">{sym}{fmt(results.saveMin)}</span>
                    <span className="text-white/60 text-sm">to</span>
                    <span className="font-mono text-2xl font-medium">{sym}{fmt(results.saveMax)}</span>
                  </div>
                  <p className="text-xs text-white/60 mt-2">
                    Based on {results.bandMin.toFixed(0)}%–{results.bandMax.toFixed(0)}% savings band for {results.assetLabel}
                  </p>
                </div>
              </div>

              {/* GHG Baseline */}
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest pb-2 border-b border-gray-100 mb-3">Annual GHG Emissions (Current Baseline)</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-green-50 border border-[#1B6B3D]/20 rounded-lg p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">CO₂ Emissions (TTW / Scope 1)</p>
                    <p className="font-mono text-xl font-medium text-[#134f2e]">{fmt(results.annCO2, 1)}</p>
                    <p className="text-xs text-gray-500 mt-0.5">tonnes CO₂ / year</p>
                  </div>
                  <div className="bg-green-50 border border-[#1B6B3D]/20 rounded-lg p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">GHG incl. Upstream (WTW)</p>
                    <p className="font-mono text-xl font-medium text-[#134f2e]">{fmt(results.annCO2e, 1)}</p>
                    <p className="text-xs text-gray-500 mt-0.5">tCO₂e / year (Scope 1+3)</p>
                  </div>
                </div>
              </div>

              {/* GHG Reduction */}
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest pb-2 border-b border-gray-100 mb-3">GHG Reduction Opportunity</p>
                <div className="rounded-lg p-4" style={{ background: "linear-gradient(135deg,#1a3d2b 0%,#134f2e 100%)" }}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/60 mb-3">Potential Annual Reduction Range</p>
                  <div className="space-y-2">
                    {[
                      { label: "CO₂ Reduction (TTW)", value: `${fmt(results.co2RedMin, 1)} – ${fmt(results.co2RedMax, 1)} t CO₂/yr` },
                      { label: "tCO₂e Reduction (WTW)", value: `${fmt(results.co2eRedMin, 1)} – ${fmt(results.co2eRedMax, 1)} tCO₂e/yr` },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                        <span className="text-sm text-white/80">{row.label}</span>
                        <span className="font-mono text-sm font-medium text-[#FFD700]">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pollutants */}
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest pb-2 border-b border-gray-100 mb-2">Pollutant &amp; Air Quality Improvement</p>
                <p className="text-xs text-gray-500 italic mb-4 leading-relaxed">
                  Indicative reduction ranges based on SGT HydroEdge hydrogen fuel assist technology across validated deployments. Actual values depend on asset type, load profile, and baseline fuel condition.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {POLLUTANTS.map(p => (
                    <div key={p.name} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <p className="font-semibold text-gray-800 text-sm leading-tight">{p.name}</p>
                      <p className="text-xs text-gray-400 font-medium mt-0.5 mb-2">{p.abbr}</p>
                      <div className="bg-gray-100 rounded h-1.5 mb-2 overflow-hidden">
                        <div className="h-full rounded transition-all" style={{ width: `${p.pct}%`, background: p.color }} />
                      </div>
                      <p className="font-mono text-sm font-medium text-gray-800">{p.range}</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodology note */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-700">Emission Methodology:</span>{" "}
                Diesel CO₂ TTW = 2.68 kg/L (IPCC AR6). WTT upstream = 0.60 kg CO₂e/L. WTW total = 3.28 kg CO₂e/L. For other fuels: IPCC AR6 / IMO DCS default factors. tCO₂e includes CH₄ (GWP-100 ×28) and N₂O (×265).
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-white border-l-4 border-[#FFD700] rounded-lg p-4 text-xs text-gray-600 leading-relaxed shadow-sm">
          <span className="font-semibold text-gray-800">Disclaimer:</span>{" "}
          Results are indicative estimates based on standardised fuel savings ranges and emission factors. Actual savings depend on engine condition, load profile, fuel quality, and operating environment. Pollutant reduction ranges are indicative, validated through SGT HydroEdge field deployments and published hydrogen-assisted combustion research.
        </div>

        {/* CTA */}
        <div className="rounded-xl p-7 text-white text-center shadow-md" style={{ background: "linear-gradient(135deg,#134f2e,#1B6B3D)" }}>
          <h3 className="text-lg font-bold mb-2">Want a Tailored Assessment?</h3>
          <p className="text-sm text-white/75 mb-5 max-w-md mx-auto leading-relaxed">
            Our engineers can analyse your specific fleet, vessel, generator, or industrial asset and provide a detailed savings &amp; decarbonisation roadmap.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FFD700] text-[#134f2e] font-bold text-sm px-7 py-3 rounded-lg hover:bg-yellow-300 transition shadow"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Request Detailed Assessment
          </Link>
        </div>

      </div>
    </div>
  );
}