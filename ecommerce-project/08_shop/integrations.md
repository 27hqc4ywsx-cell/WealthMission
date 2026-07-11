# Phase 10: Integrationen

**Stand:** 2026-07-11 · Alle Integrationen sind **vorbereitet, aber nicht aktiviert** (fehlende Konten/Freigaben — Verhalten nach Regel 11 des Auftrags).

| Integration | Zweck | Anbieter (Vorschlag) | Kosten | Status | Aktivierung |
|---|---|---|---|---|---|
| Zahlungen | Checkout | Stripe Payment Link (Q-01/Q-06) | 1,4–1,5 % + 0,25 €/Trx | **wartet auf Zugriff** | Auftraggeber: Stripe-Konto + KYC; Link in `shop/assets/config.js` → `paymentLink` eintragen |
| Zahlungen Fallback | Anbieterausfall/Sperrung (R-010) | PayPal | ~2,49 % + 0,35 € (prüfen) | wartet auf Zugriff | analog, `paypalLink` |
| Produktauslieferung | Download nach Kauf | Stripe-Receipt-Link oder E-Mail-Tool | 0 | wartet auf Zugriff | Nach Zahlung: Weiterleitung auf `danke.html` + Auslieferungs-E-Mail |
| E-Mail (DOI, Flows) | Lead-Magnet, Willkommensserie | Brevo o. ä. (EU-Server, AVV) | 0 € Einstieg | wartet auf Zugriff | Formular-Endpoint in config.js |
| Hosting | Shop-Auslieferung | GitHub Pages / Netlify / eigener Host | 0–5 €/M. | wartet auf Freigabe | s. deployment-plan.md |
| Analytics | KPI ohne Cookies | Plausible/eigene Serverlogs | 0–9 €/M. | geplant Phase 13 | erst NACH Datenschutz-Prüfung |

Für jede Aktivierung gilt: Eintrag ins Freigabe- und Zugriffsregister, AVV prüfen, Kündigungsweg dokumentieren. **Keine Secrets im Repo** — `config.js` enthält ausschließlich öffentliche Links/IDs.
