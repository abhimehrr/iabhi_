import { ArrowRight, Plus } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SEO_CONFIG } from "@/lib/seo-config";
import { PAGE_METADATA } from "@/lib/seo-metadata";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  faqPageSchema,
} from "@/lib/seo-schema";

export const metadata = PAGE_METADATA.faq;

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
]);

const webPageSchema = buildWebPageSchema({
  path: "/faq",
  name: `Frequently Asked Questions | ${SEO_CONFIG.brand}`,
  description:
    "Common questions about working with Abhishek as a full stack engineer and project manager.",
});

export default function FAQPage(): React.JSX.Element {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Nav />
      <main>
        <section className="section-space">
          <div className="page-shell">
            <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-16">
              <div>
                <div className="md:sticky md:top-24">
                  <p className="section-label">FAQ</p>
                  <h1 className="section-heading">Questions, answered.</h1>
                  <p className="body-copy mt-5">
                    Everything you need to know about how I work and what I
                    build.
                  </p>
                </div>
              </div>

              <div className="border-t border-border">
                {SEO_CONFIG.faq.map((item, index) => (
                  <AnimateIn key={item.question} delay={index * 0.06}>
                    <details
                      className="group border-b border-border py-6"
                      open={index === 0}
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                        <h2 className="text-[18px] font-medium leading-snug tracking-[-0.01em] text-primary transition group-hover:text-accent-orange md:text-[20px]">
                          {item.question}
                        </h2>
                        <Plus
                          className="mt-1 size-5 shrink-0 text-accent-orange transition-transform duration-200 group-open:rotate-45"
                          aria-hidden
                        />
                      </summary>
                      <p className="mt-4 max-w-2xl text-[15px] leading-7 text-secondary">
                        {item.answer}
                      </p>
                    </details>
                  </AnimateIn>
                ))}

                <AnimateIn delay={SEO_CONFIG.faq.length * 0.06}>
                  <a
                    href={`mailto:${SEO_CONFIG.personal.email}`}
                    className="group mt-10 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-[18px] transition-transform duration-200 hover:translate-x-1 md:text-[22px]"
                  >
                    <span className="text-muted">Still have a question?</span>
                    <ArrowRight
                      className="size-5 text-accent-orange"
                      aria-hidden
                    />
                    <span className="text-primary">
                      {SEO_CONFIG.personal.email}
                    </span>
                  </a>
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
