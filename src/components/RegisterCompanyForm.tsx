import React, { useState } from 'react';
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  PlusCircle,
  Phone,
  Mail,
  MapPin,
  FileText,
  Lock,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import { ActiveTab } from '../types';
import { TOP_CITIES, TOP_INDUSTRIES } from '../data/directoryData';

interface RegisterCompanyFormProps {
  setActiveTab?: (tab: ActiveTab) => void;
}

export const RegisterCompanyForm: React.FC<RegisterCompanyFormProps> = ({ setActiveTab }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [officialPhone, setOfficialPhone] = useState('');
  const [officialEmail, setOfficialEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [cinGstin, setCinGstin] = useState('');
  const [description, setDescription] = useState('');
  const [otp, setOtp] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentGiven) {
      alert('Please check the DPDP consent box to proceed.');
      return;
    }
    setStep(2);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f4f8fe] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Title Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 px-3.5 py-1.5 rounded-full text-xs font-bold border border-blue-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Free Business Registration</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Register Your Company on India Business Directory
          </h1>

          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Get your company listed in 50+ city directories and 30+ industry sectors. Expand your B2B lead discovery across India.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="grid grid-cols-3 gap-2 bg-white p-3 rounded-2xl border border-slate-200 text-center text-xs font-bold">
          <div className={`p-2 rounded-xl ${step >= 1 ? 'bg-blue-50 text-blue-700' : 'text-slate-400'}`}>
            1. Company Info
          </div>
          <div className={`p-2 rounded-xl ${step >= 2 ? 'bg-blue-50 text-blue-700' : 'text-slate-400'}`}>
            2. OTP Verification
          </div>
          <div className={`p-2 rounded-xl ${step === 3 ? 'bg-emerald-50 text-emerald-700' : 'text-slate-400'}`}>
            3. Listing Live
          </div>
        </div>

        {/* Step 1: Form Details */}
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl space-y-5">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              Official Company Profile Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Company Registered Name *</label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Acme Textiles Pvt Ltd"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Primary Industry Sector *</label>
                <select
                  required
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value="">Select Industry Sector</option>
                  {TOP_INDUSTRIES.map((ind) => (
                    <option key={ind.slug} value={ind.name}>{ind.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">City *</label>
                <select
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value="">Select City</option>
                  {TOP_CITIES.map((c) => (
                    <option key={c.slug} value={c.name}>{c.name} ({c.state})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">State *</label>
                <input
                  type="text"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="e.g. Rajasthan, Maharashtra"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Official Office Phone * (SMS OTP)</label>
                <input
                  type="tel"
                  required
                  value={officialPhone}
                  onChange={(e) => setOfficialPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Official Corporate Email *</label>
                <input
                  type="email"
                  required
                  value={officialEmail}
                  onChange={(e) => setOfficialEmail(e.target.value)}
                  placeholder="contact@company.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Company Website URL</label>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://www.company.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">GSTIN or CIN Number (Optional)</label>
                <input
                  type="text"
                  value={cinGstin}
                  onChange={(e) => setCinGstin(e.target.value)}
                  placeholder="08AABCA1234F1Z9"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Business Description & Services offered (200+ words recommended for SEO)</label>
              <textarea
                rows={4}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your company background, main products/services, target industries, and export experience..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Legal DPDP Consent Box */}
            <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200 text-xs text-emerald-950 space-y-2">
              <label className="flex items-start gap-2 cursor-pointer font-bold">
                <input
                  type="checkbox"
                  required
                  checked={consentGiven}
                  onChange={(e) => setConsentGiven(e.target.checked)}
                  className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>
                  I confirm that I am an authorized representative of {companyName || 'this company'} and consent to listing our official corporate business phone and email in compliance with DPDP Act 2023.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-sm py-3.5 rounded-2xl transition-all shadow-md shadow-blue-500/20 cursor-pointer"
            >
              Send Verification OTP to {officialPhone || 'Phone'} →
            </button>
          </form>
        )}

        {/* Step 2: OTP Verification */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-5 text-center max-w-md mx-auto">
            <Lock className="w-12 h-12 text-blue-600 mx-auto" />
            <h2 className="text-xl font-bold text-slate-900">Verify Official Mobile OTP</h2>
            <p className="text-xs text-slate-600">
              Enter the 6-digit verification OTP sent to <span className="font-bold">{officialPhone}</span>.
            </p>

            <input
              type="text"
              maxLength={6}
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="1 2 3 4 5 6"
              className="w-full text-center bg-slate-50 border border-slate-300 rounded-xl py-3 text-lg font-mono font-bold tracking-widest focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 rounded-xl shadow-md cursor-pointer"
            >
              Verify OTP & Publish Profile
            </button>
          </form>
        )}

        {/* Step 3: Success Screen */}
        {step === 3 && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center space-y-4 max-w-md mx-auto">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
            <h2 className="text-2xl font-black text-slate-900">Registration Complete!</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your company profile for <span className="font-bold text-slate-900">{companyName}</span> is now verified and scheduled to go live on city & industry directories within 24 hours.
            </p>

            <button
              onClick={() => setActiveTab?.('companies')}
              className="bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl cursor-pointer"
            >
              Browse All Directory Companies
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
