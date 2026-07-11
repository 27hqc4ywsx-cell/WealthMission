# Messplan (Consent-frei by design)

**Stand:** 2026-07-11 · Prinzip: Launch OHNE Cookies/Pixel (kein Consent-Banner nötig, Datenschutz als Markenwert). Messung aus 4 First-Party-Quellen:

| Quelle | Liefert | Verfügbar ab |
|---|---|---|
| Stripe-Dashboard | Verkäufe, Umsatz, Erstattungen, Chargebacks, Länder | B-4 |
| Cookieless Analytics (Plausible o. ä., EU-gehostet) | Sessions, Seitenpfade, Referrer, Conversion-Events ohne personenbezogene Cookies — Datenschutz-Freigabe vor Einbau (privacy-checklist P-6) | nach B-5 + Prüfung |
| E-Mail-Tool | Öffnungen, Klicks, DOI-Raten, Flow-Conversion | Tool-Setup |
| **Backoffice-Cockpit** (eigenes Werkzeug) | Konsolidierte Ist-Zahlen: Bestellungen, Ausgaben, DB, Ergebnis, Soll-Ist gegen Szenarien | **sofort (gebaut)** |

## Attribution (bewusst einfach)

Ohne Tracking-Pixel keine granulare Attribution — akzeptiert. Ersatz: Kanal-Feld je Bestellung im Cockpit (Kunde-Herkunft aus Referrer/UTM der Analytics + Stichproben-Frage in Kauf-Mail „Wo hast du uns entdeckt?“). UTM-Konvention: utm_source=tiktok|meta|newsletter|seo, utm_campaign=<cluster>.

## Datenqualitätsregeln

Wöchentlicher Abgleich Cockpit ↔ Stripe (SOP-01) · Analytics-Zahlen gelten als Trend, Stripe als Wahrheit für Geld · niedrig-vertrauliche Quellen (Q-03-Typ) nie in KPIs mischen.
