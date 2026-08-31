import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es-AR", "en"],
  defaultLocale: "es-AR",
  // Static GitHub Pages cannot run middleware, so the locale must be in the URL.
  localePrefix: process.env.GITHUB_PAGES === "true" ? "always" : "as-needed",
  localeDetection: false,
});

export type AppLocale = (typeof routing.locales)[number];
