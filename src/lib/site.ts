export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mtunapesa.com").replace(
  /\/$/,
  "",
);

/** Finance app portal (policies may be hosted here alongside the live product). */
export const financePortalUrl = "https://finance.sabyinfotech.com";

export const siteConfig = {
  name: "MTU NA PESA",
  shortDescription:
    "Your personal financial operating system: track income and expenses, smart allocation, savings goals, loans, AI insights, and exports—built for Tanzania and beyond.",
  defaultDescription:
    "Mtu na Pesa is your personal financial operating system. Track income, manage expenses, set savings goals, handle loans, use category budgets and AI insights, and export your data—on iOS and Android, with TZS, USD, KES, and UGX.",
  url: siteUrl,
  locale: "en_US",
  twitterHandle: undefined as string | undefined,
  email: "info@sabyinfotech.com",
  phone: "+255 663 586 648",
  sameAs: [] as string[],
  appStoreUrl: "https://apps.apple.com/app/mtu-na-pesa",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.mtunapesa.app",
  financePortalPrivacy: `${financePortalUrl}/privacy`,
  financePortalTerms: `${financePortalUrl}/terms`,
  financePortalDataDeletion: `${financePortalUrl}/data-deletion`,
} as const;

/** Natural keyword coverage for metadata; avoid stuffing in body copy */
export const primaryKeywords = [
  "personal finance app",
  "expense tracker app",
  "money management app",
  "budget app",
  "financial discipline",
  "save money",
  "track spending",
  "budget allocation",
  "money tracking",
  "financial habit tracker",
  "Tanzania money app",
  "M-Pesa budget",
  "TZS expense tracker",
  "savings goals app",
  "loan tracker app",
] as const;
