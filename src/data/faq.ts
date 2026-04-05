export type FaqGroup =
  | "security"
  | "privacy"
  | "product"
  | "allocation"
  | "habits"
  | "audience"
  | "pricing";

export type FaqItem = { question: string; answer: string; group: FaqGroup };

/** Home accordion (first 8) + full /faq page + FAQPage schema. */
export const faqItems: FaqItem[] = [
  {
    group: "pricing",
    question: "Is Mtu na Pesa free?",
    answer:
      "Yes. Core features are free. Premium adds the AI assistant, data export (CSV, Excel, PDF), unlimited savings goals and accounts, category budgets, and priority support—via subscription in the app.",
  },
  {
    group: "security",
    question: "Is my financial data safe?",
    answer:
      "Yes. We use bank-grade encryption, secure token storage on device (Keychain / Keystore), and industry-standard password hashing—never stored in plain text. Your data is private and only accessible by you. Biometric sign-in (Face ID / Touch ID) is supported where available.",
  },
  {
    group: "product",
    question: "Can I use it for my business?",
    answer:
      "Yes. You can manage personal and business money in one app. Create separate accounts for each so reporting stays clear.",
  },
  {
    group: "product",
    question: "What currencies are supported?",
    answer:
      "Tanzanian Shilling (TZS), US Dollar (USD), Kenyan Shilling (KES), and Ugandan Shilling (UGX). The app is built for Tanzania’s landscape—including Mobile Money (e.g. M-Pesa), banks, and cash.",
  },
  {
    group: "product",
    question: "Can I export my data?",
    answer:
      "Yes—on Premium. Export as CSV, Excel, or PDF anytime, with filters for date range and transaction type.",
  },
  {
    group: "product",
    question: "How does the AI assistant work?",
    answer:
      "Ask questions in plain language—for example, “How much did I spend on food this month?”—and get answers from your actual records, plus weekly summaries and habit suggestions.",
  },
  {
    group: "product",
    question: "Can I track loans?",
    answer:
      "Yes. Track money you have borrowed or lent, log repayments, see balances update, and get reminders when payments are due.",
  },
  {
    group: "privacy",
    question: "Do you sell my financial data or show ads?",
    answer:
      "No. Mtu na Pesa does not sell your financial records for marketing, and the experience is not ad-supported.",
  },
  {
    group: "audience",
    question: "Who is MTU NA PESA for?",
    answer:
      "Tanzanian youth, SMEs, freelancers, and anyone who wants disciplined, clear money management—without spreadsheet chaos.",
  },
  {
    group: "product",
    question: "Can I customize categories?",
    answer:
      "Yes. Add your own income sources and expense categories while keeping allocation and budgets structured.",
  },
  {
    group: "allocation",
    question: "Can I change allocation later?",
    answer:
      "Yes. Adjust your split anytime; the app updates guidance when income is recorded so the plan stays realistic.",
  },
  {
    group: "allocation",
    question: "How can I track personal expenses without spreadsheets?",
    answer:
      "Log purchases and bills as they happen. Mtu na Pesa keeps income, expenses, categories, and accounts in one place so you always see where your money goes.",
  },
  {
    group: "allocation",
    question: "How do I manage salary money more effectively?",
    answer:
      "Use smart allocation: assign Needs, Savings, Investment, Charity, and Fun before you spend. The app applies your percentages when income arrives so you see what is safe to spend and what is protected.",
  },
  {
    group: "allocation",
    question: "What is percentage-based budget allocation?",
    answer:
      "You assign a share of income to each purpose before spending. Mtu na Pesa uses your plan so every shilling has a job and you can refine it as life changes.",
  },
  {
    group: "habits",
    question: "How can I build saving discipline?",
    answer:
      "Use savings goals with visible progress, category budgets, and reminders. Consistency matters more than perfection—small deposits add up.",
  },
];

export const faqSectionMeta: { group: FaqGroup; title: string; intro: string }[] = [
  {
    group: "pricing",
    title: "Pricing & plans",
    intro: "Free vs Premium at a glance.",
  },
  {
    group: "security",
    title: "Security",
    intro: "How we protect what you trust us with.",
  },
  {
    group: "privacy",
    title: "Privacy",
    intro: "What we do—and do not do—with your information.",
  },
  {
    group: "product",
    title: "Using the app",
    intro: "Currencies, export, AI, loans, and business use.",
  },
  {
    group: "allocation",
    title: "How allocation works",
    intro: "Structured budgeting without overwhelm.",
  },
  {
    group: "habits",
    title: "Habits & discipline",
    intro: "Turning structure into lasting change.",
  },
  {
    group: "audience",
    title: "Who it is for",
    intro: "Built for real lives in Tanzania and beyond.",
  },
];
