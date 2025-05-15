
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
                alt="BandDigitals Creative Work"
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-8 -left-8 w-24 h-24 bg-brand-lavender/30 rounded-full blur-xl z-0 animate-float"></div>
            <div className="absolute bottom-12 -right-10 w-32 h-32 bg-brand-teal/30 rounded-full blur-xl z-0 animate-float" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Stats card */}
            <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-card shadow-lg rounded-xl p-5 z-20 max-w-[240px]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-brand-lavender">40+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-teal">95%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div>
            <p className="text-sm font-medium text-brand-lavender mb-2">ABOUT ME</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Creative solutions for your digital needs
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Since 2022, I've been providing top-notch digital services as a freelance designer and developer with a passion for creating exceptional digital experiences.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              I combine strategic thinking with creative execution to solve complex challenges for businesses and individuals seeking to establish a strong online presence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Personalized Approach', 
                'Creative Solutions', 
                'Timely Delivery', 
                'Client-Focused Service'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Button 
              className="rounded-full" 
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
