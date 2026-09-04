import { siteUrl } from "@/lib/site";

const REF_PATTERN = /^[a-z0-9_-]{1,32}$/i;

/** Neighbour and campaign refs only. Reject anything that looks like an email. */
export function parseWaitlistRef(
  value: string | null | undefined,
): string | undefined {
  const trimmed = value?.trim() ?? "";
  if (!REF_PATTERN.test(trimmed)) {
    return undefined;
  }
  return trimmed.toLowerCase();
}

export function refFromSearch(search: string): string | undefined {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  return parseWaitlistRef(params.get("ref"));
}

/** Canonical waitlist landing so a neighbour lands on the form, not a preview host. */
export function waitlistLandingUrl(pathname: string, ref = "wa"): string {
  const path = pathname === "" ? "/" : pathname;
  const url = new URL(path, `${siteUrl()}/`);
  url.searchParams.set("ref", ref);
  url.hash = "avisame";
  return url.toString();
}

export function whatsappShareHref(message: string): string {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
