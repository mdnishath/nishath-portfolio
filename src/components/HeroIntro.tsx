"use client";

import { useRef, type ReactNode } from "react";
import { EASE, gsap, useGSAP } from "@/lib/gsap";

interface HeroIntroProps {
  children: ReactNode;
  className?: string;
}

/**
 * Hero entrance choreography (plays on load, not scroll).
 * Mark elements with data-hero="<delay in s>" to fade/slide them in,
 * or data-hero-portrait="<delay>" for the scale-in portrait treatment.
 */
export default function HeroIntro({ children, className }: HeroIntroProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        el.querySelectorAll<HTMLElement>("[data-hero]").forEach((item) => {
          gsap.from(item, {
            y: 34,
            autoAlpha: 0,
            duration: 1.1,
            ease: EASE,
            delay: parseFloat(item.dataset.hero || "0"),
            clearProps: "all",
          });
        });
        el.querySelectorAll<HTMLElement>("[data-hero-portrait]").forEach((item) => {
          gsap.from(item, {
            scale: 0.92,
            autoAlpha: 0,
            duration: 1.5,
            ease: EASE,
            delay: parseFloat(item.dataset.heroPortrait || "0"),
            clearProps: "all",
          });
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
