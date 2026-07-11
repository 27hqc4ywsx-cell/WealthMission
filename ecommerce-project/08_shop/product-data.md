# Produktdaten (Stammdaten)

**Stand:** 2026-07-11 · Single Source of Truth für Shop, Zahlungsanbieter-Konfiguration und Buchhaltung.

| Feld | Wert |
|---|---|
| SKU | GW-MOS-001 |
| Produktname | Groschenwerk Money OS |
| Typ | Digitales Produkt (Web-App, Bereitstellung per Zugangslink) |
| Preis brutto | 24,99 € |
| USt | 19 % (Regelbesteuerung; §19-Alternative s. tax-checklist S-3) |
| Netto | 21,00 € |
| Lieferzeit | unmittelbar nach Zahlungseingang |
| Lizenz | privat, eigene Geräte, nicht übertragbar (AGB §6) |
| Updates | Jahr 1 inklusive |
| Sprache | Deutsch |
| Systemvoraussetzung | moderner Browser; offline-fähig nach Erstabruf |
| Datenhaltung | ausschließlich lokal beim Kunden (localStorage), Export/Import JSON |
| Widerruf | 14 Tage; Erlöschen bei sofortiger Bereitstellung mit Doppel-Zustimmung (Checkout) |
| Stripe-Konfiguration (bei B-4) | Product „Groschenwerk Money OS“, Price 24,99 € inkl. Steuer, Success-URL → /danke.html |

**Pflegeregel:** Preis-/Feature-Änderungen zuerst hier, dann synchron in `shop/assets/config.js`, produkt.html, kasse.html, Zahlungsanbieter und Unit Economics (Checkliste in configuration-guide.md).
