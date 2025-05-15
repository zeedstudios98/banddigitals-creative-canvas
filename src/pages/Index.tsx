
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedWork from '@/components/FeaturedWork';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  // Add scroll reveal effects
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    // Add animation to sections as they appear
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal-item');
          elements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('active');
            }, index * 150);
          });
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
      
      sections.forEach((section) => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedWork />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
