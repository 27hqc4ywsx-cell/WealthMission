# SOP: Fulfillment (digitale Auslieferung)

**Stand:** 2026-07-11

## Auslieferungskette

Zahlung (Stripe) → Success-URL `danke.html` → automatische E-Mail K1 mit Zugangslink (Kaufversion ohne Demo-Banner) + Rechnung. Kein Lager, kein Versand, keine Etiketten — klassische Fulfillment-SOPs (Verpackung, Tracking, Paketverlust) sind **nicht anwendbar** und werden durch die folgenden digitalen Äquivalente ersetzt:

| Physisches Äquivalent | Digitale Entsprechung | SOP |
|---|---|---|
| Paketverlust | E-Mail nicht angekommen | order-process SOP-05 |
| Beschädigte Ware | App lädt nicht / Browser-Problem | customer-service SOP-CS-2 |
| Falscher Artikel | falscher/alter Link ausgeliefert | manuell korrekt ausliefern, Ursache fixen |
| Bestandswarnung | Hosting-Ausfall (Produkt nicht abrufbar) | incident-management IM-1 |

## Service-Level

Bereitstellung: unmittelbar (automatisch). Manuelle Nachlieferung: ≤ 24 h werktags. Verfügbarkeitsziel Hosting: Standard-SLA des Hosters (GitHub Pages/Netlify); Ausfall > 4 h ⇒ IM-1.

## Qualitätskontrolle

Monatlich: Selbst-Testkauf im Stripe-Testmodus (Link führt zur aktuellen Version? Rechnung korrekt? Mail-Zustellung?). Ergebnis im Cockpit-Notizfeld dokumentieren.
