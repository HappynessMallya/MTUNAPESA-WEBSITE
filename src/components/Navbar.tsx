"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonPrimary } from "./Button";

const navItems = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/features", label: "Features" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function NavLink({ href, label, onNavigate }: { href: string; label: string; onNavigate?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-navy/[0.04] hover:text-navy"
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/80 shadow-sm backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-3.5 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 rounded-xl pr-2 outline-offset-4 transition hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="MTU NA PESA"
            width={200}
            height={48}
            className="h-9 w-auto max-w-[200px] object-contain object-left"
            priority
          />
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-0.5 rounded-2xl border border-border/50 bg-background/50 p-1 md:flex lg:gap-0.5"
        >
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ButtonPrimary href="/#cta" className="px-4 text-xs sm:px-5 sm:text-sm">
            Download App
          </ButtonPrimary>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/80 text-navy transition hover:bg-background md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <span className="text-xl leading-none" aria-hidden>
                ×
              </span>
            ) : (
              <span className="flex w-5 flex-col gap-1.5" aria-hidden>
                <span className="h-0.5 w-full rounded-full bg-navy" />
                <span className="h-0.5 w-full rounded-full bg-navy" />
                <span className="h-0.5 w-full rounded-full bg-navy" />
              </span>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-border/70 bg-surface/95 backdrop-blur-xl md:hidden ${menuOpen ? "" : "hidden"}`}
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-content flex-col gap-1 px-6 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              onNavigate={() => setMenuOpen(false)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
