import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SM Technology | Engineering Intelligent Autonomy",
  description:
    "SM Technology is a high-end AI and automation agency delivering enterprise-grade IT and autonomous systems."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slateDeep text-slate-200 antialiased">{children}</body>
    </html>
  );
}
