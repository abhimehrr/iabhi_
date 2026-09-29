import { ExternalLink } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import type { ProjectItem } from "@/lib/projects";
import Link from "next/link";

export interface ProjectRowProps {
  project: ProjectItem;
  index: number;
}

export function ProjectRow({
  project,
  index,
}: ProjectRowProps): React.JSX.Element {
  return (
    <article className="grid gap-10 py-12 md:grid-cols-[minmax(0,30%)_minmax(0,70%)] md:gap-12 md:py-16">
      <AnimateIn x={-30} y={0} delay={0}>
        <div className="relative pl-2">
          <span className="pointer-events-none absolute -top-14 left-0 text-[92px] leading-none font-bold tracking-[-0.04em] text-border md:text-[120px]">
            {project.id}
          </span>
          <div className="relative z-10 pt-10">
            <h3 className="text-[24px] font-medium tracking-[-0.02em] text-primary">
              {project.name}
            </h3>
            <span className="mt-3 inline-flex rounded-full bg-surface border border-border px-3 py-1 text-[13px] font-medium text-secondary">
              {project.category}
            </span>
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 ml-2 inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-3 py-1 text-[13px] font-medium text-secondary hover:text-primary"
              >
                {project.url.replace("https://", "")}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </Link>
            )}
          </div>
        </div>
      </AnimateIn>

      <AnimateIn y={20} delay={0.08}>
        <div>
          <p className="text-[17px] leading-8 font-normal text-primary/80">
            {project.summary}
          </p>
          {project.metrics && project.metrics.length > 0 && (
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-border py-6 sm:grid-cols-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col-reverse justify-end">
                  <dt className="mt-2 text-[13px] leading-snug text-muted">
                    {metric.label}
                  </dt>
                  <dd className="text-[26px] leading-none font-medium tracking-[-0.03em] text-primary">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          <p className="mt-6 text-[15px] leading-7 font-normal text-secondary">
            {project.challenge}
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.tech.map((item) => (
              <span
                key={`${project.name}-${item}`}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-[13px] text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </AnimateIn>

      {index < 3 ? (
        <hr className="col-span-full border-border" aria-hidden />
      ) : null}
    </article>
  );
}
