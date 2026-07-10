import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import GoldText from "@/components/GoldText";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";
import SplitHeading from "@/components/SplitHeading";
import JsonLd from "@/components/JsonLd";
import { projects, site } from "@/lib/data";
import { breadcrumbJsonLd } from "@/lib/seo";
import styles from "../subpage.module.css";

const description =
  "Selected work — SaaS platforms, WordPress plugins and automation bots, built to perform.";

export const metadata: Metadata = {
  title: "Work — SaaS Platforms, Plugins & Automation Bots",
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — SaaS Platforms, Plugins & Automation Bots",
    description,
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Work", path: "/work" }])} />
      {/* ============ PAGE HEADER ============ */}
      <section className={styles.pageHeader}>
        <div className={styles.headerGlow} />
        <div className={`container ${styles.workHeaderRow}`}>
          <div>
            <Reveal variant="fade" delay={0.1}>
              <Eyebrow large marginBottom={28}>
                Selected Work
              </Eyebrow>
            </Reveal>
            <div className={styles.workTitleWrap}>
              <SplitHeading
                as="h1"
                className={`serif ${styles.pageTitle}`}
                onScroll={false}
                delay={0.25}
              >
                Built to <GoldText>perform.</GoldText>
              </SplitHeading>
              <Sparkle
                size={24}
                style={{ position: "absolute", top: -14, right: -30 }}
              />
            </div>
          </div>
          <Reveal delay={0.55}>
            <a href={site.github} target="_blank" rel="noreferrer" className={styles.githubLink}>
              More on GitHub →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ WORK GRID ============ */}
      <section className={styles.gridSection}>
        <Reveal className={`container ${styles.workGrid}`} stagger>
          {projects.map((proj) => (
            <ProjectCard key={proj.slotId} project={proj} />
          ))}
        </Reveal>
      </section>

      {/* ============ CTA ============ */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaInner}>
          <SplitHeading as="h2" className={`serif ${styles.ctaTitle}`}>
            Your project could be <GoldText>next.</GoldText>
          </SplitHeading>
          <Reveal delay={0.25}>
            <Link href="/contact" className="btnGold wide">
              Start a Project
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
