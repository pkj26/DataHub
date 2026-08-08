import React, { useState } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  Search,
  PlusCircle,
  Building2,
  Sparkles,
  PhoneCall,
  Bot,
  Layers,
  Users,
} from 'lucide-react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab?: ActiveTab;
  setActiveTab?: (tab: ActiveTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab = 'home', setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#e8f1fa] border-b border-blue-100/80 shadow-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-3">
        
        {/* Top Header Line: Logo + Platform Subtitle + Auth Actions */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <button
              onClick={() => setActiveTab?.('home')}
              className="flex items-center gap-2.5 group cursor-pointer text-left"
            >
              {/* Emblem Logo matching screenshot */}
              <div className="w-9 h-9 rounded-full bg-white border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs group-hover:scale-105 transition-transform">
                <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center p-0.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-orange-500"></div>
                </div>
              </div>

              <span className="text-2xl font-black text-[#1e3a8a] tracking-tight">
                Data<span className="text-blue-600">Hub</span>
              </span>
            </button>

            <span className="hidden md:inline-block h-4 w-px bg-slate-300 mx-1"></span>

            <span className="hidden md:inline-block text-xs font-medium">
              <span className="text-[#d96b27]">Platforms for Business Communication,</span>{' '}
              <span className="text-[#2563eb]">AI & Intelligence.</span>
            </span>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab?.('register')}
              className="border border-[#2563eb] text-[#2563eb] hover:bg-blue-600 hover:text-white px-5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs"
            >
              Sign Up
            </button>
            <button
              onClick={() => setActiveTab?.('claim')}
              className="text-xs font-bold text-[#1e3a8a] hover:text-blue-700 cursor-pointer px-2 py-1"
            >
              Login
            </button>

            {/* Mobile Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-slate-700 hover:bg-blue-100/50 rounded-lg cursor-pointer ml-1"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Navigation Dropdown Bar matching screenshot */}
        <nav className="hidden lg:flex items-center gap-2 text-slate-700 text-xs font-semibold">
          
          {/* 1. Professional Database Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('professional')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200/80 bg-white/70 hover:bg-white text-slate-700 cursor-pointer transition-all ${
                openDropdown === 'professional' ? 'bg-white shadow-xs border-blue-300 text-blue-700 font-bold' : ''
              }`}
            >
              <span>Professional Database</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {openDropdown === 'professional' && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 space-y-0.5 animate-in fade-in">
                <div className="px-3 py-1.5 text-[10px] font-black uppercase text-slate-400 tracking-wider">Company Decision-Makers</div>
                <button onClick={() => { setActiveTab?.('directors'); setOpenDropdown(null); }} className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-xl text-xs font-bold text-slate-800 block">
                  C-Level &gt; (CEO, CFO, COO...)
                </button>
                <button onClick={() => { setActiveTab?.('directors'); setOpenDropdown(null); }} className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-xl text-xs font-bold text-slate-800 block">
                  IT Dept. &gt; (CTO, IT Heads, IT Director...)
                </button>
                <button onClick={() => { setActiveTab?.('directors'); setOpenDropdown(null); }} className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-xl text-xs font-bold text-slate-800 block">
                  Finance Decision-Makers
                </button>
                <button onClick={() => { setActiveTab?.('directors'); setOpenDropdown(null); }} className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-xl text-xs font-bold text-slate-800 block">
                  Marketing &gt; (Marketing Director, Manager...)
                </button>
                <button onClick={() => { setActiveTab?.('directors'); setOpenDropdown(null); }} className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-xl text-xs font-bold text-slate-800 block">
                  HR &gt; (CHRO, HR Director, HR Head...)
                </button>
                <button onClick={() => { setActiveTab?.('directors'); setOpenDropdown(null); }} className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-xl text-xs font-bold text-slate-800 block">
                  Operations &gt; (Operations Director, Purchase...)
                </button>
                <button onClick={() => { setActiveTab?.('directors'); setOpenDropdown(null); }} className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-xl text-xs font-bold text-slate-800 block">
                  Sales &gt; (VP of Sales, Sales Director...)
                </button>
              </div>
            )}
          </div>

          {/* 2. Companies Database Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('companies')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200/80 bg-white/70 hover:bg-white text-slate-700 cursor-pointer transition-all ${
                openDropdown === 'companies' ? 'bg-white shadow-xs border-blue-300 text-blue-700 font-bold' : ''
              }`}
            >
              <span>Companies Database</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {openDropdown === 'companies' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 max-h-80 overflow-y-auto space-y-0.5 animate-in fade-in">
                <div className="px-3 py-1.5 text-[10px] font-black uppercase text-slate-400 tracking-wider">Corporate Directory</div>
                {[
                  'Technology Companies',
                  'Software Companies',
                  'Manufacturing Companies',
                  'B2B Companies',
                  'SMB/SME Companies',
                  'IT Companies',
                  'Corporate Companies',
                  'Recruitment/HR Companies',
                  'Healthcare Companies',
                  'Finance Companies',
                  'Retail Companies',
                  'Real Estate Agencies',
                  'Interior Design Agencies',
                  'FMCG Companies',
                  'E-Commerce Companies',
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setActiveTab?.('companies'); setOpenDropdown(null); }}
                    className="w-full text-left px-3 py-1.5 hover:bg-blue-50 rounded-xl text-xs font-medium text-slate-800 block"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 3. Categories (12+) Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('categories')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200/80 bg-white/70 hover:bg-white text-slate-700 cursor-pointer transition-all ${
                openDropdown === 'categories' ? 'bg-white shadow-xs border-blue-300 text-blue-700 font-bold' : ''
              }`}
            >
              <span>Categories (12+)</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {openDropdown === 'categories' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 space-y-0.5 animate-in fade-in">
                <div className="px-3 py-1.5 text-[10px] font-black uppercase text-slate-400 tracking-wider">B2B & B2C Datasets</div>
                {[
                  'HNI & Ultra HNI',
                  'Doctors Leads/Database',
                  'Business Owners',
                  'Interior Designers',
                  'Salaried Database',
                  'Mobile Database',
                  'Car Owners Database',
                  'IT Employees Database',
                  'WhatsApp Number Database',
                  'Working Women Database',
                  'Online Shoppers',
                  'Parents Database',
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setActiveTab?.('companies'); setOpenDropdown(null); }}
                    className="w-full text-left px-3 py-1.5 hover:bg-blue-50 rounded-xl text-xs font-medium text-slate-800 block"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('products')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200/80 bg-white/70 hover:bg-white text-slate-700 cursor-pointer transition-all ${
                openDropdown === 'products' ? 'bg-white shadow-xs border-blue-300 text-blue-700' : ''
              }`}
            >
              <span>Products</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {openDropdown === 'products' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 space-y-1">
                <button onClick={() => { setActiveTab?.('companies'); setOpenDropdown(null); }} className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-xl text-xs font-medium text-slate-800 block">
                  <div className="font-bold text-slate-900">Email & Contact Center</div>
                  <div className="text-[10px] text-slate-500">Enterprise omnichannel outreach</div>
                </button>
                <button onClick={() => { setActiveTab?.('companies'); setOpenDropdown(null); }} className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-xl text-xs font-medium text-slate-800 block">
                  <div className="font-bold text-slate-900">Enriched Business Intelligence</div>
                  <div className="text-[10px] text-slate-500">Quality contacts through 15+ databases</div>
                </button>
              </div>
            )}
          </div>

          {/* Pricing link */}
          <button
            onClick={() => setActiveTab?.('pricing')}
            className={`px-3 py-1.5 rounded-full border border-slate-200/80 bg-white/70 hover:bg-white text-slate-700 cursor-pointer transition-all ${
              activeTab === 'pricing' ? 'bg-white shadow-xs font-bold text-blue-700' : ''
            }`}
          >
            Pricing
          </button>

          {/* Contact link */}
          <button
            onClick={() => setActiveTab?.('privacy')}
            className="px-3 py-1.5 rounded-full border border-slate-200/80 bg-white/70 hover:bg-white text-slate-700 cursor-pointer transition-all"
          >
            Contact Us
          </button>

        </nav>

        {/* Mobile menu view */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white rounded-2xl p-4 shadow-xl border border-slate-200 space-y-3 text-xs font-semibold text-slate-800">
            <button onClick={() => { setActiveTab?.('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 hover:bg-blue-50 rounded-xl">Home</button>
            <button onClick={() => { setActiveTab?.('companies'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 hover:bg-blue-50 rounded-xl">Products & Business Intelligence</button>
            <button onClick={() => { setActiveTab?.('directors'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 hover:bg-blue-50 rounded-xl">Conversational AI & Directors</button>
            <button onClick={() => { setActiveTab?.('city-directory'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 hover:bg-blue-50 rounded-xl">City Directories</button>
            <button onClick={() => { setActiveTab?.('industry-directory'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 hover:bg-blue-50 rounded-xl">Industry Sectors</button>
            <button onClick={() => { setActiveTab?.('pricing'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 hover:bg-blue-50 rounded-xl">Pricing</button>
            <button onClick={() => { setActiveTab?.('blog'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 hover:bg-blue-50 rounded-xl">Blog</button>
            <button onClick={() => { setActiveTab?.('privacy'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 hover:bg-blue-50 rounded-xl">Contact & Privacy</button>
          </div>
        )}

      </div>
    </header>
  );
};



