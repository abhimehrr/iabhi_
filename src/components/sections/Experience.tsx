import { AnimateIn } from "@/components/ui/AnimateIn";

export interface ExperienceProps {}

const BACKEND_STACK = [
  "Node.js",
  "NestJS",
  "Express.js",
  "Fastify",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "BullMQ",
] as const;
const FRONTEND_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
] as const;

export function Experience(_props: ExperienceProps): React.JSX.Element {
  return (
    <section id="experience" className="section-space">
      <div className="page-shell">
        <p className="section-label">Experience</p>
        <h2 className="section-heading">Where I&apos;ve worked</h2>

        <div className="mt-10 md:mt-14">
          <AnimateIn>
            <article className="relative grid gap-4 md:grid-cols-[200px_1fr] md:gap-12">
              <div className="relative">
                <div className="sticky top-24">
                  <p className="text-[13px] font-medium text-muted">
                    March 2024 - Present
                  </p>
                </div>
              </div>

              <div className="relative pb-12 md:pb-16">
                {/* <div className="absolute -left-6 top-1.5 hidden h-3 w-3 rounded-full border-2 border-accent-orange bg-surface md:block" />
                <div className="absolute -left-[17px] top-5 hidden h-full w-px bg-border md:block" /> */}

                <div>
                  <h3 className="text-[22px] font-medium tracking-[-0.02em] text-primary md:text-[24px]">
                    Mithila Stack
                  </h3>
                  <p className="mt-1 text-[15px] font-medium text-accent-orange">
                    Backend Engineer
                  </p>

                  <div className="mt-6 space-y-4 text-[15px] leading-7 text-secondary">
                    <p>
                      Working on the backend of multiple production systems
                      across different domains — hiring-tech, healthtech,
                      edtech, and food-tech.
                    </p>
                    <p>
                      Built and shipped four products from scratch — Meleys (AI
                      interview and assessment platform), MARS (medication
                      adherence platform with AI-driven patient follow-ups),
                      iPariksha (online examination system with automated
                      evaluation), and Foodam (a city-level tiffin and food
                      ordering service). Owned the backend end to end on all of
                      them — API design, database, async workflows, third-party
                      integrations, and deployment.
                    </p>
                    <p>
                      Day to day I work with Node.js, NestJS, Express.js,
                      Fastify, PostgreSQL, MongoDB, Redis, and BullMQ. Most of
                      the work has involved real-time systems, background job
                      processing, and integrating AI services into practical
                      workflows.
                    </p>
                  </div>

                  <div className="mt-8 space-y-5">
                    <div>
                      <p className="text-[13px] font-medium uppercase tracking-wider text-muted">
                        Backend
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {BACKEND_STACK.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-border bg-surface px-3 py-1.5 text-[13px] text-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[13px] font-medium uppercase tracking-wider text-muted">
                        Frontend
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {FRONTEND_STACK.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-accent-orange/40 bg-accent-orange/10 px-3 py-1.5 text-[13px] font-medium text-accent-orange"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
