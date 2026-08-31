"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitch } from "./locale-switch";

export function SiteHeader() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="header-bar">
        <div className="header-left">
          <Link href="/" className="wordmark">
            Lume
          </Link>
          <Link href="/consorcio" className="nav-consorcio">
            {t("consorcio")}
          </Link>
        </div>
        <div className="header-right">
          <LocaleSwitch />
          <Link href={{ pathname: "/", hash: "avisame" }} className="ember-button">
            {t("avisame")}
          </Link>
        </div>
      </div>
    </header>
  );
}
