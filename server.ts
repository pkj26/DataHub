import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client server-side
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health Check API
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "Sarv Cloud Communications Backend",
    aiEnabled: !!ai,
    timestamp: new Date().toISOString(),
  });
});

// Mobile Database Lookup & Lookup Verification API
app.post("/api/mobile-database/verify-number", (req, res) => {
  const { phoneNumber } = req.body;
  const cleaned = (phoneNumber || "").replace(/\D/g, "");
  
  const operators = ["Reliance Jio", "Bharti Airtel", "Vodafone Idea (Vi)", "BSNL"];
  const circles = ["Maharashtra & Goa", "Delhi NCR", "Karnataka", "Telangana & AP", "Gujarat", "Tamil Nadu", "West Bengal"];
  
  const randomOp = operators[Math.floor(Math.random() * operators.length)];
  const randomCircle = circles[Math.floor(Math.random() * circles.length)];
  
  res.json({
    phoneNumber: phoneNumber || "+91 98210 48291",
    operator: randomOp,
    circleState: randomCircle,
    isWhatsAppActive: true,
    dndStatus: Math.random() > 0.2 ? "Non-DND" : "DND",
    validityScore: Math.floor(92 + Math.random() * 8),
    lineType: "Mobile",
    lastActive: "Today",
    dltRegistered: true,
  });
});

// CSV Sample Data Exporter Endpoint
app.get("/api/mobile-database/download-sample", (req, res) => {
  const category = req.query.category || "All_India_B2B";
  const csvHeaders = "ID,Name,Mobile_Number,City,State,Category,WhatsApp_Status,DND_Status,Verified_Date\n";
  const rows = [
    `101,Rajesh Sharma,+91-98210XXXXX,Mumbai,Maharashtra,${category},Active,Non-DND,2026-08-01`,
    `102,Priya Verma,+91-98101XXXXX,Gurgaon,Delhi NCR,${category},Active,Non-DND,2026-08-02`,
    `103,Dr. Ankit Mehta,+91-98450XXXXX,Bengaluru,Karnataka,${category},Active,Non-DND,2026-08-03`,
    `104,Vikramaditya Rao,+91-99002XXXXX,Hyderabad,Telangana,${category},Active,Non-DND,2026-08-04`,
    `105,Sneha Patel,+91-98251XXXXX,Ahmedabad,Gujarat,${category},Active,Non-DND,2026-08-05`,
  ].join("\n");

  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", `attachment; filename="Sarv_Sample_Mobile_Database_${category}.csv"`);
  res.status(200).send(csvHeaders + rows);
});

// AI Agent Voice & Chat Endpoint for Sarv CX-AI Contact Center Simulator
app.post("/api/ai-agent", async (req, res) => {
  try {
    const { prompt, persona, conversationHistory } = req.body;

    if (!ai) {
      // Fallback response if GEMINI_API_KEY is not set or pending
      return res.json({
        reply: "Welcome to Sarv CX-AI Contact Center! I am your AI Virtual Assistant. How may I assist you with your cloud communications, bulk SMS, or voice services today?",
        sentiment: "positive",
        intent: "general_inquiry",
        suggestedActions: ["Check SMS Pricing", "Book Telephony Demo", "Speak to Sales Agent"],
        suggestedAgentAssist: "Customer is asking about platform capabilities. Offer a personalized onboarding call.",
      });
    }

    const systemPrompt = `You are Sarv CX-AI, an intelligent enterprise contact center voice/chat agent representing Sarv.com (A leading Cloud Communications & CPaaS platform offering DeepCall Cloud Telephony, Bulk SMS/RCS, WhatsApp Business API, and AI Contact Center solutions).
Your persona setting: ${persona || "helpful_support"}.

Instructions:
1. Respond professionally, concisely, and naturally as a top-tier customer experience AI agent.
2. Keep the response suitable for spoken output or chat (2-4 sentences max).
3. Always respond in JSON format with the following fields:
   - "reply": text response to the user
   - "sentiment": "positive" | "neutral" | "urgent" | "frustrated"
   - "intent": detected user intention (e.g., "pricing_inquiry", "technical_support", "campaign_setup", "order_status", "general_inquiry")
   - "suggestedActions": array of 2-3 quick button options for the user
   - "suggestedAgentAssist": internal recommendation for a human agent watching the live transcript.
`;

    const contents = [];
    if (conversationHistory && Array.isArray(conversationHistory)) {
      for (const msg of conversationHistory) {
        contents.push(`${msg.role === "user" ? "User" : "Agent"}: ${msg.content}`);
      }
    }
    contents.push(`User: ${prompt}`);

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: contents.join("\n"),
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text || "{}";
    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch {
      parsedData = {
        reply: responseText,
        sentiment: "neutral",
        intent: "general_inquiry",
        suggestedActions: ["Explore Solutions", "Contact Sales"],
        suggestedAgentAssist: "Standard inquiry detected.",
      };
    }

    return res.json(parsedData);
  } catch (error: any) {
    console.error("Error in AI Agent API:", error);
    return res.status(500).json({
      error: "Failed to generate AI agent response",
      details: error?.message || "Unknown error",
      reply: "Thank you for reaching out to Sarv.com AI Support. I am processing your inquiry regarding our Cloud Communication services.",
      sentiment: "neutral",
      intent: "general_inquiry",
      suggestedActions: ["Retry Request", "View Pricing"],
      suggestedAgentAssist: "API connection retried. Offer fallback phone assistance.",
    });
  }
});

// Bulk SMS & RCS Simulation API Endpoint
app.post("/api/sms-campaign", (req, res) => {
  const { senderId, templateId, message, recipientsCount, isRcs } = req.body;
  const count = parseInt(recipientsCount) || 1000;
  const creditsRequired = count * (isRcs ? 2 : 1);
  const costPerUnit = isRcs ? 0.25 : 0.12;
  const totalCost = (count * costPerUnit).toFixed(2);

  res.json({
    status: "QUEUED",
    campaignId: `SARV-CMP-${Math.floor(100000 + Math.random() * 900000)}`,
    senderId: senderId || "SARVSMS",
    templateId: templateId || "DLT-10029384",
    recipientsCount: count,
    creditsUsed: creditsRequired,
    estimatedCost: totalCost,
    estimatedDeliveryRate: "99.8%",
    dltStatus: "APPROVED",
    scheduledAt: new Date().toISOString(),
  });
});

// IVR Keypress Tester Endpoint
app.post("/api/ivr-simulate", (req, res) => {
  const { dtmfKey, currentStep } = req.body;

  const ivrMenu: Record<string, { prompt: string; action: string; nextOptions?: string[] }> = {
    "1": {
      prompt: "Connecting you to Sarv Enterprise Sales. All our agents are currently assisted by Sarv AI Copilot.",
      action: "TRANSFER_SALES",
    },
    "2": {
      prompt: "For Technical Support and API Integration, please hold while we verify your Sarv account credentials.",
      action: "TRANSFER_TECH_SUPPORT",
    },
    "3": {
      prompt: "Your account balance for Sarv Bulk SMS is 45,280 credits. To top up immediately, press 1.",
      action: "ACCOUNT_INFO",
      nextOptions: ["1: Recharge", "0: Main Menu"],
    },
    "9": {
      prompt: "Sarv CX-AI Agent is active. Speak your query after the tone.",
      action: "AI_AGENT_HANDOVER",
    },
  };

  const selected = ivrMenu[dtmfKey] || {
    prompt: "Invalid key press. Please select 1 for Sales, 2 for Technical Support, 3 for Billing, or 9 for AI Agent.",
    action: "INVALID_INPUT",
  };

  res.json({
    dtmfKey,
    responsePrompt: selected.prompt,
    action: selected.action,
    nextOptions: selected.nextOptions || ["1: Sales", "2: Tech Support", "3: Billing", "9: AI Agent"],
  });
});

// Setup Vite Dev Server / Static Production Server
async function main() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Sarv.com Cloud Communications server listening on http://0.0.0.0:${PORT}`);
  });
}

main().catch((err) => {
  console.error("Failed to start server:", err);
});
