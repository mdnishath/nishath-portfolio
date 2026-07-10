import { services, site } from "./data";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdnishath.com";

export const SITE_TITLE = "Md Nishath Khandakar — Full-Stack Developer & AI Builder";

export const SITE_DESCRIPTION =
  "Full-stack websites, desktop & mobile apps, automation and SEO — delivered fast. " +
  "Govt.-verified freelancer with 7+ years of experience, building AI-powered with Claude Code. Hire one developer, get full team output.";

export const SITE_KEYWORDS = [
  "Md Nishath Khandakar",
  "full-stack developer",
  "hire full-stack developer",
  "Next.js developer",
  "MERN stack developer",
  "WordPress developer",
  "freelance web developer Bangladesh",
  "AI-powered development",
  "Claude Code developer",
  "Electron desktop apps",
  "mobile app developer",
  "workflow automation",
  "Telegram bot developer",
  "technical SEO expert",
  "Google Business Profile management",
];

/**
 * Site-wide entity graph: Person + WebSite + ProfessionalService.
 * Rendered once in the root layout so search engines and AI crawlers
 * see the same identity on every page.
 */
export function siteJsonLd() {
  const personId = `${SITE_URL}/#person`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: SITE_URL,
        image: `${SITE_URL}${site.photo}`,
        jobTitle: "Full-Stack Developer & AI Builder",
        description: SITE_DESCRIPTION,
        email: `mailto:${site.email}`,
        telephone: site.whatsapp[0]?.label.replace(/[\s-]/g, ""),
        sameAs: [site.github, site.facebook],
        address: { "@type": "PostalAddress", addressCountry: "BD" },
        knowsAbout: services.map((s) => s.title),
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: "Verified Freelancer",
          credentialCategory: "Professional Certification",
          recognizedBy: {
            "@type": "GovernmentOrganization",
            name: "Dept. of ICT, ICT Division, Government of Bangladesh",
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: site.name,
        description: SITE_DESCRIPTION,
        publisher: { "@id": personId },
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: `${site.name} — Full-Stack Development Services`,
        url: SITE_URL,
        image: `${SITE_URL}${site.photo}`,
        founder: { "@id": personId },
        areaServed: "Worldwide",
        priceRange: "$$",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.desc,
              provider: { "@id": personId },
            },
          })),
        },
      },
    ],
  };
}

/** BreadcrumbList JSON-LD for subpages. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
