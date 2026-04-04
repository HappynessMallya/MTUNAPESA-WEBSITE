import { ButtonPrimary, ButtonSecondary } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { featureClusters } from "@/data/feature-page";
import { cardPremium, sectionInset, sectionY } from "@/lib/layout";
import { primaryKeywords, siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Logical feature depth for MTU NA PESA: tracking, allocation, habits, and insights—each framed as problem, solution, and benefit.";

export const metadata: Metadata = {
  title: "Features — Expense tracker, budget allocation & savings",
  description,
  keywords: [...primaryKeywords, "track expenses", "allocation budgeting", "saving goals"],
  alternates: { canonical: "/features" },
  openGraph: {
    title: "MTU NA PESA features — Money tracking & budget tools",
    description,
    url: "/features",
    type: "website",
  },
  twitter: {
    title: "MTU NA PESA features — Expense & budget tools",
    description,
  },
};

export default function FeaturesPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Features", item: `${siteConfig.url}/features` },
    ],
  };

  return (
    <main className={`${sectionY} ${sectionInset}`}>
      <JsonLd data={breadcrumb} />

      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Features</p>
        <h1 className="mt-3 max-w-3xl text-display font-semibold text-navy">
          Structure for analytical minds
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Below each cluster follows the same rhythm:{" "}
          <span className="font-medium text-navy">the tension</span>,{" "}
          <span className="font-medium text-navy">how MTU NA PESA responds</span>, and{" "}
          <span className="font-medium text-navy">what you gain</span>—calm authority, not noise.
        </p>
      </FadeIn>

      <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-24">
        {featureClusters.map((cluster, ci) => (
          <section key={cluster.title} aria-labelledby={`cluster-${ci}`}>
            <FadeIn>
              <h2 id={`cluster-${ci}`} className="text-section font-semibold text-navy">
                {cluster.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm font-medium text-muted-foreground">{cluster.intro}</p>
            </FadeIn>
            <div className="mt-8 space-y-6">
              {cluster.items.map((item, ii) => (
                <FadeIn key={item.name}>
                  <div
                    className={`${cardPremium} p-6 sm:p-8 ${ii % 2 === 1 ? "lg:ml-8 lg:max-w-[92%]" : ""}`}
                  >
                    <h3 className="text-base font-semibold text-navy">{item.name}</h3>
                    <dl className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-8">
                      <div>
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                          Problem
                        </dt>
                        <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.problem}</dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                          Solution
                        </dt>
                        <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.solution}</dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                          Benefit
                        </dt>
                        <dd className="mt-2 text-sm leading-relaxed text-navy">{item.benefit}</dd>
                      </div>
                    </dl>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        ))}
      </div>

      <FadeIn>
        <section className={`${cardPremium} mt-20 p-8 lg:mt-24 lg:p-10`}>
          <h2 className="text-section font-semibold text-navy">Privacy & structure</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            No ads, no selling your financial data, and room for multiple income flows—so the system
            stays respectful while it scales with you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonPrimary href="/#cta">Start with the app</ButtonPrimary>
            <ButtonSecondary href="/about">Our philosophy</ButtonSecondary>
            <ButtonSecondary href="/faq">FAQ</ButtonSecondary>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
