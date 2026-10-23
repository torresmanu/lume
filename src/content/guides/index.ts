import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { enGuides } from "./en";
import { esArGuides } from "./es-ar";
import { esEsGuides } from "./es-es";
import {
  GUIDE_SLUGS,
  GUIDE_UPDATED,
  type Guide,
  type GuideDraft,
  type GuideSlug,
} from "./types";

export { GUIDE_SLUGS, GUIDE_UPDATED };
export type { Guide, GuideSlug };

const META_DESCRIPTION_MAX = 170;
const META_TITLE_MAX = 70;

const byLocale: Record<AppLocale, readonly GuideDraft[]> = {
  "es-AR": esArGuides,
  "es-ES": esEsGuides,
  en: enGuides,
};

function assertGuides(locale: AppLocale, guides: readonly GuideDraft[]) {
  const slugs = new Set<GuideSlug>();

  for (const guide of guides) {
    if (slugs.has(guide.slug)) {
      throw new Error(`Duplicate guide ${guide.slug} for ${locale}`);
    }
    slugs.add(guide.slug);

    if (guide.metaTitle.length > META_TITLE_MAX) {
      throw new Error(
        `${locale} ${guide.slug} title is ${guide.metaTitle.length} characters`,
      );
    }
    if (guide.metaDescription.length > META_DESCRIPTION_MAX) {
      throw new Error(
        `${locale} ${guide.slug} description is ${guide.metaDescription.length} characters`,
      );
    }
    if (guide.answer.trim().length < 80) {
      throw new Error(`${locale} ${guide.slug} answer is too short to cite`);
    }
    if (guide.faqs.length < 3 || guide.sections.length < 3) {
      throw new Error(`${locale} ${guide.slug} is too thin to cite`);
    }

    for (const related of guide.related) {
      if (related === guide.slug || !GUIDE_SLUGS.includes(related)) {
        throw new Error(`${locale} ${guide.slug} has a bad related link`);
      }
    }
  }

  for (const slug of GUIDE_SLUGS) {
    if (!slugs.has(slug)) {
      throw new Error(`Missing guide ${slug} for ${locale}`);
    }
  }
}

for (const locale of routing.locales) {
  assertGuides(locale, byLocale[locale]);
}

export function isGuideSlug(slug: string): slug is GuideSlug {
  return (GUIDE_SLUGS as readonly string[]).includes(slug);
}

export function getGuides(locale: AppLocale): readonly Guide[] {
  return GUIDE_SLUGS.map((slug) => {
    const guide = byLocale[locale].find((item) => item.slug === slug);
    if (!guide) {
      throw new Error(`Missing guide ${slug} for ${locale}`);
    }
    return { ...guide, updated: GUIDE_UPDATED };
  });
}

export function getGuide(locale: AppLocale, slug: GuideSlug): Guide {
  const guide = getGuides(locale).find((item) => item.slug === slug);
  if (!guide) {
    throw new Error(`Missing guide ${slug} for ${locale}`);
  }
  return guide;
}

export function guidesBySlug(
  locale: AppLocale,
  slugs: readonly GuideSlug[],
): readonly Guide[] {
  const all = getGuides(locale);
  return slugs.flatMap((slug) => {
    const guide = all.find((item) => item.slug === slug);
    return guide ? [guide] : [];
  });
}
