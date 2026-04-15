import { DotIcon } from "lucide-react";

export interface FooterProps {}

export function Footer(_props: FooterProps): React.JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 text-center border-t border-border">
      <p className="text-sm text-muted flex items-center justify-center gap-2">
        <span>© {year}</span>
        <span className="font-medium text-accent-orange">Abhishek</span>
        <DotIcon className="size-4" />
        <span>Shipping systems, not just code</span>
      </p>
    </footer>
  );
}
