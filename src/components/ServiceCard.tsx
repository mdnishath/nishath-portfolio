import type { Service } from "@/lib/data";
import Icon from "./Icon";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className={`card ${styles.card}`}>
      <span className={styles.icon}>
        <Icon paths={service.iconPaths} />
      </span>
      <h3 className={`serif ${styles.title}`}>{service.title}</h3>
      <p className={styles.desc}>{service.desc}</p>
    </div>
  );
}
