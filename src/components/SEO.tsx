import React, { useEffect } from 'react';
import { ActiveTab } from '../types';

interface SEOProps {
  activeTab: ActiveTab;
  selectedCity?: string;
  selectedIndustry?: string;
}

const SEO_MAP: Record<
  string,
  { title: string; description: string; keywords: string }
> = {
  home: {
    title: 'Indian Databases — #1 Verified B2B Companies & Decision Makers Database India 2026',
    description: 'Access 50,000+ MCA & GSTIN verified Indian corporate profiles, C-Level decision makers (CEO, CFO, CTO, HR), Student datasets & executive contact numbers. 100% DPDP Act compliant.',
    keywords: 'Indian Databases, Indian Companies Database, B2B Decision Makers Data India, CEO CFO Contact Number India, MCA Registered Companies Database, GSTIN Verified Directory, HNI Database India, Student Database JEE NEET',
  },
  companies: {
    title: '50,000+ Indian Companies Database | MCA & GSTIN Verified Corporate Leads',
    description: 'Search verified corporate profiles of Indian companies, manufacturing firms, IT exporters, FMCG, and startups with active GSTIN status, turnover range, and executive contact details.',
    keywords: 'Indian Companies Directory, MCA Registered Companies, GSTIN Verified Business Database, Corporate Leads Mumbai Delhi Bangalore, B2B Company List India',
  },
  directors: {
    title: 'C-Level Decision Makers Database India | CEO, CFO, CTO & HR Contacts List',
    description: 'Download verified director contact database including CEO, CFO, CTO, Managing Directors, and HR Decision Makers in top Indian companies. Direct mobile and official email tags.',
    keywords: 'C-Level Executive Contact India, CEO Email Address Database, CFO Contact Details, CTO Directory India, HR Director Phone Numbers, MCA DIN Director List',
  },
  pricing: {
    title: 'B2B Packages & Data Pricing — Silver ₹25k, Gold ₹50k & Diamond ₹100k Suite',
    description: 'Affordable, 100% tax-deductible B2B data packages for India. Instant download access to 50,000+ verified corporate datasets, decision-makers contacts, and student lists.',
    keywords: 'B2B Data Package Pricing, Buy Indian Companies Database, Verified B2B Contact List Price, Silver Gold Diamond Data Package, Corporate Data Vendor India',
  },
  'city-directory': {
    title: 'City-Wise B2B Business Directory India | Mumbai, Delhi, Bangalore, Hyderabad, Chennai',
    description: 'Explore city-specific corporate lists and industrial company directories across Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, Ahmedabad, and 50+ Indian cities.',
    keywords: 'Mumbai Companies Directory, Delhi B2B Database, Bangalore Startup Directory, Hyderabad IT Companies List, Chennai Industrial Database, Pune Corporate Leads',
  },
  'industry-directory': {
    title: 'Industry Sector B2B Database | IT, Manufacturing, Healthcare, Real Estate & FMCG India',
    description: 'Targeted sector-wise B2B databases of Indian IT companies, pharmaceuticals, textile manufacturers, real estate developers, financial firms, and retail brands.',
    keywords: 'IT Software Companies Database, Manufacturing Industry List India, Healthcare Doctors Leads, Real Estate Developers Directory, FMCG Distributors List',
  },
  register: {
    title: 'List Your Business Free — Indian Databases B2B Directory Submission',
    description: 'Register your enterprise or SME on India’s top verified B2B corporate directory to enhance online visibility, gain high-intent B2B inquiries, and rank higher on Google.',
    keywords: 'Add Company to B2B Directory, Register Company India, Free Business Listing India, MCA Registered Business Portal, B2B Lead Generation Listing',
  },
  claim: {
    title: 'Claim Your Company Profile — Verified Owner Access on Indian Databases',
    description: 'Claim ownership of your corporate listing on Indian Databases. Update contact details, executive profiles, and product offerings to attract verified buyers.',
    keywords: 'Claim Business Listing, Verify Company Profile, B2B Directory Verification, Indian Corporate Listing Update',
  },
  blog: {
    title: 'B2B Intelligence & Sales Strategy Blog | Indian Databases Knowledge Hub',
    description: 'Expert insights on DPDP Act 2023 compliance, B2B cold outreach strategies in India, C-Level prospecting tactics, and MCA company database analysis.',
    keywords: 'B2B Marketing India Blog, DPDP Compliance Guide, Sales Lead Prospecting Tips, MCA Corporate Data Insights, Indian Business Strategy',
  },
  privacy: {
    title: 'Privacy Policy & DPDP Act 2023 Compliance — Indian Databases Portal',
    description: 'Learn how Indian Databases ensures 100% compliance with India’s Digital Personal Data Protection (DPDP) Act 2023 and ethical opt-in corporate data aggregation.',
    keywords: 'DPDP Act Compliance, Data Privacy Policy India, B2B Data Ethics, GDPR and Indian Data Law, Verified Opt-in Directory',
  },
};

export const SEO: React.FC<SEOProps> = ({ activeTab, selectedCity, selectedIndustry }) => {
  useEffect(() => {
    let currentSEO = SEO_MAP[activeTab] || SEO_MAP['home'];

    if (activeTab === 'city-directory' && selectedCity) {
      const cityName = selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1).replace('-', ' ');
      currentSEO = {
        title: `${cityName} B2B Companies & Executive Database 2026 | Indian Databases`,
        description: `Verified contact list of corporate companies, SMEs, and decision-makers based in ${cityName}, India. Includes GSTIN, MCA records, and C-Level contacts.`,
        keywords: `${cityName} Companies Directory, ${cityName} B2B Leads, ${cityName} CEO Contact Numbers, ${cityName} Industrial Companies`,
      };
    } else if (activeTab === 'industry-directory' && selectedIndustry) {
      const industryName = selectedIndustry.toUpperCase().replace('-', ' ');
      currentSEO = {
        title: `${industryName} Sector Companies & Decision Makers Database India`,
        description: `Access verified corporate profiles, turnover stats, and executive contacts in the ${industryName} industry across India. Sourced from MCA & GSTN.`,
        keywords: `${industryName} Companies List, ${industryName} B2B Database India, ${industryName} Director Contacts, ${industryName} Vendors India`,
      };
    }

    // Update Document Title
    document.title = currentSEO.title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentSEO.description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', currentSEO.description);
      document.head.appendChild(metaDescription);
    }

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', currentSEO.keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', currentSEO.keywords);
      document.head.appendChild(metaKeywords);
    }

    // Update OpenGraph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', currentSEO.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', currentSEO.description);

    // Scroll smoothly to top when tab changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedCity, selectedIndustry]);

  return null;
};
