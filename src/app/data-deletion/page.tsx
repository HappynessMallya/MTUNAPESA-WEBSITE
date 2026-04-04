import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

const description =
  "Request permanent deletion of your MTU NA PESA account, financial records, and analytics. Processing time, verification, and what data is removed.";

export const metadata: Metadata = {
  title: "Data Deletion Request",
  description,
  alternates: { canonical: "/data-deletion" },
  openGraph: {
    title: `Data deletion — ${siteConfig.name}`,
    description,
    url: "/data-deletion",
    type: "website",
  },
  twitter: {
    title: `Data deletion — ${siteConfig.name}`,
    description,
  },
  robots: { index: true, follow: true },
};

const deletionEmail = "info@sabyinfotech.com";
const mailtoDeletion = `mailto:${deletionEmail}?subject=${encodeURIComponent("Data Deletion Request")}`;

const exampleMessage = `Hello, I would like to permanently delete my MTU NA PESA account and all associated data. My registered email is:

[your email]`;

export default function DataDeletionPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
      <FadeIn>
        <h1 className="text-section font-semibold text-navy">Data Deletion Request</h1>
        <p className="mt-2 text-sm font-medium text-navy">MTU NA PESA</p>
      </FadeIn>

      <div className="prose-custom mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">Introduction</h2>
            <p className="mt-3">
              MTU NA PESA respects your privacy and gives you full control over your personal data.
            </p>
            <p className="mt-3">
              If you would like to delete your account and all associated financial records, you may
              request permanent deletion using the contact details below.
            </p>
            <p className="mt-3">
              Deleting your account will permanently remove your stored information from our systems.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">What data will be deleted</h2>
            <p className="mt-3">When your deletion request is processed, we will permanently remove:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>your account information</li>
              <li>your email address</li>
              <li>income records</li>
              <li>expense records</li>
              <li>savings goals</li>
              <li>financial categories</li>
              <li>allocation preferences</li>
              <li>habit tracking records</li>
              <li>analytics related to your account</li>
            </ul>
            <p className="mt-3">After deletion, your data cannot be recovered.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">How to request data deletion</h2>
            <p className="mt-3">
              To request deletion of your data, please contact us using the information below.
            </p>
            <p className="mt-3">
              Provide the email address associated with your MTU NA PESA account.
            </p>
            <p className="mt-3">
              We may request confirmation to verify account ownership before processing the deletion
              request.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">Contact information</h2>
            <p className="mt-3">
              Email:{" "}
              <a
                href={mailtoDeletion}
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                {deletionEmail}
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
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Subject line suggestion
            </p>
            <p className="mt-2 rounded-lg border border-border bg-surface px-4 py-3 font-mono text-xs text-navy">
              Data Deletion Request
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Example message
            </p>
            <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded-lg border border-border bg-surface p-4 font-mono text-xs leading-relaxed text-navy">
              {exampleMessage}
            </pre>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">Processing time</h2>
            <p className="mt-3">We aim to process deletion requests within:</p>
            <p className="mt-3 font-medium text-navy">7 to 14 business days</p>
            <p className="mt-3">You will receive confirmation once the deletion is complete.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">Important notice</h2>
            <p className="mt-3 font-medium text-navy">Account deletion is permanent.</p>
            <p className="mt-3">Once deleted:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>your financial records cannot be recovered</li>
              <li>your analytics history will be lost</li>
              <li>your habit tracking history will be removed</li>
            </ul>
            <p className="mt-3">
              If you wish to use the app again in the future, you will need to create a new account.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">Security</h2>
            <p className="mt-3">
              We may request identity verification before processing deletion requests to protect
              your data from unauthorized removal.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-base font-semibold text-navy">Updates</h2>
            <p className="mt-3">
              We may update this page to reflect changes in legal or technical requirements.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="border-t border-border pt-10">
            <p className="text-sm font-semibold text-navy">MTU NA PESA</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Helping individuals understand their finances with clarity and discipline.
            </p>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
