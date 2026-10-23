import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guide-article";
import { GUIDE_SLUGS, getGuide, isGuideSlug } from "@/content/guides";
import { resolveLocale } from "@/i18n/locale";
import { withBasePath } from "@/lib/base-path";
import { formatGuideDate } from "@/lib/guide-date";
import { openGraphLocales, pageAlternates } from "@/lib/locale-url";

type GuidePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  if (!isGuideSlug(slug)) {
    notFound();
  }

  const guide = getGuide(locale, slug);
  const meta = await getTranslations({ locale, namespace: "meta" });
  const path = `/guias/${slug}`;
  const alternates = pageAlternates(locale, path);

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates,
    openGraph: {
      title: guide.metaTitle,
      description: guide.answer,
      type: "article",
      url: alternates.canonical,
      siteName: "Lume",
      publishedTime: guide.updated,
      modifiedTime: guide.updated,
      ...openGraphLocales(locale),
      images: [{ url: withBasePath("/images/still-life.webp"), alt: meta("ogImageAlt") }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: [withBasePath("/images/still-life.webp")],
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  if (!isGuideSlug(slug)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations("guides");
  const guide = getGuide(locale, slug);

  return (
    <GuideArticle
      locale={locale}
      guide={guide}
      breadcrumbLabel={t("breadcrumb")}
      homeLabel={t("crumbsHome")}
      guidesLabel={t("kicker")}
      relatedLabel={t("related")}
      faqTitle={t("faqTitle")}
      sourcesTitle={t("sourcesTitle")}
      updatedLabel={t("updated", { date: formatGuideDate(locale, guide.updated) })}
      disclaimer={t("disclaimer")}
      consorcioCta={t("consorcioCta")}
      waitlistCta={t("waitlistCta")}
      empty={t("empty")}
    />
  );
}
