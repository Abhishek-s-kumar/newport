import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neon-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-glow-cyber animate-glow">
                ABHISHEK S KUMAR
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-neon-primary">
                Software Engineer & Cybersecurity Specialist
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Innovating Secure Digital Frontiers with cutting-edge cybersecurity solutions 
              and robust software engineering practices
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-cyber hover:scale-105 transform transition-all duration-300 text-black font-semibold px-8 py-4 text-lg glow-cyber"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button
                variant="outline"
                className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10 hover:scale-105 transform transition-all duration-300 px-8 py-4 text-lg"
              >
                Download Resume
                <Download className="ml-2" size={20} />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-primary">5+</div>
                <div className="text-text-muted">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-primary">8.79</div>
                <div className="text-text-muted">M.Tech CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-primary">5+</div>
                <div className="text-text-muted">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-primary">2+</div>
                <div className="text-text-muted">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;