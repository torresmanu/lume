import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { TrackPageEvent } from "@/components/track-page-event";
import { resolveLocale } from "@/i18n/locale";
import { languageAlternates, localeUrl } from "@/lib/locale-url";

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
  const path = "/preguntas";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: localeUrl(locale, path),
      languages: languageAlternates(path),
    },
  };
}

export default async function FaqPage({ params }: FaqPageProps) {
  const locale = resolveLocale((await params).locale);
  setRequestLocale(locale);
  const t = await getTranslations("faqPage");

  return (
    <main id="contenido" className="article">
      <TrackPageEvent event="faq_view" />
      <p className="kicker">{t("kicker")}</p>
      <h1 className="h1">{t("title")}</h1>
      <p className="body">{t("lead")}</p>
      {FAQ_BLOCKS.map((block) => (
        <FaqBlock
          key={block.q}
          question={t(block.q)}
          answer={t(block.a)}
        />
      ))}
      <div className="actions-row">
        <Link href="/consorcio" className="ghost-link">
          {t("consorcioCta")}
        </Link>
        <Link href={{ pathname: "/", hash: "avisame" }} className="ember-button">
          {t("waitlistCta")}
        </Link>
      </div>
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
