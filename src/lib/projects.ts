export interface ProjectItem {
  id: "01" | "02" | "03" | "04";
  name: string;
  category: "EdTech" | "Healthcare" | "FoodTech" | "Hiring-Tech";
  url: string;
  summary: string;
  challenge: string;
  tech: string[];
}

export const PROJECTS: readonly ProjectItem[] = [
  {
    id: "01",
    name: "Meleys",
    category: "Hiring-Tech",
    url: "https://meleys.in",
    summary:
      "An AI-powered interview and evaluation platform with real-time proctoring. Handles candidate screening, live interviews, and automated scoring against role-specific criteria.",
    challenge:
      "Built a real-time interview system with event-driven architecture for low-latency activity capture. The scoring engine evaluates candidates against custom criteria per role, and the system handles multiple concurrent sessions without performance drops.",
    tech: ["NestJS", "PostgreSQL", "Redis", "BullMQ", "WebRTC", "Gemini AI"],
  },
  {
    id: "02",
    name: "MARS",
    category: "Healthcare",
    url: "https://mars.ai-clinic.tech",
    summary:
      "A medication adherence platform that automates patient reminders with AI-generated video calls. A custom doctor avatar delivers medication reminders, states precautions, and handles follow-ups - fully automated end to end.",
    challenge:
      "Built background processing for time-based, retry-safe task execution at scale. The AI agent system generates personalized video calls using D-ID and Azure AI. Deployed with isolated services, role-based access control, and secure handling of sensitive healthcare data.",
    tech: [
      "Node.js",
      "MongoDB",
      "Azure AI",
      "D-ID",
      "FFmpeg",
      "Docker",
      "BullMQ",
    ],
  },
  {
    id: "03",
    name: "iPariksha",
    category: "EdTech",
    url: "https://ipariksha.com",
    summary:
      "An examination platform for conducting large-scale online tests with automated evaluation. Handles test creation, submission processing, result generation, and integrated payment flows.",
    challenge:
      "Designed backend systems for large-scale examinations. Structured workflows for test creation, submission handling, and result generation. Integrated Razorpay payment and payout flow into the core system while maintaining reliability and enforcing clear role boundaries.",
    tech: ["NestJS", "PostgreSQL", "Redis", "BullMQ", "Razorpay"],
  },
  {
    id: "04",
    name: "TiffinDost",
    category: "FoodTech",
    url: "",
    summary:
      "A meal subscription aggregator connecting users to local kitchens for daily tiffin delivery. Handles subscription management, kitchen partnerships, and delivery coordination.",
    challenge:
      "Subscription logic is deceptively tricky. Pause, resume, skip, swap kitchen - all without breaking billing state. Built with a small team and shipped to production in weeks.",
    tech: ["TypeScript", "MySQL", "Redis", "AWS EC2", "WebSockets"],
  },
] as const;
