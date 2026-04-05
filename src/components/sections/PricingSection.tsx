import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { HOME_SECTION_BG } from "@/lib/home-section-bg";
import { cardPremium, sectionInset, sectionY } from "@/lib/layout";

const free = [
  "Track income & expenses",
  "3 savings goals",
  "Basic analytics",
  "1 account",
];

const premium = [
  "Unlimited savings goals",
  "Category budgets",
  "AI financial assistant",
  "Data export (CSV, Excel, PDF)",
  "Unlimited accounts",
  "Priority support",
];

export function PricingSection() {
  return (
    <section className={`${HOME_SECTION_BG.pricing} ${sectionY}`} aria-labelledby="pricing-heading">
      <div className={sectionInset}>
        <FadeIn>
          <SectionHeading
            id="pricing-heading"
            label="Pricing"
            title="Start Free, Upgrade When You Need More"
            description="Core tracking and allocation stay free. Premium unlocks AI, exports, unlimited goals and accounts, category budgets, and priority support."
          />
        </FadeIn>
        <div className="mt-4 grid gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-8">
          <FadeIn>
            <article className={`${cardPremium} flex h-full flex-col p-7 sm:p-8`}>
              <h3 className="text-lg font-semibold text-navy">Free</h3>
              <p className="mt-2 text-sm text-muted-foreground">Everything you need to get disciplined with your money.</p>
              <ul className="mt-8 space-y-3 text-sm leading-relaxed text-navy">
                {free.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-accent" aria-hidden>
                      ·
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
          <FadeIn>
            <article
              className={`${cardPremium} flex h-full flex-col border-navy/10 bg-gradient-to-b from-accent-soft/40 to-surface p-7 ring-1 ring-accent/15 sm:p-8`}
            >
              <h3 className="text-lg font-semibold text-navy">Premium</h3>
              <p className="mt-2 text-sm text-muted-foreground">For power users who want AI, exports, and full flexibility.</p>
              <ul className="mt-8 space-y-3 text-sm leading-relaxed text-navy">
                {premium.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-accent" aria-hidden>
                      ·
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
                Subscription details and pricing are shown in the App Store and Google Play listings.
              </p>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
