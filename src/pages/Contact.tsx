
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-muted dark:bg-gray-900/30 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear from you. Reach out to discuss 
              how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Contact Section (using existing component) */}
      <ContactSection />
      
      {/* Map Section */}
      <section className="section bg-background py-0 pb-20">
        <div className="container-custom">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="aspect-[16/9] w-full">
              <div className="relative w-full h-full bg-muted">
                {/* This is where you would integrate Google Maps */}
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-brand-lavender/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Google Maps would be embedded here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-muted dark:bg-gray-900/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-brand-lavender mb-2">FAQS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our process, services, and working together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">How do you charge for projects?</h3>
              <p className="text-muted-foreground">
                We primarily work on a fixed-price project basis, determined after understanding 
                your specific requirements. For ongoing work, we offer monthly retainer options. 
                We provide detailed proposals with transparent pricing before any work begins.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">How long does a typical project take?</h3>
              <p className="text-muted-foreground">
                Project timelines vary depending on scope and complexity. A basic website might take 
                4-6 weeks, while more complex projects can take 2-3 months. During our initial 
                consultation, we'll provide a timeline estimate specific to your project.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">What's your revision policy?</h3>
              <p className="text-muted-foreground">
                Our project quotes include two rounds of revisions. We work closely with you 
                throughout the process to ensure we're aligned with your vision, minimizing the 
                need for extensive revisions. Additional revision rounds can be arranged at an hourly rate.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">Do you offer ongoing support?</h3>
              <p className="text-muted-foreground">
                Yes, we offer various maintenance and support packages to keep your digital 
                presence running smoothly after launch. These range from basic hosting and 
                security updates to comprehensive content management and optimization services.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
