import Link from "next/link";
import type { ReactNode } from "react";

type Base = {
  children: ReactNode;
  className?: string;
};

const primary =
  "inline-flex min-h-12 items-center justify-center rounded-xl bg-navy px-6 text-sm font-semibold text-white shadow-md transition hover:bg-navy-muted hover:shadow-lg";

const secondary =
  "inline-flex min-h-12 items-center justify-center rounded-xl border border-border/90 bg-surface/95 px-6 text-sm font-semibold text-navy shadow-sm backdrop-blur-sm transition hover:border-navy/12 hover:bg-surface";

const accent =
  "inline-flex min-h-12 items-center justify-center rounded-xl bg-accent-gradient px-6 text-sm font-semibold text-white shadow-md transition hover:opacity-95";

export function ButtonPrimary({
  href,
  children,
  className = "",
}: Base & { href: string }) {
  return (
    <Link href={href} className={`${primary} ${className}`}>
      {children}
    </Link>
  );
}

export function ButtonSecondary({
  href,
  children,
  className = "",
}: Base & { href: string }) {
  return (
    <Link href={href} className={`${secondary} ${className}`}>
      {children}
    </Link>
  );
}

export function ButtonAccent({
  href,
  children,
  className = "",
}: Base & { href: string }) {
  return (
    <Link href={href} className={`${accent} ${className}`}>
      {children}
    </Link>
  );
}
