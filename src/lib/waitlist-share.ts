/** Canonical waitlist landing URL so a neighbour lands on the form. */
export function waitlistLandingUrl(origin: string, pathname: string): string {
  const path = pathname === "" ? "/" : pathname;
  return `${origin}${path}#avisame`;
}

export function whatsappShareHref(message: string): string {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
