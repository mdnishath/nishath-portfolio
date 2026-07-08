"use client";

import type { FormEvent } from "react";
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

/** Contact form — opens a pre-written email via mailto on submit. */
export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Project inquiry: " + (fd.get("type") || ""));
    const body = encodeURIComponent(
      "Name: " + fd.get("name") + "\n" +
        "Email: " + fd.get("email") + "\n" +
        "Project type: " + fd.get("type") + "\n\n" +
        fd.get("message")
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formHead}>
        <span className={styles.formTitle}>Start a project</span>
        <span className={styles.formSub}>Fill this in — it opens as an email to me, pre-written.</span>
      </div>

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

      <button type="submit" className={`btnGold ${styles.submit}`}>
        Send Message →
      </button>
      <span className={styles.formNote}>Or message me directly on WhatsApp — usually faster.</span>
    </form>
  );
}
