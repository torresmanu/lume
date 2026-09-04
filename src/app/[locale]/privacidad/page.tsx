import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resolveLocale } from "@/i18n/locale";
import { languageAlternates, localeUrl } from "@/lib/locale-url";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "privacyPage" });

  const path = "/privacidad";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: localeUrl(locale, path),
      languages: languageAlternates(path),
    },
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const locale = resolveLocale((await params).locale);
  setRequestLocale(locale);
  const t = await getTranslations("privacyPage");

  return (
    <main id="contenido" className="article">
      <h1 className="h1">{t("title")}</h1>
      <p className="body">{t("lead")}</p>
      <h2 className="h2">{t("whatTitle")}</h2>
      <p className="body">{t("whatBody")}</p>
      <h2 className="h2">{t("whyTitle")}</h2>
      <p className="body">{t("whyBody")}</p>
      <h2 className="h2">{t("leaveTitle")}</h2>
      <p className="body">{t("leaveBody")}</p>
      <p className="legal-note">{t("contact")}</p>
    </main>
  );
}
