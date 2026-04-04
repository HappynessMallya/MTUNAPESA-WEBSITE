export type FaqGroup = "security" | "privacy" | "product" | "allocation" | "habits" | "audience";

export type FaqItem = { question: string; answer: string; group: FaqGroup };

/** Shared FAQ copy for the home accordion and /faq (SEO + FAQPage schema on /faq only). */
export const faqItems: FaqItem[] = [
  {
    group: "security",
    question: "Is my data secure?",
    answer:
      "Yes. We use encryption in transit and at rest, secure authentication, and infrastructure designed for sensitive financial data. Your records stay private to you.",
  },
  {
    group: "privacy",
    question: "Do you sell my financial data or show ads?",
    answer:
      "No. MTU NA PESA does not sell your financial records for marketing, and the experience is not ad-supported. Your information is used to power your own insights.",
  },
  {
    group: "product",
    question: "Is the app free?",
    answer:
      "You can start with core tracking and allocation features at no cost. Premium capabilities may be offered as optional upgrades—check the app store listing for current pricing.",
  },
  {
    group: "audience",
    question: "Who is MTU NA PESA for?",
    answer:
      "Anyone who wants calm structure—people who earn steadily but feel unclear on cash flow, savers who need a repeatable plan, and anyone rebuilding discipline without shame or hype.",
  },
  {
    group: "audience",
    question: "Do I need accounting knowledge?",
    answer:
      "No. MTU NA PESA is built for everyday money management: record income, log spending, and follow your allocation. No jargon required.",
  },
  {
    group: "product",
    question: "Can I customize categories?",
    answer:
      "Yes. You can tailor categories to match how you actually spend, while keeping the overall allocation framework simple.",
  },
  {
    group: "allocation",
    question: "Can I change allocation later?",
    answer:
      "Yes. Percentages can be adjusted when your situation changes. The app recalculates guidance so your plan stays realistic.",
  },
  {
    group: "allocation",
    question: "How can I track personal expenses without spreadsheets?",
    answer:
      "Use an expense tracking mobile app to log purchases and bills as they happen. MTU NA PESA keeps income, expenses, and categories in one place so you always see where your money goes.",
  },
  {
    group: "allocation",
    question: "How do I manage salary money more effectively?",
    answer:
      "Start by splitting your income into clear buckets—needs, wants, savings, and giving—using a simple allocation plan. The app helps you stick to those percentages and adjust when life changes.",
  },
  {
    group: "allocation",
    question: "What is percentage-based budget allocation?",
    answer:
      "It means assigning a set share of your income to each purpose—such as essentials, discretionary spending, and savings—before you spend. MTU NA PESA uses this approach so your plan stays clear and repeatable.",
  },
  {
    group: "allocation",
    question: "Can I use a percentage split like 10 / 45 / 25 / 20 for budgeting?",
    answer:
      "Yes. MTU NA PESA is built around customizable allocation: you set the percentages that match your life (for example portions for giving, essentials, discretionary spending, and savings). Change them anytime as your income or goals shift.",
  },
  {
    group: "habits",
    question: "How can I build saving discipline?",
    answer:
      "Consistency matters more than perfection. Record spending regularly, review your allocation, and let savings be a fixed line in your plan—not whatever is left at month end.",
  },
];

export const faqSectionMeta: { group: FaqGroup; title: string; intro: string }[] = [
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
    intro: "Pricing, categories, and everyday mechanics.",
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
    intro: "Fit and expectations—no hype.",
  },
];
