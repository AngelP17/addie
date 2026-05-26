import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About',
        competencies: 'Core Competencies',
        portfolio: 'Portfolio',
        freelance: 'Freelance',
        contact: 'Contact',
      },
      theme: {
        light: 'Light Mode',
        dark: 'Dark Mode',
      },
      footer: {
        rights: 'All rights reserved.',
      },
      hero: {
        title: 'Addie Jones',
        role1: 'Narrative Strategist',
        role2: 'Political Communications Expert',
        description: 'Transforming complex stories into compelling narratives that drive impact and foster meaningful connections. In 2026, joining Middle Seat full time as a Texting Coordinator.',
        cta: 'View My Work',
        contact: 'Get in Touch',
      },
      about: {
        title: 'About Me',
        bio: {
          p1: 'I\'m a narrative strategist and political communicator based in Fayetteville, Arkansas, with a deep commitment to storytelling that creates change. Pursuing a dual degree in Journalism and Political Science at the University of Arkansas, I bring an interdisciplinary lens to every project I take on.',
          p2: 'From editing a 30,000-reader campus newspaper to writing digital campaigns for progressive causes, my career has been built at the intersection of compelling writing and civic impact. In 2026, I will join Middle Seat full time as a Texting Coordinator.',
          p3: 'When I\'m not writing, you\'ll find me coordinating literacy volunteers, mentoring aspiring journalists, or strategizing my next move in advocacy spaces. I\'m passionate about building a more informed, engaged, and equitable public discourse.',
        },
        timeline: {
          title: 'Professional Journey',
        },
        stats: {
          title: 'Impact by the Numbers',
        },
        contact: {
          title: 'Connect With Me',
        },
      },
      timeline: {
        type: {
          education: 'Education',
          experience: 'Experience',
          achievement: 'Achievement',
        },
        textingCoordinator: {
          title: 'Texting Coordinator',
          org: 'Middle Seat',
          desc: 'Full-time role supporting progressive digital campaigns through peer-to-peer texting strategy, supporter engagement, and rapid-response political communication.',
        },
        emailIntern: {
          title: 'Email Intern',
          org: 'Middle Seat',
          desc: 'Develop and execute email fundraising campaigns for progressive political causes. Craft compelling narratives that drive engagement and support democratic candidates.',
        },
        editorialIntern: {
          title: 'Editorial Intern',
          org: 'The American Prospect',
          desc: 'Conduct editorial research and support content development for progressive policy journalism. Assist with fact-checking and background research for investigative pieces.',
        },
        govAffairsIntern: {
          title: 'Legislative Policy Intern',
          org: 'Democratic Party of Arkansas',
          desc: 'Evaluate proposed state legislation based on alignment with progressive policy priorities. Track 500+ bills through the legislative process in education and commerce committees.',
        },
        ballotpediaIntern: {
          title: 'Research Intern',
          org: 'Ballotpedia',
          desc: 'Conducted nonpartisan research and data analysis on elections, candidates, and ballot measures to support accurate, accessible civic information.',
        },
        copywritingIntern: {
          title: 'Marketing & Communications Intern',
          org: 'Art Bridges Foundation',
          desc: 'Crafted public-facing narratives about foundation programs reaching underserved communities. Conducted copy edits for museum partners\' exhibition texts and curatorial statements.',
        },
        legislativeIntern: {
          title: 'Legislative Policy Intern',
          org: 'Democratic Party of Arkansas',
          desc: 'Evaluated proposed legislation for alignment with progressive priorities, focusing on educational equity impacts on underrepresented communities.',
        },
        contentWriting: {
          title: 'Content Writing Intern',
          org: 'Sam M. Walton College of Business',
          desc: 'Write and edit weekly newsletter distributed to 30,000+ students, staff, parents, and alumni. Develop engaging content that promotes college initiatives and student engagement.',
        },
        lifestylesEditor: {
          title: 'Lifestyles Editor',
          org: 'Arkansas Traveler Newspaper',
          desc: 'Edit and curate arts, culture, entertainment, and opinion content for 30,000+ readers. Published 100+ articles covering music journalism, feature stories, and investigative reporting.',
        },
        education: {
          title: 'B.S. Journalism & Political Science',
          org: 'University of Arkansas',
          desc: 'Fulbright Honors Sturgis Fellow. Honors thesis on educational equity and book access in Northwest Arkansas. 3.903 GPA.',
        },
        nonprofitFounder: {
          title: 'Founder & Secretary',
          org: 'Bright Beginnings Books',
          desc: 'Founded 501(c)(3) nonprofit that has distributed 13,000+ new books to underserved students in all 50 states and 12 countries. Secured $7,000+ in fundraising.',
        },
      },
      competencies: {
        title: 'Core Competencies',
        description: 'A comprehensive overview of my key skills and expertise areas in political communication and policy.',
        keySkills: 'Key Skills',
        achievements: 'Key Achievements',
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
      portfolio: {
        title: 'A Deeper Dive: My Work & Philosophy',
        subtitle: 'Explore my portfolio of journalism, advocacy, and strategic communications.',
        description: 'Explore my portfolio of journalism, leadership, and advocacy projects.',
        journalism: 'Journalism',
        leadership: 'Leadership',
        advocacy: 'Advocacy',
        journalismDescription: 'A selection of my published articles and journalistic work.',
        leadershipDescription: 'Highlights of my leadership roles and projects.',
        advocacyDescription: 'Advocacy initiatives and campaigns I have led or contributed to.',
        search: 'Search articles...',
        downloadResume: 'Download Resume',
        readArticle: 'Read Article',
        noResults: 'No articles found. Try a different search.',
        viewAll: 'View All Articles',
        moreArticles: {
          title: 'More of My Work',
          description: 'Browse the full archive of my published journalism, opinion pieces, and investigative reports.',
        },
      },
      contact: {
        title: 'Get in Touch',
        description: 'Have a project in mind or want to collaborate? I\'d love to hear from you.',
        info: {
          title: 'Email',
          email: {
            desc: 'Best way to reach me for professional inquiries.',
          },
          phone: {
            desc: 'Available for calls during business hours.',
          },
          location: {
            desc: 'Based in Northwest Arkansas, available remotely.',
          },
        },
        form: {
          title: 'Send a Message',
          name: 'Full Name',
          email: 'Email Address',
          company: 'Company / Organization',
          subject: 'Subject',
          message: 'Message',
          submit: 'Send Message',
          sending: 'Sending...',
          success: {
            title: 'Message Sent!',
            message: 'Thank you for reaching out. I\'ll get back to you within 24-48 hours.',
          },
        },
        social: {
          title: 'Connect on Social',
        },
        response: {
          title: 'Response Time',
          message: 'I typically respond within 24-48 hours on weekdays.',
        },
      },
      experience: {
        title: 'Professional Experience',
        description: 'A timeline of my professional journey and key roles.',
      },
      volunteering: {
        title: 'Volunteering & Service',
        description: 'Giving back to the community through service and outreach.',
      },
      freelance: {
        title: 'Jones & Co. Media',
        description: 'Editorial and digital communications for organizations with a public purpose, from social media strategy and web copy to PR and digital setup.',
        services: {
          social: 'Social Media',
          websites: 'Websites',
          marketing: 'Marketing Materials',
          content: 'Content & Communications',
          pr: 'Media & PR',
          setup: 'Digital Setup',
        },
        moreDetails: 'Visit the website for a full breakdown of packages and service details.',
        cta: 'Visit Jones & Co. Media',
      },
    },
  },
  es: {
    translation: {
      nav: {
        about: 'Sobre Mí',
        competencies: 'Competencias',
        portfolio: 'Portafolio',
        freelance: 'Freelance',
        contact: 'Contacto',
      },
      theme: {
        light: 'Modo Claro',
        dark: 'Modo Oscuro',
      },
      footer: {
        rights: 'Todos los derechos reservados.',
      },
      hero: {
        title: 'Addie Jones',
        role1: 'Estratega Narrativa',
        role2: 'Experta en Comunicación Política',
        description: 'Transformando historias complejas en narrativas convincentes que generan impacto y fomentan conexiones significativas. En 2026, se incorporará a Middle Seat a tiempo completo como Coordinadora de Mensajes de Texto.',
        cta: 'Ver Mi Trabajo',
        contact: 'Contactarme',
      },
      about: {
        title: 'Sobre Mí',
        bio: {
          p1: 'Soy estratega narrativa y comunicadora política con base en Fayetteville, Arkansas, profundamente comprometida con la narrativa que genera cambios. Cursando una doble licenciatura en Periodismo y Ciencias Políticas en la Universidad de Arkansas, aporto una perspectiva interdisciplinaria a cada proyecto.',
          p2: 'Desde editar un periódico universitario con 30.000 lectores hasta escribir campañas digitales para causas progresistas, mi carrera se ha construido en la intersección de la escritura convincente y el impacto cívico. En 2026, me incorporaré a Middle Seat a tiempo completo como Coordinadora de Mensajes de Texto.',
          p3: 'Cuando no estoy escribiendo, coordino voluntarios de alfabetización, mentoreo a periodistas aspirantes o estrategizo mi próximo paso en espacios de defensa. Me apasiona construir un discurso público más informado, comprometido y equitativo.',
        },
        timeline: {
          title: 'Trayectoria Profesional',
        },
        stats: {
          title: 'Impacto en Números',
        },
        contact: {
          title: 'Conéctate Conmigo',
        },
      },
      timeline: {
        type: {
          education: 'Educación',
          experience: 'Experiencia',
          achievement: 'Logro',
        },
        textingCoordinator: {
          title: 'Coordinadora de Mensajes de Texto',
          org: 'Middle Seat',
          desc: 'Puesto de tiempo completo apoyando campañas digitales progresistas mediante estrategia de mensajes de texto entre pares, participación de simpatizantes y comunicación política de respuesta rápida.',
        },
        emailIntern: {
          title: 'Pasante de Email',
          org: 'Middle Seat',
          desc: 'Desarrolla y ejecuta campañas de recaudación por correo electrónico para causas políticas progresistas. Crea narrativas convincentes que generan compromiso.',
        },
        editorialIntern: {
          title: 'Pasante Editorial',
          org: 'The American Prospect',
          desc: 'Realiza investigaciones editoriales y apoya el desarrollo de contenido para periodismo de políticas progresistas.',
        },
        govAffairsIntern: {
          title: 'Pasante de Política Legislativa',
          org: 'Partido Demócrata de Arkansas',
          desc: 'Evalúa la legislación estatal propuesta en función de su alineación con las prioridades políticas progresistas. Rastrea más de 500 proyectos de ley.',
        },
        ballotpediaIntern: {
          title: 'Pasante de Investigación',
          org: 'Ballotpedia',
          desc: 'Realizó investigación y análisis de datos no partidista sobre elecciones, candidatos y medidas electorales.',
        },
        copywritingIntern: {
          title: 'Pasante de Marketing y Comunicaciones',
          org: 'Art Bridges Foundation',
          desc: 'Creó narrativas públicas sobre programas de la fundación que llegan a comunidades desatendidas. Realizó ediciones de copy para textos de exhibiciones de museos.',
        },
        legislativeIntern: {
          title: 'Pasante de Política Legislativa',
          org: 'Partido Demócrata de Arkansas',
          desc: 'Evaluó la legislación propuesta para su alineación con prioridades progresistas, con enfoque en la equidad educativa.',
        },
        contentWriting: {
          title: 'Pasante de Redacción de Contenidos',
          org: 'Sam M. Walton College of Business',
          desc: 'Redacta y edita el boletín semanal distribuido a más de 30.000 estudiantes, personal, padres y ex alumnos.',
        },
        lifestylesEditor: {
          title: 'Editora de Estilos de Vida',
          org: 'Arkansas Traveler Newspaper',
          desc: 'Edita y cuya contenido de artes, cultura, entretenimiento y opinión para más de 30.000 lectores. Publicó más de 100 artículos.',
        },
        education: {
          title: 'Lic. en Periodismo y Ciencias Políticas',
          org: 'Universidad de Arkansas',
          desc: 'Becaria Fulbright Honors Sturgis. Tesis de honores sobre equidad educativa y acceso a libros en el noroeste de Arkansas. GPA 3.903.',
        },
        nonprofitFounder: {
          title: 'Fundadora y Secretaria',
          org: 'Bright Beginnings Books',
          desc: 'Fundó una organización sin fines de lucro 501(c)(3) que ha distribuido más de 13.000 libros nuevos a estudiantes de todos los 50 estados y 12 países.',
        },
      },
      competencies: {
        title: 'Competencias Principales',
        description: 'Una visión general de mis habilidades clave y áreas de experiencia en comunicación política y políticas públicas.',
        keySkills: 'Habilidades Clave',
        achievements: 'Logros Destacados',
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
      portfolio: {
        title: 'Un Análisis Profundo: Mi Trabajo y Filosofía',
        subtitle: 'Explora mi portafolio de periodismo, defensa y comunicaciones estratégicas.',
        description: 'Explora mi portafolio de proyectos de periodismo, liderazgo y defensa.',
        journalism: 'Periodismo',
        leadership: 'Liderazgo',
        advocacy: 'Defensa',
        journalismDescription: 'Una selección de mis artículos publicados y trabajos periodísticos.',
        leadershipDescription: 'Destacados de mis roles y proyectos de liderazgo.',
        advocacyDescription: 'Iniciativas y campañas de defensa en las que he liderado o contribuido.',
        search: 'Buscar artículos...',
        downloadResume: 'Descargar Currículum',
        readArticle: 'Leer Artículo',
        noResults: 'No se encontraron artículos. Prueba con otra búsqueda.',
        viewAll: 'Ver Todos los Artículos',
        moreArticles: {
          title: 'Más de Mi Trabajo',
          description: 'Explora el archivo completo de mi periodismo publicado, columnas de opinión e informes de investigación.',
        },
      },
      contact: {
        title: 'Contáctame',
        description: '¿Tienes un proyecto en mente o quieres colaborar? Me encantaría saber de ti.',
        info: {
          title: 'Correo Electrónico',
          email: {
            desc: 'La mejor forma de contactarme para consultas profesionales.',
          },
          phone: {
            desc: 'Disponible para llamadas en horario laboral.',
          },
          location: {
            desc: 'Ubicada en el noroeste de Arkansas, disponible de forma remota.',
          },
        },
        form: {
          title: 'Enviar un Mensaje',
          name: 'Nombre Completo',
          email: 'Correo Electrónico',
          company: 'Empresa / Organización',
          subject: 'Asunto',
          message: 'Mensaje',
          submit: 'Enviar Mensaje',
          sending: 'Enviando...',
          success: {
            title: '¡Mensaje Enviado!',
            message: 'Gracias por contactarme. Te responderé en 24-48 horas.',
          },
        },
        social: {
          title: 'Conéctate en Redes Sociales',
        },
        response: {
          title: 'Tiempo de Respuesta',
          message: 'Normalmente respondo en 24-48 horas en días hábiles.',
        },
      },
      experience: {
        title: 'Experiencia Profesional',
        description: 'Una cronología de mi trayectoria profesional y roles clave.',
      },
      volunteering: {
        title: 'Voluntariado y Servicio',
        description: 'Retribuyendo a la comunidad a través del servicio y la participación.',
      },
      freelance: {
        title: 'Jones & Co. Media',
        description: 'Comunicación editorial y digital para organizaciones con propósito público, desde estrategia en redes sociales y contenido web hasta RR.PP. y configuración digital.',
        services: {
          social: 'Redes Sociales',
          websites: 'Sitios Web',
          marketing: 'Materiales de Marketing',
          content: 'Contenido y Comunicaciones',
          pr: 'Medios y RR.PP.',
          setup: 'Configuración Digital',
        },
        moreDetails: 'Visita el sitio web para obtener un desglose completo de paquetes y detalles de servicios.',
        cta: 'Visitar Jones & Co. Media',
      },
    },
  },
};

export const i18nReady = i18n
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
