import { Fragment } from "react";
import Link from "next/link";
import { OpenGraph, homeSeo } from "@/lib/seo";
import styles from "./home.module.css";

const stuckPoints = [
  "Strong execution, blurred positioning.",
  "Real progress, invisible to the market.",
  "More to deliver, same old marketing model.",
];

const focusAreas = [
  {
    title: "Strategic Marketing",
    body: "Marketing operating models, brand strategy, positioning and go‑to‑market that turn business ambition into strategy the organisation can actually deliver.",
  },
  {
    title: "Responsible Marketing",
    body: "Our specialism. Marketing that says what it can prove, and makes more of what the business can credibly say.",
  },
];

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#0a7c70",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const pillars = [
  {
    label: "Lab",
    statement: "We solve.",
    body: "Strategic advisory and consulting that turn complex marketing and business challenges into clarity and action.",
    cta: "Explore Lab →",
    href: "/lab",
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  },
  {
    label: "Academy",
    statement: "We teach.",
    body: "Education and practical programmes that turn expertise into capability.",
    cta: "Explore Academy →",
    href: "/academy",
    icon: (
      <>
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
      </>
    ),
  },
  {
    label: "Stage",
    statement: "We speak.",
    body: "Keynotes and executive conversations that challenge how leaders think about growth, marketing and accountability.",
    cta: "Explore Stage →",
    href: "/stage",
    icon: (
      <>
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="8" y1="22" x2="16" y2="22" />
      </>
    ),
  },
  {
    label: "Voice",
    statement: "We shape the conversation.",
    body: "Ideas, perspectives and conversations on the questions shaping business and marketing.",
    cta: "Explore Voice →",
    href: "/voice",
    icon: <polygon points="6,3 20,12 6,21" />,
  },
];

const iimsSteps = [
  {
    number: "01",
    label: "Marketing claims",
    title: <>What do we want to say?</>,
    accent: false,
  },
  {
    number: "02",
    label: "IIMS in practice",
    title: <>Bring evidence, intent and marketing judgement together</>,
    accent: true,
  },
  {
    number: "03",
    label: "Better decisions",
    title: (
      <>
        What to say
        <br />
        What to strengthen
        <br />
        What we’re not saying yet
      </>
    ),
    accent: false,
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <img src="/assets/gc-logo-2026-dark.png" alt="Growing Clever" className={styles.heroLogo} />
        <h1 className={styles.heroHeadline}>Where growth learns accountability.</h1>
        <div className={styles.heroFoot}>
          <p className={styles.heroLead}>
            Strategic marketing advisory, education and speaking for organisations
            <br className={styles.desktopBreak} /> that want to grow in ways they can stand behind.
          </p>
        </div>
      </section>

      <section className={styles.heroImageBand}>
        <div className={styles.heroImageFrame}>
          <img src="/assets/home-hero.jpg" alt="" className={styles.heroImage} />
        </div>
      </section>

      <section className={styles.belief}>
        <div className={styles.beliefIntro}>
          <div className="eyebrow">01 — The belief</div>
          <h2 className={styles.beliefHeadline}>Growth needs more than ambition.</h2>
        </div>
        <div className={styles.beliefAside}>
          <p className={styles.beliefStatement}>It needs better decisions.</p>
        </div>
      </section>

      <section className={styles.stuck}>
        <div className="eyebrow eyebrow--muted">02 — Sound familiar?</div>
        <h2 className={styles.stuckHeadline}>Where growth gets stuck.</h2>
        <div className={styles.stuckGrid}>
          {stuckPoints.map((point) => (
            <div key={point} className={styles.stuckItem}>
              <p className={styles.stuckStatement}>{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.focus}>
        <div className="eyebrow">03 — Where we focus</div>
        <h2 className={styles.focusHeadline}>
          Marketing is the work.
          <br />
          Accountability
          <br className={styles.mobileBreak} /> is the lens.
        </h2>
        <div className={styles.focusGrid}>
          {focusAreas.map((area) => (
            <div key={area.title} className={styles.focusItem}>
              <h3 className={styles.focusTitle}>{area.title}</h3>
              <p className={styles.focusBody}>{area.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.work}>
        <div className="eyebrow">04 — How we work</div>
        <h2 className={styles.workHeadline}>Expertise, applied in different ways.</h2>
        <div className={styles.workGrid}>
          {pillars.map((pillar) => (
            <div key={pillar.label} className={styles.workCard}>
              <div className={styles.workCardHead}>
                <svg className={styles.workIcon} {...iconProps} aria-hidden="true">
                  {pillar.icon}
                </svg>
                <h3 className={styles.workLabel}>{pillar.label}</h3>
              </div>
              <p className={styles.workStatement}>{pillar.statement}</p>
              <p className={styles.workBody}>{pillar.body}</p>
              <Link href={pillar.href} className={`btn btn--green btn--sm ${styles.workCta}`}>
                {pillar.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.iims}>
        <div className="eyebrow eyebrow--muted">05 — Proprietary IP</div>
        <h2 className={styles.iimsHeadline}>
          Impact Integrity Marketing System™
          <br />
          (IIMS)
        </h2>
        <div className={styles.iimsSplit}>
          <p className={styles.iimsStatement}>A better way to decide what your brand says.</p>
          <p className={styles.iimsBody}>
            Developed by Growing Clever, the IIMS turns responsible marketing principles into
            practical decisions for real campaigns and claims.
          </p>
        </div>

        <div className={styles.flow}>
          <div className={styles.flowRow}>
            {iimsSteps.map((step, index) => (
              <Fragment key={step.number}>
                {index > 0 && <div className={styles.flowArrow} aria-hidden="true" />}
                <div
                  className={`${styles.flowBox} ${step.accent ? styles.flowBoxAccent : ""}`.trim()}
                >
                  <div className={styles.flowHead}>
                    <span className={styles.flowNum}>{step.number}</span>
                    <span className={styles.flowLabel}>{step.label}</span>
                  </div>
                  <div className={step.accent ? styles.flowTitleAccent : styles.flowTitle}>
                    {step.title}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.founder}>
        <img src="/assets/neuza.png" alt="Neuza Alcobio" className={styles.founderPortrait} />
        <div className={styles.founderCopy}>
          <div className="eyebrow">06 — Founder</div>
          <h2 className={styles.founderHeadline}>
            Built across agencies,
            <br className={styles.mobileBreak} /> global accounts and
            <br className={styles.mobileBreak} /> corporate leadership.
          </h2>
          <p className={styles.founderBody}>
            Neuza Alcobio is a marketing and communications executive, strategist and advisor with
            over 15 years of international experience. Her background spans agency leadership, brand
            strategy and directing multi-country teams, alongside driving integrated campaigns for
            market leaders including L’Oréal, Nestlé, Johnson &amp; Johnson, Pfizer, Henkel,
            Zurich, Repsol, Auchan, Président and Caixa Geral de Depósitos.
          </p>
          <p className={styles.founderBody}>
            As Marketing &amp; Communications Director at Logicalis Portugal, she built the marketing
            function from the ground up, orchestrated the integration of the Logicalis and Cilnet
            brands and co-architected and drove the global rollout of the Group’s cybersecurity
            go‑to‑market strategy. She also co-led Responsible Business in Portugal for nearly six
            years and served on the company’s Responsible Business &amp; ESG Committee.
          </p>
          <p className={styles.founderBody}>
            She founded Growing Clever to bring that experience to the strategic marketing decisions
            that shape how organisations grow, position themselves, go to market and communicate
            responsibly.
          </p>
          <Link href="/about" className={`btn btn--green btn--sm ${styles.founderCta}`}>
            Meet Neuza →
          </Link>
        </div>
      </section>

      <section className={styles.statement}>
        <p className={styles.statementHeadline}>
          Growth is not
          <br className={styles.mobileBreak} /> the destination.
          <br />
          It is a responsibility.
        </p>
        <p className={styles.statementTagline}>Strategic marketing, with accountability</p>
        <Link href="/contact" className={`btn btn--teal ${styles.statementCta}`}>
          Start a conversation
        </Link>
      </section>
      {/* Rendered last, not first: React hoists these <meta> elements into
          <head>, and Next's scroll-on-navigation walks the page segment's
          first DOM node. A zero-sized <meta> there makes it abandon the
          scroll, so a route change lands mid-page. */}
      <OpenGraph {...homeSeo} />
    </>
  );
}
