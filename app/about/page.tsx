import type { Metadata } from "next";
import { OpenGraph, pageMetadata, type PageSeo } from "@/lib/seo";
import ClosingCta from "@/components/chrome/ClosingCta";
import styles from "./about.module.css";

const seo: PageSeo = {
  title: "About Neuza Alcobio | Founder of Growing Clever",
  description:
    "The experience and perspective behind Growing Clever, shaped by more than 15 years across agencies, global accounts and corporate marketing leadership.",
  socialTitle: "About Neuza Alcobio | Founder of Growing Clever",
  path: "/about",
};

/**
 * The root layout appends " — Growing Clever" to a plain string title. The
 * approved About title already names the brand, so it is set absolute to keep
 * it exactly as approved.
 */
export const metadata: Metadata = {
  ...pageMetadata(seo),
  title: { absolute: seo.title },
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className="eyebrow">Growing Clever · About</div>
          <h1 className={styles.heroHeadline}>
            Built from experience.
            <br /> Shaped by a
            <br /> different question.
          </h1>
        </div>
        <img src="/assets/neuza.png" alt="Neuza Alcobio" className={styles.heroPortrait} />
      </section>

      <section className={styles.founder}>
        <div className={styles.founderIntro}>
          <div className="eyebrow">01 — The founder</div>
          <h2 className={styles.founderHeadline}>Neuza Alcobio</h2>
          <p className={styles.founderRole}>Marketing executive, strategist and advisor.</p>
        </div>
        <div className={styles.founderCopy}>
          <p className={styles.body}>
            Neuza Alcobio founded Growing Clever after more than 15 years across global creative
            networks, independent agencies, international account leadership and senior corporate
            marketing roles.
          </p>
          <p className={styles.body}>
            Her career spans major brands across consumer, healthcare, financial services, retail
            and energy, from leading multi-country accounts to building and leading the marketing
            function at Logicalis Portugal.
          </p>
          <p className={styles.body}>
            That breadth shaped a clear view:{" "}
            <strong className={styles.bodyStrong}>
              marketing does more than communicate or drive demand. It influences how businesses are
              understood, how markets move and what customers come to expect.
            </strong>
          </p>
          <p className={styles.body}>
            Working on responsible business from inside a corporate organisation sharpened that lens
            further. Growth and accountability are not competing ideas; the quality of growth depends
            on the quality of the decisions behind it. Growing Clever was built on that belief.
          </p>
        </div>
      </section>

      <section className={styles.brands}>
        {"Selected brands from Neuza’s career · "}
        <strong className={styles.brandsList}>
          {"L’Oréal · Nestlé · Johnson & Johnson · Pfizer · Henkel · Zurich · Repsol · Auchan · Président · Caixa Geral de Depósitos"}
        </strong>
      </section>

      <section className={styles.thread}>
        <div className={styles.threadIntro}>
          <div className="eyebrow">02 — The thread</div>
          <h2 className={styles.threadHeadline}>
            The pattern behind
            <br className={styles.mobileBreak} /> the work.
          </h2>
        </div>
        <div className={styles.threadCopy}>
          <p className={styles.body}>
            As organisations grow, marketing has to keep pace with more complexity, more scrutiny and
            more pressure to deliver.
          </p>
          <p className={styles.body}>
            The question is not how to slow growth down, but how to make sharper choices about how
            marketing is organised, how the business is positioned, how it goes to market and what it
            can credibly say.
          </p>
          <p className={styles.threadStatement}>
            Growing Clever works from that premise: strategic marketing as the work, accountability
            as the lens.
          </p>
        </div>
      </section>

      <section className={styles.question}>
        <div className={styles.questionIntro}>
          <div className="eyebrow eyebrow--muted">03 — The question</div>
          <h2 className={styles.questionHeadline}>
            What if growth was not just about getting bigger?
          </h2>
        </div>
        <div className={styles.questionCopy}>
          <p className={styles.questionBody}>
            That question became the starting point for Growing Clever — a different way of thinking
            about growth, value and accountability.
          </p>
          <p className={styles.questionStatement}>
            Not a formula.
            <br /> A way of thinking.
          </p>
        </div>
      </section>

      <ClosingCta
        variant="about"
        headline="What does your business need to decide next?"
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
