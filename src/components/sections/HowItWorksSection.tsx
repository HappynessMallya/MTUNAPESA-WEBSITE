import { FadeIn } from "@/components/FadeIn";
import { IconChart, IconIncome, IconLayers, IconPie, IconSliders, IconSpark, IconTarget } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";
import { HOME_SECTION_BG } from "@/lib/home-section-bg";
import { cardPremium, sectionInset, sectionY } from "@/lib/layout";

const steps = [
  {
    title: "We ask how much you earn",
    body: "Start from the real number—no guesswork before the plan begins.",
    Icon: IconIncome,
  },
  {
    title: "How your income arrives",
    body: "Salary, freelance, or mixed—so suggestions match how money actually hits your accounts.",
    Icon: IconLayers,
  },
  {
    title: "A smart budget split",
    body: "We suggest an allocation based on your situation. You stay in control of every percentage.",
    Icon: IconSliders,
  },
  {
    title: "Pick your first savings goal",
    body: "Emergency fund, travel, a new phone—choose what matters first and see progress from day one.",
    Icon: IconTarget,
  },
  {
    title: "You are ready to go",
    body: "The shell is set; logging income and expenses stays as simple as three taps.",
    Icon: IconPie,
  },
  {
    title: "Under two minutes",
    body: "The full onboarding flow is designed to respect your time—clarity without a tutorial marathon.",
    Icon: IconChart,
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className={`${HOME_SECTION_BG.howItWorks} ${sectionY}`}
      aria-labelledby="how-heading"
    >
      <div className={sectionInset}>
        <FadeIn>
          <SectionHeading
            id="how-heading"
            label="Onboarding"
            title="Onboarding That Actually Helps"
            description="No confusing setup—six simple steps. We learn how you earn, suggest a split, and get your first goal in place so you can start immediately."
          />
        </FadeIn>
        <ol className="mt-4 grid list-none gap-5 p-0 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-5">
          {steps.map((s, i) => (
            <li key={s.title} className={i % 3 === 1 ? "lg:mt-10" : i % 3 === 2 ? "lg:mt-5" : ""}>
              <FadeIn>
                <div
                  className={`${cardPremium} flex h-full flex-col p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(15,23,41,0.1)]`}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <s.Icon className="mt-4 h-8 w-8 text-navy/75" aria-hidden />
                  <h3 className="mt-4 text-base font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
        <FadeIn>
          <p className="mt-10 text-center text-sm font-medium text-navy lg:mt-14">
            <IconSpark className="mr-2 inline-block h-4 w-4 align-text-bottom text-accent" aria-hidden />
            Takes less than 2 minutes—then you are tracking for real.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
