import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function BuildingSection() {
  const t = await getTranslations("building");

  return (
    <section className="section section--field" aria-labelledby="building-title">
      <div className="manifesto">
        <p className="kicker">{t("kicker")}</p>
        <h2 id="building-title" className="h1">
          {t("headline")}
        </h2>
        <blockquote className="quote-display">{t("quote")}</blockquote>
        <p className="body">{t("body")}</p>
        <div>
          <Link href="/consorcio" className="ember-button">
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
