import React, { useState } from 'react';
import {
  ChevronRight,
  Crown,
  Sparkles,
  Award,
  Gem,
  Check,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  X,
  MessageCircle,
} from 'lucide-react';
import { PRICING_PLANS } from '../data/directoryData';
import { ActiveTab } from '../types';

interface EndCtaAndPackagesProps {
  setActiveTab?: (tab: ActiveTab) => void;
}

export const EndCtaAndPackages: React.FC<EndCtaAndPackagesProps> = ({ setActiveTab }) => {
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
    badge: string;
  } | null>(null);

  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [modalType, setModalType] = useState<'demo' | 'sales'>('demo');

  // WhatsApp redirection handler
  const handleWhatsAppPurchase = (planName: string, planPrice: string) => {
    const message = `Hello! I want to purchase the *${planName}* (${planPrice}). Please share the payment details and dataset download link.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full space-y-0 overflow-hidden">
      
      {/* 1. "Let's get you started / Elevate Your Experience" Banner */}
      <section className="relative bg-gradient-to-r from-[#fff5ee] via-[#fff9f4] to-[#fff3e9] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-orange-100">
        
        {/* Background Decorative Wavy Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden">
          <svg
            className="absolute left-[-20%] sm:left-[-10%] top-1/2 -translate-y-1/2 h-[140%] w-[70%] sm:w-[50%] text-orange-200/80 stroke-current"
            viewBox="0 0 400 400"
            fill="none"
          >
            <path d="M-100,200 C50,50 150,350 300,200 C380,100 450,250 500,200" strokeWidth="1.5" />
            <path d="M-100,220 C50,70 150,370 300,220 C380,120 450,270 500,220" strokeWidth="1.5" />
            <path d="M-100,240 C50,90 150,390 300,240 C380,140 450,290 500,240" strokeWidth="1.5" />
          </svg>

          <svg
            className="absolute right-[-20%] sm:right-[-10%] top-1/2 -translate-y-1/2 h-[140%] w-[70%] sm:w-[55%] text-orange-200/80 stroke-current"
            viewBox="0 0 400 400"
            fill="none"
          >
            <path d="M0,200 C150,50 250,350 400,200 C480,100 550,250 600,200" strokeWidth="1.5" />
            <path d="M0,220 C150,70 250,370 400,220 C480,120 450,270 600,220" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Banner Content Container */}
        <div className="relative max-w-4xl mx-auto text-center space-y-5 z-10">
          
          <p className="text-base sm:text-xl font-bold text-[#e06522] tracking-wide">
            Let&apos;s get you started
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-tight">
            Elevate Your Customer Experience
          </h2>

          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Upgrade to our verified B2B Intelligence & Contact Data hub for seamless communication and enhanced sales productivity across 50,000+ Indian companies.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md sm:max-w-none mx-auto">
            
            <button
              onClick={() => {
                setModalType('demo');
                setShowDemoModal(true);
                setDemoSuccess(false);
              }}
              className="w-full sm:w-auto bg-[#e06522] hover:bg-[#c85517] text-white font-bold text-sm sm:text-base px-7 py-3 rounded-xl transition-all shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Book A Demo</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => {
                setModalType('sales');
                setShowDemoModal(true);
                setDemoSuccess(false);
              }}
              className="w-full sm:w-auto border-2 border-[#e06522] text-[#e06522] hover:bg-orange-50 font-bold text-sm sm:text-base px-7 py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Contact Sales</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </button>

          </div>

        </div>
      </section>

      {/* 2. Packages Section - Fixed Mobile & Tablet View (Silver ₹25k, Gold ₹50k, Diamond ₹100k) */}
      <section className="bg-gradient-to-b from-[#f0f6ff] via-white to-[#f8fafc] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-black tracking-wide">
              <Crown className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>India&apos;s Premium Data Packages</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Choose Your Growth Package
            </h2>

            <p className="text-xs sm:text-base text-slate-600 max-w-xl mx-auto">
              Verified corporate datasets, C-Level contacts, MCA & GSTIN records, plus Student datasets for outreach.
            </p>
          </div>

          {/* Pricing Cards Grid - Responsive Breakpoints: 1 col on mobile, 2 cols on tablet (md), 3 cols on desktop (lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
            {PRICING_PLANS.map((plan) => {
              const isGold = plan.id === 'gold';
              const isDiamond = plan.id === 'diamond';
              const isSilver = plan.id === 'silver';

              return (
                <div
                  key={plan.id}
                  className={`rounded-3xl p-5 sm:p-7 lg:p-8 border transition-all duration-300 flex flex-col justify-between relative bg-white/95 backdrop-blur-md ${
                    isGold
                      ? 'border-amber-400 shadow-xl ring-2 ring-amber-400/20 lg:scale-105 z-10'
                      : isDiamond
                      ? 'border-indigo-400 shadow-md ring-1 ring-indigo-400/20'
                      : 'border-slate-200 shadow-md hover:border-slate-300'
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <span
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-xs flex items-center gap-1 whitespace-nowrap ${
                        isGold
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950'
                          : isDiamond
                          ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
                          : 'bg-slate-800 text-slate-100'
                      }`}
                    >
                      {isGold && <Crown className="w-3.5 h-3.5 text-slate-950 fill-slate-950" />}
                      {isDiamond && <Gem className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />}
                      <span>{plan.badge}</span>
                    </span>
                  )}

                  <div className="space-y-5 pt-2">
                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                        {isSilver && <Award className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500 shrink-0" />}
                        {isGold && <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 fill-amber-400 shrink-0" />}
                        {isDiamond && <Gem className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 shrink-0" />}
                        <span>{plan.name}</span>
                      </h3>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">{plan.description}</p>
                    </div>

                    {/* Price display */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{plan.price}</span>
                        <span className="text-xs text-slate-500 font-bold">{plan.period}</span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] font-bold text-emerald-600 mt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>100% Tax Deductible Business Expense</span>
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-1">
                      <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Package Deliverables
                      </p>
                      <ul className="space-y-2">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isGold ? 'text-amber-600' : isDiamond ? 'text-indigo-600' : 'text-blue-600'}`} />
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* WhatsApp Purchase & Direct Buttons */}
                  <div className="pt-6 space-y-2">
                    
                    {/* Primary WhatsApp Direct Purchase Button */}
                    <button
                      onClick={() => handleWhatsAppPurchase(plan.name, plan.price)}
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
                      <span>Buy via WhatsApp ({plan.price})</span>
                    </button>

                    {/* Secondary Form Modal Button */}
                    <button
                      onClick={() => {
                        setSelectedPlan({ name: plan.name, price: plan.price, badge: plan.badge });
                        setInquirySuccess(false);
                      }}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Request Sample Data & Invoice</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                  </div>

                </div>
              );
            })}
          </div>

          {/* Guarantee Footer Strip */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 hidden sm:block" />
              <p className="text-xs text-slate-600 font-medium">
                All datasets are 100% compliant with <strong className="text-slate-900">DPDP Act 2023</strong> & verified via MCA & GSTN portals.
              </p>
            </div>
            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('pricing');
              }}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 shrink-0 cursor-pointer flex items-center gap-1"
            >
              <span>View Full Pricing Specs</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Demo / Sales Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 border border-slate-200 text-center relative shadow-2xl">
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full p-1.5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!demoSuccess ? (
              <>
                <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-200 text-[#e06522] flex items-center justify-center mx-auto">
                  <PhoneCall className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-slate-900">
                    {modalType === 'demo' ? 'Schedule a Product Demo' : 'Contact Corporate Sales'}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {modalType === 'demo'
                      ? 'Watch a live walkthrough of our 50,000+ verified corporate database and executive contacts.'
                      : 'Talk to our senior B2B data strategist about custom database extractions and enterprise API plans.'}
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setDemoSuccess(true);
                  }}
                  className="space-y-3 text-left pt-2"
                >
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Verma"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#e06522]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Corporate Email</label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#e06522]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#e06522]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#e06522] hover:bg-[#c85517] text-white font-bold text-xs py-3.5 rounded-xl transition-all cursor-pointer shadow-md shadow-orange-500/20"
                  >
                    {modalType === 'demo' ? 'Confirm Demo Schedule →' : 'Request Sales Callback →'}
                  </button>
                </form>
              </>
            ) : (
              <div className="space-y-4 py-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Request Confirmed!</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you! Our executive team will reach out to your phone and email within 15 minutes to confirm details.
                </p>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="w-full bg-slate-900 text-white font-bold text-xs py-3 rounded-xl cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Package Subscription Modal with direct WhatsApp button */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 border border-slate-200 text-center relative shadow-2xl">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full p-1.5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!inquirySuccess ? (
              <>
                <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
                  <Crown className="w-6 h-6 fill-amber-400" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-0.5 rounded-full">
                    {selectedPlan.badge}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">Subscribe to {selectedPlan.name}</h3>
                  <p className="text-xl font-extrabold text-blue-600">{selectedPlan.price} <span className="text-xs font-medium text-slate-500">/ year</span></p>
                </div>

                {/* Direct WhatsApp Purchase Box */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 text-left space-y-2">
                  <p className="text-[11px] font-bold text-emerald-900">Instant Order via WhatsApp:</p>
                  <button
                    onClick={() => {
                      handleWhatsAppPurchase(selectedPlan.name, selectedPlan.price);
                    }}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
                    <span>Purchase Now on WhatsApp →</span>
                  </button>
                </div>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <span className="flex-shrink mx-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">or submit callback form</span>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setInquirySuccess(true);
                    handleWhatsAppPurchase(selectedPlan.name, selectedPlan.price);
                  }}
                  className="space-y-2.5 text-left"
                >
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Enterprises Pvt Ltd"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Corporate Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Contact Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-xs py-3 rounded-xl transition-all cursor-pointer shadow-md shadow-blue-500/20"
                  >
                    Confirm & Redirect to WhatsApp →
                  </button>
                </form>
              </>
            ) : (
              <div className="space-y-4 py-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Redirecting to WhatsApp!</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you for selecting the <strong className="text-slate-900">{selectedPlan.name}</strong> ({selectedPlan.price}). We are opening WhatsApp so you can instantly message our data strategist.
                </p>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="w-full bg-slate-900 text-white font-bold text-xs py-3 rounded-xl cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
