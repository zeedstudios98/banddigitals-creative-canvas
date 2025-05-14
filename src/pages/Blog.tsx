
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Calendar, ArrowRight, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Web Design Trends That Will Dominate in 2023",
    excerpt: "Explore the cutting-edge design trends that are shaping the digital landscape and how you can implement them in your projects.",
    category: "Web Design",
    date: "May 15, 2023",
    author: "Sarah Johnson",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "The Psychology of Color in Branding: Choosing the Right Palette",
    excerpt: "Understand how color influences consumer perception and how to select the perfect color scheme for your brand identity.",
    category: "Branding",
    date: "April 22, 2023",
    author: "Michael Chen",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "User-Centered Design: Creating Experiences That Convert",
    excerpt: "Learn how to design digital experiences that not only delight users but also drive meaningful business results.",
    category: "UI/UX",
    date: "March 18, 2023",
    author: "Alexis Rivera",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Content-First Design: Why Your Words Matter More Than Ever",
    excerpt: "Discover why starting with content strategy leads to more effective design solutions and better user experiences.",
    category: "Content Strategy",
    date: "February 11, 2023",
    author: "James Wilson",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "The Future of E-Commerce: Trends and Technologies",
    excerpt: "Explore the innovations that are reshaping online shopping experiences and how businesses can stay ahead of the curve.",
    category: "E-Commerce",
    date: "January 29, 2023",
    author: "Emily Rodriguez",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Crafting Compelling Brand Stories: Connecting with Your Audience",
    excerpt: "Learn how to develop authentic brand narratives that resonate with your target audience and build lasting connections.",
    category: "Branding",
    date: "December 15, 2022",
    author: "David Thompson",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop",
  }
];

const categories = ["All", "Web Design", "Branding", "UI/UX", "Content Strategy", "E-Commerce"];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const featuredPost = blogPosts.find(post => post.featured);
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-muted dark:bg-gray-900/30 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Insights, trends, and tips from our team of creative experts to help you excel in the digital world.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      {featuredPost && (
        <section className="section bg-background pt-0">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-[500px] object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                <span className="inline-block px-3 py-1 bg-brand-lavender text-white rounded-full text-xs font-medium mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-3xl">
                  {featuredPost.title}
                </h2>
                <p className="text-white/80 mb-6 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-white/70 text-sm mb-6">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" /> {featuredPost.date}
                  </span>
                  <span className="mx-3">•</span>
                  <span>{featuredPost.author}</span>
                  <span className="mx-3">•</span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" /> {featuredPost.readTime}
                  </span>
                </div>
                <Button className="bg-white text-black hover:bg-white/90 rounded-full">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Blog Filtering */}
      <section className="section py-12 bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                    activeCategory === category
                      ? 'bg-brand-lavender text-white'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 rounded-full bg-muted border-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <span className="px-2.5 py-0.5 bg-brand-lavender/10 text-brand-lavender rounded-full mr-3">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" /> {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm">{post.author}</span>
                    <span className="text-sm flex items-center text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 mr-1.5" /> {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No articles found matching your criteria.
              </p>
              <Button 
                variant="outline" 
                className="mt-4 rounded-full"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
          
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" className="rounded-full">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section bg-gradient-to-r from-brand-navy/10 to-brand-lavender/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest industry insights, trends, and tips delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="rounded-full flex-1"
              />
              <Button className="rounded-full whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
