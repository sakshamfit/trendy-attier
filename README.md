# trendy attire

Single-page landing site for **Trendy Attire**, a fictional monochrome fashion brand — "considered
essentials in monochrome. Outerwear, knitwear and tailoring, made in limited runs."

Editorial layout, bone/black palette, Archivo only, grayscale photography, and one
scroll-driven motion system. No build step, no framework.

## Run it

```sh
python3 -m http.server 4173 --bind 0.0.0.0
# → http://localhost:4173/index.html
```

`index.html` is fully self-contained (it can also be opened straight from disk), but it pulls
three things off the network: Google Fonts (Archivo), the Tailwind CDN (utility fallback only)
and the brand's imagery from jsDelivr.

## Stack

| Piece | Note |
| --- | --- |
| HTML | one file: `index.html` — markup, styles and behaviour |
| Identity | wordmark set as two stacked lines (Trendy / Attire); inline SVG favicon, no image asset |
| CSS | custom properties + `clamp()`; Tailwind via CDN, `preflight` disabled so it cannot fight the authored CSS |
| JS | vanilla, no libraries |
| Type | Archivo 400–900 |
| Media | `VanhDc/aura-assets@sable-v2/sable/img/*` via jsDelivr, rendered `grayscale(1)` with per-section contrast (1.04–1.08) |

## Design tokens

```
--bone #EFEDE8   --ink #101010   --mid #8A8781   --line rgba(16,16,16,.14)
--nav rgba(239,237,232,.9)       --gut clamp(18px,3.4vw,44px)      --max 1440px
```

## Sections

Ticker → sticky nav → `#hero` → `#cats` → `#season` → `#svc` → `#shop` → `#look`
→ `#cloth` → `#atelier` → `#signup` → footer.

The hero wordmark — `Trendy` over `Attire`, both six letters, so the block stays square — sits
**behind** the transparent model cutout (z-1 vs z-2) so the letters read through the gaps in
the silhouette; the corner labels (z-4) are anchored to the padded
content column, not the viewport edge.

## Motion system

A single `requestAnimationFrame`-batched scroll handler drives all four effects, so there is
exactly one scroll listener on the page:

- **progress** — `#prog` scaleX under the nav, keyed to total page depth
- **parallax** — any `[data-speed]` element; offset is proportional to its distance from the
  viewport centre (`--ty`), optional `[data-scale]` for the hero model (`--sc`)
- **lookbook scrub** — `[data-scrub]` writes `--p` from 0→1 as the frame crosses from the
  bottom quarter to the vertical middle; CSS turns `--p` into `clip-path: inset()` + scale
- **reveals** — `.rv` fade/rise with a 70ms staggered delay via IntersectionObserver, *plus* a
  manual rect sweep, because elements already above the fold never fire an intersection crossing

Load-in sequence on the hero staggers 140ms per piece (kicker → wordmark → model → corner
labels → CTAs). Stats count up with a hand-rolled `cubic-bezier(.19,1,.22,1)` solver; the
`#cloth` video only gets its `src` once it scrolls into view (`preload="none"` + poster).

`prefers-reduced-motion: reduce` removes the ticker loop, parallax, scrub, reveals, count-ups
and video autoplay — the page paints in its final state, product buttons stay visible, and a
`<noscript>` block covers the no-JS case too. Hover-only affordances (add-to-bag, image zoom,
underline wipes) are wrapped in `@media (hover:hover)`, so touch devices get the static state.

## Notes

- Nav links and the Search / Account / Bag labels collapse below 900px; the wordmark and the
  live bag counter stay.
- Shop grid is a strict 4 → 2 column shift; category strip 3 → 2 → 1.
- Placeholder `href="#"` links are intercepted so they never jump to the top.
- Fav buttons use `aria-pressed`; bag additions announce through a polite live region.
