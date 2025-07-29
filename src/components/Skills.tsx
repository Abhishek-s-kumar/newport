import React from 'react';
import { Code, Shield, Database, Wrench, Palette, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'cyber-primary',
      skills: ['Java', 'Python', 'C++', 'C', 'Kotlin', 'HTML/CSS']
    },
    {
      title: 'Cybersecurity Tools',
      icon: Shield,
      color: 'neon-primary',
      skills: ['Burp Suite', 'OWASP ZAP', 'Wireshark', 'Metasploit', 'nmap', 'Hashcat', 'Aircrack-ng']
    },
    {
      title: 'DevOps & Deployment',
      icon: Server,
      color: 'cyber-primary',
      skills: ['Docker', 'Jenkins', 'GitHub', 'Git', 'CI/CD']
    },
    {
      title: 'Database & Systems',
      icon: Database,
      color: 'neon-primary',
      skills: ['SQL', 'Apache HBase']
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'cyber-primary',
      skills: ['Figma', 'Adobe XD', 'Android Studio']
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      color: 'neon-primary',
      skills: ['VS Code', 'Android Studio', 'PyCharm', 'IntelliJ IDEA']
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyber mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isNeon = category.color === 'neon-primary';
            
            return (
              <div
                key={category.title}
                className={`glass p-8 rounded-xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isNeon 
                    ? 'border-neon-primary/20 hover:border-neon-primary/40 hover:glow-neon' 
                    : 'border-cyber-primary/20 hover:border-cyber-primary/40 hover:glow-cyber'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    isNeon ? 'bg-neon-primary/20' : 'bg-cyber-primary/20'
                  }`}>
                    <IconComponent 
                      className={isNeon ? 'text-neon-primary' : 'text-cyber-primary'} 
                      size={24} 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 ${
                        isNeon
                          ? 'bg-neon-primary/20 text-neon-primary border border-neon-primary/30'
                          : 'bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/30'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decoration */}
                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-xl ${
                  isNeon ? 'bg-gradient-to-r from-neon-primary to-neon-secondary' : 'bg-gradient-cyber'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-xl border border-cyber-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-cyber-primary mb-4">
              Core Competencies
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Specialized in developing secure applications with a focus on cybersecurity best practices. 
              Experienced in penetration testing, network security analysis, and building robust defense systems. 
              Proficient in both offensive and defensive security strategies, with hands-on experience in 
              vulnerability assessment and incident response.
            </p>
            <div className="flex justify-center space-x-8 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-primary">10+</div>
                <div className="text-text-muted text-sm">Security Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-primary">6+</div>
                <div className="text-text-muted text-sm">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-primary">5+</div>
                <div className="text-text-muted text-sm">Frameworks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;