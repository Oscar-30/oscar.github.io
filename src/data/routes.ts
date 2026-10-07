// ============================================================
// RUTAS
// La URL de cada página en cada idioma. El menú y el botón
// de cambiar idioma leen de aquí, así nunca se desincronizan.
// Si cambias una URL, renombra también el fichero en src/pages.
// ============================================================
import type { Lang, PageKey } from './types';

export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { es: '/', en: '/en/' },
  projects: { es: '/proyectos/', en: '/en/projects/' },
  about: { es: '/sobre-mi/', en: '/en/about/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
};

// Orden en el que aparecen en el menú
export const navOrder: PageKey[] = ['home', 'projects', 'about', 'contact'];
