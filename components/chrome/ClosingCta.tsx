import Link from "next/link";
import styles from "./ClosingCta.module.css";

type Variant = "academy" | "lab" | "stage" | "voice" | "about";

type Props = {
  variant: Variant;
  headline: string;
  ctaLabel: string;
  href: string;
};

export default function ClosingCta({ variant, headline, ctaLabel, href }: Props) {
  return (
    <section className={`${styles.closing} ${styles[variant]}`}>
      <h2 className={styles.headline}>{headline}</h2>
      <Link href={href} className="btn btn--ink">
        {ctaLabel}
      </Link>
    </section>
  );
}
