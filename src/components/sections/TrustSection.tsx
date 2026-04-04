import { FadeIn } from "@/components/FadeIn";
import { IconShield } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";
import { cardPremium, sectionInset, sectionY } from "@/lib/layout";

const points = [
  "No ads—your attention stays yours",
  "We do not sell your financial data",
  "Secure authentication and encryption in transit",
  "Private financial records, visible only to you",
];

export function TrustSection() {
  return (
    <section className={sectionY} aria-labelledby="trust-heading">
      <div className={sectionInset}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <FadeIn>
            <div
              className={`${cardPremium} mx-auto flex h-52 max-w-md items-center justify-center lg:mx-0 lg:h-60`}
            >
              <div className="text-center">
                <IconShield className="mx-auto h-16 w-16 text-navy/15" aria-hidden />
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted">
                  Trust by design
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <SectionHeading
              id="trust-heading"
              label="Privacy"
              title="Built With Privacy And Respect"
              description="A serious money tool should feel like a vault, not a billboard. We treat your information with the restraint it deserves."
            />
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-sm leading-relaxed text-navy"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
