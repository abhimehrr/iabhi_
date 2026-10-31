import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import {
  AUTHOR_EMAIL,
  AUTHOR_LINKEDIN,
  AUTHOR_PHONE,
  AUTHOR_PHONE_DISPLAY,
} from "@/lib/site";

export interface ContactProps {}

interface ContactItem {
  label: string;
  href: string;
  display: string;
}

const CONTACT_ITEMS: readonly ContactItem[] = [
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
  },
];

export function Contact(_props: ContactProps): React.JSX.Element {
  return (
    <section id="contact" className="section-space texture texture-rings pb-10">
      <div className="page-shell">
        <div className="space-y-4 md:space-y-5">
          {CONTACT_ITEMS.map((item, index) => (
            <AnimateIn key={item.label} delay={index * 0.08}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group block transition-transform duration-200 hover:translate-x-1"
              >
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[22px] font-normal leading-snug md:text-[28px]">
                  <span className="text-muted">{item.label}</span>
                  <ArrowRight
                    className="size-5 text-accent-orange"
                    aria-hidden
                  />
                  <span className="text-primary">{item.display}</span>
                </p>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
