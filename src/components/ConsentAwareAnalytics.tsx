"use client";

import { readConsent, type CookieConsentPreferences } from "@/lib/cookie-consent";
import { useEffect } from "react";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

function loadPlausible() {
  if (!plausibleDomain || typeof document === "undefined") return;
  if (document.querySelector(`script[data-domain="${plausibleDomain}"]`)) return;
  const s = document.createElement("script");
  s.defer = true;
  s.dataset.domain = plausibleDomain;
  s.src = "https://plausible.io/js/script.js";
  document.head.appendChild(s);
}

function syncFromPrefs(prefs: CookieConsentPreferences | null) {
  if (prefs?.analytics) loadPlausible();
}

export function ConsentAwareAnalytics() {
  useEffect(() => {
    syncFromPrefs(readConsent());
    const onUpdate = (e: Event) => {
      const detail = (e as CustomEvent<CookieConsentPreferences>).detail;
      syncFromPrefs(detail ?? readConsent());
    };
    window.addEventListener("mtunapesa-consent-update", onUpdate);
    return () => window.removeEventListener("mtunapesa-consent-update", onUpdate);
  }, []);

  return null;
}
