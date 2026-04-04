/** Long-form /features page: problem → solution → benefit per capability cluster. */

export type FeatureCluster = {
  title: string;
  intro: string;
  items: { name: string; problem: string; solution: string; benefit: string }[];
};

export const featureClusters: FeatureCluster[] = [
  {
    title: "Tracking system",
    intro: "Clarity starts when nothing is invisible.",
    items: [
      {
        name: "Income & inflows",
        problem: "Money arrives from different places and the total picture blurs.",
        solution: "Log every source in one structured view so your plan always starts from the truth.",
        benefit: "You stop guessing what you really have to work with each month.",
      },
      {
        name: "Daily expenses",
        problem: "Small purchases add up—but memory is unreliable.",
        solution: "Capture spending in seconds with categories that match your real life.",
        benefit: "Patterns emerge calmly; you see habits before they become problems.",
      },
    ],
  },
  {
    title: "Allocation system",
    intro: "Structure turns intention into behavior.",
    items: [
      {
        name: "Balanced split",
        problem: "Without boundaries, spending and saving compete in your head.",
        solution: "Assign needs, wants, saving, and giving as percentages you control.",
        benefit: "Each dollar has a job—less guilt, fewer impulse decisions.",
      },
    ],
  },
  {
    title: "Habit system",
    intro: "Discipline is repetition, not motivation spikes.",
    items: [
      {
        name: "Savings progress",
        problem: "Goals fade when they are not visible.",
        solution: "Track goals alongside your allocation so saving stays in the picture.",
        benefit: "Progress feels tangible; consistency replaces all-or-nothing thinking.",
      },
      {
        name: "Consistency signals",
        problem: "It is hard to know if you are “doing well” week to week.",
        solution: "Gentle discipline metrics reward showing up—not perfection.",
        benefit: "You build rhythm instead of shame cycles.",
      },
    ],
  },
  {
    title: "Insight system",
    intro: "Data should calm you, not overwhelm you.",
    items: [
      {
        name: "Reports & trends",
        problem: "Raw numbers rarely answer “what should I do next?”",
        solution: "Summaries translate activity into readable trends and trade-offs.",
        benefit: "Decisions become informed, not emotional.",
      },
    ],
  },
];
