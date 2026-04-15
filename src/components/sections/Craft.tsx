import { AnimateIn } from "@/components/ui/AnimateIn";
import { CraftCard } from "@/components/ui/CraftCard";
import { TECH_LAYERS } from "@/lib/techs";

export interface CraftProps {}

const CRAFT_POINTS = [
  {
    title: "Things break, plan for it",
    body: "Queues have retries. Tasks have fallbacks. Auth has layers. I build assuming something will go wrong, because in production, it usually does."
  },
  {
    title: "Get the data model right first",
    body: "Schema decisions shape everything else. I spend time on data models before writing routes - fixing a bad schema later costs way more."
  },
  {
    title: "Ship it, then make it better",
    body: "A working system teaches you more than a design doc. I get something real out fast, then improve based on what actually happens."
  }
] as const;

export function Craft(_props: CraftProps): React.JSX.Element {
  return (
    <section id="craft" className="section-space">
      <div className="page-shell">
        <p className="section-label">How I work</p>
        <h2 className="section-heading">
          Backend engineering is about decisions, not just code.
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {CRAFT_POINTS.map((point, index) => (
            <CraftCard key={point.title} title={point.title} body={point.body} delay={index * 0.08} />
          ))}
        </div>

        <AnimateIn className="mt-14">
          <div className="space-y-4 border-t border-border pt-8">
            {TECH_LAYERS.map((layer) => (
              <p key={layer.layer} className="text-[15px] leading-7 text-secondary">
                <span className="font-medium text-primary">{layer.layer}: </span>
                <span className="font-normal">{layer.items.join(", ")}</span>
              </p>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
