import Link from "next/link";
import { contactEmail, footerItems } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandNav}>
          <Link href="/" className={styles.logoLink} aria-label="Growing Clever — home">
            <img src="/assets/gc-logo-2026-dark.png" alt="Growing Clever" className={styles.logo} />
          </Link>
          <nav className={styles.navList} aria-label="Footer">
            {footerItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navItem}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.meta}>
          {/* No LinkedIn destination is supplied in the handoff package, so this stays as label only. */}
          <span className={styles.metaItem}>LinkedIn</span>
          <a href={`mailto:${contactEmail}`} className={styles.metaItem}>
            Email
          </a>
        </div>
      </div>
      <div className={styles.legal}>
        <span className={styles.legalText}>© Growing Clever</span>
      </div>
    </footer>
  );
}
