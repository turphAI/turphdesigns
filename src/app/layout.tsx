import type { Metadata } from "next";
import { Inter, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TurphDesigns - AI-First UX Leadership for Financial Innovation",
  description: "Specialized UX Director with proven experience scaling financial products to $250M+ revenue. Leading the transformation from traditional interfaces to conversational AI experiences that make complex financial data accessible.",
  keywords: [
    "conversational AI interfaces", 
    "financial services UX", 
    "AI-powered financial interfaces", 
    "financial data visualization", 
    "UX director", 
    "product scaling", 
    "Amazon ProductAds", 
    "Fidelity UX",
    "structured data interfaces",
    "AI-first design"
  ],
  authors: [{ name: "TurphDesigns" }],
  creator: "TurphDesigns",
  openGraph: {
    title: "TurphDesigns - AI-First UX Leadership for Financial Innovation",
    description: "Pioneering conversational AI interfaces for financial services. Proven track record scaling products from 0 to $250M revenue at Amazon and leading AI-powered experiences at Fidelity.",
    url: "https://turphdesigns.com",
    siteName: "TurphDesigns",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurphDesigns - AI-First UX Leadership for Financial Innovation",
    description: "Specialized UX Director pioneering conversational AI interfaces for financial services. Making complex financial data accessible through natural language interactions.",
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
      <body className={`${inter.className} ${playfair.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
