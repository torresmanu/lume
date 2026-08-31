"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { withBasePath } from "@/lib/base-path";

type DownloadState = "idle" | "loading" | "error";

export function PdfDownload() {
  const t = useTranslations("consorcioPage");
  const [state, setState] = useState<DownloadState>("idle");

  async function handleDownload() {
    setState("loading");

    try {
      const response = await fetch(withBasePath("/consorcio.pdf"));
      if (!response.ok) {
        setState("error");
        return;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "lume-nota-consorcio.pdf";
      anchor.click();
      URL.revokeObjectURL(url);
      setState("idle");
    } catch {
      setState("error");
    }
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="consorcio-toolbar">
      <div className="actions-row">
        <button
          type="button"
          className="ember-button"
          onClick={handleDownload}
          disabled={state === "loading"}
        >
          {state === "loading" ? <span className="spinner" aria-hidden="true" /> : null}
          {state === "loading" ? t("downloading") : t("download")}
        </button>
        <button type="button" className="ghost-link" onClick={handlePrint}>
          {t("print")}
        </button>
      </div>
      {state === "error" ? (
        <p className="form-status form-status--error" role="status">
          {t("downloadError")}
        </p>
      ) : null}
    </div>
  );
}
