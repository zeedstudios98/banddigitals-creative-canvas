
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
  description?: string;
  challenge?: string;
  solution?: string;
  results?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Cosmic Symphony Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop',
    color: 'from-pink-500/30 to-purple-500/30',
    client: 'Cosmic Music Festival',
    year: '2023',
    description: 'Created a vibrant and immersive brand identity for an emerging music festival that needed to stand out in a crowded market.',
    challenge: 'The festival needed a distinct visual identity that would appeal to a diverse audience while conveying the unique cosmic theme of the event.',
    solution: 'Developed a comprehensive branding package including logo design, color palette, typography, and visual elements that captured the ethereal and energetic essence of the festival.',
    results: 'The new brand identity helped ticket sales increase by 45% compared to the previous year, with significantly improved social media engagement and brand recognition.'
  },
  {
    id: 2,
    title: 'Eco Harvest E-Commerce Design',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    color: 'from-emerald-500/30 to-teal-500/30',
    client: 'Eco Harvest Foods',
    year: '2023',
    description: 'Designed and developed a user-friendly e-commerce platform for an organic food producer looking to expand their direct-to-consumer sales.',
    challenge: 'The client needed a website that would showcase their sustainable practices while providing an intuitive shopping experience for customers new to online grocery shopping.',
    solution: 'Created a clean, nature-inspired design with intuitive navigation, educational content about sustainable practices, and a streamlined checkout process optimized for conversion.',
    results: 'Within three months of launch, online sales increased by 78%, and the average order value improved by 23% compared to their previous website.'
  },
  {
    id: 3,
    title: 'Zenith Mobile App Experience',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop',
    color: 'from-blue-500/30 to-indigo-500/30',
    client: 'Zenith Technologies',
    year: '2022',
    description: 'Redesigned the user experience for a productivity app to improve user engagement and retention rates.',
    challenge: 'The existing app had powerful features but suffered from poor user adoption due to a complicated interface and confusing user flows.',
    solution: 'Conducted user research to identify pain points and redesigned the interface with a focus on simplicity, intuitive navigation, and visual hierarchy that highlighted key features.',
    results: 'The redesigned app saw a 60% increase in daily active users and a 40% reduction in support tickets related to usability issues.'
  },
  {
    id: 4,
    title: 'Momentum Fitness Platform',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=800&auto=format&fit=crop',
    color: 'from-amber-500/30 to-orange-500/30',
    client: 'Momentum Fitness',
    year: '2022',
    description: 'Developed a comprehensive web platform for a fitness studio that needed to expand their digital presence and offer online classes.',
    challenge: 'The client needed to quickly pivot to online services during the pandemic while maintaining their brand identity and quality of instruction.',
    solution: 'Built a responsive web platform with integrated video streaming, booking system, and membership management that seamlessly connected with their existing brand.',
    results: 'The platform allowed the business to retain 85% of their members during lockdown periods and expand their reach to new clients beyond their local area.'
  },
  {
    id: 5,
    title: 'Artisan Coffee Rebrand',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
    color: 'from-stone-500/30 to-neutral-500/30',
    client: 'Artisan Coffee Co.',
    year: '2023',
    description: 'Executed a complete brand refresh for an established coffee company looking to appeal to a younger demographic while retaining their artisanal roots.',
    challenge: 'The brand needed to modernize without alienating their loyal customer base or compromising their reputation for quality and craftsmanship.',
    solution: "Developed an updated visual identity that honored the company's heritage while introducing contemporary elements in logo design, packaging, and store aesthetics.",
    results: 'Following the rebrand, the company saw a 35% increase in sales among the 25-34 demographic while maintaining strong loyalty from existing customers.'
  },
  {
    id: 6,
    title: 'Flux Finance Dashboard',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    color: 'from-violet-500/30 to-fuchsia-500/30',
    client: 'Flux Finance',
    year: '2022',
    description: 'Designed an intuitive financial dashboard that simplifies complex data for personal finance management.',
    challenge: 'Users were overwhelmed by the amount of financial data and struggled to make informed decisions based on the previous dashboard design.',
    solution: 'Created a user-centered dashboard with clear data visualization, customizable views, and actionable insights that made financial information more accessible.',
    results: 'User engagement increased by 42% with an average session time increase from 4 minutes to 9 minutes, indicating deeper interaction with the platform.'
  },
  {
    id: 7,
    title: 'Wellness Blog Series',
    category: 'Ghost Writing',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop',
    color: 'from-green-500/30 to-emerald-500/30',
    client: 'Harmony Wellness',
    year: '2023',
    description: 'Developed and executed a comprehensive content strategy including ghost-written articles that positioned the client as a thought leader in the wellness industry.',
    challenge: 'The client had valuable expertise but lacked the time and writing skills to create engaging content that would attract and retain readers.',
    solution: "Created a content calendar and produced in-depth, researched articles in the client's voice that addressed common questions and concerns in their target audience.",
    results: 'The blog saw a 125% increase in organic traffic within six months, with average time on page increasing by 3 minutes and newsletter subscriptions growing by 78%.'
  },
  {
    id: 8,
    title: 'Tech Startup Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop',
    color: 'from-slate-500/30 to-gray-500/30',
    client: 'NexGen Solutions',
    year: '2022',
    description: 'Designed and developed a cutting-edge website for a technology startup looking to secure Series A funding and attract top talent.',
    challenge: 'The client needed a website that would effectively communicate their complex technical offering to both investors and potential customers.',
    solution: 'Created a dynamic website with interactive elements that simplified complex concepts through animations, clear information architecture, and compelling storytelling.',
    results: 'The website played a key role in securing $2.5 million in funding and helped attract skilled developers to the team, reducing recruitment costs by 30%.'
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleCaseStudyClick = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {selectedProject ? (
        // Case Study View
        <div>
          {/* Case Study Hero */}
          <section className="bg-muted dark:bg-gray-900/30 py-20">
            <div className="container-custom">
              <Button
                variant="outline"
                className="mb-8"
                onClick={handleBackToProjects}
              >
                ← Back to Projects
              </Button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-sm font-medium text-brand-lavender mb-2">{selectedProject.category}</p>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedProject.title}</h1>
                  <p className="text-xl text-muted-foreground mb-4">{selectedProject.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="bg-background dark:bg-gray-800/50 rounded-lg px-4 py-3">
                      <p className="text-sm text-muted-foreground">Client</p>
                      <p className="font-medium">{selectedProject.client}</p>
                    </div>
                    <div className="bg-background dark:bg-gray-800/50 rounded-lg px-4 py-3">
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="font-medium">{selectedProject.year}</p>
                    </div>
                    <div className="bg-background dark:bg-gray-800/50 rounded-lg px-4 py-3">
                      <p className="text-sm text-muted-foreground">Category</p>
                      <p className="font-medium">{selectedProject.category}</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Case Study Content */}
          <section className="section bg-background">
            <div className="container-custom max-w-4xl">
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground mb-12">{selectedProject.challenge}</p>
                
                <h2 className="text-3xl font-bold mb-6">The Solution</h2>
                <p className="text-lg text-muted-foreground mb-12">{selectedProject.solution}</p>
                
                <h2 className="text-3xl font-bold mb-6">The Results</h2>
                <p className="text-lg text-muted-foreground mb-12">{selectedProject.results}</p>
              </div>
              
              <div className="text-center mt-12">
                <Button
                  className="rounded-full bg-gradient-to-r from-[#4FD1C5] to-[#AC94F4] text-white hover:opacity-90"
                  size="lg"
                  onClick={() => window.open("https://wa.me/08113662152", "_blank")}
                >
                  Start a Similar Project
                </Button>
              </div>
            </div>
          </section>
        </div>
      ) : (
        // Portfolio Grid View
        <>
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
                          onClick={() => handleCaseStudyClick(project)}
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
              <Button 
                className="rounded-full" 
                size="lg"
                onClick={() => window.open("https://wa.me/08113662152", "_blank")}
              >
                Start a Project
              </Button>
            </div>
          </section>
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Portfolio;
