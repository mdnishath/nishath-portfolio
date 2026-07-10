import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import OrnamentDivider from "./OrnamentDivider";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

interface SectionHeadingProps {
  eyebrow: string;
  children: ReactNode;
  /** show the animated ornament under the title */
  ornament?: boolean;
}

/** Centered section header: eyebrow label + serif title + optional ornament. */
export default function SectionHeading({ eyebrow, children, ornament }: SectionHeadingProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: "clamp(48px,6vw,72px)" }}>
      <Reveal variant="fade">
        <Eyebrow centered>{eyebrow}</Eyebrow>
      </Reveal>
      <SplitHeading
        as="h2"
        className="serif"
        style={{
          fontSize: "clamp(32px,4vw,50px)",
          lineHeight: 1.12,
          margin: 0,
          color: "var(--ink)",
        }}
      >
        {children}
      </SplitHeading>
      {ornament && (
        <Reveal variant="fade" delay={0.25}>
          <OrnamentDivider />
        </Reveal>
      )}
    </div>
  );
}
