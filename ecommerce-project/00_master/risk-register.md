# Risikoregister

**Stand:** 2026-07-11 · Skalen: Wahrscheinlichkeit/Schaden = niedrig / mittel / hoch · Priorität = kritisch / hoch / mittel / niedrig

| ID | Beschreibung | Kategorie | Wahrsch. | Schaden | Priorität | Frühwarnsignal | Prävention | Notfallmaßnahme | Verantwortlich | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| R-001 | Budgetrahmen unbekannt → Planung auf falscher Basis | Projekt | hoch | mittel | kritisch | Fragenblock unbeantwortet | Konservative Defaults (A-002…A-004), keine Ausgaben ohne Freigabe | Re-Planung nach Antworten | Agent 1 | offen |
| R-002 | Mangelnde reale Nachfrage für gewähltes Produkt | Markt | mittel | hoch | kritisch | Schwache Suchtrends, wenig Rezensionsvolumen | Phasen 2–3 mit Quellenpflicht, kein Produkt aus viralen Videos allein | Produkt verwerfen, Shortlist-Alternative | Agent 2/3 | offen |
| R-003 | Verkauf ohne korrekte Gewerbe-/Steuerregistrierung | Recht/Steuer | mittel | hoch | kritisch | A-007 unbestätigt | Phase 7 vor Launch; Launch-Blocker in Launch-Readiness | Verkauf stoppen, Steuerberater | Agent 6 | offen |
| R-004 | Zu geringe Marge nach Vollkosten | Finanzen | mittel | hoch | hoch | DB2 < 0 im konservativen Szenario | Phase 6 Vollkostenrechnung + Stresstest vor Produktfreigabe | Produkt ablehnen | Agent 5 | offen |
| R-005 | Lieferantenausfall / gefälschte Dokumente | Lieferkette | mittel | hoch | hoch | Unplausible Zertifikate, keine Registerdaten | Phase-5-Prüfprotokoll, Musterbestellung, Zweitlieferant | Backup-Lieferant aktivieren | Agent 4 | offen |
| R-006 | Produkthaftung / unsicheres Produkt (GPSR, CE) | Recht | niedrig–mittel | hoch | hoch | Fehlende Konformitätsnachweise | Ausschluss risikoreicher Kategorien (A-010), Compliance-Matrix je Produkt | Verkaufsstopp, ggf. Rückruf-SOP | Agent 6 | offen |
| R-007 | Hohe Retourenquote zerstört Deckungsbeitrag | Betrieb | mittel | mittel | hoch | Retourenquote > Szenarioannahme | Produktauswahlkriterium „Retourenrisiko“, ehrliche Produktdarstellung | Angebots-/Produktanpassung | Agent 12 | offen |
| R-008 | Abmahnung wegen fehlerhafter Rechtstexte (Impressum, Widerruf, Preisangaben) | Recht | mittel | mittel | hoch | Launch ohne fachliche Prüfung | Rechtstexte nur mit Prüfvermerk; professional-review-required.md | Sofortkorrektur, Anwalt | Agent 6 | offen |
| R-009 | DSGVO-Verstoß durch Tracking ohne Einwilligung | Datenschutz | mittel | mittel | hoch | Pixel ohne Consent-Management aktiv | Consent-first-Trackingplan (Phase 13) | Tracking deaktivieren | Agent 11 | offen |
| R-010 | Sperrung Werbekonto oder Zahlungsanbieter | Plattform | mittel | hoch | hoch | Policy-Warnungen, erhöhte Chargebacks | Regelkonforme Werbeaussagen, saubere Produktkategorie | Alternativkanäle, Rücklagen | Agent 10 | offen |
| R-011 | Werbekosten übersteigen Break-even-CAC dauerhaft | Marketing | mittel | hoch | hoch | CAC > Ziel-CAC über Mindestdatenmenge | Stop-Regeln im Markttest (Phase 15) | Test stoppen lt. Stop-Regel | Agent 10/5 | offen |
| R-012 | Markenrechtsverletzung durch Namen/Design | Recht | niedrig | hoch | mittel | Ähnliche eingetragene Marken | Namensprüfung Phase 8 vor Nutzung | Rebranding | Agent 7 | offen |
| R-013 | Abhängigkeit von einem einzigen Lieferanten/Kanal | Strategie | hoch | mittel | mittel | >70 % Umsatz/Beschaffung über eine Quelle | Zweitlieferant, Kanalmix ab Skalierung | Diversifikation vorziehen | Agent 1 | offen |
| R-014 | Lieferverzögerung (v. a. bei Übersee-Beschaffung) | Lieferkette | mittel | mittel | mittel | Tracking-Stillstand, Feiertage (z. B. CNY) | EU-Lager-Optionen in Phase 1 bewerten, Pufferzeiten | Proaktive Kundenkommunikation, Erstattungs-SOP | Agent 12 | offen |
| R-015 | Liquiditätsmangel durch Kapitalbindung (Ware, Werbevorlauf, Payment-Holds) | Finanzen | mittel | hoch | hoch | Cash-Reichweite < 2 Monate | Cashflow-Plan Phase 6, Sicherheitspuffer | Ausgabenstopp, Bestandsabverkauf | Agent 5 | offen |
| R-016 | Datenverlust / technischer Ausfall des Shops | Technik | niedrig | mittel | mittel | Fehlende Backups | Backup-/Deployment-Plan Phase 9 | Restore lt. Plan | Agent 9 | offen |
| R-017 | Verpackungsgesetz-Verstoß (LUCID/Systembeteiligung fehlt) | Recht | mittel | mittel | hoch | Versand ohne LUCID-Registrierung | Tax-/Legal-Checkliste vor erstem Versand | Registrierung nachholen, Versandstopp | Agent 6 | offen |

## Pflegeregeln

- Jede Phase ergänzt ihre spezifischen Risiken vor dem QA-Gate.
- Prioritäten werden bei jeder Statusänderung neu bewertet.
- Eingetretene Risiken werden mit Datum, Schaden und Gegenmaßnahme dokumentiert (→ `/10_operations/incident-management.md`).
