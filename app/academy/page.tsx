import Link from "next/link";
import type { Metadata } from "next";
import { OpenGraph, pageMetadata, type PageSeo } from "@/lib/seo";
import PageHero from "@/components/chrome/PageHero";
import ClosingCta from "@/components/chrome/ClosingCta";
import styles from "./academy.module.css";

const seo: PageSeo = {
  title: "Academy",
  description: "Practical learning for organisations, leaders and future business talent.",
  socialTitle: "Academy — Growing Clever",
  path: "/academy",
};

export const metadata: Metadata = pageMetadata(seo);

const steps = [
  { title: "Assess", body: "Evaluate the claim." },
  { title: "Challenge", body: "Test the evidence and assumptions." },
  { title: "Decide", body: "Make a defensible decision." },
];

export default function AcademyPage() {
  return (
    <>
      <OpenGraph {...seo} />
      <PageHero
        eyebrow="Growing Clever Academy"
        headline="Learn what responsible growth requires."
        lead="Practical learning for organisations, leaders and future business talent."
        imageSrc="/assets/academy-hero.png"
        imageAlt="Audience at a Growing Clever session"
      />

      <section className={styles.flagship}>
        <div className={styles.flagshipIntro}>
          <div className="eyebrow">01 — Flagship programme</div>
          <div className={styles.programmeLabel}>Responsible Marketing</div>
          <h2 className={styles.flagshipHeadline}>
            From responsible intent to defensible marketing.
          </h2>
        </div>
        <div className={styles.flagshipCopy}>
          <p className={styles.body}>
            A practical programme for teams who need to turn responsible marketing principles into
            better, more defensible decisions.
          </p>
          <p className={styles.body}>
            Built around the{" "}
            <span className={styles.emphasis}>Impact Integrity Marketing System™ (IIMS™)</span>.
          </p>
        </div>
      </section>

      <section className={styles.how}>
        <div className={styles.howInner}>
          <div className={`eyebrow ${styles.howEyebrow}`}>02 — How it works</div>
          <h2 className={styles.howHeadline}>Learn by working through real decisions.</h2>
          <p className={styles.howLead}>
            Cases, claims and real marketing challenges turn the framework into practice.
          </p>
          <div className={styles.steps}>
            {steps.map((step) => (
              <div key={step.title} className={styles.step}>
                <span className={styles.stepDot} />
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.areas}>
        <div className="eyebrow eyebrow--teal">Learning areas</div>
        <p className={styles.areasList}>
          Responsible Marketing · Responsible Business · Strategic Marketing · Responsible Innovation
          &amp; Creativity
        </p>
      </section>

      <section className={styles.split}>
        <div className={styles.splitCopy}>
          <div className="eyebrow">03 — In-company learning</div>
          <h2 className={styles.splitHeadline}>Built around your business challenge.</h2>
          <p className={styles.splitBody}>
            Tailored programmes for organisations and teams, designed around the questions, decisions
            and capabilities that matter to the business.
          </p>
          <Link href="/contact" className={`btn btn--green btn--sm btn--wrap ${styles.splitCta}`}>
            Discuss an in-company programme →
          </Link>
        </div>
        <img
          src="/assets/academy-incompany-v4.png"
          alt="In-company training session"
          className={`${styles.splitImage} ${styles.grayscale}`}
        />
      </section>

      <section className={styles.split}>
        <div className={styles.splitCopy}>
          <div className="eyebrow">04 — Higher education</div>
          <h2 className={`${styles.splitHeadline} ${styles.splitHeadlineEdu}`}>
            Bringing real business into the classroom.
          </h2>
          <p className={styles.splitBody}>
            Guest lectures, masterclasses and teaching programmes for business schools and
            universities, connecting academic learning with real-world marketing and business
            practice.
          </p>
          <Link href="/contact" className={`btn btn--green btn--sm btn--wrap ${styles.splitCta}`}>
            Discuss a higher education programme →
          </Link>
        </div>
        <img
          src="/assets/academy-classroom-v2.jpg"
          alt="Neuza Alcobio teaching a masterclass"
          className={`${styles.splitImage} ${styles.splitImageFirst}`}
        />
      </section>

      <ClosingCta
        variant="academy"
        headline="What do you need to learn next?"
        ctaLabel="Start a conversation →"
        href="/contact"
      />
    </>
  );
}
