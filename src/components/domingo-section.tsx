import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PhotoFill } from "./photo-fill";

export async function DomingoSection() {
  const t = await getTranslations("domingo");

  return (
    <section className="scene" aria-labelledby="domingo-title">
      <div className="scene-media">
        <PhotoFill src="/images/civic-window.webp" alt={t("civicAlt")} sizes="100vw" />
      </div>
      <div className="scene-veil" />
      <div className="scene-copy">
        <p className="kicker">{t("kicker")}</p>
        <h2 id="domingo-title" className="display">
          {t("headline")}
        </h2>
        <p className="body">{t("body")}</p>
        <div>
          <Link href={{ pathname: "/", hash: "avisame" }} className="ember-button">
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
