import { getTranslations } from "next-intl/server";
import { PhotoFill } from "./photo-fill";
import { WaitlistForm } from "./waitlist-form";

export async function WaitlistSection() {
  const t = await getTranslations("waitlist");

  return (
    <section id="avisame" className="wait-scene" aria-labelledby="waitlist-title">
      <div className="wait-media">
        <PhotoFill src="/images/still-life.webp" alt={t("imageAlt")} sizes="100vw" />
      </div>
      <div className="wait-veil" />
      <div className="wait-card">
        <p className="kicker">{t("kicker")}</p>
        <h2 id="waitlist-title" className="h1">
          {t("headline")}
        </h2>
        <WaitlistForm />
      </div>
    </section>
  );
}
