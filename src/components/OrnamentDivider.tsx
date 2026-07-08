import type { CSSProperties } from "react";

/** Animated line–diamond–line ornament under section headings. */
export default function OrnamentDivider({ style }: { style?: CSSProperties }) {
  return (
    <svg
      width="140"
      height="20"
      viewBox="0 0 140 20"
      fill="none"
      style={{ display: "block", margin: "20px auto 0", ...style }}
    >
      <line x1="20" y1="10" x2="58" y2="10" stroke="#C9A24E" strokeWidth="1" opacity="0.45">
        <animate attributeName="x1" values="38;20;38" dur="5s" repeatCount="indefinite" />
      </line>
      <line x1="82" y1="10" x2="120" y2="10" stroke="#C9A24E" strokeWidth="1" opacity="0.45">
        <animate attributeName="x2" values="102;120;102" dur="5s" repeatCount="indefinite" />
      </line>
      <rect
        x="66"
        y="6"
        width="8"
        height="8"
        stroke="#D9B876"
        strokeWidth="1"
        fill="none"
        transform="rotate(45 70 10)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="45 70 10;405 70 10"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}
