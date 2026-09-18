import Link from "next/link";
import { OpenGraph, homeSeo } from "@/lib/seo";
import styles from "./home.module.css";

const lensQuestions = [
  { title: "What are we growing?", body: "The business, the brand and the value we create." },
  {
    title: "How are we growing it?",
    body: "The choices, trade-offs and opportunities behind growth.",
  },
  { title: "What are we accountable for?", body: "The value we create and the trust we build." },
];

const focusAreas = [
  {
    title: "Responsible Marketing",
    body: "Marketing built around credibility, evidence, accountability and commercial impact.",
  },
  {
    title: "Responsible Business",
    body: "Connecting responsible business with growth, reputation and long-term value.",
  },
  {
    title: "Strategic Marketing",
    body: "Positioning, planning and decision-making that turn business ambition into growth.",
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
    label: "Academy",
    statement: "We teach.",
    body: "Executive learning and practical programmes that turn expertise into capability.",
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

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <img src="/assets/gc-logo-2026-dark.png" alt="Growing Clever" className={styles.heroLogo} />
        <h1 className={styles.heroHeadline}>Where growth learns accountability.</h1>
        <div className={styles.heroFoot}>
          <p className={styles.heroLead}>
            We help organisations and leaders turn growth into responsible, strategic and lasting
            value.
          </p>
          <div className={styles.heroEyebrowWrap}>
            <div className="eyebrow">Education · Advisory · Speaking · Thought Leadership</div>
          </div>
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

      <section className={styles.lens}>
        <div className="eyebrow eyebrow--muted">02 — The lens</div>
        <h2 className={styles.lensHeadline}>Different questions.</h2>
        <div className={styles.lensGrid}>
          {lensQuestions.map((question) => (
            <div key={question.title} className={styles.lensItem}>
              <p className={styles.lensQuestion}>{question.title}</p>
              <p className={styles.lensBody}>{question.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.focus}>
        <div className="eyebrow">03 — Where we focus</div>
        <h2 className={styles.focusHeadline}>Three areas. One approach to growth</h2>
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
        <div className={styles.iimsIntro}>
          <div className={styles.iimsIntroLeft}>
            <div className="eyebrow eyebrow--muted">05 — Proprietary IP</div>
            <h2 className={styles.iimsHeadline}>Impact Integrity Marketing System™</h2>
            <p className={styles.iimsStatement}>
              Turning accountability into a marketing decision system.
            </p>
          </div>
          <div className={styles.iimsIntroRight}>
            <p className={styles.iimsLead}>
              A proprietary framework developed by Growing Clever to help organisations evaluate
              marketing claims before they reach the market.
            </p>
            <p className={styles.iimsBody}>
              The IIMS™ brings structure, shared criteria and documented rationale to marketing
              decisions — helping teams move from individual judgement to a more consistent and
              defensible approach.
            </p>
          </div>
        </div>

        <div className={styles.flow}>
          <div className={styles.flowRow}>
            <div className={styles.flowBox}>
              <div className={styles.flowLabel}>Campaign Claims</div>
              <div className={styles.flowTitle}>What are we saying?</div>
            </div>
            <div className={styles.flowArrow} aria-hidden="true" />
            <div className={`${styles.flowBox} ${styles.flowBoxAccent}`}>
              <div className={`${styles.flowLabel} ${styles.flowLabelAccent}`}>IIMS™ Evaluation</div>
              <div className={styles.flowTitleAccent}>Claims assessed through the framework</div>
            </div>
            <div className={styles.flowArrow} aria-hidden="true" />
            <div className={styles.flowBox}>
              <div className={styles.flowTitle}>Decision</div>
            </div>
          </div>

          <div className={styles.flowBranchRow}>
            <div className={styles.flowBranch}>
              <div className={styles.flowStem} />
              <div className={styles.flowBar}>
                <div className={styles.flowTickLeft} />
                <div className={styles.flowTickMid} />
                <div className={styles.flowTickRight} />
              </div>
              <div className={styles.flowOutcomes}>
                <span className={styles.flowOutcome}>Launch</span>
                <span className={styles.flowOutcome}>Adjust &amp; Review</span>
                <span className={styles.flowOutcome}>Stop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.founder}>
        <img src="/assets/neuza.png" alt="Neuza Alcobio" className={styles.founderPortrait} />
        <div className={styles.founderCopy}>
          <div className="eyebrow">06 — Founder</div>
          <h2 className={styles.founderHeadline}>Founded by experience.</h2>
          <p className={styles.founderBody}>
            <span className={styles.founderName}>Neuza Alcobio</span> is a Marketing &amp;
            Communications executive, strategist and advisor with 15+ years of international
            experience across marketing, brand transformation and business growth.
          </p>
          <p className={styles.founderBody}>
            Her career spans agency and corporate leadership, global brands and international
            markets — bringing together strategy, commercial ambition and responsible business.
          </p>
          <Link href="/about" className={`btn btn--green btn--sm ${styles.founderCta}`}>
            Meet Neuza →
          </Link>
        </div>
      </section>

      <section className={styles.statement}>
        <p className={styles.statementHeadline}>
          Growth is not the destination.
          <br />
          It is a responsibility.
        </p>
        <p className={styles.statementTagline}>Where growth learns accountability.</p>
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
