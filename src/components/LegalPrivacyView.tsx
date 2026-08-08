import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Trash2,
  CheckCircle2,
  AlertCircle,
  FileText,
  Mail,
  Phone,
} from 'lucide-react';
import { ActiveTab } from '../types';

interface LegalPrivacyViewProps {
  setActiveTab?: (tab: ActiveTab) => void;
}

export const LegalPrivacyView: React.FC<LegalPrivacyViewProps> = ({ setActiveTab }) => {
  const [removalCompanyName, setRemovalCompanyName] = useState('');
  const [removalEmail, setRemovalEmail] = useState('');
  const [reason, setReason] = useState('Data Takedown Request');
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleRemovalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSubmitted(true);
  };

  return (
    <div className="bg-[#f4f8fe] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Title Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Digital Personal Data Protection (DPDP) Act 2023 Compliant</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Privacy Policy, Terms & Data Removal
          </h1>

          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Our commitment to business privacy, zero unauthorized scraping, explicit opt-in consent, and user data rights.
          </p>
        </div>

        {/* DPDP Act 2023 Core Guarantees Box */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-600" />
            <span>1. Data Collection & Opt-In Policy (DPDP Act 2023)</span>
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              India Business Directory operates exclusively as an opt-in and self-submitted corporate directory. Every company listed on this platform has either been registered directly by an authorized representative or claimed using official corporate domain verification.
            </p>
            <ul className="list-disc pl-5 space-y-2 font-semibold text-slate-800">
              <li><strong className="text-blue-700">No Scraped Personal Mobile Numbers:</strong> We strictly do NOT scrape, harvest, or publish personal mobile numbers or private personal phone contacts. Only official corporate office phone numbers and business emails provided during registration are published.</li>
              <li><strong className="text-blue-700">Self-Submitted Executive Profiles:</strong> CEO and decision-maker profiles featured in our executive directory are published only upon explicit consent provided by the individual profile owner.</li>
              <li><strong className="text-blue-700">Data Correction & Right to Erasure:</strong> Any company or individual has the right to update, correct, or request instant deletion of their profile at any time without fees or penalties.</li>
            </ul>
          </div>
        </div>

        {/* 1-Click Data Removal Request Form */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-red-200 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-wider">
            Data Takedown Form
          </div>

          <div className="space-y-1">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-red-600" />
              <span>Request Profile Removal or Correction</span>
            </h2>
            <p className="text-xs text-slate-600">
              If you wish to remove your business listing or correct official contact details, submit this request. Requests are processed within 24 hours.
            </p>
          </div>

          {requestSubmitted ? (
            <div className="bg-emerald-50 text-emerald-950 p-6 rounded-2xl border border-emerald-200 text-xs font-bold space-y-2">
              <div className="flex items-center gap-2 text-sm text-emerald-800 font-extrabold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Removal Request Submitted Successfully!</span>
              </div>
              <p>
                We have received your request for <span className="underline">{removalCompanyName}</span>. Confirmation will be sent to {removalEmail} within 24 hours upon profile deletion.
              </p>
            </div>
          ) : (
            <form onSubmit={handleRemovalSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company / Individual Name *</label>
                  <input
                    type="text"
                    required
                    value={removalCompanyName}
                    onChange={(e) => setRemovalCompanyName(e.target.value)}
                    placeholder="Enter listed company name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Official Contact Email *</label>
                  <input
                    type="email"
                    required
                    value={removalEmail}
                    onChange={(e) => setRemovalEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Reason for Request</label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                >
                  <option value="Data Takedown Request">Remove entire company listing from directory</option>
                  <option value="Update Phone Number">Update official business phone or email</option>
                  <option value="Remove Executive Profile">Remove decision-maker name from directory</option>
                  <option value="Incorrect Address">Correct company address or GSTIN</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors cursor-pointer shadow-md shadow-red-500/20"
              >
                Submit Immediate Takedown Request
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
