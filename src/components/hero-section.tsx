import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PhotoFill } from "./photo-fill";

export async function HeroSection() {
  const t = await getTranslations("hero");

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media">
        <PhotoFill
          src="/images/hero-landing.webp"
          alt={t("imageAlt")}
          sizes="100vw"
          priority
        />
      </div>
      <div className="hero-veil" />
      <div className="hero-copy">
        <p className="kicker">{t("kicker")}</p>
        <h1 id="hero-title" className="display">
          {t("headline")}
        </h1>
        <p className="body">{t("sub")}</p>
        <div className="hero-actions">
          <Link href={{ pathname: "/", hash: "avisame" }} className="ember-button">
            {t("cta")}
          </Link>
          <a href="#como-funciona" className="ghost-link">
            {t("ghost")}
          </a>
        </div>
      </div>
    </section>
  );
}
