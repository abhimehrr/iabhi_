import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  preload: true,
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Senior AI Software Engineer & Backend Expert | Abhishek",
  description:
    "Expert AI Software Engineer and Backend Developer specializing in scalable AI systems, ML pipelines, and full-stack architecture. Build your future with me.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Senior AI Software Engineer & Backend Expert | Abhishek",
    description:
      "Expert AI Software Engineer and Backend Developer specializing in scalable AI systems, ML pipelines, and full-stack architecture. Build your future with me.",
    url: SITE_URL,
    siteName: "abhishek portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior AI Software Engineer & Backend Expert | Abhishek",
    description:
      "Expert AI Software Engineer and Backend Developer specializing in scalable AI systems, ML pipelines, and full-stack architecture.",
  },
  robots: { index: true, follow: true },
};

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Abhishek Portfolio",
  url: SITE_URL,
  author: {
    "@type": "Person",
    name: "Abhishek",
    jobTitle: "Senior AI Software Engineer",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.JSX.Element {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-app font-sans antialiased" cz-shortcut-listen="true">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
