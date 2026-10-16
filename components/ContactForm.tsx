"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

// Submits to Netlify Forms. The static twin in /public/__forms.html lets Netlify
// detect the form at build time — keep the field names identical.
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-green/30 bg-green-light p-8">
        <h3 className="text-2xl">Jazakallahu khayran — message received.</h3>
        <p className="mt-2 text-ink-soft">Your message has been sent. You will receive a reply by email.</p>
        <button type="button" className="btn-outline mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form name="contact" method="POST" onSubmit={onSubmit} className="grid gap-5 rounded-2xl border border-line bg-white p-6 md:p-8">
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Full name</label>
          <input id="name" name="name" required autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">
            Phone <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="field" />
        </div>
        <div>
          <label htmlFor="purpose" className="mb-1.5 block text-sm font-semibold">Purpose</label>
          <select id="purpose" name="purpose" className="field" defaultValue="Lecture booking">
            <option>Lecture booking</option>
            <option>Seminar or conference presentation</option>
            <option>Academic enquiry</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="field resize-y"
          placeholder="Event name, date, venue and topic, if you are booking a lecture."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
          The message could not be sent. Please try again, or email directly.
        </p>
      )}

      <button type="submit" className="btn-primary justify-self-start" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
