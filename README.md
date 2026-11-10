# Ítalo Carvalho — portfolio

Personal portfolio and résumé site, in English (`/`) and Portuguese (`/pt/`).
Built with [Astro](https://astro.build) and plain CSS, deployed to GitHub Pages.

## Run locally

Requires Node 22.23+ (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:4321  (Portuguese at /pt/)
npm run build      # type-check + static build into dist/
npm run preview    # serve the production build
```

## Update the content

All text lives in `src/content/`. You never need to edit components to change copy.

| File | What it holds |
|---|---|
| `src/content/en.ts` | Every English text: hero, highlights, about, experience, case studies, skills, education, contact |
| `src/content/pt.ts` | The same structure in Portuguese |
| `src/content/profile.ts` | Data shared by both languages: name, email, LinkedIn, CV path, optional GitHub |
| `src/content/types.ts` | The shape of the content; your editor flags missing or misspelled fields |

Other assets:

- **CV:** replace `public/resume.pdf` (same file for both languages).
- **Photo:** replace `src/assets/profile.jpg` with a square image (at least 440×440). Astro converts it to WebP at build time.
- **Social preview image** (LinkedIn/WhatsApp card): after changing the photo or title, run `bash scripts/og/render.sh` (uses Google Chrome) to regenerate `public/og-image.png` and `public/apple-touch-icon.png`.

Experience items link to case studies through `cases: ['kodiak']`, using the project `id`.

## Deploy

Every push to `main` builds and publishes the site through GitHub Actions (`.github/workflows/deploy.yml`).

One-time setup on GitHub:

1. Create the repository (named `<user>.github.io` for a root URL, or any name for `https://<user>.github.io/<repo>/`).
2. Push this project to `main`.
3. In the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

The workflow reads the correct URL and base path from GitHub Pages, so the same code works for a user site, a project subpath or a custom domain. No config change is needed.

## Custom domain (later)

1. Create `public/CNAME` containing only your domain, e.g. `italocarvalho.dev`.
2. At your DNS provider, point the domain to GitHub Pages: for an apex domain, `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`; for a `www` subdomain, a `CNAME` record to `<user>.github.io`.
3. In **Settings → Pages**, enter the domain and enable **Enforce HTTPS** once the certificate is issued.
4. Push. The next build uses the new domain for canonical URLs and social previews automatically.
