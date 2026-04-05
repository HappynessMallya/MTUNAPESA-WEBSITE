/** Long-form /features page: problem → solution → benefit per capability cluster. */

export type FeatureCluster = {
  title: string;
  intro: string;
  items: { name: string; problem: string; solution: string; benefit: string }[];
};

export const featureClusters: FeatureCluster[] = [
  {
    title: "Allocation & budgets",
    intro: "Every shilling has a job before you spend it.",
    items: [
      {
        name: "Smart money allocation",
        problem: "Without a plan, income disappears into ad-hoc spending.",
        solution:
          "Set Needs, Savings, Investment, Charity, and Fun in minutes. When income lands, the app shows the split from your plan.",
        benefit: "You always see what is safe to spend and what is protected for goals.",
      },
      {
        name: "Category budgets",
        problem: "Category overspend is obvious only after the money is gone.",
        solution: "Cap Food, Transport, Housing, and more—with warnings as you approach limits.",
        benefit: "You correct course in the month, not in regret.",
      },
    ],
  },
  {
    title: "Tracking & accounts",
    intro: "Cash, bank, and mobile money—one honest picture.",
    items: [
      {
        name: "Income & expenses",
        problem: "Logging is too heavy, so the record stays incomplete.",
        solution: "Three taps: amount, category, save—with date-grouped history.",
        benefit: "Your past spending is visible at a glance, not buried in notes.",
      },
      {
        name: "Multi-account",
        problem: "Splitting life across M-Pesa, bank, and cash blurs the total.",
        solution: "Balances per account; pick the right wallet for each transaction.",
        benefit: "Reconciliation becomes possible without a spreadsheet.",
      },
    ],
  },
  {
    title: "Goals, loans & exports",
    intro: "Forward-looking money: save, settle debt, and own your data.",
    items: [
      {
        name: "Savings goals",
        problem: "Goals live in your head instead of on the balance sheet.",
        solution: "Emergency fund, travel, gadgets—progress bars, deposits, and withdrawals.",
        benefit: "You see distance-to-target, not just good intentions.",
      },
      {
        name: "Loan management",
        problem: "Borrowed and lent money is easy to forget until it is urgent.",
        solution: "Track balances, repayments, and due dates with reminders.",
        benefit: "You never lose track of who owes whom.",
      },
      {
        name: "Data export",
        problem: "You need reports outside the phone—for tax, business, or backup.",
        solution: "CSV, Excel, and PDF with date and type filters (Premium).",
        benefit: "Your data stays portable and yours.",
      },
    ],
  },
  {
    title: "Insight & AI",
    intro: "Charts and answers—not noise.",
    items: [
      {
        name: "Analytics & reports",
        problem: "Totals do not explain behavior.",
        solution: "Pie charts, income vs expense, savings rate—filter by month or custom range.",
        benefit: "You spot patterns and fix them with intent.",
      },
      {
        name: "AI financial assistant",
        problem: "Generic advice ignores your actual numbers.",
        solution: "Ask in plain language; get answers and weekly summaries from your data (Premium).",
        benefit: "Insights match your life, not a blog post.",
      },
    ],
  },
  {
    title: "Stay on track",
    intro: "Nudges that respect your attention.",
    items: [
      {
        name: "Notifications & reminders",
        problem: "Out of sight, out of mind—until the budget breaks.",
        solution: "Logging reminders, budget alerts, savings milestones, loan due dates, weekly summaries.",
        benefit: "Discipline becomes a rhythm instead of a crisis response.",
      },
    ],
  },
];
