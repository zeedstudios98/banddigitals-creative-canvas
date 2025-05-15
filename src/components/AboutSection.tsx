
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const handleLearnMore = () => {
    window.location.href = '/about';
  };

  return (
    <section className="section bg-muted dark:bg-gray-900/30" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
                alt="Creative Workspace"
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-8 -left-8 w-24 h-24 bg-[#AC94F4]/30 rounded-full blur-xl z-0 animate-float"></div>
            <div className="absolute bottom-12 -right-10 w-32 h-32 bg-[#4FD1C5]/30 rounded-full blur-xl z-0 animate-float" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Stats card */}
            <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-card shadow-lg rounded-xl p-5 z-20 max-w-[240px]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-[#AC94F4]">40+</p>
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
          <div>
            <p className="text-sm font-medium text-[#AC94F4] mb-2">ABOUT ME</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate about digital craftsmanship
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Since 2022, I've been combining creativity with technical expertise to deliver exceptional digital solutions for clients across various industries.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              With every project, I bring a commitment to quality, attention to detail, and a deep understanding of what makes digital experiences truly resonate with users.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Strategic Thinking', 
                'Creative Solutions', 
                'Technical Excellence', 
                'Client-Focused Approach'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-[#4FD1C5]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Button 
              className="rounded-full bg-gradient-to-r from-[#4FD1C5] to-[#AC94F4] text-white hover:opacity-90" 
              size="lg"
              onClick={handleLearnMore}
            >
              Learn More About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
