import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { Contact } from "@/components/sections/Contact";
import { Craft } from "@/components/sections/Craft";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhishek: AI Software Engineer & Full Stack Developer",
  description: "Expert AI Software Engineer and Full Stack Developer specializing in ML, DevOps, and scalable backend systems. Explore my portfolio and professional experience.",
  alternates: { canonical: "https://iabhi.live" },
  openGraph: {
    title: "Abhishek: AI Software Engineer & Full Stack Developer",
    description: "Expert AI Software Engineer and Full Stack Developer specializing in ML, DevOps, and scalable backend systems.",
    url: "https://iabhi.live",
    siteName: "abhishek portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek: AI Software Engineer & Full Stack Developer",
    description: "Expert AI Software Engineer and Full Stack Developer specializing in ML, DevOps, and scalable backend systems.",
  },
  robots: { index: true, follow: true },
};

export default function HomePage(): React.JSX.Element {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Abhishek Portfolio",
    "url": "https://iabhi.live",
    "author": {
      "@type": "Person",
      "name": "Abhishek",
      "jobTitle": "AI Software Engineer"
    }
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