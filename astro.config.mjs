import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Actions workflow from the repository name.
// Locally they default to a root deploy, so `npm run dev` just works.
//   - <user>.github.io repo      → SITE_URL=https://<user>.github.io        BASE_PATH=/
//   - any other repo, e.g. "cv"  → SITE_URL=https://<user>.github.io        BASE_PATH=/cv
//   - custom domain (CNAME)      → SITE_URL=https://yourdomain.com          BASE_PATH=/
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: { prefixDefaultLocale: false },
  },
});
