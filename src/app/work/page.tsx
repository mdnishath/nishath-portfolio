import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import GoldText from "@/components/GoldText";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";
import { projects, site } from "@/lib/data";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "Work — Md Nishath Khandakar",
  description:
    "Selected work — SaaS platforms, WordPress plugins and automation bots, built to perform.",
};

export default function WorkPage() {
  return (
    <main>
      {/* ============ PAGE HEADER ============ */}
      <section className={styles.pageHeader}>
        <div className={styles.headerGlow} />
        <Reveal className={`container ${styles.workHeaderRow}`}>
          <div>
            <Eyebrow large marginBottom={28}>
              Selected Work
            </Eyebrow>
            <h1 className={`serif ${styles.pageTitle} ${styles.workTitleWrap}`}>
              Built to <GoldText>perform.</GoldText>
              <Sparkle
                size={24}
                style={{ position: "absolute", top: -14, right: -30 }}
              />
            </h1>
          </div>
          <a href={site.github} target="_blank" rel="noreferrer" className={styles.githubLink}>
            More on GitHub →
          </a>
        </Reveal>
      </section>

      {/* ============ WORK GRID ============ */}
      <section className={styles.gridSection}>
        <Reveal className={`container ${styles.workGrid}`}>
          {projects.map((proj) => (
            <ProjectCard key={proj.slotId} project={proj} />
          ))}
        </Reveal>
      </section>

      {/* ============ CTA ============ */}
      <section className={styles.ctaBand}>
        <Reveal className={styles.ctaInner}>
          <h2 className={`serif ${styles.ctaTitle}`}>
            Your project could be <GoldText>next.</GoldText>
          </h2>
          <Link href="/contact" className="btnGold wide">
            Start a Project
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
