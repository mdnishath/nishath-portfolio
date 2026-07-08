interface EyebrowProps {
  children: string;
  /** center the label with lines on both sides */
  centered?: boolean;
  /** larger 13px label with 48px gradient line (page headers / hero) */
  large?: boolean;
  marginBottom?: number;
}

/** Small uppercase gold label with decorative line(s). */
export default function Eyebrow({ children, centered, large, marginBottom = 24 }: EyebrowProps) {
  return (
    <div className={`eyebrow${centered ? " centered" : ""}`} style={{ marginBottom }}>
      <span className={`eyebrowLine${large ? " fade" : ""}`} />
      <span className={`eyebrowText${large ? " lg" : ""}`}>{children}</span>
      {centered && <span className="eyebrowLine" />}
    </div>
  );
}
