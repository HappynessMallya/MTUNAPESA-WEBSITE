export type FeatureId =
  | "allocation"
  | "tracking"
  | "savings"
  | "loan"
  | "reports"
  | "categoryBudgets"
  | "ai"
  | "notifications"
  | "multi"
  | "export";

export type FeatureEntry = {
  id: FeatureId;
  title: string;
  body: string;
};

export const featureList: FeatureEntry[] = [
  {
    id: "allocation",
    title: "Smart money allocation",
    body: "Set up your budget in about two minutes. Tell your money where to go—Needs, Savings, Investment, Charity, Fun. Every shilling gets a job. When you record income, the app shows how to split it from your plan.",
  },
  {
    id: "tracking",
    title: "Income & expense tracking",
    body: "Record income and expenses in three taps—amount, category, save. Date-grouped lists show your history at a glance. Multiple accounts: Cash, Bank, and Mobile Money.",
  },
  {
    id: "savings",
    title: "Savings goals",
    body: "Set goals like Emergency Fund, Travel, or a new phone. Visual progress bars, deposits and withdrawals anytime, and a clear view of what is left to hit your target.",
  },
  {
    id: "loan",
    title: "Loan management",
    body: "Track money you have borrowed or lent. Record repayments, watch balances fall, and get reminders when payments are due—so you never forget who owes you, or who you owe.",
  },
  {
    id: "reports",
    title: "Spending analytics & reports",
    body: "Pie charts show where money goes. Compare income vs expenses and savings rate. Filter by month or a custom range. Export as CSV, Excel, or PDF.",
  },
  {
    id: "categoryBudgets",
    title: "Category budgets",
    body: "Set limits per category—Food, Transport, Housing, and more. Warnings when you are close to the cap, and a clear view of what is on track vs what needs attention.",
  },
  {
    id: "ai",
    title: "AI financial assistant",
    body: "Ask about your spending in plain language. Personalized insights from your real data, weekly summaries, and suggestions to improve habits.",
  },
  {
    id: "notifications",
    title: "Push notifications & reminders",
    body: "Morning nudges to log expenses, budget alerts near limits, savings milestones, loan due dates, and weekly financial summaries.",
  },
  {
    id: "multi",
    title: "Multi-account support",
    body: "Cash, Bank, and Mobile Money in one place. See balances per account and pick the right one for each income or expense.",
  },
  {
    id: "export",
    title: "Data export",
    body: "Export anytime: CSV for spreadsheets, Excel for formatted reports, PDF for printing—with filters for date range and transaction type.",
  },
];

export const featureGroups: { title: string; ids: FeatureId[] }[] = [
  { title: "Plan & track", ids: ["allocation", "tracking"] },
  { title: "Goals & loans", ids: ["savings", "loan"] },
  { title: "Insight & control", ids: ["reports", "categoryBudgets", "ai"] },
  { title: "Everyday & power features", ids: ["notifications", "multi", "export"] },
];
