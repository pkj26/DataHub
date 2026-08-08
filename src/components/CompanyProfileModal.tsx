import React, { useState } from 'react';
import {
  X,
  Building2,
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  Globe,
  Linkedin,
  ShieldCheck,
  Calendar,
  Users,
  Award,
  Code2,
  Share2,
  FileText,
  UserCheck,
} from 'lucide-react';
import { Company } from '../data/directoryData';

interface CompanyProfileModalProps {
  company: Company;
  onClose: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({ company, onClose }) => {
  const [showSchema, setShowSchema] = useState(false);
  const [copied, setCopied] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden my-auto animate-in zoom-in-95">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-blue-800 text-blue-200 text-xs px-3 py-1 rounded-full font-semibold border border-blue-700">
                  {company.industry}
                </span>
                {company.verified && (
                  <span className="bg-emerald-500 text-slate-950 text-xs px-3 py-1 rounded-full font-extrabold flex items-center gap-1 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Profile
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {company.name}
              </h2>
              <p className="text-xs sm:text-sm text-blue-200 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{company.address}</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-2 rounded-xl border border-white/20 flex items-center gap-1.5 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>{copied ? 'Link Copied!' : 'Share Page'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Company Quick Key Info Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <div>
              <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Established</p>
              <p className="text-sm font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                <Calendar className="w-4 h-4 text-blue-600" /> {company.yearEstablished}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Company Size</p>
              <p className="text-sm font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                <Users className="w-4 h-4 text-indigo-600" /> {company.companySize}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Sub-Category</p>
              <p className="text-sm font-bold text-slate-900 mt-0.5 truncate">{company.subCategory}</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">CIN / GSTIN</p>
              <p className="text-xs font-mono font-bold text-slate-800 mt-0.5 truncate">
                {company.gstin || company.cin || 'Verified Registration'}
              </p>
            </div>
          </div>

          {/* Official Business Contact Information (Self-Submitted Only) */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Official Business Contact (Self-Submitted & Consent Granted)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`tel:${company.officialPhone}`}
                className="p-3.5 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex items-center gap-3 hover:bg-blue-100/80 transition-colors cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Official Office Phone</p>
                  <p className="text-xs font-extrabold text-blue-900">{company.officialPhone}</p>
                </div>
              </a>

              <a
                href={`mailto:${company.officialEmail}`}
                className="p-3.5 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex items-center gap-3 hover:bg-blue-100/80 transition-colors cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Official Email</p>
                  <p className="text-xs font-extrabold text-blue-900 truncate">{company.officialEmail}</p>
                </div>
              </a>

              <a
                href={company.website}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex items-center gap-3 hover:bg-blue-100/80 transition-colors cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Official Website</p>
                  <p className="text-xs font-extrabold text-emerald-900">Visit Website →</p>
                </div>
              </a>
            </div>
          </div>

          {/* About Company & Products Description */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">About {company.name}</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              {company.description}
            </p>
          </div>

          {/* Services Offered List */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">Key Products & Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {company.services.map((srv, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-xs font-semibold text-slate-800 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decision-Makers (Opt-In Only) */}
          {company.decisionMakers && company.decisionMakers.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-indigo-600" />
                  <span>Verified Decision-Makers (Opt-in Consent)</span>
                </h3>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  DPDP Compliant
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {company.decisionMakers.map((dm, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-900">{dm.name}</p>
                      <p className="text-xs font-semibold text-indigo-600">{dm.designation}</p>
                      <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3" /> Opt-in verified contact
                      </span>
                    </div>

                    {dm.linkedin && (
                      <a
                        href={dm.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:text-blue-800 p-2 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact / Lead Inquiry Form */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200/80 space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-extrabold text-slate-900">
                Send Direct B2B Inquiry to {company.name}
              </h3>
              <p className="text-xs text-slate-600">
                Inquiries are routed directly to the official corporate email.
              </p>
            </div>

            {inquirySent ? (
              <div className="bg-emerald-50 text-emerald-900 p-4 rounded-xl border border-emerald-200 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Your business inquiry has been sent to {company.name} official corporate team.</span>
              </div>
            ) : (
              <form onSubmit={handleSendInquiry} className="space-y-3">
                <textarea
                  rows={3}
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  placeholder={`Write your business requirement or requirement details for ${company.name}...`}
                  required
                  className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  Send Business Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Schema JSON-LD Toggle for Developer Review */}
          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={() => setShowSchema(!showSchema)}
              className="text-xs font-mono font-bold text-slate-500 hover:text-blue-600 flex items-center gap-1.5 cursor-pointer"
            >
              <Code2 className="w-4 h-4 text-amber-500" />
              <span>{showSchema ? 'Hide LocalBusiness Schema JSON-LD' : 'View LocalBusiness Schema JSON-LD'}</span>
            </button>

            {showSchema && (
              <pre className="mt-3 bg-slate-900 text-emerald-400 p-4 rounded-xl text-[11px] font-mono overflow-x-auto border border-slate-800">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "${company.name}",
  "description": "${company.description.replace(/"/g, '\\"')}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "${company.address}",
    "addressLocality": "${company.city}",
    "addressRegion": "${company.state}",
    "addressCountry": "IN"
  },
  "telephone": "${company.officialPhone}",
  "email": "${company.officialEmail}",
  "url": "${company.website}"
}`}
              </pre>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
