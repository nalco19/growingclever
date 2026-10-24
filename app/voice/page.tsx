import type { Metadata } from "next";
import { pageMetadata, type PageSeo } from "@/lib/seo";
import PageHero from "@/components/chrome/PageHero";
import ClosingCta from "@/components/chrome/ClosingCta";
import styles from "./voice.module.css";

const seo: PageSeo = {
  title: "Marketing Perspectives & Ideas | Growing Clever Voice",
  description:
    "Interviews, perspectives and ideas on strategic marketing, AI, leadership and the decisions shaping business growth.",
  socialTitle: "Marketing Perspectives & Ideas | Growing Clever Voice",
  path: "/voice",
};

/**
 * The root layout appends " — Growing Clever" to a plain string title. The
 * approved Voice title already names the brand, so it is set absolute to keep
 * it exactly as approved.
 */
export const metadata: Metadata = {
  ...pageMetadata(seo),
  title: { absolute: seo.title },
};

/** Published pieces. Titles, outlets and URLs are reproduced as approved. */
const featured = {
  eyebrow: "Featured perspective",
  logoSrc: "/assets/eco-logo.png",
  logoAlt: "ECO",
  title: "Artificial Intelligence: Leadership in an Age of Acceleration",
  excerpt:
    "A leadership perspective on AI, organisational maturity and the decisions required when technology moves faster than the business.",
  source: "ECO",
  href: "https://eco.sapo.pt/2026/03/25/inteligencia-artificial-lideranca-sob-aceleracao/",
  ctaLabel: "Read \u2192",
};

const perspectives = [
  {
    eyebrow: "Interview",
    logoSrc: "/assets/marketeer-logo.svg",
    logoAlt: "Marketeer",
    title: "Responsible Marketing: From Intent to Proof",
    excerpt:
      "Over 40% of environmental claims analyzed by the European Commission were found to be exaggerated, false, or unprovable.",
    source: "Marketeer",
    href: "https://marketeer.sapo.pt/responsible-marketing-da-intencao-a-prova/",
    ctaLabel: "Read the interview \u2192",
  },
  {
    eyebrow: "Perspective",
    logoSrc: "/assets/eco-logo.png",
    logoAlt: "ECO",
    title:
      "Greenwashing is getting expensive. Portuguese companies should act as if the clock is already ticking.",
    excerpt:
      "Under the EU\u2019s EmpCo Directive, green marketing shifts from \u201Cdoes it sell?\u201D to \u201Cdoes it survive an audit?\u201D",
    source: "ECO",
    href: "https://eco.sapo.pt/2026/08/19/o-greenwashing-esta-a-ficar-caro-as-empresas-portuguesas-deviam-agir-como-se-o-relogio-ja-estivesse-a-contar/",
    ctaLabel: "Read \u2192",
  },
];

type Perspective = (typeof perspectives)[number];

function PerspectiveArticle({
  eyebrow,
  logoSrc,
  logoAlt,
  title,
  excerpt,
  source,
  href,
  ctaLabel,
  first,
}: Perspective & { first: boolean }) {
  return (
    <article className={`${styles.perspective} ${first ? "" : styles.perspectiveNext}`}>
      <span className={`eyebrow ${styles.perspectiveEyebrow}`}>{eyebrow}</span>
      <div className={styles.perspectiveLogoBox}>
        <img src={logoSrc} alt={logoAlt} className={styles.perspectiveLogo} />
      </div>
      <div className={styles.perspectiveCopy}>
        <h3 className={styles.perspectiveTitle}>{title}</h3>
        <p className={styles.perspectiveBody}>{excerpt}</p>
        <p className={styles.source}>{source}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn--green btn--sm btn--wrap ${styles.perspectiveCta}`}
        >
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}

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
              src={featured.logoSrc}
              alt={featured.logoAlt}
              className={`${styles.featuredLogo} ${styles.featuredLogoSquare}`}
            />
          </div>
          <div className={styles.featuredCopy}>
            <span className="eyebrow">{featured.eyebrow}</span>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.featuredBody}>{featured.excerpt}</p>
            <p className={styles.source}>{featured.source}</p>
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn--green btn--sm ${styles.featuredCta}`}
            >
              {featured.ctaLabel}
            </a>
          </div>
        </article>

        {perspectives.map((item, i) => (
          <PerspectiveArticle key={item.href} {...item} first={i === 0} />
        ))}
      </section>

      <section className={styles.pov}>
        <div className="eyebrow eyebrow--muted">02 — The point of view</div>
        <h2 className={styles.povHeadline}>
          {"We don’t need more content. "}
          <br className={styles.povBreak} />
          We need better conversations.
        </h2>
      </section>

      <ClosingCta
        variant="voice"
        headline="Have an idea worth exploring?"
        ctaLabel="Share an idea →"
        href="/contact?topic=Voice"
      />
    </>
  );
}
