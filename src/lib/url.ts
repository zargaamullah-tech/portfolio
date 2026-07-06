// Prefixes a path with NEXT_PUBLIC_BASE_PATH so assets resolve correctly
// when the site is deployed under a sub-path (e.g. github.io/<repo-name>).
//
// Use this for plain <a href> and <img src> only. <Link> and <Image> from
// next/* already handle basePath automatically.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBase(src: string): string {
  if (!src) return src;
  if (/^https?:\/\//.test(src) || src.startsWith("mailto:") || src.startsWith("tel:")) {
    return src;
  }
  return src.startsWith("/") ? `${basePath}${src}` : src;
}
