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
    category: "Investigative",
    categoryEs: "Investigación",
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
    category: "Music Journalism",
    categoryEs: "Periodismo musical",
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
    category: "Culture",
    categoryEs: "Cultura",
    description: "Through more than a dozen features for the Division of Student Affairs Bulletin blog, I crafted engaging narratives about campus life, from student organizations to academic achievements, reaching thousands of students, staff, and alumni.",
    url: "https://studentaffairsbulletin.uark.edu/springtime-of-youth-2023/",
    image: "/soy2023.jpg"
  },
  {
    id: 6,
    title: "Illuminating Arkansas",
    publication: "The Idle Class Magazine",
    category: "Culture",
    categoryEs: "Cultura",
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
    category: "Investigative",
    categoryEs: "Investigación",
    description: "An examination of how funding cuts are affecting programs meant to help victims of domestic violence, and how organizations like Peace at Home rely on alternative methods to achieve funding goals.",
    url: "https://www.uatrav.com/news/article_4dc3454d-26e8-4b11-8fbd-da2690e7ef91.html",
    image: "/domesticviolence.webp",
    photoCredit: "Marshall Deree // Staff Photographer"
  },
  {
    id: 9,
    title: "SNAP benefits delay leaves Arkansans struggling with food insecurity",
    publication: "Arkansas Traveler",
    category: "Investigative",
    categoryEs: "Investigación",
    description: "A report on how the delay in SNAP benefits is impacting Arkansas families and how community efforts like local blessing boxes are stepping in to combat food insecurity.",
    url: "https://www.uatrav.com/news/article_50a7b6ac-9d87-4120-98e4-98db4800671e.html",
    image: "/nutrition.webp",
    photoCredit: "Marshall Deree // Staff Photographer"
  },
  {
    id: 11,
    title: "Art for everyone: Creative and expressive therapies provide a unique approach to local practices",
    publication: "Hill Magazine",
    category: "Culture",
    categoryEs: "Cultura",
    description: "A feature exploring how creative and expressive therapies use art as an accessible tool for care, communication, and community wellbeing.",
    descriptionEs: "Un reportaje sobre cómo las terapias creativas y expresivas usan el arte como herramienta accesible para el cuidado, la comunicación y el bienestar comunitario.",
    url: "https://uahillmag.com/2024/04/15/art-for-everyone-creative-and-expressive-therapies-provide-a-unique-approach-to-local-practices/",
    image: "https://i0.wp.com/uahillmag.com/wp-content/uploads/2024/04/P1010553-scaled.jpg?resize=960%2C640&ssl=1"
  },
  {
    id: 12,
    title: "Arkansas Atrangi: Harmony on and off the stage",
    publication: "Hill Magazine",
    category: "Culture",
    categoryEs: "Cultura",
    description: "A profile of Arkansas Atrangi and the cultural connection built through South Asian performance, collaboration, and campus community.",
    descriptionEs: "Un perfil de Arkansas Atrangi y la conexión cultural creada mediante la presentación sudasiática, la colaboración y la comunidad universitaria.",
    url: "https://uahillmag.com/2024/03/25/arkansas-atrangi-harmony-on-and-off-the-stage/",
    image: "https://i0.wp.com/uahillmag.com/wp-content/uploads/2024/03/IMG_3765.jpg?resize=960%2C640&ssl=1"
  },
  {
    id: 13,
    title: "Her Set Her Sound: Amplifying voices, liberating Her",
    publication: "Hill Magazine",
    category: "Music Journalism",
    categoryEs: "Periodismo musical",
    description: "A feature on a Black-owned, women-led music platform expanding visibility and opportunities for gender-diverse and culturally diverse performers.",
    descriptionEs: "Un reportaje sobre una plataforma musical de propiedad negra y liderazgo femenino que amplía la visibilidad y oportunidades para artistas de género y culturas diversas.",
    url: "https://uahillmag.com/2024/03/01/her-set-her-sound-amplifying-voices-liberating-her/",
    image: "https://i0.wp.com/uahillmag.com/wp-content/uploads/2024/03/DSCF2647-scaled.jpg?resize=960%2C640&ssl=1"
  },
  {
    id: 14,
    title: "Come & Get It: Kiley Reid's sophomore novel reflects adventures at the university",
    publication: "Hill Magazine",
    category: "Culture",
    categoryEs: "Cultura",
    description: "An author feature on Kiley Reid's campus-set novel and the ways money, desire, and University of Arkansas life shape its story.",
    descriptionEs: "Un perfil de autora sobre la novela universitaria de Kiley Reid y cómo el dinero, el deseo y la vida en la Universidad de Arkansas forman su historia.",
    url: "https://uahillmag.com/2024/02/21/come-get-it-kiley-reids-sophomore-novel-reflects-adventures-at-the-university/",
    image: "https://i0.wp.com/uahillmag.com/wp-content/uploads/2024/02/DSC_6487-1-scaled.jpg?resize=960%2C640&ssl=1"
  },
  {
    id: 15,
    title: "Hill Records: The future of Arkansas music, launching emerging talents",
    publication: "Hill Magazine",
    category: "Music Journalism",
    categoryEs: "Periodismo musical",
    description: "A profile of the student-run label supporting Arkansas musicians through recordings, events, booking, management, and media promotion.",
    descriptionEs: "Un perfil del sello dirigido por estudiantes que apoya a músicos de Arkansas mediante grabaciones, eventos, contratación, gestión y promoción mediática.",
    url: "https://uahillmag.com/2023/11/27/hill-records-the-future-of-arkansas-music-launching-emerging-talents/",
    image: "https://i0.wp.com/uahillmag.com/wp-content/uploads/2023/11/DSCF2373-edited-scaled.jpg?resize=960%2C640&ssl=1"
  },
  {
    id: 16,
    title: "The math doesn't add up: Jobs, housing and the cost of being young in Northwest Arkansas",
    publication: "Hill Magazine",
    category: "Investigative",
    categoryEs: "Investigación",
    description: "A reported look at how housing costs and wages are shaping the ability of young professionals to build stable lives in Northwest Arkansas.",
    descriptionEs: "Un reportaje sobre cómo los costos de vivienda y los salarios afectan la posibilidad de que jóvenes profesionales construyan vidas estables en el noroeste de Arkansas.",
    url: "https://uahillmag.com/2026/05/07/the-math-doesnt-add-up-jobs-housing-and-the-cost-of-being-young-in-northwest-arkansas/",
    image: "https://i0.wp.com/uahillmag.com/wp-content/uploads/2026/05/1-659x1024.png?resize=960%2C640&ssl=1"
  }
];

const categories = [
  { value: 'All', en: 'All', es: 'Todos' },
  { value: 'Investigative', en: 'Investigative', es: 'Investigación' },
  { value: 'Culture', en: 'Culture', es: 'Cultura' },
  { value: 'Music Journalism', en: 'Music Journalism', es: 'Periodismo musical' }
];

const portfolioCopy = {
  en: {
    selectedTitle: 'Selected Work',
    selectedDescription: 'Four representative pieces across field reporting, accountability journalism, cultural features, and music coverage.',
    archiveTitle: 'More Reporting',
    archiveDescription: 'Search additional published work below. Featured pieces, including the Bolivia feature, are presented above.',
  },
  es: {
    selectedTitle: 'Trabajo destacado',
    selectedDescription: 'Cuatro piezas representativas de reportaje de campo, periodismo de rendición de cuentas, perfiles culturales y cobertura musical.',
    archiveTitle: 'Más reportajes',
    archiveDescription: 'Busca trabajos publicados adicionales. Los reportajes destacados, incluido el de Bolivia, aparecen arriba.',
  },
};

export default function Portfolio() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const selectedSamples = writingSamples.filter(sample => [10, 1, 2, 3].includes(sample.id));

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

        <div className="mb-20 grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {selectedSamples.map((sample, index) => (
            <WritingSampleCard key={sample.id} sample={sample} priority={index === 0} />
          ))}
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
        <nav
          id="portfolio-categories"
          aria-label={language === 'en' ? 'Reporting categories' : 'Categorías de reportajes'}
          className="-mx-4 mb-12 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0"
        >
          <div className="flex w-max gap-6 border-b border-border pb-4 sm:w-auto sm:flex-wrap">
            {categories.map((category) => (
              <button
                type="button"
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`shrink-0 text-sm font-medium transition-colors ${selectedCategory === category.value ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {category[language]}
              </button>
            ))}
            </div>
        </nav>

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
                ? 'Reporting and features published across investigative, cultural, and music coverage.'
                : 'Reportajes publicados de investigación, cultura y cobertura musical.'}
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
