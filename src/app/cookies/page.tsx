import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Cookies Policy for MTU NA PESA: essential, analytics, and functional cookies; third parties; how to control cookies; retention; and consent on this marketing site.";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description,
  alternates: { canonical: "/cookies" },
  openGraph: {
    title: `Cookies Policy — ${siteConfig.name}`,
    description,
    url: "/cookies",
    type: "website",
  },
  twitter: {
    title: `Cookies Policy — ${siteConfig.name}`,
    description,
  },
  robots: { index: true, follow: true },
};

const effectiveDate = "April 4, 2026";

export default function CookiesPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
      <FadeIn>
        <h1 className="text-section font-semibold text-navy">Cookies Policy</h1>
        <p className="mt-2 text-sm font-medium text-navy">MTU NA PESA</p>
        <p className="mt-4 text-sm text-muted-foreground">Effective date: {effectiveDate}</p>
      </FadeIn>

      <div className="prose-custom mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
        <FadeIn>
          <section>
            <p>
              This Cookies Policy explains how MTU NA PESA (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;) uses cookies and similar technologies when you visit our website.
            </p>
            <p className="mt-3">
              By continuing to browse the website, you agree to our use of cookies as described in
              this policy.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">1. What are cookies</h2>
            <p className="mt-3">
              Cookies are small text files stored on your device when you visit a website.
            </p>
            <p className="mt-3">
              They help websites function properly and improve user experience by remembering
              preferences and understanding how visitors use the website.
            </p>
            <p className="mt-3">Cookies do not usually contain personally identifiable information.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">2. How we use cookies</h2>
            <p className="mt-3">We use cookies to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>ensure the website functions properly</li>
              <li>remember user preferences</li>
              <li>understand website traffic</li>
              <li>improve performance and design</li>
              <li>measure marketing effectiveness</li>
              <li>enhance security</li>
            </ul>
            <p className="mt-3">Cookies help us make the website faster and more useful.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">3. Types of cookies we use</h2>

            <h3 className="mt-6 text-sm font-semibold text-navy">Essential cookies</h3>
            <p className="mt-3">These cookies are necessary for the website to work.</p>
            <p className="mt-3">Examples:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>saving cookie consent preferences</li>
              <li>maintaining session security</li>
              <li>preventing fraudulent activity</li>
            </ul>
            <p className="mt-3">These cookies cannot be disabled.</p>

            <h3 className="mt-6 text-sm font-semibold text-navy">Analytics cookies</h3>
            <p className="mt-3">These cookies help us understand how visitors use the website.</p>
            <p className="mt-3">Examples:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>pages visited</li>
              <li>time spent on pages</li>
              <li>navigation patterns</li>
            </ul>
            <p className="mt-3">We use this information to improve usability.</p>
            <p className="mt-3">Tools may include:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Google Analytics or similar privacy-focused analytics tools.</li>
            </ul>

            <h3 className="mt-6 text-sm font-semibold text-navy">Functional cookies</h3>
            <p className="mt-3">These cookies remember your preferences.</p>
            <p className="mt-3">Examples:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>language settings</li>
              <li>theme preferences</li>
              <li>form input memory</li>
            </ul>
            <p className="mt-3">They help improve convenience.</p>

            <h3 className="mt-6 text-sm font-semibold text-navy">Performance cookies</h3>
            <p className="mt-3">These cookies help measure website performance.</p>
            <p className="mt-3">Examples:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>page load speed</li>
              <li>technical errors</li>
              <li>system reliability</li>
            </ul>
            <p className="mt-3">They help us improve the service.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">4. Third-party cookies</h2>
            <p className="mt-3">
              Some cookies may be set by trusted third-party services used on our website, such as:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>analytics providers</li>
              <li>security tools</li>
              <li>hosting providers</li>
            </ul>
            <p className="mt-3">These providers are required to protect user data.</p>
            <p className="mt-3">We do not sell cookie data.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">5. How to control cookies</h2>
            <p className="mt-3">You can control or delete cookies through your browser settings.</p>
            <p className="mt-3">Most browsers allow you to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>view stored cookies</li>
              <li>delete cookies</li>
              <li>block cookies</li>
              <li>restrict tracking</li>
            </ul>
            <p className="mt-3">Disabling cookies may affect website functionality.</p>
            <p className="mt-3">
              On this site, you can also use the cookie banner (when shown) or{" "}
              <strong className="font-semibold text-navy">Manage preferences</strong> to allow or
              reject optional categories. Clearing your browser cookies will reset your choice and
              the banner may appear again.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">6. Cookie retention</h2>
            <p className="mt-3">Cookies may be stored for different durations:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold text-navy">Session cookies:</strong> deleted when
                the browser closes
              </li>
              <li>
                <strong className="font-semibold text-navy">Persistent cookies:</strong> stored for
                a defined period
              </li>
            </ul>
            <p className="mt-3">We only retain cookies as long as necessary.</p>
            <p className="mt-3">
              Your consent choices for this website are stored in a cookie named{" "}
              <code className="rounded bg-accent-soft/60 px-1.5 py-0.5 text-xs text-navy">
                mtunapesa_consent
              </code>{" "}
              (up to approximately six months unless you clear cookies).
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">7. Changes to this policy</h2>
            <p className="mt-3">We may update this Cookies Policy periodically.</p>
            <p className="mt-3">Changes will be posted on this page.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">8. Contact</h2>
            <p className="mt-3">For questions regarding this Cookies Policy:</p>
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
              See also our{" "}
              <Link href="/privacy" className="font-medium text-accent underline-offset-2 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="border-t border-border pt-10">
            <h2 className="text-base font-semibold text-navy">
              How cookies are actually captured (technical explanation)
            </h2>
            <p className="mt-3">When a user visits the website:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>the browser may store a small text file (a cookie) for the site.</li>
            </ul>
            <p className="mt-3">Example:</p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-xs text-navy">
              user_cookie_consent=true
            </pre>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">Common cookies for SaaS websites</h2>

            <h3 className="mt-4 text-sm font-semibold text-navy">Consent cookie</h3>
            <p className="mt-3">Stores whether the user accepted cookies.</p>
            <p className="mt-3">Example:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Cookie name: <code className="text-xs text-navy">cookieConsent</code> (or a
                site-specific name such as <code className="text-xs text-navy">mtunapesa_consent</code>)
              </li>
              <li>
                Value: e.g. accepted / structured JSON for categories
              </li>
              <li>Expiry: e.g. 6 months</li>
            </ul>

            <h3 className="mt-6 text-sm font-semibold text-navy">Analytics cookie</h3>
            <p className="mt-3">Example Google Analytics cookies:</p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-xs text-navy">
              _ga{"\n"}
              _gid
            </pre>
            <p className="mt-3">These store anonymous usage behaviour where such tools are enabled.</p>

            <h3 className="mt-6 text-sm font-semibold text-navy">Session cookie</h3>
            <p className="mt-3">Example:</p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-xs text-navy">
              session_id
            </pre>
            <p className="mt-3">Used for authentication or form persistence where applicable.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">Simple cookie implementation flow</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>User visits website</li>
              <li>Cookie banner appears</li>
              <li>User clicks Accept</li>
              <li>
                Browser stores cookie, e.g. <code className="text-xs text-navy">cookieConsent = true</code>
              </li>
              <li>Analytics scripts allowed to run (if the user consented to analytics)</li>
            </ol>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">Simple JavaScript example</h2>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-xs leading-relaxed text-navy">
              {`localStorage.setItem("cookieConsent", "accepted");

// or

document.cookie = "cookieConsent=true; max-age=31536000; path=/";`}
            </pre>
            <p className="mt-3 text-xs text-muted">
              This site uses a first-party cookie with a JSON payload for category choices instead of
              only a boolean, so preferences can be granular.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">Cookie categories to implement</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold text-navy">Essential</strong> — always active
              </li>
              <li>
                <strong className="font-semibold text-navy">Analytics</strong> — optional
              </li>
              <li>
                <strong className="font-semibold text-navy">Marketing</strong> — optional (future)
              </li>
            </ul>
            <p className="mt-3">
              The live banner on this website supports Essential (always on), optional Analytics,
              and optional Functional cookies, aligned with this structure.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <details className="rounded-xl border border-border bg-surface p-5">
              <summary className="cursor-pointer text-sm font-semibold text-navy">
                Design brief (reference for v0, Lovable, Figma AI, Bolt, Cursor, etc.)
              </summary>
              <div className="mt-4 space-y-4 text-xs text-muted-foreground">
                <p className="font-medium text-navy">Prompt — premium cookie consent banner</p>
                <pre className="max-h-[28rem] overflow-y-auto whitespace-pre-wrap rounded-lg border border-border bg-background p-4 font-mono text-[11px] leading-relaxed text-navy">
                  {`Design a premium cookie consent banner for a fintech website called:

MTU NA PESA

Style:

minimal
professional
clean
high-end SaaS
calm fintech style

Design inspiration:

Stripe
Notion
Vercel
Apple

BANNER LAYOUT

position:

bottom of screen

or

small modal center

rounded corners

soft shadow

clean spacing

TEXT CONTENT

Title:

We Respect Your Privacy

Body text:

We use cookies to improve website performance, understand usage patterns, and enhance user experience.

You can choose which cookies to allow.

Buttons:

Accept all

Reject non-essential

Manage preferences

DESIGN STYLE

background:

white

border:

light gray

primary button:

deep navy blue

secondary button:

outline style

font:

modern sans serif

Inter style

spacing:

comfortable padding

subtle animation when appearing.

PREFERENCES MODAL

when clicking Manage preferences:

show categories:

Essential cookies (always active)

Analytics cookies (toggle)

Functional cookies (toggle)

buttons:

Save preferences

Accept all

TECH REQUIREMENTS

responsive

accessible

lightweight

fast loading

GDPR style structure`}
                </pre>
              </div>
            </details>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
