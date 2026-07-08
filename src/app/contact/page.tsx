import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Eyebrow from "@/components/Eyebrow";
import GoldText from "@/components/GoldText";
import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";
import { FacebookIcon, GitHubIcon, MailIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { site } from "@/lib/data";
import subpage from "../subpage.module.css";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact — Md Nishath Khandakar",
  description:
    "Let's build something premium. WhatsApp, email or socials — I reply within a day.",
};

export default function ContactPage() {
  return (
    <main>
      <section className={styles.section}>
        <div className={subpage.headerGlow} />
        <div className={`container ${styles.inner}`}>
          {/* left: intro + direct contact */}
          <Reveal className={styles.left}>
            <div>
              <Eyebrow large marginBottom={28}>
                Contact
              </Eyebrow>
              <h1 className={`serif ${styles.title}`}>
                Let&apos;s build something <GoldText>premium.</GoldText>
                <Sparkle size={24} style={{ position: "absolute", top: -14, right: -28 }} />
              </h1>
              <p className={styles.lede}>
                Tell me what you&apos;re building — I&apos;ll reply within a day.
              </p>
            </div>

            <div className={styles.channels}>
              {site.whatsapp.map((wa) => (
                <a key={wa.label} href={wa.href} target="_blank" rel="noreferrer" className={styles.channel}>
                  <span className={styles.channelIcon}>
                    <WhatsAppIcon />
                  </span>
                  <span className={styles.channelText}>
                    <span className={styles.channelLabel}>WhatsApp</span>
                    <span className={styles.channelValue}>{wa.label}</span>
                  </span>
                </a>
              ))}
              <a href={`mailto:${site.email}`} className={styles.channel}>
                <span className={styles.channelIcon}>
                  <MailIcon />
                </span>
                <span className={styles.channelText}>
                  <span className={styles.channelLabel}>Email</span>
                  <span className={styles.channelValue}>{site.email}</span>
                </span>
              </a>
            </div>

            <div className={styles.socials}>
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={styles.social}>
                <GitHubIcon size={19} />
              </a>
              <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.social}>
                <FacebookIcon size={19} />
              </a>
            </div>
          </Reveal>

          {/* right: form card */}
          <Reveal className={styles.right}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
