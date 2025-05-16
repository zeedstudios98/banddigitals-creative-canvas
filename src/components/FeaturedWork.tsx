
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  color: string;
  description?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Cosmic Symphony Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop',
    color: 'from-pink-500/30 to-purple-500/30',
    description: 'Created a vibrant and immersive brand identity for an emerging music festival that needed to stand out in a crowded market.'
  },
  {
    id: 2,
    title: 'Eco Harvest E-Commerce Design',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    color: 'from-emerald-500/30 to-teal-500/30',
    description: 'Designed and developed a user-friendly e-commerce platform for an organic food producer looking to expand their direct-to-consumer sales.'
  },
  {
    id: 3,
    title: 'Zenith Mobile App Experience',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop',
    color: 'from-blue-500/30 to-indigo-500/30',
    description: 'Redesigned the user experience for a productivity app to improve user engagement and retention rates.'
  },
  {
    id: 4,
    title: 'RareGroove Radio Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=800&auto=format&fit=crop',
    color: 'from-amber-500/30 to-orange-500/30',
    description: 'Completely revamped the website for RareGroove Radio, enhancing the user experience and modernizing the design for this UK-based radio station.'
  },
];

const FeaturedWork: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="section bg-muted dark:bg-background">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 reveal">
          <div>
            <p className="text-sm font-medium text-brand-lavender mb-2 reveal-item">FEATURED WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 reveal-item">Our Latest Projects</h2>
            <p className="text-muted-foreground text-lg max-w-xl reveal-item">
              Explore our award-winning projects showcasing the perfect blend of creativity, 
              strategy and technical excellence.
            </p>
          </div>
          <Link to="/portfolio">
            <Button className="mt-6 lg:mt-0 rounded-full reveal-item animate-pulse-subtle" variant="outline">
              View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Link to={`/portfolio`} key={project.id}>
              <div 
                className="group relative h-[400px] lg:h-[450px] overflow-hidden rounded-xl cursor-pointer reveal reveal-item"
                style={{ transitionDelay: `${project.id * 100}ms` }}
                onMouseEnter={() => setActiveIndex(project.id)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div 
                  className={cn(
                    "absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/80 transition-opacity",
                    activeIndex === project.id ? "opacity-90" : "opacity-70"
                  )}
                />
                <div 
                  className={cn(
                    "absolute inset-0 z-0 bg-gradient-radial opacity-0 transition-opacity duration-500",
                    project.color,
                    activeIndex === project.id && "opacity-100"
                  )}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-20">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3 text-white">
                    {project.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">{project.title}</h3>
                  <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Button 
                      className="rounded-full bg-white text-black hover:bg-white/90"
                      size="sm"
                    >
                      View Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
