import { FadeIn } from "@/components/FadeIn";
import { HOME_SECTION_BG } from "@/lib/home-section-bg";
import { sectionInset, sectionY } from "@/lib/layout";

const bullets = [
  "Built for Tanzanian youth, SMEs, and freelancers",
  "Designed with financial discipline at its core",
];

export function SocialProofSection() {
  return (
    <section
      className={`${HOME_SECTION_BG.socialProof} ${sectionY} border-y border-navy/[0.06]`}
      aria-labelledby="social-proof-heading"
    >
      <div className={`${sectionInset} text-center`}>
        <FadeIn>
          <h2 id="social-proof-heading" className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Why Mtu na Pesa
          </h2>
          <blockquote className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-snug text-navy md:text-xl">
            Most people feel their money disappears without knowing where it went. Mtu na Pesa changes
            that.
          </blockquote>
          <ul className="mx-auto mt-8 max-w-md space-y-3 text-left text-sm leading-relaxed text-muted-foreground">
            {bullets.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="text-accent" aria-hidden>
                  ·
                </span>
                {line}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
