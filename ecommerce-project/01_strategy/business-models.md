# Phase 1: Geschäftsmodell-Auswahl

**Stand:** 2026-07-11 · **Verantwortlich:** Agent 1 (CSO) · **Status:** abgeschlossen
**Entscheidungsgrundlage:** Mandat des Auftraggebers („so, wie Du es am sinnvollsten erachtest“, 2026-07-11, → D-003) + konservative Default-Annahmen A-002…A-011.

## Bewertungsmethode

10 Modelle, 13 Kriterien, Skala 1 (schlecht) – 5 (sehr gut). Gewichtung nach Budgetlage (A-002: ≤3.000 €, A-003: ≤1.500 € Verlustbudget) und Umsetzbarkeit in dieser Arbeitsumgebung (kein physischer Warenzugriff, keine Lagerbereitschaft lt. A-009). **Kategorie: berechneter Wert auf Basis strukturell bekannter Modelleigenschaften; keine Marktzahlen erfunden.**

Gewichte: Startkapital 15 % · Marge 10 % · Qualitätskontrolle 10 % · Liefergeschwindigkeit 5 % · Retourenrisiko 10 % · Rechtsrisiko 15 % · Skalierbarkeit 5 % · Cashflow 10 % · Automatisierbarkeit 5 % · Markenpotenzial 5 % · Kundenbindung 3 % · Wettbewerb 2 % · operative Komplexität 5 %

## Entscheidungsmatrix (gewichtete Gesamtscores)

| Modell | Startkap. | Marge | Qualität | Liefer. | Retouren | Recht | Skalier. | Cashflow | Autom. | Marke | Bindung | Wettbew. | Komplexität | **Score** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Digitale Produkte** | 5 | 5 | 5 | 5 | 5 | 4 | 5 | 5 | 5 | 4 | 3 | 2 | 5 | **4,63** |
| Abonnement (digital) | 4 | 5 | 5 | 5 | 4 | 3 | 5 | 5 | 4 | 4 | 5 | 3 | 3 | 4,29 |
| Hybrid (digital + POD später) | 4 | 4 | 4 | 4 | 4 | 3 | 5 | 4 | 4 | 4 | 4 | 3 | 3 | 3,88 |
| Print-on-Demand | 5 | 2 | 2 | 3 | 3 | 3 | 4 | 4 | 5 | 3 | 2 | 2 | 4 | 3,33 |
| Dropshipping EU-Lager | 4 | 2 | 2 | 4 | 3 | 3 | 4 | 4 | 4 | 2 | 2 | 2 | 3 | 3,05 |
| Kleiner Eigenbestand | 2 | 3 | 4 | 5 | 3 | 3 | 3 | 2 | 2 | 3 | 3 | 3 | 2 | 2,88 |
| Private Label | 1 | 4 | 4 | 3 | 3 | 2 | 4 | 1 | 3 | 5 | 4 | 3 | 1 | 2,66 |
| White Label | 2 | 3 | 3 | 3 | 3 | 2 | 4 | 2 | 3 | 3 | 3 | 2 | 2 | 2,64 |
| Klass. Dropshipping (Übersee) | 5 | 2 | 1 | 1 | 2 | 2 | 3 | 4 | 4 | 1 | 1 | 1 | 3 | 2,49 |
| Großhandel | 1 | 3 | 4 | 4 | 3 | 3 | 3 | 1 | 2 | 2 | 2 | 2 | 2 | 2,44 |

## Begründung der Spitzenwertung „Digitale Produkte“

1. **Startkapital/Verlustbudget:** Keine Wareneinsatzkosten, keine Kapitalbindung, kein Bestandsrisiko → passt als einziges Modell vollständig in A-002/A-003.
2. **Rechtsrisiko beherrschbar:** GPSR, CE, LUCID/VerpackG, Textil-/Spielzeug-/KosmetikR **nicht anwendbar** (kein physisches Produkt, kein Warenversand). Verbleibende Pflichten (Impressum, Widerruf bei digitalen Inhalten, Button-Lösung, DSGVO, PAngV, Barrierefreiheit) sind dokumentierbar → Phase 7.
3. **Lieferkette:** Kein Lieferant, kein Muster-, Ausfall- oder Verzögerungsrisiko (R-005, R-014 entfallen strukturell).
4. **Marge:** Nach Zahlungsgebühren (Stripe DE: ca. 1,4–1,5 % + 0,25 € EU-Karten; Quelle Q-01, abgerufen 2026-07-11) verbleiben >90 % Deckungsbeitrag 1.
5. **Umsetzbarkeit hier:** Produkt UND Shop können in dieser Umgebung vollständig gebaut, getestet und dokumentiert werden → erfüllt das Ziel „fertiges Produkt am Ende“.

**Schwächen (ehrlich):** starker Gratis-Wettbewerb (kostenloses Finanzfluss-Haushaltsbuch, Q-02), hohe Kopierbarkeit, begrenzte Bindung bei Einmalkauf. Gegenmaßnahmen: Differenzierung (Interaktivität, Gamification, Privacy-first ohne Bankzugang), Bundle-Struktur, Skalierungspfad Richtung Abo/Hybrid (Plätze 2–3 der Matrix).

## Entscheidung

→ **D-004: Geschäftsmodell = digitale Produkte** (Einmalkauf, DE-Markt), Skalierungsoption Abo/Hybrid ab Phase 16. Verworfen: alle physischen Modelle (Kapital-, Rechts- und Lieferkettenrisiko unvereinbar mit konservativem Profil und Umgebungsbeschränkungen).
