import { ArticleActions } from "@/components/article-actions";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GuideIndex } from "@/components/guide-index";
import { JsonLd } from "@/components/json-ld";
import { guidesBySlug, type Guide } from "@/content/guides";
import type { AppLocale } from "@/i18n/routing";
import { guideJsonLd } from "@/lib/structured-data";

type GuideArticleProps = {
  locale: AppLocale;
  guide: Guide;
  breadcrumbLabel: string;
  homeLabel: string;
  guidesLabel: string;
  relatedLabel: string;
  faqTitle: string;
  sourcesTitle: string;
  updatedLabel: string;
  disclaimer: string;
  consorcioCta: string;
  waitlistCta: string;
  empty: string;
};

export function GuideArticle({
  locale,
  guide,
  breadcrumbLabel,
  homeLabel,
  guidesLabel,
  relatedLabel,
  faqTitle,
  sourcesTitle,
  updatedLabel,
  disclaimer,
  consorcioCta,
  waitlistCta,
  empty,
}: GuideArticleProps) {
  const related = guidesBySlug(locale, guide.related);

  return (
    <main id="contenido" className="article">
      <JsonLd
        data={guideJsonLd({
          locale,
          guide,
          homeLabel,
          guidesLabel,
        })}
      />
      <Breadcrumbs
        label={breadcrumbLabel}
        items={[
          { label: homeLabel, href: "/" },
          { label: guidesLabel, href: "/guias" },
          { label: guide.h1 },
        ]}
      />
      <p className="kicker">{guide.kicker}</p>
      <h1 className="h1">{guide.h1}</h1>
      {/* First paragraph is the passage answer engines should quote. */}
      <p id="respuesta" className="answer">
        {guide.answer}
      </p>
      <p className="legal-note">
        <time dateTime={guide.updated}>{updatedLabel}</time>
      </p>
      {guide.sections.map((section) => (
        <section key={section.heading} className="stack">
          <h2 className="h2">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="body">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
      <section className="stack" aria-labelledby="preguntas-guia">
        <h2 id="preguntas-guia" className="h2">
          {faqTitle}
        </h2>
        {guide.faqs.map((faq) => (
          <GuideFaq key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </section>
      <GuideIndex
        guides={related}
        label={relatedLabel}
        heading={relatedLabel}
        empty={empty}
      />
      {guide.sources && guide.sources.length > 0 ? (
        <GuideSources title={sourcesTitle} sources={guide.sources} />
      ) : null}
      <p className="legal-note">{disclaimer}</p>
      <ArticleActions consorcioCta={consorcioCta} waitlistCta={waitlistCta} />
    </main>
  );
}

function GuideFaq({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="stack">
      <h3>{question}</h3>
      <p className="body">{answer}</p>
    </div>
  );
}

function GuideSources({
  title,
  sources,
}: {
  title: string;
  sources: NonNullable<Guide["sources"]>;
}) {
  return (
    <section className="stack">
      <h2 className="h2">{title}</h2>
      <ul className="guide-list">
        {sources.map((source) => (
          <li key={source.href}>
            <a className="text-link" href={source.href}>
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
