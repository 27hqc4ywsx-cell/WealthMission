# Vorläufige Roadmap

**Stand:** 2026-07-11 · **Kategorie:** Schätzung (Zeitangaben basieren auf Annahme A-006: ~10 h/Woche; werden nach Phase-0-Antworten kalibriert)

> Kein Phasenübergang ohne bestandenes QA-Gate (Agent 14). Kostenpflichtige/externe Aktionen nur nach dokumentierter Freigabe (`/00_master/approval-log.md`).

| Schritt | Phase | Inhalt (Kern-Deliverables) | Dauer (Schätzung) | Abhängigkeit | Freigabe nötig? |
|---|---|---|---|---|---|
| 1 | 0 | Projektbriefing, Register, Fragenblock, Roadmap | erledigt bis auf Antworten | – | nein |
| 2 | 1 | Geschäftsmodell-Entscheidungsmatrix (≥10 Modelle, gewichtet), Empfehlung | 1 Woche | Phase 0 | nein |
| 3 | 2 | ≥20 Kundenprobleme, 10 Zielgruppen, 10 Segmente, 5 Marktlücken, Quellenregister | 1–2 Wochen | Phase 1 | nein |
| 4 | 3 | Produkt-Longlist (≥30) → Shortlist (≤2 Testprodukte) mit Scorecards | 1–2 Wochen | Phase 2 | nein |
| 5 | 4 | Wettbewerbsanalyse (≥10 Wettbewerber je Finalist), Differenzierungsstrategie | 1 Woche | Phase 3 | nein |
| 6 | 5 | Lieferanten-Longlist, Prüfprotokolle, Anfragen; **Musterbestellung** | 2–4 Wochen (Lieferzeit) | Phase 4 | **ja** (Musterkauf) |
| 7 | 6 | Unit Economics, 3 Szenarien, Stresstest, Break-even, Cashflow | parallel zu 5, 1 Woche | Phase 3–5 Daten | nein |
| 8 | 7 | Compliance-Matrix, Steuer-/Rechtscheckliste, Prüfbedarfe extern | 1–2 Wochen | Produktentscheidung | teils (externe Prüfung) |
| 9 | 8 | 5 Markenkonzepte, Namens-/Domainprüfung, Angebotsarchitektur | 1 Woche | Phase 7 begonnen | ja (Domainkauf) |
| 10 | 9 | Plattformvergleich + Empfehlung, vollständiger Shopaufbau | 2–3 Wochen | Phase 8 | ja (kostenpflichtige Plattform/Apps) |
| 11 | 10 | Integrationen (Payment, Versand, E-Mail, Consent, Analytics) | 1 Woche | Phase 9 | ja (Zahlungsanbieter-Aktivierung) |
| 12 | 11 | Marketing-System: Hooks, Creatives-Briefs, E-Mail-Flows, Kampagnenstruktur | 1–2 Wochen | Phase 8 | nein (Erstellung) |
| 13 | 12 | SOPs für alle Bestell-/Betriebs-/Störfälle | 1 Woche | Phase 9–10 | nein |
| 14 | 13 | Trackingplan, KPI-Dashboard, Warnschwellen | parallel, 3–5 Tage | Phase 10 | nein |
| 15 | 14 | Vollständige Testmatrix, Testbestellungen, Launch-Readiness-Audit | 1 Woche | Phasen 9–13 | **ja** (Shop-Veröffentlichung) |
| 16 | 15 | Kontrollierter Markttest mit Budget-, Stop- und Skalierungsregeln | 2–4 Wochen | Phase 14 + Freigaben | **ja** (Werbebudget) |
| 17 | 16 | Laufende Optimierung, Experiment-Backlog | fortlaufend | Phase 15 | fallweise |

**Grobe Gesamtdauer bis Markttest:** ca. 3–5 Monate (Schätzung; stark abhängig von Musterlieferzeit, verfügbarer Zeit und Freigabegeschwindigkeit).

## Bewusste Reihenfolge-Entscheidungen

1. **Wirtschaftlichkeit (6) und Recht (7) vor Marke (8) und Shop (9):** verhindert Investition in ein nicht tragfähiges oder nicht beherrschbares Produkt.
2. **Musterbestellung (5) als harter Blocker vor Launch:** kein physisches Produkt ohne eigenen Qualitätstest.
3. **Markttest (15) mit Stop-Regeln statt „Launch and hope“:** Entscheidung stoppen/ändern/weitertesten/skalieren wird ausschließlich datenbasiert getroffen.
