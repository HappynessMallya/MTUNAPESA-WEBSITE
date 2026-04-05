import { FadeIn } from "@/components/FadeIn";
import { IconShield } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";
import { HOME_SECTION_BG } from "@/lib/home-section-bg";
import { cardPremium, sectionInset, sectionY } from "@/lib/layout";
import { siteConfig } from "@/lib/site";

const points = [
  "Bank-grade encryption for all data",
  "Secure token storage on device (Keychain / Keystore)",
  "No passwords stored in plain text—industry-standard hashing",
  "Biometric authentication ready (Face ID / Touch ID)",
];

export function TrustSection() {
  return (
    <section className={`${HOME_SECTION_BG.trust} ${sectionY}`} aria-labelledby="trust-heading">
      <div className={sectionInset}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <FadeIn>
            <div
              className={`${cardPremium} mx-auto flex h-52 max-w-md items-center justify-center lg:mx-0 lg:h-60`}
            >
              <div className="text-center">
                <IconShield className="mx-auto h-16 w-16 text-navy/15" aria-hidden />
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted">
                  Security & privacy
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <SectionHeading
              id="trust-heading"
              label="Trust"
              title="Security & Privacy"
              description="Your money data deserves the same rigor as banking software—without turning the app into a billboard."
            />
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-navy">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Official policies for the finance product are published on our finance portal:{" "}
              <a
                href={siteConfig.financePortalPrivacy}
                className="font-medium text-accent underline-offset-2 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Privacy
              </a>
              {" · "}
              <a
                href={siteConfig.financePortalTerms}
                className="font-medium text-accent underline-offset-2 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Terms
              </a>
              {" · "}
              <a
                href={siteConfig.financePortalDataDeletion}
                className="font-medium text-accent underline-offset-2 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Data deletion
              </a>
              . This marketing site also mirrors{" "}
              <a href="/privacy" className="font-medium text-accent underline-offset-2 hover:underline">
                Privacy
              </a>
              ,{" "}
              <a href="/terms" className="font-medium text-accent underline-offset-2 hover:underline">
                Terms
              </a>
              , and{" "}
              <a href="/data-deletion" className="font-medium text-accent underline-offset-2 hover:underline">
                Data deletion
              </a>{" "}
              for convenience.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
