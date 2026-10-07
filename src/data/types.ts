// ============================================================
// TIPOS DE DATOS
// Describen la "forma" de tus datos, como una interfaz en C#.
// Si en es.ts o en.ts falta un campo o lo escribes mal,
// VS Code lo subraya en rojo antes de compilar.
// ============================================================
import type { IconName } from '../components/ui/icons';

export type Lang = 'es' | 'en';

// Las cuatro páginas de la web
export type PageKey = 'home' | 'projects' | 'about' | 'contact';

// Colores de acento disponibles para insignias y cifras
export type Tone = 'indigo' | 'fuchsia' | 'cyan' | 'emerald';

export interface Stat {
  value: string;
  label: string;
  tone?: Tone;
}

export interface Project {
  title: string;
  category: string;              // Se usa para los filtros de la página de proyectos
  description: string;
  tech: string[];
  repo?: string;                 // "?" = opcional, como string? en C#
  demo?: string;
  image?: string;                // Ruta dentro de /public, p. ej. '/projects/mi-app.png'
  featured?: boolean;            // true = aparece grande en Inicio y en Proyectos
  metric?: string;               // Dato corto destacado, p. ej. '-40% tiempo de carga'
  highlight?: { label: string; text: string };  // Recuadro técnico opcional
}

export interface JourneyItem {
  type: 'work' | 'study';
  title: string;
  org: string;
  period: string;
  text: string;
  tech: string[];
  current?: boolean;             // true = muestra la etiqueta "Actualidad"
}

export interface Hobby {
  icon: IconName;
  tone: Tone;
  title: string;
  text: string;
  tag: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
  note?: string;
}

export interface Point {
  title: string;
  text: string;
}

export interface InfoTile {
  icon: IconName;
  label: string;
  value: string;
  note: string;
}

// Una línea del bloque de código de la portada: clave y valor
export interface CodeField {
  key: string;
  value: string | string[] | boolean;
}

export interface Achievement {
  icon: IconName;
  tone: Tone;
  label: string;
  value: string;
  title: string;
  text: string;
  foot: string;
  footStrong: string;
}

// Todo el contenido que cambia según el idioma
export interface Content {
  pages: Record<PageKey, { title: string; description: string }>;
  nav: Record<PageKey, string> & {
    cv: string;
    switchLang: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
  };
  status: string;
  labels: {
    code: string;
    demo: string;
    viewAll: string;
    copy: string;
    copied: string;
    downloadCv: string;
    current: string;
  };

  // Datos compartidos por varias páginas
  projects: Project[];
  journey: JourneyItem[];
  skills: SkillGroup[];
  hobbies: Hobby[];

  home: {
    pill: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    ctaProjects: string;
    ctaContact: string;
    stats: Stat[];
    code: {
      comment: string;
      variable: string;
      fields: CodeField[];
      command: string;
      result: string;
      statusLabel: string;
      statusTag: string;
    };
    bento: {
      eyebrow: string;
      title: string;
      intro: string;
      featuredBadge: string;
      hobbies: { badge: string; aside: string; title: string; intro: string; footer: string; footerStrong: string };
      stack: { badge: string; aside: string; title: string; intro: string; footer: string; footerStrong: string };
      why: { badge: string; aside: string; title: string; intro: string; points: Point[]; cta: string };
    };
    work: { eyebrow: string; title: string; intro: string };
    cta: { pill: string; title: string; text: string; button: string };
  };

  projectsPage: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    filterLabel: string;
    filterAll: string;
    achievements: { eyebrow: string; title: string; items: Achievement[] };
    cta: { eyebrow: string; title: string; text: string; button: string };
  };

  about: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    stats: { label: string; value: string; note: string; tone: Tone }[];
    journey: { eyebrow: string; title: string; range: string };
    availability: {
      eyebrow: string;
      title: string;
      items: { title: string; tag: string; text: string }[];
      placesLabel: string;
      places: string[];
      footerTitle: string;
      footerText: string;
    };
    beyond: { eyebrow: string; title: string; intro: string };
    stack: { eyebrow: string; title: string; aside: string };
    cta: { pill: string; title: string; text: string };
  };

  contact: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    meta: { icon: IconName; text: string }[];
    direct: { title: string; badge: string; text: string; inboxLabel: string };
    tiles: InfoTile[];
    profiles: { title: string; aside: string };
    cv: { title: string; text: string };
  };

  footer: { tagline: string; note: string };
}
