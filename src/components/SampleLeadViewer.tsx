import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Download,
  CheckCircle2,
  Filter,
  ShieldCheck,
  Search,
  MessageCircle,
  PhoneCall,
  Eye,
  RefreshCw,
} from 'lucide-react';
import { SAMPLE_LEADS } from '../data/databaseData';
import { CategoryType, LeadSampleItem } from '../types';

export const SampleLeadViewer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchCity, setSearchCity] = useState('');
  const [showFullPhoneMap, setShowFullPhoneMap] = useState<Record<string, boolean>>({});

  const togglePhoneDemo = (id: string) => {
    setShowFullPhoneMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredLeads = SAMPLE_LEADS.filter((l) => {
    const matchCat = selectedCategory === 'All' || l.category === selectedCategory;
    const matchCity = !searchCity || l.city.toLowerCase().includes(searchCity.toLowerCase()) || l.state.toLowerCase().includes(searchCity.toLowerCase());
    return matchCat && matchCity;
  });

  const handleDownloadSample = () => {
    window.open('/api/mobile-database/download-sample?category=Live_Preview_Sample', '_blank');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-wrap items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30 mb-3">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Transparent Live Sample Records Inspector</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Live Verified Mobile Database Preview
          </h2>
          <p className="text-slate-300 text-sm mt-1 max-w-2xl">
            Test and inspect fresh lead data samples across top Indian metros, B2B company executives, HNI investors, and property buyers before purchasing.
          </p>
        </div>

        <button
          onClick={handleDownloadSample}
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-5 py-3 rounded-2xl transition-all cursor-pointer flex items-center gap-2 text-xs shadow-lg shadow-emerald-500/20"
        >
          <Download className="w-4 h-4 stroke-[2.5]" />
          <span>Download Free Sample CSV File</span>
        </button>
      </div>

      {/* Table Filters Bar */}
      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-slate-300">Filter Category:</span>
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 cursor-pointer"
          >
            <option value="All">All Categories</option>
            <option value="B2B Corporate">B2B Corporate</option>
            <option value="Real Estate Buyers">Real Estate Buyers</option>
            <option value="Doctors & Healthcare">Doctors & Healthcare</option>
            <option value="High Net-Worth (HNI)">High Net-Worth (HNI)</option>
            <option value="E-Commerce Shoppers">E-Commerce Shoppers</option>
          </select>
        </div>

        <div className="flex items-center gap-2 relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3" />
          <input
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            placeholder="Filter by City or State..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Table View */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] font-mono border-b border-slate-800">
              <tr>
                <th className="p-4">Contact Name</th>
                <th className="p-4">Mobile Number</th>
                <th className="p-4">Location</th>
                <th className="p-4">Designation / Segment</th>
                <th className="p-4 text-center">WhatsApp Active</th>
                <th className="p-4 text-center">DND Tag</th>
                <th className="p-4 text-right">Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filteredLeads.map((lead) => {
                const isRevealed = showFullPhoneMap[lead.id];

                return (
                  <tr key={lead.id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-bold text-white flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 font-black text-xs">
                        {lead.name.charAt(0)}
                      </div>
                      <span>{lead.name}</span>
                    </td>

                    <td className="p-4 font-mono font-bold text-amber-400">
                      <div className="flex items-center gap-2">
                        <span>{isRevealed ? lead.fullPhoneDemo : lead.redactedPhone}</span>
                        <button
                          onClick={() => togglePhoneDemo(lead.id)}
                          title="Click to reveal sample digit"
                          className="text-slate-500 hover:text-white p-1 rounded hover:bg-slate-800 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>

                    <td className="p-4">
                      <p className="text-white font-semibold">{lead.city}</p>
                      <p className="text-[10px] text-slate-400">{lead.state}</p>
                    </td>

                    <td className="p-4 font-mono text-slate-200">{lead.designationOrType}</td>

                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <MessageCircle className="w-3 h-3" /> Active
                      </span>
                    </td>

                    <td className="p-4 text-center">
                      <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded font-mono">
                        {lead.dndStatus}
                      </span>
                    </td>

                    <td className="p-4 text-right font-mono text-[11px] text-emerald-400">
                      <span className="flex items-center justify-end gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> 100% Valid
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
