import React, { useState } from 'react';
import {
  Filter,
  CheckCircle2,
  Calculator,
  ArrowRight,
  ShieldCheck,
  Send,
  Zap,
  MapPin,
  Building,
} from 'lucide-react';
import { INDIA_STATES_CITIES } from '../data/databaseData';
import { CategoryType, MobileDatabasePackage } from '../types';

interface LeadCustomizerProps {
  onAddCustomPackageToCart: (pkg: MobileDatabasePackage) => void;
}

export const LeadCustomizer: React.FC<LeadCustomizerProps> = ({ onAddCustomPackageToCart }) => {
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('Real Estate Buyers');
  const [leadQuantity, setLeadQuantity] = useState<number>(100000);
  const [needWhatsAppOnly, setNeedWhatsAppOnly] = useState(true);
  const [needDltReady, setNeedDltReady] = useState(true);
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  const stateObj = INDIA_STATES_CITIES.find((s) => s.state === selectedState) || INDIA_STATES_CITIES[0];

  // Pricing calculation logic
  const ratePerLead = needWhatsAppOnly ? 0.04 : 0.025; // in INR
  const totalCost = Math.round(leadQuantity * ratePerLead);
  const originalCost = Math.round(totalCost * 2.5);

  const handleCreateCustomOrder = () => {
    const customPkg: MobileDatabasePackage = {
      id: `custom-${Date.now()}`,
      title: `Custom ${selectedCategory} Database (${selectedCity}, ${selectedState})`,
      category: selectedCategory,
      state: selectedState,
      city: selectedCity,
      leadCount: leadQuantity,
      accuracy: 98,
      price: totalCost,
      originalPrice: originalCost,
      description: `Custom dataset generated specifically for ${selectedCity} (${selectedState}) focused on ${selectedCategory}.`,
      fieldsIncluded: ['Mobile Number', 'Contact Name', 'City', 'State', 'WhatsApp Verified', 'DND Status'],
      isWhatsAppVerified: needWhatsAppOnly,
      isDltReady: needDltReady,
    };

    onAddCustomPackageToCart(customPkg);
    setQuoteSuccess(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-bold border border-amber-500/30 mb-3">
              <Filter className="w-3.5 h-3.5" />
              <span>Custom Data Extraction Engine</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Build Your Custom State & City Lead List
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Select target state, city, category, and lead volume. Our automated engine will compile verified mobile numbers tailored to your exact campaign.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Controls (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
          <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
            Select Audience Parameters
          </h3>

          {/* State & City Picker */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Select Target State
              </label>
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  const st = INDIA_STATES_CITIES.find((s) => s.state === e.target.value);
                  if (st && st.cities.length > 0) setSelectedCity(st.cities[0]);
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                {INDIA_STATES_CITIES.map((s, i) => (
                  <option key={i} value={s.state}>
                    {s.state}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Select Target City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                {stateObj.cities.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Industry / Audience Segment
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as CategoryType)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="Real Estate Buyers">Real Estate & Property Buyers</option>
              <option value="B2B Corporate">B2B Corporate Executives & Business Owners</option>
              <option value="High Net-Worth (HNI)">HNI Investors & Demat Traders</option>
              <option value="Doctors & Healthcare">Doctors & Clinic Owners</option>
              <option value="E-Commerce Shoppers">E-Commerce & Online Buyers</option>
              <option value="Car & Vehicle Owners">Car & 4-Wheeler Vehicle Owners</option>
              <option value="IT Professionals">IT & Tech Software Engineers</option>
            </select>
          </div>

          {/* Volume Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-slate-300 uppercase tracking-wider">Required Mobile Records Volume</span>
              <span className="text-emerald-400 font-mono text-base">{leadQuantity.toLocaleString()} Leads</span>
            </div>
            <input
              type="range"
              min="10000"
              max="1000000"
              step="10000"
              value={leadQuantity}
              onChange={(e) => setLeadQuantity(parseInt(e.target.value))}
              className="w-full accent-amber-500 bg-slate-950 h-2.5 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>10,000 Records</span>
              <span>1,000,000+ Records</span>
            </div>
          </div>

          {/* Options Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <label className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between cursor-pointer">
              <span className="text-slate-300 font-semibold">100% WhatsApp Verified Only</span>
              <input
                type="checkbox"
                checked={needWhatsAppOnly}
                onChange={(e) => setNeedWhatsAppOnly(e.target.checked)}
                className="accent-amber-500 w-4 h-4 cursor-pointer"
              />
            </label>

            <label className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between cursor-pointer">
              <span className="text-slate-300 font-semibold">DLT SMS Compliant</span>
              <input
                type="checkbox"
                checked={needDltReady}
                onChange={(e) => setNeedDltReady(e.target.checked)}
                className="accent-amber-500 w-4 h-4 cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* Right Summary & Order Card (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Calculated Instant Package Quote
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl font-black text-white">₹{totalCost.toLocaleString()}</span>
              <span className="text-xs text-slate-500 line-through">₹{originalCost.toLocaleString()}</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Includes Excel + CSV instant link delivery.</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span>Target Location:</span>
              <span className="text-white font-bold">{selectedCity}, {selectedState}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Audience Category:</span>
              <span className="text-white font-bold">{selectedCategory}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Total Records:</span>
              <span className="text-emerald-400 font-bold">{leadQuantity.toLocaleString()} Leads</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Accuracy Guarantee:</span>
              <span className="text-white font-bold">98% Verified</span>
            </div>
          </div>

          <button
            onClick={handleCreateCustomOrder}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black py-4 rounded-2xl shadow-xl shadow-amber-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 text-sm"
          >
            <Zap className="w-5 h-5 fill-current" />
            <span>Add Custom Dataset To Cart</span>
          </button>

          {quoteSuccess && (
            <div className="bg-emerald-950/60 p-4 rounded-2xl border border-emerald-500/30 text-xs text-emerald-300 font-bold text-center animate-in fade-in">
              ✓ Custom Database dataset successfully compiled and added to cart!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
