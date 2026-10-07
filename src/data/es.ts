// ============================================================
// CONTENIDO EN ESPAÑOL
// Casi siempre editarás solo este fichero y en.ts.
// Busca "TODO" y "Lorem" para encontrar los huecos.
// Para añadir un elemento a una lista (proyecto, trabajo...),
// copia un bloque { ... } entero y pégalo separado por una coma.
// ============================================================
import type { Content } from './types';

export const es: Content = {
  // Título y descripción de cada página (pestaña del navegador y Google)
  pages: {
    home: {
      title: 'Lorem Ipsum | Ingeniero de software', // TODO
      description: 'Lorem ipsum dolor sit amet. Desarrollador .NET y estudiante de último curso de Ingeniería Informática.', // TODO
    },
    projects: {
      title: 'Proyectos | Lorem Ipsum',
      description: 'Proyectos profesionales y personales de Lorem Ipsum.',
    },
    about: {
      title: 'Sobre mí | Lorem Ipsum',
      description: 'Trayectoria, formación y habilidades de Lorem Ipsum.',
    },
    contact: {
      title: 'Contacto | Lorem Ipsum',
      description: 'Cómo contactar con Lorem Ipsum.',
    },
  },

  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
    cv: 'CV',
    switchLang: 'EN',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mainNav: 'Principal',
  },

  // TODO: insignia corta de la cabecera (qué buscas)
  status: 'Becas 2027 · Disponible',

  labels: {
    code: 'Código',
    demo: 'Demo',
    viewAll: 'Ver todos los proyectos',
    copy: 'Copiar',
    copied: 'Copiado',
    downloadCv: 'Descargar CV',
    current: 'Actualidad',
  },

  // ---------- PROYECTOS ----------
  // Se usan en Inicio (los 3 primeros) y en la página Proyectos.
  // El que tenga featured: true aparece en grande.
  projects: [
    {
      title: 'Lorem ipsum dolor',
      category: 'Backend',
      featured: true,
      metric: 'Lorem: -40%',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      highlight: {
        label: 'Decisión técnica',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      },
      tech: ['C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework'],
      repo: 'https://github.com/tu-usuario/lorem',
      demo: 'https://example.com',
    },
    {
      title: 'Sit amet',
      category: 'Web',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tech: ['Blazor', 'SignalR', 'Azure'],
      repo: 'https://github.com/tu-usuario/sit-amet',
    },
    {
      title: 'Consectetur',
      category: 'Datos',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      tech: ['Python', 'SQL', 'Docker'],
      repo: 'https://github.com/tu-usuario/consectetur',
    },
    {
      title: 'Adipiscing elit',
      category: 'Universidad',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tech: ['Java', 'Spring', 'PostgreSQL'],
      repo: 'https://github.com/tu-usuario/adipiscing',
    },
  ],

  // ---------- TRAYECTORIA (trabajos y estudios) ----------
  // Del más reciente al más antiguo. type: 'work' o 'study'.
  journey: [
    {
      type: 'work',
      title: 'Desarrollador .NET',
      org: 'Lorem Ipsum S.L.',
      period: '2024 – hoy',
      current: true,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tech: ['C#', '.NET Core', 'SQL Server'],
    },
    {
      type: 'work',
      title: 'Desarrollador en prácticas',
      org: 'Dolor Sit Amet S.A.',
      period: '2023 – 2024',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tech: ['C#', '.NET Framework', 'SQL'],
    },
    {
      type: 'study',
      title: 'Grado en Ingeniería Informática',
      org: 'Universidad Lorem Ipsum',
      period: '2022 – 2027',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mención en lorem ipsum.',
      tech: ['Algoritmos', 'Bases de datos', 'Ingeniería del software'],
    },
  ],

  // ---------- HABILIDADES ----------
  // TODO: pon solo lo que sepas de verdad
  skills: [
    {
      category: 'Lenguajes',
      items: ['C#', 'SQL', 'JavaScript', 'Python', 'Lorem'],
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      category: 'Backend y datos',
      items: ['.NET Core', '.NET Framework', 'ASP.NET', 'Entity Framework', 'SQL Server'],
      note: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
    {
      category: 'Herramientas',
      items: ['Git', 'Visual Studio', 'Azure DevOps', 'Docker', 'Lorem'],
      note: 'Duis aute irure dolor in reprehenderit in voluptate.',
    },
  ],

  // ---------- AFICIONES ----------
  // Iconos disponibles en src/components/ui/icons.ts (gamepad, music, activity, book...)
  hobbies: [
    {
      icon: 'music',
      tone: 'fuchsia',
      title: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      tag: 'Lorem',
    },
    {
      icon: 'activity',
      tone: 'emerald',
      title: 'Dolor sit amet',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      tag: 'Ipsum',
    },
    {
      icon: 'book',
      tone: 'indigo',
      title: 'Consectetur',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      tag: 'Dolor',
    },
  ],

  // ---------- PÁGINA DE INICIO ----------
  home: {
    pill: 'Objetivo: becas y prácticas internacionales · 2027', // TODO
    titleLine1: 'Desarrollador .NET',
    titleLine2: 'e ingeniero en formación.',
    // TODO: dos o tres frases sobre ti
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactar',
    // TODO: cuatro cifras que te representen
    stats: [
      { value: '2+', label: 'Años como desarrollador' },
      { value: '4', label: 'Proyectos publicados', tone: 'indigo' },
      { value: '2027', label: 'Fin del grado', tone: 'emerald' },
      { value: 'B2', label: 'Nivel de inglés', tone: 'cyan' },
    ],
    // El bloque de código de la derecha. Cambia claves y valores a tu gusto.
    code: {
      comment: '// Perfil del candidato',
      variable: 'candidato',
      fields: [
        { key: 'nombre', value: 'Lorem Ipsum' },
        { key: 'rol', value: 'Desarrollador .NET' },
        { key: 'stack', value: ['C#', '.NET', 'SQL Server', 'Azure'] },
        { key: 'idiomas', value: ['Español', 'Inglés'] },
        { key: 'busca', value: 'Beca internacional 2027' },
        { key: 'disponible', value: true },
      ],
      command: '$ candidato.compilar()',
      result: 'Build succeeded',
      statusLabel: 'Abierto a nuevas oportunidades',
      statusTag: 'Respondo en 24 h',
    },
    bento: {
      eyebrow: 'De un vistazo',
      title: 'Qué hago y cómo trabajo',
      intro: 'Un resumen de mi proyecto principal, mis herramientas y lo que hago fuera del código.',
      featuredBadge: 'Proyecto destacado',
      hobbies: {
        badge: 'Fuera del teclado',
        aside: 'Aficiones',
        title: 'Lo que me mueve',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit:',
        footer: 'Lorem ipsum dolor sit',
        footerStrong: 'Lorem ipsum',
      },
      stack: {
        badge: 'Tecnologías',
        aside: 'Usadas en producción',
        title: 'Mi stack',
        intro: 'Herramientas con las que construyo aplicaciones de principio a fin:',
        footer: 'Aprendiendo siempre',
        footerStrong: 'Ahora mismo: Lorem ipsum', // TODO: qué estás aprendiendo
      },
      why: {
        badge: 'Por qué yo',
        aside: 'En resumen',
        title: 'Lo que aporto a un equipo',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit:',
        // TODO: tres o cuatro puntos fuertes con un ejemplo concreto
        points: [
          { title: 'Experiencia en producción:', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
          { title: 'Lorem ipsum:', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
          { title: 'Dolor sit amet:', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
        ],
        cta: 'Hablemos',
      },
    },
    work: {
      eyebrow: 'Proyectos',
      title: 'Trabajo seleccionado',
      intro: 'Proyectos profesionales, personales y de la universidad.',
    },
    cta: {
      pill: 'Disponible para 2027',
      title: '¿Construimos algo juntos?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Escríbeme si quieres hablar de una beca, unas prácticas o un proyecto.',
      button: 'Escribir un correo',
    },
  },

  // ---------- PÁGINA DE PROYECTOS ----------
  projectsPage: {
    eyebrow: 'Proyectos',
    title: 'Lo que he',
    titleAccent: 'construido',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aplicaciones web, backend y datos.',
    filterLabel: 'Filtrar proyectos por categoría',
    filterAll: 'Todos',
    achievements: {
      eyebrow: 'Logros',
      title: 'Reconocimientos y cifras',
      // TODO: premios, certificaciones, notas, contribuciones... o borra la sección
      items: [
        { icon: 'award', tone: 'cyan', label: 'Premio', value: 'Lorem', title: 'Lorem ipsum 2025', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', foot: 'Lorem', footStrong: 'Ipsum' },
        { icon: 'graduation', tone: 'indigo', label: 'Expediente', value: '0,0', title: 'Nota media', text: 'Sed do eiusmod tempor incididunt ut labore et dolore.', foot: 'Lorem', footStrong: 'Ipsum' },
        { icon: 'file', tone: 'fuchsia', label: 'Certificación', value: 'Lorem', title: 'Lorem ipsum dolor', text: 'Ut enim ad minim veniam, quis nostrud exercitation.', foot: 'Lorem', footStrong: 'Ipsum' },
        { icon: 'github', tone: 'emerald', label: 'Código abierto', value: '0+', title: 'Contribuciones', text: 'Duis aute irure dolor in reprehenderit in voluptate.', foot: 'Lorem', footStrong: 'Ipsum' },
      ],
    },
    cta: {
      eyebrow: 'Contacto',
      title: '¿Te interesa mi perfil?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: 'Contactar',
    },
  },

  // ---------- PÁGINA SOBRE MÍ ----------
  about: {
    eyebrow: 'Sobre mí',
    title: 'Detrás del',
    titleAccent: 'código',
    // TODO: presentación más extensa
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    stats: [
      { label: 'Formación', value: 'Ing. Informática', note: 'Fin en 2027', tone: 'indigo' },
      { label: 'Experiencia', value: '2+ años', note: '.NET y SQL', tone: 'emerald' },
      { label: 'Idiomas', value: 'ES · EN', note: 'Inglés lorem', tone: 'cyan' },
      { label: 'Ubicación', value: 'Lorem', note: 'España', tone: 'fuchsia' },
    ],
    journey: { eyebrow: 'Trayectoria', title: 'Mi recorrido', range: '2022 – 2027' },
    availability: {
      eyebrow: 'Lo que busco',
      title: 'Disponibilidad',
      // TODO: qué tipo de beca o puesto buscas y cuándo
      items: [
        { title: 'Becas internacionales', tag: '2027', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { title: 'Prácticas o primer empleo', tag: 'Lorem', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      ],
      placesLabel: 'Destinos de interés',
      places: ['Lorem', 'Ipsum', 'Dolor', 'Remoto'],
      footerTitle: 'Lorem ipsum dolor',
      footerText: 'Sit amet consectetur',
    },
    beyond: {
      eyebrow: 'Fuera del código',
      title: 'Más allá del IDE',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    stack: { eyebrow: 'Habilidades', title: 'Tecnologías', aside: 'Probadas en proyectos reales' },
    cta: {
      pill: 'Disponible para 2027',
      title: '¿Hablamos?',
      text: 'Descarga mi CV o escríbeme directamente.',
    },
  },

  // ---------- PÁGINA DE CONTACTO ----------
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos de',
    titleAccent: 'tu proyecto',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Escríbeme si quieres hablar de una beca, unas prácticas o un proyecto.',
    meta: [
      { icon: 'clock', text: 'Respondo en menos de 24 h' },
      { icon: 'map-pin', text: 'Lorem, España · Remoto' }, // TODO
      { icon: 'globe', text: 'Español e inglés' },
    ],
    direct: {
      title: 'Escríbeme',
      badge: 'Disponible',
      text: 'La forma más rápida de contactar conmigo es por correo.',
      inboxLabel: 'Correo',
    },
    tiles: [
      { icon: 'calendar', label: 'Disponibilidad', value: 'Lorem 2027', note: 'Lorem ipsum' },
      { icon: 'map-pin', label: 'Ubicación', value: 'Lorem', note: 'Abierto a trasladarme' },
      { icon: 'clock', label: 'Zona horaria', value: 'CET (UTC+1)', note: 'Horario flexible' },
    ],
    profiles: { title: 'Perfiles', aside: 'En la red' },
    cv: { title: 'Currículum', text: 'Versión en PDF, actualizada' },
  },

  footer: {
    tagline: 'Desarrollador .NET · Estudiante de Ingeniería Informática',
    note: 'Hecho con Astro y publicado en GitHub Pages.',
  },
};
