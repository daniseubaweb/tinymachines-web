# tinymachines.studio

Web de tinymachines, hecha con [Astro](https://astro.build). Cloudflare Pages la construye y publica en cada push a `main`.

## Trabajar en local

```bash
npm install
npm run dev
```

## Dónde está cada cosa

- `src/pages/`: una página por archivo (`index`, `ideas/`, `manifesto`, `team`).
- `src/components/Header.astro` y `Footer.astro`: menú y footer compartidos.
- `src/content/ideas/`: una idea por archivo `.md`. El nombre del archivo es su URL (`/ideas/dot-hunter`).
- `src/data/principles.ts`: los seis principios del manifiesto.
- `src/data/team.ts`: el equipo.
- `public/img/`: imágenes.

## Añadir una idea nueva

1. Copia `src/content/ideas/dot-hunter.md` con el nombre de la nueva idea.
2. Cambia los datos de arriba (`name`, `tagline`, `icon`, `color`, `order`) y el texto.
3. Cuando esté en la App Store, añade `appStore: https://apps.apple.com/...`.

Aparece sola en la home, en `/ideas` y con su propia página.
