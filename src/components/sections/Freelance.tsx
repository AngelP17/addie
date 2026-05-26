import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export default function Freelance() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const services = ['social', 'websites', 'marketing', 'content', 'pr', 'setup'];

  return (
    <section id="freelance" className="bg-secondary px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[0.52fr_0.48fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {language === 'en' ? 'Communications practice' : 'Práctica de comunicación'}
            </p>
            <h2 className="text-5xl font-medium tracking-[-0.05em] text-foreground sm:text-6xl">{t('freelance.title')}</h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">{t('freelance.description')}</p>
            <a
              href="https://www.jonescopr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 inline-flex items-center gap-3 px-7 py-4"
            >
              {t('freelance.cta')}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="border-t border-border">
            {services.map((service) => (
              <div key={service} className="grid grid-cols-[2rem_1fr] items-start border-b border-border py-5 sm:py-6">
                <span className="pt-0.5 font-serif text-lg text-primary">+</span>
                <div>
                  <p className="text-lg font-medium text-foreground">{t(`freelance.services.${service}`)}</p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                    {t(`freelance.services.${service}.description`)}
                  </p>
                </div>
              </div>
            ))}
            <p className="pt-7 text-sm leading-6 text-muted-foreground">{t('freelance.moreDetails')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
