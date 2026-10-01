import type { Metadata } from "next";
import { ArrowRight, Plus } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about Abhishek's AI software engineering, full stack development, ML engineering, DevOps, security, and project collaboration experience.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: "Frequently Asked Questions | Abhishek",
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/faq`,
    siteName: SITE_NAME,
    type: "website",
  },
};

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question:
      "What kind of software engineering services do you specialize in?",
    answer:
      "I specialize in building scalable, intelligent applications as an AI full stack developer. My expertise spans the entire development lifecycle, from architecting robust backends and intuitive frontends to integrating advanced machine learning models and optimizing DevOps pipelines.",
  },
  {
    question: "How can an AI software engineer help my business grow?",
    answer:
      "As an AI software engineer, I bridge the gap between traditional software development and artificial intelligence. I help businesses automate complex workflows, implement predictive analytics, and build AI-driven features that enhance user experience and provide a competitive edge in the market.",
  },
  {
    question:
      "Do you have experience with end-to-end ML engineering and deployment?",
    answer:
      "Yes, I am an experienced ML engineer with a strong focus on production-grade deployments. I don't just build models; I ensure they are scalable, maintainable, and seamlessly integrated into your existing infrastructure using modern DevOps practices.",
  },
  {
    question: "What is your approach to DevOps and infrastructure management?",
    answer:
      "As a DevOps engineer, I prioritize automation, CI/CD efficiency, and cloud-native architecture. My goal is to ensure your software is reliable, secure, and capable of handling high traffic loads with minimal downtime, allowing your team to focus on feature development.",
  },
  {
    question: "Why should I hire you as a software engineer for my project?",
    answer:
      "With hands-on production experience as a software engineer, I bring ownership, architectural thinking, and a problem-solving mindset to every project. Whether you need a complex AI system or a high-performance web application, I deliver clean, efficient, and future-proof code that aligns with your business objectives.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faq#faq`,
  url: `${SITE_URL}/faq`,
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FAQPage(): React.JSX.Element {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
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
                {FAQ_ITEMS.map((item, index) => (
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

                <AnimateIn delay={FAQ_ITEMS.length * 0.06}>
                  <a
                    href="mailto:abhias.dev@gmail.com"
                    className="group mt-10 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-[18px] transition-transform duration-200 hover:translate-x-1 md:text-[22px]"
                  >
                    <span className="text-muted">Still have a question?</span>
                    <ArrowRight
                      className="size-5 text-accent-orange"
                      aria-hidden
                    />
                    <span className="text-primary">abhias.dev@gmail.com</span>
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
