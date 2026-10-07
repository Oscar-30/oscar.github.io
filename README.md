# Portfolio personal

Portfolio en español e inglés hecho con [Astro](https://astro.build).

## Comandos

| Comando           | Qué hace                                             |
| ----------------- | ---------------------------------------------------- |
| `npm install`     | Instala las dependencias (solo la primera vez)       |
| `npm run dev`     | Arranca la web en local en `http://localhost:4321`   |
| `npm run build`   | Genera la web final en la carpeta `dist/`            |
| `npm run preview` | Muestra en local la versión generada por `build`     |

## Estructura

```
src/
├── data/          ← TU CONTENIDO (lo que más vas a tocar)
│   ├── profile.ts     nombre, correo, enlaces, CV
│   ├── es.ts          todos los textos en español
│   ├── en.ts          todos los textos en inglés
│   ├── routes.ts      URL de cada página en cada idioma
│   └── types.ts       forma que deben tener los datos
├── pages/         ← una página por fichero = una URL
├── views/         ← el diseño de cada página (Inicio, Proyectos, Sobre mí, Contacto)
├── components/
│   ├── layout/        cabecera y pie
│   ├── sections/      piezas grandes reutilizables (tarjeta de proyecto, banner...)
│   └── ui/            piezas pequeñas (iconos, botón de copiar...)
├── layouts/       ← esqueleto HTML común
└── styles/        ← colores, tipografías y estilos compartidos
```

Busca `TODO` en el proyecto para encontrar lo que falta por rellenar.

## Publicación

Cada cambio que llega a `main` se publica automáticamente en GitHub Pages
mediante el workflow `.github/workflows/deploy.yml`.
