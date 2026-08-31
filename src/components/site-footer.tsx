import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { LocaleSwitch } from "./locale-switch";

export async function SiteFooter() {
  const t = await getTranslations("footer");

  return (
    <footer className="site-footer">
      <p>{t("tagline")}</p>
      <div className="footer-links">
        <Link href="/consorcio">{t("consorcio")}</Link>
        <Link href="/privacidad">{t("privacy")}</Link>
        <LocaleSwitch />
      </div>
    </footer>
  );
}
