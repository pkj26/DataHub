import React, { useState } from 'react';
import {
  PhoneCall,
  Plus,
  Trash2,
  Play,
  Volume2,
  Bot,
  Users,
  Settings,
  ArrowRight,
  ShieldCheck,
  Phone,
  RefreshCw,
  PhoneOff,
} from 'lucide-react';
import { INITIAL_IVR_NODES } from '../data/sarvData';
import { IvrNode } from '../types';

export const IvrFlowBuilder: React.FC = () => {
  const [nodes, setNodes] = useState<IvrNode[]>(INITIAL_IVR_NODES);
  const [dialedKey, setDialedKey] = useState<string>('');
  const [ivrResponse, setIvrResponse] = useState<string>(
    'Thank you for calling Sarv Cloud Telephony. Press 1 for Sales, 2 for Tech Support, 3 for Balance, or 9 for AI Agent.'
  );
  const [inCall, setInCall] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDialKey = async (key: string) => {
    setDialedKey((prev) => prev + key);
    if (!inCall) setInCall(true);
    setLoading(true);

    try {
      const response = await fetch('/api/ivr-simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dtmfKey: key }),
      });
      const data = await response.json();
      setIvrResponse(data.responsePrompt);

      // Speak prompt if voice synthesis available
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(data.responsePrompt);
        window.speechSynthesis.speak(utterance);
      }
    } catch {
      const node = nodes.find((n) => n.key === key);
      if (node) {
        setIvrResponse(node.prompt);
      } else {
        setIvrResponse('Option not recognized. Please choose 1, 2, 3, or 9.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEndCall = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setInCall(false);
    setDialedKey('');
    setIvrResponse('Call ended. Dial any key on the keypad to initiate a test call to Sarv IVR.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Banner */}
      <div className="mb-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold border border-blue-500/30 mb-3">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>DeepCall Virtual PBX & IVR Studio</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Interactive IVR Menu Tree Designer
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Design multi-level phone menus, skill-based agent routing, and automated attendant prompts. Test your IVR live using the built-in phone dialer.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Visual IVR Tree Designer (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-xl font-bold text-white">Active IVR Keypress Routing Nodes</h3>
            <span className="text-xs text-blue-400 font-mono bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
              1800-SARV-PBX
            </span>
          </div>

          <div className="space-y-4">
            {nodes.map((node) => (
              <div
                key={node.id}
                className="bg-slate-950 p-4 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-mono text-sm">
                      {node.key}
                    </span>
                    <span className="text-white text-sm">{node.title}</span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      node.actionType === 'AI_AGENT'
                        ? 'bg-orange-500/20 text-orange-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}
                  >
                    {node.actionType}
                  </span>
                </div>

                <p className="text-xs text-slate-300 bg-slate-900 p-3 rounded-xl border border-slate-800 font-mono">
                  &quot;{node.prompt}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Keypad Phone Dialer (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" /> Live IVR Tester Dialer
            </h3>
            {inCall && (
              <span className="text-xs bg-emerald-500/20 text-emerald-400 font-mono px-2 py-0.5 rounded-full border border-emerald-500/30 animate-pulse">
                CALL IN PROGRESS
              </span>
            )}
          </div>

          {/* Screen Output */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 min-h-[140px] flex flex-col justify-between">
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-2">
              <span>Virtual Number: +1 800 555-SARV</span>
              <span className="text-blue-400">DTMF: [{dialedKey || 'READY'}]</span>
            </div>

            <p className="text-xs text-slate-200 font-mono leading-relaxed bg-slate-900 p-3 rounded-xl border border-slate-800">
              {loading ? 'Processing DTMF tone...' : ivrResponse}
            </p>
          </div>

          {/* Keypad Grid */}
          <div className="grid grid-cols-3 gap-3">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((k) => (
              <button
                key={k}
                onClick={() => handleDialKey(k)}
                className="bg-slate-950 hover:bg-blue-600/30 text-white font-bold text-lg py-3.5 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all cursor-pointer shadow-md active:scale-95 flex flex-col items-center justify-center"
              >
                <span>{k}</span>
              </button>
            ))}
          </div>

          {/* Hang Up Button */}
          {inCall && (
            <button
              onClick={handleEndCall}
              className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/40 font-bold py-3 rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2 text-xs"
            >
              <PhoneOff className="w-4 h-4" />
              <span>Hang Up Test Call</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
