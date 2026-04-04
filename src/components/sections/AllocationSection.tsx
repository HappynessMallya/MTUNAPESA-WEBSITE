import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { cardPremium, sectionInset, sectionY } from "@/lib/layout";

const slices = [
  { label: "Giving", pct: "10%", color: "#64748b", deg: [0, 36] as const },
  { label: "Needs", pct: "45%", color: "#1e3a5f", deg: [36, 198] as const },
  { label: "Wants", pct: "25%", color: "#7eb0ff", deg: [198, 288] as const },
  { label: "Saving", pct: "20%", color: "#5cb89a", deg: [288, 360] as const },
];

function AllocationPie() {
  const gradient = slices.map((s) => `${s.color} ${s.deg[0]}deg ${s.deg[1]}deg`).join(", ");

  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
      <div
        className="relative h-56 w-56 shrink-0 rounded-full shadow-[0_20px_60px_rgba(15,23,41,0.12)] ring-1 ring-navy/[0.06]"
        style={{ background: `conic-gradient(${gradient})` }}
        role="img"
        aria-label="Allocation: giving, needs, wants, saving"
      />
      <ul className="w-full max-w-sm space-y-4">
        {slices.map((s) => (
          <li
            key={s.label}
            className="flex items-center justify-between gap-4 rounded-2xl border border-navy/[0.06] bg-background/80 px-4 py-3 text-sm backdrop-blur-sm"
          >
            <span className="flex items-center gap-3">
              <span className="h-3 w-3 shrink-0 rounded-sm shadow-sm" style={{ backgroundColor: s.color }} aria-hidden />
              <span className="font-medium text-navy">{s.label}</span>
            </span>
            <span className="font-semibold tabular-nums text-muted-foreground">{s.pct}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AllocationSection() {
  return (
    <section className={`bg-background ${sectionY}`} aria-labelledby="allocation-heading">
      <div className={sectionInset}>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <SectionHeading
              id="allocation-heading"
              label="Allocation"
              title="A Proven Allocation Method That Keeps Spending Balanced"
              description="Needs, wants, saving, and giving each have a place. The structure creates calm: you decide the percentages once, then refine as life changes."
            />
            <ul className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  ·
                </span>
                <span>
                  <strong className="font-semibold text-navy">Discipline without rigidity</strong>—your
                  split reflects your values, not a template forced on you.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  ·
                </span>
                <span>
                  When income arrives, the system applies your plan so you always see what is safe to
                  spend and what is protected for goals.
                </span>
              </li>
            </ul>
          </FadeIn>
          <FadeIn>
            <div className={`${cardPremium} p-8 lg:p-10`}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">Your framework</h3>
              <p className="mt-2 text-base font-medium text-navy">Example starting balance</p>
              <div className="mt-8">
                <AllocationPie />
              </div>
              <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
                Percentages are illustrative defaults—adjust every category in the app to match your life.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
