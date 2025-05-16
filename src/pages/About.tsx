
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Briefcase, Award, Users, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const handleContactClick = () => {
    window.open("https://wa.me/08113662152", "_blank");
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-muted dark:bg-gray-900/30 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-brand-lavender mb-2">ABOUT ME</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              I'm a creative <span className="text-gradient">storyteller</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              BandDigitals is a passion-driven creative agency focused on designing exceptional digital
              experiences that drive results and create lasting impressions.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Me Section */}
      <section className="section">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-item">
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
                onClick={handleContactClick}
              >
                Contact Me Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section bg-muted dark:bg-gray-900/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-brand-lavender mb-2">MY VALUES</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Principles That Guide My <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
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
            className="rounded-full bg-gradient-to-r from-[#4FD1C5] to-[#AC94F4] text-white hover:opacity-90" 
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
