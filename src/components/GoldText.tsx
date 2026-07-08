import type { ReactNode } from "react";

/** Gradient gold italic text used inside serif headings. */
export default function GoldText({ children }: { children: ReactNode }) {
  return <span className="goldText">{children}</span>;
}
