"use client";

import { faqItems } from "@/data/faq";
import { HOME_SECTION_BG } from "@/lib/home-section-bg";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

export function Faq() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      className={`border-t border-navy/[0.06] ${HOME_SECTION_BG.faq} py-14 md:py-20 lg:py-[7.5rem]`}
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <h2 id="faq-heading" className="text-section font-semibold text-navy">
          Frequently asked questions
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Answers about security, budgeting, expense tracking, and how MTU NA PESA supports personal
          finance discipline. For the full list, see our{" "}
          <a href="/faq" className="font-medium text-accent underline-offset-2 hover:underline">
            FAQ page
          </a>
          .
        </p>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqItems.slice(0, 8).map((item, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const btnId = `${baseId}-btn-${i}`;

            return (
              <div key={item.question} className="py-1">
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-navy transition hover:text-navy-muted"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {item.question}
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted"
                      aria-hidden
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    reduce ? (
                      <div id={panelId} role="region" aria-labelledby={btnId}>
                        <p className="pb-4 pr-12 text-sm leading-relaxed text-muted-foreground">
                          {item.answer}
                        </p>
                      </div>
                    ) : (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 pr-12 text-sm leading-relaxed text-muted-foreground">
                          {item.answer}
                        </p>
                      </motion.div>
                    )
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
