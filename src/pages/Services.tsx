
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Palette, Code, BarChart, Mail, ArrowRight, CheckCircle2, Bookmark } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services: React.FC = () => {
  const handleContactClick = (planTitle: string = "") => {
    const message = planTitle ? 
      encodeURIComponent(`Hi, I'm interested in your ${planTitle} plan. Can we discuss the details?`) : 
      encodeURIComponent(`Hi, I'd like to learn more about your services.`);
    window.open(`https://wa.me/08113662152?text=${message}`, "_blank");
  };

  const services = [
    {
      title: "Web Design",
      description: "Beautiful, responsive websites that engage visitors and drive conversions",
      icon: <Globe className="h-6 w-6" />,
      color: "text-[#5A78FF]",
      gradientFrom: "from-[#5A78FF]/20",
      gradientTo: "to-[#4A68EF]/20",
      slug: "web-design"
    },
    {
      title: "Branding",
      description: "Strategic brand identity design that helps you stand out in a competitive market",
      icon: <Palette className="h-6 w-6" />,
      color: "text-[#AC94F4]",
      gradientFrom: "from-[#AC94F4]/20",
      gradientTo: "to-[#9C84E4]/20",
      slug: "branding"
    },
    {
      title: "UI/UX Design",
      description: "User-centered interfaces that create seamless, intuitive digital experiences",
      icon: <Bookmark className="h-6 w-6" />,
      color: "text-[#4FD1C5]",
      gradientFrom: "from-[#4FD1C5]/20",
      gradientTo: "to-[#3FC1B5]/20",
      slug: "ui-ux-design"
    },
    {
      title: "Web Development",
      description: "Custom web applications with powerful functionality and seamless interactivity",
      icon: <Code className="h-6 w-6" />,
      color: "text-[#F8B84E]",
      gradientFrom: "from-[#F8B84E]/20",
      gradientTo: "to-[#E8A83E]/20",
      slug: "web-development"
    },
    {
      title: "SEO Optimization",
      description: "Enhance visibility and drive organic traffic with effective SEO strategies",
      icon: <BarChart className="h-6 w-6" />,
      color: "text-[#4ADE80]",
      gradientFrom: "from-[#4ADE80]/20",
      gradientTo: "to-[#3ACE70]/20",
      slug: "seo-optimization"
    },
    {
      title: "Email Marketing",
      description: "Engage your audience with targeted email campaigns that drive results",
      icon: <Mail className="h-6 w-6" />,
      color: "text-[#FF719A]",
      gradientFrom: "from-[#FF719A]/20",
      gradientTo: "to-[#EF618A]/20",
      slug: "email-marketing"
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Strategy",
      description: "We start by understanding your business, goals, brand essence, and competitive landscape. This forms the foundation for a strategic approach tailored to your unique needs.",
    },
    {
      step: 2,
      title: "Creative Exploration",
      description: "Our creative team develops concepts and design directions based on the strategy. We present options, gather feedback, and refine our approach to align with your vision.",
    },
    {
      step: 3,
      title: "Design & Development",
      description: "With an approved direction, we fully develop the creative assets, digital experiences, and technical solutions needed to bring your project to life.",
    },
    {
      step: 4,
      title: "Launch & Optimize",
      description: "We deploy your project with thorough testing and quality assurance. After launch, we monitor performance, gather data, and make optimizations for continued success.",
    },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f1f1fc] via-[#f8f8ff] to-[#eef2ff] dark:from-gray-900/90 dark:via-gray-900/70 dark:to-gray-900/80 py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-60 h-60 bg-[#AC94F4]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#5A78FF]/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="inline-block mb-6 animate-float">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg mx-auto">
              <Palette className="w-8 h-8 text-[#5A78FF]" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#4A68EF] to-[#AC94F4]">
            Our Services
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            We offer comprehensive creative solutions to help your business stand out and
            connect with your audience in meaningful ways.
          </p>
          
          <Button 
            onClick={() => handleContactClick()}
            className="rounded-full bg-gradient-to-r from-[#5A78FF] to-[#AC94F4] text-white hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-lg"
            size="lg"
          >
            Explore Our Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-[#EEF2FF] dark:bg-gray-800/50 rounded-full text-sm font-medium text-[#5A78FF] mb-4">
              Expertise That Delivers
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Solutions That Drive <span className="text-[#5A78FF]">Results</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer comprehensive digital solutions tailored to your unique challenges, helping you
              reach your business goals with creativity and precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#5A78FF]/30 dark:hover:border-[#5A78FF]/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 dark:group-hover:opacity-10 w-full h-full"></div>
                
                <div className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br transform transition-transform duration-300 group-hover:scale-110",
                  service.gradientFrom,
                  service.gradientTo
                )}>
                  <span className={service.color}>
                    {service.icon}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="flex items-center font-medium text-sm text-[#5A78FF] group-hover:translate-x-1 transition-transform duration-300 cursor-pointer" onClick={() => handleContactClick(service.title)}>
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-[#f1f1fc] via-[#f8f8ff] to-[#eef2ff] dark:from-gray-900/90 dark:via-gray-900/70 dark:to-gray-900/80 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-40 right-20 w-60 h-60 bg-[#AC94F4]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-60 h-60 bg-[#5A78FF]/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-[#EEF2FF] dark:bg-gray-800/50 rounded-full text-sm font-medium text-[#5A78FF] mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              How We <span className="text-[#5A78FF]">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our structured approach ensures that every project is delivered on time, on budget, and
              exceeds expectations.
            </p>
          </div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                <div className="md:w-1/5 flex justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#5A78FF]/20 to-[#AC94F4]/20 flex items-center justify-center text-2xl font-bold text-[#5A78FF] transform transition-transform hover:scale-110 duration-300 shadow-lg">
                    {step.step}
                  </div>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-[#EEF2FF] dark:bg-gray-800/50 rounded-full text-sm font-medium text-[#5A78FF] mb-4">
              Simple, Transparent
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-[#5A78FF]">Pricing</span> Plans
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Choose the plan that fits your business needs, or contact us for a custom solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Basic Plan */}
            <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-xl transition-all duration-300 hover:border-[#5A78FF]/30 dark:hover:border-[#5A78FF]/30 relative group">
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">Basic</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-bold">$500</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Perfect for small businesses just getting started
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Professional website design',
                    'Mobile responsive layout',
                    'Basic SEO setup',
                    'Contact form integration',
                    'Social media links'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5A78FF] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full rounded-xl border-[#5A78FF] text-[#5A78FF] hover:bg-[#5A78FF] hover:text-white transition-all duration-300 group-hover:shadow-md"
                  onClick={() => handleContactClick("Basic")}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </Card>
            
            {/* Professional Plan */}
            <Card className="overflow-hidden rounded-2xl shadow-lg relative group border-2 border-[#5A78FF] transform hover:scale-105 transition-all duration-300 z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#5A78FF] to-[#AC94F4] text-white px-4 py-1 rounded-full text-xs font-medium">
                Most Popular
              </div>
              <div className="p-8 pt-10">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">Professional</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-bold">$1,500</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Ideal for growing businesses needing a complete solution
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Everything in Basic',
                    'Custom branding elements',
                    'Advanced SEO optimization',
                    'Content creation (5 pages)',
                    'Email marketing setup',
                    'Social media integration',
                    '1 month of support'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5A78FF] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full rounded-xl bg-gradient-to-r from-[#5A78FF] to-[#AC94F4] text-white hover:opacity-90 transition-all duration-300 shadow-md"
                  onClick={() => handleContactClick("Professional")}
                >
                  Choose Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
            
            {/* Enterprise Plan */}
            <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-xl transition-all duration-300 hover:border-[#5A78FF]/30 dark:hover:border-[#5A78FF]/30 relative group">
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">Enterprise</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    For established businesses with complex requirements
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Everything in Professional',
                    'E-commerce functionality',
                    'Custom web applications',
                    'Comprehensive SEO strategy',
                    'Content marketing plan',
                    'Dedicated account manager',
                    '3 months of priority support'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#5A78FF] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full rounded-xl border-[#5A78FF] text-[#5A78FF] hover:bg-[#5A78FF] hover:text-white transition-all duration-300 group-hover:shadow-md"
                  onClick={() => handleContactClick("Enterprise")}
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </Card>
          </div>
          
          <div className="bg-gradient-to-br from-[#f1f1fc] to-[#eef2ff] dark:from-gray-800/30 dark:to-gray-800/10 p-10 rounded-3xl text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Need a custom solution for your specific requirements?
            </p>
            <Button 
              className="rounded-full bg-gradient-to-r from-[#5A78FF] to-[#AC94F4] text-white hover:opacity-90 transition-all duration-300 shadow-md"
              onClick={() => handleContactClick("Custom")}
            >
              Contact for Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
