import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Building2,
  Filter,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  Code2,
  PlusCircle,
  Eye,
} from 'lucide-react';
import { SAMPLE_COMPANIES, TOP_CITIES, TOP_INDUSTRIES, Company } from '../data/directoryData';
import { CompanyProfileModal } from './CompanyProfileModal';
import { ActiveTab } from '../types';

interface DirectoryViewProps {
  initialCitySlug?: string;
  initialIndustrySlug?: string;
  setActiveTab?: (tab: ActiveTab) => void;
}

export const DirectoryView: React.FC<DirectoryViewProps> = ({
  initialCitySlug = '',
  initialIndustrySlug = '',
  setActiveTab,
}) => {
  const [selectedCity, setSelectedCity] = useState(initialCitySlug);
  const [selectedIndustry, setSelectedIndustry] = useState(initialIndustrySlug);
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyVerified, setOnlyVerified] = useState(false);
  const [activeCompanyProfile, setActiveCompanyProfile] = useState<Company | null>(null);

  // Filter companies based on selections
  const filteredCompanies = SAMPLE_COMPANIES.filter((cmp) => {
    const matchesSearch =
      cmp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmp.services.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCity = selectedCity
      ? cmp.city.toLowerCase().replace(/\s+/g, '-') === selectedCity.toLowerCase() ||
        cmp.city.toLowerCase() === selectedCity.toLowerCase()
      : true;

    const matchesIndustry = selectedIndustry
      ? cmp.industry.toLowerCase().replace(/\s+/g, '-') === selectedIndustry.toLowerCase() ||
        cmp.industry.toLowerCase() === selectedIndustry.toLowerCase()
      : true;

    const matchesVerified = onlyVerified ? cmp.verified : true;

    return matchesSearch && matchesCity && matchesIndustry && matchesVerified;
  });

  return (
    <div className="bg-[#f4f8fe] min-h-screen pb-16">
      
      {/* Directory Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto space-y-3">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <button onClick={() => setActiveTab?.('home')} className="hover:text-blue-600">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-blue-600 font-bold">Business Directory</span>
            {selectedCity && (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-orange-600 capitalize font-bold">{selectedCity.replace(/-/g, ' ')}</span>
              </>
            )}
            {selectedIndustry && (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-indigo-600 capitalize font-bold">{selectedIndustry.replace(/-/g, ' ')}</span>
              </>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {selectedCity && selectedIndustry
                  ? `${selectedIndustry.replace(/-/g, ' ')} Companies in ${selectedCity.replace(/-/g, ' ')}`
                  : selectedCity
                  ? `Verified Companies in ${selectedCity.replace(/-/g, ' ')}`
                  : selectedIndustry
                  ? `${selectedIndustry.replace(/-/g, ' ')} Companies Directory`
                  : 'All Verified Indian Companies Directory'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Browse government registered and self-submitted opt-in enterprise profiles with official corporate contact details.
              </p>
            </div>

            <button
              onClick={() => setActiveTab?.('register')}
              className="bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-md shadow-blue-500/20 flex items-center gap-1.5 shrink-0 self-start md:self-auto cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>List Your Business Free</span>
            </button>
          </div>

        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            
            {/* Search Input */}
            <div className="relative md:col-span-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search company or product..."
                className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* City Dropdown */}
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
              >
                <option value="">All Cities (50+ Cities)</option>
                {TOP_CITIES.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name} ({c.state})
                  </option>
                ))}
              </select>
              <MapPin className="w-4 h-4 text-orange-500 absolute right-3 top-3 pointer-events-none" />
            </div>

            {/* Industry Dropdown */}
            <div className="relative">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
              >
                <option value="">All Industry Sectors</option>
                {TOP_INDUSTRIES.map((ind) => (
                  <option key={ind.slug} value={ind.slug}>
                    {ind.name}
                  </option>
                ))}
              </select>
              <Building2 className="w-4 h-4 text-indigo-500 absolute right-3 top-3 pointer-events-none" />
            </div>

            {/* Verified Badge Checkbox */}
            <div className="flex items-center justify-between bg-slate-50 px-3 py-2 border border-slate-200 rounded-xl">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyVerified}
                  onChange={(e) => setOnlyVerified(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Only</span>
              </label>

              {(selectedCity || selectedIndustry || searchQuery || onlyVerified) && (
                <button
                  onClick={() => {
                    setSelectedCity('');
                    setSelectedIndustry('');
                    setSearchQuery('');
                    setOnlyVerified(false);
                  }}
                  className="text-[11px] text-blue-600 hover:underline font-bold"
                >
                  Clear Filters
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Directory Results Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
            <span>Showing {filteredCompanies.length} Verified Companies</span>
            <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              100% DPDP Act Opt-In Compliant Data
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          {company.industry}
                        </span>
                        {company.verified && (
                          <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-emerald-600" /> Verified
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-black text-slate-900 mt-1">
                        {company.name}
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-orange-500" />
                        <span>{company.city}, {company.state}</span>
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-mono text-slate-400 block">Est. {company.yearEstablished}</span>
                      <span className="text-[10px] font-semibold text-slate-600 block">{company.companySize}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {company.description}
                  </p>

                  <div className="flex items-center gap-2 flex-wrap">
                    {company.services.slice(0, 2).map((s, idx) => (
                      <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        ✓ {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> Official Office Phone
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveCompanyProfile(company)}
                    className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs px-4 py-2 rounded-xl border border-blue-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Profile & Contacts</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">No Companies Found Matching Filters</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Try clearing your search filters or browse by other city / industry combinations.
              </p>
              <button
                onClick={() => {
                  setSelectedCity('');
                  setSelectedIndustry('');
                  setSearchQuery('');
                  setOnlyVerified(false);
                }}
                className="bg-[#2563eb] text-white text-xs font-bold px-4 py-2 rounded-xl"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Detailed Company Profile Modal */}
      {activeCompanyProfile && (
        <CompanyProfileModal
          company={activeCompanyProfile}
          onClose={() => setActiveCompanyProfile(null)}
        />
      )}

    </div>
  );
};
