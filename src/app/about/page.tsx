import { ButtonPrimary } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { cardPremium, sectionInset, sectionY } from "@/lib/layout";
import { primaryKeywords, siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const description =
  "We believe financial clarity should be simple: calm control, disciplined habits, and tools that respect your intelligence.";

export const metadata: Metadata = {
  title: "About — Financial discipline & money clarity",
  description,
  keywords: [...primaryKeywords, "financial discipline", "money clarity", "personal finance mission"],
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${siteConfig.name}`,
    description,
    url: "/about",
    type: "website",
  },
  twitter: {
    title: `About — ${siteConfig.name}`,
    description,
  },
};

const pillars = [
  {
    title: "Clarity",
    body: "You always know what came in, what went out, and what remains—without spreadsheet archaeology.",
  },
  {
    title: "Discipline",
    body: "Consistency beats intensity. Record, review, adjust—until the rhythm feels natural.",
  },
  {
    title: "Calm control",
    body: "Structure reduces noise. The app is deep when you need it, quiet when you do not.",
  },
];

export default function AboutPage() {
  return (
    <main className={`${sectionY} ${sectionInset}`}>
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">About</p>
        <h1 className="mt-3 max-w-3xl text-display font-semibold text-navy">
          We Believe Financial Clarity Should Be Simple
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Our mission is to help people build stronger financial habits through structured tracking—not
          hype, not shortcuts. Explore{" "}
          <Link href="/features" className="font-medium text-accent underline-offset-2 hover:underline">
            how the product works
          </Link>{" "}
          or read the{" "}
          <Link href="/faq" className="font-medium text-accent underline-offset-2 hover:underline">
            FAQ
          </Link>{" "}
          when you want detail.
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-20">
        {pillars.map((p, i) => (
          <FadeIn key={p.title}>
            <article
              className={`${cardPremium} h-full p-6 transition hover:-translate-y-0.5 sm:p-7 ${
                i === 1 ? "md:translate-y-4" : ""
              }`}
            >
              <h2 className="text-base font-semibold text-navy">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className={`${cardPremium} mt-16 p-8 text-center lg:mt-20 lg:p-10`}>
          <p className="text-sm font-medium text-navy">When you are ready, the system is waiting.</p>
          <div className="mt-6 flex justify-center">
            <ButtonPrimary href="/#cta">Download MTU NA PESA</ButtonPrimary>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
