import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/provider/providers";
import { cn } from "@/lib/utils";

// Jetbrian Mono Font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Metadata
export const metadata: Metadata = {
  title: "Abhishek",
  description: "Abhishek - Who am I?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(jetbrainsMono.variable, "antialiased")}
        cz-shortcut-listen="true"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
