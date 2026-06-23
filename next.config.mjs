/**
 * Next.js configuration — tuned for static export to GitHub Pages.
 *
 * basePath / assetPrefix:
 *   When the site is served from https://<user>.github.io/<repo>, every asset
 *   must be prefixed with "/<repo>". The GitHub Actions workflow sets
 *   NEXT_PUBLIC_BASE_PATH automatically from the repository name. For a user
 *   page (https://<user>.github.io) or a custom domain, leave it empty.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    // GitHub Pages has no Next.js image optimizer at runtime.
    unoptimized: true,
  },
  // Animations + 3D code lives in heavy client components; we never want a
  // lint or transient type warning to block a static export.
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
