import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ClosingCta from "@/components/chrome/ClosingCta";
import styles from "./stage.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Stage",
  description: "Keynotes and executive conversations on growth, marketing and accountability.",
  socialTitle: "Stage — Growing Clever",
  path: "/stage",
});

const moreTalks = [
  {
    id: "XuSXMeCTIRs",
    title: "Responsible Business as a Startup Superpower — European Innovation Academy 2025",
  },
  {
    id: "7w0upad0WCg",
    title: "Customer Journey to Sustainable IT— IDC Directions 2024",
  },
];

const themes = [
  {
    title: "Leadership & Responsibility",
    body: "What changes when leaders take responsibility for how growth happens?",
  },
  {
    title: "Responsible Innovation & Creativity",
    body: "Can we innovate boldly without losing sight of what matters?",
  },
];

const formats = ["Keynotes", "Executive Talks", "Panels & Roundtables", "Guest Speaking"];

function Thumbnail({ id, title, size }: { id: string; title: string; size: "lg" | "md" }) {
  return (
    <a
      href={`https://youtu.be/${id}`}
      target="_blank"
      rel="noreferrer"
      className={styles.thumb}
      aria-label={`Watch on YouTube: ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
        className={styles.thumbImage}
      />
      <span className={styles.playWrap}>
        <span className={`${styles.play} ${styles[`play_${size}`]}`} aria-hidden="true">
          ▶
        </span>
      </span>
    </a>
  );
}

export default function StagePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className="eyebrow">Growing Clever Stage</div>
          <h1 className={styles.heroHeadline}>Ideas worth putting on stage.</h1>
          <p className={styles.heroLead}>
            Keynotes and executive conversations on growth, marketing and accountability.
          </p>
        </div>
        <div className={styles.heroImageFrame}>
          <img src="/assets/stage-hero-idc-crop.png" alt="Speaking" className={styles.heroImage} />
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.featuredLabels}>
          <span className={styles.badge}>01 — Featured talk</span>
          <span className={styles.badgeMeta}>Responsible Marketing</span>
        </div>
        <h2 className={styles.featuredHeadline}>
          Trust is the growth edge: How to build marketing that drives growth and accountability.
        </h2>

        <div className={styles.featuredCard}>
          <Thumbnail
            id="aZBuBHeLbOU"
            title="Responsible Marketing — European Innovation Academy 2026"
            size="lg"
          />
          <div className={styles.featuredCardCopy}>
            <p className={styles.featuredTalkTitle}>
              Responsible Marketing — European Innovation Academy 2026
            </p>
            <a
              href="https://youtu.be/aZBuBHeLbOU"
              target="_blank"
              rel="noreferrer"
              className={`btn btn--teal btn--sm ${styles.watchButton}`}
            >
              Watch the talk
            </a>
          </div>
        </div>

        <div className={styles.moreTalks}>
          {moreTalks.map((talk) => (
            <div key={talk.id} className={styles.moreTalk}>
              <Thumbnail id={talk.id} title={talk.title} size="md" />
              <p className={styles.moreTalkTitle}>{talk.title}</p>
              <a
                href={`https://youtu.be/${talk.id}`}
                target="_blank"
                rel="noreferrer"
                className={styles.watchLink}
              >
                Watch →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.themes}>
        <div className="eyebrow">02 — Speaking themes</div>
        <h2 className={styles.themesHeadline}>More ideas from the stage.</h2>
        <div className={styles.themesGrid}>
          <div className={styles.themesImageFrame}>
            <img
              src="/assets/audience-themes.jpg"
              alt="Speaking audience"
              className={styles.themesImage}
            />
          </div>
          <div className={styles.themesList}>
            {themes.map((theme) => (
              <div key={theme.title} className={styles.theme}>
                <h3 className={styles.themeTitle}>{theme.title}</h3>
                <p className={styles.themeBody}>{theme.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.formats}>
        <div className="eyebrow">03 — Formats</div>
        <h2 className={styles.formatsHeadline}>Different rooms. Different conversations.</h2>
        <div className={styles.formatsGrid}>
          {formats.map((format) => (
            <div key={format} className={styles.format}>
              {format}
            </div>
          ))}
        </div>
      </section>

      <ClosingCta
        variant="stage"
        headline="What should your audience be thinking about differently?"
        ctaLabel="Start a conversation →"
        href="/contact"
      />
    </>
  );
}
