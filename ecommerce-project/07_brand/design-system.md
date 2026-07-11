# Designsystem

**Stand:** 2026-07-11 · Implementiert in `shop/assets/style.css` (Shop) und inline in `shop/app/index.html` (Produkt). Single Source of Truth sind die CSS-Custom-Properties.

## Tokens

| Token | Wert | Verwendung |
|---|---|---|
| --bg-0 … --bg-3 | #07070c → #1f2235 | Flächenhierarchie (dunkel) |
| --gold / --gold-soft / --gold-deep | #e8c468 / #f0d690 / #b8862c | Marke, CTAs, Fortschritt/XP |
| --green | #4ade80 | positive Beträge, Zielfortschritt |
| --red | #f87171 | negative Beträge, Warnungen |
| --text / --muted | #f5f3ee / #9aa0b8–#a7adc4 | Text/Sekundärtext |
| --radius / --radius-lg | 16 / 22 px | Karten, Buttons |
| Font | System-Stack (keine Webfonts) | Performance + keine Font-Lizenz-/DSGVO-Themen |

## Prinzipien

1. **Mobile-first** (Basisbreite 390 px, Shop max. 1040 px, App max. 560 px)
2. **Kontrast:** Text auf --bg-Flächen ≥ WCAG-AA-Ziel; Gold nur für große/fette Elemente (vertieftes Kontrast-Audit vor Launch, s. test-cases M-08)
3. **Fokus sichtbar:** 3px-Gold-Outline auf allen interaktiven Elementen
4. Keine Stockfotos – nur CSS/SVG-Eigenelemente (Münz-Logo = CSS-Radialgradient)
5. Dark-only im MVP (bewusst, Markenzeichen); Light-Mode = Backlog-Experiment
