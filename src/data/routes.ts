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

// ------------------------------------------------------------
// PÁGINAS OCULTAS
// Las páginas de esta lista desaparecen del menú y de los enlaces,
// y su URL redirige a Inicio. El código y los datos siguen intactos.
// Para volver a mostrar Proyectos, deja la lista vacía: []
// ------------------------------------------------------------
export const hiddenPages: PageKey[] = ['projects'];

export function isVisible(page: PageKey): boolean {
  return !hiddenPages.includes(page);
}

// Orden en el que aparecen en el menú (sin las páginas ocultas)
export const navOrder: PageKey[] = (['home', 'projects', 'about', 'contact'] as PageKey[]).filter(isVisible);
