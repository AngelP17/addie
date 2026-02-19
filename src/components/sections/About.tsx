import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import {
  Award, TrendingUp, Star, MapPin,
  GraduationCap, Briefcase, Users, Target,
  Linkedin, Mail, Phone, Book
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
      className="flex gap-6 relative"
    >
      {/* Timeline Line */}
      {index < timeline.length - 1 && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent" />
      )}

      {/* Icon */}
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <item.icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="bg-card backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-purple-600 font-semibold">{item.year}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.type === 'education' ? 'bg-blue-100 text-blue-600' :
              item.type === 'experience' ? 'bg-green-100 text-green-600' :
                'bg-yellow-100 text-yellow-600'
              }`}>
              {t(`timeline.type.${item.type}`)}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-card-foreground mb-2">{item.title}</h3>
          <p className="text-primary font-medium mb-2">{item.organization}</p>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border mb-12"
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {t('about.bio.p1')}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('about.bio.p2')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.bio.p3')}
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-8">{t('about.timeline.title')}</h3>
              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <TimelineItem key={index} item={item} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card backdrop-blur-sm rounded-2xl p-6 border border-border"
            >
              <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                {t('about.stats.title')}
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Books Distributed", value: "13,000+", icon: Award },
                  { label: "Volunteers Coordinated", value: "100+", icon: Users },
                  { label: "Newsletter Readers", value: "30,000+", icon: Target },
                  { label: "Articles Published", value: "100+", icon: Star }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{stat.label}</span>
                    </div>
                    <span className="text-card-foreground font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card backdrop-blur-sm rounded-2xl p-6 border border-border"
            >
              <h3 className="text-xl font-semibold text-card-foreground mb-6">{t('about.contact.title')}</h3>
              <div className="space-y-4">
                <a href="mailto:addie.elizabethjones@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-foreground" />
                  <span>addie.elizabethjones@gmail.com</span>
                </a>
                <a href="tel:+18705770389" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-foreground" />
                  <span>(870) 577-0389</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-foreground" />
                  <span>Fayetteville, Arkansas</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <a href="https://www.linkedin.com/in/addie-jones-b5a5b6250/" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a href="mailto:addie.elizabethjones@gmail.com" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
