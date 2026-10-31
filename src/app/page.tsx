import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { Contact } from "@/components/sections/Contact";
import { Craft } from "@/components/sections/Craft";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import type { Metadata } from "next";
import {
  AUTHOR_JOB_TITLE,
  AUTHOR_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function HomePage(): React.JSX.Element {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#work`,
    name: "Production platforms by Abhishek",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Meleys",
        url: "https://meleys.ai",
        description:
          "AI-powered interview and evaluation platform with real-time proctoring.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI Clinic",
        url: "https://ai-clinic.tech",
        description:
          "Medication adherence platform with AI agents for post-discharge patient care.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "MARS",
        url: "https://mars.ai-clinic.tech",
        description:
          "Hospital management and medication reminder system with AI patient engagement.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "iPariksha",
        url: "https://ipariksha.com",
        description:
          "Examination platform with automated evaluation and payment flows.",
      },
    ],
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: AUTHOR_NAME,
      jobTitle: AUTHOR_JOB_TITLE,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Work />
        <Craft />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
