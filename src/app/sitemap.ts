import type { MetadataRoute } from "next";
import { GUIDE_SLUGS, GUIDE_UPDATED } from "@/content/guides";
import { routing } from "@/i18n/routing";
import { languageAlternates, localeUrl } from "@/lib/locale-url";

const PATHS = [
  "/",
  "/guias",
  ...GUIDE_SLUGS.map((slug) => `/guias/${slug}`),
  "/preguntas",
  "/consorcio",
  "/privacidad",
];

function priorityFor(path: string): number {
  if (path === "/") return 1;
  if (path === "/guias") return 0.9;
  if (path.startsWith("/guias/")) return 0.8;
  if (path === "/preguntas" || path === "/consorcio") return 0.7;
  return 0.3;
}

function changeFrequencyFor(path: string): "weekly" | "monthly" | "yearly" {
  if (path === "/") return "weekly";
  if (path === "/privacidad") return "yearly";
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    PATHS.map((path) => ({
      url: localeUrl(locale, path),
      changeFrequency: changeFrequencyFor(path),
      priority: priorityFor(path),
      alternates: {
        languages: languageAlternates(path),
      },
      // Privacy copy did not change with the guides.
      ...(path === "/privacidad" ? {} : { lastModified: GUIDE_UPDATED }),
    })),
  );
}
