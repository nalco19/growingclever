import type { Metadata } from "next";
import PageHero from "@/components/chrome/PageHero";
import ClosingCta from "@/components/chrome/ClosingCta";
import styles from "./voice.module.css";

export const metadata: Metadata = {
  title: "Voice",
  description:
    "Perspectives, interviews and ideas exploring the questions shaping marketing and business.",
};

export default function VoicePage() {
  return (
    <>
      <PageHero
        eyebrow="Growing Clever Voice"
        headline="Where ideas become conversations."
        lead="Perspectives, interviews and ideas exploring the questions shaping marketing and business."
        imageSrc="/assets/voice-hero-v2.jpg"
        imageAlt="Neuza Alcobio in a Growing Clever conversation"
      />

      <section className={styles.thinking}>
        <div className="eyebrow">01 — Selected thinking</div>
        <h2 className={styles.thinkingHeadline}>Selected thinking.</h2>

        <article className={styles.featured}>
          <div className={styles.featuredLogoBox}>
            <img
              src="/assets/marketeer-logo.svg"
              alt="Marketeer"
              className={styles.featuredLogo}
            />
          </div>
          <div className={styles.featuredCopy}>
            <span className="eyebrow">Featured conversation</span>
            <h3 className={styles.featuredTitle}>Responsible Marketing: From Intent to Proof</h3>
            <p className={styles.featuredBody}>
              Over 40% of environmental claims analyzed by the European Commission were found to be
              exaggerated, false, or unprovable.
            </p>
            <p className={styles.source}>Marketeer</p>
            <a
              href="https://marketeer.sapo.pt/responsible-marketing-da-intencao-a-prova/"
              target="_blank"
              rel="noreferrer"
              className={`btn btn--green btn--sm ${styles.featuredCta}`}
            >
              Read the interview →
            </a>
          </div>
        </article>

        <article className={styles.perspective}>
          <span className={`eyebrow ${styles.perspectiveEyebrow}`}>Perspective</span>
          <div className={styles.perspectiveLogoBox}>
            <img src="/assets/eco-logo.png" alt="ECO" className={styles.perspectiveLogo} />
          </div>
          <div className={styles.perspectiveCopy}>
            <h3 className={styles.perspectiveTitle}>
              Greenwashing is getting expensive. Portuguese companies should act as if the clock is
              already ticking.
            </h3>
            <p className={styles.perspectiveBody}>
              {"Under the EU’s EmpCo Directive, green marketing shifts from “does it sell?” to “does it survive an audit?”"}
            </p>
            <p className={styles.source}>ECO</p>
            <a
              href="https://eco.sapo.pt/2026/08/19/o-greenwashing-esta-a-ficar-caro-as-empresas-portuguesas-deviam-agir-como-se-o-relogio-ja-estivesse-a-contar/"
              target="_blank"
              rel="noreferrer"
              className={`btn btn--green btn--sm ${styles.perspectiveCta}`}
            >
              Read →
            </a>
          </div>
        </article>
      </section>

      <section className={styles.pov}>
        <div className="eyebrow eyebrow--muted">02 — The point of view</div>
        <h2 className={styles.povHeadline}>
          {"We don't need more content. "}
          <br className={styles.povBreak} />
          We need better conversations.
        </h2>
      </section>

      <ClosingCta
        variant="voice"
        headline="Have an idea worth exploring?"
        ctaLabel="Share an idea →"
        href="/contact"
      />
    </>
  );
}
