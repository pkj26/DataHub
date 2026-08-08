import React, { useState } from 'react';
import {
  Check,
  ShieldCheck,
  Sparkles,
  Award,
  Gem,
  CheckCircle2,
  Crown,
  ChevronRight,
  MessageCircle,
  X,
} from 'lucide-react';
import { PRICING_PLANS } from '../data/directoryData';
import { ActiveTab } from '../types';

interface PricingPlansViewProps {
  setActiveTab?: (tab: ActiveTab) => void;
}

export const PricingPlansView: React.FC<PricingPlansViewProps> = ({ setActiveTab }) => {
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
    badge: string;
  } | null>(null);

  const [inquirySuccess, setInquirySuccess] = useState(false);

  // WhatsApp redirection handler
  const handleWhatsAppPurchase = (planName: string, planPrice: string) => {
    const message = `Hello! I want to purchase the *${planName}* (${planPrice}). Please share the payment details and dataset download link.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gradient-to-b from-[#e8f1fa] via-[#f0f6ff] to-white min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Title Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-indigo-500/10 border border-amber-200 text-slate-900 px-4 py-1.5 rounded-full text-xs font-black tracking-wide shadow-xs">
            <Crown className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>India&apos;s Most Premium B2B Data & Intelligence Hub</span>
          </div>

          <h1 className="text-2xl sm:text-5xl font-black text-[#0f172a] tracking-tight leading-tight">
            Premium B2B Packages — <span className="text-[#2563eb]">Silver</span>, <span className="text-amber-600">Gold</span> & <span className="text-indigo-600">Diamond</span>
          </h1>

          <p className="text-xs sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
            Get instant access to 100% DPDP Act 2023 compliant corporate profiles, MCA verified records, GSTIN status, Student datasets, and direct executive contact channels.
          </p>
        </div>

        {/* Pricing Cards Grid - Fixed Mobile & Tablet View */}
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
                {/* Plan Top Badge */}
                {plan.badge && (
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-xs flex items-center gap-1 whitespace-nowrap ${
                      isGold
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black'
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

                {/* WhatsApp Direct Action & Form Buttons */}
                <div className="pt-6 space-y-2">
                  <button
                    onClick={() => handleWhatsAppPurchase(plan.name, plan.price)}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
                    <span>Buy via WhatsApp ({plan.price})</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedPlan({ name: plan.name, price: plan.price, badge: plan.badge });
                      setInquirySuccess(false);
                    }}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Request Sample & Invoice</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Trust & Guarantee Banner */}
        <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 hidden sm:flex">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900">India&apos;s Highest Accuracy Data Guarantee</h4>
              <p className="text-xs text-slate-500">Every record is multi-source verified across MCA, GSTN, and DPDP Act 2023 opt-in logs.</p>
            </div>
          </div>
          <button
            onClick={() => {
              setSelectedPlan({ name: 'Custom Enterprise Suite', price: '₹100,000+', badge: 'Custom' });
              setInquirySuccess(false);
            }}
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-full text-xs font-bold transition-colors shrink-0 cursor-pointer"
          >
            Request Custom Data Extract
          </button>
        </div>

        {/* Selected Plan Modal */}
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

                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 text-left space-y-2">
                    <p className="text-[11px] font-bold text-emerald-900">Instant Purchase on WhatsApp:</p>
                    <button
                      onClick={() => handleWhatsAppPurchase(selectedPlan.name, selectedPlan.price)}
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
                      <span>Buy Now on WhatsApp →</span>
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
                  <h3 className="text-xl font-black text-slate-900">Opening WhatsApp...</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you for selecting <strong className="text-slate-900">{selectedPlan.name}</strong> ({selectedPlan.price}). We are redirecting you to WhatsApp to connect with our executive team.
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
    </div>
  );
};
