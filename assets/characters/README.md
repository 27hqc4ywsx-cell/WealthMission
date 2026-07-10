# Charakter-Assets für WealthMission

Die App zeigt Charaktere als **Bild-Assets** an (kein CSS-/SVG-Zeichnen).
Fehlt ein Bild, zeigt die App automatisch einen neutralen Premium-Platzhalter —
die App funktioniert also auch ganz ohne Bilder.

## Namenskonvention (exakt einhalten)

```
assets/characters/{geschlecht}/{stil}/level-{stufe}.webp
```

| Ebene | Erlaubte Werte |
|---|---|
| geschlecht | `male` · `female` |
| stil | `fantasy` (RPG-Stil) · `luxus` (Sims-Stil) · `hybrid` |
| stufe | `1` · `10` · `30` |

**Alle 18 Dateien:**

```
male/fantasy/level-1.webp     female/fantasy/level-1.webp
male/fantasy/level-10.webp    female/fantasy/level-10.webp
male/fantasy/level-30.webp    female/fantasy/level-30.webp
male/luxus/level-1.webp       female/luxus/level-1.webp
male/luxus/level-10.webp      female/luxus/level-10.webp
male/luxus/level-30.webp      female/luxus/level-30.webp
male/hybrid/level-1.webp      female/hybrid/level-1.webp
male/hybrid/level-10.webp     female/hybrid/level-10.webp
male/hybrid/level-30.webp     female/hybrid/level-30.webp
```

**Level-Zuordnung in der App:** Level 1–9 → `level-1` · Level 10–29 → `level-10` · ab Level 30 → `level-30`.
Fehlt eine Stufe, fällt die App automatisch auf die nächstkleinere vorhandene zurück.
Weitere Stufen (z. B. `level-50.webp`) sind möglich: Datei ablegen und in `index.html`
die Konstante `AVATAR_TIERS` erweitern (z. B. `[50, 30, 10, 1]`).

## Bild-Spezifikation

- **Format:** WebP mit **transparentem Hintergrund** (Charakter freigestellt).
  Der Premium-Hintergrund kommt aus der App — so wirken alle Stile konsistent.
- **Größe:** 640 × 800 px (Seitenverhältnis 4:5, Hochformat).
- **Ausschnitt:** Halbfigur (Kopf bis etwa Hüfte/Knie), unten bündig — die App
  verankert das Bild an der Unterkante der Stage und legt einen Bodenschatten darunter.
- **Blickrichtung:** frontal bis leichte Dreiviertel-Ansicht, Blick Richtung Kamera.
- **Qualität:** stylized-3D-Render (Premium-Mobile-Game-Niveau), erwachsen, semi-realistische
  Proportionen — kein Cartoon, kein Emoji-Look, kein Flat-Design.

## Prompt-Vorlage (Midjourney / DALL·E / etc.)

Basis-Prompt — pro Bild nur die Variablen in eckigen Klammern austauschen:

> stylized 3D character render, [GESCHLECHT] adult, semi-realistic proportions,
> soft skin shading, clear facial structure, volumetric clothing with believable
> material feel, premium mobile MMO game quality, half-body portrait from head to
> hips, front-facing three-quarter view, confident calm pose, soft studio rim
> lighting, [OUTFIT], isolated on transparent background, no text, no watermark

**[GESCHLECHT]:** `male` / `female`

**[OUTFIT] je Stil und Stufe:**

| Stil | level-1 | level-10 | level-30 |
|---|---|---|---|
| fantasy | simple linen adventurer clothes, worn leather belt | polished leather armor with subtle steel details | ornate gilded plate armor with royal blue cape |
| luxus | clean casual outfit, plain t-shirt and chinos | tailored business attire, elegant navy suit | luxury couture look, midnight tuxedo/gown with gold accents |
| hybrid | modern outfit with a single subtle fantasy accessory | smart-casual attire with an ornamental emblem brooch | regal modern coat with gold embroidery and a ceremonial shoulder piece |

**Konsistenz-Tipp:** Innerhalb eines Geschlechts+Stils dieselbe Figur (Gesicht, Frisur,
Körperbau) über alle drei Stufen beibehalten — nur das Outfit eskaliert. Bei Midjourney
hilft ein Character-Reference-Bild (`--cref`), bei anderen Tools derselbe Seed.

Nach dem Ablegen der Dateien ist nichts weiter zu tun — die App lädt sie beim
nächsten Öffnen automatisch.
