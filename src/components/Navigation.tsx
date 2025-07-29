import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-strong shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-cyber rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">AS</span>
          </div>
          <span className="text-xl font-bold text-glow-cyber">
            ABHISHEK S KUMAR
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-text-secondary hover:text-cyber-primary transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-cyber group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-text-primary hover:text-cyber-primary transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong border-t border-white/10">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-text-secondary hover:text-cyber-primary transition-colors duration-300 text-left"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;