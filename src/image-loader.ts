type LoaderProps = {
  src: string;
};

/**
 * next/image `unoptimized` does not apply `basePath` on static export.
 * This loader prefixes public files for GitHub Pages.
 */
export default function lumeImageLoader({ src }: LoaderProps): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  const path = src.startsWith("/") ? src : `/${src}`;
  if (base && (path === base || path.startsWith(`${base}/`))) {
    return path;
  }
  return `${base}${path}`;
}
