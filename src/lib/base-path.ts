/**
 * GitHub Pages serves the app under /lume, not at the domain root.
 * Local and Vercel leave this empty so paths stay /images/...
 */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/") || base === "") {
    return path;
  }
  if (path === base || path.startsWith(`${base}/`)) {
    return path;
  }
  return `${base}${path}`;
}
