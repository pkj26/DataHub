import React, { useState } from 'react';
import {
  UserCheck,
  ShieldCheck,
  Search,
  MapPin,
  Briefcase,
  Linkedin,
  Mail,
  Lock,
  CheckCircle2,
  Building2,
  ChevronRight,
  PlusCircle,
} from 'lucide-react';
import { DECISION_MAKERS, DecisionMaker } from '../data/directoryData';
import { ActiveTab } from '../types';

interface DirectorsDirectoryProps {
  setActiveTab?: (tab: ActiveTab) => void;
}

export const DirectorsDirectory: React.FC<DirectorsDirectoryProps> = ({ setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [contactRequested, setContactRequested] = useState<string | null>(null);

  const filteredDirectors = DECISION_MAKERS.filter((dm) => {
    const matchesSearch =
      dm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dm.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dm.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dm.city.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesIndustry = selectedIndustry
      ? dm.industry.toLowerCase() === selectedIndustry.toLowerCase()
      : true;

    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="bg-[#f4f8fe] min-h-screen pb-16">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold border border-emerald-500/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>DPDP Act 2023 Opt-In Compliance — No Scraped Personal Numbers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            CEO & Decision-Makers Directory India
          </h1>

          <p className="text-sm sm:text-base text-blue-200 max-w-3xl leading-relaxed">
            Connect with verified CEOs, Managing Directors, Founders, and C-level decision-makers across India. 100% opt-in professional networking directory. Personal phone numbers are never published without consent.
          </p>

        </div>
      </div>

      {/* Filter & Listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search decision-maker name, designation (CEO, Director), or company..."
              className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={() => setActiveTab?.('register')}
            className="bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Submit Your Executive Profile</span>
          </button>
        </div>

        {/* Directors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDirectors.map((dm) => (
            <div
              key={dm.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                      {dm.industry}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                      {dm.name}
                    </h3>
                    <p className="text-xs font-bold text-blue-600">
                      {dm.designation}
                    </p>
                  </div>

                  <a
                    href={dm.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-slate-900 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>{dm.companyName}</span>
                  </p>
                  <p className="text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-orange-500" />
                    <span>{dm.city}, {dm.state}</span>
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {dm.profileSummary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Opt-in Consent Verified
                </span>

                {contactRequested === dm.id ? (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                    Request Sent!
                  </span>
                ) : (
                  <button
                    onClick={() => setContactRequested(dm.id)}
                    className="text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-xl border border-blue-200 transition-colors cursor-pointer"
                  >
                    Request Official Introduction
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
