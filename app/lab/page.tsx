import Link from "next/link";
import type { Metadata } from "next";
import { OpenGraph, pageMetadata, type PageSeo } from "@/lib/seo";
import PageHero from "@/components/chrome/PageHero";
import ClosingCta from "@/components/chrome/ClosingCta";
import styles from "./lab.module.css";

const seo: PageSeo = {
  title: "Strategic & Responsible Marketing Advisory | Growing Clever Lab",
  description:
    "Strategic marketing advisory on operating models, positioning, go-to-market and brand change, with Responsible Marketing built around the IIMS™.",
  socialTitle: "Strategic & Responsible Marketing Advisory | Growing Clever Lab",
  path: "/lab",
};

/**
 * The root layout appends " — Growing Clever" to a plain string title. The
 * approved Lab title already names the brand, so it is set absolute to keep it
 * exactly as approved.
 */
export const metadata: Metadata = {
  ...pageMetadata(seo),
  title: { absolute: seo.title },
};

const strategicItems = [
  {
    number: "01",
    title: "Marketing operating model",
    body: "How teams, agencies and processes work together.",
  },
  {
    number: "02",
    title: "Positioning and messaging",
    body: "What the brand stands for, how it is differentiated, and the messages that carry it to market.",
  },
  {
    number: "03",
    title: "Go‑to‑market",
    body: "Which markets and segments to prioritise, and how to reach them.",
  },
  {
    number: "04",
    title: "Brand integration and rebrand leadership",
    body: "Leading brand change, including after mergers and acquisitions.",
  },
];

const responsibleItems = [
  {
    number: "01",
    title: "IIMS Claim Check",
    body: "A focused diagnostic of what the brand is saying in market, what needs strengthening and what may be missing.",
  },
  {
    number: "02",
    title: "IIMS Programme",
    body: "A deeper, tailored engagement built around the organisation's own marketing, claims, evidence and decisions.",
  },
];

type Item = (typeof strategicItems)[number];

function HelpItem({ number, title, body }: Item) {
  return (
    <div className={styles.item}>
      <div className={styles.itemHead}>
        <span className={styles.itemNumber}>{number}</span>
        <h4 className={styles.itemTitle}>{title}</h4>
      </div>
      <p className={styles.itemBody}>{body}</p>
    </div>
  );
}

export default function LabPage() {
  return (
    <>
      <PageHero
        eyebrow="Growing Clever Lab"
        headline="Turning complex questions into clear decisions."
        lead="Strategic marketing advisory on operating models, positioning, go‑to‑market and responsible marketing."
        imageSrc="/assets/lab-hero.webp"
        imageAlt="Advisory session with a client team"
      />

      <section className={styles.help}>
        <div className="eyebrow eyebrow--teal">01 — Where we help</div>
        <h2 className={styles.helpHeadline}>Where we help.</h2>

        <div className={styles.helpGrid}>
          <div className={styles.helpColumn}>
            <h3 className={styles.helpTitle}>Strategic Marketing</h3>
            <p className={styles.helpLead}>Strategy the organisation can actually deliver.</p>
            {strategicItems.map((item) => (
              <HelpItem key={item.number} {...item} />
            ))}
            <div className={styles.callout}>
              <p className={styles.calloutTitle}>Not sure where the problem sits?</p>
              <p className={styles.calloutBody}>
                Start with a{" "}
                <span className={styles.calloutStrong}>Strategic Marketing Diagnostic</span>: a
                fixed-scope review that defines the problem and the next step.
              </p>
            </div>
          </div>

          <div className={`${styles.helpColumn} ${styles.helpColumnSecond}`}>
            <h3 className={styles.helpTitle}>Responsible Marketing</h3>
            <p className={styles.helpLead}>
              Our specialism. Marketing that says what it can prove, built around the Impact
              Integrity Marketing System™ (IIMS).
            </p>
            {responsibleItems.map((item) => (
              <HelpItem key={item.number} {...item} />
            ))}
          </div>
        </div>

        <div className={styles.advisory}>
          <div className={styles.advisoryCopy}>
            <h3 className={styles.advisoryTitle}>Strategic Marketing Advisory.</h3>
            <p className={styles.advisoryBody}>
              Ongoing senior counsel for CMOs and leadership teams as priorities, decisions and
              challenges evolve.
            </p>
          </div>
          <Link href="/contact" className={`btn btn--teal btn--sm btn--wrap ${styles.advisoryCta}`}>
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
          Senior, hands-on and close to the decisions. Growing Clever works alongside leadership
          teams to structure complex questions, challenge assumptions and turn strategy into
          decisions that move the business forward.
        </p>
      </section>

      <ClosingCta
        variant="lab"
        headline="Have a complex growth question?"
        ctaLabel="Start a conversation →"
        href="/contact"
      />
      {/* Rendered last, not first: React hoists these <meta> elements into
          <head>, and Next's scroll-on-navigation walks the page segment's
          first DOM node. A zero-sized <meta> there makes it abandon the
          scroll, so a route change lands mid-page. */}
      <OpenGraph {...seo} />
    </>
  );
}
