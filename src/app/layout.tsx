import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Md Nishath Khandakar — Full-Stack Developer & AI Builder",
  description:
    "Full-stack websites, desktop & mobile apps, automation and SEO — delivered fast. AI-powered development with Claude Code, production-grade products across any stack, solo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable}`}>
        <div className="pageWrap">
          <div className="grain" aria-hidden />
          <SiteNav />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
