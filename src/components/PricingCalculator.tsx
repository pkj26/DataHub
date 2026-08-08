import React, { useState } from 'react';
import {
  Calculator,
  Zap,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  DollarSign,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const PricingCalculator: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [smsVolume, setSmsVolume] = useState<number>(50000);
  const [voiceMins, setVoiceMins] = useState<number>(10000);
  const [whatsappChats, setWhatsappChats] = useState<number>(5000);
  const [aiSeats, setAiSeats] = useState<number>(2);

  const rateMultiplier = currency === 'INR' ? 83 : 1;
  const currencySymbol = currency === 'INR' ? '₹' : '$';

  // Cost calculation formulas
  const smsRate = 0.0025 * rateMultiplier; // per SMS
  const voiceRate = 0.015 * rateMultiplier; // per min
  const whatsappRate = 0.008 * rateMultiplier; // per chat
  const aiSeatRate = 149 * rateMultiplier; // per AI agent seat / month

  const smsCost = smsVolume * smsRate;
  const voiceCost = voiceMins * voiceRate;
  const whatsappCost = whatsappChats * whatsappRate;
  const aiCost = aiSeats * aiSeatRate;

  const totalMonthlyCost = Math.round(smsCost + voiceCost + whatsappCost + aiCost);
  const traditionalCost = Math.round(totalMonthlyCost * 2.4);
  const savings = traditionalCost - totalMonthlyCost;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-bold border border-amber-500/30 mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Transparent Enterprise Volume Pricing</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Interactive Sarv CPaaS Cost & ROI Estimator
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Pay only for what you send and dial. No hidden setup fees or rigid legacy contracts.
            </p>
          </div>

          <div className="flex items-center bg-slate-950 p-1 rounded-2xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                currency === 'USD' ? 'bg-amber-500 text-slate-950 font-black shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                currency === 'INR' ? 'bg-amber-500 text-slate-950 font-black shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sliders Form (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-8">
          {/* Slider 1: Bulk SMS */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-bold">
              <span className="text-white">1. Monthly Bulk SMS / RCS Volume</span>
              <span className="text-emerald-400 font-mono text-base">{smsVolume.toLocaleString()} SMS</span>
            </div>
            <input
              type="range"
              min="5000"
              max="1000000"
              step="5000"
              value={smsVolume}
              onChange={(e) => setSmsVolume(parseInt(e.target.value))}
              className="w-full accent-amber-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>5,000 SMS</span>
              <span>1,000,000+ SMS</span>
            </div>
          </div>

          {/* Slider 2: Voice Mins */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-bold">
              <span className="text-white">2. DeepCall Voice Call Minutes</span>
              <span className="text-blue-400 font-mono text-base">{voiceMins.toLocaleString()} Mins</span>
            </div>
            <input
              type="range"
              min="1000"
              max="200000"
              step="1000"
              value={voiceMins}
              onChange={(e) => setVoiceMins(parseInt(e.target.value))}
              className="w-full accent-amber-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>1,000 Mins</span>
              <span>200,000+ Mins</span>
            </div>
          </div>

          {/* Slider 3: WhatsApp Chats */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-bold">
              <span className="text-white">3. WhatsApp Business Conversations</span>
              <span className="text-green-400 font-mono text-base">{whatsappChats.toLocaleString()} Chats</span>
            </div>
            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={whatsappChats}
              onChange={(e) => setWhatsappChats(parseInt(e.target.value))}
              className="w-full accent-amber-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>500 Chats</span>
              <span>100,000+ Chats</span>
            </div>
          </div>

          {/* Slider 4: AI Voice Agent Seats */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-bold">
              <span className="text-white">4. Active CX-AI Virtual Voice Agent Seats</span>
              <span className="text-orange-400 font-mono text-base">{aiSeats} AI Agents</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={aiSeats}
              onChange={(e) => setAiSeats(parseInt(e.target.value))}
              className="w-full accent-amber-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>1 Agent</span>
              <span>20+ AI Agents</span>
            </div>
          </div>
        </div>

        {/* Total Cost Output Card (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated Monthly Investment</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl sm:text-5xl font-black text-white">
                {currencySymbol}
                {totalMonthlyCost.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 font-semibold">/ month</span>
            </div>
          </div>

          {/* Detailed Itemized Breakdown */}
          <div className="space-y-2.5 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span>Bulk SMS ({smsVolume.toLocaleString()})</span>
              <span className="text-white font-bold">{currencySymbol}{Math.round(smsCost)}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>DeepCall Voice ({voiceMins.toLocaleString()} mins)</span>
              <span className="text-white font-bold">{currencySymbol}{Math.round(voiceCost)}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>WhatsApp API ({whatsappChats.toLocaleString()} chats)</span>
              <span className="text-white font-bold">{currencySymbol}{Math.round(whatsappCost)}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>CX-AI Virtual Agents ({aiSeats} seats)</span>
              <span className="text-white font-bold">{currencySymbol}{Math.round(aiCost)}</span>
            </div>
          </div>

          {/* Savings Box */}
          <div className="bg-emerald-950/60 p-4 rounded-2xl border border-emerald-500/30 space-y-1 text-xs">
            <p className="text-emerald-400 font-bold flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>Est. Savings vs Legacy Telecom: {currencySymbol}{savings.toLocaleString()} / mo</span>
            </p>
            <p className="text-slate-300 text-[11px]">
              Sarv CPaaS saves up to 58% on infrastructure overhead with direct operator interconnects.
            </p>
          </div>

          <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black py-4 rounded-2xl shadow-xl shadow-amber-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 text-base">
            <span>Get Custom Contract & Scale Discount</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
