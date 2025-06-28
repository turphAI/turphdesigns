import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TurphDesigns - Modern Consulting for Digital Excellence",
  description: "Strategic consulting services for digital transformation, technology implementation, and business optimization. Transform your business with expert guidance.",
  keywords: ["consulting", "digital transformation", "technology", "business optimization", "strategy"],
  authors: [{ name: "TurphDesigns" }],
  creator: "TurphDesigns",
  openGraph: {
    title: "TurphDesigns - Modern Consulting for Digital Excellence",
    description: "Strategic consulting services for digital transformation, technology implementation, and business optimization.",
    url: "https://turphdesigns.com",
    siteName: "TurphDesigns",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurphDesigns - Modern Consulting for Digital Excellence",
    description: "Strategic consulting services for digital transformation, technology implementation, and business optimization.",
    creator: "@turphdesigns",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
