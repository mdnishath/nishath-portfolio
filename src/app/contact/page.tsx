import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Eyebrow from "@/components/Eyebrow";
import GoldText from "@/components/GoldText";
import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";
import SplitHeading from "@/components/SplitHeading";
import { FacebookIcon, GitHubIcon, MailIcon, WhatsAppIcon } from "@/components/SocialIcons";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/data";
import { breadcrumbJsonLd } from "@/lib/seo";
import subpage from "../subpage.module.css";
import styles from "./contact.module.css";

const description =
  "Let's build something premium. WhatsApp, email or socials — I reply within a day.";

export const metadata: Metadata = {
  title: "Contact — Hire a Full-Stack Developer",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Hire a Full-Stack Developer",
    description,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <section className={styles.section}>
        <div className={subpage.headerGlow} />
        <div className={`container ${styles.inner}`}>
          {/* left: intro + direct contact */}
          <div className={styles.left}>
            <div>
              <Reveal variant="fade" delay={0.1}>
                <Eyebrow large marginBottom={28}>
                  Contact
                </Eyebrow>
              </Reveal>
              <div style={{ position: "relative", display: "inline-block" }}>
                <SplitHeading
                  as="h1"
                  className={`serif ${styles.title}`}
                  onScroll={false}
                  delay={0.25}
                >
                  Let&apos;s build something <GoldText>premium.</GoldText>
                </SplitHeading>
                <Sparkle size={24} style={{ position: "absolute", top: -14, right: -28 }} />
              </div>
              <Reveal delay={0.55}>
                <p className={styles.lede}>
                  Tell me what you&apos;re building — I&apos;ll reply within a day.
                </p>
              </Reveal>
            </div>

            <Reveal className={styles.channels} stagger delay={0.7}>
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
            </Reveal>

            <Reveal className={styles.socials} delay={0.9}>
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={styles.social}>
                <GitHubIcon size={19} />
              </a>
              <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.social}>
                <FacebookIcon size={19} />
              </a>
            </Reveal>
          </div>

          {/* right: form card */}
          <Reveal className={styles.right} variant="scale" delay={0.35}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
