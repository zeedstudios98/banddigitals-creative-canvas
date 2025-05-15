
import React from 'react';
import { ArrowRight, Globe, Palette, Bookmark, Code, BarChart, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  slug: string;
}

const services: Service[] = [
  {
    title: 'Web Design',
    description: "Custom websites that capture your brand's essence and engage your target audience",
    icon: <Globe className="h-6 w-6" />,
    color: 'text-[#4FD1C5]',
    gradientFrom: 'from-[#4FD1C5]/20',
    gradientTo: 'to-[#38B2AC]/20',
    slug: 'web-design'
  },
  {
    title: 'Branding',
    description: 'Strategic brand identity design that helps you stand out in a competitive market',
    icon: <Palette className="h-6 w-6" />,
    color: 'text-[#AC94F4]',
    gradientFrom: 'from-[#AC94F4]/20',
    gradientTo: 'to-[#9F7AEA]/20',
    slug: 'branding'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered interfaces that create seamless, intuitive digital experiences',
    icon: <Bookmark className="h-6 w-6" />,
    color: 'text-[#4FD1C5]',
    gradientFrom: 'from-[#4FD1C5]/20',
    gradientTo: 'to-[#38B2AC]/20',
    slug: 'ui-ux-design'
  },
  {
    title: 'Web Development',
    description: 'Robust, responsive websites and applications built with modern technologies',
    icon: <Code className="h-6 w-6" />,
    color: 'text-[#F8CD57]',
    gradientFrom: 'from-[#F8CD57]/20',
    gradientTo: 'to-[#ECC94B]/20',
    slug: 'web-development'
  },
  {
    title: 'SEO Optimization',
    description: 'Data-driven strategies to improve visibility and drive organic traffic to your site',
    icon: <BarChart className="h-6 w-6" />,
    color: 'text-[#4FD1C5]',
    gradientFrom: 'from-[#4FD1C5]/20',
    gradientTo: 'to-[#38B2AC]/20',
    slug: 'seo-optimization'
  },
  {
    title: 'Ghost Writing',
    description: 'Compelling content that tells your story and connects with your audience',
    icon: <Mail className="h-6 w-6" />,
    color: 'text-[#FFB88C]',
    gradientFrom: 'from-[#FFB88C]/20',
    gradientTo: 'to-[#FF9A76]/20',
    slug: 'ghost-writing'
  },
];

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMore = (slug: string) => {
    navigate(`/services#${slug}`);
  };

  return (
    <section className="section" id="services">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <p className="text-sm font-medium text-[#AC94F4] mb-2">MY SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Expertise That Delivers <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4FD1C5] to-[#AC94F4]">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I offer tailored digital solutions designed to help you achieve your business goals and create meaningful connections with your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card border border-border/50 hover:border-[#AC94F4]/50 transition-all duration-300 overflow-hidden reveal reveal-item hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br transform transition-transform duration-300 group-hover:scale-110",
                  service.gradientFrom,
                  service.gradientTo
                )}>
                  <span className={service.color}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <button 
                  onClick={() => handleLearnMore(service.slug)}
                  className="flex items-center font-medium text-sm hover:text-[#AC94F4] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
