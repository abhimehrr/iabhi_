export interface TechLayer {
  layer: string;
  items: readonly string[];
}

export const TECH_LAYERS: readonly TechLayer[] = [
  {
    layer: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    layer: "Backend",
    items: ["Node.js", "NestJS", "Fastify", "Express.js"],
  },
  {
    layer: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    layer: "Frontend",
    items: ["Next.js"],
  },
  {
    layer: "DevOps & Cloud",
    items: [
      "Docker",
      "Jenkins",
      "AWS EC2",
      "AWS S3",
      "CI/CD",
      "Linux",
    ],
  },
  {
    layer: "Systems",
    items: [
      "Redis",
      "BullMQ",
      "WebSockets",
      "WebRTC",
      "LiveKit",
      "Media Processing",
    ],
  },
  {
    layer: "AI & ML",
    items: ["Gemini AI", "Azure AI", "D-ID", "OpenAI", "Machine Learning"],
  },
  {
    layer: "Integrations",
    items: ["WhatsApp API", "Razorpay", "FFmpeg"],
  },
] as const;
