import type { CSSProperties } from "react";

interface SparkleProps {
  size?: number;
  fill?: string;
  /** opacity keyframe values, e.g. "0.15;0.9;0.15" */
  values?: string;
  dur?: string;
  style?: CSSProperties;
}

/** Four-point twinkling star accent. */
export default function Sparkle({
  size = 24,
  fill = "#D9B876",
  values = "0.15;0.9;0.15",
  dur = "3.6s",
  style,
}: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ pointerEvents: "none", ...style }}
    >
      <path
        d="M12 2C13.2 8 16 10.8 22 12C16 13.2 13.2 16 12 22C10.8 16 8 13.2 2 12C8 10.8 10.8 8 12 2Z"
        fill={fill}
      >
        <animate attributeName="opacity" values={values} dur={dur} repeatCount="indefinite" />
      </path>
    </svg>
  );
}
