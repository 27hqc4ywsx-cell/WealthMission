# Deployment-Plan

**Stand:** 2026-07-11 · Shop-Quellcode: `/shop` (statisch, keine Build-Pipeline nötig)

## Empfohlener Weg (Freigabe erforderlich: Domain-Kosten ~10–15 €/Jahr)

1. Domain registrieren (nach Markenrecherche B-3) — Vorschlag: groschenwerk.de (Verfügbarkeit ungeprüft!)
2. Hosting: GitHub Pages (kostenlos) oder Netlify Free — `/shop` als Site-Root veröffentlichen
3. `shop/assets/config.js`: `paymentLink` (Stripe) eintragen — erst nach B-4
4. 404-Handling: GitHub Pages nutzt `404.html` automatisch
5. HTTPS erzwingen (bei beiden Anbietern Standard)
6. Nach Deploy: Testmatrix O-01–O-05 abarbeiten, erst dann Launch-Freigabe anfragen

## Rollback/Sicherung

- Quellcode versioniert in Git (dieser Branch); jeder Deploy = Commit-Stand → Rollback per Revert
- Produkt-App ist eine einzelne Datei (`shop/app/index.html`) → triviale Wiederherstellung
- Kundendaten liegen NICHT auf dem Server (localStorage beim Kunden) → kein Datenverlustrisiko serverseitig, aber auch keine Wiederherstellung für Kunden möglich (bewusste Architektur, im Produkt kommuniziert)

## Auslieferung der Kaufversion

Kaufversion = `shop/app/index.html` ohne Demo-Banner unter nicht erratbarer URL bzw. als Datei-Anhang der Kauf-E-Mail. **Hinweis (ehrlich dokumentiert):** Bei statischem Hosting ist der Link technisch teilbar — akzeptiertes Restrisiko in der Teststufe; bei Traktion Wechsel auf tokenisierte Auslieferung (z. B. Stripe-native Downloads oder Lemon Squeezy) — als Experiment E im Backlog.
