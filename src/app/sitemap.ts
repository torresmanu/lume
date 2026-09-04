import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";

const PATHS = ["/", "/consorcio", "/privacidad", "/preguntas"] as const;

function localizedPath(locale: (typeof routing.locales)[number], path: string): string {
  const suffix = path === "/" ? "" : path;
  if (locale === routing.defaultLocale) {
    return suffix || "/";
  }
  return `/${locale}${suffix}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();

  return routing.locales.flatMap((locale) =>
    PATHS.map((path) => ({
      url: `${base}${localizedPath(locale, path)}`,
    })),
  );
}
