# Konfigurations- & Betriebshandbuch (Shop)

**Stand:** 2026-07-11 · Zielgruppe: Betreiber ohne Programmierkenntnisse.

## Zentrale Konfiguration: `shop/assets/config.js`

| Schlüssel | Zweck | Wann füllen |
|---|---|---|
| paymentLink | Stripe-Payment-Link; leer = Checkout gesperrt (Vorschau-Modus) | nach B-4 |
| paypalLink | Fallback-Zahlweg | optional nach B-4 |
| newsletterEndpoint | DOI-Formular des E-Mail-Tools | nach Tool-Setup |
| price / productName | Anzeige-Stammdaten | bei Preisänderung (Checkliste unten) |

**Keine Secrets in diese Datei** – nur öffentliche Links/IDs.

## Standard-Änderungen

**Preis ändern (vollständige Checkliste):** product-data.md → config.js → produkt.html (2 Stellen) → index.html (2 Stellen) → kasse.html (Tabelle + Button) → Zahlungsanbieter-Price → unit-economics neu rechnen → Commit mit Begründung.
**Text ändern:** betreffende HTML-Datei bearbeiten; danach Seite lokal im Browser öffnen (Doppelklick genügt) und QA-Skript laufen lassen (12_quality-assurance/test-cases.md, T-01).
**Neue FAQ:** `faq.html`, `<details>`-Block kopieren.
**Rechtstext-Update:** NUR nach anwaltlicher Freigabe; ENTWURF-Banner erst dann entfernen.

## Produkt-Auslieferung (nach B-4)

Kaufversion = Kopie von `shop/app/index.html` mit entferntem `demoBanner`-Block, abgelegt unter nicht verlinkter, nicht erratbarer URL (z. B. `/app-vollversion-<zufallsstring>/`); dieser Link wird als Stripe-Success-/E-Mail-Link hinterlegt. Upgrade-Pfad bei Traktion: tokenisierte Auslieferung (deployment-plan.md).

## Backup & Rollback

Git ist das Backup (jeder Stand committet). Rollback: vorherigen Commit wiederherstellen. Kundendaten liegen nie auf dem Server.
