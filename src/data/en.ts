// ============================================================
// CONTENT IN ENGLISH
// Same structure as es.ts. Keep both files in sync:
// if you add a project or job in es.ts, add it here too.
// ============================================================
import type { Content } from './types';

export const en: Content = {
  // Title and description of each page (browser tab and Google)
  pages: {
    home: {
      title: 'Oscar Llorens | Software Engineer', // TODO
      description: 'Lorem ipsum dolor sit amet. .NET developer and final-year Computer Engineering student.', // TODO
    },
    projects: {
      title: 'Projects | Lorem Ipsum',
      description: 'Professional and personal projects by Lorem Ipsum.',
    },
    about: {
      title: 'About | Lorem Ipsum',
      description: 'Background, education and skills of Lorem Ipsum.',
    },
    contact: {
      title: 'Contact | Lorem Ipsum',
      description: 'How to get in touch with Lorem Ipsum.',
    },
  },

  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    cv: 'CV',
    switchLang: 'ES',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main',
  },

  // TODO: short header badge (what you're looking for)
  status: 'Scholarships 2027 · Available',

  labels: {
    code: 'Code',
    demo: 'Demo',
    viewAll: 'See all projects',
    copy: 'Copy',
    copied: 'Copied',
    downloadCv: 'Download CV',
    current: 'Present',
  },

  // ---------- PROJECTS ----------
  projects: [
    {
      title: 'Lorem ipsum dolor',
      category: 'Backend',
      featured: true,
      metric: 'Lorem: -40%',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      highlight: {
        label: 'Technical decision',
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
      category: 'Data',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      tech: ['Python', 'SQL', 'Docker'],
      repo: 'https://github.com/tu-usuario/consectetur',
    },
    {
      title: 'Adipiscing elit',
      category: 'University',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tech: ['Java', 'Spring', 'PostgreSQL'],
      repo: 'https://github.com/tu-usuario/adipiscing',
    },
  ],

  // ---------- BACKGROUND (jobs and education) ----------
  journey: [
    {
      type: 'study',
      title: 'Computer Engineering',
      org: 'Universidad Europea de Madrid',
      current: true,
      period: 'Sep 2020 – Present',
      text: 'Development and maintenance of web applications with .NET Core, .NET Framework and SQL Server.',
      tech: ['Java', 'Python', 'HTML, CSS, JavaScript', 'SQL', 'AI'],
    },
    {
      type: 'work',
      title: 'Junior .NET Developer',
      org: 'NCS Spain',
      period: 'Feb 2024 – Aug 2025',
      text: 'Development and maintenance of web applications with .NET Core, .NET Framework and SQL Server.',
      tech: ['C#', '.NET Core', '.NET Framework', 'SQL Server', 'Git'],
    },
    {
      type: 'work',
      title: 'Junior Developer',
      org: 'CIM ECM',
      period: 'Sep 2025 – Feb 2026',
      text: 'Development of small tasks in Java. API maintenance and testing with Postman.',
      tech: ['Java', 'Postman', 'PowerShell'],
    },
    {
      type: 'work',
      title: 'Development Support Technician',
      org: 'Cegid',
      current: true,
      period: 'May 2026 – Present',
      text: 'Incident resolution and technical support. Code debugging and modification. Creating and modifying elements through SQL and Oracle databases.',
      tech: ['PeopleNet', 'Proprietary LN4 language', 'SQL'],
    },
  ],

  // ---------- SKILLS ----------
  skills: [
    {
      category: 'Languages',
      items: ['C#', 'HTML', 'JavaScript', 'SQL', 'Python'],
    },
    {
      category: 'Backend & data',
      items: ['.NET Core', '.NET Framework', 'ASP.NET', 'Entity Framework', 'SQL Server'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Visual Studio Code', 'Visual Studio 2022', 'Postman', 'PowerShell'],
    },
  ],

  // ---------- HOBBIES ----------
  hobbies: [
    {
      icon: 'medal',
      tone: 'fuchsia',
      title: 'Basketball',
      text: 'I enjoy playing all kinds of sports, but I love playing and competing in basketball.',
      tag: 'Basketball',
    },
    {
      icon: 'music',
      tone: 'emerald',
      title: 'Music',
      text: 'I love listening to (almost) every kind of music. I also play Spanish and electric guitar.',
      tag: 'Music',
    },
    {
      icon: 'bookOpenText',
      tone: 'indigo',
      title: 'Reading',
      text: 'I love setting aside some time every day to read.',
      tag: 'Reading',
    },
  ],

  // ---------- HOME PAGE ----------
  home: {
    pill: 'Goal: international scholarships & internships · 2027', // TODO
    titleLine1: 'Computer Engineer',
    titleLine2: 'in progress.',
    intro:
      'Computer Engineering student with more than two years of experience as a developer.',
    ctaProjects: 'See projects',
    ctaContact: 'Get in touch',
    stats: [
      { value: '2+', label: 'Years as a developer' },
      { value: '4', label: 'Published projects', tone: 'indigo' },
      { value: '2027', label: 'Graduation', tone: 'emerald' },
      { value: 'B2', label: 'English level', tone: 'cyan' },
    ],
    code: {
      comment: '// Candidate profile',
      variable: 'candidate',
      fields: [
        { key: 'name', value: 'Oscar Llorens' },
        { key: 'role', value: '.NET Developer' },
        { key: 'stack', value: ['C#', '.NET', 'SQL Server', 'Azure'] },
        { key: 'languages', value: ['Spanish', 'English'] },
        { key: 'seeking', value: 'International scholarship 2027' },
        { key: 'available', value: true },
      ],
      command: '$ candidate.build()',
      result: 'Build succeeded',
      statusLabel: 'Open to new opportunities',
      statusTag: 'Replies within 24h',
    },
    bento: {
      eyebrow: 'At a glance',
      title: 'What I do and how I work',
      intro: 'A snapshot of my main project, my tools and what I do away from the code.',
      featuredBadge: 'Featured project',
      hobbies: {
        badge: 'Off the keyboard',
        aside: 'Hobbies',
        title: 'What drives me',
        intro: 'Some of my hobbies to unwind:',
        footer: 'Some of my hobbies.',
        footerStrong: 'Hobbies',
      },
      stack: {
        badge: 'Technologies',
        aside: 'Used in production',
        title: 'My stack',
        intro: "Tools I've worked with:",
        footer: 'Always learning',
        footerStrong: 'Hard Skills',
      },
      why: {
        badge: 'Why me',
        aside: 'In short',
        title: 'What I bring to a team',
        intro: 'Some of my qualities as a team player:',
        points: [
          { title: 'Developer experience:', text: 'I have more than two years of experience as a developer.' },
          { title: 'Eager to help and learn:', text: 'I bring enthusiasm and commitment to helping others and constantly learning.' },
          { title: 'Highly adaptable:', text: 'I adapt quickly to new environments and technologies.' },
          { title: 'Autonomy:', text: "Once I'm given a task, I can manage it independently and work my way through problems on my own." },
        ],
        cta: "Let's talk",
      },
    },
    work: {
      eyebrow: 'Projects',
      title: 'Selected work',
      intro: 'Professional, personal and university projects.',
    },
    cta: {
      pill: 'Available for 2027',
      title: 'Shall we build something together?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Get in touch about a scholarship, an internship or a project.',
      button: 'Send an email',
    },
  },

  // ---------- PROJECTS PAGE ----------
  projectsPage: {
    eyebrow: 'Projects',
    title: "What I've",
    titleAccent: 'built',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Web applications, backend and data.',
    filterLabel: 'Filter projects by category',
    filterAll: 'All',
    achievements: {
      eyebrow: 'Achievements',
      title: 'Recognition and numbers',
      items: [
        { icon: 'award', tone: 'cyan', label: 'Award', value: 'Lorem', title: 'Lorem ipsum 2025', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', foot: 'Lorem', footStrong: 'Ipsum' },
        { icon: 'graduation', tone: 'indigo', label: 'Grades', value: '6.5', title: 'Average grade', text: 'Sed do eiusmod tempor incididunt ut labore et dolore.', foot: 'Lorem', footStrong: 'Ipsum' },
        { icon: 'file', tone: 'fuchsia', label: 'Certification', value: 'Lorem', title: 'Lorem ipsum dolor', text: 'Ut enim ad minim veniam, quis nostrud exercitation.', foot: 'Lorem', footStrong: 'Ipsum' },
        { icon: 'github', tone: 'emerald', label: 'Open source', value: '0+', title: 'Contributions', text: 'Duis aute irure dolor in reprehenderit in voluptate.', foot: 'Lorem', footStrong: 'Ipsum' },
      ],
    },
    cta: {
      eyebrow: 'Contact',
      title: 'Interested in my profile?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: 'Get in touch',
    },
  },

  // ---------- ABOUT PAGE ----------
  about: {
    eyebrow: 'About me',
    title: 'Behind the',
    titleAccent: 'code',
    intro:
      "I'm a 25-year-old Computer Engineering student with more than two years of experience as a developer. I love technology and learning new things. I'm also passionate about basketball and outdoor activities.",
    stats: [
      { label: 'Education', value: 'Comp. Engineering', note: 'Graduating 2027', tone: 'indigo' },
      { label: 'Experience', value: '2+ years', note: '.NET and SQL', tone: 'emerald' },
      { label: 'Languages', value: 'ES · EN', note: 'English B2', tone: 'cyan' },
      { label: 'Location', value: 'Madrid', note: 'Spain', tone: 'fuchsia' },
    ],
    journey: { eyebrow: 'Background', title: 'My journey', range: '2022 – 2027' },
    availability: {
      eyebrow: "What I'm looking for",
      title: 'Availability',
      items: [
        { title: 'International scholarships', tag: '2027', text: "I'm looking for international internships during the summer or the Christmas break." },
      ],
      placesLabel: 'Preferred destinations',
      places: ['San Francisco', 'San Rafael', 'Los Angeles', 'Remote'],
      footerTitle: 'San Francisco',
      footerText: 'Favourite destination',
    },
    beyond: {
      eyebrow: 'Beyond code',
      title: 'Outside the IDE',
      intro: '',
    },
    stack: { eyebrow: 'Skills', title: 'Technologies', aside: 'Tested in real projects' },
    cta: {
      pill: 'Available for 2027',
      title: "Let's talk",
      text: 'Download my CV or write to me directly.',
    },
  },

  // ---------- CONTACT PAGE ----------
  contact: {
    eyebrow: 'Contact',
    title: 'Want to know more about me?',
    titleAccent: 'Write to me',
    intro: "If you'd like to learn more about my profile or talk about a project or a scholarship, write to me and I'll reply within 24 hours.",
    meta: [
      { icon: 'clock', text: 'Replies within 24h' },
      { icon: 'map-pin', text: 'Madrid, Spain · Remote' },
      { icon: 'globe', text: 'Spanish and English' },
    ],
    direct: {
      title: 'Write to me',
      badge: 'Available',
      text: 'Email is the fastest way to reach me.',
      inboxLabel: 'Email',
    },
    tiles: [
      { icon: 'calendar', label: 'Availability', value: '2027', note: 'Graduating in June' },
      { icon: 'map-pin', label: 'Location', value: 'Madrid', note: 'Open to relocation' },
      { icon: 'clock', label: 'Time zone', value: 'CET (UTC+1)', note: 'Flexible hours' },
    ],
    profiles: { title: 'Profiles', aside: 'Online' },
    cv: { title: 'Résumé', text: 'PDF version, up to date' },
  },

  footer: {
    tagline: '.NET Developer · Computer Engineering student',
    note: '',
  },
};
