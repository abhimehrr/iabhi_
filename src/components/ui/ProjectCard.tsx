"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  href: string;
  featured?: boolean;
  metrics?: string;
}

export function ProjectCard({
  title,
  description,
  highlights,
  href,
  featured = false,
  metrics
}: ProjectCardProps): React.JSX.Element {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${title} project details`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`group glass-panel edge-glow relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-highlight/70 hover:shadow-[0_0_36px_rgba(99,102,241,0.18)] md:p-7 ${featured ? "md:col-span-2" : ""}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(113,113,122,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(113,113,122,0.13)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-highlight/12 via-transparent to-transparent" />
      </div>
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-highlight/20 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />

      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
              Case Study
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-primary">
              {title}
            </h3>
            <p className="mt-3 max-w-[52ch] text-sm leading-7 text-primary/80">
              {description}
            </p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-primary" />
        </div>
        {metrics ? (
          <p className="mb-4 font-mono text-xs text-highlight">{metrics}</p>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-border bg-surface-soft px-3 py-1 text-xs font-medium text-primary"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
