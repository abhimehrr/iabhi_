"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  BrainCircuit,
  CloudCog,
  Database,
  Globe,
  ServerCog
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SkillBadge } from "@/components/ui/SkillBadge";

export interface SkillsProps {}

interface SkillCategory {
  title: string;
  icon: typeof ServerCog;
  items: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend",
    icon: ServerCog,
    items: ["NestJS", "Node.js", "Fastify", "Express"]
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
  },
  {
    title: "Infrastructure",
    icon: CloudCog,
    items: ["Docker", "AWS", "BullMQ", "Redis"]
  },
  {
    title: "Frontend",
    icon: Globe,
    items: ["Next.js", "React", "TypeScript"]
  },
  {
    title: "AI / Integrations",
    icon: BrainCircuit,
    items: ["Gemini", "Azure AI", "D-ID", "WebRTC", "Socket.IO"]
  }
];

export function Skills(_props: SkillsProps): React.JSX.Element {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="section-shell">
        <ScrollReveal>
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-heading">What I work with</h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-panel edge-glow rounded-2xl p-6"
            >
              <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
                <category.icon className="h-4 w-4 text-highlight" />
                <h3 className="font-medium text-primary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <SkillBadge key={`${category.title}-${item}`} label={item} icon={Boxes} />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
