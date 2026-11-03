# Ramji Singh — Cybersecurity Portfolio

A React + TypeScript portfolio built with Vite, Tailwind CSS v4 and Motion.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ (Vite 8 requirement) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). Stop the
server with `Ctrl+C`.

## Build and check

```bash
npm run typecheck
npm run build
npm run preview
```

The static production site is generated in `dist/`.

## GitHub Pages

In Settings → Pages, select **GitHub Actions** as the source. The included
workflow builds and deploys every push to main. If the first run happened
before Pages was enabled, rerun it from the Actions tab.

Add your custom domain in Settings → Pages after configuring its DNS.
Relative asset paths support both the repository URL and a custom domain.

## Images

Place public images in `public/images/`. The paths are configured in
`src/data/site.ts`:

- `ramji-singh.webp` — profile photograph
- `sal1-certificate.webp` — TryHackMe SAL L1 certificate
- `google-cybersecurity-certificate.webp` — Google Cybersecurity certificate

Keep the filenames and letter case exact. Files in `public/` are served from
the site root, so `public/images/ramji-singh.webp` is referenced as
`./images/ramji-singh.webp` in the app.

## Updating content

Edit `src/data/site.ts` for the profile text, reported rankings, platforms,
certifications, achievements, email and social links. Rankings and bug counts
are presented as owner-reported figures.

## Main structure

- `src/app/sections/` — Hero, rankings, platforms, credentials, about and contact
- `src/app/components/` — navigation, certificate dialog, shared UI and motion
- `src/styles.css` — theme tokens, typography, layout utilities and reduced-motion rules
- `index.html` — page metadata and Person structured data
