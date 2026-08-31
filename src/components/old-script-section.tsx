import { getTranslations } from "next-intl/server";

export async function OldScriptSection() {
  const t = await getTranslations("oldScript");

  return (
    <section className="section section--field" aria-labelledby="old-script-title">
      <div className="section-intro">
        <p className="kicker">{t("kicker")}</p>
        <h2 id="old-script-title" className="h1">
          {t("headline")}
        </h2>
      </div>
      <div className="pair">
        <article className="tile">
          <span className="tile-index" aria-hidden="true">
            01
          </span>
          <h3 className="h2">{t("goodbyeTitle")}</h3>
          <p className="body">{t("goodbyeBody")}</p>
        </article>
        <article className="tile">
          <span className="tile-index" aria-hidden="true">
            02
          </span>
          <h3 className="h2">{t("helloTitle")}</h3>
          <p className="body">{t("helloBody")}</p>
        </article>
      </div>
    </section>
  );
}
