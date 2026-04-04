"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  type CookieConsentPreferences,
  readConsent,
  writeConsent,
} from "@/lib/cookie-consent";

function Toggle({
  enabled,
  onChange,
  disabled,
  id,
}: {
  enabled: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  id: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      id={id}
      aria-checked={enabled}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={() => !disabled && onChange(!enabled)}
      className={`relative inline-flex h-7 w-12 shrink-0 rounded-full border border-border transition ${
        enabled ? "bg-navy" : "bg-background"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`pointer-events-none absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-soft transition ${
          enabled ? "left-6" : "left-0.5"
        }`}
        aria-hidden
      />
    </button>
  );
}

export function CookieBanner() {
  const titleId = useId();
  const descId = useId();
  const modalTitleId = useId();
  const [hydrated, setHydrated] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [draft, setDraft] = useState<CookieConsentPreferences>({
    analytics: false,
    functional: false,
  });
  const modalRef = useRef<HTMLDivElement>(null);
  const acceptAllBtnRef = useRef<HTMLButtonElement>(null);

  const applyConsent = useCallback((prefs: CookieConsentPreferences) => {
    writeConsent(prefs);
    setShowBar(false);
    setPrefsOpen(false);
  }, []);

  useEffect(() => {
    setHydrated(true);
    const existing = readConsent();
    setShowBar(existing === null);
    if (existing) {
      setDraft(existing);
    }
  }, []);

  useEffect(() => {
    if (!prefsOpen) return;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => acceptAllBtnRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPrefsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [prefsOpen]);

  useEffect(() => {
    if (!prefsOpen || !modalRef.current) return;
    const root = modalRef.current;
    const focusables = root.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const list = [...focusables].filter((el) => !el.hasAttribute("disabled"));
    const onTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    root.addEventListener("keydown", onTrap);
    return () => root.removeEventListener("keydown", onTrap);
  }, [prefsOpen]);

  if (!hydrated || !showBar) return null;

  const showBottomBar = showBar && !prefsOpen;

  return (
    <>
      <AnimatePresence>
        {prefsOpen ? (
          <>
            <motion.div
              key="cookie-overlay"
              role="presentation"
              className="fixed inset-0 z-[100] bg-navy/40 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setPrefsOpen(false)}
            />
            <div
              key="cookie-modal-wrap"
              className="fixed inset-0 z-[101] flex items-end justify-center p-4 sm:items-center"
              role="presentation"
              onClick={() => setPrefsOpen(false)}
            >
              <motion.div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={modalTitleId}
                className="w-full max-w-lg rounded-2xl border border-border bg-surface p-6 shadow-card"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
              <h2 id={modalTitleId} className="text-lg font-semibold text-navy">
                Cookie preferences
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Choose which optional cookies we may use. Essential cookies are always on so the
                site works.
              </p>

              <ul className="mt-6 space-y-5">
                <li className="flex items-start justify-between gap-4 border-b border-border pb-5">
                  <div>
                    <p className="font-medium text-navy">Essential cookies</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Required for security, consent storage, and core functionality.
                    </p>
                  </div>
                  <Toggle id="cookie-essential" enabled={true} disabled onChange={() => {}} />
                </li>
                <li className="flex items-start justify-between gap-4 border-b border-border pb-5">
                  <div>
                    <p className="font-medium text-navy">Analytics cookies</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Help us understand visits and improve the site (e.g. page views, navigation).
                    </p>
                  </div>
                  <Toggle
                    id="cookie-analytics"
                    enabled={draft.analytics}
                    onChange={(v) => setDraft((d) => ({ ...d, analytics: v }))}
                  />
                </li>
                <li className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-navy">Functional cookies</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Remember preferences such as language or display choices where applicable.
                    </p>
                  </div>
                  <Toggle
                    id="cookie-functional"
                    enabled={draft.functional}
                    onChange={(v) => setDraft((d) => ({ ...d, functional: v }))}
                  />
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
                <button
                  type="button"
                  className="order-3 inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-surface px-5 text-sm font-semibold text-navy shadow-soft transition hover:border-navy/15 hover:bg-background sm:order-1"
                  onClick={() => setPrefsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  ref={acceptAllBtnRef}
                  className="order-1 inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-surface px-5 text-sm font-semibold text-navy shadow-soft transition hover:border-navy/15 hover:bg-background sm:order-2"
                  onClick={() => applyConsent({ analytics: true, functional: true })}
                >
                  Accept all
                </button>
                <button
                  type="button"
                  className="order-2 inline-flex min-h-11 items-center justify-center rounded-lg bg-navy px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-navy-muted sm:order-3"
                  onClick={() => applyConsent(draft)}
                >
                  Save preferences
                </button>
              </div>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>

      <motion.div
        role="region"
        aria-label="Cookie consent"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className={`fixed bottom-0 left-0 right-0 z-[99] p-4 sm:p-6 ${showBottomBar ? "" : "pointer-events-none invisible"}`}
        initial={{ opacity: 0, y: 24 }}
        animate={showBottomBar ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={!showBottomBar}
      >
        <div className="mx-auto max-w-content rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="min-w-0 flex-1">
              <h2 id={titleId} className="text-lg font-semibold text-navy sm:text-xl">
                We respect your privacy
              </h2>
              <p id={descId} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We use cookies to improve website performance, understand usage patterns, and
                enhance your experience. You can choose which cookies to allow.{" "}
                <Link
                  href="/cookies"
                  className="font-medium text-accent underline-offset-2 hover:underline"
                >
                  Cookies Policy
                </Link>
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-navy px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-navy-muted"
                onClick={() => applyConsent({ analytics: true, functional: true })}
              >
                Accept all
              </button>
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-surface px-5 text-sm font-semibold text-navy shadow-soft transition hover:border-navy/15 hover:bg-background"
                onClick={() => applyConsent({ analytics: false, functional: false })}
              >
                Reject non-essential
              </button>
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-transparent px-5 text-sm font-semibold text-navy underline-offset-2 transition hover:underline"
                onClick={() => {
                  const cur = readConsent();
                  setDraft(cur ?? { analytics: false, functional: false });
                  setPrefsOpen(true);
                }}
              >
                Manage preferences
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
