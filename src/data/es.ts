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
      title: 'Oscar Llorens | Ingeniero de software', // TODO
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
      type: 'study',
      title: 'Ingeniería Informática',
      org: 'Universidad Europea de Madrid',
      current: true,
      period: 'Sep 2020 – Actualidad',
      text: 'Desarrollo y mantenimiento de aplicaciones web con .NET Core y .NET Framework y SQL Server.',
      tech: ['Java', 'Python', 'HTML, CSS, JavaScript', 'SQL', 'IA'],
    },
    {
      type: 'work',
      title: 'Desarrollador Junior .NET',
      org: 'NCS Spain',
      period: 'Feb 2024 – Ago 2025',
      text: 'Desarrollo y mantenimiento de aplicaciones web con .NET Core y .NET Framework y SQL Server.',
      tech: ['C#', '.NET Core', '.NET Framework', 'SQL Server', 'Git'],
    },
    {
      type: 'work',
      title: 'Desarrollador Junior',
      org: 'CIM ECM',
      period: 'Sep 2025 – Feb 2026',
      text: 'Desarrollo de pequeñas tareas con Java. Mantenimiento y testing de APIs con Postman.',
      tech: ['Java', 'Postman', 'PowerShell'],
    },
    {
      type: 'work',
      title: 'Técnico Soporte Desarrollo',
      org: 'Cegid',
      current: true,
      period: 'May 2026 – Actualidad',
      text: 'Resolución de incidencias y soporte técnico. Depuración y modificación de código. Creación y modificación de elementos mediante bases de datos SQL y Oracle.',
      tech: ['PeopleNet', 'Lenguaje propio LN4', 'SQL'],
    },
  ],

  // ---------- HABILIDADES ----------
  // TODO: pon solo lo que sepas de verdad
  skills: [
    {
      category: 'Lenguajes',
      items: ['C#', 'HTML','JavaScript', 'SQL', 'Python'],
      //note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      category: 'Backend y datos',
      items: ['.NET Core', '.NET Framework', 'ASP.NET', 'Entity Framework', 'SQL Server'],
      //note: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
    {
      category: 'Herramientas',
      items: ['Git', 'Visual Studio Code', 'Visual Studio 2022', 'Postman', 'PowerShell' ],
      //note: 'Duis aute irure dolor in reprehenderit in voluptate.',
    },
  ],

  // ---------- AFICIONES ----------
  // Iconos disponibles en src/components/ui/icons.ts (gamepad, music, activity, book...)
  hobbies: [
    {
      icon: 'medal',
      tone: 'fuchsia',
      title: 'Baloncesto',
      text: 'Me gusta practicar todo tipo de deportes, pero me encanta jugar y competir al baloncesto.',
      tag: 'Baloncesto',
    },
    {
      icon: 'music',
      tone: 'emerald',
      title: 'Música',
      text: 'Me encanta escuchar (casi) todo tipo de música. Además, toco la guitarra española y eléctrica.',
      tag: 'Música',
    },
    {
      icon: 'bookOpenText',
      tone: 'indigo',
      title: 'Leer',
      text: 'Me encanta sacar un rato todos los días para leer.',
      tag: 'Leer',
    },
  ],

  // ---------- PÁGINA DE INICIO ----------
  home: {
    pill: 'Objetivo: becas y prácticas internacionales · 2027', // TODO
    titleLine1: 'Ingeniero Informático',
    titleLine2: 'en progreso.',
    // TODO: dos o tres frases sobre ti
    intro:
      'Estudiante de Ingeniería Informática con más de dos años de experiencia como desarrollador.',
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
        { key: 'nombre', value: 'Oscar Llorens' },
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
        intro: 'Algunos de mis hobbies para desconectar:',
        footer: 'Algunas de mis aficiones.',
        footerStrong: 'Hobbies',
      },
      stack: {
        badge: 'Tecnologías',
        aside: 'Usadas en producción',
        title: 'Mi stack',
        intro: 'Herramientas con las que he trabajado:',
        footer: 'Aprendiendo siempre',
        footerStrong: 'Hard Skills', // TODO: qué estás aprendiendo
      },
      why: {
        badge: 'Por qué yo',
        aside: 'En resumen',
        title: 'Lo que aporto a un equipo',
        intro: 'Algunas de mis cualidades como jugador de equipo:',
        // TODO: tres o cuatro puntos fuertes con un ejemplo concreto
        points: [
          { title: 'Experiencia como desarrollador:', text: 'Tengo experiencia de más de dos años como desarrollador.' },
          { title: 'Ganas de ayudar y aprender:', text: 'Aporto entusiasmo y compromiso para ayudar y aprender constantemente.' },
          { title: 'Gran capacidad de adaptación:', text: 'Cuento con una gran capacidad de adaptación a nuevos entornos y tecnologías.' },
          { title: 'Autonomía:', text: 'Una vez dada una tarea, soy capaz de gestionarla de forma independiente y de sacarme las castañas del fuego.' },
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
        { icon: 'graduation', tone: 'indigo', label: 'Expediente', value: '6,5', title: 'Nota media', text: 'Sed do eiusmod tempor incididunt ut labore et dolore.', foot: 'Lorem', footStrong: 'Ipsum' },
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
      'Soy un estudiante de Ingeniería Informática de 25 años con más de dos años de experiencia como desarrollador. Me encanta la tecnología y aprender cosas nuevas. También soy un apasionado del baloncesto y de las atividades al aire libre.',
    stats: [
      { label: 'Formación', value: 'Ing. Informática', note: 'Fin en 2027', tone: 'indigo' },
      { label: 'Experiencia', value: '2+ años', note: '.NET y SQL', tone: 'emerald' },
      { label: 'Idiomas', value: 'ES · EN', note: 'Inglés B2', tone: 'cyan' },
      { label: 'Ubicación', value: 'Madrid', note: 'España', tone: 'fuchsia' },
    ],
    journey: { eyebrow: 'Trayectoria', title: 'Mi recorrido', range: '2022 – 2027' },
    availability: {
      eyebrow: 'Lo que busco',
      title: 'Disponibilidad',
      // TODO: qué tipo de beca o puesto buscas y cuándo
      items: [
        { title: 'Becas internacionales', tag: '2027', text: 'Busco prácticas internacionales en verano o navidades.' },
        //{ title: 'Prácticas o primer empleo', tag: 'Lorem', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      ],
      placesLabel: 'Destinos de interés',
      places: ['San Francisco', 'San Rafael', 'Los Ángeles', 'Remoto'],
      footerTitle: 'San Francisco',
      footerText: 'Destino favorito',
    },
    beyond: {
      eyebrow: 'Fuera del código',
      title: 'Más allá del IDE',
      intro: '',
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
    title: 'Si quieres saber más de mí',
    titleAccent: 'escríbeme',
    intro: 'Si quieres saber más de mi perfil, hablar de un proyecto o de una beca, escríbeme y te responderé en menos de 24 h.',
    meta: [
      { icon: 'clock', text: 'Respondo en menos de 24 h' },
      { icon: 'map-pin', text: 'Madrid, España · Remoto' },
      { icon: 'globe', text: 'Español e inglés' },
    ],
    direct: {
      title: 'Escríbeme',
      badge: 'Disponible',
      text: 'La forma más rápida de contactar conmigo es por correo.',
      inboxLabel: 'Correo',
    },
    tiles: [
      { icon: 'calendar', label: 'Disponibilidad', value: '2027', note: 'En junio me gradúo' },
      { icon: 'map-pin', label: 'Ubicación', value: 'Madrid', note: 'Abierto a trasladarme' },
      { icon: 'clock', label: 'Zona horaria', value: 'CET (UTC+1)', note: 'Horario flexible' },
    ],
    profiles: { title: 'Perfiles', aside: 'En la red' },
    cv: { title: 'Currículum', text: 'Versión en PDF, actualizada' },
  },

  footer: {
    tagline: 'Desarrollador .NET · Estudiante de Ingeniería Informática',
    note: '',
    //note: 'Hecho con Astro y publicado en GitHub Pages.',
  },
};
