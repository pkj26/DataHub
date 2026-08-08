import React from 'react';
import {
  Building2,
  ShieldCheck,
  MapPin,
  Briefcase,
  Code2,
  PlusCircle,
  FileText,
  Lock,
} from 'lucide-react';
import { TOP_CITIES, TOP_INDUSTRIES } from '../data/directoryData';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab?: (tab: ActiveTab) => void;
  onSelectCity?: (citySlug: string) => void;
  onSelectIndustry?: (industrySlug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onSelectCity,
  onSelectIndustry,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800 text-xs pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                India Business <span className="text-blue-400">Directory</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-[11px]">
              India&apos;s opt-in verified B2B company directory connecting businesses, manufacturers, IT exporters, and decision-makers across Indian commercial hubs.
            </p>

            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5" /> DPDP Act 2023 Compliant
            </div>
          </div>

          {/* Top City Directories */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-orange-400" /> City Directories
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              {TOP_CITIES.slice(0, 7).map((city) => (
                <li key={city.slug}>
                  <button
                    onClick={() => {
                      if (onSelectCity) onSelectCity(city.slug);
                      if (setActiveTab) setActiveTab('city-directory');
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Companies in {city.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Industry Directories */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" /> Industries
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              {TOP_INDUSTRIES.slice(0, 7).map((ind) => (
                <li key={ind.slug}>
                  <button
                    onClick={() => {
                      if (onSelectIndustry) onSelectIndustry(ind.slug);
                      if (setActiveTab) setActiveTab('industry-directory');
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {ind.name} Directory
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Legal & SEO Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" /> Legal & Compliance
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              <li>
                <button onClick={() => setActiveTab?.('privacy')} className="hover:text-white cursor-pointer">
                  Privacy Policy (DPDP Act)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab?.('privacy')} className="hover:text-white cursor-pointer text-red-400">
                  Data Removal Request
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab?.('claim')} className="hover:text-white cursor-pointer">
                  Claim Business Listing
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab?.('pricing')} className="hover:text-white cursor-pointer">
                  Verified Badge Plans
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab?.('blog')} className="hover:text-white cursor-pointer">
                  SEO Content Hub & Blogs
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© 2026 India Business Directory. All company data is self-submitted / opt-in under DPDP Act 2023.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => setActiveTab?.('privacy')} className="hover:text-slate-300">Privacy</button>
            <button onClick={() => setActiveTab?.('privacy')} className="hover:text-slate-300">Terms</button>
            <button onClick={() => setActiveTab?.('register')} className="hover:text-slate-300 text-blue-400 font-bold">List Your Company</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
