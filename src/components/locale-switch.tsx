"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function LocaleSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <nav className="locale-switch" aria-label={t("localeLabel")}>
      <Link href={pathname} locale="es-AR" aria-current={locale === "es-AR" ? "true" : undefined}>
        {t("localeAr")}
      </Link>
      <Link href={pathname} locale="es-ES" aria-current={locale === "es-ES" ? "true" : undefined}>
        {t("localeEs")}
      </Link>
      <Link href={pathname} locale="en" aria-current={locale === "en" ? "true" : undefined}>
        {t("localeEn")}
      </Link>
    </nav>
  );
}
