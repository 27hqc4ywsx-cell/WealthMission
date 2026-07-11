# Bug-Liste

**Stand:** 2026-07-11 · Prozess: Jeder Kundenbericht (SOP-CS-2/R2/R3) und interne Fund landet hier. Priorität: kritisch (Datenverlust/Kauf blockiert) · hoch (Funktion defekt) · mittel (Darstellung) · niedrig (kosmetisch).

| ID | Datum | Fund | Priorität | Status | Fix |
|---|---|---|---|---|---|
| BUG-001 | 2026-07-11 | QA-Skript füllte Formularfeld vor Tab-Wechsel (Testfehler, kein Produktfehler) | – | geschlossen | Testskript korrigiert |
| – | – | Keine offenen Produkt-Bugs (25 automatisierte Assertions grün, 13 Seiten + App + Backoffice) | – | – | – |

## Bekannte Einschränkungen (by design, dokumentiert, keine Bugs)

1. Kein Multi-Geräte-Sync (Export/Import als Weg) — Produktseite „Ehrliche Grenzen“
2. Datenverlust bei Browserdaten-Löschung ohne Backup — Backup-Banner + FAQ
3. Safari/Firefox nur per Code-Review geprüft, nicht real (O-04, nach Hosting)
