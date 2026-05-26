import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Sun, Moon, Globe, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#portfolio', label: language === 'en' ? 'Work' : 'Trabajo' },
    { href: '#about', label: language === 'en' ? 'About' : 'Acerca de' },
    { href: '#freelance', label: language === 'en' ? 'Services' : 'Servicios' },
    { href: '#contact', label: language === 'en' ? 'Contact' : 'Contacto' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      return;
    }

    window.location.href = `/${sectionId}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/94 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6">
          <a
            href="#"
            className="font-serif text-2xl font-semibold tracking-[-0.05em] text-foreground"
            onClick={(event) => {
              event.preventDefault();
              if (window.location.pathname !== '/') {
                window.location.href = '/';
                return;
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            AEJ
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="editorial-link text-sm">
              {language === 'en' ? 'Resume' : 'Currículum'}
              <ArrowUpRight className="ml-2 inline h-4 w-4" />
            </a>
            <div className="ml-2 flex items-center border-l border-border pl-5">
              <button
                onClick={toggleTheme}
                className="focus-ring p-2 text-muted-foreground transition-colors hover:text-primary"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={toggleLanguage}
                className="focus-ring ml-2 flex items-center gap-2 p-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                aria-label={language === 'en' ? 'Cambiar a español' : 'Switch to English'}
              >
                <Globe className="h-5 w-5" />
                {language === 'en' ? 'ES' : 'EN'}
              </button>
            </div>
          </div>

          <button
            className="focus-ring p-2 text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-border bg-background md:hidden"
            >
              <div className="space-y-1 px-4 py-5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block border-b border-border py-4 font-medium"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="block py-4 font-medium text-primary">
                  {language === 'en' ? 'Resume' : 'Currículum'}
                </a>
                <div className="flex gap-5 pt-3">
                  <button onClick={toggleTheme} className="flex items-center gap-2 py-2 text-sm text-muted-foreground">
                    {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    {theme === 'dark' ? 'Light' : 'Dark'}
                  </button>
                  <button onClick={toggleLanguage} className="flex items-center gap-2 py-2 text-sm text-muted-foreground">
                    <Globe className="h-5 w-5" />
                    {language === 'en' ? 'Español' : 'English'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="w-full overflow-x-hidden pt-16">{children}</main>

      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-5 px-4 sm:flex-row sm:items-end sm:px-6">
          <div>
            <p className="font-serif text-3xl tracking-[-0.05em]">Addie Elizabeth Jones</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {language === 'en' ? 'Journalism and political communications' : 'Periodismo y comunicación política'}
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="https://www.linkedin.com/in/addie-jones-b5a5b6250/" target="_blank" rel="noopener noreferrer" className="editorial-link">LinkedIn</a>
            <a href="mailto:addie.elizabethjones@gmail.com" className="editorial-link">Email</a>
            <span className="text-muted-foreground">&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
