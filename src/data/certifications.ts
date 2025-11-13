import AWSIcon from '../assets/logos/AWS-logo.svg?raw';

export const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    provider: 'AWS',
    issuer: 'Amazon Web Services',
    issueDate: '2021',
    expiryDate: '2024',
    credentialUrl: 'https://www.credly.com/badges/5a4c49a1-c250-4050-b35a-578d2171f34e/public_url',
    description:
      'Foundational understanding of AWS Cloud concepts, services, and terminology.',
    icon: AWSIcon,
    image:
      'https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
  },
  {
    title: 'International TOEFL iBT® Internet-Based Test',
    provider: 'TOEFL',
    issuer: 'Educational Testing Service',
    issueDate: '2014',
    expiryDate: null,
    credentialUrl: '',
    description:
      'English language proficiency certification for non-native speakers.',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
    image: '',
  },
];

export type Certification = (typeof certifications)[number];
