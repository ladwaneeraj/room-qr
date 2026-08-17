# Cibara Comforts · Guest Guide (room-qr)

Guest information site for Cibara Comforts, Harihar — shown when guests scan the QR
code in their room. Built with **React 19 + Vite 7 + Tailwind CSS 4**.

## What's on the page

WiFi (with copy + auto-connect QR), free Tata Play TV channel list (searchable,
filter by language), quick actions (call / WhatsApp / directions), room service and
housekeeping, one-tap WhatsApp requests, map + nearby places, amenities, reviews,
house rules, emergency numbers. Three languages (English / ಕನ್ನಡ / हिंदी) and
light/dark theme.

## Editing content — no code knowledge needed

| What                             | File                    |
| -------------------------------- | ----------------------- |
| Hotel name, phone, WiFi, map, requests | `src/config.js`   |
| TV channel list                  | `src/data/channels.js`  |
| Text / translations              | `src/i18n.js`           |
| Room photo                       | `public/images/Room.jpeg` |

## Running locally

```bash
npm install     # first time only
npm run dev     # dev server at http://localhost:5173
npm run build   # production build into dist/
```

## Deploying (GitHub Pages)

Already automated: `.github/workflows/deploy.yml` builds and publishes on every
push to `main`.

**One-time setup:** GitHub repo → Settings → Pages → Source → select
**"GitHub Actions"**. After that, just commit + push and the site updates itself
in about a minute.

## Note on the channel list

The lineup in `src/data/channels.js` is the Tata Play free-to-air list as of
July 2026. Channel numbers change occasionally — edit that file to keep it
current.
