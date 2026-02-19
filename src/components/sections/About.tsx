import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import {
  Award, TrendingUp, Star,
  GraduationCap, Briefcase, Users, Target, Book
} from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience' | 'achievement';
  icon: React.ComponentType<{ className?: string }>;
}

export default function About() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline: TimelineItem[] = [
    {
      year: "2026",
      title: t('timeline.emailIntern.title'),
      organization: t('timeline.emailIntern.org'),
      description: t('timeline.emailIntern.desc'),
      type: "experience",
      icon: Briefcase
    },
    {
      year: "2026",
      title: t('timeline.editorialIntern.title'),
      organization: t('timeline.editorialIntern.org'),
      description: t('timeline.editorialIntern.desc'),
      type: "experience",
      icon: Target
    },
    {
      year: "2025",
      title: t('timeline.govAffairsIntern.title'),
      organization: t('timeline.govAffairsIntern.org'),
      description: t('timeline.govAffairsIntern.desc'),
      type: "experience",
      icon: Briefcase
    },
    {
      year: "2025",
      title: t('timeline.ballotpediaIntern.title'),
      organization: t('timeline.ballotpediaIntern.org'),
      description: t('timeline.ballotpediaIntern.desc'),
      type: "experience",
      icon: Target
    },
    {
      year: "2024",
      title: t('timeline.copywritingIntern.title'),
      organization: t('timeline.copywritingIntern.org'),
      description: t('timeline.copywritingIntern.desc'),
      type: "experience",
      icon: Target
    },
    {
      year: "2024",
      title: t('timeline.legislativeIntern.title'),
      organization: t('timeline.legislativeIntern.org'),
      description: t('timeline.legislativeIntern.desc'),
      type: "experience",
      icon: Users
    },
    {
      year: "2024",
      title: t('timeline.contentWriting.title'),
      organization: t('timeline.contentWriting.org'),
      description: t('timeline.contentWriting.desc'),
      type: "experience",
      icon: Target
    },
    {
      year: "2023",
      title: t('timeline.lifestylesEditor.title'),
      organization: t('timeline.lifestylesEditor.org'),
      description: t('timeline.lifestylesEditor.desc'),
      type: "experience",
      icon: Users
    },
    {
      year: "2026",
      title: t('timeline.education.title'),
      organization: t('timeline.education.org'),
      description: t('timeline.education.desc'),
      type: "education",
      icon: GraduationCap
    },
    {
      year: "2011",
      title: t('timeline.nonprofitFounder.title'),
      organization: t('timeline.nonprofitFounder.org'),
      description: t('timeline.nonprofitFounder.desc'),
      type: "achievement",
      icon: Book
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => (
    <motion.div
      variants={itemVariants}
      className="relative flex gap-3 sm:gap-6"
    >
      {/* Timeline Line */}
      {index < timeline.length - 1 && (
        <div className="absolute left-5 top-10 h-full w-0.5 bg-gradient-to-b from-purple-500 to-transparent sm:left-6 sm:top-12" />
      )}

      {/* Icon */}
      <div className="relative z-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 sm:h-12 sm:w-12">
          <item.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="rounded-2xl border border-border bg-card p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 sm:p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-purple-600 font-semibold">{item.year}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.type === 'education' ? 'bg-blue-100 text-blue-600' :
              item.type === 'experience' ? 'bg-green-100 text-green-600' :
                'bg-yellow-100 text-yellow-600'
              }`}>
              {t(`timeline.type.${item.type}`)}
            </span>
          </div>
          <h3 className="mb-2 text-base font-semibold text-card-foreground sm:text-lg">{item.title}</h3>
          <p className="mb-2 text-sm font-medium text-primary sm:text-base">{item.organization}</p>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="bg-background px-4 py-20 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {t('about.title')}
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-border bg-card p-5 backdrop-blur-sm sm:p-8 lg:col-span-2"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t('about.bio.p1')}
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {t('about.bio.p2')}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {t('about.bio.p3')}
              </p>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full rounded-2xl border border-border bg-card p-6 backdrop-blur-sm"
          >
            <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-card-foreground">
              <TrendingUp className="h-5 w-5 text-primary" />
              {t('about.stats.title')}
            </h3>
            <div className="space-y-4">
              {[
                { label: "Books Distributed", value: "13,000+", icon: Award },
                { label: "Volunteers Coordinated", value: "100+", icon: Users },
                { label: "Newsletter Readers", value: "30,000+", icon: Target },
                { label: "Articles Published", value: "100+", icon: Star }
              ].map((stat, index) => (
                <div key={index} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                      <stat.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground sm:text-sm">{stat.label}</span>
                  </div>
                  <span className="font-semibold text-card-foreground">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12"
        >
          <h3 className="mb-8 text-xl font-semibold text-foreground sm:text-2xl">{t('about.timeline.title')}</h3>
          <div className="space-y-0">
            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
