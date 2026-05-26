import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const copy = {
  en: {
    role: 'Journalist and political communications strategist',
    statement: 'Reporting on policy, culture, and communities. Building communications that move people to act.',
    work: 'Read Selected Work',
    contact: 'Discuss a Project',
    feature: 'Featured reporting',
    headline: 'What Bolivia reads: Pages, palabras and the stories in between',
    publication: 'Portfolio feature',
  },
  es: {
    role: 'Periodista y estratega de comunicación política',
    statement: 'Reportajes sobre política, cultura y comunidades. Comunicación que impulsa a la acción.',
    work: 'Leer trabajo destacado',
    contact: 'Conversar sobre un proyecto',
    feature: 'Reportaje destacado',
    headline: 'Lo que lee Bolivia: Páginas, palabras y las historias intermedias',
    publication: 'Reportaje de portafolio',
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section className="relative overflow-hidden bg-background px-4 pb-0 pt-10 sm:px-6 md:pt-12">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 pb-10 md:min-h-[calc(100dvh-10rem)] md:grid-cols-[minmax(24rem,1.08fr)_minmax(18rem,0.92fr)] md:gap-8 md:pb-8 lg:grid-cols-[minmax(33rem,1.14fr)_minmax(25rem,0.86fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="order-1"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {content.role}
          </p>
          <h1 className="max-w-[12ch] text-[clamp(3.6rem,7.6vw,7.2rem)] font-medium leading-[0.92] tracking-[-0.055em] text-foreground">
            Addie
            <br />
            Elizabeth Jones
          </h1>
          <p className="mt-8 max-w-[31rem] text-lg leading-8 text-muted-foreground sm:text-xl">
            {content.statement}
          </p>
          <div className="mt-10 hidden flex-wrap items-center gap-6 md:flex">
            <button
              className="btn-primary group inline-flex items-center gap-3 px-7 py-4"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {content.work}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              className="editorial-link"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {content.contact}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 mt-3 min-h-[23rem] md:mt-0 md:min-h-[min(58vh,35rem)] lg:min-h-[min(62vh,40rem)]"
        >
          <img
            src="/avatar.jpg"
            alt="Portrait of Addie Elizabeth Jones"
            className="absolute inset-x-0 top-0 h-[88%] w-full object-cover object-top md:left-6 md:right-0 md:w-auto lg:left-10"
          />
          <img
            src="/bolivia-books.jpg"
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 left-0 hidden h-[34%] w-[38%] border-[6px] border-background object-cover shadow-[0_18px_40px_rgba(44,30,25,0.12)] sm:block"
          />
          <img
            src="/leftinthedark.jpg"
            alt=""
            aria-hidden="true"
            className="absolute bottom-[4%] right-4 hidden h-[25%] w-[30%] border-[6px] border-background object-cover shadow-[0_18px_40px_rgba(44,30,25,0.12)] sm:block md:right-auto md:left-[41%]"
          />
        </motion.div>
        <div className="order-3 flex flex-col items-start gap-6 sm:flex-row sm:items-center md:hidden">
          <button
            className="btn-primary group inline-flex items-center gap-3 px-7 py-4"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {content.work}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            className="editorial-link"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {content.contact}
          </button>
        </div>
      </div>

      <a
        href="/articles/bolivia"
        className="group mx-auto flex max-w-[1400px] flex-col gap-3 border-y border-border py-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{content.feature}</span>
        <span className="max-w-3xl flex-1 font-serif text-xl leading-tight text-foreground sm:px-10 sm:text-2xl">
          {content.headline}
        </span>
        <span className="flex items-center gap-3 text-sm font-medium text-muted-foreground group-hover:text-primary">
          {content.publication}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </a>
    </section>
  );
}
