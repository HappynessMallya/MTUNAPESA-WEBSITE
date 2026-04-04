"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg rounded-card border border-border bg-surface p-8 shadow-card"
      noValidate
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-navy outline-none transition focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-navy outline-none transition focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 w-full resize-y rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-navy outline-none transition focus:border-accent"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 w-full min-h-12 rounded-lg bg-navy text-sm font-semibold text-white transition hover:bg-navy-muted"
      >
        Send message
      </button>
      {sent ? (
        <p className="mt-4 text-center text-sm text-success" role="status">
          Thanks—this demo form does not send email yet. Connect to your API or form backend to go
          live.
        </p>
      ) : null}
    </form>
  );
}
