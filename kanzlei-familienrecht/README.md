# Kanzlei für Familienrecht, Bielefeld – Website

Vollständige statische Website für eine Familienrechtskanzlei.
Kein Framework, keine Abhängigkeiten – direkt lauffähig und leicht in
WordPress, Webflow oder ein anderes CMS übertragbar.

## Ordnerstruktur

```
kanzlei-familienrecht/
├── index.html                        Startseite mit allen Sektionen
├── css/
│   └── styles.css                    Design-System (Farben, Typografie, Layout)
├── js/
│   └── script.js                     Navigation, Scroll-Animationen, Formular
├── rechtliches/
│   ├── impressum.html                Platzhalter-Gerüst (vor Livegang prüfen!)
│   ├── datenschutz.html              Platzhalter-Gerüst (vor Livegang prüfen!)
│   └── cookie-einstellungen.html     Platzhalter-Gerüst (vor Livegang prüfen!)
└── README.md
```

## Website starten

1. Ordner herunterladen bzw. entpacken.
2. `index.html` doppelklicken – die Seite öffnet sich im Browser.
   Es wird kein Server und keine Installation benötigt.
3. Für einen lokalen Testserver (optional):
   `python3 -m http.server` im Ordner ausführen und
   `http://localhost:8000` öffnen.

## Design-System (Kurzfassung)

- **Farben** (zentral in `css/styles.css` unter `:root`):
  Kastellblau `#16283E`, dunkles Blau `#101D2E`, Cremeweiß `#FAF7F1`,
  Sand/Hellbraun `#EADFCD`, Braun `#8A6A4F` / `#6F5440`.
- **Typografie:** Serif (Georgia-Stack) für Überschriften und Zitate,
  ruhige Sans für Fließtext, gesperrte Kapitälchen als Sektionslabels.
  Später gewünschte Kauf-Fonts: nur `--serif` / `--sans` in `:root` tauschen.
- **Animationen:** Sanfte Einblendungen beim Scrollen, gestaffelte Karten,
  dezente Parallax-Bewegung im Hero. Bei aktiviertem
  `prefers-reduced-motion` und ohne JavaScript bleibt alles sichtbar und
  funktionsfähig.

## Platzhalter, die ersetzt werden müssen

Alle Platzhalter sind im Code mit `[PLATZHALTER …]` bzw. `[PLZ]` markiert
(einfach danach suchen). Im Einzelnen:

| Stelle | Angabe |
|---|---|
| Header/Footer/alle Seiten | Kanzleiname („Kanzlei an der Hermannstraße“ ist ein Arbeitstitel) |
| Kontakt, Footer | Postleitzahl zur Adresse Hermannstraße 132, Bielefeld |
| Kontakt, Footer | Telefonnummer (auch im `tel:`-Link) |
| Kontakt, Footer | E-Mail-Adresse (auch im `mailto:`-Link) |
| Kontakt | Öffnungszeiten |
| Kontakt | Google-Maps-Einbindung (s. u.) |
| Über die Kanzlei | Name, Porträtfoto, Werdegang, Qualifikationen, Mitgliedschaften |
| FAQ „Kosten“ | konkrete Konditionen der Kanzlei |
| `rechtliches/` | sämtliche Pflichtangaben (s. u.) |

## Rechtliches – zwingend vor Veröffentlichung

Die drei Seiten unter `rechtliches/` sind bewusst **Gerüste ohne erfundene
Angaben**. Impressum (inkl. berufsrechtlicher Pflichtangaben einer
Rechtsanwaltskanzlei), Datenschutzerklärung und Cookie-Hinweise müssen mit
den echten Daten gefüllt und **fachlich geprüft** werden, bevor die Seite
online geht. Entsprechende Warnhinweise stehen als Kommentar im Code und
sichtbar auf jeder der drei Seiten.

Das Kontaktformular zeigt derzeit nur eine Frontend-Bestätigung. Für den
Produktivbetrieb muss der Versand angebunden werden (eigenes Backend oder
Formulardienst); die Erfolgsmeldung dann erst nach erfolgreicher
Übertragung anzeigen (Kommentar in `js/script.js`).

## Bilder austauschen

Aktuell kommt die Seite ohne Fotos aus (schnelle Ladezeit, keine
Stock-Optik). Vorgesehene Bildplätze:

1. **Hero:** Die Bogen-Grafik (`.hero-art` in `index.html`) kann durch ein
   ruhiges Foto ersetzt werden – z. B. Kanzleiräume, warme Materialien oder
   eine zurückhaltende Architekturaufnahme aus Bielefeld. Empfehlung:
   Foto als Hintergrund mit dunkelblauem Farbverlauf-Overlay, damit die
   Schrift lesbar bleibt.
2. **Über die Kanzlei:** Der Platzhalter `.portrait` wird durch ein
   professionelles, dezentes Porträt ersetzt (`<img>` im Format 3:4).
3. Optional: ruhige Detailaufnahmen (Papier, Holz, Kanzleitür) als
   Zwischenbilder in den hellen Sektionen.

Vermeiden: Händeschütteln, Richterhammer, gestellte Lachbilder,
dramatische Familienszenen.

## Barrierearmut

- Semantisches HTML, Überschriften-Hierarchie, Sprungmarke „Zum Inhalt“
- Vollständig per Tastatur bedienbar, sichtbare Fokus-Zustände
- FAQ mit nativen `<details>`-Elementen
- Formular mit beschrifteten Feldern, verständlichen deutschen
  Fehlermeldungen und `aria-describedby`
- Kontraste auf Lesbarkeit geprüft, Animationen respektieren
  `prefers-reduced-motion`
