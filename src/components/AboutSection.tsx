
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const handleLearnMore = () => {
    window.open("https://wa.me/08113662152", "_blank");
  };

  return (
    <section className="section bg-muted dark:bg-gray-900/30" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="relative reveal">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" alt="Creative Workspace" className="w-full h-auto" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-8 -left-8 w-24 h-24 bg-[#AC94F4]/30 rounded-full blur-xl z-0 animate-float"></div>
            <div className="absolute bottom-12 -right-10 w-32 h-32 bg-[#4FD1C5]/30 rounded-full blur-xl z-0 animate-float" style={{
              animationDelay: '1.5s'
            }}></div>
            
            {/* Stats card */}
            <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-card shadow-lg rounded-xl p-5 z-20 max-w-[240px] hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-[#AC94F4]">10+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#4FD1C5]">95%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="reveal">
            <p className="text-sm font-medium text-[#AC94F4] mb-2 reveal-item">ABOUT ME</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-item">
              Passionate about digital craftsmanship
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 reveal-item">
              Since 2022, I've been transforming brands through creative digital solutions, helping businesses connect with their audiences in meaningful and impactful ways.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 reveal-item">
              Every project I undertake is driven by a commitment to excellence, strategic thinking, and a deep understanding of what makes digital experiences truly resonate with users.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {['Strategic Thinking', 'Creative Solutions', 'Technical Excellence', 'Client-Focused Approach'].map((item, index) => <div key={index} className="flex items-center space-x-2 reveal-item" style={{
              transitionDelay: `${index * 100}ms`
            }}>
                  <CheckCircle2 className="h-5 w-5 text-[#4FD1C5]" />
                  <span>{item}</span>
                </div>)}
            </div>
            
            <Button 
              className="rounded-full bg-gradient-to-r from-[#4FD1C5] to-[#AC94F4] text-white hover:opacity-90 transform transition-transform hover:scale-105 reveal-item" 
              size="lg" 
              onClick={handleLearnMore}
            >
              Contact Me Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
