import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // personal govt. ID document — keep out of search results
        disallow: "/uploads/id-card.pdf",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
