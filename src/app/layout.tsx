import type { Metadata } from "next";
import { Inter, Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
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
  title: "TurphDesigns — Tom Murphy | Product Designer, Conversational Interfaces",
  description: "Tom Murphy is a product designer with 25+ years of experience designing conversational AI interfaces for Amazon and Fidelity Investments. Every conversation becomes the interface.",
  keywords: [
    "Tom Murphy",
    "TurphDesigns",
    "product designer",
    "conversational interfaces",
    "conversational AI",
    "financial services UX",
    "Amazon ProductAds designer",
    "Fidelity Investments UX",
    "AI interface design",
    "human-centered design",
  ],
  authors: [{ name: "Tom Murphy", url: "https://turphdesigns.com" }],
  creator: "Tom Murphy",
  metadataBase: new URL("https://turphdesigns.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TurphDesigns — Tom Murphy | Product Designer",
    description: "25+ years designing products at Amazon and Fidelity Investments. Every conversation becomes the interface.",
    url: "https://turphdesigns.com",
    siteName: "TurphDesigns",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurphDesigns — Tom Murphy | Product Designer",
    description: "25+ years designing conversational AI interfaces for Amazon and Fidelity Investments. Making the complex feel simple, and the simple feel human.",
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
      <body className={`${inter.className} ${playfair.variable} ${dmSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://turphdesigns.com/#website",
                  "url": "https://turphdesigns.com",
                  "name": "TurphDesigns",
                  "description": "Product design consultancy founded by Tom Murphy.",
                  "publisher": { "@id": "https://turphdesigns.com/#person" },
                },
                {
                  "@type": "Person",
                  "@id": "https://turphdesigns.com/#person",
                  "name": "Tom Murphy",
                  "alternateName": "Turph",
                  "url": "https://turphdesigns.com",
                  "jobTitle": "Product Designer",
                  "description": "Product designer with 25+ years of experience designing conversational AI interfaces. Formerly at Amazon (ProductAds, $0 to $250M revenue) and Fidelity Investments (Personal Investing).",
                  "knowsAbout": [
                    "Conversational AI interfaces",
                    "Product design",
                    "Financial services UX",
                    "Human-centered design",
                    "AI interface design",
                    "Design leadership",
                  ],
                  "worksFor": {
                    "@type": "Organization",
                    "name": "TurphDesigns",
                    "url": "https://turphdesigns.com",
                  },
                  "alumniOf": [
                    {
                      "@type": "Organization",
                      "name": "Amazon",
                      "url": "https://amazon.com",
                    },
                    {
                      "@type": "Organization",
                      "name": "Fidelity Investments",
                      "url": "https://fidelity.com",
                    },
                  ],
                  "sameAs": [
                    "https://www.linkedin.com/in/tom-murphy-453479/",
                  ],
                },
              ],
            }),
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2NSF2ZPEZP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2NSF2ZPEZP');
          `}
        </Script>
      </body>
    </html>
  );
}
