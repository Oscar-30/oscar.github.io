// ============================================================
// CONTENT IN ENGLISH
// Same structure as es.ts. Keep both files in sync:
// if you add a project or job in es.ts, add it here too.
// ============================================================
import type { Content } from './types';

export const en: Content = {
  pages: {
    home: {
      title: 'Lorem Ipsum | Software Engineer', // TODO
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

  status: 'Scholarships 2027 · Available', // TODO

  labels: {
    code: 'Code',
    demo: 'Demo',
    viewAll: 'See all projects',
    copy: 'Copy',
    copied: 'Copied',
    downloadCv: 'Download CV',
    current: 'Present',
  },

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

  journey: [
    {
      type: 'work',
      title: '.NET Developer',
      org: 'Lorem Ipsum S.L.',
      period: '2024 – now',
      current: true,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tech: ['C#', '.NET Core', 'SQL Server'],
    },
    {
      type: 'work',
      title: 'Software Developer Intern',
      org: 'Dolor Sit Amet S.A.',
      period: '2023 – 2024',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tech: ['C#', '.NET Framework', 'SQL'],
    },
    {
      type: 'study',
      title: 'BSc in Computer Engineering',
      org: 'Lorem Ipsum University',
      period: '2022 – 2027',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Specialisation in lorem ipsum.',
      tech: ['Algorithms', 'Databases', 'Software engineering'],
    },
  ],

  skills: [
    {
      category: 'Languages',
      items: ['C#', 'SQL', 'JavaScript', 'Python', 'Lorem'],
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      category: 'Backend & data',
      items: ['.NET Core', '.NET Framework', 'ASP.NET', 'Entity Framework', 'SQL Server'],
      note: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
    {
      category: 'Tools',
      items: ['Git', 'Visual Studio', 'Azure DevOps', 'Docker', 'Lorem'],
      note: 'Duis aute irure dolor in reprehenderit in voluptate.',
    },
  ],

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

  home: {
    pill: 'Goal: international scholarships & internships · 2027', // TODO
    titleLine1: '.NET Developer',
    titleLine2: 'and engineer in the making.',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
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
        { key: 'name', value: 'Lorem Ipsum' },
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
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit:',
        footer: 'Lorem ipsum dolor sit',
        footerStrong: 'Lorem ipsum',
      },
      stack: {
        badge: 'Technologies',
        aside: 'Used in production',
        title: 'My stack',
        intro: 'The tools I use to build applications end to end:',
        footer: 'Always learning',
        footerStrong: 'Right now: Lorem ipsum', // TODO
      },
      why: {
        badge: 'Why me',
        aside: 'In short',
        title: 'What I bring to a team',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit:',
        points: [
          { title: 'Production experience:', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
          { title: 'Lorem ipsum:', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
          { title: 'Dolor sit amet:', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
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
        { icon: 'graduation', tone: 'indigo', label: 'Grades', value: '0.0', title: 'GPA', text: 'Sed do eiusmod tempor incididunt ut labore et dolore.', foot: 'Lorem', footStrong: 'Ipsum' },
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

  about: {
    eyebrow: 'About me',
    title: 'Behind the',
    titleAccent: 'code',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    stats: [
      { label: 'Education', value: 'Comp. Engineering', note: 'Graduating 2027', tone: 'indigo' },
      { label: 'Experience', value: '2+ years', note: '.NET and SQL', tone: 'emerald' },
      { label: 'Languages', value: 'ES · EN', note: 'English lorem', tone: 'cyan' },
      { label: 'Location', value: 'Lorem', note: 'Spain', tone: 'fuchsia' },
    ],
    journey: { eyebrow: 'Background', title: 'My journey', range: '2022 – 2027' },
    availability: {
      eyebrow: "What I'm looking for",
      title: 'Availability',
      items: [
        { title: 'International scholarships', tag: '2027', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { title: 'Internship or first job', tag: 'Lorem', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      ],
      placesLabel: 'Preferred destinations',
      places: ['Lorem', 'Ipsum', 'Dolor', 'Remote'],
      footerTitle: 'Lorem ipsum dolor',
      footerText: 'Sit amet consectetur',
    },
    beyond: {
      eyebrow: 'Beyond code',
      title: 'Outside the IDE',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    stack: { eyebrow: 'Skills', title: 'Technologies', aside: 'Tested in real projects' },
    cta: {
      pill: 'Available for 2027',
      title: "Let's talk",
      text: 'Download my CV or write to me directly.',
    },
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about",
    titleAccent: 'your project',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Get in touch about a scholarship, an internship or a project.',
    meta: [
      { icon: 'clock', text: 'Replies within 24h' },
      { icon: 'map-pin', text: 'Lorem, Spain · Remote' }, // TODO
      { icon: 'globe', text: 'Spanish and English' },
    ],
    direct: {
      title: 'Write to me',
      badge: 'Available',
      text: 'Email is the fastest way to reach me.',
      inboxLabel: 'Email',
    },
    tiles: [
      { icon: 'calendar', label: 'Availability', value: 'Lorem 2027', note: 'Lorem ipsum' },
      { icon: 'map-pin', label: 'Location', value: 'Lorem', note: 'Open to relocation' },
      { icon: 'clock', label: 'Time zone', value: 'CET (UTC+1)', note: 'Flexible hours' },
    ],
    profiles: { title: 'Profiles', aside: 'Online' },
    cv: { title: 'Résumé', text: 'PDF version, up to date' },
  },

  footer: {
    tagline: '.NET Developer · Computer Engineering student',
    note: 'Built with Astro and published on GitHub Pages.',
  },
};
