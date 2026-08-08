import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DirectoryView } from './components/DirectoryView';
import { DirectorsDirectory } from './components/DirectorsDirectory';
import { RegisterCompanyForm } from './components/RegisterCompanyForm';
import { ClaimListingForm } from './components/ClaimListingForm';
import { PricingPlansView } from './components/PricingPlansView';
import { BlogHub } from './components/BlogHub';
import { LegalPrivacyView } from './components/LegalPrivacyView';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { MandalaBackground } from './components/MandalaBackground';
import { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const handleSelectCity = (citySlug: string) => {
    setSelectedCity(citySlug);
    setActiveTab('city-directory');
  };

  const handleSelectIndustry = (industrySlug: string) => {
    setSelectedIndustry(industrySlug);
    setActiveTab('industry-directory');
  };

  return (
    <div className="min-h-screen bg-[#f4f8fe] text-slate-800 font-sans selection:bg-blue-600 selection:text-white flex flex-col antialiased relative">
      {/* Subtle Background Mandala & Wave Line Art */}
      <MandalaBackground />

      {/* Dynamic SEO Meta & Document Head Updater for Google India Ranking */}
      <SEO
        activeTab={activeTab}
        selectedCity={selectedCity}
        selectedIndustry={selectedIndustry}
      />

      {/* Universal Top Header Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Page Routing */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <Hero
            setActiveTab={setActiveTab}
            onSelectCity={handleSelectCity}
            onSelectIndustry={handleSelectIndustry}
          />
        )}

        {activeTab === 'companies' && (
          <DirectoryView setActiveTab={setActiveTab} />
        )}

        {activeTab === 'city-directory' && (
          <DirectoryView
            initialCitySlug={selectedCity}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'industry-directory' && (
          <DirectoryView
            initialIndustrySlug={selectedIndustry}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'directors' && (
          <DirectorsDirectory setActiveTab={setActiveTab} />
        )}

        {activeTab === 'register' && (
          <RegisterCompanyForm setActiveTab={setActiveTab} />
        )}

        {activeTab === 'claim' && (
          <ClaimListingForm setActiveTab={setActiveTab} />
        )}

        {activeTab === 'pricing' && (
          <PricingPlansView setActiveTab={setActiveTab} />
        )}

        {activeTab === 'blog' && (
          <BlogHub setActiveTab={setActiveTab} />
        )}

        {(activeTab === 'privacy' || activeTab === 'legal') && (
          <LegalPrivacyView setActiveTab={setActiveTab} />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onSelectCity={handleSelectCity}
        onSelectIndustry={handleSelectIndustry}
      />
    </div>
  );
}
