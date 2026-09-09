import type { Metadata } from "next";
import ClosingCta from "@/components/chrome/ClosingCta";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Founded by experience. Built around a different question.",
};

const experience = [
  {
    title: "Brand & Agency",
    body: "Built a foundation in brand strategy, creativity and commercial growth — working across sectors, clients and markets.",
  },
  {
    title: "International & Global",
    body: "Led brands, teams and business across markets — learning to balance global consistency with local relevance.",
  },
  {
    title: "Corporate Leadership",
    body: "Moved marketing closer to the business — connecting strategy, go-to-market, transformation, reputation and commercial growth.",
  },
  {
    title: "Responsible Business",
    body: "Expanded the lens from how organisations grow to how growth builds long-term value and trust.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className="eyebrow">Growing Clever · About</div>
          <h1 className={styles.heroHeadline}>
            Founded by experience.{" "}
            <br className={styles.heroBreak} />
            Built around a different question.
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
            {
              "With 15+ years of international experience, Neuza's career spans marketing, brand transformation and business growth."
            }
          </p>
          <p className={styles.body}>
            From brand and agency strategy to global account leadership and corporate marketing, she
            has worked across markets, sectors and international brands — bringing together strategic
            thinking, commercial ambition and responsible business.
          </p>
        </div>
      </section>

      <section className={styles.experience}>
        <div className="eyebrow">02 — Experience</div>
        <h2 className={styles.experienceHeadline}>Experience shapes the perspective.</h2>
        <div className={styles.experienceGrid}>
          {experience.map((stage) => (
            <div key={stage.title} className={styles.stage}>
              <span className={styles.stageDot} />
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageBody}>{stage.body}</p>
            </div>
          ))}
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
            <br />A way of thinking.
          </p>
        </div>
      </section>

      <ClosingCta
        variant="about"
        headline="Still asking better questions."
        ctaLabel="Start a conversation →"
        href="/contact"
      />
    </>
  );
}
