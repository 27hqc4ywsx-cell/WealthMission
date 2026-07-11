# Produktentscheidung (D-005)

**Stand:** 2026-07-11 · **Agent 3 + Agent 1** · **Status:** abgeschlossen (QA-Gate: siehe /12_quality-assurance/audit-report.md)

## Produkt: „Groschenwerk Money OS“ – das gamifizierte Finanz-Cockpit (Einmalkauf)

Interaktive deutschsprachige Web-App (läuft komplett im Browser, offline-fähig, Daten bleiben auf dem Gerät). Module:

1. **Haushaltsbuch** – Einnahmen/Ausgaben mit Kategorien, Monatsübersicht, Auswertung
2. **Sparziele & Notgroschen** – Ziele mit Fortschrittsbalken und Missionen
3. **52-Wochen-Challenge** – interaktiver Tracker
4. **Vermögensübersicht** – Net-Worth über die Zeit
5. **Gamification-Schicht** – XP, Level, Streaks (eigenständige Umsetzung unter der Marke „Groschenwerk“, D-008)

## Steckbrief

| Feld | Inhalt | Kategorie |
|---|---|---|
| Zielgruppe | 20–40, deutschsprachig, abo-müde, datenschutzbewusst, Umsetzungslücke | Hypothese |
| Gelöstes Problem | Abbruch klassischer Haushaltsbücher; fehlende Motivation; Bankzugangs-/Abo-Aversion (Probleme 2,4,5,17) | Hypothese m. Signalen Q-02–Q-05 |
| Kaufmotiv | Kontrolle + sichtbarer Fortschritt + einmalig zahlen | Hypothese |
| Nachfragebelege | Gratis-Massenmarkt existiert (Q-02); Paid-Templates existieren (Q-04); App-Massenmarkt existiert (Q-03, niedrig-mittel) | ext. Information |
| Preis (Test) | 24,99 € inkl. USt (Range 19–29 € im Markttest) | Schätzung |
| Einkaufspreis/COGS | 0 € (Eigenproduktion); Grenzkosten ≈ Zahlungsgebühr | berechnet |
| Versand | entfällt (digitale Bereitstellung) | Fakt |
| Rechtsrisiken | Widerruf digitale Inhalte, Button-Lösung, DSGVO, PAngV, BFSG; KEINE Steuer-/Anlageberatung im Inhalt | s. Phase 7 |
| Retourenrisiko | Erstattungsanfragen trotz Widerrufserlöschen (Kulanzregel nötig) | Hypothese |
| Qualitätsrisiko | Browserkompatibilität, Datenverlust bei localStorage-Löschung (FAQ + Export-Funktion) | bekannt, adressiert |
| Werbewinkel | „Haushaltsbuch, das du nicht abbrichst“ · „Deine Daten bleiben bei dir“ · „Einmal zahlen statt Abo“ | Entwurf Phase 11 |
| Scheiter-Gründe | Gratis-Alternativen reichen den meisten; Zahlungsbereitschaft < 19 €; CAC zu hoch | offen → Markttest |
| Validierungsplan | Phase 15: max. Testbudget lt. A-003, Stop-Regeln definiert | geplant |

## Warum kein zweites separates Testprodukt

Module 2–4 der Shortlist sind als Bundle-Bestandteile integriert. Ein zweites eigenständiges Produkt würde Testbudget (A-003/A-004) splitten, ohne neue Zielgruppen-Erkenntnis zu liefern. Entscheidung revidierbar, falls Markttest Modul-spezifische Nachfrage zeigt.
