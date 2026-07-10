import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import GoldText from "@/components/GoldText";
import OrnamentDivider from "@/components/OrnamentDivider";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import SplitHeading from "@/components/SplitHeading";
import JsonLd from "@/components/JsonLd";
import { processSteps, services } from "@/lib/data";
import { breadcrumbJsonLd } from "@/lib/seo";
import styles from "../subpage.module.css";

const description =
  "Nine disciplines, one point of contact. Web, desktop & mobile apps, automation, SEO and AI-powered development — owned end to end.";

export const metadata: Metadata = {
  title: "Services — Web, Apps, Automation, SEO & AI Development",
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Web, Apps, Automation, SEO & AI Development",
    description,
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/services" }])} />
      {/* ============ PAGE HEADER ============ */}
      <section className={styles.pageHeader}>
        <div className={styles.headerGlow} />
        <div className="container">
          <Reveal variant="fade" delay={0.1}>
            <Eyebrow large marginBottom={28}>
              Services
            </Eyebrow>
          </Reveal>
          <SplitHeading
            as="h1"
            className={`serif ${styles.pageTitle}`}
            style={{ marginBottom: 24 }}
            onScroll={false}
            delay={0.25}
          >
            Everything you need, <GoldText>one builder.</GoldText>
          </SplitHeading>
          <Reveal delay={0.55}>
            <p className={styles.pageLede}>
              Nine disciplines, one point of contact. Every engagement is owned end to end — from
              first brief to launch and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section className={styles.gridSection}>
        <Reveal className="container gridCards" stagger>
          {services.map((svc) => (
            <ServiceCard key={svc.title} service={svc} />
          ))}
        </Reveal>
      </section>

      {/* ============ PROCESS ============ */}
      <section className={styles.band}>
        <div className="container">
          <div className={styles.processHead}>
            <Reveal variant="fade">
              <Eyebrow>How I Work</Eyebrow>
            </Reveal>
            <SplitHeading as="h2" className={`serif ${styles.processTitle}`}>
              AI-native workflow. <GoldText>Agency quality, freelancer speed.</GoldText>
            </SplitHeading>
            <Reveal delay={0.2}>
              <p className={styles.processLede}>
                A disciplined four-step process — powered by Claude Code — turns your brief into a
                production-grade product, fast.
              </p>
            </Reveal>
          </div>
          <Reveal className={styles.processGrid} stagger>
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
        <div className={styles.ctaInner}>
          <Reveal variant="fade">
            <OrnamentDivider style={{ margin: "0 auto 24px" }} />
          </Reveal>
          <SplitHeading as="h2" className={`serif ${styles.ctaTitle}`}>
            Need something <GoldText>built?</GoldText>
          </SplitHeading>
          <Reveal delay={0.25}>
            <Link href="/contact" className="btnGold wide">
              Let&apos;s Talk
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
