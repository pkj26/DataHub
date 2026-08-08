export type ActiveTab =
  | 'home'
  | 'companies'
  | 'city-directory'
  | 'industry-directory'
  | 'directors'
  | 'register'
  | 'claim'
  | 'pricing'
  | 'blog'
  | 'about'
  | 'contact'
  | 'legal'
  | 'privacy';

export type ProductId =
  | 'deepcall'
  | 'cx-ai'
  | 'bulk-sms'
  | 'whatsapp'
  | 'voice-broadcast'
  | 'workspace';

export interface ProductInfo {
  id: ProductId;
  name: string;
  tagline: string;
  category: string;
  icon: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export interface IndustrySolution {
  id: string;
  title: string;
  industry: string;
  icon: string;
  description: string;
  useCases: string[];
  stat: string;
  statLabel: string;
}

export interface ApiEndpoint {
  id: string;
  title: string;
  method: 'POST' | 'GET' | 'PUT';
  path: string;
  description: string;
  curlExample: string;
  nodeExample: string;
  pythonExample: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'agent' | 'system';
  content: string;
  timestamp: string;
  sentiment?: 'positive' | 'neutral' | 'urgent' | 'frustrated';
  intent?: string;
  suggestedActions?: string[];
  suggestedAgentAssist?: string;
}

export interface SmsTemplate {
  id: string;
  name: string;
  dltId: string;
  category: 'Transactional' | 'Promotional' | 'Service Implicit';
  text: string;
}

export interface IvrNode {
  id: string;
  key: string;
  title: string;
  prompt: string;
  actionType: 'TRANSFER' | 'INFO' | 'AI_AGENT' | 'SUBMENU';
  targetDepartment?: string;
}

export interface DashboardMetric {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtext: string;
}

export type CategoryType =
  | 'All'
  | 'B2B Corporate'
  | 'Real Estate Buyers'
  | 'High Net-Worth (HNI)'
  | 'E-Commerce Shoppers'
  | 'Doctors & Healthcare'
  | 'IT Professionals'
  | 'Car & Vehicle Owners'
  | 'Students & Jobseekers'
  | 'State & City Wise';

export interface LeadSampleItem {
  id: string;
  name: string;
  redactedPhone: string;
  fullPhoneDemo: string;
  city: string;
  state: string;
  category: CategoryType;
  designationOrType: string;
  whatsappActive: boolean;
  dndStatus: 'Non-DND' | 'DND';
  verifiedDate: string;
}

export interface MobileDatabasePackage {
  id: string;
  title: string;
  category: CategoryType;
  state: string;
  city: string;
  leadCount: number;
  accuracy: number; // e.g. 98
  price: number; // INR or USD
  originalPrice: number;
  fieldsIncluded: string[];
  isPopular?: boolean;
  isWhatsAppVerified?: boolean;
  isDltReady?: boolean;
  description: string;
  sampleFileUrl?: string;
}

export interface CartItem {
  packageItem: MobileDatabasePackage;
  quantity: number;
  customNotes?: string;
}

export interface VerifiedNumberResult {
  phoneNumber: string;
  operator: string;
  circleState: string;
  isWhatsAppActive: boolean;
  dndStatus: 'Non-DND' | 'DND';
  validityScore: number;
  lineType: 'Mobile' | 'Landline' | 'VoIP';
}


