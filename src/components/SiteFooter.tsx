import Link from "next/link";
import { navLinks, site } from "@/lib/data";
import { FacebookIcon, GitHubIcon } from "./SocialIcons";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <span className={styles.brand}>
              <span className={styles.brandMark}>N</span>
              <span className={styles.brandText}>
                <span className={styles.brandName}>NISHATH</span>
                <span className={styles.brandRole}>FULL-STACK DEVELOPER</span>
              </span>
            </span>
            <span className={styles.tagline}>Premium products, shipped solo — powered by AI.</span>
          </div>
          <div className={styles.links}>
            {navLinks.map((lnk) => (
              <Link key={lnk.key} href={lnk.href} className={styles.link}>
                {lnk.label}
              </Link>
            ))}
            <span className={styles.socials}>
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={styles.social}>
                <GitHubIcon />
              </a>
              <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.social}>
                <FacebookIcon />
              </a>
            </span>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copyright}>© 2026 Md Nishath Khandakar. Crafted with AI.</span>
        </div>
      </div>
    </footer>
  );
}
