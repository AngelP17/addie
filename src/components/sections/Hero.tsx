import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Hero() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-background px-4 py-16 sm:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(100,116,139,0.13),transparent_34%),radial-gradient(circle_at_88%_72%,rgba(148,163,184,0.09),transparent_32%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_28rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-5 max-w-5xl text-balance text-[clamp(3.25rem,7vw,6.35rem)] font-bold leading-[0.96] tracking-tight text-foreground"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="mb-4 text-xl text-muted-foreground sm:text-2xl md:text-3xl">
              {language === 'es' ? 'Soy ' : "I'm a "}
              <span className="font-semibold text-primary">
                {t('hero.role1')}
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg md:text-xl md:leading-relaxed lg:mx-0">
              {t('hero.description')}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group flex items-center justify-center gap-3 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline group flex items-center justify-center gap-3 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.contact')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="hidden lg:grid grid-cols-5 grid-rows-6 gap-3"
          aria-hidden="true"
        >
          <div className="col-span-3 row-span-6 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <img src="/avatar.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="col-span-2 row-span-3 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <img src="/leftinthedark.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="col-span-2 row-span-3 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <img src="/articles/bolivia/photo-1.jpg" alt="" className="h-full w-full object-cover" />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:block"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToNext}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>

    </section>
  );
}
