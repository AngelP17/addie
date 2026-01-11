import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import {
  PenTool, Users, MessageSquare, Target, BookOpen, Lightbulb,
  TrendingUp, Award, Star, CheckCircle
} from 'lucide-react';

interface Competency {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  level: number;
  skills: string[];
  achievements: string[];
}

const competencies: Competency[] = [
  {
    icon: PenTool,
    title: "Policy Analysis & Research",
    description: "Legislative tracking, policy evaluation, federal affairs",
    level: 95,
    skills: ["Federal legislation tracking", "Policy brief development", "Congressional hearing analysis", "Stakeholder research"],
    achievements: ["Track 500+ bills through legislative process", "Evaluate state policy proposals for progressive alignment", "Analyze educational equity impacts on underrepresented communities"]
  },
  {
    icon: Users,
    title: "Civic Engagement & Leadership",
    description: "Student organization leadership, voter engagement, community organizing",
    level: 90,
    skills: ["Organization leadership", "Voter education", "Community outreach", "Cross-campus partnerships"],
    achievements: ["President of Young Democrats at UofA", "Led historic election campaign for first Latina state legislator", "Coordinated 100+ student members in civic initiatives"]
  },
  {
    icon: MessageSquare,
    title: "Editorial & Content Management",
    description: "Newsletter writing, editorial leadership, AP style",
    level: 88,
    skills: ["Newsletter development", "Editorial planning", "AP style editing", "Content strategy"],
    achievements: ["30,000+ newsletter readers across publications", "100+ articles published on arts, culture, and policy", "Weekly editorial leadership for campus newspaper"]
  },
  {
    icon: Target,
    title: "Literacy Advocacy & Community Service",
    description: "Nonprofit leadership, volunteer coordination, fundraising",
    level: 92,
    skills: ["Nonprofit management", "Volunteer coordination", "Fundraising strategy", "Community partnerships"],
    achievements: ["Distributed 13,000+ books across all 50 states", "Coordinated 70+ volunteers through literacy programs", "Raised $7,000+ in funds through strategic partnerships"]
  },
  {
    icon: BookOpen,
    title: "Academic Excellence & Research",
    description: "Honors thesis, educational equity research, multidisciplinary studies",
    level: 89,
    skills: ["Educational equity research", "Research methodology", "Academic writing", "Multidisciplinary approach"],
    achievements: ["Fulbright Honors Sturgis Fellow", "3.903 GPA in Journalism & Political Science", "Honors thesis on educational equity and book access in Northwest Arkansas"]
  },
  {
    icon: Lightbulb,
    title: "Diversity, Equity & Inclusion",
    description: "DEI leadership, multicultural journalism, inclusive advocacy",
    level: 94,
    skills: ["DEI program development", "Multicultural mentorship", "Inclusive leadership", "Social awareness"],
    achievements: ["DEI Director for 600+ members", "Multicultural journalism mentor for 50+ high school students", "Diverse business partnerships through foundation work"]
  }
];

export default function Competencies() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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

  const CompetencyCard = ({ competency, index }: { competency: Competency; index: number }) => {
    return (
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -8 }}
        className="group bg-card backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
            >
              <competency.icon className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-purple-400 transition-colors">
                {competency.title}
              </h3>
              <p className="text-gray-600 dark:text-white text-sm">{competency.description}</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              {t('competencies.keySkills')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {competency.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded text-xs border border-gray-300 dark:border-gray-600/50"
                >
                  <span className="text-gray-600 font-medium dark:text-white">{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              {t('competencies.achievements')}
            </h4>
            <ul className="space-y-1">
              {competency.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex} className="flex items-start gap-2 text-xs text-gray-600 dark:text-white">
                  <Star className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="competencies" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('competencies.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-white max-w-3xl mx-auto leading-relaxed">
            {t('competencies.description')}
          </p>
        </motion.div>

        {/* Competencies Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {competencies.map((competency, index) => (
            <CompetencyCard key={index} competency={competency} index={index} />
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: "Books Distributed", value: "13,000+", icon: TrendingUp },
            { label: "Bills Tracked", value: "500+", icon: Award },
            { label: "Newsletter Readers", value: "30,000+", icon: Star },
            { label: "GPA", value: "3.903", icon: BookOpen }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-card backdrop-blur-sm rounded-2xl p-6 border border-border text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-white text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
