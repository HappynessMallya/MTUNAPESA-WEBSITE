import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { cardPremium, sectionInset, sectionY } from "@/lib/layout";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

const description =
  "Contact MTU NA PESA by form, email, or phone. We aim to respond to thoughtful inquiries within a few business days.";

export const metadata: Metadata = {
  title: "Contact — Support & inquiries",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${siteConfig.name}`,
    description,
    url: "/contact",
    type: "website",
  },
  twitter: {
    title: `Contact — ${siteConfig.name}`,
    description,
  },
};

export default function ContactPage() {
  return (
    <main className={`${sectionY} ${sectionInset}`}>
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Contact</p>
        <h1 className="mt-3 max-w-2xl text-display font-semibold text-navy">A real team, real channels</h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          For product questions, partnerships, or support—send a message. We read what you write and
          typically reply within <strong className="font-semibold text-navy">2–4 business days</strong>{" "}
          (often sooner for straightforward requests).
        </p>
        <div className={`${cardPremium} mt-8 max-w-lg p-6`}>
          <dl className="flex flex-col gap-4 text-sm sm:flex-row sm:gap-10">
            <div>
              <dt className="font-semibold text-navy">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent underline-offset-2 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Phone</dt>
              <dd className="mt-1">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-accent underline-offset-2 hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </FadeIn>
      <div className="mt-12 lg:mt-16">
        <FadeIn>
          <ContactForm />
        </FadeIn>
      </div>
    </main>
  );
}
