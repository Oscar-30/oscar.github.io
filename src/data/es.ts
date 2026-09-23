// ============================================================
// CONTENIDO EN ESPAÑOL
// Para editar tu portfolio, casi siempre tocarás solo este
// fichero y en.ts. Busca "TODO" y "Lorem" para encontrar
// los huecos que tienes que rellenar.
// ============================================================
import type { Content } from './types';

export const es: Content = {
  meta: {
    // TODO: título que aparece en la pestaña del navegador y en Google
    title: 'Lorem Ipsum | Ingeniero informático',
    // TODO: resumen de una o dos frases para buscadores y redes sociales
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Desarrollador .NET y estudiante de Ingeniería Informática.',
  },

  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Habilidades',
    education: 'Formación',
    contact: 'Contacto',
    switchLang: 'English',
    themeLabel: 'Cambiar entre modo claro y oscuro',
  },

  hero: {
    role: 'Desarrollador .NET y estudiante de Ingeniería Informática',
    // TODO: una frase que te defina: qué haces y qué te motiva
    tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    // TODO: qué estás buscando ahora mismo
    status: 'Buscando becas y prácticas internacionales para 2027',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
  },

  about: {
    title: 'Sobre mí',
    // TODO: dos o tres párrafos. Cada cadena entre comillas es un párrafo.
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
      'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
    ],
  },

  experience: {
    title: 'Experiencia',
    // TODO: tus trabajos, del más reciente al más antiguo.
    // Para añadir otro, copia un bloque { ... } entero y pégalo debajo, separado por una coma.
    jobs: [
      {
        company: 'Lorem Ipsum S.L.',
        role: 'Desarrollador .NET',
        location: 'Madrid, España',
        start: 'Sep 2024',
        end: 'Actualidad',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.',
        highlights: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
          'Duis aute irure dolor in reprehenderit in voluptate velit.',
        ],
        tech: ['C#', '.NET Core', 'SQL Server', 'Entity Framework'],
      },
      {
        company: 'Dolor Sit Amet S.A.',
        role: 'Desarrollador en prácticas',
        location: 'Madrid, España',
        start: 'Feb 2024',
        end: 'Ago 2024',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
        highlights: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Excepteur sint occaecat cupidatat non proident.',
        ],
        tech: ['C#', '.NET Framework', 'SQL', 'JavaScript'],
      },
    ],
  },

  projects: {
    title: 'Proyectos',
    intro: 'Una selección de proyectos personales y de la carrera.',
    repoLabel: 'Código',
    demoLabel: 'Demo',
    // TODO: tus proyectos. repo y demo son opcionales: si no tienes, borra esa línea.
    items: [
      {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tech: ['ASP.NET Core', 'C#', 'PostgreSQL'],
        repo: 'https://github.com/tu-usuario/lorem-ipsum',
        demo: 'https://example.com',
      },
      {
        title: 'Dolor sit amet',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tech: ['Blazor', 'SignalR', 'Azure'],
        repo: 'https://github.com/tu-usuario/dolor-sit-amet',
      },
      {
        title: 'Consectetur',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        tech: ['Python', 'SQL', 'Docker'],
        repo: 'https://github.com/tu-usuario/consectetur',
      },
    ],
  },

  skills: {
    title: 'Habilidades',
    // TODO: ajusta las categorías y tecnologías a lo que sepas de verdad
    groups: [
      { category: 'Lenguajes', items: ['C#', 'SQL', 'JavaScript', 'Lorem'] },
      { category: 'Backend', items: ['.NET Core', '.NET Framework', 'ASP.NET', 'Entity Framework'] },
      { category: 'Bases de datos', items: ['SQL Server', 'Lorem', 'Ipsum'] },
      { category: 'Herramientas', items: ['Git', 'Visual Studio', 'Azure DevOps', 'Lorem'] },
    ],
  },

  education: {
    title: 'Formación',
    // TODO: tus estudios
    studies: [
      {
        degree: 'Grado en Ingeniería Informática',
        institution: 'Universidad Lorem Ipsum',
        start: '2022',
        end: '2027',
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
    languagesTitle: 'Idiomas',
    // TODO: tus idiomas y nivel
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Lorem (B2 / C1)' },
    ],
  },

  contact: {
    title: 'Contacto',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Escríbeme si quieres hablar de una beca, unas prácticas o un proyecto.',
    emailLabel: 'Escribir un correo',
  },

  footer: {
    text: 'Hecho con Astro y publicado en GitHub Pages.',
  },
};
