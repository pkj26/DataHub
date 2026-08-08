import React, { useState } from 'react';
import {
  MessageCircle,
  Send,
  CheckCheck,
  ShoppingBag,
  Sparkles,
  Bot,
  UserCheck,
  Check,
  ArrowRight,
} from 'lucide-react';

interface WhatsAppMsg {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  options?: string[];
  imageUrl?: string;
}

export const WhatsappApiFlow: React.FC = () => {
  const [messages, setMessages] = useState<WhatsAppMsg[]>([
    {
      id: 'wa-1',
      sender: 'bot',
      text: '👋 Welcome to Sarv Official WhatsApp Business Service! How can we assist your business today?',
      time: '10:00 AM',
      options: ['📦 Track Order #ORD-98214', '📱 Browse Product Catalog', '🙋 Talk to Live Support Agent'],
    },
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleOptionClick = (opt: string) => {
    const userMsg: WhatsAppMsg = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: opt,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    let botResponse: WhatsAppMsg;
    if (opt.includes('Track Order')) {
      botResponse = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: '✅ Order #ORD-98214 is out for delivery via Sarv Express! Estimated arrival: 2:30 PM today.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80',
        options: ['📍 Track Live Driver GPS', '📞 Call Driver'],
      };
    } else if (opt.includes('Catalog')) {
      botResponse = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: '🛍️ Sarv CPaaS Plans Catalog:\n1. CX-AI Voice Agent Starter ($99/mo)\n2. Bulk SMS Gateway 100k Credits ($120)\n3. DeepCall PBX 1800 Number ($49/mo)',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: ['Select Plan 1', 'Select Plan 2', 'Select Plan 3'],
      };
    } else {
      botResponse = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Connecting you to Sarv Live WhatsApp Support Agent Sarah. Current wait time: < 15 seconds.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
    }

    setMessages((prev) => [...prev, userMsg, botResponse]);
  };

  const handleSendCustom = () => {
    if (!inputVal.trim()) return;
    const text = inputVal;
    setInputVal('');
    handleOptionClick(text);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30 mb-3">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Official WhatsApp Business Solution Provider (BSP)</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Interactive WhatsApp Bot & Chat Simulator
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Test green-badge WhatsApp interactive templates, rich media cards, list messages, and seamless AI-to-human agent escalation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto bg-slate-950 border-4 border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[600px]">
        {/* WhatsApp Top Header */}
        <div className="bg-emerald-900 p-4 flex items-center justify-between text-white border-b border-emerald-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-white shadow-md">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-sm">
                <span>Sarv Official Support</span>
                <span className="bg-emerald-400 text-slate-950 p-0.5 rounded-full text-[10px]" title="Verified Green Badge">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              </div>
              <p className="text-[11px] text-emerald-200">Official WhatsApp Business Account</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Chat Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-900/90">
          {messages.map((m) => (
            <div key={m.id} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-xs space-y-2 leading-relaxed shadow-md ${
                  m.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-tr-none'
                    : 'bg-slate-800 text-slate-100 border border-slate-700 rounded-tl-none'
                }`}
              >
                {m.imageUrl && (
                  <img src={m.imageUrl} alt="WhatsApp Media" className="w-full h-36 object-cover rounded-xl mb-2" />
                )}
                <p className="whitespace-pre-line">{m.text}</p>
                <span className="text-[9px] text-slate-400 block text-right font-mono flex items-center justify-end gap-1">
                  {m.time}
                  {m.sender === 'user' && <CheckCheck className="w-3 h-3 text-emerald-300 inline" />}
                </span>
              </div>

              {/* Bot Action Buttons */}
              {m.sender === 'bot' && m.options && m.options.length > 0 && (
                <div className="flex flex-col gap-1.5 mt-2 w-full max-w-[85%]">
                  {m.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleOptionClick(opt)}
                      className="w-full bg-slate-950 hover:bg-emerald-950 text-emerald-400 font-bold text-xs py-2 px-3 rounded-xl border border-emerald-500/30 transition-colors text-left flex items-center justify-between cursor-pointer"
                    >
                      <span>{opt}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp Footer Input */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendCustom()}
            placeholder="Type WhatsApp reply..."
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
          <button
            onClick={handleSendCustom}
            className="bg-emerald-500 hover:bg-emerald-600 text-white p-2.5 rounded-xl transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
