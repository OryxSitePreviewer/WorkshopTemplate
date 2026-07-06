# MDS Autowork — Bengkel Kereta Kajang

Official website for **MDS Autowork**, a trusted car repair & maintenance workshop in Taman Kajang Utama, Kajang, Selangor.

- **Services:** Minor & Major Servicing · Aircond Specialist · Vehicle Diagnosis & Inspection · Transmission & Engine Overhaul
- **Booking:** WhatsApp [019-939 9006](https://wa.me/60199399006)
- **Address:** 10, Jalan Seksyen 1/17, Taman Kajang Utama, 43000 Kajang, Selangor
- **Rating:** 4.9★ on Google · Trusted since 2020

## Live site
https://netheraug.github.io/mds-autowork/

## Design versions
Three separate design directions, each a standalone page (pick a favourite; the root is the current live build):

| Version | Direction | Live link |
|---------|-----------|-----------|
| **Root / v1** | Corporate Clean — graphite + orange, Montserrat, card grid | https://netheraug.github.io/mds-autowork/ · [/v1/](https://netheraug.github.io/mds-autowork/v1/) |
| **v2** | Editorial Bright — warm light, Sora display type, numbered service list | https://netheraug.github.io/mds-autowork/v2/ |
| **v3** | Midnight Pro — dark theme, glowing accents, scroll progress, animated reveals | https://netheraug.github.io/mds-autowork/v3/ |

All three share identical business content. `v2` and `v3` reuse the root `assets/` images; `v1` uses its own `v1/assets/`.

## Shared features (all versions)
- **Language switch** — floating 🌐 button toggles English ⇄ casual Malay (choice remembered). Driven by `assets/i18n.js`; strings without a translation stay English.
- **Back-to-top button** — floating ↑ button (bottom-left) that appears after scrolling.
- **Storefront photo** — real shopfront photo in `assets/storefront.jpg` (hero + sections). Swap the file to update it everywhere.

## Tech
Single-page static sites — Tailwind (CDN), FontAwesome, Google Fonts. No build step; just open `index.html`.
