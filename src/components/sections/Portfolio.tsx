import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { ExternalLink, Search, ArrowRight } from 'lucide-react';

interface WritingSample {
  id: number;
  title: string;
  publication: string;
  category: string;
  description: string;
  descriptionEs?: string;
  url: string;
  image: string;
  featured?: boolean;
  photoCredit?: string;
  isInternal?: boolean;
  publicationEs?: string;
  categoryEs?: string;
  actionLabel?: {
    en: string;
    es: string;
  };
  status?: {
    en: string;
    es: string;
  };
}

const writingSamples: WritingSample[] = [
  {
    id: 10,
    title: "What Bolivia reads: Pages, palabras and the stories in between",
    publication: "Unpublished / PDF Feature",
    publicationEs: "Inédito / Reportaje en PDF",
    category: "Feature",
    categoryEs: "Reportaje",
    description: "A field-reported feature on Bolivia's reading culture, education access, indigenous languages, and the divide between urban book communities and rural literacy barriers.",
    descriptionEs: "Un reportaje de campo sobre la cultura lectora en Bolivia, el acceso a la educación, las lenguas indígenas y la brecha entre comunidades lectoras urbanas y barreras rurales de alfabetización.",
    url: "/articles/bolivia",
    image: "/bolivia-books.jpg",
    featured: true,
    isInternal: true,
    actionLabel: {
      en: "View Portfolio Sample",
      es: "Ver muestra de portafolio"
    },
    status: {
      en: "Hidden article page",
      es: "Página de artículo oculta"
    }
  },
  {
    id: 1,
    title: "Left in the dark: Charleston prison plan draws unified opposition",
    publication: "Arkansas Traveler",
    category: "Investigative Journalism",
    description: "An investigative report exposing the transparency issues surrounding a controversial $1 billion prison facility in Charleston, Arkansas. The piece combines financial analysis, document research, and diverse source perspectives to examine the impact of state-level decisions on rural communities.",
    url: "https://www.uatrav.com/news/article_5c393792-b225-11ef-b5d7-dfe62040b69c.html",
    image: "/leftinthedark.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Styled in Love: Transforming Hearts, Redefining Beauty",
    publication: "Hill Magazine",
    category: "Feature",
    description: "A feature for Hill Magazine examining how Northwest Arkansas salons are becoming spaces for LGBTQ+ self-expression and affirmation. This piece provides personal narratives with broader social commentary to show how beauty services can be a powerful tool for resistance and self-expression.",
    url: "https://uahillmag.com/2023/10/18/styled-in-love-transforming-hearts-redefining-beauty/",
    image: "/styledinlove.webp",
    featured: true
  },
  {
    id: 3,
    title: "I am you, I understand you: Chappell Roan amplifies the region's queer voices",
    publication: "Arkansas Traveler",
    category: "Arts & Entertainment",
    description: "A concert review capturing the cultural significance of Chappell Roan's largest headlining show to date, examining how the artist created a celebration of queer identity in the South and Midwest. Walking out on that stage the first time and seeing all 11,000 people cheering was insane. Especially since this is my hometown, this is my community, and it was so gratifying to be embraced.",
    url: "https://www.uatrav.com/lifestyles/article_6818cda6-8b48-11ef-a198-778537f74602.html",
    image: "/chappellroan.webp",
    featured: true
  },
  {
    id: 4,
    title: "Hope is a practice: Hozier and Allison Russell bring folk and inspiration",
    publication: "Arkansas Traveler",
    category: "Music Journalism",
    description: "Concert review of Hozier and Allison Russell at Walmart AMP highlighting their music as a call to action and reminder of art's resilient power, leaving fans with a sense of purpose toward creating a better tomorrow as they exited the amphitheater.",
    url: "https://www.uatrav.com/lifestyles/article_76298b2e-0cae-11ef-9529-b7ae1a7bc804.html",
    image: "/hozier.png",
    photoCredit: "McKena Jensen // Staff Photographer"
  },
  {
    id: 5,
    title: "Springtime of Youth 2023",
    publication: "Division of Student Affairs Bulletin",
    category: "Campus Features",
    description: "Through more than a dozen features for the Division of Student Affairs Bulletin blog, I crafted engaging narratives about campus life, from student organizations to academic achievements, reaching thousands of students, staff, and alumni.",
    url: "https://studentaffairsbulletin.uark.edu/springtime-of-youth-2023/",
    image: "/soy2023.jpg"
  },
  {
    id: 6,
    title: "Illuminating Arkansas",
    publication: "The Idle Class Magazine",
    category: "Arts & Culture",
    description: "One publication I freelance for is The Idle Class magazine, Northwest Arkansas's arts and culture quarterly. This article examining local arts and culture can be found on page 18 of the Holidays Issue.",
    url: "https://issuu.com/theidleclass/docs/the_idle_class_holidays_issue",
    image: "/illuminating.png"
  },
  {
    id: 7,
    title: "Review: Mitski's latest album is a poetic resurgence, cathartic journey",
    publication: "Arkansas Traveler",
    category: "Music Journalism",
    description: "This record is a departure from her past works, as she travels away from the flashing city lights of synth-pop and toward the rugged mountains of acoustic indie-folk.",
    url: "https://www.uatrav.com/lifestyles/article_427945a6-59b4-11ee-a069-5390ca7f0cdc.html",
    image: "/mitski.webp",
    photoCredit: "Courtesy of Spotify"
  },
  {
    id: 8,
    title: "Funding cuts leave domestic violence programs in crisis",
    publication: "Arkansas Traveler",
    category: "Investigative Journalism",
    description: "An examination of how funding cuts are affecting programs meant to help victims of domestic violence, and how organizations like Peace at Home rely on alternative methods to achieve funding goals.",
    url: "https://www.uatrav.com/news/article_4dc3454d-26e8-4b11-8fbd-da2690e7ef91.html",
    image: "/domesticviolence.webp",
    photoCredit: "Marshall Deree // Staff Photographer"
  },
  {
    id: 9,
    title: "SNAP benefits delay leaves Arkansans struggling with food insecurity",
    publication: "Arkansas Traveler",
    category: "Investigative Journalism",
    description: "A report on how the delay in SNAP benefits is impacting Arkansas families and how community efforts like local blessing boxes are stepping in to combat food insecurity.",
    url: "https://www.uatrav.com/news/article_50a7b6ac-9d87-4120-98e4-98db4800671e.html",
    image: "/nutrition.webp",
    photoCredit: "Marshall Deree // Staff Photographer"
  }
];

const categories = [
  { value: 'All', en: 'All', es: 'Todos' },
  { value: 'Investigative Journalism', en: 'Investigative Journalism', es: 'Periodismo investigativo' },
  { value: 'Feature', en: 'Feature', es: 'Reportaje' },
  { value: 'Arts & Entertainment', en: 'Arts & Entertainment', es: 'Arte y entretenimiento' },
  { value: 'Arts & Culture', en: 'Arts & Culture', es: 'Arte y cultura' },
  { value: 'Music Journalism', en: 'Music Journalism', es: 'Periodismo musical' },
  { value: 'Campus Features', en: 'Campus Features', es: 'Historias universitarias' }
];

const portfolioCopy = {
  en: {
    selectedTitle: 'Selected Work',
    selectedDescription: 'A curated first look at Addie’s strongest reporting, feature writing, and portfolio-only work.',
    archiveTitle: 'More Reporting',
    archiveDescription: 'Search and filter additional published stories across policy, culture, and community life.',
  },
  es: {
    selectedTitle: 'Trabajo destacado',
    selectedDescription: 'Una selección inicial de los reportajes, perfiles y muestras de portafolio más fuertes de Addie.',
    archiveTitle: 'Más reportajes',
    archiveDescription: 'Busca y filtra historias publicadas adicionales sobre política, cultura y vida comunitaria.',
  },
};

export default function Portfolio() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const selectedSamples = writingSamples.filter(sample => [1, 2, 3].includes(sample.id));

  const filteredSamples = writingSamples.filter(sample => {
    if ([10, 1, 2, 3].includes(sample.id)) return false;
    const matchesCategory = selectedCategory === 'All' || sample.category === selectedCategory;
    const matchesSearch = sample.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sample.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sample.publication.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (sample.descriptionEs?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) ||
      (sample.publicationEs?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
    return matchesCategory && matchesSearch;
  });

  const getSampleDescription = (sample: WritingSample) => (
    language === 'es' && sample.descriptionEs ? sample.descriptionEs : sample.description
  );

  const getCategoryLabel = (sample: WritingSample) => (
    language === 'es' && sample.categoryEs ? sample.categoryEs : sample.category
  );

  const getPublicationLabel = (sample: WritingSample) => (
    language === 'es' && sample.publicationEs ? sample.publicationEs : sample.publication
  );

  const getActionLabel = (sample: WritingSample) => (
    sample.actionLabel?.[language] ?? t('portfolio.readArticle')
  );

  const WritingSampleCard = ({
    sample,
    feature = false,
    className = '',
    priority = false
  }: {
    sample: WritingSample;
    feature?: 'lead' | 'support' | false;
    className?: string;
    priority?: boolean;
  }) => {
    const cardContent = (
      <>
        <div className={`overflow-hidden bg-muted ${feature === 'lead' ? 'aspect-[1.34/1]' : feature === 'support' ? 'aspect-[1.7/1]' : 'aspect-[1.75/1]'}`}>
          <img
            src={sample.image}
            alt={sample.title}
            loading={priority ? 'eager' : 'lazy'}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
        </div>

        <div className={`flex flex-1 flex-col border-t border-border pt-5 ${feature ? 'pb-2' : 'pb-5'}`}>
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            <span className="text-primary">{getCategoryLabel(sample)}</span>
            <span>{getPublicationLabel(sample)}</span>
          </div>

          <h3 className={`${feature === 'lead' ? 'text-3xl sm:text-[2.5rem]' : feature === 'support' ? 'text-2xl' : 'text-xl'} font-serif font-medium leading-tight text-card-foreground transition-colors group-hover:text-primary`}>
            {sample.title}
          </h3>
          <p className={`mt-4 text-sm leading-7 text-muted-foreground ${feature === 'lead' ? 'line-clamp-4 sm:text-base' : 'line-clamp-3'}`}>{getSampleDescription(sample)}</p>
          {sample.photoCredit && (
            <p className="mt-3 text-xs text-muted-foreground">{sample.photoCredit}</p>
          )}

          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
            {getActionLabel(sample)}
            {sample.isInternal ? <ArrowRight className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
          </div>
        </div>
      </>
    );

    const cardClassName = "group flex h-full cursor-pointer flex-col";

    if (sample.isInternal) {
      return (
        <motion.div
          className={className}
          layout
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          >
          <Link to={sample.url} className={cardClassName}>
            {cardContent}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.a
        layout
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        href={sample.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClassName} ${className}`}
      >
        {cardContent}
      </motion.a>
    );
  };

  return (
    <section id="portfolio" className="bg-background px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 grid gap-5 border-b border-border pb-9 md:grid-cols-[1fr_24rem] md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {language === 'en' ? 'Selected reporting' : 'Reportajes seleccionados'}
            </p>
            <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] text-foreground sm:text-6xl">
              {portfolioCopy[language].selectedTitle}
            </h2>
          </div>
          <p className="text-base leading-7 text-muted-foreground">{portfolioCopy[language].selectedDescription}</p>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <WritingSampleCard sample={selectedSamples[0]} feature="lead" priority />
          <div className="grid gap-10">
            {selectedSamples.slice(1).map((sample) => (
              <WritingSampleCard key={sample.id} sample={sample} feature="support" />
            ))}
          </div>
        </div>

        <div className="mb-10 grid gap-7 border-t border-border pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-xl">
            <h3 className="text-3xl font-medium tracking-[-0.035em] text-foreground sm:text-4xl">{portfolioCopy[language].archiveTitle}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">{portfolioCopy[language].archiveDescription}</p>
          </div>
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('portfolio.search')}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full border-b border-border bg-transparent py-3 pl-8 pr-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
            />
          </div>
        </div>
        <div className="-mx-4 mb-12 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          <div className="flex w-max gap-6 border-b border-border pb-4 sm:w-auto sm:flex-wrap">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`shrink-0 text-sm font-medium transition-colors ${selectedCategory === category.value ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {category[language]}
              </button>
            ))}
            </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredSamples.map(sample => (
              <WritingSampleCard key={sample.id} sample={sample} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredSamples.length === 0 && (
          <div className="border-y border-border py-12 text-center">
            <p className="text-muted-foreground text-lg">{t('portfolio.noResults')}</p>
          </div>
        )}

        <div className="mt-20 flex flex-col justify-between gap-7 border-y border-border py-9 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-medium text-card-foreground">{t('portfolio.moreArticles.title')}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              {language === 'en'
                ? 'Reporting and features published across news, arts, culture, and public-interest coverage.'
                : 'Reportajes publicados sobre noticias, artes, cultura y asuntos de interes publico.'}
            </p>
          </div>
          <a
            href="https://www.uatrav.com/users/profile/addie%20jones/"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link inline-flex items-center gap-2 text-sm font-semibold"
          >
            {t('portfolio.viewAll')}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
