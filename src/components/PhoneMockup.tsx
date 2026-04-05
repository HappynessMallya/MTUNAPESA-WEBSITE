import type { ReactNode } from "react";

function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <figure className="flex flex-col items-center">
      <div
        className="relative w-[220px] overflow-hidden rounded-[2rem] border border-border bg-navy p-2 shadow-card sm:w-[240px]"
        aria-label={label}
      >
        <div className="absolute left-1/2 top-2 h-5 w-16 -translate-x-1/2 rounded-full bg-navy-muted/80" />
        <div className="mt-6 overflow-hidden rounded-2xl bg-background">{children}</div>
      </div>
      <figcaption className="mt-3 text-center text-xs font-medium text-muted">{label}</figcaption>
    </figure>
  );
}

export function PhoneDashboard() {
  return (
    <Frame label="Dashboard">
      <div className="p-4">
        <p className="text-[10px] font-medium uppercase tracking-wide text-muted">Overview</p>
        <p className="mt-1 text-xl font-semibold text-navy">Balance</p>
        <div className="mt-3 rounded-lg bg-accent-soft/60 p-3">
          <p className="text-[10px] text-muted-foreground">This month</p>
          <p className="text-lg font-semibold text-navy">—</p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-border bg-surface p-2">
            <p className="text-[9px] text-muted">Income</p>
            <p className="text-sm font-semibold text-success">+</p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-2">
            <p className="text-[9px] text-muted">Spent</p>
            <p className="text-sm font-semibold text-danger">−</p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function PhoneExpense() {
  return (
    <Frame label="Expenses">
      <div className="p-4">
        <p className="text-sm font-semibold text-navy">Recent</p>
        <ul className="mt-3 space-y-2">
          {["Groceries", "Transport", "Utilities"].map((x) => (
            <li
              key={x}
              className="flex items-center justify-between rounded-lg border border-border bg-surface px-2 py-2 text-[11px]"
            >
              <span className="text-muted-foreground">{x}</span>
              <span className="font-medium text-navy">—</span>
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}

export function PhoneReports() {
  return (
    <Frame label="Reports">
      <div className="p-4">
        <p className="text-sm font-semibold text-navy">Insights</p>
        <div className="mt-3 flex h-24 items-end justify-between gap-1 px-1">
          {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
            <div
              key={i}
              className="w-2 rounded-t bg-accent/40"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <p className="mt-2 text-[10px] text-muted">Spending pattern (illustrative)</p>
      </div>
    </Frame>
  );
}

export function PhoneAllocation() {
  return (
    <Frame label="Allocation">
      <div className="p-4">
        <p className="text-sm font-semibold text-navy">Your split</p>
        <div className="mx-auto mt-4 h-24 w-24 rounded-full border-4 border-border bg-[conic-gradient(#94a3b8_0deg_36deg,#334155_36deg_198deg,#93c5fd_198deg_288deg,#6ee7b7_288deg_360deg)]" />
        <ul className="mt-4 space-y-1 text-[10px] text-muted-foreground">
          <li>Needs · Savings · Investment · Charity · Fun</li>
        </ul>
      </div>
    </Frame>
  );
}

/** Hero single large mockup */
export function PhoneHeroMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-[2.25rem] border border-border bg-navy p-2 shadow-card lg:max-w-[300px]"
      aria-hidden
    >
      <div className="absolute left-1/2 top-2.5 h-5 w-[4.5rem] -translate-x-1/2 rounded-full bg-navy-muted/90" />
      <div className="mt-7 overflow-hidden rounded-2xl bg-background">
        <div className="border-b border-border bg-surface px-4 py-3">
          <p className="text-[10px] font-medium uppercase tracking-wide text-muted">Dashboard</p>
          <p className="text-2xl font-semibold tracking-tight text-navy">Overview</p>
        </div>
        <div className="p-4">
          <div className="rounded-xl bg-accent-soft/50 p-4">
            <p className="text-xs text-muted-foreground">Available after allocation</p>
            <p className="mt-1 text-2xl font-semibold text-navy">—</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-border bg-surface p-3">
              <p className="text-[10px] text-muted">Discipline</p>
              <p className="text-lg font-semibold text-success">—</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-3">
              <p className="text-[10px] text-muted">Savings</p>
              <p className="text-lg font-semibold text-navy">On track</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
