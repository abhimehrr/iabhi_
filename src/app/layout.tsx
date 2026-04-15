import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

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
  metadataBase: new URL("https://abhi.shre.in"),
  title: "Abhishek | Backend Engineer",
  description:
    "Backend engineer at Mithila Stack shipping production platforms across EdTech, Healthcare, and Food delivery.",
  openGraph: {
    title: "Abhishek | Backend Engineer",
    description:
      "Three production platforms built and shipped: iPariksha, MARS, and TiffinDost.",
    url: "https://abhi.shre.in",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek backend engineer portfolio",
      },
    ],
    siteName: "Abhishek Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      </head>
      <body
        cz-shortcut-listen="true"
        className="bg-app font-sans antialiased"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
