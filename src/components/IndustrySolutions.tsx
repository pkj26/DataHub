import React from 'react';
import {
  ShoppingBag,
  ShieldCheck,
  Activity,
  GraduationCap,
  Building,
  CheckCircle2,
  ArrowRight,
  Briefcase,
} from 'lucide-react';
import { INDUSTRY_SOLUTIONS } from '../data/sarvData';

export const IndustrySolutions: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-orange-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-amber-400" />;
      default:
        return <Building className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-3.5 py-1.5 rounded-full text-xs font-bold border border-purple-500/30 mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Tailored Industry Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Cloud Communications Built For Your Industry
        </h2>
        <p className="text-slate-300 text-sm mt-3 leading-relaxed">
          Pre-built workflows, regulatory templates, and compliance frameworks configured specifically for high-volume enterprise verticals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRY_SOLUTIONS.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition-all shadow-xl space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">{getIcon(item.icon)}</div>
                <span className="text-2xl font-black text-white">{item.stat}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{item.description}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                {item.useCases.map((uc, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                    <span>{uc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>{item.statLabel}</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
