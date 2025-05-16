
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { Button } from '@/components/ui/button';
import { Briefcase, Award, Users, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const handleContactClick = () => {
    window.open("https://wa.me/08113662152", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-muted dark:bg-gray-900/30 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">BandDigitals</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              I transform ideas into impactful digital experiences through strategic design 
              and creative innovation that connects with audiences.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main About Section (using existing component) */}
      <AboutSection />
      
      {/* Team Values */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-brand-lavender mb-2">MY VALUES</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Principles That Guide My <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Every project I undertake is shaped by these core values, ensuring exceptional 
              results that meet both creative standards and business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="bg-brand-lavender/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="text-brand-lavender h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence in Craft</h3>
              <p className="text-muted-foreground">
                I'm passionate about creating beautiful, functional designs that exceed expectations. 
                My commitment to quality means I never settle for "good enough."
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="bg-brand-teal/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-brand-teal h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Results-Driven Approach</h3>
              <p className="text-muted-foreground">
                Beyond aesthetics, my work is strategic and purposeful. I focus on creating digital experiences that drive 
                meaningful business outcomes and deliver measurable results.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="bg-brand-peach/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-brand-peach h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Collaborative Spirit</h3>
              <p className="text-muted-foreground">
                I believe the best work happens when I partner closely with my clients. Your vision and feedback 
                are essential to my process, creating truly personalized solutions.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="bg-brand-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="text-brand-gold h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Continuous Innovation</h3>
              <p className="text-muted-foreground">
                The digital landscape evolves rapidly, and so do I. I stay ahead of emerging trends and technologies 
                to bring fresh, forward-thinking approaches to every project.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-brand-navy/10 to-brand-lavender/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something exceptional together that elevates your brand and connects with your audience.
          </p>
          <Button 
            className="rounded-full" 
            size="lg"
            onClick={handleContactClick}
          >
            Get in Touch
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
