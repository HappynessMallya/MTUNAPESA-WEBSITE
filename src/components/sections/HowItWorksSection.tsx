import { FadeIn } from "@/components/FadeIn";
import { IconChart, IconExpense, IconIncome, IconSliders } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";
import { cardPremium, sectionInset, sectionY } from "@/lib/layout";

const steps = [
  {
    title: "Add your income sources",
    body: "Capture what comes in—salary, business, transfers—so every plan starts from the real number.",
    Icon: IconIncome,
  },
  {
    title: "Track daily spending",
    body: "Lightweight logging keeps the picture honest. Patterns show up without judgment.",
    Icon: IconExpense,
  },
  {
    title: "Follow allocation guidance",
    body: "Your split across needs, wants, saving, and giving keeps spending and priorities aligned.",
    Icon: IconSliders,
  },
  {
    title: "Build long-term habits",
    body: "Review calmly, adjust deliberately, repeat. Discipline becomes a rhythm—not a crash diet.",
    Icon: IconChart,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className={`${sectionY} bg-surface/60`} aria-labelledby="how-heading">
      <div className={sectionInset}>
        <FadeIn>
          <SectionHeading
            id="how-heading"
            label="How it works"
            title="Four Calm Steps Toward Financial Clarity"
            description="Progressive simplicity: each step prepares the next. No jargon, no overwhelm—just a sequence you can sustain."
          />
        </FadeIn>
        <ol className="mt-4 grid list-none gap-5 p-0 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-5">
          {steps.map((s, i) => (
            <li key={s.title} className={i % 2 === 1 ? "lg:mt-12" : ""}>
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
      </div>
    </section>
  );
}
