import { FadeIn } from "@/components/FadeIn";
import { sectionInset, sectionY } from "@/lib/layout";

/** Placeholder for future testimonials, beta quotes, and transformation stories. */
export function SocialProofSection() {
  return (
    <section
      className={`${sectionY} border-y border-navy/[0.05] bg-gradient-to-b from-surface/50 to-background`}
      aria-labelledby="social-proof-heading"
    >
      <div className={`${sectionInset} text-center`}>
        <FadeIn>
          <h2 id="social-proof-heading" className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Voices (coming soon)
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base font-medium text-navy">
            We are collecting early stories from people building discipline with MTU NA PESA—real
            quotes, not hype.
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Beta testimonials and transformation narratives will appear here to help you see how
            others use the system in everyday life.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
