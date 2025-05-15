
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Working with this talented freelancer was transformative for my brand. The creative vision and strategic approach helped my business stand out in a crowded market. The work delivered exceeded my expectations in every way.",
    author: "Sarah Johnson",
    position: "Owner",
    company: "Elevate Tech",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "My vision was brought to life with incredible design talent. The attention to detail and understanding of my audience resulted in a website that not only looks beautiful but has significantly increased my conversion rate.",
    author: "Michael Chen",
    position: "Entrepreneur",
    company: "Horizon Ventures",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "I received instrumental guidance in my digital transformation. The strategic expertise and creative solutions helped me reimagine my online presence and connect with my audience in meaningful ways.",
    author: "Alexis Rivera",
    position: "Brand Manager",
    company: "Pulse Fitness",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    id: 4,
    content: "I've had several freelancers work on projects for me, but this was my first genuine full 5-star experience. The level of professionalism, communication, and quality of the end product went way beyond what I was expecting. I'll definitely be a returning client.",
    author: "Andy",
    position: "Business Owner",
    company: "United Kingdom",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-gradient-to-b from-background to-muted dark:from-background dark:to-gray-900/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-[#AC94F4] mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F8CD57] to-[#FFB88C]">Clients</span> Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't take my word for it. Hear directly from clients who have experienced 
            the impact of my creative solutions on their businesses.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Quote className="absolute top-0 left-0 h-16 w-16 text-[#AC94F4]/20 -translate-x-1/2 -translate-y-1/2" />
          
          <Card className="border-0 shadow-xl bg-card">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Current testimonial */}
                <div className="animate-fade-in">
                  <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                    {testimonials[currentIndex].content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <img 
                          src={testimonials[currentIndex].avatar} 
                          alt={testimonials[currentIndex].author}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonials[currentIndex].author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#F8CD57] text-[#F8CD57]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  currentIndex === idx 
                    ? "bg-[#AC94F4] w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 -mx-12">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
