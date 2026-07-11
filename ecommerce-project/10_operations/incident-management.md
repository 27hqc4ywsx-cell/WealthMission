# SOP: Incident-Management

**Stand:** 2026-07-11 · Jeder Vorfall wird hier mit Datum, Dauer, Ursache, Maßnahme nachgetragen (bisher: keine).

## IM-1 Shop/Produkt nicht erreichbar

Erkennung: eigener Check oder Kundenmeldung. 1) Hoster-Status prüfen · 2) > 4 h Ausfall: Hinweis auf Social-Kanal, Kaufversuche vermeiden (paymentLink temporär leeren) · 3) nach Wiederherstellung: Testbestellung · 4) bei Hoster-Wiederholungsfall: Anbieterwechsel lt. deployment-plan

## IM-2 Zahlungsanbieter-Sperrung/Störung (R-010)

1) Ursache bei Stripe erfragen · 2) PayPal-Fallback in config.js aktivieren · 3) offene Auszahlungen dokumentieren · 4) Ursachenanalyse (Chargebacks? Policy?) vor Wiederaktivierung

## IM-3 Datenschutzvorfall (z. B. Support-Postfach kompromittiert)

1) Zugriff stoppen (Passwörter rotieren) · 2) Umfang feststellen (welche personenbezogenen Daten betroffen?) · 3) **72-h-Meldepflicht an Aufsichtsbehörde prüfen — im Zweifel anwaltlich, sofort** · 4) Betroffene informieren, falls hohes Risiko · 5) Post-Mortem hier dokumentieren

## IM-4 Kritischer Produkt-Bug (Datenverlust beim Kunden)

1) Reproduzieren, Hotfix priorisieren vor allem anderen · 2) FAQ-/Banner-Warnung, falls Workaround existiert · 3) Betroffene kulant behandeln (SOP-R2) · 4) Update ausliefern + Bug-Post-Mortem in bug-list.md

## IM-5 Abmahnung/Rechtsschreiben

KEINE eigenständige Antwort. Sofort an Auftraggeber → Anwalt. Fristen notieren. Nichts löschen (Beweissicherung).
