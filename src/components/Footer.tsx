import Image from "next/image";
import Link from "next/link";

const product = [
  { href: "/features", label: "Features" },
  { href: "/faq", label: "FAQ" },
  { href: "/#cta", label: "Download" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  { href: "/data-deletion", label: "Data deletion" },
];

export function Footer() {
  return (
    <footer className="border-t border-navy/[0.08] bg-surface/95 backdrop-blur-md">
      <div className="mx-auto max-w-content px-6 py-14 md:py-20 lg:px-8 lg:py-[7.5rem]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex rounded-xl outline-offset-4">
              <Image
                src="/logo.png"
                alt="MTU NA PESA"
                width={200}
                height={48}
                className="h-10 w-auto max-w-[220px] object-contain object-left"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Mtu na Pesa—your personal financial operating system for Tanzania and beyond: allocation,
              goals, loans, AI insights, and exports on iOS and Android.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Product</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {product.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-navy">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-navy">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Legal</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-navy">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Support</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@sabyinfotech.com" className="transition hover:text-navy">
                  info@sabyinfotech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-14 border-t border-navy/[0.08] pt-8 text-center text-xs text-muted lg:mt-16">
          © {new Date().getFullYear()} MTU NA PESA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
