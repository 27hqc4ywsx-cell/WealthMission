# Projekt-Dashboard

**Stand:** 2026-07-11 (Vollausbau) · **Systemstatus: KOMPLETT INSTALLIERT** – alle 13 Bereiche final befüllt, 0 Platzhalter
**Produkt:** Groschenwerk Money OS (Rebrand D-008) + **Backoffice-Cockpit** (Buchhaltung/Controlling, `shop/backoffice/`). **Launch:** wartet ausschließlich auf externe Blocker B-1…B-7. **Repo-Trennung:** wartet auf Repo-Anlage durch Auftraggeber.

## Phasenstatus

| Phase | Bezeichnung | Agent | Status | Ergebnis-Dokument |
|---|---|---|---|---|
| 0 | Onboarding | 1 | abgeschlossen (mit Default-Annahmen, D-003) | project-brief, Register |
| 1 | Geschäftsmodell | 1 | abgeschlossen (D-004: digital) | 01_strategy/business-models.md |
| 2 | Markt/Probleme | 2 | abgeschlossen (kompakt, quellenbasiert) | 02_market-research/* |
| 3 | Produktrecherche | 3 | abgeschlossen (D-005: Money OS) | 03_product-research/* |
| 4 | Wettbewerb | 2 | abgeschlossen (10 Wettbewerber, Lücke belegt) | competitor-analysis.md |
| 5 | Lieferanten | 4 | abgeschlossen (n/a begründet) | 04_suppliers/supplier-decision.md |
| 6 | Wirtschaftlichkeit | 5 | abgeschlossen (DB1 19,23 €; R-018 erkannt) | 05_finance/unit-economics.md |
| 7 | Recht/Steuern | 6 | Recherche fertig; **externe Prüfung offen (B-1–B-3)** | 06_legal-compliance/* |
| 8 | Marke/Angebot | 7 | abgeschlossen (D-008 „Groschenwerk“, Vorbehalt B-3) | 07_brand/* (4 Dokumente) |
| 9 | Shopaufbau | 9 | **abgeschlossen: 12 Seiten + App gebaut** | /shop, 08_shop/* |
| 10 | Integrationen | 9 | vorbereitet, **wartet auf Zugriff** (Konten) | 08_shop/integrations.md |
| 11 | Marketing | 10 | Kern fertig (Funnel, 30 Hooks, E-Mail-Flows) | 09_marketing/ad-strategy.md |
| 12 | Betriebsprozesse | 12 | **abgeschlossen: 20 SOPs inkl. Widerruf, Chargeback, Incident, DSGVO** | 10_operations/* (5 Dokumente) |
| 13 | Tracking/Controlling | 11 | **abgeschlossen: Messplan, Events, KPI-Definitionen + LIVE-Cockpit (getestet)** | 11_analytics/* + shop/backoffice/ |
| 14 | Test | 14 | **abgeschlossen: 18 automatisierte + 8 manuelle Tests, 0 Fehler; QA-Audit bestanden** | test-cases.md, audit-report.md, evidence/ |
| 15 | Markttest | 10+5 | blockiert bis B-1…B-7 + Budgetfreigabe | – |
| 16 | Optimierung | alle | nicht begonnen | – |

## Benötigte Freigaben / Mitwirkung des Auftraggebers (= Launch-Blocker)

| # | Was | Kosten | Von wem |
|---|---|---|---|
| B-1 | Gewerbe + Steuer (Steuerberater) | Beratungskosten | Auftraggeber |
| B-2 | Rechtstexte anwaltlich prüfen, Platzhalter füllen | Anwaltskosten | Auftraggeber |
| B-3 | Markenrecherche „Groschenwerk“ | 0–Anwalt | Auftraggeber |
| B-4 | Stripe-/PayPal-Konto anlegen (KYC), Link eintragen | 0 € fix | Auftraggeber |
| B-5 | Domain + Hosting | ~10–15 €/Jahr | Freigabe nötig |
| B-6 | Support-E-Mail-Adresse | 0–x | Auftraggeber |
| B-7 | Echte Testbestellung nach B-4 | ~25 € (rückerstattbar) | Freigabe nötig |

## Top-Risiken

R-002 (Nachfrage unvalidiert → Markttest), R-018 (Paid allein trägt nicht → Content/E-Mail-Funnel), R-012 (Markenname ungeprüft), R-003 (Steuerstatus), R-019 (Link-Weitergabe, akzeptiert).

## Nächste Aktionen

1. Auftraggeber: neues Repo anlegen (Separierung) + B-1–B-6 anstoßen (Reihenfolge: B-3 → B-1 → B-2 → B-4/B-5/B-6)
2. Nach B-4/B-5: O-01–O-05 testen → Launch-Freigabe anfragen → Phase 15 (Markttest) nach launch-plan.md
