import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { AllocationSection } from "@/components/sections/AllocationSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { VisualAppSection } from "@/components/sections/VisualAppSection";
import { graphRoot, mobileApplicationSchema, softwareApplicationSchema } from "@/lib/schema";
import { primaryKeywords, siteConfig } from "@/lib/site";
import type { Metadata } from "next";

const homeTitle = "Personal financial operating system — Mtu na Pesa";
const homeDescription = siteConfig.defaultDescription;

export const metadata: Metadata = {
  title: {
    absolute: `${homeTitle} | ${siteConfig.name}`,
  },
  description: homeDescription,
  keywords: [
    ...primaryKeywords,
    "how to track personal expenses",
    "money tracking app",
    "financial habit tracker",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${homeTitle} | ${siteConfig.name}`,
    description: homeDescription,
    url: "/",
    type: "website",
  },
  twitter: {
    title: `${homeTitle} | ${siteConfig.name}`,
    description: homeDescription,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graphRoot([softwareApplicationSchema(), mobileApplicationSchema()])}
      />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <AllocationSection />
      <FeaturesSection />
      <VisualAppSection />
      <BenefitsSection />
      <TrustSection />
      <PricingSection />
      <SocialProofSection />
      <CtaSection />
      <Faq />
    </>
  );
}
