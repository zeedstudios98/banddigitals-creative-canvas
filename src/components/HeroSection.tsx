import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    // Initialize text animation
    if (headingRef.current) {
      const text = "Crafting Digital Experiences That Inspire";
      headingRef.current.innerHTML = '';

      // Create span for each character with faster animation
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = '1'; // Start visible
        span.style.transform = 'translateY(0)'; // Start in final position
        span.style.display = 'inline-block'; // Ensure proper display

        // Add character immediately
        headingRef.current?.appendChild(span);
      });
    }

    // Add animation classes to elements with reveal class
    const animateElements = () => {
      const elements = document.querySelectorAll('.reveal-item');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('active');
        }, index * 100); // Speed up animations
      });
    };

    // Initialize animations immediately
    animateElements();
  }, []);
  const handleStartProject = () => {
    window.open('https://wa.me/2348113662152?text=Hi, I would like to start a project with you!', '_blank');
  };
  const handleViewWork = () => {
    window.location.href = '/portfolio';
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      <div className="absolute top-[20%] right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-[#AC94F4]/30 to-[#4FD1C5]/30 blur-3xl animate-float z-0"></div>
      <div className="absolute bottom-[20%] left-[10%] w-48 h-48 rounded-full bg-gradient-to-tr from-[#FFB88C]/30 to-[#F8CD57]/30 blur-3xl animate-float z-0" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="container-custom relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6 reveal-item opacity-0 transform translate-y-10">
            <span className="inline-block px-4 py-2 rounded-full bg-[#AC94F4]/10 dark:bg-[#AC94F4]/20 text-[#0A2342] dark:text-[#AC94F4] text-sm font-medium">Digital Designer & Developer </span>
          </div>
          
          <h1 ref={headingRef} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Crafting Digital Experiences That Inspire
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 reveal-item opacity-0 transform translate-y-10">
            I transform your ideas into captivating digital experiences that connect with your audience and elevate your brand.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 reveal-item opacity-0 transform translate-y-10">
            <Button className="bg-gradient-to-r from-[#4FD1C5] to-[#AC94F4] hover:opacity-90 text-white text-lg py-6 px-8 rounded-full animate-pulse-subtle" onClick={handleStartProject}>
              Start a Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-2 text-lg py-6 px-8 rounded-full hover:scale-105 transition-transform duration-300" onClick={handleViewWork}>
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" className="fill-background"></path>
        </svg>
      </div>
    </section>;
};
export default HeroSection;