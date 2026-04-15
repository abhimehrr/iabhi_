import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export interface ProjectsProps {}

interface ProjectItem {
  title: string;
  description: string;
  highlights: string[];
  href: string;
  featured?: boolean;
  metrics?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "iPariksha",
    description:
      "Built a robust AI-powered exam platform that handles concurrent sessions, secure evaluations, and real-time candidate workflows.",
    highlights: ["NestJS", "PostgreSQL", "Redis Streams", "WebRTC", "AWS"],
    href: "https://abhi.shre.in",
    featured: true,
    metrics: "Latency-critical real-time evaluation pipeline"
  },
  {
    title: "MARS",
    description:
      "Designed medication reminder systems and clinician APIs to improve patient adherence across asynchronous care loops.",
    highlights: ["Node.js", "MongoDB", "BullMQ", "Docker"],
    href: "https://abhi.shre.in",
    metrics: "Asynchronous reminder + monitoring workflows"
  },
  {
    title: "TiffinDost",
    description:
      "Engineered a delivery aggregator backend for vendor discovery, order routing, and status synchronization.",
    highlights: ["TypeScript", "MySQL", "Socket.IO", "AWS"],
    href: "https://abhi.shre.in",
    metrics: "Real-time order state orchestration"
  }
];

export function Projects(_props: ProjectsProps): React.JSX.Element {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-shell">
        <ScrollReveal>
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-heading">Things I&apos;ve built</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-primary/80">
            Product-facing backend systems built for uptime, traceability, and
            sustained feature velocity.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 auto-rows-[minmax(260px,auto)]">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.title} delay={0.06 + index * 0.06}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
