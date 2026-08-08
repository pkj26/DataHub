import React, { useState } from 'react';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  Building2,
  Lock,
  ArrowRight,
} from 'lucide-react';
import { ActiveTab } from '../types';
import { SAMPLE_COMPANIES } from '../data/directoryData';

interface ClaimListingFormProps {
  setActiveTab?: (tab: ActiveTab) => void;
}

export const ClaimListingForm: React.FC<ClaimListingFormProps> = ({ setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [workEmail, setWorkEmail] = useState('');
  const [claimed, setClaimed] = useState(false);

  const results = SAMPLE_COMPANIES.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClaimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClaimed(true);
  };

  return (
    <div className="bg-[#f4f8fe] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold border border-amber-200">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Public MCA Registry Claim</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Claim Your Business Listing
          </h1>

          <p className="text-sm text-slate-600">
            Search for your existing auto-indexed business profile and verify ownership via corporate domain email OTP to gain full editing control and add verified badges.
          </p>
        </div>

        {!claimed ? (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            
            {/* Search Box */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">Find Your Company Name in Directory</label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type official company name (e.g. Ananta Textile, Nexwave Labs)..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-3 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Results selector */}
            {searchQuery && (
              <div className="space-y-2 border border-slate-200 rounded-2xl p-3 bg-slate-50 max-h-60 overflow-y-auto">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Select Your Company Listing:</p>
                {results.map((cmp) => (
                  <button
                    key={cmp.id}
                    onClick={() => setSelectedCompany(cmp.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-colors ${
                      selectedCompany === cmp.id
                        ? 'bg-blue-100/80 border-blue-500 font-bold text-blue-900'
                        : 'bg-white border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div>
                      <p className="font-bold text-slate-900">{cmp.name}</p>
                      <p className="text-[11px] text-slate-500">{cmp.city}, {cmp.state} • {cmp.industry}</p>
                    </div>
                    {selectedCompany === cmp.id && (
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Claim Verification Form */}
            {selectedCompany && (
              <form onSubmit={handleClaimSubmit} className="space-y-4 pt-4 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Enter Official Corporate Work Email</label>
                  <input
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="e.g. director@companydomain.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <p className="text-[10px] text-slate-500 mt-1">
                    An OTP ownership verification link will be emailed to this corporate email address.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-xs py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Send Claim Verification Link →
                </button>
              </form>
            )}

          </div>
        ) : (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
            <h2 className="text-2xl font-black text-slate-900">Claim Link Sent!</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We have dispatched an ownership verification email to <span className="font-bold">{workEmail}</span>. Please click the link inside to manage your profile.
            </p>
            <button
              onClick={() => setActiveTab?.('companies')}
              className="bg-[#2563eb] text-white font-bold text-xs px-6 py-2.5 rounded-xl cursor-pointer"
            >
              Back to Directory
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
