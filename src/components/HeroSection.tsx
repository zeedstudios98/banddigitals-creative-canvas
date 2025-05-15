
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Initialize text animation
    if (headingRef.current) {
      const text = headingRef.current.textContent || '';
      headingRef.current.innerHTML = '';
      
      // Create span for each character
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
        
        // Add after a delay
        headingRef.current?.appendChild(span);
        
        // Trigger animation
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
        }, 100);
      });
    }
  }, []);

  const handleStartProject = () => {
    window.open('https://wa.me/2348113662152?text=Hi, I would like to start a project with you!', '_blank');
  };

  const handleViewWork = () => {
    window.location.href = '/portfolio';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      <div className="absolute top-[20%] right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-brand-lavender/30 to-brand-teal/30 blur-3xl animate-float z-0"></div>
      <div className="absolute bottom-[20%] left-[10%] w-48 h-48 rounded-full bg-gradient-to-tr from-brand-peach/30 to-brand-gold/30 blur-3xl animate-float z-0" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-brand-lavender/10 dark:bg-brand-lavender/20 text-brand-navy dark:text-brand-lavender text-sm font-medium animate-fade-in">
              Freelance Designer & Developer since 2022
            </span>
          </div>
          
          <h1 
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Turning Your Digital Ideas Into Reality
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            I craft websites and digital experiences that connect with your audience and elevate your online presence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Button 
              className="bg-gradient-to-r from-brand-teal to-brand-lavender hover:opacity-90 text-white text-lg py-6 px-8 rounded-full"
              onClick={handleStartProject}
            >
              Start a Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 text-lg py-6 px-8 rounded-full"
              onClick={handleViewWork}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16 md:h-24"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" 
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
