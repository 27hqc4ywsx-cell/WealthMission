# Steuer- & Buchhaltungs-Checkliste

**Stand:** 2026-07-11 · **Recherchestand, KEINE Steuerberatung – alle Punkte mit Steuerberater durchgehen (B-1).**

## Einrichtung (vor erstem Verkauf)

| # | Punkt | Handlung | Status |
|---|---|---|---|
| S-1 | Gewerbeanmeldung | Gemeinde/Online; Tätigkeit „Verkauf digitaler Produkte“ | offen (Auftraggeber) |
| S-2 | Fragebogen zur steuerlichen Erfassung | ELSTER; Steuernummer beantragen | offen |
| S-3 | §19 UStG vs. Regelbesteuerung | Entscheidung mit StB; wirkt auf Preise, Rechnungen, Impressum, Unit Economics (beide Varianten in unit-economics.md gerechnet) | offen |
| S-4 | Geschäftskonto | getrennt vom Privatkonto (GoBD-Sauberkeit, Stripe-Auszahlungsziel) | empfohlen |
| S-5 | OSS-Verfahren | NUR relevant bei B2C-Verkauf in andere EU-Länder über 10.000 €/Jahr Schwelle (digitale Leistung!); Start: nur DE vermarkten, vor AT/CH-Expansion klären | dokumentiert |

## Laufend (System installiert)

| # | Punkt | Werkzeug/Prozess |
|---|---|---|
| L-1 | Einnahmenerfassung je Verkauf (Datum, brutto, USt, Gebühr) | **Backoffice-Cockpit** → CSV-Export für StB; Quelle: Stripe-Dashboard-Abgleich |
| L-2 | Ausgabenerfassung mit Beleg | Backoffice-Cockpit + Belegablage (digital, GoBD: unveränderbar archivieren – Cockpit ersetzt NICHT die Belegpflicht) |
| L-3 | Rechnungsstellung an Käufer | Pflichtangaben §14 UStG; via Stripe-Rechnungsfunktion ODER Rechnungstool – Entscheidung bei B-4 |
| L-4 | USt-Voranmeldung | Rhythmus legt Finanzamt fest; Fristen in Kalender |
| L-5 | EÜR (Anlage EÜR) jährlich | CSV-Exporte + Belege an StB |
| L-6 | Aufbewahrung | 8 Jahre Buchungsbelege / 10 Jahre je nach Dokumenttyp (Fristen mit StB verifizieren) |
| L-7 | Erstattungen/Chargebacks | im Cockpit als negative Einnahme mit Referenz erfassen |

## Nicht anwendbar (begründet)

Einfuhrumsatzsteuer/Zoll (kein Import), Verbrauchsteuern, Lagerbuchführung (kein Bestand).
