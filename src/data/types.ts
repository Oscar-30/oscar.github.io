// ============================================================
// TIPOS DE DATOS
// Igual que una clase o interfaz en C#: describe la "forma"
// que deben tener tus datos. Si en es.ts o en.ts te olvidas
// de un campo o escribes mal su nombre, VS Code te avisará.
// ============================================================

export type Lang = 'es' | 'en';

export interface Job {
  company: string;
  role: string;
  location: string;
  start: string;          // Texto libre, p. ej. "Sep 2023"
  end: string;            // p. ej. "Actualidad" / "Present"
  summary: string;
  highlights: string[];   // Logros concretos, uno por línea
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  repo?: string;          // El "?" significa opcional (como string? en C#)
  demo?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Study {
  degree: string;
  institution: string;
  start: string;
  end: string;
  note?: string;
}

export interface SpokenLanguage {
  name: string;
  level: string;
}

// Todo el contenido que cambia según el idioma.
export interface Content {
  meta: { title: string; description: string };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
    switchLang: string;   // Texto del botón para cambiar de idioma
    themeLabel: string;   // Texto accesible del botón claro/oscuro
  };
  hero: {
    role: string;
    tagline: string;
    status: string;
    ctaProjects: string;
    ctaCv: string;
  };
  about: { title: string; paragraphs: string[] };
  experience: { title: string; jobs: Job[] };
  projects: { title: string; intro: string; items: Project[]; repoLabel: string; demoLabel: string };
  skills: { title: string; groups: SkillGroup[] };
  education: { title: string; studies: Study[]; languagesTitle: string; languages: SpokenLanguage[] };
  contact: { title: string; text: string; emailLabel: string };
  footer: { text: string };
}
