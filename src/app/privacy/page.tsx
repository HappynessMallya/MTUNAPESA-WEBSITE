import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Privacy Policy for MTU NA PESA: data collection, financial records, security, retention, your rights, and how we protect personal information in our finance app and website.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `Privacy Policy — ${siteConfig.name}`,
    description,
    url: "/privacy",
    type: "website",
  },
  twitter: {
    title: `Privacy Policy — ${siteConfig.name}`,
    description,
  },
  robots: { index: true, follow: true },
};

const effectiveDate = "April 4, 2026";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
      <FadeIn>
        <h1 className="text-section font-semibold text-navy">Privacy Policy</h1>
        <p className="mt-2 text-sm font-medium text-navy">MTU NA PESA</p>
        <p className="mt-4 text-sm text-muted-foreground">Effective date: {effectiveDate}</p>
      </FadeIn>

      <div className="prose-custom mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
        <FadeIn>
          <section>
            <p>
              MTU NA PESA (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy
              and is committed to protecting your personal information. This Privacy Policy explains
              how we collect, use, and protect your information when you use the MTU NA PESA mobile
              application and website (&quot;Service&quot;).
            </p>
            <p className="mt-3">
              If you do not agree with this Privacy Policy, please do not use the Service.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">1. Information we collect</h2>
            <p className="mt-3">
              We collect only the information necessary to provide and improve our Service.
            </p>

            <h3 className="mt-6 text-sm font-semibold text-navy">1.1 Information you provide</h3>
            <p className="mt-3">When using the Service, you may provide:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>email address</li>
              <li>account login credentials</li>
              <li>
                financial entries such as income, expenses, categories, and savings goals
              </li>
              <li>app preferences and settings</li>
            </ul>
            <p className="mt-3">
              We do <strong className="font-semibold text-navy">not</strong> require bank account
              credentials or mobile money credentials.
            </p>

            <h3 className="mt-6 text-sm font-semibold text-navy">1.2 Automatically collected information</h3>
            <p className="mt-3">We may automatically collect:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>device type</li>
              <li>operating system</li>
              <li>app version</li>
              <li>usage activity inside the app</li>
              <li>error logs</li>
            </ul>
            <p className="mt-3">This helps us improve performance and stability.</p>

            <h3 className="mt-6 text-sm font-semibold text-navy">1.3 Financial information</h3>
            <p className="mt-3">MTU NA PESA stores financial records entered by users, including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>income records</li>
              <li>expense records</li>
              <li>financial categories</li>
              <li>savings goals</li>
              <li>allocation preferences</li>
            </ul>
            <p className="mt-3">
              This information is used only to provide analytics and insights to the user.
            </p>
            <p className="mt-3">
              We do not sell or share financial records with third parties for marketing purposes.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">2. How we use your information</h2>
            <p className="mt-3">We use your information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>provide core app functionality</li>
              <li>store your financial records securely</li>
              <li>generate financial insights and reports</li>
              <li>improve the user experience</li>
              <li>detect technical issues</li>
              <li>maintain security and prevent fraud</li>
              <li>communicate important service updates</li>
            </ul>
            <p className="mt-3">
              We do <strong className="font-semibold text-navy">not</strong> sell your personal data.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">3. Data security</h2>
            <p className="mt-3">
              We implement industry-standard security measures to protect your data, including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>encrypted data transmission (HTTPS)</li>
              <li>secure authentication systems</li>
              <li>restricted database access</li>
              <li>server-level protections</li>
            </ul>
            <p className="mt-3">
              We strive to protect your information but cannot guarantee absolute security.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">4. Data storage</h2>
            <p className="mt-3">Your data is stored on secure cloud infrastructure.</p>
            <p className="mt-3">
              We retain data as long as your account remains active or as needed to provide
              services.
            </p>
            <p className="mt-3">You may request deletion of your account at any time.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">5. Data sharing</h2>
            <p className="mt-3">We do not sell personal data.</p>
            <p className="mt-3">
              We may share limited data with trusted service providers necessary to operate the
              Service, including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>cloud hosting providers</li>
              <li>analytics tools</li>
              <li>payment processors</li>
            </ul>
            <p className="mt-3">These providers are required to protect your information.</p>
            <p className="mt-3">We may disclose information if required by law.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">6. Third-party services</h2>
            <p className="mt-3">The Service may use third-party services such as:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>authentication providers</li>
              <li>payment processors</li>
              <li>analytics tools</li>
            </ul>
            <p className="mt-3">These services have their own privacy policies.</p>
            <p className="mt-3">
              For how we use cookies on our website, see our{" "}
              <Link href="/cookies" className="font-medium text-accent underline-offset-2 hover:underline">
                Cookies Policy
              </Link>
              .
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">7. User rights</h2>
            <p className="mt-3">You have the right to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>access your data</li>
              <li>update your information</li>
              <li>delete your account</li>
              <li>request correction of inaccurate data</li>
            </ul>
            <p className="mt-3">To request data deletion, contact:</p>
            <p className="mt-3">
              <a
                href="mailto:info@sabyinfotech.com"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                info@sabyinfotech.com
              </a>
            </p>
            <p className="mt-3">
              For what we delete and how to submit a request, see our{" "}
              <Link
                href="/data-deletion"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                Data Deletion Request
              </Link>{" "}
              page.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">8. Children&apos;s privacy</h2>
            <p className="mt-3">The Service is not intended for children under 13.</p>
            <p className="mt-3">We do not knowingly collect information from children.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">9. Changes to this policy</h2>
            <p className="mt-3">We may update this Privacy Policy from time to time.</p>
            <p className="mt-3">We will notify users of significant changes.</p>
            <p className="mt-3">Continued use of the Service indicates acceptance of updates.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">10. Contact</h2>
            <p className="mt-3">If you have questions about this Privacy Policy:</p>
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
              You can also reach us via our{" "}
              <Link href="/contact" className="font-medium text-accent underline-offset-2 hover:underline">
                contact page
              </Link>
              .
            </p>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
