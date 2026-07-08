import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import GoldText from "@/components/GoldText";
import OrnamentDivider from "@/components/OrnamentDivider";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { processSteps, services } from "@/lib/data";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "Services — Md Nishath Khandakar",
  description:
    "Nine disciplines, one point of contact. Web, desktop & mobile apps, automation, SEO and AI-powered development — owned end to end.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* ============ PAGE HEADER ============ */}
      <section className={styles.pageHeader}>
        <div className={styles.headerGlow} />
        <Reveal className="container">
          <Eyebrow large marginBottom={28}>
            Services
          </Eyebrow>
          <h1 className={`serif ${styles.pageTitle}`} style={{ marginBottom: 24 }}>
            Everything you need, <GoldText>one builder.</GoldText>
          </h1>
          <p className={styles.pageLede}>
            Nine disciplines, one point of contact. Every engagement is owned end to end — from
            first brief to launch and beyond.
          </p>
        </Reveal>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section className={styles.gridSection}>
        <Reveal className="container gridCards">
          {services.map((svc) => (
            <ServiceCard key={svc.title} service={svc} />
          ))}
        </Reveal>
      </section>

      {/* ============ PROCESS ============ */}
      <section className={styles.band}>
        <div className="container">
          <Reveal className={styles.processHead}>
            <Eyebrow>How I Work</Eyebrow>
            <h2 className={`serif ${styles.processTitle}`}>
              AI-native workflow. <GoldText>Agency quality, freelancer speed.</GoldText>
            </h2>
            <p className={styles.processLede}>
              A disciplined four-step process — powered by Claude Code — turns your brief into a
              production-grade product, fast.
            </p>
          </Reveal>
          <Reveal className={styles.processGrid}>
            {processSteps.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.processRail} />
                <span className={styles.processNum}>{step.num}</span>
                <div className={styles.processBody}>
                  <h3 className={`serif ${styles.processStepTitle}`}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className={styles.ctaSection}>
        <Reveal className={styles.ctaInner}>
          <OrnamentDivider style={{ margin: "0 auto 24px" }} />
          <h2 className={`serif ${styles.ctaTitle}`}>
            Need something <GoldText>built?</GoldText>
          </h2>
          <Link href="/contact" className="btnGold wide">
            Let&apos;s Talk
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
