import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Mic,
  MicOff,
  Send,
  PhoneCall,
  PhoneOff,
  Volume2,
  VolumeX,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  UserCheck,
  RefreshCw,
  Zap,
  Activity,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { ChatMessage } from '../types';

export const AiVoiceAgentSimulator: React.FC = () => {
  const [persona, setPersona] = useState<'support' | 'appointment' | 'banking' | 'ecommerce'>('support');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      role: 'agent',
      content:
        'Thank you for calling Sarv CX-AI Support! I am your AI Virtual Agent. How may I assist you with your order status or cloud services today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sentiment: 'positive',
      intent: 'greeting',
      suggestedActions: ['Check Order #ORD-98214', 'Refill SMS Credits', 'Speak to Human Agent'],
      suggestedAgentAssist: 'Initial welcoming greeting dispatched. Customer intent awaiting input.',
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCallActive, setIsCallActive] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [audioSpeaking, setAudioSpeaking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Speech Synthesizer for AI Voice Agent Output
  const speakText = (text: string) => {
    if (!voiceEnabled || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;

      // Try selecting female/clearest voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(
        (v) => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha'))
      );
      if (preferredVoice) utterance.voice = preferredVoice;

      utterance.onstart = () => setAudioSpeaking(true);
      utterance.onend = () => setAudioSpeaking(false);
      utterance.onerror = () => setAudioSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } catch {
      setAudioSpeaking(false);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const promptText = textToSend || inputPrompt;
    if (!promptText.trim() || loading || !isCallActive) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: promptText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setInputPrompt('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText,
          persona,
          conversationHistory: updatedHistory.slice(-6).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      const aiReplyText = data.reply || 'I am processing your inquiry regarding Sarv Cloud Communications services.';

      const agentMessage: ChatMessage = {
        id: `agent-${Date.now()}`,
        role: 'agent',
        content: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sentiment: data.sentiment || 'neutral',
        intent: data.intent || 'general_inquiry',
        suggestedActions: data.suggestedActions || ['View SMS Dashboard', 'Request Callback'],
        suggestedAgentAssist: data.suggestedAgentAssist || 'Standard inquiry handled autonomously.',
      };

      setMessages((prev) => [...prev, agentMessage]);
      speakText(aiReplyText);
    } catch (err) {
      console.error('AI Agent call error:', err);
      const fallbackMsg: ChatMessage = {
        id: `agent-err-${Date.now()}`,
        role: 'agent',
        content:
          'Thank you for reaching out. I have updated your record in Sarv Cloud. Is there anything else regarding your bulk SMS or call routing I can clarify?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sentiment: 'positive',
        intent: 'support',
        suggestedActions: ['Check SMS Logs', 'Virtual Number Setup'],
        suggestedAgentAssist: 'Fallback activated. AI context synchronized.',
      };
      setMessages((prev) => [...prev, fallbackMsg]);
      speakText(fallbackMsg.content);
    } finally {
      setLoading(false);
    }
  };

  const toggleCall = () => {
    if (isCallActive) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setIsCallActive(false);
      setAudioSpeaking(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `sys-${Date.now()}`,
          role: 'system',
          content: 'Call disconnected by caller. Total Call Duration: 01:24. Call Recording saved to Sarv Cloud.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } else {
      setIsCallActive(true);
      setMessages([
        {
          id: `msg-reinit-${Date.now()}`,
          role: 'agent',
          content: 'Sarv CX-AI Voice Agent reconnected. How can I help you today?',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sentiment: 'positive',
          intent: 'greeting',
          suggestedActions: ['Order Status', 'Billing Query', 'Technical API'],
        },
      ]);
    }
  };

  const currentPersonaInfo = {
    support: {
      title: 'Enterprise Technical & Order Support',
      description: 'Handles order tracking, SMS campaign delivery status, and API authentication.',
      samplePrompt: 'Where is my recent order #ORD-98214?',
    },
    appointment: {
      title: 'Healthcare & Clinic Appointment Scheduler',
      description: 'Schedules, reschedules, and confirms doctor appointments via voice call.',
      samplePrompt: 'I want to schedule a consultation with Dr. Sarah tomorrow afternoon.',
    },
    banking: {
      title: 'Banking & Financial Credit Copilot',
      description: 'Verifies customer account activity, 2FA status, and loan application pre-screening.',
      samplePrompt: 'Check my credit card application status.',
    },
    ecommerce: {
      title: 'D2C E-Commerce COD Verification',
      description: 'Calls customers automatically to confirm Cash-On-Delivery orders before dispatch.',
      samplePrompt: 'I want to confirm my COD order of $120.',
    },
  }[persona];

  const lastAgentMsg = [...messages].reverse().find((m) => m.role === 'agent');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header Banner */}
      <div className="mb-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-bold border border-orange-500/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Generative AI Voice Call Simulator</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Sarv CX-AI Voice Agent In Action
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Experience how Sarv.com AI voice agents speak with callers in real-time, detect intent and sentiment, and assist human agents with automated live copilot insights.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setVoiceEnabled(!voiceEnabled);
                if (voiceEnabled && 'speechSynthesis' in window) window.speechSynthesis.cancel();
              }}
              className={`p-3 rounded-2xl border text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                voiceEnabled
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
            >
              {voiceEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
              <span>{voiceEnabled ? 'AI Voice Audio ON' : 'Voice Audio Muted'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Simulator Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Phone Voice Agent Interface (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[650px]">
          {/* Phone Top Call Bar */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 font-bold">
                  <Bot className="w-6 h-6" />
                </div>
                {audioSpeaking && (
                  <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange-500"></span>
                  </span>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white text-sm">Sarv CX-AI Virtual Voice Agent</h3>
                  {isCallActive && (
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      CONNECTED
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400">Toll-Free Virtual Line: +1 (800) 555-SARV</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleCall}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md ${
                  isCallActive
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/40'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/30'
                }`}
              >
                {isCallActive ? <PhoneOff className="w-4 h-4" /> : <PhoneCall className="w-4 h-4" />}
                <span>{isCallActive ? 'Hang Up' : 'Dial AI Call'}</span>
              </button>
            </div>
          </div>

          {/* Persona Switcher Selector */}
          <div className="bg-slate-950/60 px-4 py-2.5 border-b border-slate-800/80 flex items-center justify-between text-xs overflow-x-auto gap-2">
            <span className="text-slate-400 font-bold whitespace-nowrap">Persona Scenario:</span>
            <div className="flex items-center gap-1.5">
              {(
                [
                  { id: 'support', label: 'E-Commerce Support' },
                  { id: 'appointment', label: 'Clinic Appointment' },
                  { id: 'banking', label: 'Banking & Credit' },
                  { id: 'ecommerce', label: 'COD Verification' },
                ] as const
              ).map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPersona(p.id)}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    persona === p.id
                      ? 'bg-orange-500 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Live Audio Visualizer Bar when AI is speaking */}
          {audioSpeaking && (
            <div className="bg-gradient-to-r from-orange-950/80 via-amber-950/80 to-orange-950/80 px-4 py-2 border-b border-orange-500/30 flex items-center justify-between text-xs text-orange-300 animate-pulse">
              <span className="font-mono font-bold flex items-center gap-2">
                <Activity className="w-4 h-4 text-orange-400 animate-bounce" />
                AI VOICE SYNTHESIZER STREAMING AUDIO (24kHz PCM)...
              </span>
              <div className="flex items-center gap-1">
                {[40, 80, 60, 100, 30, 90, 50, 70].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-orange-400 rounded-full animate-pulse"
                    style={{ height: `${h / 4}px`, animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Chat / Call Audio Transcript Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === 'user'
                    ? 'items-end'
                    : msg.role === 'system'
                    ? 'items-center'
                    : 'items-start'
                }`}
              >
                {msg.role === 'system' ? (
                  <div className="bg-slate-950 px-4 py-2 rounded-full border border-slate-800 text-xs text-slate-400 font-mono my-2 text-center">
                    {msg.content}
                  </div>
                ) : (
                  <div className="max-w-[85%] space-y-1">
                    <div className="flex items-center gap-2 px-1 text-[11px] text-slate-400 font-medium">
                      <span>{msg.role === 'user' ? 'Caller (You)' : 'Sarv CX-AI Agent'}</span>
                      <span>•</span>
                      <span>{msg.timestamp}</span>
                      {msg.sentiment && (
                        <span
                          className={`px-1.5 py-0.2 rounded text-[10px] font-bold uppercase ${
                            msg.sentiment === 'positive'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : msg.sentiment === 'urgent'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          }`}
                        >
                          {msg.sentiment}
                        </span>
                      )}
                    </div>

                    <div
                      className={`p-4 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-orange-600 text-white rounded-tr-none shadow-lg shadow-orange-600/20'
                          : 'bg-slate-800 border border-slate-700/80 text-slate-100 rounded-tl-none shadow-md'
                      }`}
                    >
                      {msg.content}
                    </div>

                    {/* Suggested Quick Actions Buttons if Agent */}
                    {msg.role === 'agent' && msg.suggestedActions && msg.suggestedActions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {msg.suggestedActions.map((act, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSendMessage(act)}
                            className="text-xs bg-slate-950 hover:bg-slate-800 text-orange-300 hover:text-orange-200 px-3 py-1 rounded-xl border border-orange-500/30 transition-colors cursor-pointer flex items-center gap-1"
                          >
                            <span>{act}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-3 text-xs text-orange-400 font-mono bg-slate-950 p-3 rounded-2xl border border-slate-800 max-w-sm">
                <RefreshCw className="w-4 h-4 animate-spin text-orange-400" />
                <span>Sarv CX-AI is thinking & analyzing voice intent...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Controls */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-2.5 rounded-xl border text-slate-300 transition-colors cursor-pointer ${
                  isMuted ? 'bg-red-500/20 border-red-500/40 text-red-400' : 'bg-slate-800 border-slate-700 hover:bg-slate-700'
                }`}
                title={isMuted ? 'Microphone Muted' : 'Microphone Active'}
              >
                {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5 text-orange-400" />}
              </button>

              <input
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={
                  isCallActive
                    ? `Type caller speech (e.g., "${currentPersonaInfo.samplePrompt}")...`
                    : 'Call disconnected. Click "Dial AI Call" to start.'
                }
                disabled={!isCallActive || loading}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
              />

              <button
                onClick={() => handleSendMessage()}
                disabled={!isCallActive || !inputPrompt.trim() || loading}
                className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white p-2.5 rounded-xl transition-all cursor-pointer shadow-lg shadow-orange-500/20"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 px-1">
              <span>Quick Prompt Idea: &quot;{currentPersonaInfo.samplePrompt}&quot;</span>
              <button
                onClick={() => handleSendMessage(currentPersonaInfo.samplePrompt)}
                className="text-orange-400 hover:underline font-semibold cursor-pointer"
              >
                Auto-Fill
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Real-Time Omnichannel Agent Assist & Analytics Copilot (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Agent Assist Copilot Dashboard Panel */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Human Agent Assist Copilot</h3>
                  <p className="text-xs text-slate-400">Live Telemetry & Intent Monitor</p>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-mono font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                ACTIVE MONITOR
              </span>
            </div>

            {/* Current Scenario Info */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-400 font-bold">
                <span>ACTIVE SCENARIO</span>
                <span className="text-orange-400 font-semibold">{currentPersonaInfo.title}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{currentPersonaInfo.description}</p>
            </div>

            {/* Live Sentiment & Intent Meter */}
            <div className="space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-bold uppercase tracking-wider">Detected Sentiment</span>
                <span
                  className={`font-black uppercase px-2 py-0.5 rounded text-xs ${
                    lastAgentMsg?.sentiment === 'positive'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : lastAgentMsg?.sentiment === 'urgent'
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  {lastAgentMsg?.sentiment || 'POSITIVE'}
                </span>
              </div>

              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    lastAgentMsg?.sentiment === 'positive'
                      ? 'w-[90%] bg-emerald-500'
                      : lastAgentMsg?.sentiment === 'urgent'
                      ? 'w-[95%] bg-red-500'
                      : 'w-[75%] bg-blue-500'
                  }`}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1">
                <span>Classified Intent: <strong className="text-white">{lastAgentMsg?.intent || 'general_inquiry'}</strong></span>
                <span>Copilot Confidence: <strong className="text-emerald-400">98.6%</strong></span>
              </div>
            </div>

            {/* Suggested Agent Assist Notes */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <TrendingUp className="w-4 h-4" />
                <span>AI Copilot Recommendation</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                {lastAgentMsg?.suggestedAgentAssist ||
                  'No manual intervention required. Sarv CX-AI is autonomously fulfilling request via Cloud APIs.'}
              </p>
            </div>

            {/* Features Checklist */}
            <div className="space-y-2 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Seamless Voice-To-Text & Text-To-Speech Switching</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant Escalation to Human Agent with Live Transcript</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Native CRM Sync (Salesforce, Zoho, HubSpot, Zendesk)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
