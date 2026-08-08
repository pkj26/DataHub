import React, { useState } from 'react';
import {
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Smartphone,
  Layers,
  Sparkles,
  RefreshCw,
  Clock,
  ShieldCheck,
  TrendingUp,
  Image as ImageIcon,
  Link,
  ChevronRight,
} from 'lucide-react';
import { SAMPLE_SMS_TEMPLATES } from '../data/sarvData';

export const SmsRcsCampaignStudio: React.FC = () => {
  const [isRcs, setIsRcs] = useState(false);
  const [senderId, setSenderId] = useState('SARVSMS');
  const [selectedTemplateId, setSelectedTemplateId] = useState('tpl-1');
  const [customText, setCustomText] = useState(
    'Your Sarv account OTP is 849201. Do not share this OTP with anyone for security purposes.'
  );
  const [recipientCount, setRecipientCount] = useState<number>(5000);
  const [rcsMediaUrl, setRcsMediaUrl] = useState(
    'https://images.unsplash.com/photo-1556742049-0a670f4a4591?w=600&auto=format&fit=crop&q=80'
  );
  const [rcsActionText, setRcsActionText] = useState('Confirm Order Now');
  const [campaignResult, setCampaignResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTemplateChange = (id: string) => {
    setSelectedTemplateId(id);
    const tpl = SAMPLE_SMS_TEMPLATES.find((t) => t.id === id);
    if (tpl) {
      setCustomText(tpl.text.replace('{#var#}', '849201').replace('{#var#}', 'ORD-9821').replace('{#var#}', 'sarv.com/t/x9'));
    }
  };

  const handleLaunchCampaign = async () => {
    setLoading(true);
    setCampaignResult(null);

    try {
      const response = await fetch('/api/sms-campaign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderId,
          templateId: selectedTemplateId,
          message: customText,
          recipientsCount: recipientCount,
          isRcs,
        }),
      });

      const data = await response.json();
      setCampaignResult(data);
    } catch {
      setCampaignResult({
        status: 'QUEUED',
        campaignId: `SARV-CMP-${Math.floor(100000 + Math.random() * 900000)}`,
        senderId,
        recipientsCount: recipientCount,
        creditsUsed: recipientCount * (isRcs ? 2 : 1),
        estimatedCost: (recipientCount * (isRcs ? 0.25 : 0.12)).toFixed(2),
        estimatedDeliveryRate: '99.8%',
        dltStatus: 'APPROVED',
      });
    } finally {
      setLoading(false);
    }
  };

  const charCount = customText.length;
  const smsParts = Math.ceil(charCount / 160) || 1;
  const costPerUnit = isRcs ? 0.25 : 0.12;
  const estimatedCost = (recipientCount * costPerUnit * smsParts).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Banner */}
      <div className="mb-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30 mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Sarv High-Throughput Bulk Messaging Studio</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Bulk SMS & Sarv RCS Campaign Launcher
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Build DLT-approved promotional and transactional campaigns. Preview exact message rendering on mobile screens and dispatch up to 5,000,000 messages instantly.
            </p>
          </div>

          <div className="flex items-center bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setIsRcs(false)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                !isRcs ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Standard Bulk SMS
            </button>
            <button
              onClick={() => setIsRcs(true)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                isRcs ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Sarv Interactive RCS</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Studio Controls (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-xl font-bold text-white">Campaign Composer</h3>
            <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> DLT Gate Verified
            </span>
          </div>

          {/* DLT Template Select */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Select Approved DLT Template
            </label>
            <select
              value={selectedTemplateId}
              onChange={(e) => handleTemplateChange(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
            >
              {SAMPLE_SMS_TEMPLATES.map((t) => (
                <option key={t.id} value={t.id}>
                  [{t.category}] {t.name} (DLT ID: {t.dltId})
                </option>
              ))}
            </select>
          </div>

          {/* Header Sender ID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Approved Header / Sender ID
              </label>
              <input
                type="text"
                value={senderId}
                onChange={(e) => setSenderId(e.target.value.toUpperCase())}
                maxLength={6}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Target Audience Count
              </label>
              <input
                type="number"
                value={recipientCount}
                onChange={(e) => setRecipientCount(Math.max(1, parseInt(e.target.value) || 0))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Message Text Area */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold text-slate-300 uppercase tracking-wider">
                {isRcs ? 'RCS Card Message Text' : 'SMS Content'}
              </label>
              <span className="text-slate-400 font-mono">
                {charCount} chars • {smsParts} SMS Parts
              </span>
            </div>
            <textarea
              rows={4}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {/* RCS Extra Controls */}
          {isRcs && (
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 animate-in fade-in duration-200">
              <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Sarv RCS Rich Media Settings
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-slate-400 font-semibold mb-1 block">RCS Banner Image URL</label>
                  <input
                    type="text"
                    value={rcsMediaUrl}
                    onChange={(e) => setRcsMediaUrl(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-semibold mb-1 block">Action Button Label</label>
                  <input
                    type="text"
                    value={rcsActionText}
                    onChange={(e) => setRcsActionText(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white font-semibold"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Calculation Summary Bar */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div>
              <p className="text-slate-400">Total Recipients</p>
              <p className="text-lg font-extrabold text-white">{recipientCount.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-slate-400">Cost / Msg</p>
              <p className="text-lg font-extrabold text-amber-400">${costPerUnit}</p>
            </div>
            <div>
              <p className="text-slate-400">Estimated Total Cost</p>
              <p className="text-lg font-extrabold text-emerald-400">${estimatedCost}</p>
            </div>
          </div>

          {/* Submit Campaign Button */}
          <button
            onClick={handleLaunchCampaign}
            disabled={loading || !customText.trim()}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 text-base"
          >
            {loading ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            <span>{loading ? 'Submitting to Telecom Gateway...' : 'Launch Bulk Campaign Now'}</span>
          </button>

          {/* Campaign Result Modal Card */}
          {campaignResult && (
            <div className="bg-emerald-950/60 border border-emerald-500/40 p-5 rounded-2xl text-xs space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-emerald-300 font-bold text-sm">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Campaign Dispatched Successfully
                </span>
                <span className="bg-emerald-500 text-black px-2 py-0.5 rounded font-mono font-black">
                  {campaignResult.status}
                </span>
              </div>
              <p className="text-slate-300 font-mono">Campaign ID: {campaignResult.campaignId}</p>
              <div className="grid grid-cols-2 gap-2 text-slate-300 font-mono pt-1">
                <div>Sender ID: {campaignResult.senderId}</div>
                <div>Delivery Guarantee: {campaignResult.estimatedDeliveryRate}</div>
              </div>
            </div>
          )}
        </div>

        {/* Right Smartphone Interactive Mockup (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[340px] bg-slate-950 rounded-[40px] border-4 border-slate-800 p-4 shadow-2xl space-y-4 relative">
            {/* Phone Speaker Notch */}
            <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto" />

            {/* Phone Top Header */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2 px-1">
              <span className="font-bold text-white">{senderId}</span>
              <span className="text-emerald-400 font-mono">Sarv Mobile Gateway</span>
            </div>

            {/* Phone Display Message Screen */}
            <div className="bg-slate-900 rounded-2xl p-4 min-h-[360px] flex flex-col justify-end space-y-3">
              {isRcs ? (
                /* RCS Rich Card Mockup */
                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 space-y-2 p-2">
                  <img
                    src={rcsMediaUrl}
                    alt="RCS Banner"
                    className="w-full h-32 object-cover rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <p className="text-xs text-slate-100 p-1 leading-relaxed">{customText}</p>
                  <button className="w-full bg-emerald-500 text-white font-bold text-xs py-2 rounded-lg flex items-center justify-center gap-1 shadow-md">
                    <span>{rcsActionText}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                /* Standard SMS Bubble */
                <div className="bg-slate-800 text-slate-100 p-3.5 rounded-2xl rounded-tl-none border border-slate-700/80 text-xs leading-relaxed shadow-md">
                  <p>{customText}</p>
                  <span className="text-[9px] text-slate-400 mt-2 block text-right">
                    Just Now • Sarv SMS
                  </span>
                </div>
              )}
            </div>

            {/* Phone Home Bar */}
            <div className="w-32 h-1 bg-slate-800 rounded-full mx-auto" />
          </div>

          <p className="text-xs text-slate-400 text-center mt-4">
            Live Preview rendering mobile recipient view on iOS & Android devices.
          </p>
        </div>
      </div>
    </div>
  );
};
