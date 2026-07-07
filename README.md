# MDS Autowork — Bengkel Kereta Kajang

Official website for **MDS Autowork**, a trusted car repair & maintenance workshop in Taman Kajang Utama, Kajang, Selangor.

- **Services:** Minor & Major Servicing · Aircond Specialist · Vehicle Diagnosis & Inspection · Transmission & Engine Overhaul
- **Booking:** WhatsApp [019-939 9006](https://wa.me/60199399006)
- **Address:** 10, Jalan Seksyen 1/17, Taman Kajang Utama, 43000 Kajang, Selangor
- **Rating:** 4.9★ · 86 Google reviews · Trusted since 2020
- **Reg. No.:** 003068153-X · Brand colours: red `#E01E26` + graphite `#16181D` + white

## Live site
https://netheraug.github.io/mds-autowork/

## Design packages
Three standalone design directions (same content, different look). Pick a favourite — the root is the current live build. URLs are stable; each is labelled by its package name in the footer.

| Package | Folder / link | Look |
|---------|---------------|------|
| **Corporate Clean** | root · [/v1/](https://netheraug.github.io/shelvesmds-autowork/v1/) | Light, card grid, Montserrat |
| **Editorial Bright** | [/v2/](https://netheraug.github.io/shelvesmds-autowork/v2/) | Warm light, Sora display type, numbered service list |
| **Midnight Pro** | [/v3/](https://netheraug.github.io/shelvesmds-autowork/v3/) | Dark theme, glowing red accents, scroll progress, animated reveals |

`Editorial Bright` and `Midnight Pro` reuse the root `assets/`; `Corporate Clean`'s v1 copy uses its own `v1/assets/`.

## Shared features (all packages)
- **Language switch** — 🌐 button in the header (top-right) toggles **English (default) ⇄ natural Bahasa Malaysia** (choice remembered). Driven by `assets/i18n.js`.
- **Back-to-top button** — ↑ button (bottom-right, above the WhatsApp FAB) that appears after scrolling.
- **Logo** — `assets/logo.png` in header + footer.
- **Storefront + work photos** — `assets/storefront-2.jpg` (hero) and `assets/services/*.jpg` (Our Work gallery).

## Restore points
Milestones are tagged in git so any state can be restored, e.g. `restore-2026-07-07-red-launch` (red rebrand + logo, before the Malay polish). Restore with `git checkout <tag>`.

## Tech
Single-page static sites — Tailwind (CDN), FontAwesome, Google Fonts. No build step; just open `index.html`.
