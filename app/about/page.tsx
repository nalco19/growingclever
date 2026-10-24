import type { Metadata } from "next";
import { pageMetadata, type PageSeo } from "@/lib/seo";
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
            Her career spans major brands across consumer, healthcare, financial services, retail,
            energy and tech, from leading multi-country accounts to building and leading the
            marketing function at Logicalis Portugal.
          </p>
          <p className={styles.body}>
            That breadth shaped a clear view: marketing does more than communicate or drive demand.
            It influences how businesses are understood, how markets move and what customers come to
            expect.
          </p>
          <p className={styles.body}>
            At Logicalis, alongside leading marketing, she co-led Responsible Business for nearly six
            years. That work made one thing clear:{" "}
            <strong className={styles.bodyStrong}>
              growth and accountability are not competing ideas. The quality of growth depends on the
              quality of the decisions behind it.
            </strong>{" "}
            Growing Clever was built on that belief.
          </p>
        </div>
      </section>

      <section className={styles.brands}>
        {"Selected brands from Neuza’s career · "}
        <strong className={styles.brandsList}>
          {"L’Oréal · Nestlé · Johnson & Johnson · Pfizer · Henkel · Zurich · Repsol · Auchan · Président · Caixa Geral de Depósitos · Logicalis"}
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
            Sometimes the strategy is wrong. More often, it is right on paper and never fully lands
            in the business.
          </p>
          <p className={styles.threadStatement}>
            So the real question is not only what the strategy should be, but what it takes to
            deliver it.
          </p>
        </div>
      </section>

      <ClosingCta
        variant="about"
        headline="What does your business need to decide next?"
        ctaLabel="Start a conversation →"
        href="/contact"
      />
    </>
  );
}
