# NexusCon — Event Management Web App

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

**Vercel (recommended for a polished, permanent URL)**
1. Push this project to a GitHub repo.
2. Go to https://vercel.com, sign in with GitHub, and import the repo.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — Vercel gives you a permanent `*.vercel.app` URL.
