import React from 'react';
import {
  PhoneCall,
  Bot,
  MessageSquare,
  MessageCircle,
  Volume2,
  Layout,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
} from 'lucide-react';
import { SARV_PRODUCTS } from '../data/sarvData';
import { ActiveTab, ProductId } from '../types';

interface ProductsOverviewProps {
  setActiveTab: (tab: ActiveTab) => void;
  selectedProductFilter?: ProductId;
}

export const ProductsOverview: React.FC<ProductsOverviewProps> = ({
  setActiveTab,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6 text-orange-400" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-blue-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-emerald-400" />;
      case 'MessageCircle':
        return <MessageCircle className="w-6 h-6 text-green-400" />;
      case 'Volume2':
        return <Volume2 className="w-6 h-6 text-purple-400" />;
      default:
        return <Layout className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getActionForProduct = (id: ProductId) => {
    switch (id) {
      case 'cx-ai':
        return () => setActiveTab('ai-agent-demo');
      case 'bulk-sms':
        return () => setActiveTab('sms-studio');
      case 'deepcall':
        return () => setActiveTab('ivr-builder');
      case 'whatsapp':
        return () => setActiveTab('whatsapp-flow');
      case 'voice-broadcast':
        return () => setActiveTab('ivr-builder');
      default:
        return () => setActiveTab('pricing');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-3.5 py-1.5 rounded-full text-xs font-bold border border-orange-500/30 mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Unified CPaaS & AI Suite</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Sarv Complete Cloud Communications Portfolio
        </h2>
        <p className="text-slate-300 text-sm mt-3 leading-relaxed">
          From AI-driven contact center automation to high-throughput messaging and virtual PBX telephony, Sarv empowers businesses with end-to-end customer engagement infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SARV_PRODUCTS.map((prod) => (
          <div
            key={prod.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition-all shadow-2xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">{getIcon(prod.icon)}</div>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700 font-bold uppercase">
                  {prod.category}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{prod.name}</h3>
                <p className="text-xs font-semibold text-orange-400 mt-0.5">{prod.tagline}</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{prod.description}</p>
              </div>

              {/* Highlights List */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                {prod.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 bg-slate-950 p-3 rounded-2xl border border-slate-800 text-center text-xs">
                {prod.metrics.map((m, i) => (
                  <div key={i}>
                    <p className="font-extrabold text-white text-sm">{m.value}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={getActionForProduct(prod.id)}
              className="w-full bg-slate-800 hover:bg-orange-500 text-slate-200 hover:text-white font-bold py-3 px-4 rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2 text-xs group"
            >
              <span>Explore & Test {prod.name}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
