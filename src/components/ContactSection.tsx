
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-b from-muted to-background dark:from-gray-900/30 dark:to-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-brand-lavender mb-2">GET IN TOUCH</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Next Project</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you have a question about our services, pricing, or just want to chat about your project,
              we're here to help you build something amazing.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-lavender/10 p-3 rounded-full text-brand-lavender">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Our Location</h3>
                  <p className="text-muted-foreground">
                    123 Creative Avenue, Design District<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-lavender/10 p-3 rounded-full text-brand-lavender">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-muted-foreground">
                    hello@banddigitals.com<br />
                    support@banddigitals.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-lavender/10 p-3 rounded-full text-brand-lavender">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-muted-foreground">
                    +1 (555) 234-5678<br />
                    Monday-Friday, 9am-6pm PST
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="rounded-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Project Inquiry" 
                    className="rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    className="rounded-lg min-h-[150px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-brand-teal to-brand-lavender hover:opacity-90 transition-opacity text-white rounded-full py-6">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
