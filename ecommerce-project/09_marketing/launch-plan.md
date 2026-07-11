# Launch-Plan

**Stand:** 2026-07-11 · Vorbedingung: ALLE Blocker B-1–B-7 erledigt + schriftliche Launch-Freigabe des Auftraggebers.

## T-minus-Checkliste

| Wann | Aktion | Verantwortlich |
|---|---|---|
| T-14 | B-1–B-3 abgeschlossen (Gewerbe, Rechtstexte final, Marke geprüft) | Auftraggeber |
| T-7 | B-4–B-6: Zahlung live (Testmodus), Domain/Hosting, Support-Mail; ENTWURF-Banner entfernt | Auftraggeber + Agent 9 |
| T-5 | O-01–O-05: echte Testbestellung, Erstattungstest, Browser-Matrix, Ladezeit | Agent 14 |
| T-3 | E-Mail-Flows scharf (DOI-Test mit eigener Adresse), Backoffice-Cockpit eingerichtet | Agent 9/12 |
| T-1 | Launch-Readiness-Audit final; Freigabe einholen | Agent 14 → Auftraggeber |
| T-0 | Zahlung von Test- auf Live-Modus; Welle 0 startet (go-to-market.md) | Auftraggeber |
| T+1…7 | Täglicher Check: Bestellungen, Support-Postfach, Fehlerlog, Cockpit-Eintrag | Agent 12 |
| T+14 | Erste Review: KPIs gegen validation-plan; Entscheidung Welle 3 (Paid) | Agent 5/10 |

## Rollback-Plan (falls kritischer Fehler nach Launch)

1. `paymentLink` in config.js leeren → Checkout sofort im Vorschau-Modus (Käufe gestoppt, Seite bleibt online)
2. Betroffene Käufer proaktiv informieren + Kulanzregel anwenden
3. Fehler beheben → QA-Testlauf → Wieder-Aktivierung
