import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className={jetbrainsMono.variable}>
      <body className={`antialiased`} cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
