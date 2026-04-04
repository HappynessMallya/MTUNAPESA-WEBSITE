export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mtunapesa.com").replace(
  /\/$/,
  "",
);

export const siteConfig = {
  name: "MTU NA PESA",
  shortDescription:
    "Personal finance app for expense tracking, budget allocation, saving habits, and money clarity.",
  defaultDescription:
    "MTU NA PESA is a personal finance and expense tracker app that helps you manage money, control spending, build saving discipline, and track habits—with simple budget allocation.",
  url: siteUrl,
  locale: "en_US",
  twitterHandle: undefined as string | undefined,
  email: "info@sabyinfotech.com",
  phone: "+255 663 586 648",
  sameAs: [] as string[],
  appStoreUrl: "https://apps.apple.com/app/mtu-na-pesa",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.mtunapesa.app",
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
] as const;
