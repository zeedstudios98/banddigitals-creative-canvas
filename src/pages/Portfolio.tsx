
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

// Portfolio categories and projects
const categories = ['All', 'Web Design', 'Branding', 'UI/UX', 'Development', 'Ghost Writing'];

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  color: string;
  client: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Cosmic Symphony Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop',
    color: 'from-pink-500/30 to-purple-500/30',
    client: 'Cosmic Music Festival',
    year: '2023'
  },
  {
    id: 2,
    title: 'Eco Harvest E-Commerce Design',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    color: 'from-emerald-500/30 to-teal-500/30',
    client: 'Eco Harvest Foods',
    year: '2023'
  },
  {
    id: 3,
    title: 'Zenith Mobile App Experience',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop',
    color: 'from-blue-500/30 to-indigo-500/30',
    client: 'Zenith Technologies',
    year: '2022'
  },
  {
    id: 4,
    title: 'Momentum Fitness Platform',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=800&auto=format&fit=crop',
    color: 'from-amber-500/30 to-orange-500/30',
    client: 'Momentum Fitness',
    year: '2022'
  },
  {
    id: 5,
    title: 'Artisan Coffee Rebrand',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
    color: 'from-stone-500/30 to-neutral-500/30',
    client: 'Artisan Coffee Co.',
    year: '2023'
  },
  {
    id: 6,
    title: 'Flux Finance Dashboard',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    color: 'from-violet-500/30 to-fuchsia-500/30',
    client: 'Flux Finance',
    year: '2022'
  },
  {
    id: 7,
    title: 'Wellness Blog Series',
    category: 'Ghost Writing',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop',
    color: 'from-green-500/30 to-emerald-500/30',
    client: 'Harmony Wellness',
    year: '2023'
  },
  {
    id: 8,
    title: 'Tech Startup Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop',
    color: 'from-slate-500/30 to-gray-500/30',
    client: 'NexGen Solutions',
    year: '2022'
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-muted dark:bg-gray-900/30 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore our collection of creative projects that showcase our expertise in 
              design, development, and digital storytelling.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Categories */}
      <section className="py-10 bg-background">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-brand-lavender text-white'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group relative h-[350px] overflow-hidden rounded-xl cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div 
                  className={`absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/80 transition-opacity ${
                    hoveredProject === project.id ? "opacity-90" : "opacity-70"
                  }`}
                />
                <div 
                  className={`absolute inset-0 z-0 bg-gradient-radial opacity-0 transition-opacity duration-500 ${
                    project.color
                  } ${hoveredProject === project.id && "opacity-100"}`}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3 text-white">
                    {project.category}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{project.client} · {project.year}</p>
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
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-brand-navy/10 to-brand-lavender/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into impactful digital experiences.
          </p>
          <Button className="rounded-full" size="lg">
            Start a Project
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
