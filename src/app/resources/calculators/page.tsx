// import React, { useState, useMemo, useEffect } from 'react';

// // --- CONFIGURATION CONSTANTS (Easily Configurable) ---

// const CONFIG = {
//     // Default 10% fuel saving assumption for Saarthi systems
//     FUEL_SAVING_PERCENT: 10, 
//     // kg CO₂ emitted per litre of diesel burnt (Standard factor)
//     CO2_PER_LITER_DIESEL: 2.68, 
//     // Mapping of countries to currency symbols
//     countryCurrencyMap: {
//         "India": { symbol: "₹", placeholderPrice: 95.00 },
//         "United Kingdom": { symbol: "£", placeholderPrice: 1.50 },
//         "United States": { symbol: "$", placeholderPrice: 1.05 },
//         "Europe": { symbol: "€", placeholderPrice: 1.80 },
//         "Australia": { symbol: "A$", placeholderPrice: 1.85 },
//         "South Africa": { symbol: "R", placeholderPrice: 25.00 },
//     },
// };

// // --- THEME COLORS (Based on Saarthi Green) ---
// const BRAND_COLOR = '#33A04A'; // Primary Saarthi Green
// const BG_DARK = '#1f2937';      // Dark background (gray-800 equivalent)
// const BG_LIGHT = '#ffffff';     // Light card background

// // --- HELPER FUNCTIONS ---

// const formatNumber = (num, decimalPlaces = 0, currencySymbol = '') => {
//     if (isNaN(num)) return `${currencySymbol} 0`;
//     const formatted = new Intl.NumberFormat('en-US', {
//         minimumFractionDigits: decimalPlaces,
//         maximumFractionDigits: decimalPlaces,
//     }).format(num);
//     return currencySymbol ? `${currencySymbol} ${formatted}` : formatted;
// };

// // --- CALCULATOR LOGIC FUNCTION ---

// const calculateResults = (inputs) => {
//     const { applicationType, vehicleCategory, monthlyMileageKm, fuelAverageKmPerLitre, dieselCostPerLitre, engineHoursPerDay, fuelLitresPerHour, monthlyFuelLitresDG } = inputs;
//     const { FUEL_SAVING_PERCENT, CO2_PER_LITER_DIESEL } = CONFIG;

//     let annualFuelLitres = 0;

//     if (applicationType === "Vehicle") {
//         if (vehicleCategory === "Logistics" || vehicleCategory === "Transport") {
//             if (monthlyMileageKm > 0 && fuelAverageKmPerLitre > 0) {
//                 const monthlyFuelLitres = monthlyMileageKm / fuelAverageKmPerLitre;
//                 annualFuelLitres = monthlyFuelLitres * 12;
//             }
//         } else if (vehicleCategory === "Construction" || vehicleCategory === "Mining") {
//             if (engineHoursPerDay > 0 && fuelLitresPerHour > 0) {
//                 const monthlyHours = engineHoursPerDay * 30.4167; // Average days per month
//                 const monthlyFuelLitres = monthlyHours * fuelLitresPerHour;
//                 annualFuelLitres = monthlyFuelLitres * 12;
//             }
//         }
//     } else if (applicationType === "DG") {
//         if (monthlyFuelLitresDG > 0) {
//             annualFuelLitres = monthlyFuelLitresDG * 12;
//         }
//     }

//     if (annualFuelLitres === 0 || dieselCostPerLitre <= 0) {
//         return null;
//     }

//     const annualFuelSavedLitres = annualFuelLitres * (FUEL_SAVING_PERCENT / 100);
//     const annualCostSaved = annualFuelSavedLitres * dieselCostPerLitre;
//     const annualCO2ReductionKg = annualFuelSavedLitres * CO2_PER_LITER_DIESEL;

//     return {
//         annualFuelSavedLitres,
//         annualCO2ReductionKg,
//         annualCostSaved,
//         annualFuelLitres,
//     };
// };

// // --- UI COMPONENTS ---

// const InputField = ({ label, name, value, onChange, placeholder, prefix, type = 'number', unit = '', min = 0, required = true, error }) => (
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
//                 placeholder={placeholder}
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

// const SelectField = ({ label, name, value, onChange, options, error }) => (
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
//                 {options.map(opt => (
//                     <option key={opt.value || opt} value={opt.value || opt}>
//                         {opt.label || opt}
//                     </option>
//                 ))}
//             </select>
//             {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
//         </div>
//     </div>
// );

// const ResultCard = ({ results, currencySymbol, savingPercent, co2Factor }) => (
//     <div className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-t-4" style={{ borderColor: BRAND_COLOR }}>
//         <h3 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white text-center">
//             Your Estimated Annual Impact
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//             {/* Annual Cost Saving */}
//             <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
//                 <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
//                     {formatNumber(results.annualCostSaved, 0, currencySymbol)}
//                 </p>
//                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//                     Annual Cost Saving
//                 </p>
//             </div>

//             {/* Annual Fuel Saved */}
//             <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
//                 <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
//                     {formatNumber(results.annualFuelSavedLitres, 0)}
//                 </p>
//                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//                     Fuel Saved (Litres)
//                 </p>
//             </div>

//             {/* Annual CO₂ Reduction */}
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

// const initialFormState = {
//     country: '',
//     applicationType: '',
//     vehicleCategory: '',
//     // Calculation Inputs
//     monthlyMileageKm: 10000,
//     fuelAverageKmPerLitre: 3.5,
//     dieselCostPerLitre: 95,
//     engineHoursPerDay: 8,
//     fuelLitresPerHour: 15,
//     dgHoursPerMonth: 250,
//     monthlyFuelLitresDG: 3000,
// };

// const SavingsCalculator = () => {
//     const [inputs, setInputs] = useState(initialFormState);
//     const [errors, setErrors] = useState({});
//     const [calculatedResults, setCalculatedResults] = useState(null);

//     const countryOptions = Object.keys(CONFIG.countryCurrencyMap).map(c => ({ label: c, value: c }));
//     const applicationOptions = ['Vehicle', 'DG', 'Marine'];
//     const vehicleCategoryOptions = ['Logistics', 'Transport', 'Construction', 'Mining'];

//     // Memoized Currency Symbol and Placeholder Price
//     const currencyInfo = useMemo(() => CONFIG.countryCurrencyMap[inputs.country] || { symbol: '$', placeholderPrice: 1.05 }, [inputs.country]);
//     const currencySymbol = currencyInfo.symbol;

//     // Reset irrelevant fields when major selections change
//     useEffect(() => {
//         setInputs(prev => ({
//             ...prev,
//             vehicleCategory: prev.applicationType === 'Vehicle' ? prev.vehicleCategory : '',
//         }));
//         setCalculatedResults(null);
//     }, [inputs.applicationType]);

//     useEffect(() => {
//         // Update diesel cost placeholder when country changes
//         setInputs(prev => ({
//             ...prev,
//             dieselCostPerLitre: currencyInfo.placeholderPrice,
//         }));
//         setCalculatedResults(null);
//     }, [inputs.country, currencyInfo.placeholderPrice]);
    
//     useEffect(() => {
//         setCalculatedResults(null);
//     }, [inputs.vehicleCategory]);


//     const handleChange = (e) => {
//         const { name, value, type } = e.target;
        
//         let processedValue = value;
//         if (type === 'number') {
//             processedValue = value === '' ? '' : parseFloat(value);
//         }

//         setInputs(prev => ({
//             ...prev,
//             [name]: processedValue
//         }));
        
//         // Clear the specific error for the field being edited
//         if (errors[name]) {
//             setErrors(prev => {
//                 const newErrors = { ...prev };
//                 delete newErrors[name];
//                 return newErrors;
//             });
//         }
//         setCalculatedResults(null);
//     };

//     const validateInputs = () => {
//         const newErrors = {};

//         // Helper to check if a required field is missing or invalid
//         const checkRequired = (field, message) => {
//             const val = inputs[field];
//             if (val === '' || val === null || (typeof val === 'number' && val <= 0)) {
//                 newErrors[field] = message || "Please enter a value greater than zero.";
//             }
//         };

//         // Step 1 & 2 Validation
//         checkRequired('country', 'Please select your country.');
//         checkRequired('applicationType', 'Please select the application type.');
//         checkRequired('dieselCostPerLitre', 'Please enter the cost of diesel.');


//         // Conditional Validation
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

//     const handleSubmit = (e) => {
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
//         <div className="min-h-screen p-8 md:p-12 bg-gray-100 dark:bg-gray-900 font-sans">
//             <div className="max-w-4xl mx-auto">
//                 {/* Header */}
//                 <header className="text-center mb-12">
//                     <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
//                         Estimated Savings Calculator
//                     </h1>
//                     <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//                         See your potential annual fuel cost savings and CO₂ reduction by implementing Saarthi GreenTech systems.
//                     </p>
//                 </header>

//                 {/* Calculator Card */}
//                 <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-white dark:bg-gray-950 rounded-3xl shadow-2xl border-t-8" style={{ borderColor: BRAND_COLOR }}>
//                     <div className="space-y-8">
//                         {/* Step 1: Country Selection */}
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
//                                 />
//                                 <InputField
//                                     label={`Cost of diesel per litre (estimated ${currencySymbol})`}
//                                     name="dieselCostPerLitre"
//                                     value={inputs.dieselCostPerLitre}
//                                     onChange={handleChange}
//                                     placeholder={currencyInfo.placeholderPrice}
//                                     prefix={currencySymbol}
//                                     unit=" / Litre"
//                                     error={errors.dieselCostPerLitre}
//                                 />
//                             </div>
//                         </div>

//                         {/* Step 2: Application Type Selection */}
//                         <div className={`p-4 rounded-xl border dark:border-gray-800 ${inputs.country ? 'bg-white dark:bg-gray-800' : 'bg-gray-200 dark:bg-gray-700 opacity-50'}`}>
//                             <h4 className="text-xl font-bold mb-4" style={{ color: BRAND_COLOR }}>Step 2: Application Details</h4>
//                             <SelectField
//                                 label="Application Type"
//                                 name="applicationType"
//                                 value={inputs.applicationType}
//                                 onChange={handleChange}
//                                 options={applicationOptions}
//                                 error={errors.applicationType}
//                             />
//                         </div>

//                         {/* Step 2A: Vehicle Category (Progressive Reveal) */}
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
//                                 />
//                             </div>
//                         )}

//                         {/* Step 3: Specific Inputs (Progressive Reveal) */}
//                         <div className="p-4 rounded-xl border dark:border-gray-800 bg-white dark:bg-gray-800">
//                             <h4 className="text-xl font-bold mb-6" style={{ color: BRAND_COLOR }}>Step 3: Usage Parameters</h4>
                            
//                             {inputs.applicationType === 'Vehicle' && renderVehicleInputs()}
//                             {inputs.applicationType === 'DG' && renderDGInputs()}
//                             {inputs.applicationType === 'Marine' && renderMarineMessage()}
                            
//                             {/* Calculation Trigger */}
//                             {inputs.applicationType !== 'Marine' && (
//                                 <button
//                                     type="submit"
//                                     className="mt-8 w-full px-6 py-4 text-xl font-bold rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.01] text-white"
//                                     style={{ backgroundColor: BRAND_COLOR, filter: 'brightness(0.95)' }}
//                                 >
//                                     Calculate Estimated Annual Impact
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                 </form>

//                 {/* Results Block */}
//                 {calculatedResults && (
//                     <ResultCard
//                         results={calculatedResults}
//                         currencySymbol={currencySymbol}
//                         savingPercent={CONFIG.FUEL_SAVING_PERCENT}
//                         co2Factor={CONFIG.CO2_PER_LITER_DIESEL}
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SavingsCalculator;
'use client';

import React, { useState, useMemo, useEffect } from 'react';

// --- CONFIGURATION CONSTANTS (Easily Configurable) ---

const CONFIG = {
    // Default 10% fuel saving assumption for Saarthi systems
    FUEL_SAVING_PERCENT: 10, 
    // kg CO₂ emitted per litre of diesel burnt (Standard factor)
    CO2_PER_LITER_DIESEL: 2.68, 
    // Mapping of countries to currency symbols
    countryCurrencyMap: {
        "India": { symbol: "₹", placeholderPrice: 95.00 },
        "United Kingdom": { symbol: "£", placeholderPrice: 1.50 },
        "United States": { symbol: "$", placeholderPrice: 1.05 },
        "Europe": { symbol: "€", placeholderPrice: 1.80 },
        "Australia": { symbol: "A$", placeholderPrice: 1.85 },
        "South Africa": { symbol: "R", placeholderPrice: 25.00 },
    },
};

// --- THEME COLORS (Based on Saarthi Green) ---
const BRAND_COLOR = '#33A04A'; // Primary Saarthi Green
const BG_DARK = '#1f2937';      // Dark background (gray-800 equivalent)
const BG_LIGHT = '#ffffff';     // Light card background

// --- HELPER FUNCTIONS ---

const formatNumber = (num, decimalPlaces = 0, currencySymbol = '') => {
    if (isNaN(num)) return `${currencySymbol} 0`;
    const formatted = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
    }).format(num);
    return currencySymbol ? `${currencySymbol} ${formatted}` : formatted;
};

// --- CALCULATOR LOGIC FUNCTION ---

const calculateResults = (inputs) => {
    const { applicationType, vehicleCategory, monthlyMileageKm, fuelAverageKmPerLitre, dieselCostPerLitre, engineHoursPerDay, fuelLitresPerHour, monthlyFuelLitresDG } = inputs;
    const { FUEL_SAVING_PERCENT, CO2_PER_LITER_DIESEL } = CONFIG;

    let annualFuelLitres = 0;

    if (applicationType === "Vehicle") {
        if (vehicleCategory === "Logistics" || vehicleCategory === "Transport") {
            if (monthlyMileageKm > 0 && fuelAverageKmPerLitre > 0) {
                const monthlyFuelLitres = monthlyMileageKm / fuelAverageKmPerLitre;
                annualFuelLitres = monthlyFuelLitres * 12;
            }
        } else if (vehicleCategory === "Construction" || vehicleCategory === "Mining") {
            if (engineHoursPerDay > 0 && fuelLitresPerHour > 0) {
                const monthlyHours = engineHoursPerDay * 30.4167; // Average days per month
                const monthlyFuelLitres = monthlyHours * fuelLitresPerHour;
                annualFuelLitres = monthlyFuelLitres * 12;
            }
        }
    } else if (applicationType === "DG") {
        if (monthlyFuelLitresDG > 0) {
            annualFuelLitres = monthlyFuelLitresDG * 12;
        }
    }

    if (annualFuelLitres === 0 || dieselCostPerLitre <= 0) {
        return null;
    }

    const annualFuelSavedLitres = annualFuelLitres * (FUEL_SAVING_PERCENT / 100);
    const annualCostSaved = annualFuelSavedLitres * dieselCostPerLitre;
    const annualCO2ReductionKg = annualFuelSavedLitres * CO2_PER_LITER_DIESEL;

    return {
        annualFuelSavedLitres,
        annualCO2ReductionKg,
        annualCostSaved,
        annualFuelLitres,
    };
};

// --- UI COMPONENTS ---

const InputField = ({ label, name, value, onChange, placeholder, prefix, type = 'number', unit = '', min = 0, required = true, error }) => (
    <div className="flex flex-col space-y-1">
        <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative flex rounded-xl shadow-sm overflow-hidden border dark:border-gray-700">
            {prefix && (
                <span className="inline-flex items-center px-4 bg-gray-50 dark:bg-gray-700 border-r dark:border-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm font-semibold">
                    {prefix}
                </span>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                min={min}
                placeholder={placeholder}
                step={type === 'number' ? '0.1' : undefined}
                className="block w-full p-3 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-0 focus:border-transparent transition duration-150"
                style={{ outline: 'none' }}
                required={required}
            />
            {unit && (
                <span className="inline-flex items-center px-4 bg-gray-50 dark:bg-gray-700 border-l dark:border-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm font-semibold">
                    {unit}
                </span>
            )}
        </div>
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
);

const SelectField = ({ label, name, value, onChange, options, error }) => (
    <div className="flex flex-col space-y-1">
        <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label} <span className="text-red-500">*</span>
        </label>
        <div className="relative">
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="block w-full p-3 text-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-xl shadow-sm appearance-none transition duration-150 focus:ring-2"
                style={{ borderColor: BRAND_COLOR, borderWidth: '1px' }}
                required
            >
                <option value="">Select...</option>
                {options.map(opt => (
                    <option key={opt.value || opt} value={opt.value || opt}>
                        {opt.label || opt}
                    </option>
                ))}
            </select>
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    </div>
);

const ResultCard = ({ results, currencySymbol, savingPercent, co2Factor }) => (
    <div className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-t-4" style={{ borderColor: BRAND_COLOR }}>
        <h3 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white text-center">
            Your Estimated Annual Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Annual Cost Saving */}
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
                <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
                    {formatNumber(results.annualCostSaved, 0, currencySymbol)}
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Annual Cost Saving
                </p>
            </div>

            {/* Annual Fuel Saved */}
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
                <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
                    {formatNumber(results.annualFuelSavedLitres, 0)}
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Fuel Saved (Litres)
                </p>
            </div>

            {/* Annual CO₂ Reduction */}
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 transition duration-300 hover:scale-[1.03]">
                <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: BRAND_COLOR }}>
                    {formatNumber(results.annualCO2ReductionKg, 0)}
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    CO₂ Reduced (kg)
                </p>
            </div>
        </div>

        <p className="text-center text-sm italic mt-8 text-gray-500 dark:text-gray-400">
            *Assumes a conservative fuel saving of {savingPercent}% and {co2Factor} kg CO₂ per litre of diesel. Results are estimates only.
        </p>
    </div>
);

// --- MAIN COMPONENT ---

const initialFormState = {
    country: '',
    applicationType: '',
    vehicleCategory: '',
    // Calculation Inputs
    monthlyMileageKm: 10000,
    fuelAverageKmPerLitre: 3.5,
    dieselCostPerLitre: 95,
    engineHoursPerDay: 8,
    fuelLitresPerHour: 15,
    dgHoursPerMonth: 250,
    monthlyFuelLitresDG: 3000,
};

const SavingsCalculator = () => {
    const [inputs, setInputs] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [calculatedResults, setCalculatedResults] = useState(null);

    const countryOptions = Object.keys(CONFIG.countryCurrencyMap).map(c => ({ label: c, value: c }));
    const applicationOptions = ['Vehicle', 'DG', 'Marine'];
    const vehicleCategoryOptions = ['Logistics', 'Transport', 'Construction', 'Mining'];

    // Memoized Currency Symbol and Placeholder Price
    const currencyInfo = useMemo(() => CONFIG.countryCurrencyMap[inputs.country] || { symbol: '$', placeholderPrice: 1.05 }, [inputs.country]);
    const currencySymbol = currencyInfo.symbol;

    // Reset irrelevant fields when major selections change
    useEffect(() => {
        setInputs(prev => ({
            ...prev,
            vehicleCategory: prev.applicationType === 'Vehicle' ? prev.vehicleCategory : '',
        }));
        setCalculatedResults(null);
    }, [inputs.applicationType]);

    useEffect(() => {
        // Update diesel cost placeholder when country changes
        setInputs(prev => ({
            ...prev,
            dieselCostPerLitre: currencyInfo.placeholderPrice,
        }));
        setCalculatedResults(null);
    }, [inputs.country, currencyInfo.placeholderPrice]);
    
    useEffect(() => {
        setCalculatedResults(null);
    }, [inputs.vehicleCategory]);


    const handleChange = (e) => {
        const { name, value, type } = e.target;
        
        let processedValue = value;
        if (type === 'number') {
            processedValue = value === '' ? '' : parseFloat(value);
        }

        setInputs(prev => ({
            ...prev,
            [name]: processedValue
        }));
        
        // Clear the specific error for the field being edited
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
        setCalculatedResults(null);
    };

    const validateInputs = () => {
        const newErrors = {};

        // Helper to check if a required field is missing or invalid
        const checkRequired = (field, message) => {
            const val = inputs[field];
            if (val === '' || val === null || (typeof val === 'number' && val <= 0)) {
                newErrors[field] = message || "Please enter a value greater than zero.";
            }
        };

        // Step 1 & 2 Validation
        checkRequired('country', 'Please select your country.');
        checkRequired('applicationType', 'Please select the application type.');
        checkRequired('dieselCostPerLitre', 'Please enter the cost of diesel.');


        // Conditional Validation
        if (inputs.applicationType === 'Vehicle') {
            checkRequired('vehicleCategory', 'Please select a vehicle category.');
            if (inputs.vehicleCategory === 'Logistics' || inputs.vehicleCategory === 'Transport') {
                checkRequired('monthlyMileageKm');
                checkRequired('fuelAverageKmPerLitre');
            } else if (inputs.vehicleCategory === 'Construction' || inputs.vehicleCategory === 'Mining') {
                checkRequired('engineHoursPerDay');
                checkRequired('fuelLitresPerHour');
            }
        } else if (inputs.applicationType === 'DG') {
            checkRequired('dgHoursPerMonth');
            checkRequired('monthlyFuelLitresDG');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInputs()) {
            const results = calculateResults(inputs);
            setCalculatedResults(results);
        }
    };

    const renderVehicleInputs = () => {
        if (!inputs.vehicleCategory) return null;

        const commonInput = (
            <InputField
                label={`Cost of diesel per litre (${currencySymbol})`}
                name="dieselCostPerLitre"
                value={inputs.dieselCostPerLitre}
                onChange={handleChange}
                placeholder={currencyInfo.placeholderPrice}
                prefix={currencySymbol}
                unit=" / Litre"
                error={errors.dieselCostPerLitre}
            />
        );

        if (inputs.vehicleCategory === 'Logistics' || inputs.vehicleCategory === 'Transport') {
            return (
                <div className="space-y-6">
                    <InputField
                        label="Average Monthly Distance (km)"
                        name="monthlyMileageKm"
                        value={inputs.monthlyMileageKm}
                        onChange={handleChange}
                        placeholder="e.g., 10000"
                        unit="km"
                        error={errors.monthlyMileageKm}
                    />
                    <InputField
                        label="Current Fuel Average (km per litre)"
                        name="fuelAverageKmPerLitre"
                        value={inputs.fuelAverageKmPerLitre}
                        onChange={handleChange}
                        placeholder="e.g., 3.5"
                        unit="km/L"
                        error={errors.fuelAverageKmPerLitre}
                    />
                    {commonInput}
                </div>
            );
        } else if (inputs.vehicleCategory === 'Construction' || inputs.vehicleCategory === 'Mining') {
            return (
                <div className="space-y-6">
                    <InputField
                        label="Average Engine Usage per Day (Hours)"
                        name="engineHoursPerDay"
                        value={inputs.engineHoursPerDay}
                        onChange={handleChange}
                        placeholder="e.g., 8"
                        unit="Hours"
                        error={errors.engineHoursPerDay}
                    />
                    <InputField
                        label="Average Diesel Consumption per Hour (Litres)"
                        name="fuelLitresPerHour"
                        value={inputs.fuelLitresPerHour}
                        onChange={handleChange}
                        placeholder="e.g., 15"
                        unit="L / Hour"
                        error={errors.fuelLitresPerHour}
                    />
                    {commonInput}
                </div>
            );
        }
        return null;
    };

    const renderDGInputs = () => {
        return (
            <div className="space-y-6">
                <InputField
                    label="Hours of DG usage per Month"
                    name="dgHoursPerMonth"
                    value={inputs.dgHoursPerMonth}
                    onChange={handleChange}
                    placeholder="e.g., 250"
                    unit="Hours"
                    error={errors.dgHoursPerMonth}
                />
                <InputField
                    label="Total Diesel Consumption per Month (Litres)"
                    name="monthlyFuelLitresDG"
                    value={inputs.monthlyFuelLitresDG}
                    onChange={handleChange}
                    placeholder="e.g., 3000"
                    unit="Litres"
                    error={errors.monthlyFuelLitresDG}
                />
                <InputField
                    label={`Cost of diesel per litre (${currencySymbol})`}
                    name="dieselCostPerLitre"
                    value={inputs.dieselCostPerLitre}
                    onChange={handleChange}
                    placeholder={currencyInfo.placeholderPrice}
                    prefix={currencySymbol}
                    unit=" / Litre"
                    error={errors.dieselCostPerLitre}
                />
            </div>
        );
    };
    
    const renderMarineMessage = () => (
        <div className="p-8 bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 rounded-xl text-yellow-800 dark:text-yellow-200">
            <h4 className="text-2xl font-bold mb-4">Custom Marine Estimate</h4>
            <p className="text-lg">
                Marine engines are highly application-specific and complex. Please contact us and we will provide a customised savings & CO₂ reduction estimate for your vessel.
            </p>
            <button
                type="button"
                className="mt-6 w-full px-6 py-3 text-lg font-bold rounded-xl shadow-md transition duration-300 transform hover:scale-[1.01] text-white"
                style={{ backgroundColor: BRAND_COLOR }}
                onClick={() => alert("Simulating Marine Savings Estimate Request. In a real app, this would open a dedicated lead form.")}
            >
                Request Marine Savings Estimate
            </button>
            <p className="text-xs mt-3 opacity-80">
                (Note: This button simulates opening a contact form for Name, Company, Email, Vessel Type, etc.)
            </p>
        </div>
    );

    return (
        <div className="min-h-screen p-8 md:p-12 bg-gray-100 dark:bg-gray-900 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
                        Estimated Savings Calculator
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        See your potential annual fuel cost savings and CO₂ reduction by implementing Saarthi GreenTech systems.
                    </p>
                </header>

                {/* Calculator Card */}
                <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-white dark:bg-gray-950 rounded-3xl shadow-2xl border-t-8" style={{ borderColor: BRAND_COLOR }}>
                    <div className="space-y-8">
                        {/* Step 1: Country Selection */}
                        <div className="p-4 rounded-xl border dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                            <h4 className="text-xl font-bold mb-4" style={{ color: BRAND_COLOR }}>Step 1: Location & Cost</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <SelectField
                                    label="Select Country"
                                    name="country"
                                    value={inputs.country}
                                    onChange={handleChange}
                                    options={countryOptions}
                                    error={errors.country}
                                />
                                <InputField
                                    label={`Cost of diesel per litre (estimated ${currencySymbol})`}
                                    name="dieselCostPerLitre"
                                    value={inputs.dieselCostPerLitre}
                                    onChange={handleChange}
                                    placeholder={currencyInfo.placeholderPrice}
                                    prefix={currencySymbol}
                                    unit=" / Litre"
                                    error={errors.dieselCostPerLitre}
                                />
                            </div>
                        </div>

                        {/* Step 2: Application Type Selection */}
                        <div className={`p-4 rounded-xl border dark:border-gray-800 ${inputs.country ? 'bg-white dark:bg-gray-800' : 'bg-gray-200 dark:bg-gray-700 opacity-50'}`}>
                            <h4 className="text-xl font-bold mb-4" style={{ color: BRAND_COLOR }}>Step 2: Application Details</h4>
                            <SelectField
                                label="Application Type"
                                name="applicationType"
                                value={inputs.applicationType}
                                onChange={handleChange}
                                options={applicationOptions}
                                error={errors.applicationType}
                            />
                        </div>

                        {/* Step 2A: Vehicle Category (Progressive Reveal) */}
                        {inputs.applicationType === 'Vehicle' && (
                            <div className="p-4 rounded-xl border dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                                <h4 className="text-xl font-bold mb-4" style={{ color: BRAND_COLOR }}>Step 2A: Vehicle Category</h4>
                                <SelectField
                                    label="Vehicle Category"
                                    name="vehicleCategory"
                                    value={inputs.vehicleCategory}
                                    onChange={handleChange}
                                    options={vehicleCategoryOptions}
                                    error={errors.vehicleCategory}
                                />
                            </div>
                        )}

                        {/* Step 3: Specific Inputs (Progressive Reveal) */}
                        <div className="p-4 rounded-xl border dark:border-gray-800 bg-white dark:bg-gray-800">
                            <h4 className="text-xl font-bold mb-6" style={{ color: BRAND_COLOR }}>Step 3: Usage Parameters</h4>
                            
                            {inputs.applicationType === 'Vehicle' && renderVehicleInputs()}
                            {inputs.applicationType === 'DG' && renderDGInputs()}
                            {inputs.applicationType === 'Marine' && renderMarineMessage()}
                            
                            {/* Calculation Trigger */}
                            {inputs.applicationType !== 'Marine' && (
                                <button
                                    type="submit"
                                    className="mt-8 w-full px-6 py-4 text-xl font-bold rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.01] text-white"
                                    style={{ backgroundColor: BRAND_COLOR, filter: 'brightness(0.95)' }}
                                >
                                    Calculate Estimated Annual Impact
                                </button>
                            )}
                        </div>
                    </div>
                </form>

                {/* Results Block */}
                {calculatedResults && (
                    <ResultCard
                        results={calculatedResults}
                        currencySymbol={currencySymbol}
                        savingPercent={CONFIG.FUEL_SAVING_PERCENT}
                        co2Factor={CONFIG.CO2_PER_LITER_DIESEL}
                    />
                )}
            </div>
        </div>
    );
};

export default SavingsCalculator;