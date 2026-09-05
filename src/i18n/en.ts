import type { Dictionary } from './es';

export const en: Dictionary = {
  lang: 'en',
  meta: {
    title: 'Beley Gómez Urdaneta | AI, Automation and Backend',
    description:
      'Portfolio of Beley Gómez Urdaneta, a developer focused on applied AI, process automation and scalable backends with Python, FastAPI and LangGraph.',
  },
  nav: {
    about: 'About',
    project: 'Project',
    services: 'Services',
    skills: 'Skills',
    certificates: 'Certificates',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'Professional portfolio',
    badge: 'Available for projects',
    location: 'Colombia · Remote',
    title: 'I build solutions with AI, automation and scalable backends.',
    photoAlt: 'Profile photo of Beley Gómez Urdaneta',
    description:
      'Developer focused on creating efficient products: AI-powered applications, conversational agents, API integrations and automated processes.',
    primaryCta: 'View featured project',
    secondaryCta: 'Chat on WhatsApp',
    cvCta: 'Download CV',
    demoCta: 'Book a demo',
    highlights: [
      'AI applied to real processes',
      'Backend with Python and FastAPI',
      'External API integrations',
    ],
  },
  project: {
    eyebrow: 'Featured project',
    title: 'AI scheduling agent',
    subtitle:
      'Conversational agent concept designed to automate appointment scheduling with Python, FastAPI, LangGraph and the Cal.com API.',
    problemLabel: 'Problem',
    problem:
      'Manual scheduling processes consume time, create friction and depend on repetitive responses.',
    solutionLabel: 'Solution',
    solution:
      'An agent with a conversational flow that understands requests, guides the user and executes scheduling actions against a real API.',
    impactLabel: 'Approach',
    impact:
      'Practical automation with a clear backend architecture, conversational logic and service exposure through FastAPI.',
    stackTitle: 'Stack',
    flowTitle: 'General flow',
    demoNote: 'The visual demo shows the concept. To see a functional demo, message me and we can coordinate a call.',
    flow: [
      'The user writes a request through the conversational channel.',
      'LangGraph controls state, intent and the flow steps.',
      'FastAPI exposes the service and connects the agent logic.',
      'The Cal.com API v2 allows the agenda to be queried and managed.',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'Cal.com API v2', 'Automation'],
  },
  services: {
    eyebrow: 'Services',
    title: 'What I can build for you',
    subtitle:
      'Solutions focused on saving time, automating repetitive tasks and creating useful digital products.',
    cta: 'Talk on WhatsApp',
    messagePrefix: 'Hi Beley, I am interested in: ',
    processTitle: 'How I work',
    items: [
      {
        title: 'AI agents for processes',
        description:
          'I design conversational agents to answer, schedule, capture clients or guide users through a clear flow.',
        bullets: ['Conversational flows', 'API integrations', 'LangGraph logic'],
      },
      {
        title: 'Process automation',
        description:
          'I identify repetitive tasks and turn them into automated flows to reduce manual work and errors.',
        bullets: ['Process mapping', 'Workflows', 'No-code/low-code automation'],
      },
      {
        title: 'Backend and APIs with Python',
        description:
          'I build clean and scalable backend services to expose business logic and external integrations.',
        bullets: ['FastAPI', 'REST APIs', 'External integrations'],
      },
    ],
    process: [
      'I understand your current process and what you want to improve.',
      'I propose a simple, useful and scalable solution.',
      'I build a first functional version and we iterate from there.',
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Core capabilities',
    subtitle:
      'A profile oriented toward building useful, maintainable and scalable solutions.',
    groups: [
      {
        title: 'AI and agents',
        items: ['Prompt Engineering', 'Agentic Workflows', 'LangChain', 'LangGraph'],
      },
      {
        title: 'Backend',
        items: ['Python', 'FastAPI', 'REST APIs', 'External integrations'],
      },
      {
        title: 'Automation',
        items: ['Workflows', 'Internal processes', 'No-code/low-code'],
      },
      {
        title: 'Tools',
        items: ['GitHub', 'Linux', 'Cal.com API v2', 'Technical documentation'],
      },
    ],
  },
  certificates: {
    eyebrow: 'Certificates',
    title: 'Training and technical validation',
    subtitle:
      'Certificates that support specialization in Python, AI, agents and automation.',
    credentialLabel: 'ID',
    view: 'View certificate',
    verify: 'Verify',
  },
  about: {
    eyebrow: 'About me',
    title: 'Developer focused on practical impact',
    description:
      'I am interested in creating scalable digital solutions, automating internal processes and building efficient products. My background combines self-taught learning with courses from Coursera and Sololearn.',
    educationTitle: 'Education and training',
    education: [
      'Self-taught training in AI and automation',
      'Coursera - Python for Data Science, AI & Development',
      'Sololearn - Python Developer, Prompt Engineering and Agentic Workflows',
    ],
    languagesTitle: 'Languages',
    languages: ['Native Spanish', 'English in progress'],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about your idea or project",
    subtitle:
      'If you want to automate a process, integrate AI or build a backend, you can message me directly.',
    whatsappTitle: 'Direct WhatsApp',
    whatsappText:
      'The fastest way to talk about availability, ideas or projects.',
    whatsappCta: 'Open WhatsApp',
    formTitle: 'Send a quick message',
    formSubtitle:
      'Fill out the form and WhatsApp will open with the message ready to send.',
    name: 'Name',
    email: 'Email',
    topic: 'Topic',
    message: 'Message',
    submit: 'Send via WhatsApp',
    topics: ['AI project', 'Automation', 'Backend/API', 'Book a demo', 'Other'],
    defaultMessage:
      'Hi Beley, I saw your portfolio and I want to talk about a project.',
    demoMessage: 'Hi Beley, I want to book a demo about your scheduling agent or AI automation.',
    note: 'You can also download my CV to review my experience and training.',
    emailLabel: 'Email',
    phoneLabel: 'WhatsApp',
  },
  footer: {
    built: 'Designed to highlight AI, automation and backend projects.',
    backToTop: 'Back to top',
  },
};
