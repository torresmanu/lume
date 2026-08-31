import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PhotoFill } from "./photo-fill";

export async function ObjectSection() {
  const t = await getTranslations("object");

  return (
    <section
      id="como-funciona"
      className="section section--field"
      aria-labelledby="object-title"
    >
      <div className="object-grid">
        <div className="collage">
          <div className="photo-frame collage-main">
            <PhotoFill
              src="/images/product-knob.webp"
              alt={t("knobAlt")}
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </div>
          <div className="photo-frame collage-inset">
            <PhotoFill
              src="/images/product-clean.webp"
              alt={t("cleanAlt")}
              sizes="(max-width: 900px) 50vw, 24vw"
            />
          </div>
        </div>
        <div className="object-copy">
          <p className="kicker">{t("kicker")}</p>
          <h2 id="object-title" className="h1">
            {t("headline")}
          </h2>
          <p className="body">{t("body")}</p>
          <ul className="grouped">
            <li>{t("facts.coal")}</li>
            <li>{t("facts.ducts")}</li>
            <li>{t("facts.drill")}</li>
            <li>{t("facts.knob")}</li>
          </ul>
          <div>
            <Link href={{ pathname: "/", hash: "avisame" }} className="ember-button">
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
