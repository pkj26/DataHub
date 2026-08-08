import React, { useState } from 'react';
import {
  Briefcase,
  Building2,
  Layers,
  ChevronRight,
  ShieldCheck,
  Users,
  CheckCircle2,
  Database,
  Search,
} from 'lucide-react';
import { ActiveTab } from '../types';

interface CategoriesOverviewSectionProps {
  setActiveTab?: (tab: ActiveTab) => void;
}

export const CategoriesOverviewSection: React.FC<CategoriesOverviewSectionProps> = ({ setActiveTab }) => {
  const [activeTab, setActiveTabSection] = useState<'professional' | 'companies' | 'categories'>('professional');

  const professionalList = [
    { name: 'C-Level > (CEO, CFO, COO...)', count: '2.5M Leads', category: 'Executive' },
    { name: 'IT Dept. > (CTO, IT Heads, IT Director...)', count: '1.8M Leads', category: 'Technology' },
    { name: 'Finance Decision-Makers', count: '1.2M Leads', category: 'Finance' },
    { name: 'Marketing > (Marketing Director, Manager...)', count: '1.5M Leads', category: 'Marketing' },
    { name: 'HR > (CHRO, HR Director, HR Head...)', count: '1.4M Leads', category: 'Human Resources' },
    { name: 'Operations > (Operations Director, Purchase...)', count: '1.6M Leads', category: 'Operations' },
    { name: 'Sales > (VP of Sales, Sales Director...)', count: '2.1M Leads', category: 'Sales & Growth' },
  ];

  const companiesList = [
    'Technology Companies',
    'Software Companies',
    'Manufacturing Companies',
    'B2B Companies',
    'SMB/SME Companies',
    'IT Companies',
    'Corporate Companies',
    'Recruitment/HR Companies',
    'Healthcare Companies',
    'Finance Companies',
    'Retail Companies',
    'Real Estate Agencies',
    'Interior Design Agencies',
    'FMCG Companies',
    'E-Commerce Companies',
  ];

  const categories12List = [
    'HNI & Ultra HNI',
    'Doctors Leads/Database',
    'Business Owners',
    'Interior Designers',
    'Salaried Database',
    'Mobile Database',
    'Car Owners Database',
    'IT Employees Database',
    'WhatsApp Number Database',
    'Working Women Database',
    'Online Shoppers',
    'Parents Database',
  ];

  return (
    <section className="bg-gradient-to-b from-[#fffdfa] via-[#f8fafc] to-[#f1f5f9] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header & Screenshot 1 Summary Text */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-100/80 border border-orange-200 text-[#d96b27] px-4 py-1.5 rounded-full text-xs font-bold shadow-xs">
            <Database className="w-4 h-4 text-[#e06522]" />
            <span>Multi-Source Verified B2B & Decision-Maker Directories</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Access the Key Players: Company Decision-Makers Database
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get Decision-Makers Data in India with unbeatable prices and accuracy. Our comprehensive database includes accurate information on companies, corporates, SMEs, SMBs, and key executive contacts across India.
          </p>
        </div>

        {/* Tab Navigation Pill Bar matching screenshot headers */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveTabSection('professional')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 border ${
              activeTab === 'professional'
                ? 'bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Briefcase className="w-4 h-4 text-orange-400" />
            <span>Professional Database</span>
          </button>

          <button
            onClick={() => setActiveTabSection('companies')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 border ${
              activeTab === 'companies'
                ? 'bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Building2 className="w-4 h-4 text-blue-400" />
            <span>Companies Database</span>
          </button>

          <button
            onClick={() => setActiveTabSection('categories')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 border ${
              activeTab === 'categories'
                ? 'bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Categories (12+)</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl max-w-5xl mx-auto transition-all">
          
          {/* 1. Professional Database Tab View */}
          {activeTab === 'professional' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                    <span>Professional Database & Executive Decision Makers</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Verified C-Level executives, department heads, and purchasing directors with mobile & official email tags.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab && setActiveTab('directors')}
                  className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Executive Suite</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {professionalList.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab && setActiveTab('directors')}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-orange-50/60 border border-slate-200/80 hover:border-orange-300 transition-all text-left flex items-center justify-between group cursor-pointer"
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-[#e06522] transition-colors flex items-center gap-1.5">
                        <span>{item.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      </h4>
                      <p className="text-[11px] font-semibold text-slate-500">{item.category} • DPDP Opt-In Verified</p>
                    </div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-100/80 px-2.5 py-1 rounded-full shrink-0 group-hover:bg-orange-100 group-hover:text-orange-800">
                      {item.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 2. Companies Database Tab View */}
          {activeTab === 'companies' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                    <span>Companies Database (Top 15 Sectors)</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    MCA & GSTIN cross-verified corporate database lists with turnover range, city, and active GST tags.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab && setActiveTab('companies')}
                  className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Search 50,000+ Companies</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {companiesList.map((comp, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab && setActiveTab('companies')}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/80 border border-slate-200/80 hover:border-blue-300 transition-all text-left flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-blue-700">{comp}</span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 3. Categories (12+) Tab View */}
          {activeTab === 'categories' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                    <span>Specialized B2B & B2C Categories (12+)</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Targeted database segmentations ranging from HNIs, Doctor lists, Salaried employees to WhatsApp active records.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab && setActiveTab('companies')}
                  className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View All Datasets</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {categories12List.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab && setActiveTab('companies')}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50/80 border border-slate-200/80 hover:border-emerald-300 transition-all text-left flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-800">{cat}</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                      Active 2026
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Descriptive Paragraphs matching Screenshot 1 */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <h4 className="text-sm font-black text-slate-900">Decision-Makers Data India: Best Quality & Accuracy</h4>
              <p>
                Are you looking for the best decision-makers data provider in India? Look no further! Our comprehensive database includes accurate and reliable information on companies, corporate, SMEs, SMBs and industries across India. We pride ourselves on quality and accuracy.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-black text-slate-900">Get Affordable B2B Data Solutions</h4>
              <p>
                Customized data solutions designed to fit your marketing and sales requirements. Work with our team to create custom extractions matching your target region, industry, and contact designations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
