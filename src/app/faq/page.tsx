import { ButtonPrimary } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItems, faqSectionMeta } from "@/data/faq";
import { faqStructuredData } from "@/lib/schema";
import { cardPremium, sectionY } from "@/lib/layout";
import { primaryKeywords, siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const description =
  "FAQ for MTU NA PESA: security, privacy, allocation, habits, and who the app is for—clear answers without hype.";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 72);
}

export const metadata: Metadata = {
  title: "FAQ — Personal finance, expense tracking & budgeting",
  description,
  keywords: [
    ...primaryKeywords,
    "how to track personal expenses",
    "how to manage salary money",
    "simple budgeting method",
    "expense tracking mobile app",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "MTU NA PESA FAQ — Budgeting & expense tracking",
    description,
    url: "/faq",
    type: "website",
  },
  twitter: {
    title: "MTU NA PESA FAQ",
    description,
  },
};

export default function FaqPage() {
  return (
    <main className={`${sectionY} mx-auto max-w-content px-6 lg:px-8`}>
      <JsonLd data={faqStructuredData(faqItems)} />

      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">FAQ</p>
        <h1 className="mt-3 max-w-3xl text-display font-semibold text-navy">
          Questions, answered calmly
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Security, privacy, how allocation works, and who MTU NA PESA is for—structured so you can
          scan what matters to you.
        </p>
      </FadeIn>

      <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-24">
        {faqSectionMeta.map((section) => {
          const items = faqItems.filter((i) => i.group === section.group);
          if (items.length === 0) return null;
          return (
            <section key={section.group} aria-labelledby={`faq-section-${section.group}`}>
              <FadeIn>
                <h2 id={`faq-section-${section.group}`} className="text-section font-semibold text-navy">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{section.intro}</p>
              </FadeIn>
              <div className="mt-8 space-y-10 border-t border-navy/[0.06] pt-10">
                {items.map((item, index) => (
                  <article
                    key={item.question}
                    id={`faq-${section.group}-${index}-${slugify(item.question)}`}
                    className="max-w-3xl"
                  >
                    <h3 className="text-lg font-semibold text-navy">{item.question}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <FadeIn>
        <div className={`${cardPremium} mx-auto mt-20 max-w-xl p-8 text-center lg:mt-24`}>
          <h2 className="text-lg font-semibold text-navy">Still deciding?</h2>
          <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
            Download when you are ready—there is no pressure pitch, only structure.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonPrimary href="/#cta">Download MTU NA PESA</ButtonPrimary>
            <Link
              href="/features"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-navy/[0.08] bg-background px-5 text-sm font-semibold text-navy transition hover:bg-surface"
            >
              Feature depth
            </Link>
          </div>
        </div>
      </FadeIn>

      <p className="mt-12 text-center text-sm text-muted-foreground">
        <Link href="/privacy" className="font-medium text-accent underline-offset-2 hover:underline">
          Privacy
        </Link>
        {" · "}
        <Link href="/cookies" className="font-medium text-accent underline-offset-2 hover:underline">
          Cookies
        </Link>
        {" · "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-accent underline-offset-2 hover:underline"
        >
          {siteConfig.email}
        </a>
      </p>
    </main>
  );
}
