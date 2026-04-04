import type { FaqItem } from "@/data/faq";
import { siteConfig, siteUrl } from "@/lib/site";

const orgId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.shortDescription,
    email: siteConfig.email,
    telephone: siteConfig.phone.replace(/\s/g, ""),
    ...(siteConfig.sameAs.length ? { sameAs: siteConfig.sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.defaultDescription,
    inLanguage: "en",
    publisher: { "@id": orgId },
  };
}

export function softwareApplicationSchema() {
  return {
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Android, iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free tier with core tracking and allocation; optional premium may apply.",
    },
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
    author: { "@id": orgId },
    publisher: { "@id": orgId },
  };
}

export function mobileApplicationSchema() {
  return {
    "@type": "MobileApplication",
    name: siteConfig.name,
    operatingSystem: "Android, iOS",
    applicationCategory: "FinanceApplication",
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
    author: { "@id": orgId },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    downloadUrl: [siteConfig.playStoreUrl, siteConfig.appStoreUrl],
  };
}

export function faqStructuredData(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function graphRoot(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
