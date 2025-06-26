import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Sun, Moon, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeTooltip, setShowThemeTooltip] = useState(false);
  const [showLangTooltip, setShowLangTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: language === 'en' ? 'About' : 'Sobre mí' },
    { href: '#competencies', label: language === 'en' ? 'Core Competencies' : 'Competencias' },
    { href: '#portfolio', label: language === 'en' ? 'Portfolio' : 'Portafolio' },
    { href: '#contact', label: language === 'en' ? 'Contact' : 'Contacto' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
            : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#"
              className="flex items-center gap-3 text-2xl font-bold text-foreground transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Addie Elizabeth Jones
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="nav-link relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
              
              {/* Resume Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary ml-4 hidden lg:inline-flex items-center gap-2"
                aria-label="Download Resume"
              >
                Download Resume
                <ArrowRight className="w-4 h-4" />
              </a>
              
              {/* Theme Toggle */}
              <div className="relative">
                <motion.button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus-ring"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setShowThemeTooltip(true)}
                  onMouseLeave={() => setShowThemeTooltip(false)}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.button>
                {showThemeTooltip && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-10 bg-popover text-popover-foreground text-xs rounded px-2 py-1 shadow-lg z-50 border border-border">
                    {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  </div>
                )}
              </div>
              
              {/* Language Toggle */}
              <div className="relative">
                <motion.button
                  onClick={toggleLanguage}
                  className="p-2 rounded-lg transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus-ring flex items-center gap-2"
                  aria-label={language === 'en' ? 'Cambiar a español' : 'Switch to English'}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setShowLangTooltip(true)}
                  onMouseLeave={() => setShowLangTooltip(false)}
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {language === 'en' ? 'ES' : 'EN'}
                  </span>
                </motion.button>
                {showLangTooltip && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-10 bg-popover text-popover-foreground text-xs rounded px-2 py-1 shadow-lg z-50 border border-border">
                    {language === 'en' ? 'Cambiar a español' : 'Switch to English'}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 focus-ring"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="nav-link py-2 px-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      whileHover={{ x: 8 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <motion.button
                      onClick={toggleTheme}
                      className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-accent hover:text-accent-foreground"
                      whileHover={{ scale: 1.05 }}
                    >
                      {theme === 'dark' ? (
                        <>
                          <Sun className="w-5 h-5" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="w-5 h-5" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </motion.button>
                    <motion.button
                      onClick={toggleLanguage}
                      className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-accent hover:text-accent-foreground"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Globe className="w-5 h-5" />
                      <span>{language === 'en' ? 'Español' : 'English'}</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50 py-12 mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Addie Jones
              </h3>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} All rights reserved.
            </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Twitter
              </a>
              <a
                href="mailto:addie@example.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 