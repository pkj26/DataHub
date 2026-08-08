export interface Company {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  industry: string;
  subCategory: string;
  city: string;
  state: string;
  address: string;
  yearEstablished: number;
  companySize: string;
  cin?: string;
  gstin?: string;
  officialPhone: string;
  officialEmail: string;
  website: string;
  linkedin?: string;
  verified: boolean;
  featured: boolean;
  optInConsent: boolean;
  description: string;
  services: string[];
  decisionMakers: {
    name: string;
    designation: string;
    optInVerified: boolean;
    linkedin?: string;
  }[];
}

export interface CityInfo {
  name: string;
  state: string;
  slug: string;
  companyCount: number;
  popularIndustries: string[];
  description: string;
}

export interface IndustryInfo {
  name: string;
  slug: string;
  companyCount: number;
  icon: string;
  description: string;
}

export interface DecisionMaker {
  id: string;
  name: string;
  designation: string;
  companyName: string;
  companySlug: string;
  industry: string;
  city: string;
  state: string;
  optInConsentDate: string;
  profileSummary: string;
  linkedinUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
}

export const TOP_CITIES: CityInfo[] = [
  {
    name: 'Jaipur',
    state: 'Rajasthan',
    slug: 'jaipur',
    companyCount: 12400,
    popularIndustries: ['Textiles', 'Gems & Jewellery', 'IT & Software', 'Handicrafts'],
    description: 'Jaipur is a major hub for textiles, gemstone manufacturing, handicrafts, and growing IT services in Western India.',
  },
  {
    name: 'Mumbai',
    state: 'Maharashtra',
    slug: 'mumbai',
    companyCount: 48500,
    popularIndustries: ['Financial Services', 'IT & Software', 'Pharmaceuticals', 'Entertainment'],
    description: 'Financial capital of India housing corporate headquarters, banking, shipping, and entertainment giants.',
  },
  {
    name: 'Ahmedabad',
    state: 'Gujarat',
    slug: 'ahmedabad',
    companyCount: 22100,
    popularIndustries: ['Textile & Apparel', 'Chemicals & Polymers', 'Pharmaceuticals', 'Engineering'],
    description: 'Major industrial powerhouse in Western India known for cotton textiles, enterprise pharma, and heavy engineering.',
  },
  {
    name: 'Delhi NCR',
    state: 'Delhi',
    slug: 'delhi-ncr',
    companyCount: 52000,
    popularIndustries: ['IT & Software', 'E-Commerce', 'Automotive', 'Telecom'],
    description: 'The capital region encompassing Delhi, Gurgaon, and Noida with high concentration of corporate headquarters.',
  },
  {
    name: 'Surat',
    state: 'Gujarat',
    slug: 'surat',
    companyCount: 18900,
    popularIndustries: ['Diamond Cutting & Jewellery', 'Textiles', 'Exports & Imports', 'Chemicals'],
    description: 'Global diamond polishing capital and giant synthetic textile manufacturing node in India.',
  },
  {
    name: 'Bangalore',
    state: 'Karnataka',
    slug: 'bangalore',
    companyCount: 41200,
    popularIndustries: ['IT & Software', 'Biotech', 'Aerospace', 'E-Commerce'],
    description: 'Silicon Valley of India with top global software tech parks, R&D centers, and SaaS unicorn startups.',
  },
  {
    name: 'Hyderabad',
    state: 'Telangana',
    slug: 'hyderabad',
    companyCount: 31000,
    popularIndustries: ['Pharmaceuticals', 'IT & Software', 'Biotech', 'Real Estate'],
    description: 'Cyberabad tech corridor and India’s premier bulk drug pharmaceutical cluster.',
  },
  {
    name: 'Pune',
    state: 'Maharashtra',
    slug: 'pune',
    companyCount: 27400,
    popularIndustries: ['Automotive', 'IT & Software', 'Heavy Machinery', 'Education'],
    description: 'Leading automotive manufacturing belt and expanding IT/ITeS hub near Mumbai.',
  },
  {
    name: 'Chennai',
    state: 'Tamil Nadu',
    slug: 'chennai',
    companyCount: 29800,
    popularIndustries: ['Automotive', 'Healthcare & Hospitals', 'Software', 'Leather'],
    description: 'Detroit of South Asia with automotive OEMs, health city medical centers, and IT parks.',
  },
  {
    name: 'Kolkata',
    state: 'West Bengal',
    slug: 'kolkata',
    companyCount: 21500,
    popularIndustries: ['Jute & Textiles', 'Steel & Mining', 'Tea Exports', 'IT Services'],
    description: 'Commercial hub of Eastern India and key gateway for South East Asian international trade.',
  },
  {
    name: 'Indore',
    state: 'Madhya Pradesh',
    slug: 'indore',
    companyCount: 11200,
    popularIndustries: ['Food Processing', 'Pharmaceuticals', 'IT Services', 'Textiles'],
    description: 'Cleanest city in India and rapid growth commercial core of Central India.',
  },
  {
    name: 'Ludhiana',
    state: 'Punjab',
    slug: 'ludhiana',
    companyCount: 9800,
    popularIndustries: ['Textiles & Hosiery', 'Bicycles & Auto Parts', 'Agriculture Machinery'],
    description: 'Manchester of India renowned for woolens, apparel, light engineering, and tractor components.',
  },
  {
    name: 'Vadodara',
    state: 'Gujarat',
    slug: 'vadodara',
    companyCount: 12100,
    popularIndustries: ['Petrochemicals', 'Electrical Equipment', 'Pharmaceuticals'],
    description: 'Industrial capital of Gujarat specializing in heavy electrical equipment and chemicals.',
  },
  {
    name: 'Coimbatore',
    state: 'Tamil Nadu',
    slug: 'coimbatore',
    companyCount: 14300,
    popularIndustries: ['Textile Machinery', 'Pumps & Motors', 'Auto Components', 'IT'],
    description: 'Pump City of Asia with high density precision engineering foundries and mills.',
  },
  {
    name: 'Noida',
    state: 'Uttar Pradesh',
    slug: 'noida',
    companyCount: 19500,
    popularIndustries: ['Mobile Manufacturing', 'IT & Software', 'BPO & Call Centers', 'Media'],
    description: 'Electronics manufacturing hardware ecosystem and prime BPO call center operational zone.',
  },
  {
    name: 'Gurgaon',
    state: 'Haryana',
    slug: 'gurgaon',
    companyCount: 24800,
    popularIndustries: ['Automotive OEMs', 'IT & SaaS', 'Financial Services', 'Consulting'],
    description: 'Millennium city hosting Fortune 500 regional offices and auto tech giants.',
  },
];

export const TOP_INDUSTRIES: IndustryInfo[] = [
  {
    name: 'IT & Software',
    slug: 'it-and-software',
    companyCount: 42300,
    icon: 'Code',
    description: 'Software development, enterprise SaaS, cloud computing, AI solutions, and IT consulting firms.',
  },
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    companyCount: 68100,
    icon: 'Factory',
    description: 'Heavy engineering, machinery, precision components, plastic products, and industrial equipment.',
  },
  {
    name: 'Textile & Apparel',
    slug: 'textile-and-apparel',
    companyCount: 31200,
    icon: 'Scissors',
    description: 'Garment exporters, synthetic yarn, fabric mills, fashion apparel, and home textiles.',
  },
  {
    name: 'Pharmaceuticals',
    slug: 'pharmaceuticals',
    companyCount: 18400,
    icon: 'Pill',
    description: 'API manufacturers, formulation labs, generic drug exporters, and medical device suppliers.',
  },
  {
    name: 'Real Estate & Construction',
    slug: 'real-estate-and-construction',
    companyCount: 29500,
    icon: 'Building2',
    description: 'Commercial developers, residential builders, infrastructure contractors, and architects.',
  },
  {
    name: 'Gems & Jewellery',
    slug: 'gems-and-jewellery',
    companyCount: 14100,
    icon: 'Gem',
    description: 'Diamond polishers, gold jewellery manufacturers, precious stone exporters, and retailers.',
  },
  {
    name: 'Automotive & Parts',
    slug: 'automotive-and-parts',
    companyCount: 22800,
    icon: 'Car',
    description: 'Auto component foundries, EV battery makers, spare parts distributors, and OEMs.',
  },
  {
    name: 'Food & Agriculture',
    slug: 'food-and-agriculture',
    companyCount: 26400,
    icon: 'Wheat',
    description: 'Food processing plants, organic produce exporters, spice millers, and cold storage chains.',
  },
  {
    name: 'Logistics & Supply Chain',
    slug: 'logistics-and-supply-chain',
    companyCount: 19800,
    icon: 'Truck',
    description: 'Freight forwarders, warehousing networks, ICD custom agents, and express couriers.',
  },
  {
    name: 'Healthcare & Hospitals',
    slug: 'healthcare-and-hospitals',
    companyCount: 16200,
    icon: 'Stethoscope',
    description: 'Multi-specialty hospital chains, diagnostic lab networks, and telemedicine platforms.',
  },
  {
    name: 'BPO & Call Centers',
    slug: 'bpo-and-call-centers',
    companyCount: 11400,
    icon: 'Headphones',
    description: 'Voice & non-voice customer support centers, KPO analytics, and back-office services.',
  },
  {
    name: 'Financial Services',
    slug: 'financial-services',
    companyCount: 21900,
    icon: 'Landmark',
    description: 'NBFCs, fintech payment gateways, corporate wealth advisors, and CA/audit firms.',
  },
];

export const SAMPLE_COMPANIES: Company[] = [
  {
    id: 'cmp-01',
    name: 'Ananta Textile Exports Pvt Ltd',
    slug: 'ananta-textile-exports',
    industry: 'Textile & Apparel',
    subCategory: 'Cotton Garment Export & Fabrics',
    city: 'Jaipur',
    state: 'Rajasthan',
    address: 'Plot No. 42, Sitapura Industrial Area, Phase II, Jaipur - 302022',
    yearEstablished: 2008,
    companySize: '100-250 Employees',
    cin: 'U17120RJ2008PTC026411',
    gstin: '08AABCA1234F1Z9',
    officialPhone: '+91 141 277 8900',
    officialEmail: 'contact@anantatextiles.in',
    website: 'https://anantatextiles.example.com',
    linkedin: 'https://linkedin.com/company/anantatextiles',
    verified: true,
    featured: true,
    optInConsent: true,
    description: 'Ananta Textile Exports Pvt Ltd is an ISO 9001:2015 certified manufacturer and exporter of premium block-printed ethnic wear, organic cotton fabrics, and home furnishing items based in Sitapura, Jaipur. Operating state-of-the-art automatic stitching units and eco-friendly dye houses, we serve retail chains in Germany, US, UK, and Australia with high quality control and ethical manufacturing practices.',
    services: [
      'Hand-block printed ethnic ladies wear',
      'Organic cotton bedsheets & quilt manufacturing',
      'Bulk fabric dyeing & digital textile printing',
      'Custom OEM garment stitching for global brands',
    ],
    decisionMakers: [
      {
        name: 'Rajesh Sharma',
        designation: 'Managing Director & Founder',
        optInVerified: true,
        linkedin: 'https://linkedin.com/in/rajesh-sharma-ananta',
      },
      {
        name: 'Meenakshi Rathore',
        designation: 'Head of International Business Development',
        optInVerified: true,
      },
    ],
  },
  {
    id: 'cmp-02',
    name: 'Nexwave Software Labs LLP',
    slug: 'nexwave-software-labs',
    industry: 'IT & Software',
    subCategory: 'Enterprise Cloud & AI Solutions',
    city: 'Bangalore',
    state: 'Karnataka',
    address: 'Unit 402, Embassy TechVillage, Devarabeesanahalli, Outer Ring Rd, Bangalore - 560103',
    yearEstablished: 2016,
    companySize: '50-100 Employees',
    cin: 'AAH-4912',
    gstin: '29AABFN9821K1Z2',
    officialPhone: '+91 80 4122 9011',
    officialEmail: 'hello@nexwavelabs.com',
    website: 'https://nexwavelabs.example.com',
    linkedin: 'https://linkedin.com/company/nexwavelabs',
    verified: true,
    featured: true,
    optInConsent: true,
    description: 'Nexwave Software Labs is a boutique technology consulting firm specializing in AI agent engineering, AWS cloud migration, microservices architecture, and enterprise mobile application development. We help mid-market logistics and healthcare enterprises modernize legacy software stacks.',
    services: [
      'Custom Generative AI Agent & LLM Integration',
      'AWS & Azure Cloud Migration & DevOps Automation',
      'React & Node.js Custom Enterprise Web Platforms',
      'Cross-platform iOS and Android Flutter Development',
    ],
    decisionMakers: [
      {
        name: 'Vikram S. Reddy',
        designation: 'Chief Executive Officer',
        optInVerified: true,
        linkedin: 'https://linkedin.com/in/vikram-reddy-nexwave',
      },
    ],
  },
  {
    id: 'cmp-03',
    name: 'Sunlight Pharma Organics India Pvt Ltd',
    slug: 'sunlight-pharma-organics',
    industry: 'Pharmaceuticals',
    subCategory: 'Bulk Drug APIs & Intermediates',
    city: 'Ahmedabad',
    state: 'Gujarat',
    address: 'GIDC Phase 4, Vatva Industrial Estate, Ahmedabad - 382445',
    yearEstablished: 2004,
    companySize: '250-500 Employees',
    cin: 'U24231GJ2004PTC044192',
    gstin: '24AAACS9921B1Z8',
    officialPhone: '+91 79 2583 4000',
    officialEmail: 'info@sunlightpharma.co.in',
    website: 'https://sunlightpharma.example.co.in',
    verified: true,
    featured: false,
    optInConsent: true,
    description: 'Sunlight Pharma Organics is a US-FDA and WHO-GMP approved active pharmaceutical ingredient (API) manufacturer supplying generic drug formulation plants across Asia, Europe, and Latin America. Equipped with modern R&D pilot labs and high-temperature reactors.',
    services: [
      'Active Pharmaceutical Ingredients (APIs)',
      'Custom Chemical Synthesis & Contract Manufacturing',
      'Regulatory Drug Master File (DMF) Documentation',
    ],
    decisionMakers: [
      {
        name: 'Dr. Pankaj Patel',
        designation: 'Technical Director & VP R&D',
        optInVerified: true,
      },
    ],
  },
  {
    id: 'cmp-04',
    name: 'Apex Precision Auto Components Ltd',
    slug: 'apex-precision-auto-components',
    industry: 'Automotive & Parts',
    subCategory: 'Precision Machining & EV Gears',
    city: 'Pune',
    state: 'Maharashtra',
    address: 'Plot 18, Chakan Industrial Area Phase III, Pune - 410501',
    yearEstablished: 2002,
    companySize: '500+ Employees',
    cin: 'L34100PN2002PLC017822',
    gstin: '27AABCA5512D1Z0',
    officialPhone: '+91 2135 678000',
    officialEmail: 'sales@apexprecision.co.in',
    website: 'https://apexprecision.example.co.in',
    verified: true,
    featured: true,
    optInConsent: true,
    description: 'Apex Precision is a Tier-1 supplier to major automotive OEMs in India and Europe, manufacturing high-precision transmission gears, EV drive motor shafts, and forged alloy engine brackets with IATF 16949 certification.',
    services: [
      'CNC Turning & Precision Gear Hobbing',
      'Electric Vehicle (EV) Powertrain Shafts',
      'Automotive Aluminum Alloy Die Casting',
    ],
    decisionMakers: [
      {
        name: 'Anil Kulkarni',
        designation: 'Chief Operating Officer',
        optInVerified: true,
      },
    ],
  },
  {
    id: 'cmp-05',
    name: 'Ratna Gems & Diamond Exporters',
    slug: 'ratna-gems-and-diamonds',
    industry: 'Gems & Jewellery',
    subCategory: 'Polished Cut Diamonds & Fine Jewellery',
    city: 'Surat',
    state: 'Gujarat',
    address: 'Diamond Bourse Tower B, Khajod, Surat - 395007',
    yearEstablished: 1998,
    companySize: '100-250 Employees',
    officialPhone: '+91 261 289 1122',
    officialEmail: 'export@ratnagems.com',
    website: 'https://ratnagems.example.com',
    verified: true,
    featured: false,
    optInConsent: true,
    description: 'Premier GIA-certified diamond cutter and fine gold jewellery manufacturer supplying wholesale jewelers in UAE, USA, and Belgium.',
    services: [
      'Loose Certified Natural & Lab-grown Diamonds',
      '22K & 18K Custom Gold Jewellery Manufacturing',
    ],
    decisionMakers: [
      {
        name: 'Hitesh B. Shah',
        designation: 'Partner & Chief Gemologist',
        optInVerified: true,
      },
    ],
  },
  {
    id: 'cmp-06',
    name: 'BlueSky Logistics & Cold Chain India',
    slug: 'bluesky-logistics-and-cold-chain',
    industry: 'Logistics & Supply Chain',
    subCategory: 'Temperature-Controlled Freight',
    city: 'Mumbai',
    state: 'Maharashtra',
    address: 'B-601, Marathon Futurex, Lower Parel, Mumbai - 400013',
    yearEstablished: 2012,
    companySize: '250-500 Employees',
    officialPhone: '+91 22 6199 8800',
    officialEmail: 'support@blueskylogistics.in',
    website: 'https://blueskylogistics.example.in',
    verified: true,
    featured: true,
    optInConsent: true,
    description: 'Pan-India reefer transport and cold storage network serving pharmaceutical, dairy, and ice cream conglomerates with GPS live tracking and temperature logging.',
    services: [
      'Pan-India Cold Chain Reefers (2°C to -25°C)',
      'Customs Clearance at Nhava Sheva & Mumbai Port',
      'Multi-temperature Multi-tenant Warehousing',
    ],
    decisionMakers: [
      {
        name: 'Captain Rohit Menon',
        designation: 'Head of Fleet Operations',
        optInVerified: true,
      },
    ],
  },
  {
    id: 'cmp-07',
    name: 'Grand Horizon Infra & Realty',
    slug: 'grand-horizon-infra-realty',
    industry: 'Real Estate & Construction',
    subCategory: 'Commercial IT Parks & Warehousing',
    city: 'Delhi NCR',
    state: 'Delhi',
    address: 'Cyber City Tower 8C, DLF Phase 2, Gurgaon - 122002',
    yearEstablished: 2005,
    companySize: '100-250 Employees',
    officialPhone: '+91 124 489 0000',
    officialEmail: 'corporate@grandhorizon.co.in',
    website: 'https://grandhorizon.example.co.in',
    verified: true,
    featured: true,
    optInConsent: true,
    description: 'Grade-A commercial real estate developer with over 8 million sq. ft. of delivered IT parks, industrial logistics hubs, and LEED-certified green offices in North India.',
    services: [
      'Commercial Lease Office Spaces',
      'Built-to-Suit Logistics & Fulfillment Warehouses',
      'Property Management & ESG Facility Services',
    ],
    decisionMakers: [
      {
        name: 'Sandeep Bansal',
        designation: 'Director of Leasing & Expansion',
        optInVerified: true,
      },
    ],
  },
  {
    id: 'cmp-08',
    name: 'Orchid Health Diagnostic Labs',
    slug: 'orchid-health-diagnostic-labs',
    industry: 'Healthcare & Hospitals',
    subCategory: 'NABL Accredited Pathology & Imaging',
    city: 'Hyderabad',
    state: 'Telangana',
    address: 'Road No. 12, Banjara Hills, Hyderabad - 500034',
    yearEstablished: 2011,
    companySize: '500+ Employees',
    officialPhone: '+91 40 3988 7700',
    officialEmail: 'info@orchiddiagnostics.org',
    website: 'https://orchiddiagnostics.example.org',
    verified: true,
    featured: false,
    optInConsent: true,
    description: 'Leading chain of NABL and CAP accredited central diagnostic laboratories operating 80+ collection centers across Telangana and Andhra Pradesh.',
    services: [
      'Molecular Genetics & Cancer Biomarker Testing',
      'Corporate Annual Health Screening Packages',
      'Home Blood Sample Collection Network',
    ],
    decisionMakers: [
      {
        name: 'Dr. Savitha Rao',
        designation: 'Chief Medical Officer',
        optInVerified: true,
      },
    ],
  },
];

export const DECISION_MAKERS: DecisionMaker[] = [
  {
    id: 'dm-01',
    name: 'Rajesh Sharma',
    designation: 'Managing Director & Founder',
    companyName: 'Ananta Textile Exports Pvt Ltd',
    companySlug: 'ananta-textile-exports',
    industry: 'Textile & Apparel',
    city: 'Jaipur',
    state: 'Rajasthan',
    optInConsentDate: '2026-01-15',
    profileSummary: 'Experienced textile exporter with 18+ years leading sustainable block-print apparel production and international trade across EU & US markets.',
    linkedinUrl: 'https://linkedin.com/in/rajesh-sharma-ananta',
  },
  {
    id: 'dm-02',
    name: 'Vikram S. Reddy',
    designation: 'Chief Executive Officer',
    companyName: 'Nexwave Software Labs LLP',
    companySlug: 'nexwave-software-labs',
    industry: 'IT & Software',
    city: 'Bangalore',
    state: 'Karnataka',
    optInConsentDate: '2026-02-01',
    profileSummary: 'Ex-Amazon software architect with deep expertise in cloud native AI agents, SaaS scaling, and distributed databases.',
    linkedinUrl: 'https://linkedin.com/in/vikram-reddy-nexwave',
  },
  {
    id: 'dm-03',
    name: 'Anil Kulkarni',
    designation: 'Chief Operating Officer',
    companyName: 'Apex Precision Auto Components Ltd',
    companySlug: 'apex-precision-auto-components',
    industry: 'Automotive & Parts',
    city: 'Pune',
    state: 'Maharashtra',
    optInConsentDate: '2026-01-20',
    profileSummary: 'Operations strategist leading lean automotive manufacturing, EV drivetrain engineering, and smart factory robotics.',
    linkedinUrl: 'https://linkedin.com/in/anil-kulkarni-apex',
  },
  {
    id: 'dm-04',
    name: 'Sandeep Bansal',
    designation: 'Director of Leasing & Expansion',
    companyName: 'Grand Horizon Infra & Realty',
    companySlug: 'grand-horizon-infra-realty',
    industry: 'Real Estate & Construction',
    city: 'Delhi NCR',
    state: 'Delhi',
    optInConsentDate: '2026-02-04',
    profileSummary: 'Commercial real estate leader managing 8M+ sq. ft. of corporate IT Parks, built-to-suit logistics parks, and tenant acquisition.',
    linkedinUrl: 'https://linkedin.com/in/sandeep-bansal-horizon',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-01',
    title: 'Top 10 Industries Booming in Jaipur in 2026',
    slug: 'top-10-industries-booming-in-jaipur-2026',
    excerpt: 'Explore how Jaipur has evolved beyond traditional handicrafts into an IT, textile export, gems bourse, and solar manufacturing powerhouse.',
    category: 'City Insights',
    readTime: '6 min read',
    date: 'February 2, 2026',
    content: `
      Jaipur, the capital of Rajasthan, has transformed into one of India’s fastest-growing commercial and industrial corridors in 2026. 
      While historically celebrated for block-printed textiles and blue pottery, Jaipur now houses Sitapura Industrial Area, Mahindra World City (SEZ), 
      and the newly expanded RIICO tech clusters.

      ### 1. Textile & Garment Exports
      With over 2,000 active textile units in Jaipur, hand-block prints and organic cotton apparel are exported globally to US, European, and Gulf markets.

      ### 2. Gems & Jewellery Bourse
      Jaipur continues to process 80% of the world's emeralds and tanzanite, with modern gemstone parks and direct export facilities.

      ### 3. Information Technology & SaaS
      Mahindra World City SEZ hosts top IT firms and software startups leveraging affordable engineering talent and modern infrastructure.

      ### 4. Solar & Renewable Energy Equipment
      Rajasthan's massive solar potential has spurred solar inverter, panel assembly, and battery storage factories across Jaipur's outskirts.
    `,
  },
  {
    id: 'blog-02',
    title: 'How to Register Your Company on MCA Portal — Step by Step',
    slug: 'how-to-register-company-mca-portal-step-by-step',
    excerpt: 'A complete guide to incorporating a Private Limited, LLP, or One Person Company (OPC) on Ministry of Corporate Affairs (MCA) SPICe+ portal.',
    category: 'Legal & Compliance',
    readTime: '8 min read',
    date: 'January 28, 2026',
    content: `
      Incorporating a business in India has been streamlined through the Ministry of Corporate Affairs (MCA) V3 portal using the SPICe+ form.

      ### Step 1: Obtain Digital Signature Certificate (DSC)
      Directors must obtain a Class 3 DSC from certifying authorities like eMudhra or Sify.

      ### Step 2: Name Reservation via SPICe+ Part A
      Submit two proposed unique company names along with the business object for approval.

      ### Step 3: Fill SPICe+ Part B
      Provide registered office address, director DIN application, PAN/TAN application, and EPFO/ESIC registration details in a single integrated form.

      ### Step 4: Submit AGILE-PRO-S
      Complete GSTIN application, Bank Account opening, and shop establishment registration simultaneously.
    `,
  },
  {
    id: 'blog-03',
    title: 'Difference Between Pvt Ltd, LLP & Sole Proprietorship in India',
    slug: 'difference-between-pvt-ltd-llp-sole-proprietorship',
    excerpt: 'Which business entity structure should you choose for your Indian startup or business? Compare liability, compliance costs, and tax rates.',
    category: 'Business Advice',
    readTime: '5 min read',
    date: 'January 22, 2026',
    content: `
      Choosing the right business structure is crucial for fundraising, liability protection, and tax compliance in India.

      | Feature | Sole Proprietorship | LLP (Limited Liability Partnership) | Private Limited Company |
      |---|---|---|---|
      | **Liability** | Unlimited | Limited to contribution | Limited to share value |
      | **Fundraising** | Difficult | Moderate | Preferred by VCs / Angels |
      | **Compliance Level** | Low | Medium | High |
      | **Taxation** | Individual Slab | 30% + Surcharge | 22% (15% for new manufacturing) |
    `,
  },
  {
    id: 'blog-04',
    title: 'How B2B Directories Help Small Businesses Get Verified Leads',
    slug: 'how-b2b-directories-help-small-businesses-get-leads',
    excerpt: 'Discover why opt-in B2B business directories drive higher conversion rates and brand trust compared to cold untargeted databases.',
    category: 'Lead Generation',
    readTime: '5 min read',
    date: 'January 18, 2026',
    content: `
      In the era of DPDP Act 2023, spamming purchased databases is no longer legal or effective. Opt-in business directories where companies self-register and list official contact channels offer high-intent leads and genuine corporate partnerships.
    `,
  },
  {
    id: 'blog-05',
    title: 'GST Registration Guide for New Businesses in India',
    slug: 'gst-registration-guide-for-new-businesses',
    excerpt: 'Complete checklist of mandatory documents, turnover thresholds (₹20L/₹40L), and step-by-step application process on gst.gov.in.',
    category: 'Taxation & Finance',
    readTime: '7 min read',
    date: 'January 12, 2026',
    content: `
      Goods and Services Tax (GST) registration is mandatory for businesses crossing threshold limits or engaging in inter-state e-commerce supply.
    `,
  },
  {
    id: 'blog-06',
    title: 'Top Business Hubs in India — City-wise Breakdown',
    slug: 'top-business-hubs-in-india-city-wise-breakdown',
    excerpt: 'A comprehensive review of Mumbai, Delhi NCR, Bangalore, Ahmedabad, Surat, Jaipur, and Hyderabad commercial ecosystems.',
    category: 'Market Research',
    readTime: '9 min read',
    date: 'January 05, 2026',
    content: `
      India's economic growth is fueled by specialized industrial clusters across key metro cities and Tier-2 growth hubs.
    `,
  },
];

export const DIRECTORY_FAQS = [
  {
    question: 'Is directory listing free on this platform?',
    answer: 'Yes, basic company registration and listing on India Business Directory is 100% free forever. Featured and Verified Badge listings with top search placement are available in optional paid plans.',
  },
  {
    question: 'How do I register or claim my company listing?',
    answer: 'Navigate to the "Register Your Company" or "Claim Listing" page, fill in your company details, verify your official business email and phone via OTP, and your profile goes live within 24 hours after verification.',
  },
  {
    question: 'Is the business contact data verified and DPDP Act compliant?',
    answer: 'Yes, 100% of the listings on this directory are self-submitted or claimed by authorized company owners with explicit consent. We never publish scraped personal mobile numbers without consent, adhering strictly to Digital Personal Data Protection (DPDP) Act 2023 guidelines.',
  },
  {
    question: 'Can I edit or remove my company listing anytime?',
    answer: 'Absolutely. Company owners can log into their dashboard at any time to update business details, change official contact information, or request immediate profile removal via our Data Removal Request system.',
  },
  {
    question: 'Does the directory display personal mobile numbers of directors?',
    answer: 'No. Only official company business phone numbers, corporate contact emails, and office addresses provided by the owner during registration are shown. Personal mobile numbers of directors are never published unless specifically opted in by the profile owner.',
  },
];

export const PRICING_PLANS = [
  {
    id: 'silver',
    name: 'Silver Package',
    price: '₹25,000',
    period: 'per year',
    badge: 'Starter Premium',
    description: "India's most reliable verified business directory & direct decision-maker contact data.",
    features: [
      '15,000+ Verified Corporate Profiles',
      '1,500+ Direct C-Level & Director Contacts',
      'Access to 10 Metro Cities & 10 Core Industries',
      'GSTIN & MCA Govt Registration Validation',
      'Data Export up to 3,000 CSV/Excel Records',
      'DPDP Act 2023 Compliant Opt-In Data',
      'Standard Email & Priority Support',
    ],
    ctaText: 'Get Silver Plan',
    popular: false,
  },
  {
    id: 'gold',
    name: 'Gold Package',
    price: '₹50,000',
    period: 'per year',
    badge: 'Most Popular',
    description: 'Complete B2B Intelligence suite for enterprises needing high-intent B2B leads & AI matching.',
    features: [
      '35,000+ Verified Enterprise Profiles',
      '5,000+ Direct Director & C-Suite Contact Profiles',
      'Full Access to ALL 50+ Cities & 30+ Industry Sectors',
      'AI-Powered Prospect Matching & Lead Scoring',
      'Data Export up to 10,000 CSV/Excel Records',
      'Revenue Tiering & Tech Stack Signals',
      'Dedicated Account Manager & Monthly Data Sync',
    ],
    ctaText: 'Get Gold Plan',
    popular: true,
  },
  {
    id: 'diamond',
    name: 'Diamond Package',
    price: '₹100,000',
    period: 'per year',
    badge: 'Ultimate Premium',
    description: "India's #1 most premium multi-source enriched database with unlimited exports & API access.",
    features: [
      'Unlimited Access to ALL 50,000+ Verified Companies',
      '12,500+ Direct C-Suite & Executive Contact Records',
      'Live MCA Govt Registry, GSTIN & Financial Health Sync',
      'Custom REST API Integration & Real-Time Webhooks',
      'Unlimited CRM Data Exports (CSV / Excel / Hubspot)',
      '100% Legal DPDP Act 2023 Consent Audit Guarantee',
      '24/7 Priority VIP Data Strategist Support',
    ],
    ctaText: 'Get Diamond Plan',
    popular: false,
  },
];
