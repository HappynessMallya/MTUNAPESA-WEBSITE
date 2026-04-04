import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { HOME_SECTION_BG } from "@/lib/home-section-bg";
import { cardPremium, sectionInset, sectionY } from "@/lib/layout";

const points = [
  "Feel more in control of where money flows",
  "Reduce day-to-day financial stress",
  "Build a saving habit that survives busy seasons",
  "Understand spending behavior without shame",
  "Make calmer decisions with clearer information",
];

export function BenefitsSection() {
  return (
    <section
      className={`border-y border-navy/[0.06] ${HOME_SECTION_BG.benefits} ${sectionY}`}
      aria-labelledby="benefits-heading"
    >
      <div className={sectionInset}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <FadeIn>
            <SectionHeading
              id="benefits-heading"
              label="Outcomes"
              title="Small Daily Actions Create Long-Term Financial Confidence"
              description="The app does not promise overnight wealth. It supports the quiet work—logging, reviewing, adjusting—that serious change is built from."
            />
          </FadeIn>
          <FadeIn>
            <ul className="space-y-3">
              {points.map((p, i) => (
                <li
                  key={p}
                  className={`${cardPremium} flex items-start gap-3 px-5 py-4 text-sm leading-relaxed text-navy transition hover:shadow-[0_12px_36px_rgba(15,23,41,0.09)] ${
                    i % 2 === 1 ? "lg:ml-6" : ""
                  }`}
                >
                  <span className="mt-0.5 font-semibold text-success" aria-hidden>
                    ✓
                  </span>
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
