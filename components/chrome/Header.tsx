"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logoLink} aria-label="Growing Clever — home">
          <img src="/assets/gc-logo-2026-dark.png" alt="Growing Clever" className={styles.logo} />
        </Link>

        <div className={styles.desktopNav}>
          <nav className={styles.nav} aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${pathname === item.href ? styles.navItemActive : ""}`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className={styles.cta}>
            Start a conversation
          </Link>
        </div>

        <button
          type="button"
          className={styles.hamburger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.hamburgerRule} />
          <span className={styles.hamburgerRule} />
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className={styles.mobileMenu}>
          <nav className={styles.mobileNav} aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileNavItem} ${
                  pathname === item.href ? styles.mobileNavItemActive : ""
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className={`btn btn--ink ${styles.mobileCta}`}>
            Start a conversation
          </Link>
        </div>
      )}
    </header>
  );
}
