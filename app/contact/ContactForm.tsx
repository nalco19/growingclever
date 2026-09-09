"use client";

import { useState, type FormEvent } from "react";
import { contactEmail } from "@/lib/site";
import styles from "./contact.module.css";

const topics = ["Academy", "Lab", "Stage", "Voice", "Other"];

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Enter your name.";
    if (!email) nextErrors.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Enter a valid email address.";
    if (!message) nextErrors.message = "Enter a message.";

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={styles.input}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className={styles.error}>
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="company" className={styles.label}>
          Company / Organisation
        </label>
        <input id="company" name="company" type="text" className={styles.input} />
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={styles.input}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className={styles.error}>
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="topic" className={styles.label}>
          What would you like to talk about?
        </label>
        <div className={styles.selectWrap}>
          <select
            id="topic"
            name="topic"
            className={`${styles.select} ${topic ? "" : styles.selectPlaceholder}`}
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          >
            <option value="" disabled>
              Select a conversation
            </option>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
          <span className={styles.selectChevron} aria-hidden="true">
            ▾
          </span>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={1}
          placeholder={"Tell us a little about what you’re working on."}
          className={styles.textarea}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className={styles.error}>
            {errors.message}
          </p>
        )}
      </div>

      <div className={styles.submitRow}>
        <button type="submit" className="btn btn--ink">
          Start a conversation →
        </button>
        <span className={styles.emailFallback}>
          Prefer email?{" "}
          <a href={`mailto:${contactEmail}`} className={styles.emailAddress}>
            {contactEmail} →
          </a>
        </span>
      </div>

      {submitted && (
        <p className={styles.status} role="status">
          Message not sent — no form endpoint is connected yet.
        </p>
      )}
    </form>
  );
}
