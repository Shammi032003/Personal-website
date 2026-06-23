/**
 * Next.js configuration — tuned for static export to GitHub Pages.
 *
 * basePath / assetPrefix:
 *   When the site is served from https://<user>.github.io/<repo>, every asset
 *   must be prefixed with "/<repo>". The GitHub Actions workflow sets
 *   NEXT_PUBLIC_BASE_PATH automatically from the repository name. For a user
 *   page (https://<user>.github.io) or a custom domain, leave it empty.
 */
// For GitHub Pages deployment to Shammi032003/Personal-website
// we use an explicit basePath and assetPrefix so all assets and routes
// are emitted under the repository subpath.
const basePath = '/Personal-website';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath,
  assetPrefix: basePath,

  trailingSlash: true,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  reactStrictMode: true,
};

export default nextConfig;