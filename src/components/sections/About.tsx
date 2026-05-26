import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

const roleKeys = ['textingCoordinator', 'editorialIntern', 'govAffairsIntern', 'lifestylesEditor', 'nonprofitFounder'] as const;

const years: Record<(typeof roleKeys)[number], string> = {
  textingCoordinator: '2026',
  editorialIntern: '2026',
  govAffairsIntern: '2025',
  lifestylesEditor: '2023',
  nonprofitFounder: '2011',
};

export default function About() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section id="about" className="bg-background px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[0.46fr_0.54fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {language === 'en' ? 'About Addie' : 'Acerca de Addie'}
            </p>
            <h2 className="max-w-lg text-4xl font-medium leading-tight tracking-[-0.045em] text-foreground sm:text-5xl">
              {language === 'en'
                ? 'Journalism shaped by civic purpose.'
                : 'Periodismo con propósito cívico.'}
            </h2>
            <div className="mt-8 max-w-xl space-y-6 text-base leading-8 text-muted-foreground">
              <p>{t('about.bio.p1')}</p>
              <p>
                {language === 'en'
                  ? 'Her work moves between reported stories, progressive communications, and literacy advocacy, with a focus on making public issues understandable and actionable.'
                  : 'Su trabajo une reportajes, comunicación progresista y defensa de la alfabetización, con un enfoque en hacer comprensibles y accionables los asuntos públicos.'}
              </p>
            </div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="editorial-link mt-9 inline-block font-semibold">
              {language === 'en' ? 'View full resume' : 'Ver currículum completo'}
            </a>
          </motion.div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {language === 'en' ? 'Defining roles' : 'Roles principales'}
            </p>
            <div className="border-t border-border">
              {roleKeys.map((key) => (
                <motion.article
                  key={key}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid gap-2 border-b border-border py-6 sm:grid-cols-[4.5rem_1fr]"
                >
                  <p className="text-sm font-semibold text-primary">{years[key]}</p>
                  <div>
                    <h3 className="text-xl font-medium text-foreground">{t(`timeline.${key}.title`)}</h3>
                    <p className="mt-1 text-sm font-semibold text-muted-foreground">{t(`timeline.${key}.org`)}</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{t(`timeline.${key}.desc`)}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
