"use client";

import { motion } from "framer-motion";
import { useShouldAnimate } from "@/components/ui/AnimateIn";

export interface HeroProps {}

const SKILLS = ["NestJS", "Next.js", "PostgreSQL", "MongoDB", "Redis", "Queues"] as const;

export function Hero(_props: HeroProps): React.JSX.Element {
  const shouldAnimate = useShouldAnimate();
  const animationKey = shouldAnimate ? "animated" : "static";

  return (
    <section id="top" className="page-shell flex min-h-screen items-center pt-20">
      <div className="max-w-[900px]">
        <motion.p
          key={`hero-name-${animationKey}`}
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={
            shouldAnimate ? { duration: 0.45, ease: "easeOut", delay: 0 } : undefined
          }
          className="text-[15px] font-medium tracking-wide text-secondary"
        >
          Abhishek
        </motion.p>

        <motion.h1
          key={`hero-title-${animationKey}`}
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={
            shouldAnimate ? { duration: 0.45, ease: "easeOut", delay: 0.08 } : undefined
          }
          className="mt-2 text-[44px] leading-[1.02] font-bold tracking-[-0.04em] text-primary md:text-[72px]"
        >
          Backend{" "}
          <span className="relative inline-block font-serif text-accent-dark">
            Engineer
            <svg
              viewBox="0 0 238 20"
              className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full"
              aria-hidden
            >
              <motion.path
                d="M3 14 C45 4, 95 20, 145 12 C175 8, 205 9, 235 11"
                fill="none"
                className="stroke-accent-orange"
                strokeWidth="3"
                strokeLinecap="round"
                initial={
                  shouldAnimate
                    ? { pathLength: 0, opacity: 1 }
                    : { pathLength: 1, opacity: 1 }
                }
                animate={
                  shouldAnimate ? { pathLength: 1, opacity: 1 } : { pathLength: 1 }
                }
                transition={
                  shouldAnimate
                    ? { duration: 0.6, ease: "easeOut", delay: 0.4 }
                    : undefined
                }
              />
            </svg>
          </span>
        </motion.h1>

        <motion.div
          key={`hero-skills-${animationKey}`}
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={
            shouldAnimate ? { duration: 0.45, ease: "easeOut", delay: 0.16 } : undefined
          }
          className="mt-6 flex flex-wrap gap-2"
        >
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-[13px] font-medium text-secondary"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.p
          key={`hero-body-${animationKey}`}
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={
            shouldAnimate ? { duration: 0.45, ease: "easeOut", delay: 0.24 } : undefined
          }
          className="mt-8 max-w-[760px] text-[17px] leading-8 font-light text-secondary"
        >
          2+ years building real-time systems, AI-integrated backends, and async workflows.
          Most of what I&apos;ve built has gone into production and stayed there.
        </motion.p>

        <motion.p
          key={`hero-proof-${animationKey}`}
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={
            shouldAnimate ? { duration: 0.45, ease: "easeOut", delay: 0.36 } : undefined
          }
          className="mt-8 text-[13px] font-medium text-secondary"
        >
          Platforms in production <span className="px-2 text-muted">·</span>
          Healthcare <span className="px-2 text-muted">·</span>
          EdTech <span className="px-2 text-muted">·</span>
          Hiring-Tech <span className="px-2 text-muted">·</span>
          Mithila Stack
        </motion.p>
      </div>
    </section>
  );
}
