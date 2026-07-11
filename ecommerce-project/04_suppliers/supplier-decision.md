# Phase 5: Lieferanten – NICHT ANWENDBAR (begründet)

**Stand:** 2026-07-11 · **Agent 4** · **Status:** abgeschlossen (n/a)

Geschäftsmodell = selbst produziertes digitales Produkt (D-004/D-005). Es gibt **keinen** Wareneinkauf, keine Mindestbestellmengen, keine Musterbestellung, keinen Import, keine physische Lieferkette.

| Prüfpunkt der Phase 5 | Status |
|---|---|
| Lieferanten-Longlist/-Scorecards | nicht anwendbar – Eigenproduktion im Repo (`/08_shop/theme-code`, Produktdateien) |
| Musterbestellung & Mustertest | ersetzt durch QA-Testmatrix (`/12_quality-assurance/test-cases.md`) – das „Muster“ ist der getestete Produkt-Build |
| Konformitätsnachweise/Zertifikate | nicht anwendbar (kein physisches Produkt); digitale Pflichten → Phase 7 |
| Ausfallrisiko Lieferant | ersetzt durch Risiko „Plattform-/Hosting-Ausfall“ (R-016) und „Zahlungsanbieter-Sperrung“ (R-010) |

**Abhängigkeiten, die wie „Lieferanten“ zu behandeln sind** (ins Zugriffsregister aufgenommen): Hosting/Deployment-Plattform, Zahlungsanbieter (Stripe/PayPal), E-Mail-Versand für Produktauslieferung. Für jede gilt: Zweitanbieter-Fallback dokumentieren (→ `/08_shop/integrations.md`).
