import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactLinks } from "@/components/sections/ContactLinks";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SEO_CONFIG } from "@/lib/seo-config";
import { PAGE_METADATA } from "@/lib/seo-metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo-schema";

export const metadata = PAGE_METADATA.contact;

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

const webPageSchema = buildWebPageSchema({
  path: "/contact",
  name: `Contact | ${SEO_CONFIG.brand}`,
  description:
    "Send Abhishek a message about backend systems, AI integrations, or project collaboration.",
});

export default function ContactPage(): React.JSX.Element {
  return (
    <>
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
        <section className="section-space pt-28 md:pt-32">
          <div className="page-shell">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm text-secondary transition hover:text-primary"
            >
              <ArrowLeft
                className="size-4 transition-transform group-hover:-translate-x-0.5"
                aria-hidden
              />
              Back to home
            </Link>

            <AnimateIn>
              <div className="mt-10 max-w-3xl">
                <p className="section-label">Contact</p>
                <h1 className="section-heading">Send a message.</h1>
                <p className="body-copy mt-5">
                  Have a project, role, or idea? Send a note — I&apos;ll reply
                  within 1-2 business days.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.06}>
              <div className="mt-10 max-w-3xl border-t border-border pt-10">
                <ContactForm />
              </div>
            </AnimateIn>

            <div className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16">
              <p className="section-label mb-8">Or reach me directly</p>
              <ContactLinks />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
