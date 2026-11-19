/**
 * Central SEO / brand config for Abhishek.
 * Single source of truth — consumed by metadata, schema, robots, sitemap, and llms.txt.
 */
export const SEO_CONFIG = {
  brand: "Abhishek",

  personal: {
    name: "Abhishek",
    headline: "Full Stack Engineer & Project Manager",
    email: "abhi@abhias.com",
    phone: "+917361092810",
    phoneDisplay: "+91 73610 92810",
    location: "India",
    url: "https://abhias.com",
    jobTitle: "Full Stack Engineer and Project Manager",
    worksFor: "Mithila Stack",
  },

  /** Transactional Mail Config */
  mail: {
    from: "Abhishek <null@abhias.com>",
    adminTo: "abhi@abhias.com",
  },

  social: {
    linkedin: "https://linkedin.com/in/AbhiMehrr",
  },

  site: {
    url: "https://abhias.com",
    name: "Abhishek Portfolio",
    title: "Abhishek | Full Stack Engineer & Project Manager",
    description:
      "Full Stack Engineer with 2.5+ years building real-time systems, AI-integrated backends, and async workflows across healthtech, hiring-tech, and edtech. Project Manager leading a 15-20 member team at Mithila Stack. View Meleys, MARS, and iPariksha.",
    ogImage: "https://abhias.com/opengraph-image",
    locale: "en_IN",
    keywords: [
      "Abhishek",
      "Abhishek Full Stack Engineer",
      "Abhishek Project Manager",
      "Full Stack Engineer",
      "Full Stack Developer",
      "Project Manager",
      "Backend Engineer",
      "AI Software Engineer",
      "Node.js Developer",
      "NestJS Developer",
      "Next.js Developer",
      "React Developer",
      "TypeScript Developer",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Docker",
      "AWS",
      "Jenkins CI/CD",
      "Gemini AI",
      "Azure AI",
      "D-ID",
      "AI Agent Workflows",
      "LiveKit",
      "WhatsApp API",
      "Meleys",
      "MARS",
      "iPariksha",
      "AI Clinic",
      "healthtech",
      "hiring-tech",
      "edtech",
      "Mithila Stack",
      "abhias.com",
    ],
  },

  /** Shared by FAQ page UI, FAQPage JSON-LD, and llms.txt */
  faq: [
    {
      question: "What do you specialize in as a full stack engineer?",
      answer:
        "I build production backends and the web apps that sit on top of them. Most of my work is real-time systems, AI-integrated backends, and async workflows — Node.js, NestJS, Next.js, PostgreSQL, MongoDB, Redis, and BullMQ. I've shipped platforms across healthtech, hiring-tech, and edtech.",
    },
    {
      question: "How do you use AI in the products you build?",
      answer:
        "I integrate AI where it solves a real product need, not as decoration. That includes Gemini and Azure AI for evaluation and conversation flows, D-ID for doctor avatar videos, LiveKit agents for patient follow-ups, and WhatsApp reminders. The focus is reliable workflows that run in production every day.",
    },
    {
      question: "What is your role as Project Manager at Mithila Stack?",
      answer:
        "I was promoted to Project Manager in July 2026 and still own backend architecture. I look after multiple projects at once and a team of 15–20 people — planning work, unblocking the team early, and keeping releases on track while staying close to the code.",
    },
    {
      question: "How do you handle deployment and infrastructure?",
      answer:
        "I deploy with Docker across AWS and VPS hosts, and use Jenkins CI/CD for automated releases. I've shipped and maintained 25+ full-stack apps and 10+ landing pages with that setup, aiming for zero-downtime releases when possible.",
    },
    {
      question: "Why should I hire you for a project?",
      answer:
        "I own systems end to end — API design, data models, queues, third-party integrations, and deployment. Platforms I've built, including Meleys, MARS, and iPariksha, are live and handling real users. If you need someone who can build and also keep a team moving, that's the work I do.",
    },
  ],
} as const;

export type SeoConfig = typeof SEO_CONFIG;
export type FaqItem = (typeof SEO_CONFIG.faq)[number];
