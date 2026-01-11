import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Heart } from 'lucide-react';

const experiences = [
  {
    title: 'Email Intern',
    company: 'Middle Seat',
    location: 'Remote',
    period: 'May 2025 - Present',
    description: [
      'Develop and execute email fundraising campaigns for progressive political causes.',
      'Craft compelling narratives that drive engagement and support democratic candidates and initiatives.',
      'Translate complex policy issues into accessible content for diverse audiences.'
    ],
  },
  {
    title: 'Editorial Intern',
    company: 'The American Prospect',
    location: 'Remote',
    period: 'Jan 2025 - Present',
    description: [
      'Conduct editorial research and support content development for progressive policy journalism.',
      'Assist with fact-checking, source verification, and background research for investigative pieces.',
      'Contribute to editorial planning and content strategy for online publication.'
    ],
  },
  {
    title: 'Legislative Policy Intern',
    company: 'Democratic Party of Arkansas',
    location: 'Little Rock, AR',
    period: 'Dec 2024 - Present',
    description: [
      'Evaluate proposed state legislation based on alignment with progressive policy priorities.',
      'Focus on impact on underrepresented communities, specifically educational equity.',
      'Track 500+ bills and identify key media moments in education and commerce committees.'
    ],
  },
  {
    title: 'Content Writing Intern',
    company: 'Sam M. Walton College of Business',
    location: 'Fayetteville, AR',
    period: 'May 2024 - Present',
    description: [
      'Write and edit weekly newsletter sent to 30,000+ students, staff, parents, and alumni.',
      'Cultivate relationships with campus organizations to source and maintain comprehensive resource database.',
      'Develop engaging content that promotes college initiatives and student engagement.'
    ],
  },
  {
    title: 'Lifestyles Editor',
    company: 'Arkansas Traveler Newspaper',
    location: 'Fayetteville, AR',
    period: 'May 2023 - Present',
    description: [
      'Edit and curate arts, culture, entertainment, and opinion content for 30,000+ readers.',
      'Published 100+ articles covering music journalism, feature stories, and investigative reporting.',
      'Lead weekly editorial meetings while managing content strategy and adhering to AP style guidelines.',
      'Coordinate with writers and photographers to ensure high-quality, engaging content.'
    ],
  },
  {
    title: 'Marketing and Communications Intern',
    company: 'Art Bridges Foundation',
    location: 'Bentonville, AR',
    period: 'Aug 2023 - Apr 2024',
    description: [
      'Crafted compelling public-facing narratives about foundation programs reaching underserved communities.',
      'Conducted comprehensive copy edits for museum partners\' exhibition texts and curatorial statements.',
      'Supported marketing initiatives to promote art accessibility and community engagement.'
    ],
  },
];

const volunteering = [
  {
    title: 'Student Mentor',
    organization: 'Lemke Journalism Project',
    location: 'Fayetteville, AR',
    period: '2024 - Present',
    description: [
      'Serve as guide to 50+ high school students interested in diversity writing about journalism at the UofA.',
      'Assist in culmination and publication of student-written Multicultural News annual paper.',
      'Provide mentorship and support for aspiring journalists from diverse backgrounds.'
    ],
  },
  {
    title: 'Volunteer Coordinator',
    organization: 'Passionate About Literacy',
    location: 'Fayetteville, AR',
    period: '2023 - Present',
    description: [
      'Designed literacy and mentoring curriculum reaching K-12 students across five local partner sites.',
      'Managed and conducted monthly training meetings with 70+ Passionate About Literacy volunteers.',
      'Facilitated communications strategy, including social media, campus outreach, and recruitment campaigns.'
    ],
  },
  {
    title: 'Nonprofit Founder and Secretary',
    organization: 'Bright Beginnings Books',
    location: 'Harrison, AR',
    period: '2011 - Present',
    description: [
      'Founded 501(c)(3) nonprofit that has distributed 13,000+ new books to underserved students in all 50 states and 12 other countries.',
      'Secured more than $7,000 from area businesses through fundraising efforts and marketing.',
      'Developed sustainable partnerships with Arkansas State Police, medical clinics, and school districts.'
    ],
  },
];

export default function Experience() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 bg-cream dark:bg-charcoal-dark">
      <motion.div
        ref={ref}
        className="container mx-auto"
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal dark:text-cream mb-4">
            {t('experience.title', 'Professional Experience')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-cream/80 max-w-2xl mx-auto">
            {t('experience.description', 'A timeline of my professional journey and key roles.')}
          </p>
        </div>
        <div className="space-y-8 mb-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-charcoal rounded-lg p-6 shadow-md border border-gray-100 dark:border-charcoal-light"
              variants={itemVariants}
            >
              <div className="flex items-center mb-2">
                <Briefcase className="w-5 h-5 text-accent mr-2" />
                <span className="font-bold text-charcoal dark:text-cream text-lg">{exp.title}</span>
                <span className="ml-2 text-gray-500 dark:text-cream/60">@ {exp.company}</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-cream/60 mb-2">{exp.location} &middot; {exp.period}</div>
              <ul className="list-disc ml-6 text-gray-700 dark:text-cream/80">
                {exp.description.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal dark:text-cream mb-4">
            {t('volunteering.title', 'Volunteering & Service')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-cream/80 max-w-2xl mx-auto">
            {t('volunteering.description', 'Giving back to the community through service and outreach.')}
          </p>
        </div>
        <div className="space-y-8">
          {volunteering.map((vol, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-charcoal rounded-lg p-6 shadow-md border border-gray-100 dark:border-charcoal-light"
              variants={itemVariants}
            >
              <div className="flex items-center mb-2">
                <Heart className="w-5 h-5 text-gold mr-2" />
                <span className="font-bold text-charcoal dark:text-cream text-lg">{vol.title}</span>
                <span className="ml-2 text-gray-500 dark:text-cream/60">@ {vol.organization}</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-cream/60 mb-2">{vol.location} &middot; {vol.period}</div>
              <ul className="list-disc ml-6 text-gray-700 dark:text-cream/80">
                {vol.description.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
