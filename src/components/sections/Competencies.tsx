import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const expertise = {
  en: [
    { title: 'Policy research', detail: 'Legislative tracking, federal affairs, and analysis that makes public decisions legible.' },
    { title: 'Investigative reporting', detail: 'Document research and source-driven reporting on community impact.' },
    { title: 'Campaign communication', detail: 'Digital fundraising, supporter engagement, and persuasive messaging.' },
    { title: 'Editorial direction', detail: 'Reporting, editing, newsletters, and audience-minded content strategy.' },
    { title: 'Literacy advocacy', detail: 'Nonprofit leadership and access-to-books work across all 50 states.' },
    { title: 'Civic engagement', detail: 'Organizing, coalition building, and public-facing communication.' },
  ],
  es: [
    { title: 'Investigación de políticas', detail: 'Seguimiento legislativo, asuntos federales y análisis de decisiones públicas.' },
    { title: 'Periodismo investigativo', detail: 'Investigación documental y reportajes basados en fuentes y comunidades.' },
    { title: 'Comunicación de campañas', detail: 'Recaudación digital, participación y mensajes persuasivos.' },
    { title: 'Dirección editorial', detail: 'Reportajes, edición, boletines y estrategia de contenidos.' },
    { title: 'Defensa de la alfabetización', detail: 'Liderazgo sin fines de lucro y acceso a libros en los 50 estados.' },
    { title: 'Participación cívica', detail: 'Organización, coaliciones y comunicación pública.' },
  ],
};

const figures = {
  en: [
    ['13,000+', 'Books distributed'],
    ['100+', 'Published articles'],
    ['30,000+', 'Newsletter readers'],
    ['500+', 'Bills tracked'],
  ],
  es: [
    ['13,000+', 'Libros distribuidos'],
    ['100+', 'Artículos publicados'],
    ['30,000+', 'Lectores de boletines'],
    ['500+', 'Proyectos seguidos'],
  ],
};

export default function Competencies() {
  const { language } = useLanguage();

  return (
    <section id="competencies" className="bg-background px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {language === 'en' ? 'Expertise' : 'Experiencia'}
            </p>
            <h2 className="text-4xl font-medium tracking-[-0.045em] text-foreground sm:text-5xl">
              {language === 'en' ? 'Areas of practice' : 'Áreas de práctica'}
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            className="grid gap-x-10 md:grid-cols-2"
          >
            {expertise[language].map((item) => (
              <article key={item.title} className="border-t border-border py-6">
                <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 border-y border-border md:grid-cols-4">
          {figures[language].map(([value, label]) => (
            <div key={label} className="border-border px-3 py-8 first:pl-0 md:border-l md:px-8 md:first:border-l-0 md:first:px-0">
              <p className="font-serif text-4xl font-medium text-primary sm:text-5xl">{value}</p>
              <p className="mt-3 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
