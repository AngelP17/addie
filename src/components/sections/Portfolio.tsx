import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Github, Eye, 
  Search, Download
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  status: 'Live' | 'Development' | 'Concept';
  metrics: Record<string, string>;
  link?: string;
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Federal Legislation Tracking System",
    category: "Policy Analysis",
    description: "Comprehensive system for tracking federal legislation through congressional process and analyzing policy impacts on underrepresented communities.",
    image: "/api/placeholder/400/300",
    tech: ["Policy Research", "Legislative Analysis", "Stakeholder Mapping", "Impact Assessment"],
    status: "Live",
    metrics: { bills: "50+", hearings: "25+", briefs: "15+" },
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 2,
    title: "Young Democrats Campaign Success",
    category: "Leadership",
    description: "Led historic campaign for Diana Gonzales Worthen, Arkansas's first Latina state representative, coordinating voter engagement and grassroots organizing.",
    image: "/api/placeholder/400/300",
    tech: [],
    status: "Live",
    metrics: { volunteers: "100+", voters: "5K+", success: "Historic" },
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 3,
    title: "Bright Beginnings Books Platform",
    category: "Community Service",
    description: "501(c)(3) nonprofit distributing 12,000+ books to underserved students across all 50 states and 12 countries, raising $6,000+ through strategic partnerships.",
    image: "/api/placeholder/400/300",
    tech: [],
    status: "Live",
    metrics: { books: "12K+", states: "50", countries: "12", funds: "$6K+" },
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 4,
    title: "Walton College Newsletter System",
    category: "Communication",
    description: "Weekly newsletter management system serving 17,000+ students, staff, parents, and alumni with comprehensive resource database and engagement tracking.",
    image: "/api/placeholder/400/300",
    tech: [],
    status: "Live",
    metrics: { readers: "17K+", issues: "50+", engagement: "85%" },
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Arkansas Traveler Editorial Hub",
    category: "Journalism",
    description: "Editorial management system for Arkansas Traveler serving 30,000+ readers with AP style guidelines, content strategy, and reader engagement analytics.",
    image: "/api/placeholder/400/300",
    tech: [],
    status: "Live",
    metrics: { readers: "30K+", articles: "200+", style: "AP" },
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Passionate About Literacy Program",
    category: "Community Service",
    description: "Literacy mentorship program coordinating 70+ volunteers across five local partner sites, reaching K-12 students with comprehensive curriculum.",
    image: "/api/placeholder/400/300",
    tech: [],
    status: "Live",
    metrics: { volunteers: "70+", sites: "5", students: "500+" },
    link: "#",
    github: "#"
  }
];

const categories = ['All', 'Policy Analysis', 'Leadership', 'Community Service', 'Communication', 'Journalism'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const processedProjects = projects.map(project => ({
    ...project,
    tech: project.category === 'AI Generator' ? project.tech : [],
  }));

  const filteredProjects = processedProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="card card-hover cursor-pointer overflow-hidden"
      onClick={() => setSelectedProject(project)}
    >
      {/* Project Image */}
      <div className="relative aspect-video bg-gradient-to-br from-muted to-accent overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/10 to-accent/10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-muted/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-8 h-8 text-muted-foreground" />
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <button className="w-8 h-8 bg-background/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-background/30 transition-colors">
              <Eye className="w-4 h-4 text-foreground" />
            </button>
            {project.github && (
              <button className="w-8 h-8 bg-background/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-background/30 transition-colors">
                <Github className="w-4 h-4 text-foreground" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
            {project.category}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            project.status === 'Live' ? 'status-live' : 
            project.status === 'Development' ? 'status-development' :
            'status-concept'
          }`}>
            {project.status}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {Object.entries(project.metrics).map(([key, value], index) => (
            <div key={index}>
              <div className="text-card-foreground font-semibold text-sm">{value}</div>
              <div className="text-muted-foreground text-xs capitalize">{key}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="portfolio" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-1">Addie Elizabeth Jones</h2>
              <p className="text-muted-foreground text-lg">Journalism & Political Science Student | Fulbright Honors Sturgis Fellow</p>
            </div>
          </div>
          <button 
            onClick={handleDownloadResume}
            className="btn-primary flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
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
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-10"
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
          </div>
        )}

        {/* Skills & Expertise Section */}
        <div className="bg-card mt-20 py-16 rounded-lg border border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-card-foreground mb-12 text-center">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Policy & Government</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Federal Legislation Tracking</li>
                  <li>• Policy Analysis & Evaluation</li>
                  <li>• Congressional Hearing Analysis</li>
                  <li>• Educational Equity Advocacy</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Leadership & Civic Engagement</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Young Democrats President</li>
                  <li>• DEI Director (600+ members)</li>
                  <li>• Democracy Fellows Officer</li>
                  <li>• Voter Education & Registration</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Journalism & Communication</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AP Style Writing & Editing</li>
                  <li>• Newsletter Management (17K+ readers)</li>
                  <li>• Editorial Leadership</li>
                  <li>• Content Strategy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Community Service</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bright Beginnings Books Founder</li>
                  <li>• 12,000+ Books Distributed</li>
                  <li>• Volunteer Coordination (70+)</li>
                  <li>• Fundraising ($6,000+)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">{selectedProject.title}</h2>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                  {/* Add more detailed project information */}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 