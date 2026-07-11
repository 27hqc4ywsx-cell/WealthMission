# Informationsarchitektur

**Stand:** 2026-07-11 · Implementiert; Struktur = flach (1 Produkt), maximal 2 Klicks zu jeder Information.

```
shop/
├── index.html          Start: Hook → Problem → Module → Privacy-Beweis → CTA
├── produkt.html        Details: Features, Ablauf, Technik-Tabelle, EHRLICHE GRENZEN, CTA
├── kasse.html          Checkout: Zusammenfassung, AGB-/Widerrufs-Checkboxen, Kaufbutton (Button-Lösung)
├── danke.html          Bestellbestätigung + nächste Schritte
├── faq.html            Hilfe: Kauf, Daten, Technik, Widerruf
├── ueber-uns.html      Transparenz/Werte
├── kontakt.html        Support-Weg + Erwartungsmanagement (24 h werktags)
├── impressum/datenschutz/agb/widerruf.html   Rechtsbereich (ENTWURF-Banner bis B-2)
├── 404.html            Fehlerseite mit Rückweg
└── app/index.html      PRODUKT (Demo öffentlich; Kaufversion = Auslieferung ohne Demo-Banner)
```

## Nutzerpfade (designte Journeys)

1. **Kaufpfad:** Start → (Produkt) → Kasse → Zahlungsanbieter → danke.html — max. 3 Schritte bis Checkout
2. **Skeptiker-Pfad:** Start → Demo (ohne E-Mail-Zwang!) → Produkt („Ehrliche Grenzen“) → Kasse — Demo ist Conversion-Werkzeug UND Erstattungs-Prophylaxe
3. **Support-Pfad:** jede Seite → FAQ → Kontakt (FAQ fängt Standardfälle ab)

Navigation identisch auf allen Seiten (Header 5 Links + CTA, Footer 3 Spalten inkl. komplettem Rechtsbereich). Kasse ohne Kauf-CTA im Header (Fokus).
