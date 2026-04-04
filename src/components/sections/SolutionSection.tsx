import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { cardPremium, sectionInset, sectionY } from "@/lib/layout";

const flow = [
  { title: "Income", subtitle: "What you earn" },
  { title: "Categorized", subtitle: "Every expense labeled" },
  { title: "Allocated", subtitle: "Guided by your plan" },
  { title: "Habits", subtitle: "Discipline that compounds" },
];

export function SolutionSection() {
  return (
    <section
      className={`border-y border-navy/[0.06] bg-surface/80 ${sectionY} backdrop-blur-[2px]`}
      aria-labelledby="solution-heading"
    >
      <div className={sectionInset}>
        <FadeIn>
          <SectionHeading
            id="solution-heading"
            label="The system"
            title="A Structured System That Guides Every Dollar"
            description="Track income, categorize expenses, follow allocation discipline, and let saving habits form naturally—without spreadsheet chaos."
          />
        </FadeIn>

        <FadeIn>
          <div className="relative mt-4 lg:mt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {flow.map((step, i) => (
                <div
                  key={step.title}
                  className={`${cardPremium} p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(15,23,41,0.1)] lg:min-h-[148px] ${
                    i % 2 === 1 ? "lg:mt-10" : ""
                  }`}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.subtitle}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:mt-14">
              <span className="font-medium text-navy">Income</span> flows in →{" "}
              <span className="font-medium text-navy">spending is categorized</span> →{" "}
              <span className="font-medium text-navy">allocation keeps you balanced</span> →{" "}
              <span className="font-medium text-navy">habits strengthen over time</span>.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
