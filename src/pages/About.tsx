
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Briefcase, Award, Users, GraduationCap, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const handleContactClick = () => {
    window.open("https://wa.me/08113662152", "_blank");
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-muted/50 dark:bg-gray-900/30 py-20 md:py-28 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            We're <span className="text-[#5A78FF]">BandDigitals</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            An award-winning creative agency helping brands stand out in the digital
            landscape through strategic design and innovative storytelling.
          </p>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" 
                  alt="Team collaborating" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#5A78FF]">150+</p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#5A78FF]">98%</p>
                    <p className="text-sm text-muted-foreground">Client Retention</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-[#5A78FF] uppercase mb-2">About Us</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                We're a team of creative storytellers
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                BandDigitals is an award-winning creative agency with a passion for designing
                exceptional digital experiences that drive results and create lasting impressions.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2015, our international team combines strategic thinking with creative
                execution to solve complex marketing challenges for businesses of all sizes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5A78FF]/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-[#5A78FF]" />
                  </div>
                  <span>Strategic Approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5A78FF]/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-[#5A78FF]" />
                  </div>
                  <span>Innovative Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5A78FF]/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-[#5A78FF]" />
                  </div>
                  <span>Results Focused</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5A78FF]/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-[#5A78FF]" />
                  </div>
                  <span>Client Partnership</span>
                </div>
              </div>
              
              <Button 
                className="bg-[#5A78FF] hover:bg-[#4A68EF] text-white rounded-full"
                onClick={handleContactClick}
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-24 bg-muted/50 dark:bg-gray-900/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-[#5A78FF] uppercase mb-2">Our Values</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Principles That Guide Our <span className="text-[#5A78FF]">Work</span>
            </h2>
            <p className="text-muted-foreground">
              At BandDigitals, our core values shape everything we do, from how we collaborate with 
              clients to how we approach every creative challenge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#EEF2FF] flex items-center justify-center mb-6">
                <Briefcase className="text-[#5A78FF] h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence in Craft</h3>
              <p className="text-muted-foreground">
                We're passionate about creating beautiful, functional designs that exceed expectations. 
                Our commitment to quality means we never settle for "good enough."
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#EEF2FF] flex items-center justify-center mb-6">
                <Award className="text-[#5A78FF] h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Results-Driven Approach</h3>
              <p className="text-muted-foreground">
                Design should be beautiful, but also strategic. We focus on creating work that drives real business 
                results and helps our clients achieve their goals.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#EEF2FF] flex items-center justify-center mb-6">
                <Users className="text-[#5A78FF] h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Collaborative Spirit</h3>
              <p className="text-muted-foreground">
                We believe the best work happens when clients and creators work together as partners. 
                We listen carefully, communicate clearly, and value your input throughout the process.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#EEF2FF] flex items-center justify-center mb-6">
                <GraduationCap className="text-[#5A78FF] h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground">
                The digital landscape is always evolving, and so are we. We invest in ongoing education 
                and stay ahead of industry trends to bring fresh ideas to every project.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Reach out to discuss how we can help bring your vision to life.
          </p>
          <Button 
            className="rounded-full bg-[#5A78FF] hover:bg-[#4A68EF] text-white"
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
