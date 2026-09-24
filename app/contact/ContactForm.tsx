"use client";

import { useEffect, useState, type FormEvent } from "react";
import { contactEmail } from "@/lib/site";
import styles from "./contact.module.css";

const topics = ["Lab", "Academy", "Stage", "Voice"];

type Status = "idle" | "sending" | "sent" | "failed";

export default function ContactForm() {
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // Preselects the topic from /contact?topic=Academy. Read straight from the
  // URL rather than through useSearchParams, which would need a Suspense
  // boundary and would drop the form out of the prerendered HTML. An unknown
  // or missing value leaves the placeholder in place. Nothing here touches
  // what is submitted: the select's own value is still the only source.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("topic");
    if (!requested) return;
    const match = topics.find(
      (item) => item.toLowerCase() === requested.trim().toLowerCase(),
    );
    if (match) setTopic(match);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Guards a second submit while a request is still in flight, alongside the
    // disabled button, in case the form is submitted by keyboard.
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          topic: data.get("topic"),
          message: data.get("message"),
          company_website: data.get("company_website"),
        }),
      });
      // Success is only ever shown once the server has confirmed that the
      // delivery service accepted the message.
      if (!response.ok) {
        setStatus("failed");
        return;
      }
      setStatus("sent");
      form.reset();
      setTopic("");
    } catch {
      setStatus("failed");
    }
  }

  const sending = status === "sending";

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input id="name" name="name" type="text" required className={styles.input} />
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
        <input id="email" name="email" type="email" required className={styles.input} />
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
            {topics.map((item) => (
              <option key={item} value={item}>
                {item}
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
          required
          placeholder={"Tell us a little about what you’re working on."}
          className={styles.textarea}
        />
      </div>

      {/* Honeypot. Hidden from sight, skipped by the tab order and by assistive
          technology; only an automated submitter fills it in. The name avoids
          anything a password manager or browser autofill targets. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="company_website">Do not fill this in</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={styles.submitRow}>
        <button
          type="submit"
          className="btn btn--ink btn--wrap"
          disabled={sending}
          aria-busy={sending}
        >
          Start the conversation →
        </button>
        <span className={styles.emailFallback}>
          Prefer email?{" "}
          <a href={`mailto:${contactEmail}`} className={styles.emailAddress}>
            {contactEmail} →
          </a>
        </span>
      </div>

      {status !== "idle" && (
        <p
          className={`${styles.status} ${status === "failed" ? styles.statusFailed : ""}`}
          role="status"
          aria-live="polite"
        >
          {status === "sending" && "Sending your message…"}
          {status === "sent" && "Thank you — your message has been sent."}
          {status === "failed" &&
            `Your message could not be sent. Please try again, or email ${contactEmail}.`}
        </p>
      )}
    </form>
  );
}
