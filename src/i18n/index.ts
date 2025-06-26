import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About',
        competencies: 'Competencies',
        portfolio: 'Portfolio',
        contact: 'Contact',
      },
      theme: {
        light: 'Light Mode',
        dark: 'Dark Mode',
      },
      footer: {
        rights: 'All rights reserved.',
      },
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',

      // Hero Section
      'hero.title': 'Addie Jones',
      'hero.subtitle': 'Full-Spectrum Narrative Strategist',
      'hero.description': 'Transforming complex stories into compelling narratives that drive impact.',

      // About Section
      'about.title': 'About Me',
      'about.description': 'I am a passionate storyteller and strategic communicator with expertise in journalism, leadership, and advocacy.',

      // Experience Section
      'experience.title': 'Professional Experience',
      'experience.intern': 'Legislative Policy Intern',
      'experience.editor': 'Lifestyles Editor',
      'experience.content': 'Content Writing Intern',

      // Portfolio Section
      'portfolio.title': 'Portfolio',
      'portfolio.journalism': 'Journalism',
      'portfolio.leadership': 'Leadership',
      'portfolio.advocacy': 'Advocacy',
      portfolio: {
        title: 'A Deeper Dive: My Work & Philosophy',
        description: 'Explore my portfolio of journalism, leadership, and advocacy projects.',
        journalism: 'Journalism',
        leadership: 'Leadership',
        advocacy: 'Advocacy',
        journalismDescription: 'A selection of my published articles and journalistic work.',
        leadershipDescription: 'Highlights of my leadership roles and projects.',
        advocacyDescription: 'Advocacy initiatives and campaigns I have led or contributed to.',
      },

      // Contact Section
      'contact.title': 'Get in Touch',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.linkedin': 'LinkedIn',

      competencies: {
        title: 'Core Competencies',
        description: 'A comprehensive overview of my key skills and expertise areas in political communication and policy.',
        writing: {
          title: 'Political Writing',
          description: 'Expert in crafting compelling political narratives, policy briefs, and strategic communications.',
        },
        leadership: {
          title: 'Team Leadership',
          description: 'Proven track record in leading diverse teams and managing complex political campaigns.',
        },
        communication: {
          title: 'Strategic Communication',
          description: 'Skilled in developing and executing effective communication strategies for political initiatives.',
        },
        policy: {
          title: 'Policy Analysis',
          description: 'Strong background in analyzing and developing policy positions and legislative strategies.',
        },
        research: {
          title: 'Political Research',
          description: 'Experienced in conducting thorough research on political issues, trends, and public opinion.',
        },
        strategy: {
          title: 'Campaign Strategy',
          description: 'Expertise in developing and implementing winning campaign strategies and messaging frameworks.',
        },
      },
    },
  },
  es: {
    translation: {
      nav: {
        about: 'Sobre Mí',
        competencies: 'Competencias',
        portfolio: 'Portafolio',
        contact: 'Contacto',
      },
      theme: {
        light: 'Modo Claro',
        dark: 'Modo Oscuro',
      },
      footer: {
        rights: 'Todos los derechos reservados.',
      },
      // Navigation
      'nav.home': 'Inicio',
      'nav.about': 'Sobre Mí',
      'nav.experience': 'Experiencia',
      'nav.portfolio': 'Portafolio',
      'nav.contact': 'Contacto',

      // Hero Section
      'hero.title': 'Addie Jones',
      'hero.subtitle': 'Estratega Narrativa Integral',
      'hero.description': 'Transformando historias complejas en narrativas convincentes que generan impacto.',

      // About Section
      'about.title': 'Sobre Mí',
      'about.description': 'Soy una narradora apasionada y comunicadora estratégica con experiencia en periodismo, liderazgo y defensa.',

      // Experience Section
      'experience.title': 'Experiencia Profesional',
      'experience.intern': 'Pasante de Política Legislativa',
      'experience.editor': 'Editora de Estilos de Vida',
      'experience.content': 'Pasante de Redacción de Contenidos',

      // Portfolio Section
      'portfolio.title': 'Portafolio',
      'portfolio.journalism': 'Periodismo',
      'portfolio.leadership': 'Liderazgo',
      'portfolio.advocacy': 'Defensa',
      portfolio: {
        title: 'Un Análisis Profundo: Mi Trabajo y Filosofía',
        description: 'Explora mi portafolio de proyectos de periodismo, liderazgo y defensa.',
        journalism: 'Periodismo',
        leadership: 'Liderazgo',
        advocacy: 'Defensa',
        journalismDescription: 'Una selección de mis artículos publicados y trabajos periodísticos.',
        leadershipDescription: 'Destacados de mis roles y proyectos de liderazgo.',
        advocacyDescription: 'Iniciativas y campañas de defensa en las que he liderado o contribuido.',
      },

      // Contact Section
      'contact.title': 'Contacto',
      'contact.email': 'Correo',
      'contact.phone': 'Teléfono',
      'contact.linkedin': 'LinkedIn',

      competencies: {
        title: 'Competencias Principales',
        description: 'Una visión general de mis habilidades clave y áreas de experiencia en comunicación política y políticas públicas.',
        writing: {
          title: 'Redacción Política',
          description: 'Experta en la creación de narrativas políticas convincentes, informes de políticas y comunicaciones estratégicas.',
        },
        leadership: {
          title: 'Liderazgo de Equipo',
          description: 'Historial comprobado en liderar equipos diversos y gestionar campañas políticas complejas.',
        },
        communication: {
          title: 'Comunicación Estratégica',
          description: 'Experta en desarrollar y ejecutar estrategias de comunicación efectivas para iniciativas políticas.',
        },
        policy: {
          title: 'Análisis de Políticas',
          description: 'Sólida formación en análisis y desarrollo de posiciones políticas y estrategias legislativas.',
        },
        research: {
          title: 'Investigación Política',
          description: 'Experiencia en la realización de investigaciones exhaustivas sobre temas políticos, tendencias y opinión pública.',
        },
        strategy: {
          title: 'Estrategia de Campaña',
          description: 'Experiencia en el desarrollo e implementación de estrategias de campaña ganadoras y marcos de mensajería.',
        },
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 