import type { LucideIcon } from "lucide-react";

export interface SkillBadgeProps {
  label: string;
  icon: LucideIcon;
}

export function SkillBadge({ label, icon: Icon }: SkillBadgeProps): React.JSX.Element {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-soft px-3 py-1.5 text-sm text-primary transition-colors hover:border-highlight/60">
      <Icon className="h-3.5 w-3.5 text-highlight/80" />
      {label}
    </span>
  );
}
