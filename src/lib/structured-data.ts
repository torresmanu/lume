import { getGuides, type Guide } from "@/content/guides";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { consorcioNote } from "@/lib/consorcio-note";
import { localeUrl } from "@/lib/locale-url";
import { siteUrl } from "@/lib/site";

type JsonLdNode = Record<string, unknown>;

/**
 * Phrases people already ask. They also appear as visible titles on /guias,
 * so the graph does not advertise anything the pages do not say.
 * No Product node: Lume is not for sale, and there is no price to publish.
 */
const KNOWS_ABOUT = [
  "extractor para parrilla",
  "asado en el balcón",
  "ley sobre el humo",
  "ley sobre parrilla",
  "humo en el consorcio",
  "vecinos y denuncias",
  "barbacoa en la terraza",
  "Código Civil y Comercial artículo 1973",
  "Ley de Propiedad Horizontal artículo 7.2",
  "balcony grill smoke",
] as const;

export function siteJsonLd(description: string): JsonLdNode {
  const url = siteUrl();
  const guides = routing.locales.flatMap((locale) =>
    getGuides(locale).map((guide) => ({
      "@type": "WebPage",
      inLanguage: locale,
      name: guide.h1,
      url: localeUrl(locale, `/guias/${guide.slug}`),
    })),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: "Lume",
        url,
        email: "hola@lumefuego.com",
        description,
        logo: `${url}/apple-touch-icon.png`,
        areaServed: [
          { "@type": "Country", "name": "Argentina" },
          { "@type": "Country", "name": "Spain" },
        ],
        knowsAbout: KNOWS_ABOUT,
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        name: "Lume",
        url,
        description,
        inLanguage: ["es-AR", "es-ES", "en"],
        publisher: { "@id": `${url}/#organization` },
        hasPart: guides,
      },
    ],
  };
}

export function noteJsonLd(url: string): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: consorcioNote.title,
    description: consorcioNote.lead,
    inLanguage: "es",
    mainEntityOfPage: url,
    author: { "@id": `${siteUrl()}/#organization` },
    publisher: { "@id": `${siteUrl()}/#organization` },
  };
}

export function faqPageJsonLd(input: {
  url: string;
  name: string;
  inLanguage: string;
  faqs: readonly { question: string; answer: string }[];
}): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${input.url}#faq`,
    url: input.url,
    name: input.name,
    inLanguage: input.inLanguage,
    mainEntity: input.faqs.map((faq) => questionNode(faq.question, faq.answer)),
  };
}

export function guideHubJsonLd(input: {
  locale: AppLocale;
  name: string;
  description: string;
  homeLabel: string;
  guidesLabel: string;
}): JsonLdNode {
  const url = localeUrl(input.locale, "/guias");
  const guides = getGuides(input.locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: input.name,
        description: input.description,
        inLanguage: input.locale,
        isPartOf: { "@id": `${siteUrl()}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: guides.map((guide, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: guide.h1,
            description: guide.summary,
            url: localeUrl(input.locale, `/guias/${guide.slug}`),
          })),
        },
      },
      breadcrumb([
        { name: input.homeLabel, url: localeUrl(input.locale, "/") },
        { name: input.guidesLabel, url },
      ]),
    ],
  };
}

export function guideJsonLd(input: {
  locale: AppLocale;
  guide: Guide;
  homeLabel: string;
  guidesLabel: string;
}): JsonLdNode {
  const { guide, locale } = input;
  const url = localeUrl(locale, `/guias/${guide.slug}`);
  const articleBody = [
    guide.answer,
    ...guide.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
  ].join("\n\n");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.h1,
        description: guide.answer,
        articleBody,
        datePublished: guide.updated,
        dateModified: guide.updated,
        inLanguage: locale,
        mainEntityOfPage: url,
        author: { "@id": `${siteUrl()}/#organization` },
        publisher: { "@id": `${siteUrl()}/#organization` },
        isPartOf: { "@id": `${siteUrl()}/#website` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#respuesta"],
        },
        citation: guide.sources?.map((source) => ({
          "@type": "CreativeWork",
          name: source.label,
          url: source.href,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        url,
        inLanguage: locale,
        mainEntity: guide.faqs.map((faq) => questionNode(faq.question, faq.answer)),
      },
      breadcrumb([
        { name: input.homeLabel, url: localeUrl(locale, "/") },
        { name: input.guidesLabel, url: localeUrl(locale, "/guias") },
        { name: guide.h1, url },
      ]),
    ],
  };
}

function questionNode(question: string, answer: string): JsonLdNode {
  return {
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  };
}

function breadcrumb(items: readonly { name: string; url: string }[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
