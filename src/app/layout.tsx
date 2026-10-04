import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { siteConfig } from "@/config/site";

const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const headingFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const monoFont = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const serifFont = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif", display: "swap" });

const description = "S Solutions provides web development, Shopify, app development and performance marketing from Lahore, Pakistan.";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "S Solutions — Web, Shopify, Apps & Digital Marketing", template: "%s | S Solutions" },
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: siteConfig.name, title: "S Solutions — Web, Shopify, Apps & Digital Marketing", description },
  twitter: { card: "summary_large_image", title: "S Solutions — Web, Shopify, Apps & Digital Marketing", description },
  keywords: ["web development Lahore", "Shopify development", "app development", "performance marketing", "S Solutions"],
};
export const viewport: Viewport = { themeColor: "#00050f", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const social = Object.values(siteConfig.social).filter(Boolean);
  const jsonLd = { "@context": "https://schema.org", "@type": ["Organization", "ProfessionalService"], name: siteConfig.name, url: siteConfig.siteUrl, email: siteConfig.email, telephone: `+${siteConfig.whatsappDigits}`, address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" }, ...(social.length ? { sameAs: social } : {}) };
  return <html lang="en" data-scroll-behavior="smooth" className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} ${serifFont.variable}`}><body><a href="#main-content" className="skip-link">Skip to content</a><Header /><CustomCursor /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />{children}<Footer /></body></html>;
}
