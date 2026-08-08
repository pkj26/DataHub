import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Award,
  Lock,
  ChevronDown,
  Code2,
  PlusCircle,
  ExternalLink,
  MessageCircle,
  FileText,
  Users,
  Target,
  Magnet,
  BarChart3,
  UserCheck,
  Share2,
  SearchCheck,
  ShieldAlert,
  X,
  Bot,
  Zap,
  GraduationCap,
} from 'lucide-react';
import { ActiveTab } from '../types';
import { TOP_CITIES, TOP_INDUSTRIES, DIRECTORY_FAQS, SAMPLE_COMPANIES } from '../data/directoryData';
import { EndCtaAndPackages } from './EndCtaAndPackages';
import { CategoriesOverviewSection } from './CategoriesOverviewSection';

interface HeroProps {
  setActiveTab?: (tab: ActiveTab) => void;
  onSelectCity?: (citySlug: string) => void;
  onSelectIndustry?: (industrySlug: string) => void;
  onSelectCompany?: (companyId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  setActiveTab,
  onSelectCity,
  onSelectIndustry,
  onSelectCompany,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showSchemaModal, setShowSchemaModal] = useState(false);
  const [chatWidgetOpen, setChatWidgetOpen] = useState(true);

  // Active state for top 4 circular app buttons
  const [activeCircle, setActiveCircle] = useState<'share' | 'ai' | 'intelligence' | 'zap'>('intelligence');
  
  // Active modal data state when clicking any feature or app button
  const [featureModal, setFeatureModal] = useState<{
    title: string;
    subtitle: string;
    badge: string;
    items: { title: string; category: string; location: string; metric: string }[];
  } | null>(null);

  // Filtered preview search results
  const filteredCompanies = SAMPLE_COMPANIES.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Data map for 8 Feature Tiles
  const featureDataMap: Record<string, { title: string; subtitle: string; badge: string; items: { title: string; category: string; location: string; metric: string }[] }> = {
    Data: {
      title: "Verified Master Company Data",
      subtitle: "Official MCA registered entities with GSTIN, CIN, and verified addresses across 50+ cities.",
      badge: "50,000+ Records",
      items: [
        { title: "Rajputana Textiles Pvt Ltd", category: "Textiles & Garments", location: "Jaipur, Rajasthan", metric: "GSTIN Verified • MCA Registered" },
        { title: "TechCorp India Solutions", category: "Information Technology", location: "Bengaluru, Karnataka", metric: "CIN Verified • 250+ Employees" },
        { title: "Apex Logistics & Supply Chain", category: "Logistics", location: "Mumbai, Maharashtra", metric: "ISO 9001 Certified • Active Listing" },
      ]
    },
    Prospects: {
      title: "C-Suite & Key Decision Makers",
      subtitle: "Direct corporate emails and executive director profiles verified through DPDP Act 2023 opt-in.",
      badge: "12,500+ Directors",
      items: [
        { title: "Vikramaditya Sharma", category: "Managing Director", location: "Jaipur, Rajasthan", metric: "Direct Corporate Email • DIN Verified" },
        { title: "Priya Sundaram", category: "Chief Technology Officer", location: "Bengaluru, Karnataka", metric: "Phone Verified • Opt-In Consent" },
        { title: "Rajesh K. Mehta", category: "Head of Procurement", location: "Mumbai, Maharashtra", metric: "LinkedIn Verified • Corporate Email" },
      ]
    },
    Leads: {
      title: "High-Intent B2B Sales Leads",
      subtitle: "Curated prospective buyers searching for suppliers, OEM partners, and industrial services.",
      badge: "8,900+ Active Inquiries",
      items: [
        { title: "Bulk Textile Printing Request", category: "Textiles", location: "Surat & Jaipur", metric: "High Purchase Intent • Verified Buyer" },
        { title: "Cloud Infrastructure Modernization", category: "IT Services", location: "Pune & Hyderabad", metric: "Budget ₹25L+ • Urgent Requirement" },
        { title: "Industrial Chemical Procurement", category: "Chemicals", location: "Ahmedabad, Gujarat", metric: "Verified RFP • Direct Buyer" },
      ]
    },
    Sales: {
      title: "B2B Sales Intelligence & Revenue Data",
      subtitle: "Turnover insights, industry benchmark metrics, and decision-maker contact details.",
      badge: "Real-Time Signals",
      items: [
        { title: "Enterprise Revenue Insights", category: "Financial Tiering", location: "All Indian Metros", metric: "Categorized by Turnovers ₹5Cr to ₹500Cr+" },
        { title: "B2B Buyer Intent Mapping", category: "Predictive AI", location: "Pan India", metric: "98.2% Contact Accuracy Rate" },
      ]
    },
    HR: {
      title: "Verified Corporate HR & Talent Contacts",
      subtitle: "Reach Chief Human Resources Officers, Talent Acquisition Leads, and Corporate Trainers.",
      badge: "4,200+ HR Executives",
      items: [
        { title: "Ananya Deshmukh", category: "VP Human Resources", location: "Mumbai, Maharashtra", metric: "Corporate Email Verified" },
        { title: "Suresh Pillai", category: "Talent Acquisition Head", location: "Chennai, Tamil Nadu", metric: "Opt-In Verified Contact" },
      ]
    },
    Students: {
      title: "Verified Student & Education Database",
      subtitle: "Verified contact datasets of university students, NEET/JEE aspirants, study abroad candidates, and coaching students.",
      badge: "150,000+ Students",
      items: [
        { title: "IIT/NIT & Engineering Aspirants List", category: "Education DB", location: "Pan India", metric: "Verified Mobile & Parents Phone" },
        { title: "Study Abroad & IELTS Candidates", category: "Higher Education", location: "Delhi, Punjab, Gujarat & Metros", metric: "Active Higher Studies Intent" },
        { title: "Management & MBA Entrance Applicants", category: "Post-Graduate", location: "Top 20 Metros", metric: "Direct Opt-In Verified" },
      ]
    },
    Aggregated: {
      title: "Multi-Source Aggregated Directory Data",
      subtitle: "Consolidated business records merged from MCA, GSTN, MSME Udyam, and official corporate sites.",
      badge: "15+ Data Sources",
      items: [
        { title: "MSME Udyam Registry Cross-Match", category: "Government DB", location: "Pan India", metric: "100% Legitimacy Verified" },
        { title: "GSTIN Status Real-Time Check", category: "Tax Database", location: "Pan India", metric: "Active GST Compliance Verified" },
      ]
    },
    Campaign: {
      title: "Targeted Outreach & Email Campaign Data",
      subtitle: "Opt-in B2B mailing lists and corporate phone directories compliant with DPDP Act 2023.",
      badge: "DPDP 2023 Compliant",
      items: [
        { title: "Jaipur Handloom Exporters Segment", category: "Campaign Audience", location: "Jaipur, Rajasthan", metric: "850 Verified Corporate Emails" },
        { title: "SaaS & Software Founders List", category: "Campaign Audience", location: "Bengaluru & NCR", metric: "1,200 Verified Founders" },
      ]
    },
    Verified: {
      title: "100% Opt-In & Badge Verified Businesses",
      subtitle: "Businesses that completed two-step OTP verification and submitted official authorization letters.",
      badge: "Verified Badge",
      items: [
        { title: "PinkCity Handicrafts Pvt Ltd", category: "Handicrafts & Decor", location: "Jaipur, Rajasthan", metric: "Shield Verification Badge Granted" },
        { title: "ProTech Cloud Networks", category: "IT Infrastructure", location: "Noida, UP", metric: "Shield Verification Badge Granted" },
      ]
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#e3edf9] via-[#eaf3fc] to-[#f4f8fe] text-slate-800 font-sans min-h-screen relative overflow-x-hidden">
      
      {/* Exact Hero Section matching the Screenshot */}
      <section className="pt-8 sm:pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading, Subheading & Requirement CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
              <span className="text-[#1e293b] block">We Fulfill the</span>
              <span className="text-[#2563eb]">Communication, </span>
              <span className="text-[#d96b27]">AI & Data </span>
              <span className="text-[#9a3412] block mt-1">Needs of Modern Businesses.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl">
              From enterprise <strong className="text-slate-900 font-extrabold">Email</strong> and <strong className="text-slate-900 font-extrabold">Contact Centers</strong> to <strong className="text-slate-900 font-extrabold">Conversational AI</strong> and{' '}
              <span className="text-[#d96b27] font-extrabold border-b-2 border-[#d96b27] inline-block">
                Enriched Business Intelligence
              </span>
              , DataHub delivers it all, natively integrated.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  if (setActiveTab) setActiveTab('companies');
                }}
                className="bg-[#f0f6ff] hover:bg-blue-100/80 text-[#2563eb] border border-[#2563eb]/40 font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Discuss your requirement</span>
                <ChevronRight className="w-4 h-4 text-[#2563eb]" />
              </button>
            </div>

            {/* Embedded Search Bar for Quick Business Discovery */}
            <div className="pt-4 max-w-xl relative">
              <div className="bg-white p-2 rounded-2xl shadow-md border border-blue-200/80 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-600 ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 50,000+ companies, Jaipur, Mumbai, IT, Manufacturing..."
                  className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none px-2 py-1.5"
                />
                <button
                  onClick={() => {
                    if (setActiveTab) setActiveTab('companies');
                  }}
                  className="bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shrink-0 cursor-pointer shadow-xs"
                >
                  Search Directory
                </button>
              </div>

              {/* Instant Search Dropdown */}
              {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl z-30 p-3 text-left max-h-80 overflow-y-auto">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
                    Matching Companies ({filteredCompanies.length})
                  </p>
                  {filteredCompanies.length > 0 ? (
                    filteredCompanies.map((cmp) => (
                      <button
                        key={cmp.id}
                        onClick={() => {
                          if (onSelectCompany) onSelectCompany(cmp.id);
                          if (setActiveTab) setActiveTab('companies');
                        }}
                        className="w-full text-left p-2.5 hover:bg-blue-50 rounded-xl transition-colors flex items-center justify-between cursor-pointer group"
                      >
                        <div>
                          <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-1">
                            {cmp.name}
                            {cmp.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 inline" />}
                          </p>
                          <p className="text-[11px] text-slate-500">
                            {cmp.industry} • {cmp.city}, {cmp.state}
                          </p>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                      </button>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500 p-3">No matching companies found. Try searching by city like Jaipur or Mumbai.</p>
                  )}
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Floating App Circles & Deep Enrich Card Container */}
          <div className="lg:col-span-5 relative space-y-4">
            
            {/* Top Row of 4 Floating Circular App Icons */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                onClick={() => {
                  setActiveCircle('share');
                  setFeatureModal({
                    title: "Omnichannel Data & Network Sharing",
                    subtitle: "Connect across 15+ verified Indian B2B data channels and export enrichment records.",
                    badge: "50,000+ Profiles",
                    items: [
                      { title: "Rajasthan Industrial Network", category: "Handicrafts & Textiles", location: "Jaipur, Rajasthan", metric: "3,200 Shared Contacts" },
                      { title: "Maharashtra Manufacturing Hub", category: "Heavy Engineering", location: "Pune & Mumbai", metric: "5,800 Verified Buyers" },
                      { title: "Karnataka Tech & Innovation Directory", category: "IT & Software", location: "Bengaluru, Karnataka", metric: "4,100 Key Executives" }
                    ]
                  });
                }}
                className={`w-12 h-12 rounded-full bg-white border shadow-md flex items-center justify-center text-blue-600 hover:scale-110 transition-all cursor-pointer ${
                  activeCircle === 'share' ? 'ring-4 ring-blue-400 border-blue-500 scale-105' : 'border-blue-100'
                }`}
                title="Omnichannel Data & Network Sharing"
              >
                <Share2 className="w-6 h-6 stroke-[2]" />
              </button>

              <button
                onClick={() => {
                  setActiveCircle('ai');
                  setFeatureModal({
                    title: "AI Executive Prospecting Engine",
                    subtitle: "Autonomous decision-maker matching across Indian corporate sectors using AI sentiment & intent signals.",
                    badge: "12,500+ Directors",
                    items: [
                      { title: "AI Executive Match Score: 99.4%", category: "Managing Directors", location: "Pan India", metric: "Instant DIN & MCA Verification" },
                      { title: "Predictive B2B Buyer Intent", category: "Procurement Heads", location: "Top 10 Indian Metros", metric: "Verified Phone & Corporate Email" }
                    ]
                  });
                }}
                className={`w-12 h-12 rounded-full bg-white border shadow-md flex items-center justify-center text-orange-500 hover:scale-110 transition-all cursor-pointer ${
                  activeCircle === 'ai' ? 'ring-4 ring-orange-400 border-orange-500 scale-105' : 'border-orange-100'
                }`}
                title="AI Executive Match Engine"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-orange-500 to-blue-600 p-0.5 flex items-center justify-center text-white text-[10px] font-bold">
                  ⚡
                </div>
              </button>

              <button
                onClick={() => {
                  setActiveCircle('intelligence');
                  setFeatureModal({
                    title: "Business Intelligence & MCA Registry",
                    subtitle: "Enrich corporate profiles with GSTIN, CIN, revenue brackets, and technology stack insights.",
                    badge: "15+ Databases",
                    items: [
                      { title: "MCA Govt CIN Registry Verification", category: "Corporate Governance", location: "Ministry of Corporate Affairs", metric: "100% Verified Records" },
                      { title: "GSTIN Active Status & Tax Compliance", category: "Financial Compliance", location: "GST Portal Integration", metric: "Real-Time Health Checks" }
                    ]
                  });
                }}
                className={`w-12 h-12 rounded-full bg-white border shadow-md flex items-center justify-center text-amber-500 hover:scale-110 transition-all cursor-pointer ${
                  activeCircle === 'intelligence' ? 'ring-4 ring-amber-400 border-amber-500 scale-105' : 'border-amber-100'
                }`}
                title="Smart Business Intelligence"
              >
                <Sparkles className="w-6 h-6 fill-amber-400 text-amber-500" />
              </button>

              <button
                onClick={() => {
                  setActiveCircle('zap');
                  setFeatureModal({
                    title: "Instant Lead Campaigns & Outreach",
                    subtitle: "Trigger direct SMS/Email OTP verified communication with DPDP Act 2023 compliance.",
                    badge: "DPDP 2023 Verified",
                    items: [
                      { title: "High-Response Campaign Delivery", category: "Corporate Outreach", location: "50+ Indian Cities", metric: "99.1% Delivery Rate" },
                      { title: "Opt-In Consent Record Logging", category: "Data Privacy", location: "DPDP Compliance Engine", metric: "100% Consent Logged" }
                    ]
                  });
                }}
                className={`w-12 h-12 rounded-full bg-slate-900 text-white shadow-md flex items-center justify-center hover:scale-110 transition-all cursor-pointer ${
                  activeCircle === 'zap' ? 'ring-4 ring-slate-900 border-slate-700 scale-105' : ''
                }`}
                title="Instant Campaign Automation"
              >
                <Zap className="w-6 h-6 text-orange-400 fill-orange-400" />
              </button>
            </div>

            {/* Business Intelligence Card Box */}
            <div className="bg-[#edf4fc]/80 backdrop-blur-md rounded-3xl p-6 border border-white/80 shadow-lg space-y-5">
              
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-[#1e293b]">
                    {activeCircle === 'share' && "Network Data Sharing"}
                    {activeCircle === 'ai' && "AI Prospect Match"}
                    {activeCircle === 'intelligence' && "Business Intelligence"}
                    {activeCircle === 'zap' && "Instant Campaigns"}
                  </h3>
                  <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Click Any Tile
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Quality contact details through 15+ verified databases. Click icons below for detailed data:
                </p>
              </div>

              {/* Grid of Feature Tiles matching screenshot */}
              <div className="space-y-3">
                
                {/* Row 1: 5 Icons */}
                <div className="grid grid-cols-5 gap-2">
                  <button
                    onClick={() => setFeatureModal(featureDataMap.Data)}
                    className="bg-white p-2.5 rounded-2xl border border-slate-100 text-center space-y-1 shadow-xs hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer group"
                  >
                    <div className="w-7 h-7 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <FileText className="w-4 h-4" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-700 group-hover:text-blue-700">Data</p>
                  </button>

                  <button
                    onClick={() => setFeatureModal(featureDataMap.Prospects)}
                    className="bg-white p-2.5 rounded-2xl border border-slate-100 text-center space-y-1 shadow-xs hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer group"
                  >
                    <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Users className="w-4 h-4" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-700 group-hover:text-blue-700">Prospects</p>
                  </button>

                  <button
                    onClick={() => setFeatureModal(featureDataMap.Leads)}
                    className="bg-white p-2.5 rounded-2xl border border-slate-100 text-center space-y-1 shadow-xs hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer group"
                  >
                    <div className="w-7 h-7 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Magnet className="w-4 h-4" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-700 group-hover:text-blue-700">Leads</p>
                  </button>

                  <button
                    onClick={() => setFeatureModal(featureDataMap.Sales)}
                    className="bg-white p-2.5 rounded-2xl border border-slate-100 text-center space-y-1 shadow-xs hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer group"
                  >
                    <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-700 group-hover:text-blue-700">Sales</p>
                  </button>

                  <button
                    onClick={() => setFeatureModal(featureDataMap.HR)}
                    className="bg-white p-2.5 rounded-2xl border border-slate-100 text-center space-y-1 shadow-xs hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer group"
                  >
                    <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-700 group-hover:text-blue-700">HR</p>
                  </button>
                </div>

                {/* Row 2: 4 Icons */}
                <div className="grid grid-cols-4 gap-2">
                  <button
                    onClick={() => setFeatureModal(featureDataMap.Aggregated)}
                    className="bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-100 text-center space-y-1 shadow-xs hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer group"
                  >
                    <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-700 group-hover:text-blue-700">Aggregated</p>
                  </button>

                  <button
                    onClick={() => setFeatureModal(featureDataMap.Students)}
                    className="bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-100 text-center space-y-1 shadow-xs hover:border-purple-400 hover:bg-purple-50/50 transition-all cursor-pointer group"
                  >
                    <div className="w-7 h-7 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-700 group-hover:text-purple-700">Students</p>
                  </button>

                  <button
                    onClick={() => setFeatureModal(featureDataMap.Campaign)}
                    className="bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-100 text-center space-y-1 shadow-xs hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer group"
                  >
                    <div className="w-7 h-7 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <SearchCheck className="w-4 h-4" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-700 group-hover:text-blue-700">Campaign</p>
                  </button>

                  <button
                    onClick={() => setFeatureModal(featureDataMap.Verified)}
                    className="bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-100 text-center space-y-1 shadow-xs hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer group"
                  >
                    <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-700 group-hover:text-blue-700">Verified</p>
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Banner matching Screenshot */}
        <div className="pt-16 text-center space-y-2">
          <p className="text-sm font-bold text-[#2563eb]">Trusted by Over</p>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            50,000 Companies of all Sizes
          </h2>
        </div>
      </section>

      {/* Interactive Feature Data Modal */}
      {featureModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 relative animate-in zoom-in-95">
            <button
              onClick={() => setFeatureModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full p-1.5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 pr-6">
              <div className="inline-block bg-blue-50 text-blue-700 text-[11px] font-extrabold px-3 py-1 rounded-full border border-blue-200">
                {featureModal.badge}
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">{featureModal.title}</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">{featureModal.subtitle}</p>
            </div>

            {/* List of Verified Items */}
            <div className="space-y-2 pt-2 max-h-60 overflow-y-auto">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Sample Live Records</p>
              {featureModal.items.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{item.title}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 inline" />
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.category} • {item.location}</p>
                  </div>
                  <span className="text-[10px] font-extrabold text-blue-700 bg-blue-100/80 px-2 py-1 rounded-lg shrink-0">
                    {item.metric}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                onClick={() => setFeatureModal(null)}
                className="w-1/2 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setFeatureModal(null);
                  if (setActiveTab) setActiveTab('companies');
                }}
                className="w-1/2 py-2.5 rounded-xl bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-1"
              >
                <span>View All Companies</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Floating Chat Support Widget matching screenshot */}
      {chatWidgetOpen && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in slide-in-from-bottom-5">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xl relative space-y-2">
            <button
              onClick={() => setChatWidgetOpen(false)}
              className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-xs text-slate-700 leading-relaxed font-medium pr-4">
              Welcome to our site, if you need help simply reply to this message, we are online and ready to help.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Online Support</span>
            </div>
          </div>
        </div>
      )}

      {/* Categorized Databases Overview Section matching Screenshots */}
      <CategoriesOverviewSection setActiveTab={setActiveTab} />

      {/* Search by City Grid Section */}
      <section className="py-12 bg-white/80 border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Geographic Network</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Search Companies by City
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Explore local business directories across top Indian commercial hubs and industrial SEZ zones.
              </p>
            </div>
            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('city-directory');
              }}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>View All 50+ Cities</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {TOP_CITIES.slice(0, 12).map((city) => (
              <button
                key={city.slug}
                onClick={() => {
                  if (onSelectCity) onSelectCity(city.slug);
                  if (setActiveTab) setActiveTab('city-directory');
                }}
                className="bg-white hover:bg-blue-50/80 border border-slate-200/80 hover:border-blue-300 p-4 rounded-2xl text-left transition-all hover:shadow-md cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200/60">
                    {city.state}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {city.companyCount.toLocaleString()}+ Listed
                  </span>
                </div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-blue-700 flex items-center justify-between">
                  <span>{city.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {city.popularIndustries.join(', ')}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search by Industry Grid Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                <Building2 className="w-4 h-4 text-indigo-500" />
                <span>Sector Categorization</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Search Companies by Industry
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Filter verified manufacturers, IT exporters, pharma labs, and B2B service providers.
              </p>
            </div>
            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('industry-directory');
              }}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>View All 30+ Industry Sectors</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {TOP_INDUSTRIES.map((ind) => (
              <button
                key={ind.slug}
                onClick={() => {
                  if (onSelectIndustry) onSelectIndustry(ind.slug);
                  if (setActiveTab) setActiveTab('industry-directory');
                }}
                className="bg-white hover:bg-blue-50/80 border border-slate-200/80 hover:border-blue-300 p-4 rounded-2xl text-left transition-all hover:shadow-md cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                    {ind.name.charAt(0)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {ind.companyCount.toLocaleString()}+ Units
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-blue-700">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {ind.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Got Questions About Directory Listing?
            </h2>
            <p className="text-slate-600 text-sm">
              Clear answers regarding privacy, data verification, DPDP Act 2023 compliance, and listing costs.
            </p>
          </div>

          <div className="space-y-3">
            {DIRECTORY_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-5 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-blue-50/50"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* End of Page CTA Banner & Premium Packages (Silver ₹25k, Gold ₹50k, Diamond ₹100k) */}
      <EndCtaAndPackages setActiveTab={setActiveTab} />

    </div>
  );
};

