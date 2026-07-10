"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface ParallaxProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Total vertical drift in px while the element crosses the viewport. Positive = lags behind the scroll (feels deeper). */
  offset?: number;
}

/** Subtle scrubbed parallax drift, tied to the smoothed Lenis scroll. */
export default function Parallax({ children, className, style, offset = 60 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          el,
          { y: -offset / 2 },
          {
            y: offset / 2,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "clamp(top bottom)",
              end: "clamp(bottom top)",
              scrub: true,
            },
          }
        );
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
