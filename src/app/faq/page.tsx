import type { Metadata } from "next";
import { ArrowRight, Plus } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { AnimateIn } from "@/components/ui/AnimateIn";
import {
  AUTHOR_EMAIL,
  AUTHOR_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about working with Abhishek as a full stack engineer and project manager — backends, AI integrations, DevOps, and production delivery.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: `Frequently Asked Questions | ${AUTHOR_NAME}`,
    description:
      "Answers about Abhishek's full stack engineering, project management, AI integrations, and production systems.",
    url: `${SITE_URL}/faq`,
    siteName: SITE_NAME,
    type: "website",
  },
  robots: { index: true, follow: true },
};

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "What do you specialize in as a full stack engineer?",
    answer:
      "I build production backends and the web apps that sit on top of them. Most of my work is real-time systems, AI-integrated backends, and async workflows — Node.js, NestJS, Next.js, PostgreSQL, MongoDB, Redis, and BullMQ. I've shipped platforms across healthtech, hiring-tech, and edtech.",
  },
  {
    question: "How do you use AI in the products you build?",
    answer:
      "I integrate AI where it solves a real product need, not as decoration. That includes Gemini and Azure AI for evaluation and conversation flows, D-ID for doctor avatar videos, LiveKit agents for patient follow-ups, and WhatsApp reminders. The focus is reliable workflows that run in production every day.",
  },
  {
    question: "What is your role as Project Manager at Mithila Stack?",
    answer:
      "I was promoted to Project Manager in July 2026 and still own backend architecture. I look after multiple projects at once and a team of 15–20 people — planning work, unblocking the team early, and keeping releases on track while staying close to the code.",
  },
  {
    question: "How do you handle deployment and infrastructure?",
    answer:
      "I deploy with Docker across AWS and VPS hosts, and use Jenkins CI/CD for automated releases. I've shipped and maintained 25+ full-stack apps and 10+ landing pages with that setup, aiming for zero-downtime releases when possible.",
  },
  {
    question: "Why should I hire you for a project?",
    answer:
      "I own systems end to end — API design, data models, queues, third-party integrations, and deployment. Platforms I've built, including Meleys, MARS, and iPariksha, are live and handling real users. If you need someone who can build and also keep a team moving, that's the work I do.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faq#faq`,
  url: `${SITE_URL}/faq`,
  name: `Frequently Asked Questions | ${AUTHOR_NAME}`,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: `${SITE_URL}/faq`,
    },
  ],
};

export default function FAQPage(): React.JSX.Element {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                    href={`mailto:${AUTHOR_EMAIL}`}
                    className="group mt-10 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-[18px] transition-transform duration-200 hover:translate-x-1 md:text-[22px]"
                  >
                    <span className="text-muted">Still have a question?</span>
                    <ArrowRight
                      className="size-5 text-accent-orange"
                      aria-hidden
                    />
                    <span className="text-primary">{AUTHOR_EMAIL}</span>
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
