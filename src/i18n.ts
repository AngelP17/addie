import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.about': 'About',
      'nav.competencies': 'Competencies',
      'nav.work': 'Work',
      'nav.contact': 'Contact',

      // Hero Section
      'hero.title': 'Addie Jones',
      'hero.subtitle': 'Architect of Empathetic Narratives',
      'hero.description': 'A full-spectrum strategist weaving stories in journalism, communications, and advocacy.',
      'hero.cta': 'View My Work',

      // About Section
      'about.title': 'My Approach',
      'about.description': 'I am a versatile and mission-driven storyteller operating at the intersection of journalism, strategic communications, and community advocacy. My work is defined by a singular purpose: to uncover, analyze, and amplify narratives of social and cultural significance.',
      'about.quote': 'The core skill remains constant; only the subject of her empathy changes.',

      // Competencies Section
      'competencies.title': 'Core Competencies',
      'competencies.description': 'Five pillars of expertise that define my approach to narrative strategy and storytelling.',
      'competencies.journalism.title': 'Investigative Journalism',
      'competencies.journalism.description': 'Deep-dive reporting, document analysis, systemic inquiry',
      'competencies.writing.title': 'Feature & Arts Writing',
      'competencies.writing.description': 'Cultural criticism, human interest, narrative trust',
      'competencies.leadership.title': 'Editorial Leadership',
      'competencies.leadership.description': 'Team management, vision development, content strategy',
      'competencies.communications.title': 'Strategic Communications',
      'competencies.communications.description': 'Brand narrative, marketing copy, audience engagement',
      'competencies.advocacy.title': 'Community Advocacy',
      'competencies.advocacy.description': 'Nonprofit leadership, literacy promotion, grassroots organizing',

      // Portfolio Section
      'portfolio.title': 'A Deeper Dive: My Work & Philosophy',
      'portfolio.description': 'This is the centerpiece of my portfolio, showcasing three pillars of my work through detailed examples and analysis.',
      'portfolio.journalist.title': 'The Journalist\'s Craft',
      'portfolio.leader.title': 'The Strategic Leader',
      'portfolio.advocate.title': 'The Community Advocate',

      // Contact Section
      'contact.title': 'Let\'s Connect',
      'contact.description': 'Ready to collaborate on meaningful storytelling? I\'d love to hear from you.',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.subject': 'Subject',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Send Message',
      'contact.links.title': 'Professional Links',
      'contact.links.linkedin': 'LinkedIn Profile',
      'contact.interests.title': 'Areas of Interest',
    }
  },
  es: {
    translation: {
      // Navigation
      'nav.about': 'Acerca',
      'nav.competencies': 'Competencias',
      'nav.work': 'Trabajo',
      'nav.contact': 'Contacto',

      // Hero Section
      'hero.title': 'Addie Jones',
      'hero.subtitle': 'Arquitecta de Narrativas Empáticas',
      'hero.description': 'Una estratega integral que teje historias en periodismo, comunicaciones y defensa.',
      'hero.cta': 'Ver Mi Trabajo',

      // About Section
      'about.title': 'Mi Enfoque',
      'about.description': 'Soy una narradora versátil y orientada a la misión que opera en la intersección del periodismo, las comunicaciones estratégicas y la defensa comunitaria. Mi trabajo se define por un propósito singular: descubrir, analizar y amplificar narrativas de importancia social y cultural.',
      'about.quote': 'La habilidad central permanece constante; solo cambia el sujeto de su empatía.',

      // Competencies Section
      'competencies.title': 'Competencias Principales',
      'competencies.description': 'Cinco pilares de experiencia que definen mi enfoque hacia la estrategia narrativa y la narración.',
      'competencies.journalism.title': 'Periodismo Investigativo',
      'competencies.journalism.description': 'Reportajes profundos, análisis de documentos, investigación sistémica',
      'competencies.writing.title': 'Escritura de Artículos y Arte',
      'competencies.writing.description': 'Crítica cultural, interés humano, confianza narrativa',
      'competencies.leadership.title': 'Liderazgo Editorial',
      'competencies.leadership.description': 'Gestión de equipos, desarrollo de visión, estrategia de contenido',
      'competencies.communications.title': 'Comunicaciones Estratégicas',
      'competencies.communications.description': 'Narrativa de marca, copy de marketing, engagement de audiencia',
      'competencies.advocacy.title': 'Defensa Comunitaria',
      'competencies.advocacy.description': 'Liderazgo sin fines de lucro, promoción de alfabetización, organización de base',

      // Portfolio Section
      'portfolio.title': 'Una Inmersión Profunda: Mi Trabajo y Filosofía',
      'portfolio.description': 'Esta es la pieza central de mi portafolio, mostrando tres pilares de mi trabajo a través de ejemplos detallados y análisis.',
      'portfolio.journalist.title': 'El Arte del Periodista',
      'portfolio.leader.title': 'El Líder Estratégico',
      'portfolio.advocate.title': 'El Defensor Comunitario',

      // Contact Section
      'contact.title': 'Conectemos',
      'contact.description': '¿Listo para colaborar en narrativas significativas? Me encantaría saber de ti.',
      'contact.form.name': 'Nombre',
      'contact.form.email': 'Correo',
      'contact.form.subject': 'Asunto',
      'contact.form.message': 'Mensaje',
      'contact.form.submit': 'Enviar Mensaje',
      'contact.links.title': 'Enlaces Profesionales',
      'contact.links.linkedin': 'Perfil de LinkedIn',
      'contact.interests.title': 'Áreas de Interés',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 