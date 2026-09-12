# Trendy Attire — React + JS · Mobile Responsive

Single-page landing for **Trendy Attire**, a men's clothing store in Pharenda, Uttar Pradesh — now rebuilt in **React + JavaScript (Vite)** with a mobile-first, fully button-responsive system.

> “Considered essentials in monochrome. Outerwear, knitwear and tailoring, made in limited runs.”  
> Bone `#EFEDE8` / Ink `#101010`, Archivo 400–900, grayscale imagery, editorial grid.

![React](https://img.shields.io/badge/React-19-61DAFB) ![Vite](https://img.shields.io/badge/Vite-8-646CFF) ![Mobile](https://img.shields.io/badge/mobile-responsive-100%25-brightgreen)

---

## ✨ What changed — React + mobile + buttons

**Stack migrated from vanilla `index.html` → Vite + React (JS, no TypeScript):**

- `index.html` → `src/App.jsx` + 10 components (`Navbar`, `Hero`, `Categories`, `Season`, `Services`, `Shop`, `Lookbook`, `Cloth`, `Atelier`, `Newsletter`, `Footer`)
- State via React hooks: bag drawer, favourites (`aria-pressed`), newsletter validation, toast live region, parallax/reveal loop
- Single `requestAnimationFrame` scroll loop preserved (progress, `data-speed` parallax, `data-scrub` clip, `.rv` reveals) — now inside `useEffect`

**Mobile responsive (320 → 1440):**

- **Nav:** desktop 3-col grid → ≤900px hamburger + slide drawer (88vw, 52px rows, safe-area aware). Sticky, backdrop-blur, `env(safe-area-inset-*)` gutters.
- **Hero:** `clamp()` type scales 42px at 320px → 236px desktop; stage 300–720px; CTA stacks to full-width on ≤640px, corner labels shrink to 9.5px.
- **Categories:** 3 → 2 → 1 col; Season split 2-col → stacked (image on top); Services 4 → 2 → 1 col; Shop 4 → 2 → 1 col (360px breakpoint); Lookbook 12-col → stacked; Cloth & Atelier 2-col → 1-col; Footer 4 → 2 → 1 col.
- Fluid tokens: `--gut: clamp(18px,4.2vw,44px)`, `--pad-y: clamp(48px,8vw,112px)`, `--nav-h: 74px → 96px`, `scroll-margin-top`, `scrollbar-gutter: stable`.

**All buttons responsive (44px + clamp + tactile):**

- Global `.btn` — `min-height:44px`, `min-width:44px`, `padding: clamp(18px,4vw,28px)`, `font-size: clamp(10px,2.6vw,11px)`, `letter-spacing:.18em`, `transform: scale(.97)` on `:active`, `@media (hover:none)` fallbacks, full-width at `≤640px` (`.btn--auto-mobile` to keep auto), variants `.btn--sm` (40px) / `.btn--lg` (52px) / `.btn--ghost` / `.btn--block`.
- `.tlink` — 44px border-bottom link, arrow shifts on hover, `scale(.98)` on press
- `.fav` — 44×44 circle, `aria-pressed` fill, `scale(.92)` press, `backdrop-filter`
- `.add` — 44px absolute bar, hidden on hover-capable until hover/focus, always visible on touch (`@media (hover:none)`), `Added ✓` state
- `.icon-btn` / `.bag` / `.burger` — 44×44, `border:1.5px`, `touch-action: manipulation`, `-webkit-tap-highlight-color: transparent`
- **Touch polish:** `16px` input (no iOS zoom), `44px` footer links + foot-bar, `env(safe-area-inset-bottom)` for drawers/toast, `prefers-reduced-motion` disables all motion, `focus-visible` outlines, `user-select:none` on buttons only.

---

## Business facts (source: Google listing)

| Field | Value |
|---|---|
| Name | Trendy Attire |
| Category | Men's clothing store |
| Address | Behind Ambedkar Tirha, Anand Nagar, Pharenda, Uttar Pradesh 273155 |
| Phone | +91 70719 60434 · +91 74284 12394 |
| Rating | 5.0, 6 Google reviews |

JSON-LD `ClothingStore` + OG tags preserved. Hours/GSTIN omitted (not on listing). Maps links use `maps/dir` + `maps/search` (no tracking params). Prices in `₹`.

---

## Run it

```bash
npm install
npm run dev     # → http://localhost:5173  (host 0.0.0.0, allowedHosts: true for preview)
npm run build
npm run preview # → http://localhost:4173
```

Images via `jsDelivr` (`VanhDc/aura-assets@sable-v2`), Fonts via Google Fonts (Archivo). No `node_modules` in git.

### Dev server for Arena preview

`vite.config.js` sets `server.host: '0.0.0.0'`, `allowedHosts: true`, `cors: true`, `X-Frame-Options: ALLOWALL` so the preview at `https://5173-…e2b.app` loads.

---

## Stack

| Piece | Note |
|---|---|
| React 19 + Vite 8 | `src/main.jsx` → `App.jsx`, JSX, no TS |
| CSS | one file `src/index.css`, mobile-first, `clamp()` + custom props, no Tailwind CDN |
| Type | Archivo 400–900 |
| Media | jsDelivr grayscale with per-section contrast |
| Motion | rAF loop (progress/parallax/scrub/reveal) + `IntersectionObserver`; hero stagger 140ms, `cubic-bezier(.19,1,.22,1)` count-ups |

## Design tokens

```
--bone #EFEDE8  --ink #101010  --mid #8A8781  --line rgba(16,16,16,.14)
--nav rgba(239,237,232,.92)  --gut clamp(18px,4.2vw,44px)  --max 1440px  --nav-h 74→96px
```

## Sections

Ticker → sticky nav + prog → `#hero` → `#cats` → `#season` → `#svc` → `#shop` → `#look` → `#cloth` → `#atelier` → `#signup` → footer + bag drawer + toaster.

## Notes on responsiveness testing

- Tested at 320, 375, 414, 768, 1024, 1440 widths; iOS safe-area, Android back-gesture, `hover:none` devices show Add-to-bag by default.
- Every interactive element ≥44px, wraps without horizontal scroll, and provides `:active` feedback.
- `prefers-reduced-motion` and `<noscript>` fully static.

Original vanilla build archived as `index.legacy.html`.
