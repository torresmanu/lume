import type { AppLocale } from "@/i18n/routing";

/** Noon UTC keeps the calendar day stable in Argentina and Spain. */
export function formatGuideDate(locale: AppLocale, isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00Z`);
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
