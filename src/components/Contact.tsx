import React, { useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Github, Twitter, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: 'Palakkad, Kerala, India',
      color: 'cyber-primary'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'abhishekskumar2002@gmail.com',
      href: 'mailto:abhishekskumar2002@gmail.com',
      color: 'neon-primary'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 6282459678',
      href: 'tel:+916282459678',
      color: 'cyber-primary'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', color: 'cyber-primary' },
    { icon: Github, href: 'https://github.com/Abhishek-s-kumar', color: 'neon-primary' },
    { icon: Twitter, href: '#', color: 'cyber-primary' },
    { icon: Instagram, href: '#', color: 'neon-primary' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyber mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-cyber-primary mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const isNeon = info.color === 'neon-primary';
                  
                  return (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isNeon ? 'bg-neon-primary/20' : 'bg-cyber-primary/20'
                      }`}>
                        <IconComponent 
                          className={isNeon ? 'text-neon-primary' : 'text-cyber-primary'} 
                          size={20} 
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {info.title}
                        </h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className={`${
                              isNeon ? 'text-neon-primary hover:text-neon-secondary' : 'text-cyber-primary hover:text-cyber-secondary'
                            } transition-colors duration-300`}
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-text-secondary">{info.details}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  const isNeon = social.color === 'neon-primary';
                  
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                        isNeon
                          ? 'bg-neon-primary/20 border-neon-primary/30 hover:bg-neon-primary/30 hover:border-neon-primary text-neon-primary'
                          : 'bg-cyber-primary/20 border-cyber-primary/30 hover:bg-cyber-primary/30 hover:border-cyber-primary text-cyber-primary'
                      }`}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-xl overflow-hidden border border-cyber-primary/20 h-64">
              <div className="w-full h-full bg-gradient-to-br from-surface-primary to-surface-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-cyber-primary mx-auto mb-4" size={48} />
                  <p className="text-text-secondary">Palakkad, Kerala, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-xl border border-cyber-primary/20">
            <h3 className="text-2xl font-semibold text-cyber-primary mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-surface-primary border-cyber-primary/30 focus:border-cyber-primary text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-surface-primary border-cyber-primary/30 focus:border-cyber-primary text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-surface-primary border-cyber-primary/30 focus:border-cyber-primary text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-surface-primary border-cyber-primary/30 focus:border-cyber-primary text-white resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-cyber hover:scale-105 transform transition-all duration-300 text-black font-semibold py-3"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;