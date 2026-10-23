import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArticleActions } from "@/components/article-actions";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GuideIndex } from "@/components/guide-index";
import { JsonLd } from "@/components/json-ld";
import { getGuides } from "@/content/guides";
import { resolveLocale } from "@/i18n/locale";
import { openGraphLocales, pageAlternates } from "@/lib/locale-url";
import { withBasePath } from "@/lib/base-path";
import { guideHubJsonLd } from "@/lib/structured-data";

type GuidesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: GuidesPageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "guides" });
  const meta = await getTranslations({ locale, namespace: "meta" });
  const path = "/guias";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: pageAlternates(locale, path),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "website",
      url: pageAlternates(locale, path).canonical,
      siteName: "Lume",
      ...openGraphLocales(locale),
      images: [{ url: withBasePath("/images/still-life.webp"), alt: meta("ogImageAlt") }],
    },
  };
}

export default async function GuidesPage({ params }: GuidesPageProps) {
  const locale = resolveLocale((await params).locale);
  setRequestLocale(locale);
  const t = await getTranslations("guides");
  const guides = getGuides(locale);

  return (
    <main id="contenido" className="article">
      <JsonLd
        data={guideHubJsonLd({
          locale,
          name: t("title"),
          description: t("lead"),
          homeLabel: t("crumbsHome"),
          guidesLabel: t("kicker"),
        })}
      />
      <Breadcrumbs
        label={t("breadcrumb")}
        items={[
          { label: t("crumbsHome"), href: "/" },
          { label: t("kicker") },
        ]}
      />
      <p className="kicker">{t("kicker")}</p>
      <h1 className="h1">{t("title")}</h1>
      <p className="body">{t("lead")}</p>
      <GuideIndex guides={guides} label={t("kicker")} empty={t("empty")} />
      <p className="legal-note">{t("disclaimer")}</p>
      <ArticleActions consorcioCta={t("consorcioCta")} waitlistCta={t("waitlistCta")} />
    </main>
  );
}
