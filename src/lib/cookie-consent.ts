/** Stored in document.cookie; JSON body { v: 1, a: analytics, f: functional }. Essential is always on. */
export const CONSENT_COOKIE_NAME = "mtunapesa_consent";

/** ~180 days (6 months), aligned with policy examples */
export const CONSENT_MAX_AGE_SEC = 15552000;

export type CookieConsentPreferences = {
  analytics: boolean;
  functional: boolean;
};

export function readConsent(): CookieConsentPreferences | null {
  if (typeof document === "undefined") return null;
  const prefix = `${CONSENT_COOKIE_NAME}=`;
  const row = document.cookie.split("; ").find((c) => c.startsWith(prefix));
  if (!row) return null;
  try {
    const raw = decodeURIComponent(row.slice(prefix.length));
    const parsed = JSON.parse(raw) as { v?: number; a?: boolean; f?: boolean };
    if (parsed.v !== 1) return null;
    return { analytics: Boolean(parsed.a), functional: Boolean(parsed.f) };
  } catch {
    return null;
  }
}

export function writeConsent(prefs: CookieConsentPreferences): void {
  if (typeof document === "undefined") return;
  const payload = encodeURIComponent(
    JSON.stringify({ v: 1, a: prefs.analytics, f: prefs.functional }),
  );
  document.cookie = `${CONSENT_COOKIE_NAME}=${payload}; max-age=${CONSENT_MAX_AGE_SEC}; path=/; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent("mtunapesa-consent-update", { detail: prefs }));
}

export function clearConsent(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${CONSENT_COOKIE_NAME}=; max-age=0; path=/; SameSite=Lax`;
}
