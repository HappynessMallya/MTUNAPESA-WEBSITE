export type FeatureId =
  | "income"
  | "expense"
  | "allocation"
  | "savings"
  | "discipline"
  | "reports"
  | "privacy"
  | "multi";

export type FeatureEntry = {
  id: FeatureId;
  title: string;
  body: string;
};

export const featureList: FeatureEntry[] = [
  {
    id: "income",
    title: "Income clarity",
    body: "See every inflow in one calm view—salary, side income, and irregular receipts—so your plan always starts from truth.",
  },
  {
    id: "expense",
    title: "Expense tracking",
    body: "Log spending in seconds. Patterns emerge naturally so you understand behavior—not just balances.",
  },
  {
    id: "allocation",
    title: "Budget allocation",
    body: "Guide each dollar with a structured split across needs, wants, saving, and giving—adjustable when life shifts.",
  },
  {
    id: "savings",
    title: "Savings progress",
    body: "Goals stay visible. Small, steady contributions compound into long-term confidence.",
  },
  {
    id: "discipline",
    title: "Habit formation",
    body: "Consistency metrics reward showing up—building discipline without shame or noise.",
  },
  {
    id: "reports",
    title: "Insight feedback",
    body: "Reports translate activity into calm insight so your next decision is informed, not guessed.",
  },
  {
    id: "privacy",
    title: "Data privacy",
    body: "Your financial life stays private. No ads, no selling your data—just a tool that respects what you share.",
  },
  {
    id: "multi",
    title: "Multiple flows",
    body: "Organize several income streams and categories in one structured workspace—without clutter.",
  },
];

export const featureGroups: { title: string; ids: FeatureId[] }[] = [
  { title: "Tracking clarity", ids: ["income", "expense"] },
  { title: "Budget allocation", ids: ["allocation"] },
  { title: "Habit formation", ids: ["savings", "discipline"] },
  { title: "Insight feedback", ids: ["reports"] },
  { title: "Trust & structure", ids: ["privacy", "multi"] },
];
