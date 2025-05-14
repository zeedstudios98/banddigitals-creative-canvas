
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface DetailedTestimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  projectType: string;
  location: string;
  date: string;
}

const detailedTestimonials: DetailedTestimonial[] = [
  {
    id: 1,
    content: "Working with BandDigitals was transformative for our brand. Their creative vision and strategic approach helped us stand out in a crowded market. The team delivered exceptional results that exceeded our expectations.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "Elevate Tech",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    projectType: "Brand Identity & Website Redesign",
    location: "New York, USA",
    date: "January 2023"
  },
  {
    id: 2,
    content: "BandDigitals brought our vision to life with their incredible design talent. Their attention to detail and understanding of our audience resulted in a website that not only looks beautiful but converts visitors into customers.",
    author: "Michael Chen",
    position: "CEO",
    company: "Horizon Ventures",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    projectType: "E-commerce Website Development",
    location: "Toronto, Canada",
    date: "March 2023"
  },
  {
    id: 3,
    content: "The team at BandDigitals has been instrumental in our digital transformation. Their strategic guidance and creative expertise helped us reimagine our online presence and connect with our audience in meaningful ways.",
    author: "Alexis Rivera",
    position: "Brand Manager",
    company: "Pulse Fitness",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    projectType: "Digital Marketing & UI/UX Design",
    location: "Los Angeles, USA",
    date: "May 2023"
  },
  {
    id: 4,
    content: "I've had a few jobs done via Fiverr. I can genuinely say that this is my first genuine full 5 stars and if I could I would give more, as Band Digital went way and above what I was looking for. Such professionalism. Great communication. Excellent end product. I will definitely recommend and use again.",
    author: "Andy",
    position: "Client",
    company: "United Kingdom",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    projectType: "Ghost Writing & Content Creation",
    location: "United Kingdom",
    date: "October 2023"
  },
  {
    id: 5,
    content: "BandDigitals delivered a stunning website that perfectly captures our brand essence. Their process was smooth and collaborative, and they were responsive to all our feedback. The final product has significantly improved our online presence.",
    author: "Emma Thompson",
    position: "Owner",
    company: "Artisan Bakery",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5,
    projectType: "Small Business Website",
    location: "Melbourne, Australia",
    date: "April 2023"
  },
  {
    id: 6,
    content: "Working with BandDigitals on our app UI/UX redesign was an excellent experience. They took the time to understand our users' needs and created an intuitive, engaging interface that has significantly improved user satisfaction and retention.",
    author: "David Rodriguez",
    position: "Product Manager",
    company: "FinTech Solutions",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
    projectType: "Mobile App UI/UX Redesign",
    location: "Berlin, Germany",
    date: "June 2023"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-muted dark:bg-gray-900/30 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Client <span className="text-gradient-gold">Testimonials</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Don't take our word for it. Here's what our clients have to say about working with BandDigitals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Testimonial (using existing component) */}
      <TestimonialsSection />
      
      {/* All Testimonials Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-brand-lavender mb-2">CLIENT REVIEWS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success Stories from Our <span className="text-gradient">Clients</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Read what clients across different industries have to say about their experience working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="overflow-hidden border border-border">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-brand-lavender/20" />
                  </div>
                  
                  <p className="text-lg mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Project Type</p>
                        <p className="text-muted-foreground">{testimonial.projectType}</p>
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-brand-navy/10 to-brand-lavender/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become Our Next Success Story?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss how we can help your business grow.
          </p>
          <Button className="rounded-full" size="lg">
            Start Your Project
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
