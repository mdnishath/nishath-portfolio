"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { DURATION, EASE, gsap, useGSAP } from "@/lib/gsap";

interface RevealProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  /** "up" (default) slides up + fades, "fade" only fades, "scale" fades + scales in. */
  variant?: "up" | "fade" | "scale";
  /** Animate direct children one-by-one instead of the wrapper as a block. */
  stagger?: boolean;
  delay?: number;
}

/** Scroll-reveal wrapper — GSAP ScrollTrigger, plays once when entering the viewport. */
export default function Reveal({
  children,
  style,
  className,
  variant = "up",
  stagger = false,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = stagger && el.children.length > 0 ? Array.from(el.children) : el;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(targets, {
          y: variant === "fade" ? 0 : 44,
          autoAlpha: 0,
          scale: variant === "scale" ? 0.94 : 1,
          duration: DURATION,
          ease: EASE,
          delay,
          stagger: stagger ? 0.1 : 0,
          clearProps: "all",
          scrollTrigger: {
            trigger: el,
            start: "clamp(top 85%)",
            once: true,
          },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
