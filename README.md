# DRIO Newsletter — KAFU

Issue No. 1 (May 2026) — Annual Research Report from the Directorate of
Research, Innovation & Outreach, Kaimosi Friends University.

A fully responsive, animated Next.js newsletter ready to deploy on Vercel.

## Features

- Fully responsive — looks great on mobile, tablet, laptop and desktop
- Smooth scroll-reveal animations on every section
- Animated hero with Ken Burns effect, floating badge and scroll cue
- Reading-progress bar and "back to top" button
- Hover micro-interactions on cards, images, stats and buttons
- All 14 sections + appreciation + footer, all images included

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

### Option A — GitHub + Vercel (recommended)

1. Create a new repository on GitHub (e.g. `drio-newsletter`).
2. Upload / push **all files in this folder** (including the `public/images`
   folder) to that repository — keep the folder structure exactly as is.
3. Go to https://vercel.com → **Add New Project** → **Import Git Repository**
   → select your repo.
4. Vercel auto-detects Next.js. Leave all settings as default and click **Deploy**.
5. Your newsletter goes live at `https://your-project.vercel.app` 🎉

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Project structure

```
drio-newsletter/
├── pages/
│   ├── _app.js        — global scripts (scroll reveal, progress bar)
│   ├── _document.js    — HTML head / meta tags
│   └── index.js        — the newsletter content
├── public/images/      — all newsletter images
├── styles/globals.css  — design system + animations
├── package.json
├── next.config.js
└── vercel.json
```

## Customizing

- Edit copy directly inside `pages/index.js`
- Edit colors/animations/spacing in `styles/globals.css` (CSS variables at top)
- Add/replace images in `public/images/` and reference as `/images/filename.ext`
