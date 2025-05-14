
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    price: "$899",
    description: "Perfect for small businesses just getting started",
    features: [
      "Professional website design",
      "Mobile responsive layout",
      "Basic SEO setup",
      "Contact form integration",
      "Social media links"
    ],
    buttonText: "Get Started"
  },
  {
    title: "Professional",
    price: "$1,899",
    description: "Ideal for growing businesses needing a complete solution",
    features: [
      "Everything in Basic",
      "Custom branding elements",
      "Advanced SEO optimization",
      "Content creation (5 pages)",
      "Email marketing setup",
      "Social media integration",
      "1 month of support"
    ],
    buttonText: "Choose Plan",
    popular: true
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For established businesses with complex requirements",
    features: [
      "Everything in Professional",
      "E-commerce functionality",
      "Custom web applications",
      "Comprehensive SEO strategy",
      "Content marketing plan",
      "Dedicated account manager",
      "3 months of priority support"
    ],
    buttonText: "Contact Us"
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-muted dark:bg-gray-900/30 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We offer comprehensive creative solutions to help your business stand out and connect with your audience.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section (using existing component) */}
      <ServicesSection />
      
      {/* Process Section */}
      <section className="section bg-muted dark:bg-gray-900/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-brand-lavender mb-2">OUR PROCESS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our structured approach ensures that every project is delivered on time, 
              on budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="relative">
            {/* Process steps with connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 z-0"></div>
            
            <div className="space-y-16 relative z-10">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <span className="text-sm font-medium text-brand-teal">STEP 1</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">Discovery & Strategy</h3>
                  <p className="text-muted-foreground">
                    We start by understanding your business, goals, target audience, and competitive landscape.
                    This forms the foundation for a strategic approach tailored to your unique needs.
                  </p>
                </div>
                <div className="flex justify-center md:justify-start order-1 md:order-2">
                  <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center relative">
                    <span className="text-xl font-bold text-brand-teal">1</span>
                    <div className="absolute inset-0 rounded-full border-2 border-brand-teal/30 animate-ping"></div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center md:justify-end">
                  <div className="w-16 h-16 rounded-full bg-brand-lavender/10 flex items-center justify-center relative">
                    <span className="text-xl font-bold text-brand-lavender">2</span>
                    <div className="absolute inset-0 rounded-full border-2 border-brand-lavender/30 animate-ping"></div>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-medium text-brand-lavender">STEP 2</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">Creative Exploration</h3>
                  <p className="text-muted-foreground">
                    Our creative team develops concepts and design directions based on the strategy. We 
                    present options, gather feedback, and refine our approach to align with your vision.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <span className="text-sm font-medium text-brand-peach">STEP 3</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">Design & Development</h3>
                  <p className="text-muted-foreground">
                    With an approved direction, we fully develop the creative assets, digital experiences,
                    and technical solutions needed to bring your project to life.
                  </p>
                </div>
                <div className="flex justify-center md:justify-start order-1 md:order-2">
                  <div className="w-16 h-16 rounded-full bg-brand-peach/10 flex items-center justify-center relative">
                    <span className="text-xl font-bold text-brand-peach">3</span>
                    <div className="absolute inset-0 rounded-full border-2 border-brand-peach/30 animate-ping"></div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center md:justify-end">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center relative">
                    <span className="text-xl font-bold text-brand-gold">4</span>
                    <div className="absolute inset-0 rounded-full border-2 border-brand-gold/30 animate-ping"></div>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-medium text-brand-gold">STEP 4</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">Launch & Optimize</h3>
                  <p className="text-muted-foreground">
                    We deploy your project with thorough testing and quality assurance. After launch, 
                    we monitor performance, gather data, and make optimizations for continued success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-brand-lavender mb-2">PRICING</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Choose the plan that fits your business needs, or contact us for a custom solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`overflow-hidden ${plan.popular ? 'ring-2 ring-brand-lavender relative' : 'border border-border'}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-brand-lavender text-white px-4 py-1 text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/project</span>}
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full rounded-lg ${plan.popular ? 'bg-brand-lavender hover:bg-brand-lavender/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom solution for your specific requirements?
            </p>
            <Button variant="outline" className="rounded-full">
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
