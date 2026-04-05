/**
 * Home page only: each section gets a distinct background for clear vertical rhythm.
 * (Avoid reusing the same token on adjacent sections.)
 */
export const HOME_SECTION_BG = {
  /** Plain white — classic editorial hero */
  hero: "bg-white",
  problem: "bg-[#eceff5]",
  solution: "bg-gradient-to-b from-[#fafbfc] via-white to-[#f1f4f8]",
  howItWorks: "bg-accent-soft/60",
  allocation: "bg-success-soft/40",
  /** Distinct from hero (white) and adjacent allocation tint */
  features: "bg-[#eef1f8]",
  visual: "bg-[#e2e7f2]",
  benefits: "bg-gradient-to-br from-white from-40% via-accent-soft/25 to-[#e8edf6]",
  trust: "bg-[#ebeff5]",
  pricing: "bg-[#f0f4fa]",
  socialProof: "bg-navy/[0.04]",
  cta: "bg-navy",
  faq: "bg-[#dde4f0]",
} as const;
