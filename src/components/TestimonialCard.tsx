import type { Testimonial } from "@/lib/data";
import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className={`card ${styles.card}`}>
      <span className={`serif ${styles.quoteMark}`}>&ldquo;</span>
      <p className={styles.quote}>{testimonial.quote}</p>
      <div className={styles.author}>
        <span className={styles.name}>{testimonial.name}</span>
        <span className={styles.role}>{testimonial.role}</span>
      </div>
    </div>
  );
}
