"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useState,
} from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { withBasePath } from "@/lib/base-path";
import { WaitlistSuccess } from "./waitlist-success";

type FormStatus = "idle" | "sending" | "success" | "empty" | "invalid" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm() {
  const t = useTranslations("waitlist");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    if (status !== "idle" && status !== "sending" && status !== "success") {
      setStatus("idle");
    }
  }

  function handleCountryChange(event: ChangeEvent<HTMLSelectElement>) {
    setCountry(event.target.value);
  }

  function handleHoneypotChange(event: ChangeEvent<HTMLInputElement>) {
    setHoneypot(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = email.trim();
    if (!trimmed) {
      setStatus("empty");
      return;
    }
    if (!EMAIL_PATTERN.test(trimmed)) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");

    try {
      const waitlistPath = withBasePath("/api/waitlist");
      const response = await fetch(waitlistPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmed,
          country: country || undefined,
          website: honeypot,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";
  const isSuccess = status === "success";
  const emailReady = EMAIL_PATTERN.test(email.trim());
  const emailFieldClass = emailReady ? "field field--ready" : "field";

  if (isSuccess) {
    return <WaitlistSuccess />;
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label className={emailFieldClass}>
        <span>{t("emailLabel")}</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          placeholder={t("emailPlaceholder")}
          value={email}
          onChange={handleEmailChange}
          disabled={isSending}
          aria-invalid={status === "empty" || status === "invalid"}
          aria-describedby="waitlist-status"
        />
      </label>

      <label className="field">
        <span>{t("countryLabel")}</span>
        <select
          name="country"
          value={country}
          onChange={handleCountryChange}
          disabled={isSending}
        >
          <option value="">{t("countryNone")}</option>
          <option value="AR">{t("countryAr")}</option>
          <option value="ES">{t("countryEs")}</option>
          <option value="OTHER">{t("countryOther")}</option>
        </select>
      </label>

      <label className="honeypot">
        {t("honeypot")}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={handleHoneypotChange}
        />
      </label>

      <div className="waitlist-cta">
        <button
          type="submit"
          className="ember-button ember-button--block"
          disabled={isSending}
        >
          {isSending ? <span className="spinner" aria-hidden="true" /> : null}
          {isSending ? t("sending") : t("submit")}
        </button>
      </div>

      <StatusMessage status={status} />

      <Link href="/privacidad" className="privacy-link">
        {t("privacy")}
      </Link>
    </form>
  );
}

function StatusMessage({ status }: { status: FormStatus }) {
  const t = useTranslations("waitlist");

  if (status === "idle" || status === "sending" || status === "success") {
    return <p id="waitlist-status" className="form-status" />;
  }

  const tone = "form-status--error";
  const message =
    status === "empty"
      ? t("empty")
      : status === "invalid"
        ? t("invalid")
        : t("error");

  return (
    <p id="waitlist-status" className={`form-status ${tone}`} role="status">
      {message}
    </p>
  );
}
