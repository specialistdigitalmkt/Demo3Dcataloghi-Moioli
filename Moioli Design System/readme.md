# Prefabbricati Moioli — Design System

## Sources
- `brand-kit/BRAND-KIT.md` and `brand-kit/tokens.json` — attached brand kit, extracted from the client's `moioli-web` site source (not itself attached here).
- `brand-kit/logo/*.svg` — four logo variants, copied into `assets/logo/`.
- `brand-kit/fonts/*.woff2` — Space Grotesk + IBM Plex Sans/Mono, copied into `assets/fonts/`.

No product codebase or Figma file was attached — only the brand kit. There is **no UI kit in this design system** because there is no source screen to recreate; building one would mean inventing a site design under the client's name, which the brief explicitly warns against. See "What's missing" below.

## Company
Prefabbricati Moioli is an Italian prefabricated-construction company (B2B: builders, surveyors, architects, site managers — not consumers). Payoff, verified from the logo vector path: **"Dove la forma prende volume"** ("Where form takes on volume"). An earlier draft of this kit had guessed a different payoff from memory rather than rendering the logo — that guess was wrong and has been corrected.

## Content fundamentals
- **Audience**: technical B2B — builders, surveyors, architects, site managers. Not consumer-facing.
- **Tone**: precise, factual, unembellished. No marketing superlatives, no unsubstantiated claims.
- **Sentences**: direct and short, minimal filler adjectives.
- **Missing data**: stated explicitly ("dato da verificare" / to-be-verified) rather than filled with a plausible-looking placeholder value — this is a real content pattern in the brand kit (`Ph Bg`/`Ph Border`/`Ph Text` tokens exist specifically for marking technical values not yet confirmed).
- **Language**: Italian.
- **Emoji**: not used.
- **Casing**: eyebrows/labels are uppercase with wide letter-spacing (0.16em); body copy is sentence case.

## Visual foundations
- **Color**: two-family system, navy (structure) + red (accent), plus neutrals. Never more than 2–3 dominant colors in one composition. Red is always an accent — never a large surface fill. Two reds exist and are **not interchangeable**: Red Logo (`#E42829`) is for the mark only (fails AA for text/UI); Red (`#B13733`) is the interface accent. Red Soft (`#D98581`) replaces Red on navy backgrounds, where the standard red drops under 3:1 contrast.
- **Type**: Space Grotesk (display — the same family cut into the logotype) paired with IBM Plex Sans (body/UI) and IBM Plex Mono reserved for technical/placeholder values only. Explicitly not Inter/Roboto or generic interface grotesques.
- **Backgrounds**: flat color fields (navy or bg-1), no gradients, no textures or patterns observed in the kit. Photography usage isn't documented in the brand kit — treat real jobsite/product photography as a gap to fill with the client, not to invent.
- **Shadows**: always cast downward, never diffused in every direction — three tiers (card hover, lifted element, floating element), all navy-tinted, all negative-spread.
- **Radius**: small and restrained — 3px for buttons/fields, 4px for cards/images. Not a pill-button, heavily-rounded aesthetic.
- **Motion**: two easing curves only (soft-out `ease`, symmetric `ease-in-out`), 150–300ms, never over 500ms. Respects `prefers-reduced-motion`. No bounce/spring easing.
- **Hover/press**: hover moves to the "Deep" step of a color (Red → Red Deep); the kit doesn't document a press/active state distinct from hover — treat a slight opacity or scale-down as a reasonable, undocumented extension if one is needed.
- **Borders**: thin, `--bg-2` on light surfaces; used for separators and card outlines rather than heavy strokes.
- **Layout**: 1280px max content width, 32px desktop gutter (20px under 600px).
- **Transparency/blur**: not documented in the kit — none used until confirmed otherwise.

## Iconography
The brand kit contains no icon font, sprite sheet, or icon SVGs — only the logo marks and typography. No icon system is documented. **Substitution**: this design system links **Lucide** icons from CDN (`unpkg.com/lucide-static` or the `lucide` script) as the closest generic match to the kit's restrained, technical-line aesthetic — flagged here as a substitution, not a client asset. UI elements should default to no icon rather than force one where the kit doesn't show one. Emoji and Unicode glyphs are not used as icons.

## Logo
Four fixed SVG variants in `assets/logo/` (see BRAND-KIT.md for full usage rules): full-color lockup, white lockup, full-color sigla (mark only), white sigla. Logo colors (`#1F2A43` navy, `#E42829` red) are fixed to the vector file and must not be substituted with the interface's `--navy`/`--red` tokens even though they're nearly identical (ΔE≈1) — the two are tracked as separate tokens (`--logo-navy`, `--logo-red`) precisely so this distinction isn't lost. Do not recolor, distort, or reconstruct the mark. Minimum clear space: the height of the "M" in MOIOLI on every side. Not yet available: bitmap favicon, single-color monochrome version, square/social icon format.

## What's missing / needs the client
- **No UI kit.** No product codebase or Figma was attached, so there's nothing concrete to recreate. If you can attach the `moioli-web` repo or a Figma file, this system can add real screen recreations (homepage, project gallery, contact/quote flow, etc.) instead of an invented layout.
- **No photography.** The kit documents no imagery style (warm/cool, grain, full-bleed vs. contained) — real jobsite/product photos are needed before this system can give guidance here.
- **No icon set** — using a Lucide CDN substitution (see Iconography).
- **No favicon, monochrome, or square logo lockup** yet.
- **No documented press/active state** for interactive elements — components use a reasonable but undocumented extension (slight dim).

## Technical catalogs (cataloghi tecnici)
Source: `Cartelletta bACACIER 4 ANTE` PDF, supplied by the client. The real flat sheet measures **833,6 × 275,9 mm** (4 panels of 208,4 × 275,9) — not the 210×210 square recorded in the brief; the v2 template follows the PDF.

The existing catalogs share one layout across products: outer side = photo / navy panel with logo and contacts / navy cover with title / photo; inner side = intro, geometry and performance, solutions and node sections, components with a data table. Diagonal navy corner triangles were the recurring graphic device; they are **removed in v2** at the client's request.

v2 changes: full-bleed photo opening panel with a short intro, large key figures, a single consolidated data table instead of scattered values, more air around larger drawings, and a QR block (placeholder) on the cover and on the last inner panel with the caption "scopri la soluzione."

**Distinguishing one roofing system from another**: no per-system hue. The brand has one interface accent and a "2-3 dominant colours" rule, and the technical drawings already carry their own tint (Bacacier steel blue, TT petrol green). Systems are told apart by the system name set large on the cover, a different cover photograph, and a **red index tab** on the cover's outer edge placed at a different vertical offset per system (Bacacier `top:70px`, TT `top:340px`) — so a fanned stack reads like a thumb index. The tab position is the one value to change when adding a new system; confirm the fold sequence with the printer before finalising which edge it sits on.

Second catalogue: `Catalogo 4ante piana a tegoli` (copertura piana a tegoli "TT"). Its cover photographs do not exist yet — the source PDF carries literal "FOTO WAITING" placeholders, and the v2 template keeps them visible as such rather than substituting stand-ins. Drawings, icons and the four inner photographs were cropped from that PDF into `assets/catalogo-tt/`.

Third catalogue: `4-ante Tecnowing 2026 finale` (copertura alare Tecnowing). It carries **six** interposto solutions (pannello sandwich, sandwich shed, coppella CLS piana, piana shed, curva, curva shed), so the v2 gives them a whole inner panel as a 2×3 grid instead of squeezing them into the shared "Soluzioni" tile set — the grid adapts per system, the panel sequence does not. Its icons are red-boxed rather than navy-lined; that difference comes from the source and is preserved. Index tab: third position (`top:610px`).

## Index
- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (spacing/radius/shadow/motion), `fonts.css` (`@font-face`).
- `assets/logo/` — 4 logo SVGs. `assets/fonts/` — woff2 files.
- `assets/catalogo/` — assets extracted from the client's Bacacier 4-panel catalog PDF: 5 photographs, 12 technical drawings (`dis-*.png`), 10 line icons (`icon-*.png`), certification marks. All are raster crops out of the PDF, to be replaced with vector originals.
- `assets/catalogo-tt/` — same for the "TT" flat-roof catalog: 10 drawings, 10 icons, 4 photographs.
- `assets/catalogo-tecnowing/` — same for the Tecnowing winged-roof catalog: 15 drawings (4 tegolo sections, 6 interposto solutions, 4 components, 1 elevation), 10 icons (red-boxed, this catalog's own style), 4 photographs.
- `templates/catalogo-tecnico-tecnowing/` — v2 layout of the Tecnowing catalog; one full inner panel is given to its six interposto solutions.
- `templates/catalogo-tecnico-4-ante/` — v2 layout of the Bacacier catalog (834×276 mm, 4 panels, gate fold), both sides.
- `templates/catalogo-tecnico-tt/` — v2 layout of the "TT" flat-roof catalog, same grid.
- `guidelines/` — foundation specimen cards (colors, type, spacing/radius/shadow, motion, logo).
- `components/forms/` — Button, Input, Select, Checkbox.
- `components/feedback/` — Badge, Tag, PlaceholderValue.
- `components/overlay/` — Dialog, Tooltip.
- `components/display/` — Card, Tabs.
- `SKILL.md` — portable skill definition for use in Claude Code.

### Intentional additions
No component source was attached, so the component set follows the "no source" path: a standard set sized to a B2B construction site's needs (forms, a card, badges/tags, tabs, dialog, tooltip). One addition beyond the standard set: **PlaceholderValue**, surfacing the brand kit's own "dato da verificare" (data to be verified) pattern — it has dedicated tokens (`--ph-bg`/`--ph-border`/`--ph-text`) in the source material, so it's a documented brand pattern, not an invention.
