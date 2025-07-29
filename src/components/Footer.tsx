import React from 'react';
import { Linkedin, Github, Twitter, Instagram, Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Abhishek-s-kumar', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-primary to-background opacity-50"></div>
      
      <div className="relative border-t border-cyber-primary/20">
        <div className="container mx-auto px-6 py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold">AS</span>
                </div>
                <span className="text-2xl font-bold text-glow-cyber">
                  ABHISHEK S KUMAR
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Software Engineer & Cybersecurity Specialist passionate about 
                building secure digital solutions and protecting against evolving threats.
              </p>
              <div className="flex items-center space-x-2 text-text-muted">
                <Code size={16} />
                <span>Built with</span>
                <Heart size={16} className="text-neon-primary" />
                <span>using React & TypeScript</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-cyber-primary">Quick Links</h3>
              <nav className="grid grid-cols-2 gap-3">
                {footerLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-cyber-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Connect Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-cyber-primary">Let's Connect</h3>
              <p className="text-text-secondary">
                Follow me on social media for updates on my latest projects and cybersecurity insights.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                        isEven
                          ? 'bg-cyber-primary/20 border-cyber-primary/30 hover:bg-cyber-primary/30 hover:border-cyber-primary text-cyber-primary'
                          : 'bg-neon-primary/20 border-neon-primary/30 hover:bg-neon-primary/30 hover:border-neon-primary text-neon-primary'
                      }`}
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-cyber-primary/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-text-muted text-center md:text-left">
                <p>&copy; {currentYear} Abhishek S Kumar. All rights reserved.</p>
              </div>
              
              <div className="flex items-center space-x-6 text-text-muted text-sm">
                <span>Made in Kerala, India 🇮🇳</span>
                <span className="hidden md:block">•</span>
                <span>Secured with ❤️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-cyber"></div>
      </div>
    </footer>
  );
};

export default Footer;