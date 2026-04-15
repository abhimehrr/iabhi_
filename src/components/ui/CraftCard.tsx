import { AnimateIn } from "@/components/ui/AnimateIn";

export interface CraftCardProps {
  title: string;
  body: string;
  delay?: number;
}

export function CraftCard({ title, body, delay = 0 }: CraftCardProps): React.JSX.Element {
  return (
    <AnimateIn delay={delay}>
      <article className="pt-5">
        <div className="h-0.5 w-10 bg-accent-orange" aria-hidden />
        <h3 className="mt-4 text-[22px] font-medium tracking-[-0.02em] text-primary">{title}</h3>
        <p className="mt-4 text-[15px] leading-7 font-normal text-secondary">{body}</p>
      </article>
    </AnimateIn>
  );
}
