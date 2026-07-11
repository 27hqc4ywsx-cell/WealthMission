# Phase 14: Testprotokoll

**Stand:** 2026-07-11 · **Agent 14 (QA)** · Testumgebung: Chromium (Playwright), Viewports 390×844 (mobil) und 1280×900 (Desktop), Auslieferung via file:// (statisch, identisch zu Hosting-Auslieferung). Nachweise in `evidence/`.

## Automatisierte Tests (ausgeführt 2026-07-11)

| ID | Testfall | Schritte | Erwartet | Ergebnis | Status |
|---|---|---|---|---|---|
| T-01 | Smoke: alle 13 Seiten laden | 12 Shopseiten + App laden, JS-/Konsolenfehler sammeln | 0 Fehler, korrekte Titel/H1 | 13/13 Seiten, **0 Fehler** | ✅ bestanden |
| T-02 | Haushaltsbuch: Ausgabe erfassen | Tab „Buch“, 42,50 € Lebensmittel + Notiz speichern | Eintrag in Liste, −42,50 € formatiert | „Lebensmittel · QA-Testeinkauf · −42,50 €“ | ✅ |
| T-03 | Sparziel + Einzahlung | Ziel „Notgroschen“ 1.000 € anlegen, 250 € einzahlen | Fortschritt 25 % | „250,00 € von 1.000,00 € · 25 %“ | ✅ |
| T-04 | 52-Wochen-Challenge | Woche 1 + 2 abhaken | Gespart = 3 €, Zähler 2/52 | „3 €“ | ✅ |
| T-05 | Vermögens-Snapshot | 5.000 € Vermögen / 1.200 € Schulden speichern | Netto 3.800 € | „3.800,00 €“ | ✅ |
| T-06 | Gamification | Aktionen aus T-02–T-05 ausführen | XP kumulieren, Level steigt, Streak startet | 100 XP, Level 2 „Sparfuchs-Anwärter“, Streak 1 | ✅ |
| T-07 | Persistenz | Seite neu laden | Daten und XP unverändert | 100 XP, 1 Transaktion nach Reload | ✅ |
| T-08 | Monatsübersicht | Übersicht nach T-02 | Ausgaben 42,50 €, Saldo negativ rot | korrekt | ✅ |
| T-09 | Checkout-Schutz (Vorschau-Modus) | kasse.html ohne konfigurierten Payment-Link | Kaufbutton deaktiviert + roter Hinweis sichtbar | Button `disabled`, Hinweis angezeigt | ✅ |
| T-10 | Mobile Darstellung | Screenshots 390 px | kein horizontales Scrollen, lesbar | evidence/app-uebersicht-mobil.png, shop-start-mobil.png | ✅ |
| T-11 | Desktop Darstellung | Screenshot 1280 px | Layout 2-spaltig, Nav vollständig | evidence/shop-start-desktop.png | ✅ |

## Backoffice-Cockpit (Buchhaltung/Controlling, ausgeführt 2026-07-11)

| ID | Testfall | Erwartet | Ergebnis | Status |
|---|---|---|---|---|
| T-12 | Bestellung erfassen + Erstattung markieren | KPI: 1 Verkauf, 1 Erstattung | korrekt | ✅ |
| T-13 | DB1-Berechnung mit Erstattungsgebühr | 21,00−0,62−0,10−0,62 = 19,66 € | 19,66 € | ✅ |
| T-14 | Ausgaben (Adspend 100 + Fix 30) → Monatsergebnis | 19,66 − 130 = −110,34 € | −110,34 € | ✅ |
| T-15 | Blended CAC | 100 € / 1 Verkauf | 100,00 € | ✅ |
| T-16 | Verlustbudget-Ampel | 110/1500 ≈ 7 %, grün | 7 % | ✅ |
| T-17 | Persistenz nach Reload | 2 Bestellungen, 2 Ausgaben, 1 Erstattung | korrekt | ✅ |
| T-18 | USt-Herausrechnung (19 %) | 3,99 € je 24,99 € | 3,99 € | ✅ |

## Manuell geprüft (Code-Review durch Agent 14)

| ID | Prüfpunkt | Ergebnis |
|---|---|---|
| M-01 | Button-Lösung: „Zahlungspflichtig bestellen“ + Pflichtinfos am Button | ✅ umgesetzt |
| M-02 | Widerrufs-Erlöschens-Checkbox separat und vorausgewählt = NEIN (nicht vorangekreuzt) | ✅ |
| M-03 | Preis inkl. MwSt. an allen Kaufstellen | ✅ |
| M-04 | Keine erfundenen Bewertungen/Siegel/Zahlen im Shop | ✅ (explizit gegenteilig kommuniziert) |
| M-05 | Kein Tracking, keine Cookies, keine externen Requests (CSS/JS lokal) | ✅ |
| M-06 | XSS: Nutzereingaben in der App werden escaped (esc()) | ✅ |
| M-07 | Rechtsseiten tragen ENTWURF-Warnbanner + noindex | ✅ |
| M-08 | Tastaturbedienung: Fokus-Stile, Skip-Link, role/aria auf Tabs/Wochen | ✅ (vertieftes Audit vor Launch empfohlen) |

## Offene Testfälle (erst nach Aktivierung möglich)

| ID | Testfall | Blockiert durch |
|---|---|---|
| O-01 | Echte Testbestellung inkl. Zahlung | Stripe/PayPal-Konto (Freigabe) |
| O-02 | Auslieferungs-E-Mail + Rechnung | Zahlungsanbieter + E-Mail-Tool |
| O-03 | Teststornierung/-erstattung | dito |
| O-04 | Browser-Matrix Safari/Firefox real | Hosting-URL (file:// nur Chromium getestet) |
| O-05 | Ladezeit-Messung unter realem Hosting | Hosting |
