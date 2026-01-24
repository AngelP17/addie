import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ExternalLink, Search, Download, FileText
} from 'lucide-react';

interface WritingSample {
  id: number;
  title: string;
  publication: string;
  category: string;
  description: string;
  url: string;
  image: string;
  featured?: boolean;
  photoCredit?: string;
}

const writingSamples: WritingSample[] = [
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
    image: "/api/placeholder/400/300",
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
    image: "/api/placeholder/400/300"
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

const categories = ['All', 'Investigative Journalism', 'Feature', 'Arts & Entertainment', 'Arts & Culture', 'Music Journalism', 'Campus Features'];

export default function Portfolio() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSamples = writingSamples.filter(sample => {
    const matchesCategory = selectedCategory === 'All' || sample.category === selectedCategory;
    const matchesSearch = sample.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sample.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sample.publication.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const WritingSampleCard = ({ sample }: { sample: WritingSample }) => (
    <motion.a
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      href={sample.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover cursor-pointer overflow-hidden block group"
    >
      {/* Article Image */}
      <div className="relative aspect-video bg-gradient-to-br from-purple-500/10 to-blue-500/10 overflow-hidden">
        {sample.image && !sample.image.includes('placeholder') ? (
          <img
            src={sample.image}
            alt={sample.title}
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
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
        {sample.photoCredit && (
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 text-white text-xs rounded">
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
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
            {sample.category}
          </span>
          <span className="text-xs text-muted-foreground">{sample.publication}</span>
        </div>

        <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {sample.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{sample.description}</p>

        <div className="flex items-center gap-2 text-sm text-primary">
          {t('portfolio.readArticle')}
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </motion.a>
  );

  return (
    <section id="portfolio" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-1">{t('portfolio.title')}</h2>
              <p className="text-muted-foreground text-lg">{t('portfolio.subtitle')}</p>
            </div>
          </div>
          <button
            onClick={handleDownloadResume}
            className="btn-primary flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            {t('portfolio.downloadResume')}
          </button>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? 'btn-primary'
                  : 'btn-outline'
              }
            >
              {category}
            </button>
          ))}
          <div className="ml-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder={t('portfolio.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-10"
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
        <div className="bg-card mt-20 py-16 rounded-lg border border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-card-foreground mb-6">{t('portfolio.moreArticles.title')}</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
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
