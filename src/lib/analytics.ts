import { track } from "@vercel/analytics";

export type AnalyticsEvent =
  | "waitlist_success"
  | "share_whatsapp"
  | "pdf_download"
  | "faq_view";

/** Fire a named event. Must never interrupt the host. */
export function trackEvent(event: AnalyticsEvent): void {
  try {
    track(event);
  } catch {
    // Metrics are optional.
  }
}
