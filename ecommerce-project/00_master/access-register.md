# Zugriffsregister

Dokumentiert jeden externen Zugriff, jedes Konto und jede Berechtigung (Minimalprinzip). Keine Passwörter, API-Schlüssel oder Zahlungsdaten in diesem Repo – nur Referenzen auf sichere Speicherorte (Umgebungsvariablen / Secret-Store).

## Vorhandene Zugriffe (dieser Arbeitsumgebung)

| Zugriff | Zweck | Umfang | Status |
|---|---|---|---|
| Git-Repository `27hqc4ywsx-cell/WealthMission` | Projektdokumentation & Code | Lesen/Schreiben auf Branch `claude/ecommerce-agent-system-fq0n6a` | aktiv |
| Web-Recherche (Suche/Abruf) | Markt-, Rechts-, Plattformrecherche mit Quellendokumentation | lesend | aktiv |

## Fehlende Zugriffe (werden erst bei Bedarf und minimal angefordert)

| Zugriff | Benötigt ab Phase | Zweck | Status |
|---|---|---|---|
| Shopplattform-Konto (z. B. Shopify/WooCommerce-Hosting) | 9 | Shopaufbau | wartet auf Zugriff |
| Zahlungsanbieter (PayPal/Stripe o. Ä.) | 10 | Checkout-Zahlungen | wartet auf Zugriff |
| Werbekonten (Meta/TikTok/Google) | 15 | Markttest | wartet auf Zugriff |
| E-Mail-Marketing-Tool | 10/11 | Automationen | wartet auf Zugriff |
| Domain-Registrar | 8/9 | Domain | wartet auf Zugriff |
