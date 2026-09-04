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
