import { ButtonPrimary, ButtonSecondary } from "@/components/Button";
import { PhoneHeroMockup } from "@/components/PhoneMockup";
import { HOME_SECTION_BG } from "@/lib/home-section-bg";
import { sectionInset } from "@/lib/layout";
import Image from "next/image";
import Link from "next/link";

const trust = ["Private", "Secure", "No ads", "No data selling"];

export function HeroSection() {
  return (
    <section
      className={`${HOME_SECTION_BG.hero} border-b border-navy/[0.07] py-10 pb-12 md:py-12 md:pb-14 lg:py-14 lg:pb-16`}
    >
      <div className={sectionInset}>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="border-l border-navy/[0.12] pl-6 md:pl-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Personal finance
            </p>
            <h1 className="font-serif mt-5 max-w-[22ch] text-[clamp(2.125rem,3.5vw+1rem,3.125rem)] font-medium leading-[1.14] tracking-[-0.02em] text-navy">
              Take control of your money with calm clarity
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.7] text-muted-foreground md:text-[17px]">
              MTU NA PESA helps you track spending, organize income, and build money habits with a
              simple, structured system.
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
              <ButtonPrimary href="/#cta">Start building financial discipline</ButtonPrimary>
              <ButtonSecondary href="/#how-it-works">See how it works</ButtonSecondary>
            </div>
            <p className="mt-10 text-[11px] tracking-wide text-muted-foreground">{trust.join(" · ")}</p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex max-w-[300px] flex-col items-center gap-5">
              <div className="flex items-center gap-3 self-start lg:self-center">
                <Image
                  src="/icon.png"
                  alt="MTU NA PESA"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-xl border border-navy/[0.08] bg-white object-cover shadow-sm"
                  priority
                />
                <div className="text-left">
                  <p className="text-sm font-semibold text-navy">MTU NA PESA</p>
                  <p className="text-xs text-muted-foreground">Overview</p>
                </div>
              </div>
              <div className="shadow-[0_20px_50px_rgba(15,23,41,0.08)]">
                <PhoneHeroMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
