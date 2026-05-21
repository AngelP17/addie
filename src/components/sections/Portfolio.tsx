import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  ExternalLink, Search, Download, FileText, ArrowRight
} from 'lucide-react';

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
    archiveTitle: 'Article Archive',
    archiveDescription: 'Search and filter the full collection of writing samples.',
  },
  es: {
    selectedTitle: 'Trabajo destacado',
    selectedDescription: 'Una selección inicial de los reportajes, perfiles y muestras de portafolio más fuertes de Addie.',
    archiveTitle: 'Archivo de artículos',
    archiveDescription: 'Busca y filtra la colección completa de muestras de escritura.',
  },
};

export default function Portfolio() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const selectedSamples = writingSamples.filter(sample => [10, 1, 2].includes(sample.id));

  const filteredSamples = writingSamples.filter(sample => {
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

  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const WritingSampleCard = ({
    sample,
    selected = false,
    className = '',
    priority = false
  }: {
    sample: WritingSample;
    selected?: boolean;
    className?: string;
    priority?: boolean;
  }) => {
    const cardContent = (
      <>
        {/* Article Image */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          {sample.image && !sample.image.includes('placeholder') ? (
            <img
              src={sample.image}
              alt={sample.title}
              loading={priority ? 'eager' : 'lazy'}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-muted/10 to-accent/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-muted/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-muted-foreground" />
                </div>
              </div>
            </>
          )}
          {sample.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              {language === 'es' ? 'Destacado' : 'Featured'}
            </div>
          )}
          {sample.status && (
            <div className="absolute bottom-2 left-2 max-w-[80%] rounded bg-black/60 px-2 py-1 text-xs text-white">
              {sample.status[language]}
            </div>
          )}
          {sample.photoCredit && (
            <div className="absolute bottom-2 right-2 max-w-[80%] rounded bg-black/60 px-2 py-1 text-right text-xs text-white">
              {sample.photoCredit}
            </div>
          )}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-background/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-background/30 transition-colors">
                <ExternalLink className="w-4 h-4 text-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className={`p-5 sm:p-6 ${selected ? 'flex flex-1 flex-col' : ''}`}>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
              {getCategoryLabel(sample)}
            </span>
            <span className="break-words text-xs text-muted-foreground">{getPublicationLabel(sample)}</span>
          </div>

          <h3 className={`${selected ? 'text-xl sm:text-2xl' : 'text-lg'} font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2`}>
            {sample.title}
          </h3>
          <p className={`text-muted-foreground text-sm mb-4 ${selected ? 'line-clamp-4' : 'line-clamp-3'}`}>{getSampleDescription(sample)}</p>

          <div className={`flex items-center gap-2 text-sm text-primary ${selected ? 'mt-auto' : ''}`}>
            {getActionLabel(sample)}
            {sample.isInternal ? <ArrowRight className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
          </div>
        </div>
      </>
    );

    const cardClassName = "card card-hover cursor-pointer overflow-hidden flex h-full flex-col group";

    if (sample.isInternal) {
      return (
        <motion.div
          className={className}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ y: -8 }}
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -8 }}
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
    <section id="portfolio" className="bg-background px-4 py-20 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">{t('portfolio.title')}</h2>
              <p className="text-base text-muted-foreground sm:text-xl">{t('portfolio.subtitle')}</p>
            </div>
          </div>
          <button
            onClick={handleDownloadResume}
            className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto"
          >
            <Download className="w-5 h-5" />
            {t('portfolio.downloadResume')}
          </button>
        </div>

        <div className="mb-16">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{portfolioCopy[language].selectedTitle}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                {portfolioCopy[language].selectedDescription}
              </p>
            </div>
          </div>
          <div className="grid grid-flow-dense grid-cols-1 gap-6 lg:grid-cols-3">
            {selectedSamples.map((sample, index) => (
              <WritingSampleCard
                key={sample.id}
                sample={sample}
                selected
                priority={index === 0}
              />
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8 space-y-5 border-t border-border pt-10">
          <div>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{portfolioCopy[language].archiveTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
              {portfolioCopy[language].archiveDescription}
            </p>
          </div>
          <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:overflow-visible sm:px-0">
            <div className="flex w-max gap-3 sm:w-auto sm:flex-wrap">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`${selectedCategory === category.value ? 'btn-primary' : 'btn-outline'} shrink-0 text-xs sm:text-sm`}
              >
                {category[language]}
              </button>
            ))}
            </div>
          </div>
          <div className="relative w-full sm:ml-auto sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder={t('portfolio.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input w-full pl-10"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSamples.map(sample => (
              <WritingSampleCard key={sample.id} sample={sample} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No results message */}
        {filteredSamples.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">{t('portfolio.noResults')}</p>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-16 rounded-lg border border-border bg-card py-12 sm:mt-20 sm:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-2xl font-bold text-card-foreground sm:text-3xl">{t('portfolio.moreArticles.title')}</h2>
            <p className="mx-auto mb-8 max-w-3xl text-base text-muted-foreground sm:text-lg">
              {t('portfolio.moreArticles.description')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.uatrav.com/users/profile/addie%20jones/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                {t('portfolio.viewAll')}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
