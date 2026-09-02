"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { withBasePath } from "@/lib/base-path";
import { waitlistLandingUrl, whatsappShareHref } from "@/lib/waitlist-share";

type CopyState = "idle" | "copied" | "failed";

export function WaitlistSuccess() {
  const t = useTranslations("waitlist");
  const [shareUrl, setShareUrl] = useState("");
  const [copyState, setCopyState] = useState<CopyState>("idle");

  useEffect(() => {
    setShareUrl(
      waitlistLandingUrl(window.location.origin, window.location.pathname),
    );
  }, []);

  const shareText = shareUrl ? t("shareText", { url: shareUrl }) : "";
  const whatsappHref = shareText ? whatsappShareHref(shareText) : undefined;
  const stillHref = withBasePath("/images/still-life.webp");
  const whatsappClass = whatsappHref
    ? "ember-button ember-button--block"
    : "ember-button ember-button--block ember-button--pending";

  async function handleCopy() {
    if (!shareUrl) {
      setCopyState("failed");
      return;
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <div className="wait-success">
      <span className="wait-success-ember" aria-hidden="true" />
      <p id="waitlist-status" className="wait-success-title" role="status">
        {t("successTitle")}
      </p>
      <p className="wait-success-body">{t("successBody")}</p>

      <div className="wait-success-actions">
        <a
          className={whatsappClass}
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("shareWhatsapp")}
        </a>
        <button
          type="button"
          className="ember-button ember-button--quiet ember-button--block"
          onClick={handleCopy}
          disabled={!shareUrl}
        >
          {t("shareCopy")}
        </button>
        {copyState === "copied" ? (
          <p className="form-status form-status--ok" role="status">
            {t("shareCopied")}
          </p>
        ) : null}
        {copyState === "failed" ? (
          <p className="form-status form-status--error" role="status">
            {t("shareCopyError")}
          </p>
        ) : null}
        <a
          className="wait-success-save"
          href={stillHref}
          download="lume-no-te-despidas.webp"
        >
          {t("shareSave")}
        </a>
      </div>

      <Link href="/privacidad" className="privacy-link">
        {t("privacy")}
      </Link>
    </div>
  );
}
