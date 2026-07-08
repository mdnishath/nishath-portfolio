# Nishath — Luxury Portfolio

Personal portfolio of **Md Nishath Khandakar** — Full-Stack Developer & AI Builder.

Dark luxury theme (gold on near-black), built pixel-perfect from a Claude Design handoff.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + TypeScript
- CSS Modules + design tokens (no UI framework)
- `next/font` — Cormorant Garamond (display serif) + Manrope (sans)
- Fully responsive — desktop top nav, mobile bottom icon nav with hover/tap animation

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, stats, about, verified freelancer card, services, journey timeline, testimonials, CTA |
| `/services` | Services grid + 4-step AI-native process |
| `/work` | Selected work grid |
| `/contact` | Direct channels (WhatsApp / email) + project inquiry form |

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

```
src/
  app/            # routes (App Router) + page-level CSS modules
  components/     # reusable UI (SiteNav, SiteFooter, cards, Reveal, ...)
  lib/data.ts     # all site content in one place
public/uploads/   # portrait photo + verified freelancer ID card (PDF)
```
