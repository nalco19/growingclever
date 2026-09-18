import styles from "./PageHero.module.css";

type Props = {
  eyebrow: string;
  headline: string;
  lead: string;
  imageSrc: string;
  imageAlt: string;
  variant?: "default" | "contact";
};

export default function PageHero({
  eyebrow,
  headline,
  lead,
  imageSrc,
  imageAlt,
  variant = "default",
}: Props) {
  return (
    <section className={`${styles.hero} ${variant === "contact" ? styles.contact : ""}`}>
      <div className={styles.copy}>
        <div className="eyebrow">{eyebrow}</div>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.lead}>{lead}</p>
      </div>
      <img src={imageSrc} alt={imageAlt} className={styles.image} />
    </section>
  );
}
