
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Globe, Palette, Code, BarChart, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const handleContactClick = (planTitle: string) => {
    // Encode the message with the plan title
    const message = encodeURIComponent(`Hi, I'm interested in your ${planTitle} plan. Can we discuss the details?`);
    window.open(`https://wa.me/08113662152?text=${message}`, "_blank");
  };

  const services = [
    {
      title: "Web Design",
      description: "Beautiful, responsive websites that engage visitors and drive conversions",
      icon: <Globe className="h-6 w-6" />,
      color: "text-[#5A78FF]",
      bgColor: "bg-[#EEF2FF]",
    },
    {
      title: "Branding",
      description: "Strategic brand development, logo design, and visual identity systems",
      icon: <Palette className="h-6 w-6" />,
      color: "text-[#AA78FF]",
      bgColor: "bg-[#F5EEFF]",
    },
    {
      title: "UI/UX Design",
      description: "User-centered designs creating intuitive, delightful digital experiences",
      icon: <ArrowRight className="h-6 w-6" />,
      color: "text-[#4FD1C5]",
      bgColor: "bg-[#E6F7F5]",
    },
    {
      title: "Web Development",
      description: "Custom web applications with powerful functionality and seamless interactivity",
      icon: <Code className="h-6 w-6" />,
      color: "text-[#F8B84E]",
      bgColor: "bg-[#FEF5E7]",
    },
    {
      title: "SEO Optimization",
      description: "Enhance visibility and drive organic traffic with effective SEO strategies",
      icon: <BarChart className="h-6 w-6" />,
      color: "text-[#4ADE80]",
      bgColor: "bg-[#E6F9EC]",
    },
    {
      title: "Email Marketing",
      description: "Engage your audience with targeted email campaigns that drive results",
      icon: <Mail className="h-6 w-6" />,
      color: "text-[#FF719A]",
      bgColor: "bg-[#FFEEF2]",
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
      <section className="bg-muted/50 dark:bg-gray-900/30 py-20 md:pt-24 md:pb-16 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-[#5A78FF]">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive creative solutions to help your business stand out and
            connect with your audience.
          </p>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-[#5A78FF] uppercase mb-2">Expertise That Drives</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-[#5A78FF]">Results</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer comprehensive digital solutions tailored to your unique challenges, helping you
              reach your business goals with creativity and precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
                <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-6`}>
                  <span className={service.color}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <a href="#" className="flex items-center font-medium text-[#5A78FF] hover:text-[#4A68EF]">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-muted/50 dark:bg-gray-900/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-[#5A78FF] uppercase mb-2">How We</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-[#5A78FF]">Work</span>
            </h2>
            <p className="text-muted-foreground">
              Our structured approach ensures that every project is delivered on time, on budget, and
              exceeds expectations.
            </p>
          </div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
                <div className="md:w-1/5 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#5A78FF]/10 flex items-center justify-center text-xl font-bold text-[#5A78FF]">
                    {step.step}
                  </div>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
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
            <p className="text-sm font-medium text-[#5A78FF] uppercase mb-2">Simple, Transparent</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-[#5A78FF]">Pricing</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Choose the plan that fits your business needs, or contact us for a custom solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-1">Basic</h3>
                <p className="text-3xl font-bold mb-4">$500</p>
                <p className="text-muted-foreground text-sm mb-6">
                  Perfect for small businesses just getting started
                </p>
                
                <div className="space-y-3 mb-8">
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
                  className="w-full"
                  onClick={() => handleContactClick("Basic")}
                >
                  Get Started
                </Button>
              </div>
            </Card>
            
            {/* Professional Plan */}
            <Card className="overflow-hidden border-2 border-[#5A78FF] rounded-lg shadow-lg relative">
              <div className="absolute top-0 right-0 bg-[#5A78FF] text-white px-3 py-1 text-xs font-medium">
                Popular
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-1">Professional</h3>
                <p className="text-3xl font-bold mb-4">$1,500</p>
                <p className="text-muted-foreground text-sm mb-6">
                  Ideal for growing businesses needing a complete solution
                </p>
                
                <div className="space-y-3 mb-8">
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
                  className="w-full bg-[#5A78FF] hover:bg-[#4A68EF]"
                  onClick={() => handleContactClick("Professional")}
                >
                  Choose Plan
                </Button>
              </div>
            </Card>
            
            {/* Enterprise Plan */}
            <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-1">Enterprise</h3>
                <p className="text-3xl font-bold mb-4">Custom</p>
                <p className="text-muted-foreground text-sm mb-6">
                  For established businesses with complex requirements
                </p>
                
                <div className="space-y-3 mb-8">
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
                  className="w-full"
                  onClick={() => handleContactClick("Enterprise")}
                >
                  Contact Us
                </Button>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Need a custom solution for your specific requirements?
            </p>
            <Button 
              variant="outline" 
              className="rounded-full border-[#5A78FF] text-[#5A78FF] hover:bg-[#5A78FF] hover:text-white"
              onClick={() => handleContactClick("Custom")}
            >
              Contact for Custom Quote
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
