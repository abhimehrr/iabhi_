export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectItem {
  id: "01" | "02" | "03" | "04" | "05";
  name: string;
  category: "EdTech" | "Healthcare" | "FoodTech" | "Hiring-Tech";
  url: string;
  summary: string;
  metrics?: ProjectMetric[];
  challenge: string;
  tech: string[];
}

export const PROJECTS: readonly ProjectItem[] = [
  {
    id: "01",
    name: "Meleys",
    category: "Hiring-Tech",
    url: "https://meleys.ai",
    summary:
      "An AI-powered interview and evaluation platform with real-time proctoring. Handles candidate screening, live interviews, and automated scoring against role-specific criteria.",
    metrics: [
      { value: "2,500+", label: "interviews across 1,000+ candidates" },
      { value: "100-150", label: "concurrent live sessions" },
      { value: "~40-50ms", label: "event capture latency" },
      { value: "~85%", label: "AI scoring accuracy" },
    ],
    challenge:
      "Built a real-time interview system with event-driven architecture for low-latency activity capture. The scoring engine evaluates candidates against custom criteria per role, and the system handles multiple concurrent sessions without performance drops.",
    tech: ["NestJS", "PostgreSQL", "Redis", "BullMQ", "WebRTC", "Gemini AI"],
  },
  {
    id: "02",
    name: "AI Clinic",
    category: "Healthcare",
    url: "https://ai-clinic.tech",
    summary:
      "India's default medication adherence platform with multiple AI agents working 24/7. Built multiple real-time conversational agents on LiveKit that connect hospitals with patients after surgery or discharge - monitoring recovery, delivering care instructions, and managing medication schedules. Integrated with MARS system to support hospital internal operations.",
    challenge:
      "Architected a multi-agent system on LiveKit for real-time patient engagement across multiple hospitals. Each agent handles specific care moments: pre-surgery prep, medication adherence, post-surgery monitoring, prescription fulfillment, and appointment management. Hospitals can choose from multiple intervention agents based on patient needs. Integrated WhatsApp API to deliver AI doctor avatar videos for medication reminders. Built event-driven workflows with Python and Node.js for intelligent nudges. Seamlessly integrated with MARS (hospital management system) to unify patient engagement with internal workflows.",
    tech: [
      "Node.js",
      "Python",
      "LiveKit",
      "MongoDB",
      "Azure AI",
      "D-ID",
      "WhatsApp API",
      "Docker",
      "Jenkins",
      "AWS",
      "BullMQ",
    ],
  },
  {
    id: "03",
    name: "MARS",
    category: "Healthcare",
    url: "https://mars.ai-clinic.tech",
    summary:
      "Medication Adherence & Reminder System - A comprehensive hospital management platform with AI-powered patient engagement. Handles OPD operations, daily appointments, prescription management, and automated patient reminders through customizable AI agents.",
    metrics: [
      { value: "2,000+", label: "patients on WhatsApp reminders" },
      { value: "25,000+", label: "reminders sent every month" },
      { value: "90%", label: "delivery success" },
      { value: "~50%", label: "better on-time medication adherence" },
    ],
    challenge:
      "Built a complete hospital management system with OPD module supporting daily appointment scheduling, prescription creation and management, and patient records. Implemented background processing for time-based, retry-safe task execution at scale. Developed an AI agent system where hospitals can select from multiple intervention agents for post-discharge patient follow-up, medication awareness, and care instruction delivery. The customized doctor avatar calls patients, delivers medication reminders with precautions, and handles follow-ups - fully automated end to end. Enforced role-based access control and secure handling of sensitive healthcare data with isolated services and scalable storage.",
    tech: [
      "Node.js",
      "MongoDB",
      "Azure AI",
      "D-ID",
      "FFmpeg",
      "Docker",
      "BullMQ",
      "Redis",
    ],
  },
  {
    id: "04",
    name: "iPariksha",
    category: "EdTech",
    url: "https://ipariksha.com",
    summary:
      "An examination platform for conducting large-scale online tests with automated evaluation. Handles test creation, submission processing, result generation, and integrated payment flows.",
    metrics: [
      { value: "1,500+", label: "exams conducted" },
      { value: "5,000+", label: "candidates" },
      { value: "5-15 min", label: "from submission to results" },
    ],
    challenge:
      "Designed backend systems for large-scale examinations. Structured workflows for test creation, submission handling, and result generation. Integrated Razorpay payment and payout flow into the core system while maintaining reliability and enforcing clear role boundaries.",
    tech: ["NestJS", "PostgreSQL", "Redis", "BullMQ", "Razorpay"],
  },
  {
    id: "05",
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
