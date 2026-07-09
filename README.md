# DynoForce 3D Library

Weboberflaeche fuer DynoForce-3D-Dateien mit:

- Suche und Produktfilter
- STL-Preview direkt im Browser
- Download von STL- und STEP-Dateien
- Druckhinweisen, Materialempfehlungen und Zusatzinfos pro Modell
- direktem statischem Deployment auf GitHub Pages

## Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

Die App ist fuer GitHub Pages auf dem Repo-Pfad `Dynoforce_3dFiles` vorkonfiguriert.

- Vite nutzt die Base-URL `/Dynoforce_3dFiles/`
- der Workflow unter `.github/workflows/deploy-pages.yml` baut und deployed automatisch bei Push auf `main`
- im GitHub-Repo muss unter `Settings > Pages` als Source `GitHub Actions` aktiviert sein

## Projektstruktur

```text
public/files/
  dynogrip/
  dynopull/
  attachments/

src/data/models.ts
  Zentrale Metadaten fuer Titel, Beschreibungen, Hinweise und Downloads
```

## Neue Modelle hinzufuegen

1. Dateien in den passenden Ordner unter `public/files/...` legen.
2. In `src/data/models.ts` einen neuen Eintrag mit Titel, Dateien, Tags und Druckhinweisen anlegen.
3. Falls eine STL vorhanden ist, `previewPath` setzen, damit die 3D-Vorschau aktiviert wird.
