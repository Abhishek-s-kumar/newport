import React from 'react';
import { ExternalLink, Github, Smartphone, KeyRound, Usb, Image, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import juiceJudgeImage from '@/assets/juice-judge-project.jpg';
import keystrokeAuthImage from '@/assets/keystroke-auth-project.jpg';
import usbLoggerImage from '@/assets/usb-logger-project.jpg';
import steganographyImage from '@/assets/steganography-project.jpg';
import vanetImage from '@/assets/vanet-project.jpg';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Juice Judge',
      description: 'Android app developed in Kotlin to estimate remaining battery life during Google Meet sessions using system data and BatteryManager API for real-time predictions.',
      image: juiceJudgeImage,
      icon: Smartphone,
      tech: ['Kotlin', 'Android', 'Battery API'],
      github: 'https://github.com/Abhishek-s-kumar/battery-predict',
      demo: 'https://github.com/Abhishek-s-kumar/battery-predict',
      color: 'cyber-primary'
    },
    {
      title: 'Keystroke Authentication',
      description: 'Implemented keystroke dynamics for unique user identification using typing patterns analysis and real-time transmission via WebSocket with ML algorithms for authentication.',
      image: keystrokeAuthImage,
      icon: KeyRound,
      tech: ['Python', 'WebSocket', 'Machine Learning'],
      color: 'neon-primary'
    },
    {
      title: 'USB Automation Logger',
      description: 'Python-based automation script that activates upon USB insertion to log keyboard/mouse inputs, screenshots, and audio with multi-threading for performance efficiency.',
      image: usbLoggerImage,
      icon: Usb,
      tech: ['Python', 'Automation', 'Security'],
      github: 'https://github.com/Abhishek-s-kumar/usb_keylogger',
      color: 'cyber-primary'
    },
    {
      title: 'Steganographic Encryption',
      description: 'Integrated steganography into image encryption with a user-friendly GUI using Tkinter and OpenCV, featuring robust error handling and secure message embedding.',
      image: steganographyImage,
      icon: Image,
      tech: ['Python', 'OpenCV', 'Encryption'],
      github: 'https://github.com/Abhishek-s-kumar/AICTE-internship-project',
      color: 'neon-primary'
    },
    {
      title: 'Secure VANET Simulation',
      description: 'Built NS-3/SUMO simulator using HECC cryptography for secure vehicle communications with attack-resistant routing and Dockerized setup for one-click deployment.',
      image: vanetImage,
      icon: Network,
      tech: ['NS-3', 'SUMO', 'Docker', 'Cryptography'],
      github: 'https://github.com/Abhishek-s-kumar/HECVANET',
      color: 'cyber-primary'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyber mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isNeon = project.color === 'neon-primary';

            return (
              <div
                key={project.title}
                className={`glass rounded-xl overflow-hidden border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                  isNeon 
                    ? 'border-neon-primary/20 hover:border-neon-primary/40 hover:glow-neon' 
                    : 'border-cyber-primary/20 hover:border-cyber-primary/40 hover:glow-cyber'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Project Icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg flex items-center justify-center ${
                    isNeon ? 'bg-neon-primary/20' : 'bg-cyber-primary/20'
                  } glass`}>
                    <IconComponent 
                      className={isNeon ? 'text-neon-primary' : 'text-cyber-primary'} 
                      size={20} 
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isNeon ? 'text-neon-primary' : 'text-cyber-primary'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isNeon
                            ? 'bg-neon-primary/20 text-neon-primary border border-neon-primary/30'
                            : 'bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/30'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className={`border-2 transition-all duration-300 hover:scale-105 ${
                          isNeon
                            ? 'border-neon-primary text-neon-primary hover:bg-neon-primary/10'
                            : 'border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10'
                        }`}
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        Source Code
                      </Button>
                    )}
                    
                    {project.demo && (
                      <Button
                        variant="outline"
                        size="sm"
                        className={`border-2 transition-all duration-300 hover:scale-105 ${
                          isNeon
                            ? 'border-neon-primary text-neon-primary hover:bg-neon-primary/10'
                            : 'border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10'
                        }`}
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>

                {/* Decoration */}
                <div className={`absolute top-0 left-0 w-full h-1 ${
                  isNeon ? 'bg-gradient-to-r from-neon-primary to-neon-secondary' : 'bg-gradient-cyber'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Want to see more of my work?
          </p>
          <Button
            className="bg-gradient-cyber hover:scale-105 transform transition-all duration-300 text-black font-semibold px-8 py-3"
            onClick={() => window.open('https://github.com/Abhishek-s-kumar', '_blank')}
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;