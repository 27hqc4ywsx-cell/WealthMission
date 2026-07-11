# SOP: Bestellprozesse

**Stand:** 2026-07-11 · Automationsgrad hoch (digitales Produkt); manuelle Schritte im Backoffice-Cockpit dokumentiert.

## SOP-01 Neue bezahlte Bestellung (Normalfall)

Auslöser: Stripe-Zahlung erfolgreich → **Automatisch:** Weiterleitung danke.html, Auslieferungs-Mail (K1: Zugang + Rechnung). **Manuell (≤ 24 h werktags):** Eintrag im Backoffice-Cockpit (Bestellungen: Datum, brutto, Kanal) — bis eine automatische Übernahme eingerichtet ist. Qualitätskontrolle: wöchentlicher Abgleich Cockpit ↔ Stripe-Dashboard (Stückzahl + Summe müssen exakt stimmen).

## SOP-02 Zahlung fehlgeschlagen/abgebrochen

Auslöser: Kunde meldet sich ODER Stripe zeigt abgebrochene Session. Aktion: KEINE Nachfass-Mail ohne Einwilligung (kein Konto = keine legitime Kontaktbasis). Nur reaktiv: FAQ-Verweis, alternative Zahlart (PayPal-Fallback) anbieten. Max. Bearbeitungszeit: 24 h werktags.

## SOP-03 Verdacht auf Betrug/Missbrauch

Auslöser: Stripe-Radar-Warnung, ungewöhnliche Häufung gleicher Karte/IP. Aktion: Auslieferung NICHT manuell wiederholen; Stripe-Empfehlung folgen; bei bestätigtem Betrug Erstattung/Storno über Stripe, Vorfall in incident-management dokumentieren. Eskalation an Auftraggeber ab 3 Fällen/Woche.

## SOP-04 Chargeback

Auslöser: Chargeback-Notification. Schritte: 1) im Cockpit als Erstattung + Gebühr erfassen · 2) Beweise einreichen (Bestellbestätigung, Bereitstellungs-Log, Widerrufs-Checkbox-Zustimmung) via Stripe · 3) Ergebnis dokumentieren. Frist: Stripe-Deadline maßgeblich. KPI: Chargeback-Quote < 0,5 % (darüber: Zahlungsanbieter-Sperrgefahr R-010 → sofortige Ursachenanalyse).

## SOP-05 Kunde hat E-Mail nicht erhalten

1) Spam-Hinweis (steht auf danke.html) · 2) Zahlungsnachweis erfragen (Stripe-Belegnummer) · 3) manuell ausliefern · 4) Ursache prüfen (Zustellbarkeit). Max. 24 h werktags.
