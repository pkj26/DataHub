import { ProductInfo, IndustrySolution, ApiEndpoint, SmsTemplate, IvrNode } from '../types';

export const SARV_PRODUCTS: ProductInfo[] = [
  {
    id: 'cx-ai',
    name: 'CX-AI Contact Center',
    tagline: 'AI-Powered Voice Agents & Omnichannel Agent Assist',
    category: 'Conversational AI',
    icon: 'Bot',
    description:
      'Transform customer experience with generative AI voice virtual agents, smart sentiment detection, real-time speech analytics, and automated multi-agent handovers.',
    highlights: [
      'Human-like AI Voice Agents powered by Gemini',
      'Real-time Sentiment & Intent Detection',
      'Unified Omnichannel Inbox (Voice, Chat, WhatsApp)',
      'Agent Assist Copilot with suggested responses',
      'Automated Call Summaries & CSAT Analytics',
    ],
    metrics: [
      { label: 'Deflection Rate', value: '78%' },
      { label: 'Avg Resolution Time', value: '42s' },
      { label: 'CSAT Improvement', value: '+34%' },
    ],
    accentColor: 'from-orange-500 to-amber-600',
  },
  {
    id: 'deepcall',
    name: 'DeepCall Cloud Telephony',
    tagline: 'Virtual Numbers, Hosted PBX & Smart Call Routing',
    category: 'Cloud Telephony',
    icon: 'PhoneCall',
    description:
      'Enterprise-grade cloud PBX with multi-level visual IVR, virtual 1800/Toll-Free numbers, click-to-call widgets, call recording, and CRM integration.',
    highlights: [
      'Virtual Toll-Free & Regional Phone Numbers',
      'Visual Drag & Drop IVR Menu Designer',
      'Smart Skill-Based & Time-Based Call Routing',
      'Call Recording with AI Speech-to-Text Transcription',
      'Native CRM Sync (Salesforce, HubSpot, Zoho)',
    ],
    metrics: [
      { label: 'Call Connect Rate', value: '99.9%' },
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Latency', value: '<15ms' },
    ],
    accentColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'bulk-sms',
    name: 'Bulk SMS & Sarv RCS',
    tagline: 'Send 5M+ Targeted Messages in One Click',
    category: 'Messaging',
    icon: 'MessageSquare',
    description:
      'High-throughput promotional and transactional SMS gateway with 100% DLT compliance, instant OTP delivery, short link tracking, and rich interactive RCS messaging.',
    highlights: [
      'Instant OTP delivery (<2 seconds speed guarantee)',
      '100% DLT compliant template manager',
      'RCS Rich Cards with actionable buttons & carousel',
      'Intelligent routing across multiple telecom operators',
      'Smart URL shortener with click analytics',
    ],
    metrics: [
      { label: 'Messages/Min', value: '50,000+' },
      { label: 'OTP Speed', value: '1.2s' },
      { label: 'Delivery Rate', value: '99.7%' },
    ],
    accentColor: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Business API',
    tagline: 'Interactive WhatsApp Messaging & Bot Automation',
    category: 'Omnichannel',
    icon: 'MessageCircle',
    description:
      'Official Meta WhatsApp Business Solution Provider (BSP). Broadcast promotional campaigns, trigger order updates, and deploy interactive conversational bots.',
    highlights: [
      'Official Green Badge WhatsApp Business API',
      'Interactive List Messages & Reply Buttons',
      'Catalog Showcase & In-Chat Checkout',
      'Automated Order Tracking & Payment Reminders',
      'Multi-agent Live Chat Team Portal',
    ],
    metrics: [
      { label: 'Open Rate', value: '98%' },
      { label: 'Conversion Boost', value: '4.5x' },
      { label: 'CTR', value: '45%' },
    ],
    accentColor: 'from-green-500 to-emerald-700',
  },
  {
    id: 'voice-broadcast',
    name: 'Voice Broadcast & Outbound',
    tagline: 'Mass Voice Calls & Automated Press-1 Surveys',
    category: 'Voice Automation',
    icon: 'Volume2',
    description:
      'Reach millions of customers simultaneously with customized pre-recorded audio, dynamic text-to-speech variables, and interactive Press-1 keypress responses.',
    highlights: [
      'Automated High-Volume Outbound Dialer',
      'Press-1 Survey & Lead Qualification',
      'Multi-lingual Text-To-Speech (TTS) Engine',
      'Live Call Answer Detection (Answering Machine Filter)',
      'Scheduled Broadcast Campaigns with Retry Logic',
    ],
    metrics: [
      { label: 'Capacity/Day', value: '10M Calls' },
      { label: 'Answer Rate', value: '62%' },
      { label: 'Languages', value: '25+' },
    ],
    accentColor: 'from-purple-600 to-violet-700',
  },
  {
    id: 'workspace',
    name: 'Sarv Workspace',
    tagline: 'Secure Business Mail, Video Meetings & Cloud Drive',
    category: 'Enterprise Productivity',
    icon: 'Layout',
    description:
      'Unified enterprise workspace suite featuring AI-powered business email, Sarv Meet video conferencing, collaborative docs, and secure cloud storage.',
    highlights: [
      'Sarv Meet HD Video Meetings (No App Install Required)',
      'Business Email with Custom Domain & AI Anti-Spam',
      'Sarv Drive Encrypted Cloud Storage & Document Sync',
      'Collaborative Docs, Spreadsheets & Presentations',
      'Team Chat & Channel Collaboration',
    ],
    metrics: [
      { label: 'Security Standard', value: 'ISO 27001' },
      { label: 'HD Video', value: '1080p60' },
      { label: 'Storage/User', value: '100 GB+' },
    ],
    accentColor: 'from-cyan-600 to-blue-600',
  },
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce & D2C',
    industry: 'E-Commerce',
    icon: 'ShoppingBag',
    description:
      'Automate order notifications, COD confirmation calls, cart recovery via WhatsApp, and instant delivery OTPs.',
    useCases: [
      'Automated COD Order Verification Call',
      'WhatsApp Abandoned Cart Recovery (45% Conversion)',
      'Instant SMS Delivery Tracking & Return Requests',
    ],
    stat: '3.8x',
    statLabel: 'Higher Repeat Purchase Rate',
  },
  {
    id: 'banking',
    title: 'Banking & Financial Services',
    industry: 'BFSI',
    icon: 'ShieldCheck',
    description:
      'Secure transaction alerts, 2FA OTPs, AI Virtual Voice Agents for loan inquiries, and fraud alert broadcasting.',
    useCases: [
      'Sub-Second Transaction OTP Delivery',
      'AI Voice Bot for Credit Card Application Screening',
      'Automated EMI Payment Reminder Broadcasts',
    ],
    stat: '99.999%',
    statLabel: 'Uptime for Financial OTPs',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Diagnostics',
    industry: 'Healthcare',
    icon: 'Activity',
    description:
      'HIPAA-ready SMS appointment reminders, WhatsApp lab report delivery, and IVR emergency triage routing.',
    useCases: [
      'Automated Doctor Appointment Reminders',
      'WhatsApp Lab Test Result Delivery with PDF',
      'Smart IVR for Emergency Consultation Triage',
    ],
    stat: '-52%',
    statLabel: 'Reduction in No-Show Rates',
  },
  {
    id: 'education',
    title: 'EdTech & Universities',
    industry: 'Education',
    icon: 'GraduationCap',
    description:
      'Admissions lead qualification via AI Voice Agent, class update broadcasts, and fee payment alerts.',
    useCases: [
      'AI Voice Agent for Student Admission Inquiries',
      'Mass Exam Schedule & Result SMS Alerts',
      'Virtual Toll-Free Helpline for Campus Enquiries',
    ],
    stat: '4.2k+',
    statLabel: 'Daily Admissions Handled per AI Agent',
  },
  {
    id: 'realestate',
    title: 'Real Estate & Infrastructure',
    industry: 'Real Estate',
    icon: 'Building',
    description:
      'Virtual number tracking for ad campaigns, click-to-call site visit scheduling, and WhatsApp property brochures.',
    useCases: [
      'Virtual Number Call Tracking for Billboard & Digital Ads',
      'WhatsApp Automated Property Floorplan & Price Sheet Bot',
      'Outbound Voice Call Campaign for New Project Launch',
    ],
    stat: '85%',
    statLabel: 'Faster Site Visit Bookings',
  },
];

export const API_ENDPOINTS: ApiEndpoint[] = [
  {
    id: 'send-sms',
    title: 'Send Bulk SMS / OTP',
    method: 'POST',
    path: '/api/v1/sms/send',
    description: 'Trigger promotional, transactional, or 2FA OTP messages instantly with DLT template validation.',
    curlExample: `curl -X POST "https://api.sarv.com/api/v1/sms/send" \\
  -H "Authorization: Bearer SARV_API_KEY_9921" \\
  -H "Content-Type: application/json" \\
  -d '{
    "sender_id": "SARVSMS",
    "dlt_template_id": "1007192830",
    "mobile": "+1234567890",
    "message": "Your Sarv verification code is 849201. Valid for 10 mins.",
    "is_otp": true
  }'`,
    nodeExample: `const response = await fetch("https://api.sarv.com/api/v1/sms/send", {
  method: "POST",
  headers: {
    "Authorization": "Bearer SARV_API_KEY_9921",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    sender_id: "SARVSMS",
    dlt_template_id: "1007192830",
    mobile: "+1234567890",
    message: "Your Sarv verification code is 849201. Valid for 10 mins.",
    is_otp: true
  })
});
const data = await response.json();`,
    pythonExample: `import requests

url = "https://api.sarv.com/api/v1/sms/send"
headers = {
    "Authorization": "Bearer SARV_API_KEY_9921",
    "Content-Type": "application/json"
}
payload = {
    "sender_id": "SARVSMS",
    "dlt_template_id": "1007192830",
    "mobile": "+1234567890",
    "message": "Your Sarv verification code is 849201. Valid for 10 mins.",
    "is_otp": True
}
response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
  },
  {
    id: 'ai-call-dispatch',
    title: 'Dispatch AI Voice Call',
    method: 'POST',
    path: '/api/v1/voice/ai-dispatch',
    description: 'Initiate an automated AI Voice Agent call to a target customer phone number.',
    curlExample: `curl -X POST "https://api.sarv.com/api/v1/voice/ai-dispatch" \\
  -H "Authorization: Bearer SARV_API_KEY_9921" \\
  -H "Content-Type: application/json" \\
  -d '{
    "virtual_number": "+18005550199",
    "customer_phone": "+1987654321",
    "agent_persona": "appointment_scheduler",
    "variables": { "customer_name": "Alex", "doctor": "Dr. Sarah" }
  }'`,
    nodeExample: `const response = await fetch("https://api.sarv.com/api/v1/voice/ai-dispatch", {
  method: "POST",
  headers: {
    "Authorization": "Bearer SARV_API_KEY_9921",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    virtual_number: "+18005550199",
    customer_phone: "+1987654321",
    agent_persona: "appointment_scheduler",
    variables: { customer_name: "Alex", doctor: "Dr. Sarah" }
  })
});`,
    pythonExample: `payload = {
    "virtual_number": "+18005550199",
    "customer_phone": "+1987654321",
    "agent_persona": "appointment_scheduler"
}
response = requests.post("https://api.sarv.com/api/v1/voice/ai-dispatch", json=payload)`,
  },
  {
    id: 'whatsapp-message',
    title: 'Send WhatsApp Template',
    method: 'POST',
    path: '/api/v1/whatsapp/send-template',
    description: 'Send approved WhatsApp interactive template messages with dynamic parameters.',
    curlExample: `curl -X POST "https://api.sarv.com/api/v1/whatsapp/send-template" \\
  -H "Authorization: Bearer SARV_API_KEY_9921" \\
  -H "Content-Type: application/json" \\
  -d '{
    "phone": "+1234567890",
    "template_name": "order_shipped_v2",
    "language": "en",
    "parameters": ["Alex", "ORD-98214", "FedEx"]
  }'`,
    nodeExample: `const data = await sendWhatsAppTemplate({
  phone: "+1234567890",
  templateName: "order_shipped_v2",
  params: ["Alex", "ORD-98214", "FedEx"]
});`,
    pythonExample: `response = requests.post("https://api.sarv.com/api/v1/whatsapp/send-template", json={
    "phone": "+1234567890",
    "template_name": "order_shipped_v2",
    "parameters": ["Alex", "ORD-98214", "FedEx"]
})`,
  },
];

export const SAMPLE_SMS_TEMPLATES: SmsTemplate[] = [
  {
    id: 'tpl-1',
    name: '2FA Security Verification OTP',
    dltId: 'DLT-10029384',
    category: 'Service Implicit',
    text: 'Your Sarv account OTP is {#var#}. Do not share this OTP with anyone for security purposes.',
  },
  {
    id: 'tpl-2',
    name: 'E-Commerce Order Dispatch Update',
    dltId: 'DLT-10088219',
    category: 'Transactional',
    text: 'Dear {#var#}, your order {#var#} has been shipped via Sarv Express. Track status here: {#var#}',
  },
  {
    id: 'tpl-3',
    name: 'Special Promotional Discount Offer',
    dltId: 'DLT-10099411',
    category: 'Promotional',
    text: 'Exclusive Sarv Festival Offer! Get up to 40% OFF on all cloud telephony packages. Use code SARV40. T&C apply.',
  },
];

export const INITIAL_IVR_NODES: IvrNode[] = [
  {
    id: 'node-root',
    key: 'Welcome',
    title: 'Main Welcome Menu',
    prompt: 'Thank you for calling Sarv Cloud Communications. Please choose an option.',
    actionType: 'SUBMENU',
  },
  {
    id: 'node-1',
    key: '1',
    title: 'Sales & Enterprise Demo',
    prompt: 'Connecting you to Sarv Enterprise Sales team supported by Sarv AI Copilot.',
    actionType: 'TRANSFER',
    targetDepartment: 'Sales Team',
  },
  {
    id: 'node-2',
    key: '2',
    title: 'Technical Support & API',
    prompt: 'Connecting to Technical Engineering and Developer API Support.',
    actionType: 'TRANSFER',
    targetDepartment: 'API Support',
  },
  {
    id: 'node-3',
    key: '3',
    title: 'Check SMS Balance',
    prompt: 'Your active Sarv SMS credit balance is 45,280 credits.',
    actionType: 'INFO',
  },
  {
    id: 'node-9',
    key: '9',
    title: 'Sarv CX-AI Virtual Agent',
    prompt: 'Connecting directly to Sarv CX-AI Generative Voice Agent.',
    actionType: 'AI_AGENT',
  },
];
