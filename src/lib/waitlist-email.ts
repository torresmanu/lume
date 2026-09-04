import { absoluteUrl } from "@/lib/site";
import type { AppLocale } from "@/i18n/routing";

type WelcomeCopy = {
  subject: string;
  title: string;
  body: string;
  consorcio: string;
  leave: string;
  signoff: string;
};

const COPY: Record<AppLocale, WelcomeCopy> = {
  "es-AR": {
    subject: "Anotado. Te avisamos.",
    title: "Listo.",
    body: "Cuando Lume esté listo para el primer domingo, te escribimos. Ese es el único motivo de este correo.",
    consorcio: "Si querés mostrarle la nota al consorcio, está acá:",
    leave: "Si te arrepentís, respondé este mail y te borramos.",
    signoff: "Lume — para el fuego",
  },
  "es-ES": {
    subject: "Listo. Te avisamos.",
    title: "Listo.",
    body: "Cuando Lume esté listo para el primer domingo, te escribimos. Ese es el único motivo de este correo.",
    consorcio: "Si quieres mostrarle la nota a la comunidad, está aquí:",
    leave: "Si te arrepientes, responde este mail y te borramos.",
    signoff: "Lume — para el fuego",
  },
  en: {
    subject: "You're in. We'll write.",
    title: "You're in.",
    body: "When Lume is ready for the first Sunday, we'll write. That is the only reason we have this address.",
    consorcio: "If you want to show the building the note, it is here:",
    leave: "If you change your mind, reply and ask to be removed.",
    signoff: "Lume — for the fire",
  },
};

export async function sendWelcomeEmail(entry: {
  email: string;
  locale?: AppLocale;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM?.trim();
  if (!apiKey || !from) {
    return;
  }

  const locale = entry.locale ?? "es-AR";
  const copy = COPY[locale];
  const consorcioUrl = absoluteUrl("/consorcio");
  const homeUrl = absoluteUrl("/");

  const text = [
    copy.title,
    "",
    copy.body,
    "",
    `${copy.consorcio} ${consorcioUrl}`,
    copy.leave,
    "",
    copy.signoff,
    homeUrl,
  ].join("\n");

  const html = `<div style="font-family:IBM Plex Sans,Helvetica,sans-serif;color:#1C1917;background:#F4F0EA;padding:32px;line-height:1.5">
<p style="letter-spacing:0.06em">Lume</p>
<h1 style="font-weight:400;font-size:28px">${escapeHtml(copy.title)}</h1>
<p>${escapeHtml(copy.body)}</p>
<p>${escapeHtml(copy.consorcio)} <a href="${escapeHtml(consorcioUrl)}" style="color:#C45C26">${escapeHtml(consorcioUrl)}</a></p>
<p>${escapeHtml(copy.leave)}</p>
<p>${escapeHtml(copy.signoff)}</p>
</div>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [entry.email],
        subject: copy.subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      console.error("Resend welcome email failed", {
        status: response.status,
      });
    }
  } catch {
    console.error("Resend welcome email failed");
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
