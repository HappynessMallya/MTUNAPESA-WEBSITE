import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Terms and Conditions for MTU NA PESA: acceptable use, accounts, subscriptions, disclaimers, liability, and governing your use of the personal finance app.";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `Terms and Conditions — ${siteConfig.name}`,
    description,
    url: "/terms",
    type: "website",
  },
  twitter: {
    title: `Terms — ${siteConfig.name}`,
    description,
  },
  robots: { index: true, follow: true },
};

const effectiveDate = "April 4, 2026";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
      <FadeIn>
        <h1 className="text-section font-semibold text-navy">Terms and Conditions</h1>
        <p className="mt-2 text-sm font-medium text-navy">MTU NA PESA</p>
        <p className="mt-4 text-sm text-muted-foreground">Effective date: {effectiveDate}</p>
      </FadeIn>

      <div className="prose-custom mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
        <FadeIn>
          <section>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your use of the MTU NA PESA
              mobile application and related services (&quot;Service&quot;).
            </p>
            <p className="mt-3">By using the Service, you agree to these Terms.</p>
            <p className="mt-3">If you do not agree, please do not use the Service.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">1. Description of service</h2>
            <p className="mt-3">MTU NA PESA is a personal finance management application that allows users to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>record income</li>
              <li>record expenses</li>
              <li>track financial habits</li>
              <li>view financial reports</li>
              <li>set allocation preferences</li>
              <li>improve financial discipline</li>
            </ul>
            <p className="mt-3">
              MTU NA PESA does not provide financial, investment, or tax advice.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">2. User account</h2>
            <p className="mt-3">To use certain features, you must create an account.</p>
            <p className="mt-3">You agree to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>provide accurate information</li>
              <li>maintain confidentiality of login credentials</li>
              <li>notify us of unauthorized use</li>
            </ul>
            <p className="mt-3">You are responsible for activities under your account.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">3. Acceptable use</h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>use the Service for unlawful purposes</li>
              <li>attempt unauthorized access</li>
              <li>interfere with system security</li>
              <li>reverse engineer the software</li>
              <li>misuse the platform</li>
            </ul>
            <p className="mt-3">We may suspend accounts that violate these Terms.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">4. Financial information disclaimer</h2>
            <p className="mt-3">The Service provides informational tools only.</p>
            <p className="mt-3">We do not guarantee financial outcomes.</p>
            <p className="mt-3">Users are responsible for financial decisions.</p>
            <p className="mt-3">MTU NA PESA is not liable for financial losses.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">5. Subscriptions and payments</h2>
            <p className="mt-3">Some features may require paid subscriptions.</p>
            <p className="mt-3">Payments are processed through secure third-party providers.</p>
            <p className="mt-3">Subscriptions may renew automatically unless canceled.</p>
            <p className="mt-3">
              Users can cancel subscriptions via their app store account settings.
            </p>
            <p className="mt-3">We do not store payment card details.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">6. Intellectual property</h2>
            <p className="mt-3">All content, branding, and software are owned by MTU NA PESA.</p>
            <p className="mt-3">Users may not copy or distribute content without permission.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">7. Termination</h2>
            <p className="mt-3">We may suspend or terminate accounts that violate Terms.</p>
            <p className="mt-3">Users may stop using the Service at any time.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">8. Limitation of liability</h2>
            <p className="mt-3">The Service is provided &quot;as is&quot;.</p>
            <p className="mt-3">We are not liable for:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>financial losses</li>
              <li>data inaccuracies</li>
              <li>service interruptions</li>
              <li>technical errors</li>
            </ul>
            <p className="mt-3">To the maximum extent permitted by law.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">9. Privacy</h2>
            <p className="mt-3">
              Use of the Service is also governed by our{" "}
              <Link href="/privacy" className="font-medium text-accent underline-offset-2 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">10. Modifications</h2>
            <p className="mt-3">We may update these Terms.</p>
            <p className="mt-3">Continued use of the Service indicates acceptance of updates.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">11. Governing law</h2>
            <p className="mt-3">These Terms shall be governed by applicable laws.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">12. Contact</h2>
            <p className="mt-3">
              Email:{" "}
              <a
                href="mailto:info@sabyinfotech.com"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                info@sabyinfotech.com
              </a>
            </p>
            <p className="mt-3">
              Phone:{" "}
              <a
                href="tel:+255663586648"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                +255 663 586 648
              </a>
            </p>
            <p className="mt-3">
              <Link href="/contact" className="font-medium text-accent underline-offset-2 hover:underline">
                Contact form
              </Link>
            </p>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
