import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/chrome/PageHero";
import ClosingCta from "@/components/chrome/ClosingCta";
import styles from "./lab.module.css";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Strategic advisory and consulting for organisations navigating growth, marketing and accountability.",
};

const areas = [
  {
    title: "Responsible Marketing",
    body: "Build more credible and defensible marketing decisions.",
  },
  {
    title: "Responsible Business",
    body: "Connect responsibility with growth, reputation and long-term value.",
  },
  {
    title: "Strategic Marketing",
    body: "Turn business ambition into clearer positioning, priorities and action.",
  },
];

export default function LabPage() {
  return (
    <>
      <PageHero
        eyebrow="Growing Clever Lab"
        headline="Turning complex questions into clear decisions."
        lead="Strategic advisory and consulting for organisations navigating growth, marketing and accountability."
        imageSrc="/assets/lab-hero.png"
        imageAlt="Advisory session with a client team"
      />

      <section className={styles.help}>
        <div className="eyebrow eyebrow--teal">01 — Where we help</div>
        <h2 className={styles.helpHeadline}>Where we help.</h2>
        <div className={styles.helpGrid}>
          {areas.map((area) => (
            <div key={area.title} className={styles.helpCard}>
              <h3 className={styles.helpTitle}>{area.title}</h3>
              <p className={styles.helpBody}>{area.body}</p>
            </div>
          ))}
        </div>
        <div className={styles.helpCtaRow}>
          <Link href="/contact" className={`btn btn--teal btn--sm btn--wrap ${styles.helpCta}`}>
            Discuss your challenge →
          </Link>
        </div>
      </section>

      <section className={styles.approach}>
        <div className={styles.approachIntro}>
          <div className="eyebrow">02 — Approach</div>
          <h2 className={styles.approachHeadline}>Built to work alongside the business.</h2>
        </div>
        <p className={styles.approachBody}>
          We help teams structure complex questions, challenge assumptions and turn strategic
          thinking into decisions that can move forward.
        </p>
      </section>

      <ClosingCta
        variant="lab"
        headline="Have a complex growth question?"
        ctaLabel="Start a conversation →"
        href="/contact"
      />
    </>
  );
}
