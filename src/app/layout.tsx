import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { GlobalJsonLd } from "@/components/seo/GlobalJsonLd";
import { SEO_CONFIG } from "@/lib/seo-config";
import { getSiteUrl, isPreviewDeployment } from "@/lib/seo-metadata";

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

/**
 * Root metadata — defaults inherited by all pages.
 * Do NOT add a manual <head> that blocks Next.js metadata injection.
 */
export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: SEO_CONFIG.site.name,
  title: {
    default: SEO_CONFIG.site.title,
    template: `%s | ${SEO_CONFIG.brand}`,
  },
  description: SEO_CONFIG.site.description,
  keywords: [...SEO_CONFIG.site.keywords],
  authors: [{ name: SEO_CONFIG.personal.name, url: SEO_CONFIG.site.url }],
  creator: SEO_CONFIG.personal.name,
  publisher: SEO_CONFIG.personal.name,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: SEO_CONFIG.site.locale,
    url: getSiteUrl(),
    siteName: SEO_CONFIG.site.name,
    title: SEO_CONFIG.site.title,
    description: SEO_CONFIG.site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SEO_CONFIG.brand} — ${SEO_CONFIG.personal.headline}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.site.title,
    description: SEO_CONFIG.site.description,
    images: ["/opengraph-image"],
  },
  robots: isPreviewDeployment()
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
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
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLM Information"
        />
      </head>
      <body className="bg-app font-sans antialiased" suppressHydrationWarning>
        <GlobalJsonLd />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
