import React, { useState } from 'react';
import {
  Activity,
  PhoneCall,
  MessageSquare,
  MessageCircle,
  Bot,
  Key,
  ShieldCheck,
  TrendingUp,
  RefreshCw,
  Plus,
  Copy,
  Check,
  Radio,
  BarChart3,
  Search,
  Filter,
} from 'lucide-react';

export const EnterpriseDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'calls' | 'campaigns' | 'numbers' | 'apikeys'>('overview');
  const [copiedKey, setCopiedKey] = useState(false);

  const metrics = [
    { title: 'Total Inbound/Outbound Calls', value: '142,890', change: '+18.4%', subtext: '99.9% Connected' },
    { title: 'Bulk SMS Sent This Month', value: '4,829,100', change: '+24.1%', subtext: '99.8% DLT Delivery' },
    { title: 'AI Voice Deflection Rate', value: '78.4%', change: '+5.2%', subtext: 'CSAT: 4.8/5' },
    { title: 'Active WhatsApp Threads', value: '89,420', change: '+32.0%', subtext: '45% Open CTR' },
  ];

  const recentCalls = [
    { id: 'CALL-8921', caller: '+1 (555) 019-2831', type: 'Sarv CX-AI Agent', duration: '02:45', sentiment: 'Positive', status: 'RESOLVED_BY_AI' },
    { id: 'CALL-8922', caller: '+1 (555) 982-1140', type: 'Human Agent Handover', duration: '05:12', sentiment: 'Neutral', status: 'COMPLETED' },
    { id: 'CALL-8923', caller: '+1 (555) 334-0091', type: 'DeepCall IVR Tree', duration: '00:54', sentiment: 'Positive', status: 'IVR_TRANSFERRED' },
    { id: 'CALL-8924', caller: '+1 (555) 771-8820', type: 'Sarv CX-AI Agent', duration: '01:18', sentiment: 'Positive', status: 'RESOLVED_BY_AI' },
  ];

  const activeNumbers = [
    { number: '+1 (800) 555-SARV', label: 'Main Enterprise Toll-Free', location: 'United States', status: 'ACTIVE', routing: 'CX-AI Voice Agent' },
    { number: '+1 (888) 293-8490', label: 'E-Commerce COD Support', location: 'United States', status: 'ACTIVE', routing: 'DeepCall PBX Queue' },
    { number: '+44 20 7946 0921', label: 'London Regional DID', location: 'United Kingdom', status: 'ACTIVE', routing: 'IVR Sales Menu' },
  ];

  const copyApiKey = () => {
    navigator.clipboard.writeText('sarv_live_sec_99218340192837419203918');
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <h2 className="text-2xl font-black text-white">Sarv Enterprise Management Portal</h2>
            <span className="bg-orange-500/20 text-orange-400 text-xs font-bold px-2 py-0.5 rounded border border-orange-500/30">
              Live Production
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Organization: Acme Corp • Account ID: <code className="text-slate-300">SARV-ORG-99214</code>
          </p>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex items-center bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold gap-1">
          {(
            [
              { id: 'overview', label: 'Overview' },
              { id: 'calls', label: 'Call Activity' },
              { id: 'numbers', label: 'Virtual Numbers' },
              { id: 'apikeys', label: 'API Keys' },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeTab === t.id ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-xl space-y-2">
            <div className="flex justify-between items-center text-xs text-slate-400 font-medium">
              <span>{m.title}</span>
              <span className="text-emerald-400 font-bold">{m.change}</span>
            </div>
            <p className="text-2xl sm:text-3xl font-black text-white">{m.value}</p>
            <p className="text-[11px] text-slate-400">{m.subtext}</p>
          </div>
        ))}
      </div>

      {/* Tab Specific Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Live Call Logs Feed (8 cols) */}
          <div className="lg:col-span-8 bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white text-base">Real-time Inbound Call Feed</h3>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-orange-400" /> Auto-Refreshing
              </span>
            </div>

            <div className="space-y-2.5 text-xs font-mono">
              {recentCalls.map((c) => (
                <div
                  key={c.id}
                  className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3"
                >
                  <div>
                    <span className="text-white font-bold">{c.caller}</span>
                    <span className="text-slate-500 ml-2">[{c.id}]</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">{c.type}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-slate-400">{c.duration}</span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
                      {c.sentiment}
                    </span>
                    <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px]">
                      {c.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick System Health (4 cols) */}
          <div className="lg:col-span-4 bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
            <h3 className="font-bold text-white text-base border-b border-slate-800 pb-3">
              Infrastructure Status
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-300">DeepCall PBX Gateway</span>
                <span className="text-emerald-400 font-bold">99.99% ONLINE</span>
              </div>
              <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-300">Sarv CX-AI Engine</span>
                <span className="text-emerald-400 font-bold">ACTIVE (14ms)</span>
              </div>
              <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-300">DLT SMS Interconnect</span>
                <span className="text-emerald-400 font-bold">CONNECTED</span>
              </div>
              <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-300">WhatsApp BSP API</span>
                <span className="text-emerald-400 font-bold">HEALTHY</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'numbers' && (
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-white text-base">Provisioned Virtual Phone Numbers</h3>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5">
              <Plus className="w-4 h-4" /> Provision New 1800 Number
            </button>
          </div>

          <div className="space-y-3">
            {activeNumbers.map((num, i) => (
              <div key={i} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div>
                  <p className="text-base font-bold text-white font-mono">{num.number}</p>
                  <p className="text-slate-400">{num.label} • {num.location}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-slate-800 text-orange-400 px-3 py-1 rounded-lg font-mono font-bold">
                    Target: {num.routing}
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded font-bold">
                    {num.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'apikeys' && (
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl max-w-2xl">
          <h3 className="font-bold text-white text-base border-b border-slate-800 pb-3">
            Live Production API Key
          </h3>
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Production Bearer Token
            </label>
            <div className="flex items-center gap-2">
              <input
                type="password"
                value="sarv_live_sec_99218340192837419203918"
                readOnly
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-300 font-mono"
              />
              <button
                onClick={copyApiKey}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
              >
                {copiedKey ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedKey ? 'Copied Token' : 'Copy Token'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
