import React from 'react';
import {
  Database,
  ShieldCheck,
  Download,
  Search,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Zap,
  PhoneCall,
  MapPin,
  FileSpreadsheet,
} from 'lucide-react';
import { ActiveTab, CategoryType } from '../types';

interface DatabaseHeroProps {
  setActiveTab: (tab: ActiveTab) => void;
  selectedCategory: CategoryType;
  setSelectedCategory: (cat: CategoryType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const DatabaseHero: React.FC<DatabaseHeroProps> = ({
  setActiveTab,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
}) => {
  const quickTags: { label: string; cat: CategoryType }[] = [
    { label: '🏢 B2B Company CEOs', cat: 'B2B Corporate' },
    { label: '🏡 Real Estate Buyers', cat: 'Real Estate Buyers' },
    { label: '💰 HNI Stock Investors', cat: 'High Net-Worth (HNI)' },
    { label: '🛍️ E-Commerce Buyers', cat: 'E-Commerce Shoppers' },
    { label: '🩺 Doctors & Clinics', cat: 'Doctors & Healthcare' },
    { label: '📍 Mumbai & Delhi Data', cat: 'State & City Wise' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-12 pb-20 border-b border-slate-800">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-emerald-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold border border-amber-500/30 shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>India&apos;s #1 Verified Mobile Database & B2B Lead Store</span>
            <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full">
              2026 UPDATED
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Buy 100% Verified <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
              Mobile Number Databases
            </span>{' '}
            & Lead Lists
          </h1>

          {/* Subtext */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Boost your SMS Marketing, Telecalling & WhatsApp campaigns with high-converting, DLT-verified mobile numbers. Download Excel & CSV data files instantly.
          </p>

          {/* Hero Main Search Bar */}
          <div className="bg-slate-900/90 p-3 rounded-3xl border border-slate-800 shadow-2xl max-w-2xl mx-auto flex flex-col sm:flex-row gap-2">
            <div className="flex-1 relative flex items-center">
              <Search className="w-5 h-5 text-amber-400 absolute left-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search database by City, State, or Category (e.g. Real Estate, Mumbai, B2B)..."
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>
            <button
              onClick={() => setActiveTab('database-store')}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black px-6 py-3.5 rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm shadow-xl shadow-amber-500/20"
            >
              <Database className="w-4 h-4 stroke-[2.5]" />
              <span>Explore Database Catalog</span>
            </button>
          </div>

          {/* Quick Tag Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {quickTags.map((t, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedCategory(t.cat);
                  setActiveTab('database-store');
                }}
                className="bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-amber-500/50 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab('sample-preview')}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-2xl border border-slate-700 transition-all cursor-pointer flex items-center gap-2 text-xs sm:text-sm"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              <span>View Free Sample Lead Table</span>
            </button>

            <button
              onClick={() => setActiveTab('custom-builder')}
              className="bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-bold px-6 py-3.5 rounded-2xl border border-emerald-500/30 transition-all cursor-pointer flex items-center gap-2 text-xs sm:text-sm"
            >
              <Zap className="w-4 h-4" />
              <span>Build Custom State & City Database</span>
            </button>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80 text-left">
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                <Database className="w-4 h-4" />
                <span>Total Mobile Numbers</span>
              </div>
              <p className="text-2xl font-black text-white mt-1">120M+ Records</p>
              <p className="text-[11px] text-slate-400 mt-0.5">All Metros & Tier 1/2 Cities</p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Accuracy Guarantee</span>
              </div>
              <p className="text-2xl font-black text-white mt-1">98% Verified</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Zero Junk & Fresh Active Data</p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs">
                <Download className="w-4 h-4" />
                <span>Instant Delivery</span>
              </div>
              <p className="text-2xl font-black text-white mt-1">Excel & CSV</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Instant Link After Payment</p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>DLT & WhatsApp Ready</span>
              </div>
              <p className="text-2xl font-black text-white mt-1">100% Compliant</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Pre-cleared for Telecalling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
