
import React from 'react';
import { ArrowRight, Globe, Palette, Bookmark, Code, BarChart, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

const services: Service[] = [
  {
    title: 'Web Design',
    description: 'Beautiful, responsive websites that engage visitors and drive conversions',
    icon: <Globe className="h-6 w-6" />,
    color: 'text-blue-500',
    gradientFrom: 'from-blue-500/20',
    gradientTo: 'to-indigo-500/20',
  },
  {
    title: 'Branding',
    description: 'Strategic brand development, logo design and visual identity systems',
    icon: <Palette className="h-6 w-6" />,
    color: 'text-purple-500',
    gradientFrom: 'from-purple-500/20',
    gradientTo: 'to-pink-500/20',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design creating intuitive, delightful digital experiences',
    icon: <Bookmark className="h-6 w-6" />,
    color: 'text-teal-500',
    gradientFrom: 'from-teal-500/20',
    gradientTo: 'to-emerald-500/20',
  },
  {
    title: 'Web Development',
    description: 'Custom web applications with powerful features and seamless functionality',
    icon: <Code className="h-6 w-6" />,
    color: 'text-amber-500',
    gradientFrom: 'from-amber-500/20',
    gradientTo: 'to-orange-500/20',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve visibility and drive organic traffic with data-driven SEO strategies',
    icon: <BarChart className="h-6 w-6" />,
    color: 'text-green-500',
    gradientFrom: 'from-green-500/20',
    gradientTo: 'to-lime-500/20',
  },
  {
    title: 'Email Marketing',
    description: 'Engage your audience with targeted email campaigns that convert',
    icon: <Mail className="h-6 w-6" />,
    color: 'text-red-500',
    gradientFrom: 'from-red-500/20',
    gradientTo: 'to-rose-500/20',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-brand-lavender mb-2">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Expertise That Drives <span className="text-gradient">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive digital solutions tailored to your unique challenges, 
            helping you reach your business goals with creativity and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card border border-border/50 hover:border-brand-lavender/50 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br",
                  service.gradientFrom,
                  service.gradientTo
                )}>
                  <span className={service.color}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="flex items-center font-medium text-sm">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
