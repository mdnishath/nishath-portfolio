"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import styles from "./SiteNav.module.css";

const mobileIcons: Record<string, string[]> = {
  home: ["M3 10.5 12 3l9 7.5", "M5 9.5V21h14V9.5", "M10 21v-6h4v6"],
  services: [
    "M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z",
  ],
  work: ["M3 8h18v12H3z", "M8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3", "M3 13h18"],
  contact: ["M3 5h18v14H3z", "m3 7 9 6 9-6"],
};

export default function SiteNav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}>N</span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>NISHATH</span>
              <span className={styles.brandRole}>FULL-STACK DEVELOPER</span>
            </span>
          </Link>

          <nav className={styles.desktopNav}>
            {navLinks.map((lnk) => (
              <Link
                key={lnk.key}
                href={lnk.href}
                className={`${styles.navLink}${isActive(lnk.href) ? ` ${styles.navLinkActive}` : ""}`}
              >
                {lnk.label}
              </Link>
            ))}
            <Link href="/contact" className={styles.ctaPill}>
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      </header>

      {/* mobile bottom navigation */}
      <nav className={styles.mobileNav} aria-label="Mobile navigation">
        <div className={styles.mobileNavInner}>
          {navLinks.map((lnk) => (
            <Link
              key={lnk.key}
              href={lnk.href}
              className={`${styles.mobileItem}${isActive(lnk.href) ? ` ${styles.mobileItemActive}` : ""}`}
            >
              <span className={styles.mobileIcon}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {mobileIcons[lnk.key].map((d, i) => (
                    <path key={i} d={d} />
                  ))}
                </svg>
              </span>
              <span className={styles.mobileLabel}>{lnk.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
