import { ProjectRow } from "@/components/ui/ProjectRow";
import { PROJECTS } from "@/lib/projects";

export interface WorkProps {}

export function Work(_props: WorkProps): React.JSX.Element {
  return (
    <section id="work" className="section-space">
      <div className="page-shell">
        <p className="section-label">Selected work</p>
        <h2 className="section-heading">Platforms I&apos;ve built. All in production.</h2>

        <div className="mt-8 md:mt-10">
          {PROJECTS.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
