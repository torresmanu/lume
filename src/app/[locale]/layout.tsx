import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { resolveLocale } from "@/i18n/locale";
import { routing } from "@/i18n/routing";
import { withBasePath } from "@/lib/base-path";
import { languageAlternates, localeUrl } from "@/lib/locale-url";
import { siteUrl } from "@/lib/site";
import "../globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  const pageUrl = localeUrl(locale, "/");

  return {
    metadataBase: new URL(siteUrl()),
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [
        { url: withBasePath("/favicon.ico"), sizes: "16x16 32x32 48x48" },
        { url: withBasePath("/favicon.svg"), type: "image/svg+xml" },
      ],
      apple: {
        url: withBasePath("/apple-touch-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
    },
    alternates: {
      canonical: pageUrl,
      languages: languageAlternates("/"),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale.replace("-", "_"),
      url: pageUrl,
      siteName: "Lume",
      images: [
        {
          url: withBasePath("/images/still-life.webp"),
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [withBasePath("/images/still-life.webp")],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = resolveLocale((await params).locale);
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations("nav");

  return (
    <html lang={locale} className={plexSans.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <a className="skip-link" href="#contenido">
            {t("skip")}
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
