import React, { useState } from 'react';
import {
  Database,
  CheckCircle2,
  Download,
  ShoppingCart,
  ShieldCheck,
  Tag,
  Sparkles,
  Search,
  Filter,
  FileSpreadsheet,
  PhoneCall,
  Check,
} from 'lucide-react';
import { DATABASE_CATEGORIES, MOBILE_PACKAGES } from '../data/databaseData';
import { CategoryType, MobileDatabasePackage } from '../types';

interface DatabaseCatalogProps {
  selectedCategory: CategoryType;
  setSelectedCategory: (cat: CategoryType) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onAddToCart: (pkg: MobileDatabasePackage) => void;
  onBuyNow: (pkg: MobileDatabasePackage) => void;
}

export const DatabaseCatalog: React.FC<DatabaseCatalogProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  onAddToCart,
  onBuyNow,
}) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const filteredPackages = MOBILE_PACKAGES.filter((pkg) => {
    const matchesCategory = selectedCategory === 'All' || pkg.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      pkg.title.toLowerCase().includes(q) ||
      pkg.city.toLowerCase().includes(q) ||
      pkg.state.toLowerCase().includes(q) ||
      pkg.category.toLowerCase().includes(q) ||
      pkg.description.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  const handleDownloadSampleCsv = (pkg: MobileDatabasePackage) => {
    setDownloadingId(pkg.id);
    const downloadUrl = `/api/mobile-database/download-sample?category=${encodeURIComponent(pkg.category)}`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `Sarv_Sample_${pkg.id}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadingId(null);
    }, 1200);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-bold border border-amber-500/30 mb-2">
            <Database className="w-3.5 h-3.5" />
            <span>Verified Lead Files Marketplace</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Mobile Number Database Catalog
          </h2>
          <p className="text-slate-300 text-sm mt-1">
            Browse verified B2B & B2C datasets categorized by industry, buyer income class, and city.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-mono">
            Showing <strong className="text-white">{filteredPackages.length}</strong> Packages
          </span>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {DATABASE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 border ${
              selectedCategory === cat.id
                ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-lg shadow-amber-500/20 font-black'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
            }`}
          >
            <span>{cat.label}</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                selectedCategory === cat.id ? 'bg-slate-950 text-amber-400' : 'bg-slate-950 text-slate-400'
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Packages Grid */}
      {filteredPackages.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-4 max-w-md mx-auto">
          <Database className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-lg font-bold text-white">No Database Matches Found</h3>
          <p className="text-xs text-slate-400">
            We couldn&apos;t find any package for &quot;{searchQuery}&quot;. Try clearing filters or request a custom database extraction.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs cursor-pointer"
          >
            Clear Search Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => {
            const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

            return (
              <div
                key={pkg.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-amber-500/50 transition-all shadow-xl flex flex-col justify-between space-y-6 relative group"
              >
                {/* Top Badge Overlay */}
                {pkg.isPopular && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-slate-950 fill-current" />
                    <span>Best Seller</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="bg-slate-950 text-amber-400 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border border-slate-800">
                      {pkg.category}
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> {pkg.accuracy}% Accuracy
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-white leading-snug group-hover:text-amber-400 transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2">{pkg.description}</p>
                  </div>

                  {/* Coverage Location */}
                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-xs space-y-1">
                    <p className="text-slate-400 flex items-center justify-between">
                      <span>Coverage Region:</span>
                      <strong className="text-white">{pkg.state}</strong>
                    </p>
                    <p className="text-slate-400 flex items-center justify-between">
                      <span>Total Verified Numbers:</span>
                      <strong className="text-emerald-400 font-mono text-sm">{pkg.leadCount.toLocaleString()} Leads</strong>
                    </p>
                  </div>

                  {/* Fields Included Checkmarks */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Included Data Columns:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.fieldsIncluded.map((f, i) => (
                        <span
                          key={i}
                          className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded-md font-mono"
                        >
                          ✓ {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price & Action Buttons */}
                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-black text-white">₹{pkg.price.toLocaleString()}</span>
                        <span className="text-xs text-slate-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                        <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-1.5 py-0.5 rounded">
                          {discount}% OFF
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">One-time payment • Lifetime dataset access</p>
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleDownloadSampleCsv(pkg)}
                      disabled={downloadingId === pkg.id}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 text-xs border border-slate-700"
                    >
                      <Download className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{downloadingId === pkg.id ? 'Downloading...' : 'Sample CSV'}</span>
                    </button>

                    <button
                      onClick={() => onBuyNow(pkg)}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 text-xs shadow-lg shadow-amber-500/20"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Buy Dataset</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
