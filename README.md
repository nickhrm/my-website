# nickhrm.de

Persönliche Portfolio-Website, gebaut mit SvelteKit, Tailwind CSS v4 und mdsvex. Statischer Export über `@sveltejs/adapter-static`.

## Entwicklung

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Erzeugt eine statische Seite im Ordner `build/`, die auf jedem Static-Hosting deploybar ist.

## Projekte pflegen

Neue Projekte werden als Markdown-Datei mit Frontmatter unter `src/lib/content/posts/` angelegt (siehe bestehende Dateien als Vorlage). Felder: `title`, `tags`, `icons` (Iconify-Namen wie `logos:react`), optional `coverImage` und `images`.

Nach dem Hinzufügen neuer Icon-Namen einmal

```sh
npm run icons
```

ausführen, damit `src/lib/icon-data.ts` die passenden Icons offline (ohne Laufzeit-API-Aufruf) enthält.

## Typprüfung

```sh
npm run check
```
