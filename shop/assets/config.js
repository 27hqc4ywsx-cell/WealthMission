/**
 * Groschenwerk Shop – Konfiguration
 * NUR öffentliche Werte. Keine API-Keys, keine Secrets (Regel 2.5).
 *
 * Aktivierung Zahlung: Nach Freigabe + Stripe-Konto den Payment-Link
 * hier eintragen (siehe /ecommerce-project/08_shop/integrations.md).
 * Solange paymentLink leer ist, läuft der Checkout im Vorschau-Modus
 * und erlaubt KEINE Bestellung.
 */
window.WM_CONFIG = {
  paymentLink: "",        // z. B. "https://buy.stripe.com/..." – leer = Vorschau-Modus
  paypalLink: "",         // Fallback (R-010)
  newsletterEndpoint: "", // DOI-Formular-Endpoint (Brevo o. ä.), leer = Formular deaktiviert
  price: "24,99 €",
  productName: "Groschenwerk Money OS"
};
