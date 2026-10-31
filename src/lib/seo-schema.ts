import { PROJECTS } from "./projects";
import { SEO_CONFIG } from "./seo-config";

const { personal, site, social, brand, faq } = SEO_CONFIG;

export type BreadcrumbItem = { name: string; path: string };

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;

/** Person schema — entity anchor for Google */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: personal.name,
  alternateName: [
    "Abhishek Full Stack Engineer",
    "Abhishek Project Manager",
    "AbhiMehrr",
  ],
  url: site.url,
  image: {
    "@type": "ImageObject",
    url: site.ogImage,
    width: 1200,
    height: 630,
    caption: `${personal.name} — ${personal.headline}`,
  },
  description: site.description,
  email: personal.email,
  telephone: personal.phone,
  jobTitle: personal.jobTitle,
  worksFor: {
    "@type": "Organization",
    name: personal.worksFor,
  },
  nationality: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Engineer",
    alternateName: ["Project Manager", "Backend Engineer"],
    description:
      "Builds real-time systems, AI-integrated backends, and async workflows; leads multi-project delivery for a 15-20 member team.",
    occupationLocation: { "@type": "Country", name: "India" },
    skills:
      "TypeScript, JavaScript, Node.js, NestJS, Next.js, React, PostgreSQL, MongoDB, Redis, BullMQ, Docker, AWS, Jenkins CI/CD, Gemini AI, Azure AI, D-ID, LiveKit, WhatsApp API",
  },
  knowsAbout: [
    "Full stack development",
    "Backend architecture",
    "Project management",
    "Real-time systems",
    "AI agent workflows",
    "Node.js",
    "NestJS",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "BullMQ",
    "Docker",
    "AWS",
    "Jenkins CI/CD",
    "Gemini AI",
    "Azure AI",
    "D-ID",
    "LiveKit",
    "WhatsApp API",
  ],
  sameAs: [social.linkedin, site.url],
};

/** WebSite schema */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: site.url,
  name: site.name,
  alternateName: [`${brand} Portfolio`, "abhias.com"],
  description: site.description,
  author: { "@id": personId },
  publisher: { "@id": personId },
  inLanguage: "en-IN",
};

/** ProfilePage schema */
export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${site.url}/#profilepage`,
  url: site.url,
  name: site.title,
  description: site.description,
  isPartOf: { "@id": websiteId },
  about: { "@id": personId },
  mainEntity: { "@id": personId },
  inLanguage: "en-IN",
};

/** FAQPage schema — shared with /faq content */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${site.url}/faq#faq`,
  url: `${site.url}/faq`,
  name: `Frequently Asked Questions | ${brand}`,
  isPartOf: { "@id": websiteId },
  about: { "@id": personId },
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const faqPageSchema = faqSchema;

/** ProfessionalService schema */
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#services`,
  name: "Full Stack Engineering and Project Management",
  provider: { "@id": personId },
  serviceType:
    "Backend architecture, AI integrations, DevOps, and multi-project delivery",
  areaServed: { "@type": "Country", name: "India" },
  url: site.url,
};

/** Production work as ItemList */
export const workItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${site.url}/#work`,
  name: "Production platforms by Abhishek",
  itemListElement: PROJECTS.filter((project) => project.url).map(
    (project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: project.url,
      description: project.summary,
    })
  ),
  author: { "@id": personId },
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http")
        ? item.path
        : `${site.url}${item.path}`,
    })),
  };
}

export function buildWebPageSchema({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  const url = path.startsWith("http") ? path : `${site.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    inLanguage: "en-IN",
  };
}
