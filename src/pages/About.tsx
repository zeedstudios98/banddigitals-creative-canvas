
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { Button } from '@/components/ui/button';
import { Briefcase, Award, Users, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-muted dark:bg-gray-900/30 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We're <span className="text-gradient">BandDigitals</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              An award-winning creative agency helping brands stand out in the digital landscape 
              through strategic design and innovative storytelling.
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
            <p className="text-sm font-medium text-brand-lavender mb-2">OUR VALUES</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Principles That Guide Our <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              At BandDigitals, our core values shape everything we do, from how we collaborate 
              with clients to how we approach every creative challenge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="bg-brand-lavender/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="text-brand-lavender h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence in Craft</h3>
              <p className="text-muted-foreground">
                We're passionate about creating beautiful, functional designs that exceed expectations. 
                Our commitment to quality means we never settle for "good enough."
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="bg-brand-teal/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-brand-teal h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Results-Driven Approach</h3>
              <p className="text-muted-foreground">
                Design should be beautiful, but also strategic. We focus on creating work that drives 
                real business results and helps our clients achieve their goals.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="bg-brand-peach/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-brand-peach h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Collaborative Spirit</h3>
              <p className="text-muted-foreground">
                We believe the best work happens when clients and creators work together as partners. 
                We listen carefully, communicate clearly, and value your input throughout the process.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="bg-brand-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="text-brand-gold h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground">
                The digital landscape is always evolving, and so are we. We invest in ongoing education 
                and stay ahead of industry trends to bring fresh ideas to every project.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-brand-navy/10 to-brand-lavender/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Reach out to discuss how we can help bring your vision to life.
          </p>
          <Button className="rounded-full" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
