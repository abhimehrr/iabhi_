import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export interface ContactProps {}

interface ContactItem {
  label: string;
  href: string;
  display: string;
}

const CONTACT_ITEMS: readonly ContactItem[] = [
  {
    label: "Have a hard problem?",
    href: "mailto:abhias.dev@gmail.com",
    display: "abhias.dev@gmail.com",
  },
  {
    label: "Connect",
    href: "https://linkedin.com/in/AbhiMehrr",
    display: "linkedin.com/in/AbhiMehrr",
  },
];

export function Contact(_props: ContactProps): React.JSX.Element {
  return (
    <section id="contact" className="section-space pb-10">
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
