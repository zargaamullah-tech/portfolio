/** @type {import('next').NextConfig} */

// If you deploy this site to a "project" repository (e.g. github.com/<user>/portfolio),
// the live URL becomes https://<user>.github.io/portfolio. In that case, set the
// environment variable NEXT_PUBLIC_BASE_PATH=/portfolio when building.
//
// If you deploy to a "user" repository named <user>.github.io, leave it unset —
// the site will live at the root and no base path is needed.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  // Static HTML export — outputs to /out and is ready for GitHub Pages.
  output: "export",
  // Required because GitHub Pages has no Next.js image optimizer.
  images: { unoptimized: true },
  // Helps GitHub Pages serve nested routes correctly.
  trailingSlash: true,
  basePath,
  // Make basePath available to <img> / <a> tags too.
  assetPrefix: basePath || undefined,
};

module.exports = nextConfig;
