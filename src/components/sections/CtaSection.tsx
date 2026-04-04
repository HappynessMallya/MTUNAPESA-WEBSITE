import { FadeIn } from "@/components/FadeIn";
import { sectionInset, sectionY } from "@/lib/layout";

export function CtaSection() {
  return (
    <section
      id="cta"
      className={`${sectionY} border-t border-white/5 bg-navy text-white`}
      aria-labelledby="cta-heading"
    >
      <div className={`${sectionInset} text-center`}>
        <FadeIn>
          <h2 id="cta-heading" className="mx-auto max-w-2xl text-[clamp(1.5rem,3vw+0.75rem,2.125rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
            Your Financial Discipline Starts Today
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/65">
            Small habits create powerful results. Download MTU NA PESA and begin with one clear
            allocation plan—then refine as you learn.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://apps.apple.com/app/mtu-na-pesa"
              className="inline-flex min-h-12 min-w-[200px] items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-navy shadow-lg shadow-black/20 transition hover:bg-white/95"
              rel="noopener noreferrer"
              target="_blank"
              data-analytics="download-app-store"
            >
              Download MTU NA PESA — App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.mtunapesa.app"
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
