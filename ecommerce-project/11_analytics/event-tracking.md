# Event-Tracking-Plan

**Stand:** 2026-07-11 · Umsetzung erst nach Analytics-Freigabe (P-6); Events sind cookieless-kompatibel (Plausible-Custom-Events o. ä.).

| Event | Auslöser | Zweck |
|---|---|---|
| view_product | produkt.html geladen | Funnel-Top |
| start_demo | app/index.html (mit Demo-Banner) geladen | Skeptiker-Pfad messen (H4) |
| begin_checkout | kasse.html geladen | Funnel |
| checkbox_complete | beide Checkout-Checkboxen gesetzt | Reibung am Rechtstext messen |
| purchase_redirect | Klick „Zahlungspflichtig bestellen“ | letzte eigene Messstation (Kauf selbst = Stripe-Wahrheit) |
| purchase | Stripe-Webhook/Dashboard | Umsatz-KPI |
| lead_signup / lead_doi | Lead-Magnet-Formular / DOI-Klick | Funnel Welle 2 |

## Funnel-Definition

Session → view_product → begin_checkout → purchase_redirect → purchase. Referenzwerte (erst nach Realdaten): keine Branchen-Benchmarks erfinden; eigene Baseline aus Woche 1–2 = Vergleichsbasis.

**Verboten ohne neue Rechtsprüfung:** Meta-Pixel, TikTok-Pixel, Google Analytics, Session-Recording — jede Einführung durchläuft privacy-checklist + Consent-Setup.
