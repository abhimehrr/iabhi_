import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import {
  AUTHOR_EMAIL,
  AUTHOR_LINKEDIN,
  AUTHOR_PHONE,
  AUTHOR_PHONE_DISPLAY,
} from "@/lib/site";

export interface ContactLinksProps {
  /** Show the homepage "Send a message" link to /contact */
  includeFormLink?: boolean;
}

interface ContactItem {
  label: string;
  href: string;
  display: string;
  external?: boolean;
}

export function ContactLinks({
  includeFormLink = false,
}: ContactLinksProps): React.JSX.Element {
  const items: ContactItem[] = [
    {
      label: "Have a hard problem?",
      href: `mailto:${AUTHOR_EMAIL}`,
      display: AUTHOR_EMAIL,
    },
    {
      label: "Call",
      href: `tel:${AUTHOR_PHONE}`,
      display: AUTHOR_PHONE_DISPLAY,
    },
    {
      label: "Connect",
      href: AUTHOR_LINKEDIN,
      display: "linkedin.com/in/AbhiMehrr",
      external: true,
    },
  ];

  if (includeFormLink) {
    items.push({
      label: "Prefer a form?",
      href: "/contact",
      display: "Send a message",
    });
  }

  return (
    <div className="space-y-4 md:space-y-5">
      {items.map((item, index) => (
        <AnimateIn key={item.label} delay={index * 0.08}>
          {item.href.startsWith("/") ? (
            <Link
              href={item.href}
              className="group block transition-transform duration-200 hover:translate-x-1"
            >
              <ContactLine label={item.label} display={item.display} />
            </Link>
          ) : (
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="group block transition-transform duration-200 hover:translate-x-1"
            >
              <ContactLine label={item.label} display={item.display} />
            </a>
          )}
        </AnimateIn>
      ))}
    </div>
  );
}

function ContactLine({
  label,
  display,
}: {
  label: string;
  display: string;
}): React.JSX.Element {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[22px] font-normal leading-snug md:text-[28px]">
      <span className="text-muted">{label}</span>
      <ArrowRight className="size-5 text-accent-orange" aria-hidden />
      <span className="text-primary">{display}</span>
    </p>
  );
}
