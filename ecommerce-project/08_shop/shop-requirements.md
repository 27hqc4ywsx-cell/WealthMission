# Phase 9: Plattformwahl & Shop-Anforderungen

**Stand:** 2026-07-11 · **Agent 9** · **Status:** Plattform entschieden (D-007), Shop gebaut

## Plattformvergleich (für 1 digitales Produkt, Budget A-002)

| Kriterium | Shopify | WooCommerce | Shopware | **Statische Site + Stripe Payment Links** |
|---|---|---|---|---|
| Kosten/Monat | ab ~36 € + Apps | Hosting ~10–20 € + Pflege | am teuersten | **~0–5 €** (statisches Hosting) |
| Eignung 1 digitales Produkt | überdimensioniert | überdimensioniert, Update-Pflegelast | überdimensioniert | passgenau |
| Checkout | sehr gut | Plugin-abhängig | gut | Stripe-gehostet (PCI durch Stripe), Q-06 |
| Datenschutz-Aufwand | Drittland-Themen | Plugin-Wildwuchs | ok | minimal (kein Konto, kein Tracking im Launch) |
| Performance | gut | variabel | gut | **maximal** (statisch) |
| Umsetzbar in dieser Umgebung | nein (Konto nötig) | nein (Server nötig) | nein | **ja, vollständig** |

**D-007:** Statische Website (`/shop`) + Stripe Payment Link (Aktivierung nach Freigabe) + PayPal als Fallback. Migration zu Shopify erst ab nachweisbarer Traktion (>100 Verkäufe/Monat) sinnvoll — dokumentierter Skalierungspfad, keine Einbahnstraße.

## Seitenstruktur (alle umgesetzt)

`/shop/index.html` Startseite · `produkt.html` Produktseite · `kasse.html` Checkout (Button-Lösung, Widerrufs-Checkbox) · `danke.html` Bestellbestätigung · `faq.html` · `ueber-uns.html` · `kontakt.html` · `impressum.html` · `datenschutz.html` · `agb.html` · `widerruf.html` · `404.html` · Produkt selbst: `/shop/app/index.html` (Demo-Modus öffentlich, Vollversion wird nach Kauf ausgeliefert)

## Muss-Kriterien (Checkliste)

- [x] Mobile-first, responsiv
- [x] Kein generischer Dropshipping-Look (eigenes Designsystem)
- [x] Keine erfundenen Trust-Elemente (keine Fake-Reviews/Siegel/Zähler)
- [x] Echte Produktinformationen (Featureliste = tatsächlicher Funktionsumfang)
- [x] Preis inkl. USt ausgewiesen (PAngV)
- [x] „Zahlungspflichtig bestellen“-Button (Button-Lösung)
- [x] Widerrufs-Erlöschens-Checkbox vor Kauf
- [x] Barrierearm: semantisches HTML, Kontraste, Tastaturbedienbarkeit, Skip-Link
- [x] Kein Tracking/keine Cookies im Launchzustand → kein Consent-Banner nötig
- [x] Fehlerseite 404
- [ ] Zahlungsanbieter aktiv — **wartet auf Freigabe + Stripe/PayPal-Konto des Auftraggebers**
- [ ] Rechtstexte final — **wartet auf Anwaltsprüfung + echte Firmendaten (Platzhalter markiert)**
