import { FadeIn } from "@/components/FadeIn";
import {
  PhoneAllocation,
  PhoneDashboard,
  PhoneExpense,
  PhoneReports,
} from "@/components/PhoneMockup";
import { SectionHeading } from "@/components/SectionHeading";
import { sectionInset, sectionY } from "@/lib/layout";

const panels = [
  { el: PhoneDashboard, offset: "lg:translate-y-0" },
  { el: PhoneExpense, offset: "lg:-translate-y-8 lg:translate-x-4" },
  { el: PhoneReports, offset: "lg:translate-y-6 lg:-translate-x-2" },
  { el: PhoneAllocation, offset: "lg:-translate-y-4 lg:translate-x-6" },
];

export function VisualAppSection() {
  return (
    <section className={`${sectionY} bg-surface/40`} aria-labelledby="visual-heading">
      <div className={sectionInset}>
        <FadeIn>
          <SectionHeading
            id="visual-heading"
            label="Inside the app"
            title="Designed For Calm Financial Focus"
            description="Screens stay quiet on purpose—so you see what matters, act quickly, and return to your day without noise."
          />
        </FadeIn>
        <FadeIn>
          <div className="relative mt-4 flex flex-wrap justify-center gap-8 lg:mt-10 lg:min-h-[420px] lg:gap-6 xl:gap-10">
            <div
              className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent lg:block"
              aria-hidden
            />
            {panels.map(({ el: Panel, offset }, i) => (
              <div
                key={i}
                className={`relative transition duration-300 hover:z-20 hover:scale-[1.02] ${offset}`}
              >
                <div className="rounded-[20px] border border-navy/[0.06] bg-surface/90 p-3 shadow-[0_10px_40px_rgba(15,23,41,0.08)] ring-1 ring-white/70 backdrop-blur-sm">
                  <Panel />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
