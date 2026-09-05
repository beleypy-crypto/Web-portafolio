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
    skills: 'Skills',
    certificates: 'Certificates',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'Professional portfolio',
    title: 'I build solutions with AI, automation and scalable backends.',
    description:
      'Developer focused on creating efficient products: AI-powered applications, conversational agents, API integrations and automated processes.',
    primaryCta: 'View featured project',
    secondaryCta: 'Chat on WhatsApp',
    cvCta: 'Download CV',
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
      'A conversational agent that automates appointment scheduling by combining conversational AI with the Cal.com API.',
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
    flow: [
      'The user writes a request through the conversational channel.',
      'LangGraph controls state, intent and the flow steps.',
      'FastAPI exposes the service and connects the agent logic.',
      'The Cal.com API v2 allows the agenda to be queried and managed.',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'Cal.com API v2', 'Automation'],
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
    topics: ['AI project', 'Automation', 'Backend/API', 'Other'],
    defaultMessage:
      'Hi Beley, I saw your portfolio and I want to talk about a project.',
    note: 'You can also download my CV to review my experience and training.',
    emailLabel: 'Email',
    phoneLabel: 'WhatsApp',
  },
  footer: {
    built: 'Designed to highlight AI, automation and backend projects.',
    backToTop: 'Back to top',
  },
};
