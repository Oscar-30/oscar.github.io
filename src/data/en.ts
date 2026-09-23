// ============================================================
// CONTENT IN ENGLISH
// Same structure as es.ts. Keep both files in sync:
// if you add a job or project in es.ts, add it here too.
// ============================================================
import type { Content } from './types';

export const en: Content = {
  meta: {
    // TODO
    title: 'Lorem Ipsum | Software Engineer',
    // TODO
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. .NET developer and Computer Engineering student.',
  },

  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
    switchLang: 'Español',
    themeLabel: 'Switch between light and dark mode',
  },

  hero: {
    role: '.NET developer and Computer Engineering student',
    // TODO
    tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    // TODO
    status: 'Looking for international scholarships and internships for 2027',
    ctaProjects: 'See projects',
    ctaCv: 'Download CV',
  },

  about: {
    title: 'About me',
    // TODO
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
      'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
    ],
  },

  experience: {
    title: 'Experience',
    // TODO
    jobs: [
      {
        company: 'Lorem Ipsum S.L.',
        role: '.NET Developer',
        location: 'Madrid, Spain',
        start: 'Sep 2024',
        end: 'Present',
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
        role: 'Software Developer Intern',
        location: 'Madrid, Spain',
        start: 'Feb 2024',
        end: 'Aug 2024',
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
    title: 'Projects',
    intro: 'A selection of personal and university projects.',
    repoLabel: 'Code',
    demoLabel: 'Demo',
    // TODO
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
    title: 'Skills',
    // TODO
    groups: [
      { category: 'Languages', items: ['C#', 'SQL', 'JavaScript', 'Lorem'] },
      { category: 'Backend', items: ['.NET Core', '.NET Framework', 'ASP.NET', 'Entity Framework'] },
      { category: 'Databases', items: ['SQL Server', 'Lorem', 'Ipsum'] },
      { category: 'Tools', items: ['Git', 'Visual Studio', 'Azure DevOps', 'Lorem'] },
    ],
  },

  education: {
    title: 'Education',
    // TODO
    studies: [
      {
        degree: 'BSc in Computer Engineering',
        institution: 'Lorem Ipsum University',
        start: '2022',
        end: '2027',
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
    languagesTitle: 'Languages',
    // TODO
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Lorem (B2 / C1)' },
    ],
  },

  contact: {
    title: 'Contact',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Get in touch about a scholarship, an internship or a project.',
    emailLabel: 'Send an email',
  },

  footer: {
    text: 'Built with Astro and published on GitHub Pages.',
  },
};
