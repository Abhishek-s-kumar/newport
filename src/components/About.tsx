import React from 'react';
import { GraduationCap, Award, Code, Shield } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyber mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-cyber-primary mb-6">
                Building Secure Digital Solutions
              </h3>
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                <p>
                  I'm a passionate Computer Science graduate with a specialization in Cybersecurity, 
                  currently pursuing my M.Tech at Cochin University of Science and Technology. 
                  With a strong foundation in software engineering and a focus on security, 
                  I develop innovative solutions to protect digital assets and infrastructure.
                </p>
                <p>
                  My expertise spans from mobile application development to ethical hacking tools 
                  and network security simulations. I thrive on solving complex problems and 
                  staying ahead of emerging cybersecurity threats.
                </p>
              </div>
            </div>

            {/* Skills Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-4 rounded-lg border border-cyber-primary/20">
                <Code className="text-cyber-primary mb-2" size={24} />
                <h4 className="font-semibold text-white mb-1">Development</h4>
                <p className="text-text-muted text-sm">Full-stack applications</p>
              </div>
              <div className="glass p-4 rounded-lg border border-neon-primary/20">
                <Shield className="text-neon-primary mb-2" size={24} />
                <h4 className="font-semibold text-white mb-1">Security</h4>
                <p className="text-text-muted text-sm">Penetration testing</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-cyber-primary glow-cyber">
                <img 
                  src={profileImage} 
                  alt="Abhishek S Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-cyber rounded-full flex items-center justify-center animate-pulse-glow">
                <GraduationCap className="text-black" size={32} />
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-cyber-primary mb-8 text-center">
            Educational Background
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-xl border border-cyber-primary/20 hover:border-cyber-primary/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-black" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    M.Tech in Computer Science & Engineering
                  </h4>
                  <p className="text-cyber-primary font-medium">
                    Cochin University of Science and Technology (CUSAT)
                  </p>
                  <p className="text-text-muted mt-1">2024 - Present | CGPA: 8.79/10</p>
                  <div className="mt-3 inline-flex items-center px-3 py-1 bg-neon-primary/20 text-neon-primary rounded-full text-sm">
                    <Award size={14} className="mr-1" />
                    Specialization: Cyber Security
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-xl border border-cyber-primary/20 hover:border-cyber-primary/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-surface-secondary rounded-lg flex items-center justify-center border border-cyber-primary/30">
                  <GraduationCap className="text-cyber-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    B.Tech in Computer Science & Engineering
                  </h4>
                  <p className="text-cyber-primary font-medium">
                    Ahalia School of Engineering & Technology
                  </p>
                  <p className="text-text-muted mt-1">2020 - 2024 | CGPA: 8.05/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;