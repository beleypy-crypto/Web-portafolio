export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image?: string;
  file?: string;
  verifyUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'Coursera / IBM',
    date: '2026-08-29',
    image: undefined,
    file: '/assets/certificados/python-data-science-ai-development-coursera.pdf',
    verifyUrl: 'https://coursera.org/verify/TOR6X87BOXW5',
  },
  {
    title: 'Prompt Engineering',
    issuer: 'Sololearn',
    date: '2026-07-05',
    credentialId: 'CC-7M9CVRS4',
    image: '/assets/certificados/prompt-engineering.jpg',
  },
  {
    title: 'Agentic Workflows',
    issuer: 'Sololearn',
    date: '2026-07-06',
    credentialId: 'CC-Y5GDLLJ2',
    image: '/assets/certificados/agentic-workflows.jpg',
  },
  {
    title: 'Python Developer',
    issuer: 'Sololearn',
    date: '2025-12-17',
    credentialId: 'CC-ZSJRDFHI',
    image: '/assets/certificados/python-developer.jpg',
  },
];
