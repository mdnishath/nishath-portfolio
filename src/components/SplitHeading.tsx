"use client";

import { createElement, useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

interface SplitHeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  style?: CSSProperties;
  /** Play on scroll into view (default). Set false to play immediately (hero). */
  onScroll?: boolean;
  delay?: number;
}

/**
 * Ponder-style heading reveal: text is split into lines, each line slides up
 * from behind an invisible mask, staggered. DOM is restored after the
 * animation so tight line-heights never clip descenders at rest.
 */
export default function SplitHeading({
  children,
  as = "h2",
  className,
  style,
  onScroll = true,
  delay = 0,
}: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let played = false;
        const split = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            if (played) return;
            return gsap.from(self.lines, {
              yPercent: 115,
              duration: 1.15,
              ease: "power4.out",
              stagger: 0.12,
              delay,
              scrollTrigger: onScroll
                ? { trigger: el, start: "clamp(top 88%)", once: true }
                : undefined,
              onComplete() {
                played = true;
                requestAnimationFrame(() => split.revert());
              },
            });
          },
        });
        return () => split.revert();
      });
    },
    { scope: ref }
  );

  return createElement(as, { ref, className, style }, children);
}
