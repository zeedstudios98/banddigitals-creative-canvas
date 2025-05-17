
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Briefcase, Award, Users, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const handleContactClick = () => {
    window.open("https://wa.me/08113662152", "_blank");
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f1f1fc] via-[#f8f8ff] to-[#eef2ff] dark:from-gray-900/90 dark:via-gray-900/70 dark:to-gray-900/80 py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-40 h-40 bg-[#AC94F4]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#5A78FF]/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="inline-block mb-6 animate-float">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg mx-auto">
              <Award className="w-8 h-8 text-[#5A78FF]" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#4A68EF] to-[#AC94F4]">
            We're BandDigitals
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            An award-winning creative agency helping brands stand out in the digital
            landscape through strategic design and innovative storytelling.
          </p>
          
          <Button 
            onClick={handleContactClick}
            className="rounded-full bg-gradient-to-r from-[#5A78FF] to-[#AC94F4] text-white hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-lg"
            size="lg"
          >
            Get to Know Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" 
                  alt="Team collaborating" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute bottom-0 right-0 transform translate-x-1/6 translate-y-1/6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold bg-gradient-to-br from-[#5A78FF] to-[#AC94F4] bg-clip-text text-transparent">150+</p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold bg-gradient-to-br from-[#5A78FF] to-[#AC94F4] bg-clip-text text-transparent">98%</p>
                    <p className="text-sm text-muted-foreground">Client Retention</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-[#EEF2FF] dark:bg-gray-800/50 rounded-full blur"></div>
              <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-[#F5EEFF] dark:bg-gray-800/30 rounded-full blur"></div>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-[#EEF2FF] dark:bg-gray-800/50 rounded-full text-sm font-medium text-[#5A78FF] mb-4">
                  About Us
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  We're a team of creative <span className="text-[#5A78FF]">storytellers</span>
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground">
                BandDigitals is an award-winning creative agency with a passion for designing
                exceptional digital experiences that drive results and create lasting impressions.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Founded in 2015, our international team combines strategic thinking with creative
                execution to solve complex marketing challenges for businesses of all sizes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  "Strategic Approach",
                  "Innovative Design",
                  "Results Focused",
                  "Client Partnership"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-[#EEF2FF] dark:bg-gray-800/50 flex items-center justify-center group-hover:bg-[#5A78FF]/20 transition-colors duration-300">
                      <CheckCircle2 className="h-5 w-5 text-[#5A78FF]" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="rounded-full bg-[#5A78FF] hover:bg-[#4A68EF] text-white hover:shadow-lg transition-all duration-300"
                size="lg"
                onClick={handleContactClick}
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-[#f1f1fc] via-[#f8f8ff] to-[#eef2ff] dark:from-gray-900/90 dark:via-gray-900/70 dark:to-gray-900/80 relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-40 right-20 w-80 h-80 bg-[#AC94F4]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#5A78FF]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-[#EEF2FF] dark:bg-gray-800/50 rounded-full text-sm font-medium text-[#5A78FF] mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Principles That Guide Our <span className="text-[#5A78FF]">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              At BandDigitals, our core values shape everything we do, from how we collaborate with 
              clients to how we approach every creative challenge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Briefcase className="text-[#5A78FF] h-6 w-6" />,
                title: "Excellence in Craft",
                description: "We're passionate about creating beautiful, functional designs that exceed expectations. Our commitment to quality means we never settle for "good enough.""
              },
              {
                icon: <Award className="text-[#5A78FF] h-6 w-6" />,
                title: "Results-Driven Approach",
                description: "Design should be beautiful, but also strategic. We focus on creating work that drives real business results and helps our clients achieve their goals."
              },
              {
                icon: <Users className="text-[#5A78FF] h-6 w-6" />,
                title: "Collaborative Spirit",
                description: "We believe the best work happens when clients and creators work together as partners. We listen carefully, communicate clearly, and value your input throughout the process."
              },
              {
                icon: <GraduationCap className="text-[#5A78FF] h-6 w-6" />,
                title: "Continuous Learning",
                description: "The digital landscape is always evolving, and so are we. We invest in ongoing education and stay ahead of industry trends to bring fresh ideas to every project."
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 rounded-xl bg-[#EEF2FF] dark:bg-gray-800/50 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-[#5A78FF] to-[#AC94F4] p-12 rounded-3xl text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-y-6"></div>
              <div className="absolute top-0 left-1/4 w-20 h-20 bg-white rounded-full opacity-20"></div>
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white rounded-full opacity-10"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Reach out to discuss how we can help bring your vision to life.
              </p>
              <Button 
                className="rounded-full bg-white text-[#5A78FF] hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform"
                size="lg"
                onClick={handleContactClick}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
