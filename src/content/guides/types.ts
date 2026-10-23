/** Stable slugs so hreflang points each language at the same topic. */
export const GUIDE_SLUGS = [
  "extractor-para-parrilla",
  "asado-en-el-balcon",
  "ley-sobre-el-humo",
  "humo-en-el-consorcio",
  "vecinos-y-denuncias",
] as const;

export type GuideSlug = (typeof GUIDE_SLUGS)[number];

/** Bump when a guide’s answer changes. Sitemap and visible dates read this. */
export const GUIDE_UPDATED = "2026-10-23";

export type GuideSource = {
  readonly label: string;
  readonly href: string;
};

export type GuideSection = {
  readonly heading: string;
  readonly paragraphs: readonly string[];
};

export type GuideFaq = {
  readonly question: string;
  readonly answer: string;
};

/**
 * `answer` is the first paragraph on the page and in llms-full.txt.
 * Answer engines quote it. It must stay direct, and it must not say
 * Lume removes all smoke or permits fire.
 */
export type GuideDraft = {
  readonly slug: GuideSlug;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly kicker: string;
  readonly h1: string;
  readonly summary: string;
  readonly answer: string;
  readonly sections: readonly GuideSection[];
  readonly faqs: readonly GuideFaq[];
  readonly related: readonly GuideSlug[];
  readonly sources?: readonly GuideSource[];
};

export type Guide = GuideDraft & {
  readonly updated: string;
};
