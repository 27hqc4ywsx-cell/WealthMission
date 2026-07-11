# Phase 6: Unit Economics & Szenarien – „WealthMission Money OS“

**Stand:** 2026-07-11 · **Agent 5** · Alle Werte in EUR. **Kategorie je Zeile gekennzeichnet.** Steuerannahme: Regelbesteuerung 19 % USt (A-007 offen → falls Kleinunternehmer §19 UStG, verschieben sich Nettowerte; beide Varianten unten).

## Kosten pro Verkauf (Testpreis 24,99 € brutto)

| Position | Wert | Kategorie |
|---|---|---|
| Verkaufspreis brutto | 24,99 | festgelegt (Test) |
| ./. USt 19 % | −3,99 | berechnet |
| Nettoerlös | 21,00 | berechnet |
| ./. Zahlungsgebühr (Stripe ~1,5 % + 0,25 €, Q-01) | −0,62 | berechnet aus ext. Quelle |
| ./. Auslieferung/Hosting anteilig | −0,10 | Schätzung (statisch, minimal) |
| ./. Erstattungs-/Kulanzpuffer (5 % der Verkäufe) | −1,05 | Schätzung (konservativ) |
| **Deckungsbeitrag 1 (DB1)** | **≈ 19,23** | berechnet |
| DB1-Marge auf netto | ≈ 92 % | berechnet |

Kleinunternehmer-Variante (§19 UStG): Nettoerlös = 24,99 → DB1 ≈ 23,05. **Hinweis: Statuswahl mit Steuerberater klären (professional-review-required.md).**

## Fixkosten/Monat (Schätzungen, minimal-Setup)

| Position | konservativ | Anmerkung |
|---|---|---|
| Hosting/Domain | 5 | statische Seite + Domain anteilig |
| E-Mail-Tool (Auslieferung/Flows) | 0–15 | Gratis-Tarife anfangs möglich |
| Software/Sonstiges | 10 | Puffer |
| **Summe Fixkosten** | **≈ 30** | Schätzung |

## Break-even-Kennzahlen

| Kennzahl | Wert | Rechnung |
|---|---|---|
| Break-even-CAC (max. Werbekosten je Kunde) | ≈ 19 € | = DB1 |
| Ziel-CAC (Marge 50 % von DB1) | ≈ 9,60 € | konservatives Ziel |
| Break-even-ROAS | ≈ 1,30 | Bruttopreis / DB1 = 24,99/19,23 |
| Ziel-ROAS | ≈ 2,60 | bei Ziel-CAC |
| Fixkosten-Break-even | 2 Verkäufe/Monat | 30 / 19,23 |
| Nötige Conversion bei 2 € CPC und Ziel-CAC | ≈ 21 % Klick→Kauf unrealistisch → | organischer Traffic + Landing-Funnel nötig; bei 1 € CPC: ~10 %, immer noch hoch → **Werbe-Direktkauf allein trägt nicht; E-Mail-Funnel (Gratis-Modul als Lead-Magnet) eingeplant** | berechnet/Schlussfolgerung |

## Szenarien (Monat 3 nach Launch, Werbebudget lt. A-004: 500 €)

| Szenario | Verkäufe/Monat | CAC | Umsatz brutto | DB1 gesamt | ./. Fixkosten | Ergebnis |
|---|---|---|---|---|---|---|
| Konservativ | 15 | 20 € (nur bezahlt: 25 Kontakte) | 375 | 288 | −30 | **−42 € inkl. 300 € Adspend** → Detail: 288 − 30 − 300 = −42 |
| Realistisch | 40 (Mix: 20 paid, 20 organisch/E-Mail) | blended 12,50 € | 1.000 | 769 | −30 | **+239 €** |
| Optimistisch | 100 (Content-Traktion) | blended 8 € | 2.499 | 1.923 | −30 | **+1.093 €** |

## Stresstest

| Stressfaktor | Wirkung | Überlebensfähig? |
|---|---|---|
| Werbekosten +20 % | Konservativ: −102 €/Monat | Ja – unter Verlustbudget A-003 (≤1.500 € ≈ >12 Monate Puffer) |
| Erstattungsquote 10 % statt 5 % | DB1 → 18,18 € | Ja |
| Conversion −30 % | Stop-Regel Phase 15 greift vor Budgetschaden | Ja per Regel |
| Zahlungsanbieter-Sperrung | Umsatz 0 bis Zweitanbieter aktiv | Fallback PayPal dokumentiert |
| Preisdruck auf 14,99 € | DB1 ≈ 11,25 € → Ziel-CAC 5,60 € | kritisch → Preis ist Test-Variable, nicht Rabatt-Hebel |

## Urteil Agent 5

Produkt ist **strukturell tragfähig** (keine Kapitalbindung, Verlust im Worst Case durch Stop-Regeln auf Testbudget begrenzt). **Nicht tragfähig als reines Paid-Ads-Produkt** – Profitabilität hängt am organischen/E-Mail-Anteil. Diese Abhängigkeit ist als R-018 ins Risikoregister aufgenommen. CLV-Aufbau (Folgeprodukte, Abo-Upgrade) ab Phase 16.
