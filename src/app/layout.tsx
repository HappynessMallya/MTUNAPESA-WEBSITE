import { ConsentAwareAnalytics } from "@/components/ConsentAwareAnalytics";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { graphRoot, organizationSchema, websiteSchema } from "@/lib/schema";
import { primaryKeywords, siteConfig } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f3f5f9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Personal finance & expense tracker app`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.defaultDescription,
  keywords: [...primaryKeywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { email: false, telephone: false, address: false },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "any" }],
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Personal finance app`,
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MTU NA PESA — Personal finance and expense tracker app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Personal finance app`,
    description: siteConfig.shortDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans" suppressHydrationWarning>
        <JsonLd data={graphRoot([organizationSchema(), websiteSchema()])} />
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <ConsentAwareAnalytics />
      </body>
    </html>
  );
}
