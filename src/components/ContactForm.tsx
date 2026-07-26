"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/data";
import styles from "@/app/contact/contact.module.css";

const projectTypes = [
  "Website / Web App",
  "Desktop App",
  "Mobile App",
  "Automation / Bot",
  "SEO / Google Business",
  "Something else",
];

type Status = "idle" | "sending" | "sent" | "error";

// FormSubmit endpoint id (maps to my email without exposing it in the markup)
const FORM_ID = "71d0e2840168316a466e3ed02aefe4fe";

/** Contact form — delivers straight to my inbox via FormSubmit's AJAX API. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot filled in => bot; pretend success
    if (fd.get("_honey")) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          "project type": fd.get("type"),
          message: fd.get("message"),
          _subject: `Project inquiry: ${fd.get("type")} — ${fd.get("name")}`,
          _template: "table",
        }),
      });
      const data = await res.json();
      if (res.ok && String(data.success) === "true") {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className={`${styles.form} ${styles.formSuccess}`}>
        <span className={styles.formTitle}>Message sent ✓</span>
        <p className={styles.formSub}>
          Thanks — it&apos;s in my inbox. I&apos;ll reply within a day. Need me sooner? Ping me on
          WhatsApp.
        </p>
        <a href={site.whatsapp[0].href} target="_blank" rel="noreferrer" className="btnGold">
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formHead}>
        <span className={styles.formTitle}>Start a project</span>
        <span className={styles.formSub}>Fill this in — it lands straight in my inbox.</span>
      </div>

      {/* honeypot — invisible to humans, bots fill it */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        aria-hidden
      />

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Your Name</span>
          <input name="name" required placeholder="Full name" className={styles.input} />
        </label>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={styles.input}
          />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.fieldLabel}>Project Type</span>
        <select name="type" className={`${styles.input} ${styles.select}`}>
          {projectTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.fieldLabel}>Project Details</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What are we building? Goals, timeline, anything useful…"
          className={`${styles.input} ${styles.textarea}`}
        />
      </label>

      <button type="submit" disabled={status === "sending"} className={`btnGold ${styles.submit}`}>
        {status === "sending" ? "Sending…" : "Send Message →"}
      </button>
      {status === "error" && (
        <span className={styles.formError}>
          Couldn&apos;t send right now — please try again, or email me at {site.email}.
        </span>
      )}
      <span className={styles.formNote}>Or message me directly on WhatsApp — usually faster.</span>
    </form>
  );
}
