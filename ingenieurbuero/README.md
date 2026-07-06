# K+P Ingenieure – Website

Statische Website für ein Ingenieurbüro (Tragwerksplanung, Statik, Bauplanung).
Kein Framework, keine Abhängigkeiten – direkt lauffähig und leicht in
WordPress, Webflow oder ein anderes CMS übertragbar.

## Dateien

| Datei        | Inhalt                                            |
|--------------|---------------------------------------------------|
| `index.html` | Komplette Seitenstruktur (semantisches HTML)      |
| `styles.css` | Design-System (Farben, Typografie, Layout)        |
| `script.js`  | Header-Zustand, mobile Navigation, Scroll-Reveal, Formular-Feedback |

Lokal ansehen: `index.html` im Browser öffnen. Fertig.

## Design-System (Kurzfassung)

- **Farben:** Anthrazit-Nachtblau `#0F1722`, Beton-Hellgrau `#F2F2EF`,
  Tinte `#182230`, Stahlblau `#4D7EA8` (Akzent), Kupfer `#B5794E` (sparsames Detail).
  Alle Werte liegen als CSS-Variablen in `:root` – eine Stelle, um die
  Farbwelt anzupassen.
- **Typografie:** Grotesk-Systemstack für Headlines und Fließtext,
  Monospace für „Plankopf“-Elemente (Eyebrows, Projektdaten, Formularlabels).
  Soll später eine Kauf-/Webfont eingesetzt werden (z. B. eine neutrale
  Grotesk wie Neue Haas, Suisse oder ähnlich): nur `--sans` in `:root` tauschen.
- **Formsprache:** 2-px-Radien, Hairlines, Rasterlinien – bewusst technisch,
  keine verspielten Rundungen.

## Bildsprache – Empfehlungen für echte Fotos

Die SVG-Zeichnungen (Fachwerkträger im Hero, Gebäudeschnitte bei den
Projekten) sind hochwertige Platzhalter. Für den nächsten Schritt:

1. **Hero:** Architekturfoto in kühler Farbstimmung – Rohbau mit sichtbarem
   Tragwerk, Stahlknoten, Betonkern oder Detail einer Verschraubung.
   Dunkel abgesoftet (Overlay `rgba(15,23,34,.75)`), damit die Headline stehen bleibt.
2. **Projekte:** Pro Referenz ein Foto (Baustelle mit Struktur, fertiges
   Gebäude, Detail) im Format 16:9,5 – einfach das `<svg>` in
   `.project-figure` durch ein `<img>` ersetzen.
3. **Über uns:** Detailaufnahme aus dem Arbeitsalltag – Pläne auf dem Tisch,
   Messgerät, Modell. Keine gestellten Team-Lächel-Fotos.
4. Geeignete Quellen: eigene Projektfotografie (am stärksten), sonst
   Architekturfotografen mit Lizenz; bei Stock streng auf „Struktur statt
   Menschen“ filtern.

## Spätere Erweiterung

- **Echte Referenzen:** In `#projekte` pro Projekt Kategorie, Titel und die
  drei Meta-Zeilen (Leistung / Umfang / Status) mit realen Daten füllen,
  z. B. „6-geschossiger Wohnbau, Stahlbeton, 4.200 m² BGF“. Karte ist als
  wiederholbares `article.project` angelegt – CMS-tauglich als Collection/Loop.
- **Team:** Neue Sektion zwischen „Warum wir“ und „Projekte“ – gleiche
  Struktur wie `.reasons` (Name, Funktion, Qualifikation als Zeilen) oder
  Porträts in Grautönen im `.services-grid`-Raster.
- **Zertifikate / Mitgliedschaften:** Als Zeile unter `hero-facts` oder im
  Footer (Logos einfarbig in `#8d9aa9`), z. B. Ingenieurkammer, Sachverständigen-
  Anerkennungen, DGNB. Nur eintragen, was tatsächlich vorliegt.
- **Impressum / Datenschutz:** Als eigene Seiten anlegen und im Footer
  verlinken (aktuell Platzhalter-Links). Für den Live-Betrieb Pflicht.
- **Formularversand:** `script.js` zeigt derzeit nur das Erfolgs-Feedback.
  Für den Produktivbetrieb an ein Backend/Formular-Service anbinden und die
  Meldung erst nach erfolgreicher Übertragung anzeigen.
- **CMS-Übertragung:** Jede Sektion ist in sich geschlossen (`section` mit
  eigener ID) und lässt sich 1:1 als CMS-Block/Template übernehmen.
  Farb- und Schriftvariablen zentral in `:root`.

## Platzhalter, die vor Livegang ersetzt werden müssen

- Firmenname „K+P Ingenieure“ (durchsuchen und ersetzen)
- Adresse, Telefonnummer, E-Mail (Header/Kontakt/Footer)
- Referenzprojekt-Daten
- Impressum- und Datenschutz-Seiten
