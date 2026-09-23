// Punto único para obtener el contenido según el idioma.
import type { Content, Lang } from './types';
import { es } from './es';
import { en } from './en';

const content: Record<Lang, Content> = { es, en };

export function getContent(lang: Lang): Content {
  return content[lang];
}
