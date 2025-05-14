
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/2348113662152?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

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
              I'm here to help you build something amazing.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-lavender/10 p-3 rounded-full text-brand-lavender">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">My Location</h3>
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
                  <h3 className="font-medium mb-1">Email Me</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:banddigitals@gmail.com" className="hover:text-brand-lavender transition-colors">banddigitals@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-lavender/10 p-3 rounded-full text-brand-lavender">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call Me</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+2348113662152" className="hover:text-brand-lavender transition-colors">+234 811 366 2152</a><br />
                    Monday-Friday, 9am-6pm WAT
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="rounded-lg"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
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
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    className="rounded-lg min-h-[150px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-brand-teal to-brand-lavender hover:opacity-90 transition-opacity text-white rounded-full py-6"
                >
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
