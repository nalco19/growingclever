import type { Metadata } from "next";
import { pageMetadata, type PageSeo } from "@/lib/seo";
import PageHero from "@/components/chrome/PageHero";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

const seo: PageSeo = {
  title: "Contact Growing Clever | Start a Conversation",
  description:
    "Start a conversation with Growing Clever about strategic marketing, responsible marketing, education, speaking or collaborations.",
  socialTitle: "Contact Growing Clever | Start a Conversation",
  path: "/contact",
};

/**
 * The root layout appends " — Growing Clever" to a plain string title. The
 * approved Contact title already names the brand, so it is set absolute to
 * keep it exactly as approved.
 */
export const metadata: Metadata = {
  ...pageMetadata(seo),
  title: { absolute: seo.title },
};

/** The two strands drawn inside the Lab card. */
const labStrands = [
  {
    title: "Strategic Marketing",
    body: "Marketing operating models, positioning, go‑to‑market and brand change.",
  },
  {
    title: "Responsible Marketing",
    body: "Claim Check and tailored Programme built around the Impact Integrity Marketing System™ (IIMS).",
  },
];

const routes = [
  { title: "Academy", body: "In-company learning and education programmes." },
  { title: "Stage", body: "Keynotes and executive conversations." },
  { title: "Voice", body: "Interviews, ideas and collaborations." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="contact"
        eyebrow="Growing Clever · Contact"
        headline="Start with the right conversation."
        lead="Tell us what you are trying to solve, build, understand or change."
        imageSrc="/assets/contact-hero.jpg"
        imageAlt="Executive on a call in an office"
      />

      <section className={styles.routes}>
        <div className="eyebrow">01 — What are you looking for?</div>
        <div className={styles.routesGrid}>
          <a href="#contact-form" className={`${styles.route} ${styles.routeLab}`}>
            <h3 className={styles.routeTitle}>
              Lab <span className={styles.routeTitleNote}>(Advisory)</span>
            </h3>
            {labStrands.map((strand) => (
              <div key={strand.title} className={styles.strand}>
                <h4 className={styles.strandTitle}>{strand.title}</h4>
                <p className={styles.strandBody}>{strand.body}</p>
              </div>
            ))}
          </a>

          {routes.map((route) => (
            <a key={route.title} href="#contact-form" className={styles.route}>
              <h3 className={styles.routeTitle}>{route.title}</h3>
              <p className={styles.routeBody}>{route.body}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="contact-form" className={styles.conversation}>
        <div className={styles.conversationIntro}>
          <div className="eyebrow">02 — Start the conversation</div>
          <h2 className={styles.conversationHeadline}>
            {"Tell us what you’re working on."}
          </h2>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
