import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import {
  IconBell,
  IconChart,
  IconDownload,
  IconExpense,
  IconLayers,
  IconLoan,
  IconPie,
  IconReport,
  IconSliders,
  IconSpark,
  IconTarget,
} from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";
import { featureGroups, featureList, type FeatureId } from "@/data/features";
import { HOME_SECTION_BG } from "@/lib/home-section-bg";
import { cardPremium, sectionInset, sectionY } from "@/lib/layout";

const featureIcons: Record<FeatureId, typeof IconPie> = {
  allocation: IconPie,
  tracking: IconExpense,
  savings: IconTarget,
  loan: IconLoan,
  reports: IconReport,
  categoryBudgets: IconSliders,
  ai: IconSpark,
  notifications: IconBell,
  multi: IconLayers,
  export: IconDownload,
};

export function FeaturesSection() {
  const byId = Object.fromEntries(featureList.map((f) => [f.id, f])) as Record<
    FeatureId,
    (typeof featureList)[0]
  >;

  return (
    <section
      className={`border-t border-navy/[0.06] ${HOME_SECTION_BG.features} ${sectionY}`}
      aria-labelledby="features-heading"
    >
      <div className={sectionInset}>
        <FadeIn>
          <SectionHeading
            id="features-heading"
            label="Core features"
            title="Everything Your Financial Operating System Needs"
            description="Allocation, tracking, goals, loans, analytics, budgets, AI, notifications, multi-account, and export—aligned with how the app actually works."
          />
        </FadeIn>

        <div className="mt-4 space-y-14 lg:mt-8 lg:space-y-20">
          {featureGroups.map((group) => (
            <div key={group.title}>
              <FadeIn>
                <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted lg:mb-8">
                  {group.title}
                </h3>
              </FadeIn>
              <div
                className={
                  group.ids.length === 1
                    ? "mx-auto grid max-w-2xl gap-5 lg:gap-6"
                    : "grid gap-5 sm:grid-cols-2 lg:gap-6"
                }
              >
                {group.ids.map((id, fi) => {
                  const f = byId[id];
                  const Icon = featureIcons[id];
                  return (
                    <div key={id}>
                      <FadeIn>
                        <article
                          className={`${cardPremium} flex h-full flex-col p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(15,23,41,0.1)] sm:p-7 ${
                            fi === 1 ? "lg:translate-y-5" : fi === 0 && group.ids.length > 1 ? "lg:-translate-y-1" : ""
                          }`}
                        >
                          <Icon className="h-7 w-7 text-navy/75" aria-hidden />
                          <h4 className="mt-4 text-base font-semibold text-navy">{f.title}</h4>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                        </article>
                      </FadeIn>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <FadeIn>
          <p className="mt-14 text-center text-sm text-muted-foreground lg:mt-20">
            <Link href="/features" className="font-medium text-accent underline-offset-2 hover:underline">
              Deeper feature walkthrough
            </Link>{" "}
            for analytical readers—problem, solution, and benefit for each cluster.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
