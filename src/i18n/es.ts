export const es = {
  lang: 'es',
  meta: {
    title: 'Beley Gómez Urdaneta | IA, Automatización y Backend',
    description:
      'Portafolio de Beley Gómez Urdaneta, desarrollador enfocado en IA aplicada, automatización de procesos y backends escalables con Python, FastAPI y LangGraph.',
  },
  nav: {
    about: 'Sobre mí',
    project: 'Proyecto',
    skills: 'Habilidades',
    certificates: 'Certificados',
    contact: 'Contacto',
  },
  hero: {
    eyebrow: 'Portafolio profesional',
    title: 'Construyo soluciones con IA, automatización y backends escalables.',
    description:
      'Desarrollador enfocado en crear productos eficientes: aplicaciones potenciadas con IA, agentes conversacionales, integraciones con APIs y procesos automatizados.',
    primaryCta: 'Ver proyecto destacado',
    secondaryCta: 'Hablar por WhatsApp',
    cvCta: 'Descargar CV',
    highlights: [
      'IA aplicada a procesos reales',
      'Backend con Python y FastAPI',
      'Integración con APIs externas',
    ],
  },
  project: {
    eyebrow: 'Proyecto destacado',
    title: 'Agente de agendamiento con IA',
    subtitle:
      'Agente conversacional que automatiza la agenda de citas integrando IA conversacional con la API de Cal.com.',
    problemLabel: 'Problema',
    problem:
      'Los procesos manuales de agendamiento consumen tiempo, generan fricción y dependen de respuestas repetitivas.',
    solutionLabel: 'Solución',
    solution:
      'Un agente con flujo conversacional capaz de entender solicitudes, guiar al usuario y ejecutar acciones de agendamiento sobre una API real.',
    impactLabel: 'Enfoque',
    impact:
      'Automatización práctica con arquitectura backend clara, lógica conversacional y exposición de servicios mediante FastAPI.',
    stackTitle: 'Stack',
    flowTitle: 'Flujo general',
    flow: [
      'El usuario escribe una solicitud desde el canal conversacional.',
      'LangGraph controla el estado, la intención y los pasos del flujo.',
      'FastAPI expone el servicio y conecta la lógica del agente.',
      'La API de Cal.com v2 permite consultar y gestionar la agenda.',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'Cal.com API v2', 'Automatización'],
  },
  skills: {
    eyebrow: 'Habilidades',
    title: 'Capacidades principales',
    subtitle:
      'Un perfil orientado a construir soluciones útiles, mantenibles y escalables.',
    groups: [
      {
        title: 'IA y agentes',
        items: ['Prompt Engineering', 'Agentic Workflows', 'LangChain', 'LangGraph'],
      },
      {
        title: 'Backend',
        items: ['Python', 'FastAPI', 'APIs REST', 'Integraciones externas'],
      },
      {
        title: 'Automatización',
        items: ['Workflows', 'Procesos internos', 'No-code/low-code'],
      },
      {
        title: 'Herramientas',
        items: ['GitHub', 'Linux', 'Cal.com API v2', 'Documentación técnica'],
      },
    ],
  },
  certificates: {
    eyebrow: 'Certificados',
    title: 'Formación y validación técnica',
    subtitle:
      'Certificados que respaldan la especialización en Python, IA, agentes y automatización.',
    credentialLabel: 'ID',
    view: 'Ver certificado',
    verify: 'Verificar',
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Desarrollador enfocado en impacto práctico',
    description:
      'Me interesa crear soluciones digitales escalables, automatizar procesos internos y construir productos eficientes. Mi formación combina aprendizaje autodidacta con cursos de Coursera y Sololearn.',
    educationTitle: 'Educación y formación',
    education: [
      'Formación autodidacta en IA y automatización',
      'Coursera - Python for Data Science, AI & Development',
      'Sololearn - Python Developer, Prompt Engineering y Agentic Workflows',
    ],
    languagesTitle: 'Idiomas',
    languages: ['Español nativo', 'Inglés en progreso'],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos de tu idea o proyecto',
    subtitle:
      'Si quieres automatizar un proceso, integrar IA o construir un backend, puedes escribirme directamente.',
    whatsappTitle: 'WhatsApp directo',
    whatsappText:
      'La vía más rápida para hablar sobre disponibilidad, ideas o proyectos.',
    whatsappCta: 'Abrir WhatsApp',
    formTitle: 'Enviar mensaje rápido',
    formSubtitle:
      'Completa el formulario y se abrirá WhatsApp con el mensaje listo para enviar.',
    name: 'Nombre',
    email: 'Email',
    topic: 'Tema',
    message: 'Mensaje',
    submit: 'Enviar por WhatsApp',
    topics: ['Proyecto con IA', 'Automatización', 'Backend/API', 'Otro'],
    defaultMessage:
      'Hola Beley, vi tu portafolio y quiero hablar sobre un proyecto.',
    note: 'También puedes descargar mi CV para revisar mi experiencia y formación.',
    emailLabel: 'Email',
    phoneLabel: 'WhatsApp',
  },
  footer: {
    built: 'Diseñado para destacar proyectos de IA, automatización y backend.',
    backToTop: 'Volver arriba',
  },
};

export type Dictionary = typeof es;
