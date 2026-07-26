import { WhatsAppIcon } from "@/components/SocialIcons";
import { site } from "@/lib/data";
import styles from "./WhatsAppFloat.module.css";

const message = encodeURIComponent(
  "Hi Nishath! I found you on mdnishath.com — I'd like to talk about a project."
);

export default function WhatsAppFloat() {
  return (
    <a
      href={`${site.whatsapp[0].href}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className={styles.float}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className={styles.pulse} aria-hidden />
      <WhatsAppIcon size={26} />
    </a>
  );
}
