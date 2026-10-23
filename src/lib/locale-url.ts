import { routing, type AppLocale } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";

export function localeUrl(locale: AppLocale, path: string): string {
  const suffix = path === "/" ? "" : path;
  if (locale === routing.defaultLocale) {
    return `${siteUrl()}${suffix || "/"}`;
  }
  return `${siteUrl()}/${locale}${suffix}`;
}

export function languageAlternates(path: string): Record<string, string> {
  return {
    "es-AR": localeUrl("es-AR", path),
    "es-ES": localeUrl("es-ES", path),
    en: localeUrl("en", path),
    "x-default": localeUrl("es-AR", path),
  };
}

/** Canonical, hreflang, and a pointer to the agent map on every public page. */
export function pageAlternates(locale: AppLocale, path: string) {
  return {
    canonical: localeUrl(locale, path),
    languages: languageAlternates(path),
    types: {
      "text/plain": `${siteUrl()}/llms.txt`,
    },
  };
}

export function openGraphLocales(locale: AppLocale): {
  locale: string;
  alternateLocale: string[];
} {
  return {
    locale: locale.replace("-", "_"),
    alternateLocale: routing.locales
      .filter((item) => item !== locale)
      .map((item) => item.replace("-", "_")),
  };
}
