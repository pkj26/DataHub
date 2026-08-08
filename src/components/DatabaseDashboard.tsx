import React from 'react';
import {
  Building,
  Database,
  Download,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  FileSpreadsheet,
  Clock,
  Sparkles,
} from 'lucide-react';

export const DatabaseDashboard: React.FC = () => {
  const previousPurchases = [
    {
      id: 'ORD-9821',
      title: 'Mumbai & Thane Real Estate Buyers Database 2026',
      date: '2026-08-01',
      records: '150,000 Numbers',
      format: 'Excel & CSV',
      status: 'Ready for Download',
    },
    {
      id: 'ORD-9410',
      title: 'Delhi NCR B2B Corporate Directors & MDs',
      date: '2026-07-28',
      records: '250,000 Numbers',
      format: 'CSV File',
      status: 'Ready for Download',
    },
    {
      id: 'ORD-8102',
      title: 'All India Doctors & Hospital Owners List',
      date: '2026-07-15',
      records: '50,000 Numbers',
      format: 'Excel File',
      status: 'Ready for Download',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-wrap items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30 mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>Client Downloads & Dataset Portal</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            My Database Purchases & Downloads
          </h2>
          <p className="text-slate-300 text-sm mt-1 max-w-2xl">
            Access your previously purchased mobile database files, re-download updated datasets, and request fresh list extracts.
          </p>
        </div>
      </div>

      {/* Quick Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-2">
          <p className="text-xs text-slate-400 font-bold uppercase">Total Datasets Purchased</p>
          <p className="text-3xl font-black text-white font-mono">3 Datasets</p>
          <p className="text-[11px] text-emerald-400">Lifetime Download License Active</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-2">
          <p className="text-xs text-slate-400 font-bold uppercase">Total Verified Leads Accessible</p>
          <p className="text-3xl font-black text-amber-400 font-mono">450,000 Leads</p>
          <p className="text-[11px] text-slate-400">DLT & WhatsApp Ready</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-2">
          <p className="text-xs text-slate-400 font-bold uppercase">Database Accuracy Rate</p>
          <p className="text-3xl font-black text-emerald-400 font-mono">98.5%</p>
          <p className="text-[11px] text-emerald-400">Auto-updated 2026 Registry</p>
        </div>
      </div>

      {/* Purchased Downloads List */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
        <h3 className="text-xl font-extrabold text-white border-b border-slate-800 pb-4">
          Purchased Database Files
        </h3>

        <div className="space-y-4">
          {previousPurchases.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 hover:border-amber-500/40 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400">{item.id}</span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                    {item.format}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 flex items-center gap-3">
                  <span>Volume: <strong className="text-emerald-400">{item.records}</strong></span>
                  <span>•</span>
                  <span>Purchased on: {item.date}</span>
                </p>
              </div>

              <a
                href="/api/mobile-database/download-sample?category=Client_Purchased_File"
                download
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 text-xs shadow-lg shadow-emerald-500/20"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download File</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
