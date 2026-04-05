import { ButtonSecondary } from "@/components/Button";
import { PhoneHeroMockup } from "@/components/PhoneMockup";
import { HOME_SECTION_BG } from "@/lib/home-section-bg";
import { sectionInset } from "@/lib/layout";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

const trust = ["Private", "Secure", "No ads", "No data selling"];

/** One viewport below sticky navbar (`100svh` avoids mobile URL-bar jump vs `100vh`) */
const heroMinHeight = "min-h-[calc(100svh-5rem)]";

export function HeroSection() {
  return (
    <section
      className={`${HOME_SECTION_BG.hero} relative flex w-full flex-col border-b border-navy/[0.07] ${heroMinHeight}`}
      aria-label="Introduction"
    >
      <div className={`${sectionInset} relative z-10 flex flex-1 flex-col justify-center py-10 pb-16 md:py-12 md:pb-20 lg:py-14 lg:pb-24`}>
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="border-l border-navy/[0.12] pl-5 sm:pl-6 md:pl-8">
            <div className="-ml-1 mb-5 flex items-center gap-3 lg:mb-6">
              <Image
                src="/icon.png"
                alt=""
                width={44}
                height={44}
                className="h-10 w-10 rounded-xl border border-navy/[0.08] bg-white object-cover shadow-sm sm:h-11 sm:w-11"
                priority
              />
              <div>
                <p className="text-sm font-semibold text-navy">MTU NA PESA</p>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Personal finance
                </p>
              </div>
            </div>
            <h1 className="font-serif max-w-[20ch] text-[clamp(2.125rem,3.5vw+1rem,3.125rem)] font-medium leading-[1.14] tracking-[-0.02em] text-navy">
              Take control of every shilling
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-muted-foreground md:text-[17px]">
              Mtu na Pesa is your personal financial operating system. Track income, manage expenses, set
              savings goals, and build financial discipline—all in one app.
            </p>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
              <Link
                href="/features"
                className="text-navy underline decoration-navy/20 underline-offset-[3px] transition hover:decoration-navy/50"
              >
                Features
              </Link>
              <span className="mx-2 text-border">·</span>
              <Link
                href="/faq"
                className="text-navy underline decoration-navy/20 underline-offset-[3px] transition hover:decoration-navy/50"
              >
                FAQ
              </Link>
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={siteConfig.appStoreUrl}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-navy px-6 text-sm font-semibold text-white shadow-md transition hover:bg-navy-muted hover:shadow-lg"
                rel="noopener noreferrer"
                target="_blank"
                data-analytics="download-app-store-hero"
              >
                Download — App Store
              </a>
              <a
                href={siteConfig.playStoreUrl}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border/90 bg-surface/95 px-6 text-sm font-semibold text-navy shadow-sm backdrop-blur-sm transition hover:border-navy/12 hover:bg-surface"
                rel="noopener noreferrer"
                target="_blank"
                data-analytics="download-play-store-hero"
              >
                Download — Google Play
              </a>
              <ButtonSecondary href="/#how-it-works">See how it works</ButtonSecondary>
            </div>
            <p className="mt-10 text-[11px] tracking-wide text-muted-foreground">{trust.join(" · ")}</p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[252px] shadow-[0_20px_50px_rgba(15,23,41,0.08)] sm:max-w-[280px] lg:max-w-[300px]">
              <PhoneHeroMockup />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#problem-heading"
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-0.5 rounded-full px-3 py-2 text-muted-foreground transition hover:text-navy motion-reduce:animate-none motion-safe:animate-bounce"
        aria-label="Scroll to the next section"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Scroll</span>
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
