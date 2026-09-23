# Portfolio personal

Portfolio en español e inglés hecho con [Astro](https://astro.build).

## Comandos

| Comando           | Qué hace                                             |
| ----------------- | ---------------------------------------------------- |
| `npm install`     | Instala las dependencias (solo la primera vez)       |
| `npm run dev`     | Arranca la web en local en `http://localhost:4321`   |
| `npm run build`   | Genera la web final en la carpeta `dist/`            |
| `npm run preview` | Muestra en local la versión generada por `build`     |

## Dónde editar

- `src/data/profile.ts`: nombre, correo y enlaces (comunes a los dos idiomas).
- `src/data/es.ts` y `src/data/en.ts`: todos los textos, experiencia y proyectos.
- `src/styles/global.css`: colores y tipografías.
- `public/cv-es.pdf` y `public/cv-en.pdf`: tus CV.

Busca `TODO` en el proyecto para encontrar lo que falta por rellenar.

## Publicación

Cada cambio que llega a `main` se publica automáticamente en GitHub Pages
mediante el workflow `.github/workflows/deploy.yml`.
