
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun, Instagram, Facebook, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Navigation items
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('banddigitals-theme') === 'dark' || 
    (!localStorage.getItem('banddigitals-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('banddigitals-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('banddigitals-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleStartProject = () => {
    window.open('https://wa.me/2348113662152?text=Hi, I would like to start a project with you!', '_blank');
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'py-2 glass shadow-lg' : 'py-4 bg-transparent'
    )}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/cb46f468-82b0-4d5a-aaf1-b24493f425f6.png" 
            alt="BandDigitals Logo" 
            className="h-10 mr-2"
            style={{ filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.2))' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              className="link-underline font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Dark mode toggle and mobile menu button */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </Button>
          
          {/* Desktop CTA */}
          <Button 
            className="hidden md:flex bg-gradient-to-r from-brand-teal to-brand-lavender hover:opacity-90 transition-opacity text-white rounded-full"
            onClick={handleStartProject}
          >
            Start a Project
          </Button>
        </div>

        {/* Mobile navigation overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-background">
            <div className="h-full flex flex-col p-6">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <img 
                    src="/lovable-uploads/cb46f468-82b0-4d5a-aaf1-b24493f425f6.png" 
                    alt="BandDigitals Logo" 
                    className="h-8 mr-2"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </Button>
              </div>
              
              <nav className="flex flex-col gap-6 text-xl">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="py-2 hover:text-brand-lavender transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-auto">
                <Button 
                  className="w-full bg-gradient-to-r from-brand-teal to-brand-lavender hover:opacity-90 transition-opacity text-white rounded-full"
                  onClick={handleStartProject}
                >
                  Start a Project
                </Button>
                
                <div className="flex justify-center mt-8 space-x-6">
                  <a href="https://instagram.com/banddigitals" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lavender transition-colors" aria-label="Instagram">
                    <Instagram size={22} />
                  </a>
                  <a href="https://facebook.com/saheedzeed" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lavender transition-colors" aria-label="Facebook">
                    <Facebook size={22} />
                  </a>
                  <a href="https://www.linkedin.com/in/saheed-ajisola" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lavender transition-colors" aria-label="LinkedIn">
                    <Linkedin size={22} />
                  </a>
                  <a href="mailto:banddigitals@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lavender transition-colors" aria-label="Email">
                    <Mail size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
