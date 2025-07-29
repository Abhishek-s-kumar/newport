import React from 'react';
import { Shield, Cloud, Briefcase, Database, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Ethical Hacking: 2023 Latest Edition',
      organization: 'Cyber Security Cadet',
      description: 'Comprehensive certification covering the latest penetration testing techniques and security tools.',
      date: 'Oct 2023',
      icon: Shield,
      color: 'cyber-primary'
    },
    {
      title: 'Cloud Computing & Distributed Systems',
      organization: 'NPTEL Online Certification',
      description: 'Advanced course covering cloud architecture, distributed computing principles, and implementation.',
      date: 'Jan 2025 - Mar 2025',
      icon: Cloud,
      color: 'neon-primary'
    },
    {
      title: 'TCS iON Career Edge – Young Professional',
      organization: 'TCS iON',
      description: 'Professional development program covering essential workplace skills and industry knowledge.',
      date: 'Sep 2023 - Oct 2023',
      icon: Briefcase,
      color: 'cyber-primary'
    },
    {
      title: 'NPTEL Data Science for Engineers',
      organization: 'NPTEL',
      description: 'Comprehensive course covering data analysis, machine learning, and statistical methods for engineering applications.',
      date: 'Jan 2023 - Feb 2023',
      icon: Database,
      color: 'neon-primary'
    },
    {
      title: 'NPTEL Java Programming',
      organization: 'NPTEL',
      description: 'Advanced Java programming concepts including OOP, data structures, and application development.',
      date: 'Jan 2022 - Apr 2022',
      icon: Coffee,
      color: 'cyber-primary'
    }
  ];

  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById('certs-container');
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyber mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto"></div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollContainer('left')}
            className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollContainer('right')}
            className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10"
          >
            <ChevronRight size={20} />
          </Button>
        </div>

        {/* Certifications Slider */}
        <div className="relative">
          <div
            id="certs-container"
            className="flex gap-8 overflow-x-auto custom-scrollbar pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              const isNeon = cert.color === 'neon-primary';

              return (
                <div
                  key={cert.title}
                  className={`flex-none w-80 glass p-8 rounded-xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    isNeon 
                      ? 'border-neon-primary/20 hover:border-neon-primary/40 hover:glow-neon' 
                      : 'border-cyber-primary/20 hover:border-cyber-primary/40 hover:glow-cyber'
                  }`}
                  style={{ 
                    scrollSnapAlign: 'start',
                    animationDelay: `${index * 0.1}s` 
                  }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    isNeon ? 'bg-neon-primary/20' : 'bg-cyber-primary/20'
                  }`}>
                    <IconComponent 
                      className={isNeon ? 'text-neon-primary' : 'text-cyber-primary'} 
                      size={32} 
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className={`text-xl font-bold ${
                      isNeon ? 'text-neon-primary' : 'text-cyber-primary'
                    }`}>
                      {cert.title}
                    </h3>
                    
                    <p className="text-text-secondary font-medium">
                      {cert.organization}
                    </p>
                    
                    <p className="text-text-muted leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      isNeon
                        ? 'bg-neon-primary/20 text-neon-primary border border-neon-primary/30'
                        : 'bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/30'
                    }`}>
                      {cert.date}
                    </div>
                  </div>

                  {/* Decoration */}
                  <div className={`absolute top-0 left-0 w-full h-1 rounded-t-xl ${
                    isNeon ? 'bg-gradient-to-r from-neon-primary to-neon-secondary' : 'bg-gradient-cyber'
                  }`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-xl border border-cyber-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-cyber-primary mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Committed to staying current with the latest technologies and security practices. 
              These certifications represent my dedication to professional growth and expertise 
              in cybersecurity, cloud computing, and software development.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-primary">5+</div>
                <div className="text-text-muted text-sm">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-primary">3+</div>
                <div className="text-text-muted text-sm">Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-primary">2+</div>
                <div className="text-text-muted text-sm">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;