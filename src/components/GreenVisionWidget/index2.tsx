'use client';

import { useState, useEffect } from 'react';

interface CO2Data {
  totalCO2SavedKg: number;
  totalFuelSavedLiters: number;
  totalDistanceKm: number;
  treesEquivalent: number;
  carsOffRoad: number; // New insight!
  lastUpdated: string;
}

export default function CO2SavingsSection() {
  const [data, setData] = useState<CO2Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [animatedCO2, setAnimatedCO2] = useState(0);
  const [animatedFuel, setAnimatedFuel] = useState(0);
  const [animatedDistance, setAnimatedDistance] = useState(0);
  const [animatedTrees, setAnimatedTrees] = useState(0);
  const [animatedCars, setAnimatedCars] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchCO2Data();
    // Refresh every 5 minutes
    const interval = setInterval(fetchCO2Data, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!data || !isVisible) return;

    const duration = 2500;
    const steps = 80;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 4);

      setAnimatedCO2(data.totalCO2SavedKg * easeOut);
      setAnimatedFuel(data.totalFuelSavedLiters * easeOut);
      setAnimatedDistance(data.totalDistanceKm * easeOut);
      setAnimatedTrees(data.treesEquivalent * easeOut);
      setAnimatedCars(data.carsOffRoad * easeOut);

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedCO2(data.totalCO2SavedKg);
        setAnimatedFuel(data.totalFuelSavedLiters);
        setAnimatedDistance(data.totalDistanceKm);
        setAnimatedTrees(data.treesEquivalent);
        setAnimatedCars(data.carsOffRoad);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [data, isVisible]);

  const fetchCO2Data = async () => {
    try {
      const response = await fetch('/api/co2-savings');
      if (!response.ok) throw new Error('Failed to fetch CO2 data');
      const jsonData = await response.json();
      setData(jsonData);
      setError(null);
      setTimeout(() => setIsVisible(true), 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num: number, decimals: number = 2) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    }).format(num);
  };

  if (loading) {
    return (
      <section className="relative z-10 py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="container relative">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-green-200/50 dark:bg-gray-700 rounded-2xl w-2/3 mx-auto"></div>
            <div className="h-32 bg-green-300/50 dark:bg-gray-600 rounded-3xl w-full max-w-4xl mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 shadow-lg border-2 border-red-200 dark:border-red-800 max-w-2xl mx-auto">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-red-600 dark:text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-red-600 dark:text-red-400 font-semibold text-lg mb-2">Unable to load impact data</p>
              <p className="text-red-500 dark:text-red-300 text-sm mb-6">{error}</p>
              <button
                onClick={fetchCO2Data}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300/20 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-300/20 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className={`mx-auto mb-16 max-w-[800px] text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-green-700 dark:text-green-300">LIVE FLEET IMPACT</span>
          </div>
          
          <h2 className="mb-6 text-4xl font-bold !leading-tight text-black dark:text-white sm:text-5xl md:text-[56px]">
            Our Hydrogen Retrofits
            <span className="block mt-2 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Making Real Impact
            </span>
          </h2>
          <p className="text-lg !leading-relaxed text-gray-600 dark:text-gray-300">
            Real data from our deployed fleet. Every kilometer driven with our GreenDrive systems 
            means cleaner air and a healthier planet.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Hero Stat - Total CO2 Saved */}
          <div className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-green-100 dark:border-gray-700 shadow-2xl">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Total CO₂ Emissions Prevented</h3>
                </div>
                
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-3 mb-2">
                    <span className="text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent tabular-nums leading-none">
                      {formatNumber(animatedCO2)}
                    </span>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-gray-500 dark:text-gray-400">kilograms</p>
                  
                  {/* Progress bar visual */}
                  <div className="mt-8 max-w-md mx-auto">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full transition-all duration-2000 ease-out"
                        style={{width: `${Math.min((animatedCO2 / data.totalCO2SavedKg) * 100, 100)}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Stats Grid - 4 Cards */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Distance Covered */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 border border-blue-100/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Distance</span>
                </div>
                <p className="text-3xl font-black text-gray-800 dark:text-white tabular-nums mb-1">
                  {formatNumber(animatedDistance, 0)}
                </p>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">kilometers traveled</p>
              </div>
            </div>

            {/* Fuel Saved */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 border border-amber-100/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Fuel Saved</span>
                </div>
                <p className="text-3xl font-black text-gray-800 dark:text-white tabular-nums mb-1">
                  {formatNumber(animatedFuel, 0)}
                </p>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">liters of diesel</p>
              </div>
            </div>

            {/* Trees Equivalent */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 border border-green-100/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">🌳</div>
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Trees</span>
                </div>
                <p className="text-3xl font-black text-gray-800 dark:text-white tabular-nums mb-1">
                  {formatNumber(animatedTrees, 0)}
                </p>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">planted equivalent</p>
              </div>
            </div>

            {/* Cars Off Road */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 border border-purple-100/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Impact</span>
                </div>
                <p className="text-3xl font-black text-gray-800 dark:text-white tabular-nums mb-1">
                  {formatNumber(animatedCars, 1)}
                </p>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">cars off the road</p>
              </div>
            </div>
          </div>

          {/* Bottom Info Banner */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-700 dark:via-emerald-700 dark:to-teal-700 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
                    <span className="font-bold text-lg">Live Fleet Data</span>
                  </div>
                  <span className="text-white/80">•</span>
                  <span className="text-white/90">{data.totalDistanceKm > 0 ? 'Active Systems' : 'Initializing'}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">
                    Updated {new Date(data.lastUpdated).toLocaleString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}