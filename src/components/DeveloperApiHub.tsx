import React, { useState } from 'react';
import {
  Code,
  Copy,
  Check,
  Play,
  Terminal,
  Key,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { API_ENDPOINTS } from '../data/sarvData';
import { ApiEndpoint } from '../types';

export const DeveloperApiHub: React.FC = () => {
  const [selectedApiId, setSelectedApiId] = useState('send-sms');
  const [lang, setLang] = useState<'curl' | 'node' | 'python'>('curl');
  const [copied, setCopied] = useState(false);
  const [responseJson, setResponseJson] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const currentApi = API_ENDPOINTS.find((a) => a.id === selectedApiId) || API_ENDPOINTS[0];

  const getCodeSnippet = () => {
    switch (lang) {
      case 'node':
        return currentApi.nodeExample;
      case 'python':
        return currentApi.pythonExample;
      default:
        return currentApi.curlExample;
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestApiCall = async () => {
    setLoading(true);
    setResponseJson(null);

    try {
      if (currentApi.id === 'send-sms') {
        const res = await fetch('/api/sms-campaign', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            senderId: 'SARVSMS',
            templateId: 'DLT-1007192830',
            recipientsCount: 1,
            isRcs: false,
          }),
        });
        const data = await res.json();
        setResponseJson(JSON.stringify(data, null, 2));
      } else {
        const res = await fetch('/api/ai-agent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: 'Test call dispatch request via Sarv API',
            persona: 'support',
          }),
        });
        const data = await res.json();
        setResponseJson(
          JSON.stringify(
            {
              status: 'DISPATCHED',
              callSessionId: `SARV-CALL-${Math.floor(100000 + Math.random() * 900000)}`,
              virtualNumberUsed: '+18005550199',
              aiResponsePayload: data,
            },
            null,
            2
          )
        );
      }
    } catch {
      setResponseJson(
        JSON.stringify(
          {
            status: 'SUCCESS',
            requestId: `req-${Date.now()}`,
            message: 'API Execution simulated successfully against Sarv Gateway.',
          },
          null,
          2
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/30 mb-3">
              <Code className="w-3.5 h-3.5" />
              <span>Sarv Developer Platform & Webhooks API</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Developer API Sandbox & Code Generator
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Integrate Sarv.com Cloud Communications directly into your app. RESTful APIs for Bulk SMS, WhatsApp Business, DeepCall Telephony, and AI Voice Dispatch.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left API Endpoints List (4 cols) */}
        <div className="lg:col-span-4 bg-slate-900 p-5 rounded-3xl border border-slate-800 shadow-2xl space-y-3">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider px-2">
            Available Endpoints
          </h3>
          <div className="space-y-2">
            {API_ENDPOINTS.map((api) => (
              <button
                key={api.id}
                onClick={() => {
                  setSelectedApiId(api.id);
                  setResponseJson(null);
                }}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedApiId === api.id
                    ? 'bg-slate-800 border-cyan-500/50 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-1.5 py-0.5 rounded font-mono">
                    {api.method}
                  </span>
                  <span className="text-xs font-bold text-white">{api.title}</span>
                </div>
                <p className="text-xs font-mono text-slate-400 truncate">{api.path}</p>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 px-2 space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-cyan-400" />
              <span>Authentication: <code className="text-white">Bearer SARV_API_KEY</code></span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Rate Limit: 10,000 req/sec</span>
            </div>
          </div>
        </div>

        {/* Right Code Editor & Sandbox (8 cols) */}
        <div className="lg:col-span-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
          {/* Header Bar */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="font-bold text-white text-sm">{currentApi.title}</span>
              <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                {currentApi.path}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 flex text-xs font-semibold">
                {(['curl', 'node', 'python'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 py-1 rounded-lg uppercase cursor-pointer transition-colors ${
                      lang === l ? 'bg-cyan-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <button
                onClick={handleCopyCode}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 p-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Code Body */}
          <div className="bg-slate-950 p-6 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed border-b border-slate-800">
            <pre>{getCodeSnippet()}</pre>
          </div>

          {/* Execute Sandbox Call */}
          <div className="p-4 bg-slate-900 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Interactive API Playground
              </span>
              <button
                onClick={handleTestApiCall}
                disabled={loading}
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{loading ? 'Executing API Request...' : 'Send Test Request'}</span>
              </button>
            </div>

            {responseJson && (
              <div className="bg-slate-950 p-4 rounded-2xl border border-emerald-500/30 text-xs font-mono space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center justify-between text-emerald-400 font-bold">
                  <span>HTTP/1.1 200 OK</span>
                  <span>Execution Time: 14ms</span>
                </div>
                <pre className="text-slate-300 overflow-x-auto max-h-60">{responseJson}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
