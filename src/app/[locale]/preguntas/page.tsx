import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArticleActions } from "@/components/article-actions";
import { GuideIndex } from "@/components/guide-index";
import { JsonLd } from "@/components/json-ld";
import { TrackPageEvent } from "@/components/track-page-event";
import { getGuides } from "@/content/guides";
import { resolveLocale } from "@/i18n/locale";
import { pageAlternates } from "@/lib/locale-url";
import { faqPageJsonLd } from "@/lib/structured-data";

const FAQ_BLOCKS = [
  { q: "q1", a: "a1" },
  { q: "q2", a: "a2" },
  { q: "q3", a: "a3" },
  { q: "q4", a: "a4" },
  { q: "q5", a: "a5" },
  { q: "q6", a: "a6" },
  { q: "q7", a: "a7" },
] as const;

type FaqPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: FaqPageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "faqPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: pageAlternates(locale, "/preguntas"),
  };
}

export default async function FaqPage({ params }: FaqPageProps) {
  const locale = resolveLocale((await params).locale);
  setRequestLocale(locale);
  const t = await getTranslations("faqPage");
  const guides = await getTranslations("guides");
  const faqs = FAQ_BLOCKS.map((block) => ({
    question: t(block.q),
    answer: t(block.a),
  }));

  return (
    <main id="contenido" className="article">
      <TrackPageEvent event="faq_view" />
      <JsonLd
        data={faqPageJsonLd({
          url: pageAlternates(locale, "/preguntas").canonical,
          name: t("title"),
          inLanguage: locale,
          faqs,
        })}
      />
      <p className="kicker">{t("kicker")}</p>
      <h1 className="h1">{t("title")}</h1>
      <p className="body">{t("lead")}</p>
      {faqs.map((faq) => (
        <FaqBlock key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
      <GuideIndex
        guides={getGuides(locale)}
        label={guides("faqMoreTitle")}
        heading={guides("faqMoreTitle")}
        lead={guides("faqMoreLead")}
        empty={guides("empty")}
      />
      <ArticleActions
        consorcioCta={t("consorcioCta")}
        waitlistCta={t("waitlistCta")}
      />
    </main>
  );
}

function FaqBlock({ question, answer }: { question: string; answer: string }) {
  return (
    <section>
      <h2 className="h2">{question}</h2>
      <p className="body">{answer}</p>
    </section>
  );
}
