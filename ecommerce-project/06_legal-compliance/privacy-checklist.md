# Datenschutz-Checkliste (DSGVO)

**Stand:** 2026-07-11 · Keine Rechtsberatung; finale Prüfung durch Anwalt/DSB (B-2).

## Architektur-Vorteil (by design)

Produkt speichert Nutzerdaten ausschließlich lokal beim Nutzer (localStorage, kein Server, kein Konto) ⇒ für die App selbst findet KEINE Verarbeitung personenbezogener Daten durch uns statt. Verbleibende Verarbeitungen betreffen nur Website-Betrieb und Kaufabwicklung.

| # | Verarbeitung | Rechtsgrundlage (Entwurf) | AVV nötig? | Status |
|---|---|---|---|---|
| P-1 | Hosting/Server-Logs | Art. 6 (1) f | ja, mit Hoster | wartet auf B-5 |
| P-2 | Zahlungsabwicklung (Stripe/PayPal) | Art. 6 (1) b | Prüfen: eigenständig Verantwortliche + ggf. Zusatzvereinbarung; Drittlandtransfer-Garantien prüfen | wartet auf B-4 |
| P-3 | Kauf-/Auslieferungs-E-Mail | Art. 6 (1) b | ja, mit E-Mail-Anbieter (EU-Server bevorzugt) | wartet auf B-6 |
| P-4 | Newsletter (Lead-Magnet) | Art. 6 (1) a + §7 UWG, Double-Opt-in | ja | geplant |
| P-5 | Support-Anfragen | Art. 6 (1) b/f | – | Prozess in customer-service-process.md |
| P-6 | Tracking/Analytics | derzeit KEINES (kein Banner nötig); bei Einführung: Einwilligung (TDDDG/DSGVO) + Consent-Tool | – | dokumentiert |

## Betroffenenrechte-Prozesse (SOPs in /10_operations)

Auskunft/Löschung: Umfang ist klein (Bestell- und E-Mail-Daten); Antwortfrist 1 Monat; Löschkonflikt mit steuerlichen Aufbewahrungspflichten beachten (Sperrung statt Löschung für Buchhaltungsdaten). Verzeichnis von Verarbeitungstätigkeiten (VVT): aus obiger Tabelle ableiten, sobald Anbieter final (B-4/B-5/B-6).
