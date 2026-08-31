import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PdfDownload } from "@/components/pdf-download";
import { resolveLocale } from "@/i18n/locale";
import { consorcioNote } from "@/lib/consorcio-note";

type ConsorcioPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ConsorcioPageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "consorcioPage" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ConsorcioPage({ params }: ConsorcioPageProps) {
  const locale = resolveLocale((await params).locale);
  setRequestLocale(locale);

  return (
    <main id="contenido" className="article">
      <p className="kicker">{consorcioNote.eyebrow}</p>
      <h1 className="h1">{consorcioNote.title}</h1>
      <p className="body">{consorcioNote.lead}</p>
      {consorcioNote.sections.map((section) => (
        <ConsorcioBlock
          key={section.heading}
          heading={section.heading}
          body={section.body}
        />
      ))}
      <PdfDownload />
      <p className="legal-note">{consorcioNote.legal}</p>
      <p className="legal-note">{consorcioNote.footer}</p>
    </main>
  );
}

function ConsorcioBlock({ heading, body }: { heading: string; body: string }) {
  return (
    <section>
      <h2 className="h2">{heading}</h2>
      <p className="body">{body}</p>
    </section>
  );
}
