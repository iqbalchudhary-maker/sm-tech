import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SM Technology | Enterprise AI Automation & Custom SaaS Solutions",
  description: "SM Technology is a premier AI Automation Company specializing in Enterprise AI Solutions, Custom SaaS, Digital Transformation, and Web Development. Registered under Partnership Act 1932.",
  keywords: ["AI Automation", "Custom SaaS", "Enterprise AI Solutions", "Digital Transformation", "Web Development", "SM Technology", "AI Agents", "RAG Systems", "Social Media Automation"],
  openGraph: {
    title: "SM Technology | Enterprise AI Automation",
    description: "Architecting Smart AI Solutions for Global Enterprises. Specialized in AI Agents, RAG Systems, and Custom SaaS.",
    url: "https://sm-tech.com",
    siteName: "SM Technology",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SM Technology | AI Automation Agency",
    description: "Leading the future of Digital Transformation with Enterprise AI and Custom SaaS solutions.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
