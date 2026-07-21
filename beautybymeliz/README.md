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

## Bilder einbauen – so einfach wie möglich

Die Seite ist für 7 Fotos vorbereitet. Es reicht, die Dateien unter den
folgenden Namen in den Ordner `bilder/` zu legen – sie erscheinen dann
automatisch in den Bogenrahmen. Fehlt eine Datei, bleibt der elegante
Farbverlauf als gestalteter Zustand stehen (kein kaputtes Bild-Icon).

| Dateiname | Motiv | Format |
|---|---|---|
| `bilder/hero.jpg` | Nahaufnahme Auge/Wimpern (geschlossenes Lid wirkt am edelsten) | Hochformat 4:5 |
| `bilder/salon.jpg` | Salon-/Arbeitsdetail, warme Materialien | Hochformat 3:4 |
| `bilder/galerie-1.jpg` | Wimpernverlängerung, klassisch | Hochformat 3:4 |
| `bilder/galerie-2.jpg` | Volumenlook | Hochformat 3:4 |
| `bilder/galerie-3.jpg` | Naturlook | Hochformat 3:4 |
| `bilder/galerie-4.jpg` | Wimpernlifting | Hochformat 3:4 |
| `bilder/galerie-5.jpg` | Browlifting / Brow-Detail | Hochformat 3:4 |

### Kostenlose, legale Stockfotos finden

**Lizenz:** Fotos von Unsplash und Pexels dürfen kostenlos privat und
kommerziell genutzt werden, ohne Namensnennung (diese ist aber eine
schöne Geste). Nicht erlaubt ist im Wesentlichen nur der Weiterverkauf
der unveränderten Fotos. Details: unsplash.com/license bzw.
pexels.com/license. Wichtig bei erkennbaren Personen/Augenpartien:
seriöse Plattformen wie diese beiden verwenden; keine Bilder aus
Google-Suche oder Instagram übernehmen.

**Suchlinks** (direkt anklickbar):

- Hero + Galerie 1–3: https://unsplash.com/s/photos/eyelash-extensions
  und https://www.pexels.com/search/eyelash%20extensions/
- Wimpernlifting: https://www.pexels.com/search/lash%20lift/
- Browlifting: https://unsplash.com/s/photos/eyebrow-lamination
  und https://www.pexels.com/search/eyebrows%20closeup/
- Salonbild: https://unsplash.com/s/photos/beauty-salon-interior
  (Filter: helle, warme Räume)

**Auswahlkriterien, damit alles zur Seite passt:**

1. Warme, helle Töne (Creme, Beige, Rosé, Haut) – keine kalten Blau- oder
   Neonstimmungen, keine harten Blitzfotos.
2. Ruhiger Bildausschnitt: ein Auge / eine Augenpartie, weiche Tiefenschärfe.
3. Natürliche Haut, kein überretuschierter Werbe-Look.
4. Auf Unsplash/Pexels die Größe „Medium“ (~1200–1600 px) herunterladen –
   scharf genug und schnell ladend.
5. Datei umbenennen (z. B. `galerie-2.jpg`) und in `bilder/` legen – fertig.

Am stärksten wirken mittelfristig **eigene Aufnahmen** bei Tageslicht mit
einheitlichem Ausschnitt – sie zeigen echte Ergebnisse und sind zugleich
Instagram-tauglich. Die Stockfotos sind der hochwertige Start.

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
