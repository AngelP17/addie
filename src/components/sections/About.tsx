import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Award, TrendingUp, Star, Quote, MapPin, 
  GraduationCap, Briefcase, Users, Target,
  ExternalLink, Linkedin, Twitter, Mail, Phone
} from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience' | 'achievement';
  icon: React.ComponentType<{ className?: string }>;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar?: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2025",
    title: "Government Affairs Intern",
    organization: "Center on Budget and Policy Priorities",
    description: "Track federal legislation through congressional process and attend hearings to summarize policy debates.",
    type: "experience",
    icon: Briefcase
  },
  {
    year: "2024",
    title: "Legislative Policy Intern",
    organization: "Democratic Party of Arkansas",
    description: "Evaluate proposed state legislation based on alignment with progressive policy priorities and impact on underrepresented communities.",
    type: "experience",
    icon: Users
  },
  {
    year: "2024",
    title: "Content Writing Intern",
    organization: "Sam M. Walton College of Business",
    description: "Write and edit weekly newsletter sent to 17,000+ students, staff, parents, and alumni.",
    type: "experience",
    icon: Target
  },
  {
    year: "2023",
    title: "Lifestyles Editor",
    organization: "Arkansas Traveler Newspaper",
    description: "Edit and curate arts, culture, entertainment, and opinion content for 30,000+ readers.",
    type: "experience",
    icon: Users
  },
  {
    year: "2026",
    title: "Bachelor's in Journalism & Political Science",
    organization: "University of Arkansas",
    description: "Minors in Gender Studies, Nonprofit Studies, and Rhetoric Writing. Fulbright Honors College Sturgis Fellow.",
    type: "education",
    icon: GraduationCap
  }
];

const testimonials: Testimonial[] = [
  {
    name: "Diana Gonzales Worthen",
    role: "State Representative",
    company: "Arkansas House of Representatives",
    quote: "Addie's leadership in the Young Democrats was instrumental in my historic election as Arkansas's first Latina state representative. Her dedication to civic engagement and grassroots organizing is unmatched.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    name: "Dr. Janine Parry",
    role: "Professor",
    company: "University of Arkansas",
    quote: "Addie's commitment to policy analysis and civic engagement makes her an exceptional student leader. Her work on educational equity and legislative tracking demonstrates both academic rigor and practical impact.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    name: "Sarah Chen",
    role: "Editor-in-Chief",
    company: "Arkansas Traveler",
    quote: "Addie's editorial leadership transformed our content strategy. Her ability to balance journalistic integrity with engaging storytelling has significantly increased our readership and community impact.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  }
];

const skills = [
  { name: "Policy Analysis", level: 95 },
  { name: "Civic Engagement", level: 92 },
  { name: "Editorial Leadership", level: 88 },
  { name: "Legislative Research", level: 89 },
  { name: "Community Organizing", level: 94 },
  { name: "Literacy Advocacy", level: 90 }
];

export default function About() {
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
        <div className="bg-gray-100/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-400/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-purple-600 font-semibold">{item.year}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              item.type === 'education' ? 'bg-blue-100 text-blue-600' :
              item.type === 'experience' ? 'bg-green-100 text-green-600' :
              'bg-yellow-100 text-yellow-600'
            }`}>
              {item.type}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
          <p className="text-purple-600 dark:text-white font-medium mb-2">{item.organization}</p>
          <p className="text-gray-600 dark:text-white text-sm">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <motion.div
      variants={itemVariants}
      className="bg-gray-100/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-400/30 transition-all duration-300"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <Quote className="w-6 h-6 text-purple-600 mb-4" />
      
      <p className="text-gray-600 dark:text-white mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
          <div className="text-purple-600 dark:text-purple-400 text-sm">{testimonial.role}</div>
          <div className="text-gray-500 dark:text-white text-sm">{testimonial.company}</div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
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
            About Addie Elizabeth Jones
          </h2>
          <p className="text-xl text-gray-500 dark:text-white max-w-3xl mx-auto leading-relaxed">
            A dedicated advocate for civic engagement, literacy, and policy analysis committed to creating positive change in communities.
          </p>
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
              className="bg-gray-100/50 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-12"
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-600 dark:text-white leading-relaxed mb-6 text-lg">
                  I am a Journalism and Political Science major at the University of Arkansas with minors in Gender Studies, Nonprofit Studies, and Rhetoric Writing. As a Fulbright Honors College Sturgis Fellow, I'm dedicated to civic engagement, literacy advocacy, and policy analysis.
                </p>
                <p className="text-gray-600 dark:text-white leading-relaxed mb-6">
                  Currently serving as Government Affairs Intern at the Center on Budget and Policy Priorities and President of Young Democrats at UofA, I focus on tracking federal legislation and promoting civic engagement. My work spans from legislative research to community organizing, with a particular emphasis on educational equity and underrepresented communities.
                </p>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Through my leadership roles and community service, including founding Bright Beginnings Books and serving as Director of Diversity, Equity and Inclusion for Delta Delta Delta, I've developed a comprehensive approach to advocacy that combines policy analysis with grassroots organizing and community engagement.
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
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Professional Journey</h3>
              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <TimelineItem key={index} item={item} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium dark:text-white">{skill.name}</span>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </div>
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
              className="bg-gray-100/50 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                Key Achievements
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Books Distributed", value: "12,000+", icon: Award },
                  { label: "Volunteers Coordinated", value: "70+", icon: Users },
                  { label: "Newsletter Readers", value: "17,000+", icon: Target },
                  { label: "Service Hours", value: "100+", icon: Star }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-gray-600 dark:text-white text-sm">{stat.label}</span>
                    </div>
                    <span className="text-gray-900 dark:text-white font-semibold">{stat.value}</span>
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
              className="bg-gray-100/50 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <a href="mailto:addiej@uark.edu" className="flex items-center gap-3 text-gray-600 dark:text-white hover:text-purple-400 transition-colors">
                  <Mail className="w-5 h-5 text-navy-700 dark:text-white" />
                  <span>addiej@uark.edu</span>
                </a>
                <a href="tel:+18705770389" className="flex items-center gap-3 text-gray-600 dark:text-white hover:text-purple-400 transition-colors">
                  <Phone className="w-5 h-5 text-navy-700 dark:text-white" />
                  <span>(870) 577-0389</span>
                </a>
                <div className="flex items-center gap-3 text-gray-600 dark:text-white">
                  <MapPin className="w-5 h-5 text-navy-700 dark:text-white" />
                  <span>Fayetteville, Arkansas</span>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <a href="https://www.linkedin.com/in/addie-jones-b5a5b6250" className="w-10 h-10 bg-purple-500/20 dark:bg-purple-500/40 rounded-lg flex items-center justify-center hover:bg-purple-500/30 transition-colors">
                  <Linkedin className="w-5 h-5 text-purple-400" />
                </a>
                <a href="#" className="w-10 h-10 bg-purple-500/20 dark:bg-purple-500/40 rounded-lg flex items-center justify-center hover:bg-purple-500/30 transition-colors">
                  <Twitter className="w-5 h-5 text-purple-400" />
                </a>
                <a href="#" className="w-10 h-10 bg-purple-500/20 dark:bg-purple-500/40 rounded-lg flex items-center justify-center hover:bg-purple-500/30 transition-colors">
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">What People Say</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
      </motion.div>
      </div>
    </section>
  );
} 