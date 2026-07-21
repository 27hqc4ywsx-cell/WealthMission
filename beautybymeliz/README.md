# BeautybyMe1iz – Beauty-Salon Dortmund – Website

Vollständige statische Website für den Beauty-Salon BeautybyMe1iz
(Wimpern, Brows, Extensions). Kein Framework, keine Abhängigkeiten –
direkt lauffähig und leicht in ein CMS übertragbar.

## Ordnerstruktur

```
beautybymeliz/
├── index.html               Startseite mit allen Sektionen
├── css/styles.css           Design-System (Farben, Typografie, Layout)
├── js/script.js             Navigation, Scroll-Animationen, Formular
├── rechtliches/
│   ├── impressum.html       Platzhalter-Gerüst (vor Livegang prüfen!)
│   └── datenschutz.html     Platzhalter-Gerüst (vor Livegang prüfen!)
└── README.md
```

## Website starten

`index.html` doppelklicken – die Seite öffnet sich im Browser.
Kein Server, keine Installation nötig.

## Design-System (Kurzfassung)

- **Farben** (zentral in `css/styles.css` unter `:root`):
  Creme `#FAF6F0`, Warmweiß `#FFFDFA`, Blush `#F4E3DD`, Rosé `#E9C8BF`,
  Nude `#D9BFA9`, Gold `#B08D57`, Dunkelbraun `#2E2015`.
- **Typografie:** Elegante Didone-Serif (Didot/Bodoni-Stack) für
  Überschriften, weiche Sans für Fließtext, gesperrte Gold-Kapitälchen
  als Labels. Kauf-/Webfonts später: nur `--serif` / `--sans` tauschen.
- **Mobile-first:** Basislayout ist einspaltig für Smartphones,
  ab 700 px Breite mehrspaltig.

## Platzhalter, die ersetzt werden müssen

Im Code mit `[PLATZHALTER …]` markiert (einfach danach suchen):

| Stelle | Angabe |
|---|---|
| Kontakt, Footer | Straße/Hausnummer und PLZ in Dortmund |
| Kontakt, Footer | Telefonnummer (als `tel:`-Link) |
| Kontakt, Footer | Instagram-Profil, WhatsApp-Nummer |
| Über den Salon | Foto (4:3) statt Bildplatzhalter |
| Galerie | 5 echte Behandlungsfotos |
| Kontakt | Google-Maps-Einbindung |
| `rechtliches/` | Impressum und Datenschutz (fachlich prüfen lassen!) |

## Echte Inhalte einbauen

**Galerie-Bilder:** In `index.html` innerhalb jeder `figure.gallery-tile`
ein Bild ergänzen und die Verlaufsklasse (`tile-1` … `tile-5`) sowie den
Hinweis-Badge entfernen:

```html
<figure class="gallery-tile reveal">
  <img src="bilder/volumenlook.jpg" alt="Volumen-Wimpernverlängerung, Ergebnis nach der Behandlung"
       style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;" />
  <figcaption class="tile-label">Volumenlook</figcaption>
</figure>
```

Empfehlung: eigene Handy-Aufnahmen bei Tageslicht, einheitlicher
Bildausschnitt (Augenpartie), Hochformat 4:5 – das wirkt hochwertiger als
Stock-Material und ist zugleich Instagram-tauglich.

**Instagram-Link:** Platzhalter durch
`<a href="https://instagram.com/DEIN_PROFIL">@dein_profil</a>` ersetzen.

**WhatsApp-Button:** Link im Format
`https://wa.me/49XXXXXXXXXXX?text=Hallo%2C%20ich%20m%C3%B6chte%20einen%20Termin%20anfragen`
(Ländervorwahl ohne führende 0). Kann zusätzlich als Button in den
Hero gesetzt werden.

**Google Maps:** Nach Festlegen der Adresse entweder eine
Zwei-Klick-Lösung (datenschutzfreundlich, empfohlen) oder das
Standard-Embed-iframe von Google Maps in den `map-placeholder`-Block
einsetzen; Datenschutzerklärung entsprechend ergänzen.

**Formularversand:** `js/script.js` zeigt derzeit nur die
Erfolgsmeldung im Frontend. Für den Produktivbetrieb einen
Formulardienst oder ein kleines Backend anbinden und die Meldung erst
nach erfolgreicher Übertragung anzeigen (Kommentar im Code).

## Bildideen (wenn fotografiert wird)

Nahaufnahmen geschlossener Augen mit frisch gestylten Wimpern, Brow-Detail
nach dem Lifting, Arbeitsplatz mit sauber angeordneten Tools, warme
Detailaufnahmen (Handtücher, Produkte, Licht), dezente Salonatmosphäre.
Vermeiden: künstlich wirkende Model-Stockfotos, harte Blitzfotos,
überladene Collagen.

## Barrierearmut

Semantisches HTML, per Tastatur bedienbar, sichtbare Fokus-Zustände,
beschriftete Formularfelder mit verständlichen deutschen Fehlermeldungen
(`aria-describedby`), Animationen respektieren `prefers-reduced-motion`,
Inhalte bleiben ohne JavaScript vollständig sichtbar.
