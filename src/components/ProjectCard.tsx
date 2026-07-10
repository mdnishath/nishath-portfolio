import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`card ${styles.card}`}>
      {project.image ? (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className={styles.media}
          aria-label={`Visit ${project.title}`}
        >
          <Image
            src={project.image}
            alt={`${project.title} — website screenshot`}
            width={1600}
            height={1000}
            className={styles.mediaImg}
          />
        </a>
      ) : (
        <div className={styles.media}>
          <span className={styles.placeholder}>{project.placeholder}</span>
        </div>
      )}
      <div className={styles.body}>
        <h3 className={`serif ${styles.title}`}>{project.title}</h3>
        {project.desc && <p className={styles.desc}>{project.desc}</p>}
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          {project.href ? (
            <a href={project.href} target="_blank" rel="noreferrer" className={styles.view}>
              Visit Site →
            </a>
          ) : (
            <Link href="/contact" className={styles.view}>
              View →
            </Link>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.source}>
              Source ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
