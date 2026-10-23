import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * Answer-engine crawlers are named so a later default block cannot hide the
 * guides from them. Google AI Overviews still use Googlebot, covered by *.
 */
const ANSWER_ENGINES = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl();
  const allowGuides = {
    allow: "/",
    disallow: ["/api/"],
  };

  return {
    rules: [
      { userAgent: "*", ...allowGuides },
      { userAgent: ANSWER_ENGINES, ...allowGuides },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
