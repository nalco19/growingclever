import Link from "next/link";
import type { Metadata } from "next";
import { OpenGraph, pageMetadata, type PageSeo } from "@/lib/seo";
import PageHero from "@/components/chrome/PageHero";
import styles from "./academy.module.css";

const seo: PageSeo = {
  title: "Marketing Education | Growing Clever Academy",
  description:
    "In-company education and teaching for business schools and universities across strategic marketing, responsible marketing and responsible business.",
  socialTitle: "Marketing Education | Growing Clever Academy",
  path: "/academy",
};

/**
 * The root layout appends " — Growing Clever" to a plain string title. The
 * approved Academy title already names the brand, so it is set absolute to keep
 * it exactly as approved.
 */
export const metadata: Metadata = {
  ...pageMetadata(seo),
  title: { absolute: seo.title },
};

const workshopSteps = ["Assess", "Challenge", "Decide"];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Growing Clever Academy"
        headline="Learn what growth demands of marketing."
        lead="Practical education for organisations, leaders and future business talent."
        imageSrc="/assets/academy-hero.webp"
        imageAlt="Audience at a Growing Clever session"
      />

      <section className={styles.offer}>
        <div className="eyebrow">01 — What we offer</div>
        <h2 className={styles.offerHeadline}>
          Education built for
          <br className={styles.mobileBreak} /> different contexts.
        </h2>

        <div className={styles.segments}>
          <div className={styles.segment}>
            <div className={styles.segmentLabel}>In-company</div>
            <img
              src="/assets/academy-incompany-v4.png"
              alt="In-company training session"
              className={`${styles.segmentImage} ${styles.grayscale}`}
            />
            <h3 className={styles.segmentHeadline}>
              Sharper decisions,
              <br className={styles.mobileBreak} /> made in-house.
            </h3>
            <p className={styles.segmentBody}>
              Practical education for marketing teams and leadership, grounded in your market, your
              brand and the choices in front of the business.
            </p>
            <Link href="/contact?topic=Academy" className={`btn btn--green ${styles.segmentCta}`}>
              Discuss an in-company programme →
            </Link>
          </div>

          <div className={`${styles.segment} ${styles.segmentSecond}`}>
            <div className={styles.segmentLabel}>Business schools &amp; universities</div>
            <img
              src="/assets/academy-classroom-v2.jpg"
              alt="Neuza Alcobio teaching a masterclass"
              className={styles.segmentImage}
            />
            <h3 className={styles.segmentHeadline}>
              Bringing real business
              <br className={styles.mobileBreak} /> into the classroom.
            </h3>
            <p className={styles.segmentBody}>
              Executive education, postgraduate teaching, guest lectures and masterclasses for senior
              leaders and future business talent, grounded in current marketing and business
              practice.
            </p>
            <Link href="/contact?topic=Academy" className={`btn btn--green ${styles.segmentCta}`}>
              Discuss an education programme →
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.areas}>
        <div className={styles.areasRow}>
          <div className="eyebrow eyebrow--teal">02 — Areas we teach</div>
          <p className={styles.areasList}>
            Strategic Marketing · Marketing Operating Models · Positioning &amp; Messaging · Brand
            Strategy · Go-to-Market · Responsible Marketing · Responsible Business
          </p>
        </div>
        <p className={styles.areasNote}>
          Programmes in each area are designed around the audience and the challenge.
        </p>
      </section>

      <section className={styles.workshop}>
        <div className="eyebrow">03 — Featured workshop</div>
        <div className={styles.workshopGrid}>
          <div className={styles.workshopCopy}>
            <div className={styles.workshopLabel}>
              Responsible Marketing ·
              <br className={styles.mobileBreak} /> IIMS Workshop
            </div>
            <h2 className={styles.workshopHeadline}>
              From responsible intent
              <br className={styles.mobileBreak} /> to credible marketing.
            </h2>
            <p className={styles.workshopBody}>
              A practical programme built around the{" "}
              <span className={styles.workshopEmphasis}>
                Impact Integrity Marketing System™ (IIMS)
              </span>
              , helping leaders and teams apply responsible marketing principles to real marketing
              decisions.
            </p>
            <Link href="/contact?topic=Academy" className={`btn btn--green btn--sm ${styles.workshopCta}`}>
              Discuss the IIMS Workshop →
            </Link>
          </div>

          <div className={styles.steps}>
            {workshopSteps.map((step) => (
              <div key={step} className={styles.step}>
                <span className={styles.stepDot} aria-hidden="true" />
                <h3 className={styles.stepTitle}>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <h2 className={styles.closingHeadline}>What do you need to learn next?</h2>
        <Link href="/contact?topic=Academy" className="btn btn--ink btn--wrap">
          Start a conversation →
        </Link>
      </section>
      {/* Rendered last, not first: React hoists these <meta> elements into
          <head>, and Next's scroll-on-navigation walks the page segment's
          first DOM node. A zero-sized <meta> there makes it abandon the
          scroll, so a route change lands mid-page. */}
      <OpenGraph {...seo} />
    </>
  );
}
