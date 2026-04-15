export interface TechLayer {
  layer: string;
  items: readonly string[];
}

export const TECH_LAYERS: readonly TechLayer[] = [
  {
    layer: "Languages",
    items: ["TypeScript", "JavaScript"],
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
    layer: "Systems",
    items: [
      "Redis",
      "BullMQ",
      "WebSockets",
      "WebRTC",
      "Docker",
      "AWS",
      "Media Processing",
    ],
  },
  {
    layer: "Integrations",
    items: ["Gemini AI", "Azure AI", "D-ID", "Razorpay"],
  },
] as const;
