import { ButtonPrimary, ButtonSecondary } from "@/components/Button";
import { PhoneHeroMockup } from "@/components/PhoneMockup";
import { sectionInset } from "@/lib/layout";
import Image from "next/image";
import Link from "next/link";

const trust = ["Private", "Secure", "No ads", "No data selling"];

const microStats = [
  {
    title: "Consistent logging",
    body: "Designed so thorough expense tracking feels sustainable—not a chore.",
  },
  {
    title: "Saving habits",
    body: "Structure that reinforces the small wins that compound over months.",
  },
  {
    title: "Long-term discipline",
    body: "Built for people who want calm control, not a quick fix.",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-navy/[0.06] pb-16 pt-12 md:pb-24 md:pt-16 lg:pb-[7.5rem] lg:pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="hero-noise absolute inset-0 opacity-[0.4]" />
        <div className="absolute -right-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent/[0.14] blur-3xl sm:h-[34rem] sm:w-[34rem]" />
        <div className="absolute -bottom-48 -left-32 h-[26rem] w-[26rem] rounded-full bg-success/[0.11] blur-3xl" />
        <div className="absolute left-[12%] top-1/3 h-72 w-72 rounded-full bg-accent-soft/40 blur-3xl lg:left-[36%]" />
        <div className="hero-grid absolute inset-0 opacity-[0.28]" />
      </div>

      <div className={`relative ${sectionInset}`}>
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12 lg:gap-y-16">
          <div className="lg:col-span-6 xl:col-span-5">
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-navy/[0.08] bg-surface/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success/35 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Calm · Structured · Serious
            </p>
            <h1 className="max-w-[22ch] text-[clamp(2.35rem,4.8vw+0.85rem,3.65rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-navy">
              Take Control of Your Money With{" "}
              <span className="bg-accent-gradient bg-clip-text text-transparent">Calm Clarity</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg font-normal leading-relaxed text-muted-foreground lg:text-[1.125rem] lg:leading-[1.65]">
              MTU NA PESA helps you track spending, organize your income, and build strong money habits
              using a simple structured system—serious enough to change how you feel about money.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Explore{" "}
              <Link href="/features" className="font-medium text-accent underline-offset-2 hover:underline">
                everything the app does
              </Link>{" "}
              or read the{" "}
              <Link href="/faq" className="font-medium text-accent underline-offset-2 hover:underline">
                FAQ
              </Link>{" "}
              when you are ready to go deeper.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonPrimary href="/#cta">Start building financial discipline</ButtonPrimary>
              <ButtonSecondary href="/#how-it-works">See how it works</ButtonSecondary>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-success" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <ul className="mt-12 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {microStats.map((s) => (
                <li
                  key={s.title}
                  className="rounded-[20px] border border-navy/[0.06] bg-surface/90 p-4 shadow-[0_10px_40px_rgba(15,23,41,0.06)] ring-1 ring-white/50 backdrop-blur-sm"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">{s.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center lg:col-span-6 xl:col-span-7 lg:justify-end">
            <div className="relative w-full max-w-[340px]">
              <div
                className="absolute -right-8 top-1/4 hidden h-48 w-64 rounded-2xl border border-white/40 bg-surface/40 shadow-[0_20px_50px_rgba(15,23,41,0.1)] backdrop-blur-md lg:block"
                aria-hidden
              />
              <div
                className="absolute -bottom-6 -left-6 hidden h-32 w-44 rounded-2xl border border-navy/[0.06] bg-gradient-to-br from-accent-soft/80 to-surface/90 shadow-lg lg:block"
                aria-hidden
              />
              <div
                className="absolute left-1/2 top-1/2 h-[min(100%,460px)] w-[min(100%,460px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent/25 via-transparent to-success/15 blur-3xl"
                aria-hidden
              />
              <div className="relative flex justify-center drop-shadow-[0_32px_64px_rgba(15,23,41,0.15)]">
                <Image
                  src="/icon.png"
                  alt="MTU NA PESA app icon"
                  width={56}
                  height={56}
                  className="absolute -left-1 top-10 z-10 h-14 w-14 rounded-[1.15rem] border border-white/90 bg-surface object-cover shadow-[0_12px_32px_rgba(15,23,41,0.15)] lg:-left-2 lg:top-14"
                  priority
                />
                <PhoneHeroMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
