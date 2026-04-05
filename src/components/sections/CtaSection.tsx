import { FadeIn } from "@/components/FadeIn";
import { HOME_SECTION_BG } from "@/lib/home-section-bg";
import { sectionInset, sectionY } from "@/lib/layout";
import { siteConfig } from "@/lib/site";

export function CtaSection() {
  return (
    <section
      id="cta"
      className={`${HOME_SECTION_BG.cta} ${sectionY} border-t border-white/10 text-white`}
      aria-labelledby="cta-heading"
    >
      <div className={`${sectionInset} text-center`}>
        <FadeIn>
          <h2 id="cta-heading" className="mx-auto max-w-2xl text-[clamp(1.5rem,3vw+0.75rem,2.125rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
            Your money deserves a plan.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/65">
            Download Mtu na Pesa and start building financial discipline today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={siteConfig.appStoreUrl}
              className="inline-flex min-h-12 min-w-[200px] items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-navy shadow-lg shadow-black/20 transition hover:bg-white/95"
              rel="noopener noreferrer"
              target="_blank"
              data-analytics="download-app-store"
            >
              App Store
            </a>
            <a
              href={siteConfig.playStoreUrl}
              className="inline-flex min-h-12 min-w-[200px] items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              rel="noopener noreferrer"
              target="_blank"
              data-analytics="download-play-store"
            >
              Google Play
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
