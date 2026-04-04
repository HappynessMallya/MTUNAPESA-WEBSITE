import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { HOME_SECTION_BG } from "@/lib/home-section-bg";
import { cardPremium, sectionInset, sectionY } from "@/lib/layout";

const pains = [
  "I earn money but I don’t know where it goes.",
  "I try to save but something always comes up.",
  "I don’t feel in control of my finances.",
  "I want discipline but budgeting feels complicated.",
];

const rotations = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]", "rotate-[0.5deg]"] as const;

export function ProblemSection() {
  return (
    <section className={`${HOME_SECTION_BG.problem} ${sectionY}`} aria-labelledby="problem-heading">
      <div className={sectionInset}>
        <FadeIn>
          <SectionHeading
            id="problem-heading"
            label="The gap"
            title="Most People Never See The Full Picture Of Their Money"
            description="If that resonates, you are not careless—you are human. The missing piece is usually a calm system, not more willpower."
          />
        </FadeIn>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:mt-8 lg:grid-cols-2 lg:gap-6">
          {pains.map((quote, i) => (
            <FadeIn key={quote}>
              <figure
                className={`${cardPremium} origin-center p-6 transition duration-300 hover:rotate-0 hover:shadow-[0_16px_48px_rgba(15,23,41,0.1)] ${rotations[i % rotations.length]}`}
              >
                <blockquote className="text-sm font-medium leading-relaxed text-navy">
                  <span className="text-3xl leading-none text-accent/40" aria-hidden>
                    “
                  </span>
                  {quote}
                  <span className="text-3xl leading-none text-accent/40" aria-hidden>
                    ”
                  </span>
                </blockquote>
                <figcaption className="mt-4 text-xs font-medium uppercase tracking-wider text-muted">
                  Sound familiar?
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
