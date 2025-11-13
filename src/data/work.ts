import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: 'Front End Engineer II',
    company: 'Trella',
    region: 'Hybrid',
    dateRange: 'Jan 2022 - Present',
    description: [
      'Led the migration of the codebase to React 19, enhancing application performance and maintainability.',
      'Developed and integrated Rental Contracts for providers, significantly improving profitability and operational efficiency.',
      'Refactored the authentication flow to align with industry security standards, strengthening application security.',
      'Engineered background processing solutions for large file downloads, ensuring seamless user experience during app usage.',
      'Reengineered core components using React Aria to enhance accessibility and compliance with WCAG standards.',
      'Mentored junior engineers through structured code reviews, knowledge sharing sessions, and continuous feedback.',
      'Compiled and delivered monthly progress reports, providing key stakeholders with insights into project status and developments.',
      'Authored and maintained RFCs for the adoption of new technical tools and frameworks, facilitating informed decision-making.',
      'Played a key role in migrating state management from Redux Saga to React Query, optimizing data fetching and improving maintainability.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'HTML',
      'CSS',
      'JavaScript',
      'React Query',
      'Redux',
      'Saga',
      'Material UI',
      'React Aria',
      'Styled Components',
      'Sentry',
      'Mix Panel',
      'Sonar Cube',
      'GitHub',
      'Github Actions',
      'Jira',
    ],
  },
  {
    title: 'Front End Engineer',
    company: 'Getro',
    region: 'Remote',
    dateRange: 'Sep 2021 - Dec 2021',
    description: [
      'Designed and developed new features using React and JavaScript, enhancing application functionality and user experience.',
      'Diagnosed and resolved critical bugs, improving application reliability and user satisfaction.',
    ],
    technologies: [
      'React',
      'JavaScript',
    ],
  },
  {
    title: 'Front End Engineer',
    company: 'DocuSign',
    region: 'Hybrid',
    dateRange: 'Dec 2020 - Aug 2021',
    description: [
      'Developed and implemented new features using React and TypeScript.',
      'Identified, diagnosed, and resolved bugs to enhance application stability and user satisfaction.',
    ],
    technologies: [
      'React',
      'TypeScript',
    ],
  },
  {
    title: 'Full Stack Engineer',
    company: 'Callvita',
    region: 'Hybrid',
    dateRange: 'Jun 2019 - Nov 2020',
    description: [
      'Designed and developed full-stack applications, building web frontends with React.js, backends with Node.js, and cross-platform mobile apps with React Native.',
      'Integrated payment gateways such as Stripe and Fawry, ensuring secure and efficient transaction processing.',
      'Leveraged AWS services for hosting, security, and authentication, optimizing infrastructure for scalability and reliability.',
      'Led development milestones and collaborated with engineering teams to enhance system performance, scalability, and maintainability.',
    ],
    technologies: [
      'React',
      'React Native',
      'Node.js',
      'Express',
      'AWS',
      'Stripe',
      'Fawry',
    ],
  },
  {
    title: 'Web Developer',
    company: 'ULM University',
    region: 'Ulm, Germany',
    dateRange: 'Jun 2018 - Aug 2018',
    description: [
      'Developed and implemented user interfaces using Angular 5, enhancing functionality and user experience.',
      'Localized the website to support three languages (Arabic, English, and German), improving accessibility and user engagement across diverse audiences.',
    ],
    technologies: [
      'Angular 5',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
    ],
  },
];

export type WorkItem = (typeof work)[number];
