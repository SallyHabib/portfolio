export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    title: 'Frontend Development',
    description:
      'Building modern, responsive user interfaces with React, TypeScript, HTML, CSS, and JavaScript.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: 'State Management & Data Fetching',
    description:
      'Managing application state with Redux, Saga, and React Query for optimal data flow and performance.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
    title: 'UI/UX & Accessibility',
    description:
      'Creating accessible, user-friendly interfaces with Material UI, React Aria, and WCAG compliance.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 18H6a4 4 0 010-8 5 5 0 019.9-1.5A4.5 4.5 0 1119 18z"/></svg>`,
    title: 'Development Tools & DevOps',
    description:
      'Using GitHub Actions, Jira, Sentry, Mix Panel, and Sonar Cube for efficient development workflows.',
  },
];

export type Skill = (typeof skills)[number];
