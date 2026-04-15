import {
  Cloud,
  Container,
  Database,
  FileCode2,
  Server,
  Workflow
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { TerminalCard } from "@/components/ui/TerminalCard";

export interface AboutProps {}

const TECH_STACK: Array<{ label: string; icon: typeof Server }> = [
  { label: "Node.js", icon: Server },
  { label: "NestJS", icon: Workflow },
  { label: "TypeScript", icon: FileCode2 },
  { label: "PostgreSQL", icon: Database },
  { label: "MongoDB", icon: Database },
  { label: "Redis", icon: Database },
  { label: "Docker", icon: Container },
  { label: "AWS", icon: Cloud }
];

export function About(_props: AboutProps): React.JSX.Element {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-shell">
        <ScrollReveal>
          <p className="section-kicker">About</p>
          <h2 className="section-heading mt-3 max-w-3xl">
            I optimize backend systems for scale, correctness, and speed of
            iteration.
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <ScrollReveal>
            <div className="glass-panel edge-glow rounded-2xl p-6 md:p-8">
              <p className="mb-6 font-mono text-xs tracking-[0.15em] text-muted uppercase">
                Engineering Approach
              </p>
              <div className="space-y-6 text-base leading-8 text-primary/90">
                <p>
                  I design backend architecture for products where uptime, data
                  integrity, and response time are non-negotiable.
                </p>
                <p>
                  My work spans real-time interview systems, healthcare
                  workflows, and AI-integrated applications that depend on
                  reliable APIs and event-driven services.
                </p>
                <p>
                  I focus on clear domain boundaries, pragmatic scaling paths,
                  and operational simplicity so teams can ship quickly without
                  system debt.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.08}>
              <TerminalCard />
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div className="glass-panel edge-glow rounded-2xl p-6">
                <p className="font-mono text-xs tracking-[0.15em] text-muted uppercase">
                  Build Principles
                </p>
                <div className="mt-4 grid gap-3 text-sm text-primary/90 md:grid-cols-3">
                  <p className="rounded-lg border border-border bg-surface-soft p-3">
                    Contract-first API boundaries
                  </p>
                  <p className="rounded-lg border border-border bg-surface-soft p-3">
                    Observability before scale
                  </p>
                  <p className="rounded-lg border border-border bg-surface-soft p-3">
                    Fast rollback and safe deploys
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.15} className="mt-10">
          <div className="glass-panel edge-glow rounded-2xl p-5 md:p-6">
            <p className="mb-4 font-mono text-xs tracking-[0.15em] text-muted uppercase">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {TECH_STACK.map((tech) => (
                <SkillBadge key={tech.label} label={tech.label} icon={tech.icon} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
