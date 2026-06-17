# NexusCon 2026 — Event Management Web App

A responsive event management web application for a fictional 3-day tech convention, **NexusCon 2026**, built with React (Vite) and Tailwind CSS, in the visual style of the Launchify template referenced in the brief.

## What's inside

| Feature | Where |
|---|---|
| Agenda / Schedule (3 days, track filters) | `/schedule` |
| Speaker profiles (list + detail pages) | `/speakers`, `/speakers/:id` |
| Sponsors & Exhibitors directory (tiers + searchable booths) | `/sponsors` |
| News & Updates | `/news`, `/news/:id` |
| Venue & Travel info, hotels, FAQs | `/venue` |
| Ticket tiers / pricing | `/tickets` |
| Live countdown to the event | Home page hero |

All data is realistic mock/dummy data (no backend) defined in `src/data/`. Per the assignment brief, backend implementation is not required, so this is a frontend-only build using React from the MERN stack — see "Adding a backend" below if you want to wire it up to Express + MongoDB for a true full MERN setup.

## Project structure

```
src/
  components/   Reusable UI (Navbar, Footer, cards, badges, countdown, etc.)
  pages/        One file per route
  data/         Mock data: speakers, schedule, sponsors, news, venue, tickets
  App.jsx       Routes
  main.jsx      Entry point
```

## Run it locally

```bash
npm install
npm run dev       # starts a local dev server, usually http://localhost:5173
npm run build      # builds the production bundle into dist/
npm run preview    # serves the production build locally
```

Requires Node.js 18+.

## Deploying a live URL

**Option A — Netlify Drop (no account needed for a quick demo link)**
1. Run `npm run build` (or use the `dist/` folder already included if provided).
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder onto the page. You'll get a live URL in seconds.
4. For a permanent link tied to your account, sign up free and claim the site.

**Option B — Vercel (recommended for a polished, permanent URL)**
1. Push this project to a GitHub repo.
2. Go to https://vercel.com, sign in with GitHub, and import the repo.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — Vercel gives you a permanent `*.vercel.app` URL.

**Option C — GitHub Pages**
1. `npm install -D gh-pages`
2. Add `"homepage": "https://<user>.github.io/<repo>"` to `package.json` and a `deploy` script: `"deploy": "gh-pages -d dist"`.
3. `npm run build && npm run deploy`.

## Adding a backend (optional, for a full MERN setup)

If you'd like this wired to an actual MongoDB + Express API instead of the mock data in `src/data/`, the cleanest path is:
1. Stand up an Express API with REST routes mirroring the data shapes already used here (`/api/speakers`, `/api/sessions`, `/api/sponsors`, `/api/news`).
2. Seed MongoDB collections from the existing mock data files (they're already shaped as arrays of plain objects, so this is mostly a copy-paste into seed scripts).
3. Replace the static imports in `src/data/*.js` with `fetch` calls (or a small API client) inside the pages, using `useEffect` + `useState` or a data-fetching library.

This wasn't built into this submission because the assignment explicitly allows mock data with no backend requirement, but the data layer is intentionally isolated to make that swap straightforward later.
