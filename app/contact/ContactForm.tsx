"use client";

import { useState, type FormEvent } from "react";
import { contactEmail } from "@/lib/site";
import styles from "./contact.module.css";

const topics = ["Academy", "Lab", "Stage", "Voice", "Other"];

export default function ContactForm() {
  const [topic, setTopic] = useState("");

  // No endpoint is connected yet. Validation runs through the browser's own
  // constraint checks so the form adds no copy of its own, and a valid submit
  // stays silent rather than implying the message was sent.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

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

      <div className={styles.submitRow}>
        <button type="submit" className="btn btn--ink btn--wrap">
          Start a conversation →
        </button>
        <span className={styles.emailFallback}>
          Prefer email?{" "}
          <a href={`mailto:${contactEmail}`} className={styles.emailAddress}>
            {contactEmail} →
          </a>
        </span>
      </div>
    </form>
  );
}
