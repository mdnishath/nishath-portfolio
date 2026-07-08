import Link from "next/link";
import type { Project } from "@/lib/data";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`card ${styles.card}`}>
      <div className={styles.media}>
        <span className={styles.placeholder}>{project.placeholder}</span>
      </div>
      <div className={styles.body}>
        <h3 className={`serif ${styles.title}`}>{project.title}</h3>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link href="/contact" className={styles.view}>
          View →
        </Link>
      </div>
    </div>
  );
}
