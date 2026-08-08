import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  ShoppingCart,
  ShieldCheck,
  Zap,
  PhoneCall,
  Download,
  Database,
} from 'lucide-react';
import { MobileDatabasePackage } from '../types';

interface PricingPackagesProps {
  onBuyNow: (pkg: MobileDatabasePackage) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onBuyNow }) => {
  const megaPackages: MobileDatabasePackage[] = [
    {
      id: 'pkg-bundle-starter-50k',
      title: 'City Telecalling Starter Pack',
      category: 'State & City Wise',
      state: 'Single Metro Choice',
      city: 'Mumbai / Delhi / Bengaluru / Pune',
      leadCount: 50000,
      accuracy: 98,
      price: 999,
      originalPrice: 2999,
      description: 'Ideal for small sales teams, local real estate agents, or regional campaign testing.',
      fieldsIncluded: ['Mobile Number', 'Contact Name', 'City', 'WhatsApp Tag'],
    },
    {
      id: 'pkg-bundle-pro-500k',
      title: 'State B2B & HNI Business Bundle',
      category: 'B2B Corporate',
      state: 'Multi-State Region',
      city: 'Top 10 Metros',
      leadCount: 500000,
      accuracy: 98,
      price: 1999,
      originalPrice: 5999,
      isPopular: true,
      description: 'Best seller for corporate sales, insurance brokers, and high-volume SMS/WhatsApp marketing.',
      fieldsIncluded: ['Mobile Number', 'Contact Name', 'Designation', 'Company/Segment', 'City', 'WhatsApp Verified', 'DND Tag'],
    },
    {
      id: 'pkg-bundle-enterprise-50m',
      title: 'All-India 50 Million Mega Master Database',
      category: 'All',
      state: 'Pan-India 28 States',
      city: 'All 500+ Indian Cities',
      leadCount: 50000000,
      accuracy: 99,
      price: 4999,
      originalPrice: 14999,
      description: 'Complete Master All-India database file across all verticals (HNI, B2B, E-Commerce, Doctors, Real Estate).',
      fieldsIncluded: ['All Columns Included', 'Excel + CSV Files', 'Lifetime Monthly Updates', 'Dedicated Account Manager'],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold border border-amber-500/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Mega Discount Bundles</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Select Your Verified Database Plan
        </h2>
        <p className="text-slate-300 text-sm">
          Instant automatic download link generated right after checkout. Lifetime data access with zero renewal fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {megaPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-slate-900 border rounded-3xl p-8 flex flex-col justify-between space-y-6 relative shadow-2xl transition-all hover:scale-[1.02] ${
              pkg.isPopular ? 'border-amber-500 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950' : 'border-slate-800'
            }`}
          >
            {pkg.isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                ★ Most Popular Plan
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-extrabold text-white">{pkg.title}</h3>
                <p className="text-xs text-slate-400 mt-2">{pkg.description}</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <p className="text-slate-400 text-xs">Total Lead Volume:</p>
                <p className="text-3xl font-black text-emerald-400 font-mono">
                  {pkg.leadCount.toLocaleString()} Leads
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">₹{pkg.price.toLocaleString()}</span>
                <span className="text-xs text-slate-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                <span className="text-xs text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded">
                  One-Time Pay
                </span>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                {pkg.fieldsIncluded.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onBuyNow(pkg)}
              className={`w-full py-4 rounded-2xl font-black text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xl ${
                pkg.isPopular
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:from-amber-600 hover:to-orange-600 shadow-amber-500/25'
                  : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
              }`}
            >
              <ShoppingCart className="w-4 h-4 stroke-[2.5]" />
              <span>Buy & Download Plan</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
