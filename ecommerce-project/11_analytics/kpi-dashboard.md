# KPI-Dashboard (Definitionen)

**Stand:** 2026-07-11 · Live-Werkzeug: **`shop/backoffice/index.html`** (lokales Controlling-Cockpit). Rhythmus: täglich Kurzblick (Bestellungen/Support), wöchentlich Steuerung, monatlich Geschäftsübersicht.

## Wöchentliche Steuerungs-KPIs

| KPI | Formel | Ziel | Alarm |
|---|---|---|---|
| Verkäufe | Anzahl bezahlt − erstattet | Wachstum | 0 über 14 Tage (nach Launch) |
| Umsatz brutto | Σ Bestellwerte | lt. Cashflow-Plan | −30 % vs. Plan |
| DB1 gesamt | Verkäufe × 19,23 € (Regelbest.) | > Fixkosten + Adspend | 2 Wochen negativ |
| Blended CAC | Marketingkosten / Neukunden | ≤ 9,60 € | > 19,23 € (Break-even) |
| Erstattungsquote | erstattet / verkauft (rollierend 30 T.) | < 5 % | > 10 % |
| E-Mail→Kauf (H3) | Käufe aus W-Serie / DOI-Leads | ≥ 3 % | < 1 % |

## Monatliche Geschäftsübersicht (Cockpit-Bericht)

Umsatz · USt-Anteil · Gebühren · Adspend · Fixkosten · Betriebsausgaben · **Ergebnis** · kumulierter Cashflow vs. Plan (cashflow-plan.md) · Verlustbudget-Verbrauch (A-003-Ampel: grün < 50 %, gelb < 80 %, rot ≥ 80 % = Stop-Trigger aus goals.md).

## Regel

Nie auf eine Einzel-KPI optimieren (insb. nicht ROAS/Umsatz) — Entscheidungsbasis ist immer das Tripel **Ergebnis + Erstattungsquote + Cash-Reichweite**.
